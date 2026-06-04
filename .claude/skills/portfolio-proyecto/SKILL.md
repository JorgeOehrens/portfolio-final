---
name: portfolio-proyecto
description: Agrega proyectos al portafolio a partir de un link. Toma screenshot automático con Playwright, navega el sitio (y su GitHub si tiene) para redactar título/descripción/tecnologías, y agrega la entrada al data file. Soporta apps móviles (captura vertical) y links de tienda. Uso: /portfolio-proyecto <url> [más urls...]
version: 1.0.0
---

# Portfolio Proyecto

**Siempre en español.** Esta skill automatiza agregar proyectos al portafolio (`portfolio-final`). El usuario entrega **links** y la skill hace el resto: captura, redacción y edición del código.

## Constantes

```
DATA_FILE   = app/data/projects.ts        # fuente única de proyectos
SCRIPT      = .claude/skills/portfolio-proyecto/scripts/screenshot.mjs
OUT_DIR     = public/projects/            # ahí se guardan los PNG/MP4
CATEGORIES  = web | app | blockchain      # las únicas válidas, no inventar otras
```

Atajo npm: `npm run shot <url> <slug>` (flags tras `--`, ej. `npm run shot <url> <slug> -- --mobile`).
O directo: `node .claude/skills/portfolio-proyecto/scripts/screenshot.mjs <url> <slug> --mobile`.

## Uso

```
/portfolio-proyecto https://misitio.com
/portfolio-proyecto https://misitio.com https://github.com/user/repo
/portfolio-proyecto https://apps.apple.com/...   ← app móvil
/portfolio-proyecto https://misitio.com   (+ adjunta video: public/projects/x.mp4)
```

Se pueden pasar varios links a la vez. Si varios links son del **mismo proyecto** (sitio + repo + tienda), agrúpalos en una sola entrada.

## Flujo de ejecución

### 1. Clasificar los links de entrada
Para cada link, detectar el tipo:
- **GitHub** → contiene `github.com/`
- **Tienda** → `apps.apple.com` o `play.google.com` (⇒ app móvil, `category: 'app'`)
- **Sitio web** → cualquier otro http/https

Agrupar por proyecto. Anotar videos provistos por el usuario (rutas en `public/projects/`).

### 2. Verificar dependencias
```bash
node -e "require.resolve('playwright')" 2>/dev/null || (npm i -D playwright && npx playwright install chromium)
```
(Playwright + Chromium normalmente ya están instalados.)

### 3. Por cada proyecto
1. **Slug**: derivar kebab-case desde el hostname o el repo (ej. `mi-sitio`, `user-repo`). Si ya existe `public/projects/<slug>.png`, agregar sufijo numérico.

2. **Captura desktop**:
   ```bash
   npm run shot <url-del-sitio> <slug>
   ```
   Si NO hay sitio web (solo tienda), capturar la ficha de la tienda como fallback.

3. **Captura móvil** (si es app móvil o el usuario lo pide):
   ```bash
   npm run shot <url> <slug> -- --mobile
   ```
   Genera `public/projects/<slug>-mobile.png` (vertical). (El `--` es necesario para que npm pase el flag al script.)

4. **Revisar GitHub** (si hay repo) — tómate el tiempo de entenderlo:
   - Preferir `gh` CLI si está disponible:
     ```bash
     gh repo view <owner/repo> --json description,primaryLanguage,languages,repositoryTopics,homepageUrl
     gh api repos/<owner/repo>/readme -H "Accept: application/vnd.github.raw" 2>/dev/null | head -c 4000
     ```
   - Fallback: **WebFetch** del README en `https://github.com/<owner/repo>`.
   - Usar la descripción real + lenguajes/topics/deps para enriquecer `description` y `technologies`.
   - Si el repo es privado y `gh` no tiene acceso → omitir enriquecimiento y avisar.

5. **Entender el sitio**: **WebFetch** de la URL para redactar en español:
   - `title` — nombre claro del proyecto.
   - `description` — 1-2 frases, qué es y qué hace.
   - `category` — `web` | `app` | `blockchain` (apps móviles → `app`).
   - `technologies` — stack inferido (cruzar con datos de GitHub si los hay).

6. **Revisar la captura**: usar **Read** sobre el/los PNG generados para:
   - afinar la descripción con lo que se ve,
   - verificar que la captura sirve (no es muro de cookies, error 404, o pantalla de login).
   - Si la captura quedó mal: reintentar con `--wait 5000`, o avisar y pedir imagen manual.

### 4. Calcular el id
Leer `app/data/projects.ts`, tomar el `id` máximo y usar `max + 1` (incrementando por cada proyecto nuevo).

### 5. Agregar al data file
Insertar la(s) entrada(s) al final del array `projects` en `app/data/projects.ts`:
```ts
{
  id: <n>,
  title: "...",
  description: "...",
  category: 'web' | 'app' | 'blockchain',
  image: "/projects/<slug>.png",
  // opcionales según corresponda:
  mobileImage: "/projects/<slug>-mobile.png",
  video: "/projects/<archivo>.mp4",
  link: "<url-del-sitio>",
  github: "<url-del-repo>",
  appStore: "<url-de-la-tienda>",
  technologies: ['...'],
}
```
Solo incluir los campos opcionales que apliquen. El modal en `project-grid.tsx` muestra automáticamente los botones de GitHub / Descargar app cuando esos campos existen.

### 6. Resumen y verificación
- Mostrar una **tabla** con cada proyecto agregado (título, descripción, categoría, tecnologías, imagen, links) para que el usuario revise y ajuste.
- Ofrecer correr `npm run dev` para ver el resultado en la grilla.

## Casos borde
- **Login requerido**: no se puede capturar → avisar y pedir imagen manual a `public/projects/<slug>.png`.
- **Banner de cookies tapando todo**: reintentar con `--wait 5000`.
- **Categorías**: solo `web` / `app` / `blockchain`. No crear nuevas.
- **Repo privado sin acceso `gh`**: omitir enriquecimiento desde GitHub, redactar solo con el sitio.
- **App solo en tienda (sin web pública)**: capturar la ficha de la tienda + `--mobile`, `category: 'app'`, guardar `appStore`.
- **Videos**: la skill no genera videos; si el usuario quiere demo, deja el `.mp4`/`.mov` en `public/projects/` y se referencia en `video`.
