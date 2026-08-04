export function EraComparisonColumn({
  label,
  title,
  description,
  emphasized = false,
}: {
  label: string
  title: string
  description: string
  emphasized?: boolean
}) {
  return (
    <div
      className={`corner-bracket rounded-lg border p-6 sm:p-8 flex-1 ${
        emphasized ? 'bg-teal/8 border-teal' : 'bg-surface border-rule'
      }`}
    >
      <div className={`font-mono text-[11px] uppercase tracking-[0.08em] ${emphasized ? 'text-teal' : 'text-muted-dim'}`}>
        {label}
      </div>
      <div className={`mt-3 font-serif text-[24px] sm:text-[28px] font-semibold ${emphasized ? 'text-amber' : 'text-fg/70'}`}>
        {title}
      </div>
      <p className="mt-3 text-[13.5px] leading-relaxed text-muted">{description}</p>
    </div>
  )
}
