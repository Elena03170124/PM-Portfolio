import type { Competency } from '../../content/types'
import { useLocale } from '../../i18n/LocaleContext'
import { getCompetencyProjectCount } from '../../content'

// Placeholder section, not yet wired to real filtering — rendered flat and
// grey so it doesn't read as clickable.
export function CompetencyNode({ competency }: { competency: Competency }) {
  const { t, strings } = useLocale()
  const count = getCompetencyProjectCount(competency.id)

  return (
    <div className="rounded-[3px] border border-rule bg-disabled p-4 sm:p-5">
      <div className="flex items-start justify-between gap-2">
        <span className="font-mono text-[13px] text-muted-dim">{String(competency.index).padStart(2, '0')}</span>
        <span className="font-mono text-[10px] px-1.5 py-0.5 rounded-full border border-rule text-muted-dim/60">
          {strings.competencyMatrix.projectCount(count)}
        </span>
      </div>
      <div className="mt-3 font-serif text-[14.5px] font-semibold text-muted leading-snug">{t(competency.name)}</div>
      <p className="mt-2 text-[12.5px] leading-relaxed text-muted-dim line-clamp-3">{t(competency.definition)}</p>
    </div>
  )
}
