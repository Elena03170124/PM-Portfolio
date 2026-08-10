import type { Company } from '../../content/types'

export function CompanyBadge({ company, label }: { company: Company; label: string }) {
  const isSouthone = company === 'southone'
  return (
    <span
      className={`font-mono text-[10.5px] uppercase tracking-[0.05em] px-2 py-1 rounded border ${
        isSouthone ? 'border-accent-dim text-accent' : 'border-rule text-muted'
      }`}
    >
      {label}
    </span>
  )
}
