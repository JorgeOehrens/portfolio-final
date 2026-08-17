type SectionHeadingProps = {
  /** Etiqueta mono uppercase sobre el título (p. ej. "PORTFOLIO"). */
  eyebrow?: string
  title: string
  /** Subtítulo alineado a la derecha, estilo referencia. */
  subtitle?: string
  /** Contenido opcional alineado a la derecha (filtros, "ver todas", etc.). */
  action?: React.ReactNode
  className?: string
}

/**
 * Encabezado de sección estilo tsirakis: eyebrow mono + título enorme en
 * Bricolage + subtítulo/acción a la derecha, con línea divisoria inferior.
 */
export default function SectionHeading({ eyebrow, title, subtitle, action, className }: SectionHeadingProps) {
  return (
    <div className={`mb-10 border-b border-border pb-6 ${className ?? ''}`}>
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-display text-4xl font-semibold tracking-[-0.03em] sm:text-6xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="max-w-xs pb-1 text-sm leading-relaxed text-muted-foreground sm:text-right">
            {subtitle}
          </p>
        ) : null}
        {action ? <div className="shrink-0 pb-1">{action}</div> : null}
      </div>
    </div>
  )
}
