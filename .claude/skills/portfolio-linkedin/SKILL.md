---
name: portfolio-linkedin
description: Renueva el contenido del portafolio desde LinkedIn. Trae perfil, experiencia y posts reales vía agentcash (pago en USDC), reescribe experiencia/about/skills con tono más senior SIN cambiar el título, y genera entradas de blog desde tus publicaciones de LinkedIn. Uso: /portfolio-linkedin [url-de-linkedin]
version: 1.0.0
---

# Portfolio LinkedIn

**Siempre en español.** Esta skill actualiza el contenido del portafolio (`portfolio-final`) a partir de un perfil de **LinkedIn**. Trae datos reales (perfil + experiencia + posts) usando **agentcash** (APIs de pago por request en USDC) y reescribe el contenido del sitio con un tono **más senior**, sin inventar datos.

LinkedIn **no se puede scrapear directo** (login), por eso se usa agentcash. Cada corrida implica una llamada de pago (~$0.05–0.30 USDC).

## Constantes

```
LINKEDIN_URL  = https://www.linkedin.com/in/jorge-oehrens/   # default si no se pasa argumento
POSTS_FILE    = app/data/posts.ts            # fuente única de blog posts
BLOG_IMG_DIR  = public/blog/                 # imágenes de los posts (<slug>.jpg)
CACHE_DIR     = .claude/skills/portfolio-linkedin/cache/   # JSON crudo (gitignored)

# API primaria (perfil + experiencia + educación + POSTS, por URL):
API_LINKEDIN  = https://hirescrape.com/api/tools/linkedin   # ~$0.05/registro, POST
# Respaldo SOLO perfil/experiencia/educación (no trae posts):
API_FALLBACK  = https://stableenrich.dev/api/minerva/enrich # ~$0.05, POST, lookup por LinkedIn URL
```

### Notas de fuentes (estado verificado 2026-06 — releer antes de gastar)
- **hirescrape `/api/tools/linkedin`**: su handshake de pago **x402 está roto** vía agentcash (`parse_payment_required`). No usable por ahora; reintentar a futuro.
- **minerva/enrich**: es un data broker **centrado en EE.UU.**; un perfil chileno/early-career devuelve `is_match: false` (igual cobra ~$0.05). Poco útil para perfiles LATAM.
- **clado `/clado/linkedin-profile`** (`clado.mpp.paywithlocus.com`, $0.013, mpp): específico de LinkedIn (mejor cobertura intl.), pero visto **502 Bad Gateway** (upstream caído). Reintentar; es el candidato preferido cuando esté arriba.
- **linkedpanda** (`api.linkedpanda.com`, $0.05, x402): no probado; x402 puede chocar con el mismo bug que hirescrape.
- **Fallback sin API**: si todas fallan, pedir al usuario que **exporte su LinkedIn** (Más → Guardar como PDF) o pegue el texto, y redactar el contenido desde ahí (cero costo, 100% fiable).

**Archivos de contenido del sitio (todos TS/TSX hardcodeado, sin DB):**

| Sección | Archivo | Qué editar |
|---|---|---|
| About / headline / bio | `app/components/profile.tsx` | nombre, rol, ubicación, idiomas, educación. **Mantener "Software Engineer"** (no cambiar a Senior). |
| SEO meta | `app/layout.tsx` | `title` / `description` |
| Experiencia laboral | `app/components/certificates.tsx` | array de cargos (`{id, title, issuer, date, image?}` + descripción). Está mal etiquetado como "testimonials". |
| Skills / stack | `app/components/work-process.tsx` | objetos `{icon, titleEn, titleEs}` |
| Posts / blog | `app/data/posts.ts` | array `blogPosts` (`{id, title, excerpt, content, date, image, tags, link?, slug?}`) |
| Stats | `app/components/stats.tsx` | ⚠️ "repos" salen de GitHub, NO de LinkedIn. Solo tocar "años de experiencia" si LinkedIn lo respalda. |
| Certificados | `app/components/certificates-viewer.tsx` | ⚠️ dependen de PDFs en `/public/certificates/`. NO agregar entradas sin su PDF real. |
| Títulos académicos | `app/components/degrees-viewer.tsx` | ⚠️ dependen de PDFs en `/public/degrees/`. NO agregar sin PDF real. |

## Uso

```
/portfolio-linkedin                                  # usa LINKEDIN_URL por defecto
/portfolio-linkedin https://www.linkedin.com/in/otro/ # otra persona/perfil
```

## Reglas de tono (IMPORTANTE)

Decisión del usuario: **"reforzar sin cambiar el título"**.
- **Conservar** el título "Software Engineer" en `profile.tsx` y `layout.tsx`. No poner "Senior".
- Reescribir experiencia y bio en **español**, con **verbos de impacto** (lideré, diseñé, escalé, implementé, optimicé), **alcance** (equipos, usuarios, sistemas) y **resultados**.
- **No fabricar**: cada cargo, fecha, métrica, certificado o post debe rastrear a un dato real del JSON de LinkedIn cacheado. Si LinkedIn no da un número, no inventarlo.
- No tocar `stats.tsx` (repos = GitHub), ni los viewers de certificados/títulos salvo que exista el PDF real en `/public`.
- Mantener emojis/estilo del sitio en los posts (el contenido actual los usa).

