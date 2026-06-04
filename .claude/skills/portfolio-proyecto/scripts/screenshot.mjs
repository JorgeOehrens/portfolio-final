#!/usr/bin/env node
/**
 * screenshot.mjs — captura una URL y la guarda como PNG en public/projects/.
 *
 * Uso:
 *   node screenshot.mjs <url> <slug> [--wait <ms>] [--full] [--mobile]
 *
 *   <url>      URL a capturar (http/https)
 *   <slug>     nombre base del archivo (kebab-case), sin extensión
 *   --wait N   espera extra en ms tras cargar (default 2500)
 *   --full     captura la página completa (default: solo viewport)
 *   --mobile   viewport vertical tipo iPhone -> public/projects/<slug>-mobile.png
 *
 * Salida:
 *   public/projects/<slug>.png            (desktop, 1280x720, 16:9)
 *   public/projects/<slug>-mobile.png     (mobile, 390x844, vertical)
 */

import { chromium } from 'playwright'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { mkdirSync } from 'node:fs'

const __dirname = dirname(fileURLToPath(import.meta.url))
// scripts/ -> portfolio-proyecto/ -> skills/ -> .claude/ -> repo root
const REPO_ROOT = resolve(__dirname, '..', '..', '..', '..')
const OUT_DIR = resolve(REPO_ROOT, 'public', 'projects')

function parseArgs(argv) {
  const positional = []
  const opts = { wait: 2500, full: false, mobile: false }
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]
    if (a === '--full') opts.full = true
    else if (a === '--mobile') opts.mobile = true
    else if (a === '--wait') opts.wait = parseInt(argv[++i], 10) || 2500
    else positional.push(a)
  }
  opts.url = positional[0]
  opts.slug = positional[1]
  return opts
}

const opts = parseArgs(process.argv.slice(2))

if (!opts.url || !opts.slug) {
  console.error('Uso: node screenshot.mjs <url> <slug> [--wait <ms>] [--full] [--mobile]')
  process.exit(2)
}
if (!/^https?:\/\//.test(opts.url)) {
  console.error(`URL inválida (debe empezar con http/https): ${opts.url}`)
  process.exit(2)
}

const fileName = opts.mobile ? `${opts.slug}-mobile.png` : `${opts.slug}.png`
const outPath = resolve(OUT_DIR, fileName)

const viewport = opts.mobile
  ? { width: 390, height: 844 }
  : { width: 1280, height: 720 }

mkdirSync(OUT_DIR, { recursive: true })

const browser = await chromium.launch()
const context = await browser.newContext({
  viewport,
  deviceScaleFactor: opts.mobile ? 3 : 2,
  isMobile: opts.mobile,
  hasTouch: opts.mobile,
  userAgent: opts.mobile
    ? 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'
    : undefined,
})
const page = await context.newPage()

try {
  try {
    await page.goto(opts.url, { waitUntil: 'networkidle', timeout: 30000 })
  } catch {
    // Algunos sitios nunca llegan a networkidle (polling, websockets, analytics).
    await page.goto(opts.url, { waitUntil: 'domcontentloaded', timeout: 30000 })
  }
  await page.waitForTimeout(opts.wait)

  await page.screenshot({ path: outPath, fullPage: opts.full })

  console.log(`✓ ${outPath}`)
  console.log(`  viewport: ${viewport.width}x${viewport.height}${opts.full ? ' (full page)' : ''}${opts.mobile ? ' [mobile]' : ''}`)
  console.log(`  public path: /projects/${fileName}`)
} catch (err) {
  console.error(`✗ Error capturando ${opts.url}: ${err.message}`)
  process.exitCode = 1
} finally {
  await browser.close()
}
