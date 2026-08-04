import { useState } from 'react'
import type { Project } from '../../content/types'
import { useLocale } from '../../i18n/LocaleContext'
import { getCompetency } from '../../content'
import { CornerBracketCard } from '../common/CornerBracketCard'
import { StatRow } from '../common/StatBlock'
import { Tag } from '../common/Tag'
import { CompanyBadge } from './CompanyBadge'
import { STARPanel } from './STARPanel'

export function ProjectCard({ project, dimmed }: { project: Project; dimmed: boolean }) {
  const { t, strings } = useLocale()
  const [open, setOpen] = useState(false)

  const stats = project.metrics.map((m) => ({ value: t(m.value), label: t(m.label) }))

  return (
    <CornerBracketCard
      className={`p-5 sm:p-7 transition-opacity duration-300 ${dimmed ? 'opacity-35' : 'opacity-100'}`}
    >
      <div id={`project-${project.id}`} className="scroll-mt-24">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <CompanyBadge company={project.company} label={t(project.companyLabel)} />
          <span className="font-mono text-[11px] text-muted-dim">{t(project.period)}</span>
        </div>

        <h3 className="font-serif text-[19px] sm:text-[21px] font-semibold text-fg leading-snug text-balance">
          {t(project.title)}
        </h3>
        <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted max-w-2xl">{t(project.summary)}</p>

        {stats.length > 0 && (
          <div className="mt-5">
            <StatRow items={stats} />
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.highlights.map((h, i) => (
            <Tag key={i}>{t(h)}</Tag>
          ))}
        </div>

        {project.competencyIds.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.competencyIds.map((id) => {
              const c = getCompetency(id)
              if (!c) return null
              return (
                <Tag key={id} size="md">
                  {String(c.index).padStart(2, '0')} · {t(c.name)}
                </Tag>
              )
            })}
          </div>
        )}

        {project.summaryOnly ? (
          <p className="mt-5 font-mono text-[11px] text-muted-dim italic">{strings.projects.confidentialNote}</p>
        ) : (
          <>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="mt-6 font-mono text-[12.5px] text-teal hover:underline underline-offset-4 flex items-center gap-1.5"
            >
              <span className={`inline-block transition-transform duration-300 ${open ? 'rotate-90' : ''}`}>›</span>
              {open ? strings.projects.collapse : strings.projects.expand}
            </button>
            <STARPanel star={project.star} open={open} />
          </>
        )}
      </div>
    </CornerBracketCard>
  )
}
