import type { LucideIcon } from 'lucide-react'

type SectionHeadingProps = {
  /** Aceptado por compatibilidad; no se renderiza (estilo minimal). */
  icon?: LucideIcon
  title: string
  /** Aceptado por compatibilidad; no se renderiza. */
  eyebrow?: string
  /** Contenido opcional alineado a la derecha (filtros, "ver todas", etc.). */
  action?: React.ReactNode
  className?: string
}

/**
 * Encabezado de sección minimalista (estilo Apple): título limpio en semibold
 * con tracking ajustado y un slot opcional de acción a la derecha.
 */
export default function SectionHeading({ title, action, className }: SectionHeadingProps) {
  return (
    <div className={`mb-8 flex flex-wrap items-end justify-between gap-4 ${className ?? ''}`}>
      <h2 className="font-display text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
        {title}
      </h2>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  )
}
