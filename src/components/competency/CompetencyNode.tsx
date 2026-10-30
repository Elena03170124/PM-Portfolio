import type { Competency } from '../../content/types'
import { useLocale } from '../../i18n/LocaleContext'
import { getCompetencyProjectCount } from '../../content'

// Nodes whose page exists link to it; the rest stay flat and grey so they don't
// read as clickable.
export function CompetencyNode({ competency, href, updating }: { competency: Competency; href?: string; updating?: boolean }) {
  const { t, strings } = useLocale()
  const count = getCompetencyProjectCount(competency.id)

  const body = (
    <>
      <div className="flex items-start justify-between gap-2">
        <span className={`font-mono text-[13px] ${href ? 'text-accent' : 'text-muted-dim'}`}>
          {String(competency.index).padStart(2, '0')}
        </span>
        <span
          className={`font-mono text-[10px] px-1.5 py-0.5 rounded-full border ${
            href ? 'border-accent-dim/60 text-accent' : 'border-rule text-muted-dim/60'
          }`}
        >
          {strings.competencyMatrix.projectCount(count)}
        </span>
      </div>
      <div className={`mt-3 font-serif text-[14.5px] font-semibold leading-snug ${href ? 'text-ink' : 'text-muted'}`}>
        {t(competency.name)}
      </div>
      <p className={`mt-2 text-[12.5px] leading-relaxed line-clamp-3 ${href ? 'text-muted' : 'text-muted-dim'}`}>
        {t(competency.definition)}
      </p>
      {updating && (
        <p className="mt-3 font-mono text-[11px] text-accent">{t({ zh: '持續更新中', en: 'Updating' })}</p>
      )}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className="block rounded-[3px] border border-rule bg-surface p-4 transition-colors hover:border-accent-dim sm:p-5"
      >
        {body}
      </a>
    )
  }

  return <div className="rounded-[3px] border border-rule bg-disabled p-4 sm:p-5 cursor-not-allowed">{body}</div>
}
