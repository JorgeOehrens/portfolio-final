import type { LucideIcon } from 'lucide-react'

type SectionHeadingProps = {
  icon: LucideIcon
  title: string
  /** Contenido opcional alineado a la derecha (filtros, "ver todas", etc.). */
  action?: React.ReactNode
  className?: string
}

/**
 * Encabezado de sección reutilizable: icono lucide en acento + título en
 * fuente display, con un slot opcional de acción a la derecha.
 */
export default function SectionHeading({ icon: Icon, title, action, className }: SectionHeadingProps) {
  return (
    <div className={`mb-6 flex items-center justify-between gap-4 ${className ?? ''}`}>
      <h2 className="flex items-center gap-3 font-display text-2xl font-bold tracking-tight">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
          <Icon className="h-5 w-5" strokeWidth={2.25} />
        </span>
        {title}
      </h2>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  )
}
