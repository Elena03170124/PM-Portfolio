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
      className={`rounded-[3px] border p-6 sm:p-8 flex-1 ${
        emphasized ? 'bg-accent/8 border-accent' : 'bg-surface border-rule'
      }`}
    >
      <div className={`font-mono text-[11px] uppercase tracking-[0.08em] ${emphasized ? 'text-accent' : 'text-muted-dim'}`}>
        {label}
      </div>
      <div className={`mt-3 font-serif text-[24px] sm:text-[28px] font-semibold ${emphasized ? 'text-accent' : 'text-ink/70'}`}>
        {title}
      </div>
      <p className="mt-3 text-[13.5px] leading-relaxed text-muted">{description}</p>
    </div>
  )
}
