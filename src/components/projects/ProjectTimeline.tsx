import { southoneProjects } from '../../content/projects.southone'
import { hotaiProjects } from '../../content/projects.hotai'
import { getCompetency } from '../../content'
import type { CompetencyId } from '../../content/types'
import { useLocale } from '../../i18n/LocaleContext'
import { SectionHeading } from '../common/SectionHeading'
import { Reveal } from '../common/Reveal'
import { ProjectCard } from './ProjectCard'

export function ProjectTimeline({ activeCompetencyId }: { activeCompetencyId: CompetencyId | null }) {
  const { t, strings } = useLocale()
  const activeCompetency = activeCompetencyId ? getCompetency(activeCompetencyId) : null

  const isDimmed = (competencyIds: CompetencyId[]) =>
    activeCompetencyId !== null && !competencyIds.includes(activeCompetencyId)

  return (
    <section id="projects" className="py-20 sm:py-28 scroll-mt-16">
      <Reveal>
        <SectionHeading eyebrow="02 / case studies" title={strings.projects.title} subtitle={strings.projects.subtitle} />
      </Reveal>

      {activeCompetency && (
        <div className="mt-6 font-mono text-[12px] text-muted flex items-center gap-2">
          <span>{strings.projects.filteredBy}</span>
          <span className="text-accent">
            {String(activeCompetency.index).padStart(2, '0')} · {t(activeCompetency.name)}
          </span>
        </div>
      )}

      <div className="mt-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-dim mb-4">
          {strings.projects.southoneLabel}
        </p>
        <div className="grid gap-5">
          {southoneProjects.map((p) => (
            <Reveal key={p.id}>
              <ProjectCard project={p} dimmed={isDimmed(p.competencyIds)} />
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-dim mb-4">
          {strings.projects.hotaiLabel}
        </p>
        <div className="grid gap-5">
          {hotaiProjects.map((p) => (
            <Reveal key={p.id}>
              <ProjectCard project={p} dimmed={isDimmed(p.competencyIds)} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
