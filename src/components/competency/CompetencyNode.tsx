import type { Competency } from '../../content/types'
import { useLocale } from '../../i18n/LocaleContext'
import { getCompetencyProjectCount } from '../../content'

export function CompetencyNode({
  competency,
  active,
  onClick,
}: {
  competency: Competency
  active: boolean
  onClick: () => void
}) {
  const { t, strings } = useLocale()
  const count = getCompetencyProjectCount(competency.id)

  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`corner-bracket group text-left rounded-lg border p-4 sm:p-5 transition-colors ${
        active ? 'bg-teal/10 border-teal' : 'bg-surface border-rule hover:border-teal-dim'
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <span className={`font-mono text-[13px] ${active ? 'text-teal' : 'text-muted-dim'}`}>
          {String(competency.index).padStart(2, '0')}
        </span>
        <span
          className={`font-mono text-[10px] px-1.5 py-0.5 rounded-full border ${
            count > 0
              ? active
                ? 'border-teal text-teal'
                : 'border-rule text-muted-dim group-hover:border-teal-dim'
              : 'border-rule text-muted-dim/60'
          }`}
        >
          {strings.competencyMatrix.projectCount(count)}
        </span>
      </div>
      <div className="mt-3 font-sans text-[14.5px] font-semibold text-fg leading-snug">{t(competency.name)}</div>
      <p className="mt-2 text-[12.5px] leading-relaxed text-muted line-clamp-3">{t(competency.definition)}</p>
    </button>
  )
}