## Flujo de ejecución

### 1. Verificar saldo
```
mcp__agentcash__get_balance
```
Si el balance es ~0 o insuficiente: `mcp__agentcash__list_accounts`, mostrar el link de depósito (y `onboardingCta` si aparece) y **detener**.

### 2. Confirmar el esquema del endpoint (obligatorio la 1ª vez en la sesión)
```
mcp__agentcash__check_endpoint_schema  url=https://hirescrape.com/api/tools/linkedin  method=POST
```
Esto evita errores 400 por nombres de campo equivocados. Identificar el modo/param para **perfil** y para **posts** (la API soporta varios modos: profile, posts, etc.).

### 3. Traer los datos (pago)
Usar `mcp__agentcash__fetch` (maneja SIWX y pago automáticamente):
```
mcp__agentcash__fetch  method=POST  url=https://hirescrape.com/api/tools/linkedin
  body={ ...perfil por LINKEDIN_URL... }   maxAmount=1
mcp__agentcash__fetch  method=POST  url=https://hirescrape.com/api/tools/linkedin
  body={ ...posts por LINKEDIN_URL... }    maxAmount=1
```
- Si la respuesta es asíncrona (devuelve `jobId`/`pollUrl`/`status: pending`): **no repetir el POST de pago**; pollear el job (GET con SIWX) cada 3–5 s hasta `finished`/`failed`.
- Guardar el JSON crudo en `CACHE_DIR` (`profile.json`, `posts.json`) para trazabilidad. Crear el dir si no existe.
- Si hirescrape falla para el perfil → respaldo `API_FALLBACK` (minerva/enrich) para experiencia/educación. Si tampoco hay posts → ver paso 6 (avisar y omitir generación de posts).

### 4. Parsear
Extraer de los JSON:
- **Perfil**: headline, ubicación, sobre/about, idiomas.
- **Experiencia**: empresa, cargo, fechas, descripción/logros.
- **Educación** y **skills**.
- **Posts**: texto, fecha, URL del post, URL de imagen (si tiene).

### 5. Redactar (aplicando reglas de tono)
- Reescribir cada cargo de experiencia para `certificates.tsx` (ES, senior, verídico).
- Reescribir headline/about para `profile.tsx` + `layout.tsx` (manteniendo "Software Engineer").
- Mapear skills a `work-process.tsx` (`titleEn`/`titleEs`), sin duplicar las ya existentes.

### 6. Generar posts de blog
Para cada post de LinkedIn seleccionado:
1. **id**: leer `app/data/posts.ts`, usar `max(id)+1` incremental.
2. **slug**: kebab-case desde el título.
3. **Imagen**:
   - Si el post trae imagen → descargarla a `public/blog/<slug>.jpg`:
     ```bash
     curl -fsSL "<image-url>" -o public/blog/<slug>.jpg
     ```
   - Si no trae imagen → reutilizar una imagen existente de `public/blog/` como default (no usar `/placeholder.svg`, que rompe el layout).
4. **Redactar** `title`, `excerpt` (1–2 frases) y `content` (texto adaptado del post, en español), `date` (`YYYY-MM`), `tags` (del tema del post), `link` (URL del post).
5. Insertar la entrada en el array `blogPosts` de `POSTS_FILE`.

Si **no hubo posts** disponibles: avisar al usuario, omitir esta sección y continuar solo con experiencia/about/skills.

### 7. Preview + aplicar
Mostrar una **tabla por sección** con antes → después (about, experiencia, skills, posts nuevos). Aplicar las ediciones a los archivos.

### 8. Verificar
```bash
npx tsc --noEmit
```
Si pasa, ofrecer `npm run dev` para revisar el sitio (home + `/blog`).

## Casos borde
- **Saldo 0 / pago fallido**: detener y mostrar link de fondeo (`list_accounts`). Si el POST inicial devuelve no-2xx, el pago NO se cobró.
- **Perfil sin posts**: solo actualizar experiencia/about/skills y avisar.
- **Post sin imagen**: usar una imagen default de `public/blog/`, nunca `/placeholder.svg`.
- **Datos ambiguos o faltantes**: preguntar antes de inventar. Nunca rellenar fechas/métricas/certificados con datos falsos.
- **Certificados/títulos**: solo agregar si existe el PDF real en `/public/certificates/` o `/public/degrees/`.
- **No duplicar** experiencias/posts que ya estén en los archivos (cotejar por título/empresa/fecha).
- **Idioma**: el contenido del sitio va hardcodeado en español; los labels de UI ya están en `app/utils/translations.ts` (no hace falta tocarlos).
