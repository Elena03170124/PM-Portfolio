import { southoneProjects } from '../../content/projects.southone'
import { getCompetency } from '../../content'
import type { CompetencyId } from '../../content/types'
import { useLocale } from '../../i18n/LocaleContext'
import { SectionHeading } from '../common/SectionHeading'
import { Reveal } from '../common/Reveal'
import { ProjectCard } from './ProjectCard'

const BASE = import.meta.env.BASE_URL

/** The 3 flagship 南一集團 case studies, in priority order — a homepage teaser.
 *  The complete set (plus the growth-comparison narrative) lives on the
 *  dedicated Project Experience page; see strings.projects.subtitle/moreCta. */
const FLAGSHIP_IDS = ['dual-system-merge', 'edu-cloud-integration', 'teacher-auth']
const flagshipProjects = FLAGSHIP_IDS.map((id) => southoneProjects.find((p) => p.id === id)!)

export function ProjectTimeline({ activeCompetencyId }: { activeCompetencyId: CompetencyId | null }) {
  const { t, strings } = useLocale()
  const activeCompetency = activeCompetencyId ? getCompetency(activeCompetencyId) : null

  const isDimmed = (competencyIds: CompetencyId[]) =>
    activeCompetencyId !== null && !competencyIds.includes(activeCompetencyId)

  return (
    <section id="projects" className="py-20 sm:py-28 scroll-mt-16">
      <Reveal>
        <SectionHeading eyebrow="02 / project experience" title={strings.projects.title} subtitle={strings.projects.subtitle} />
      </Reveal>

      {activeCompetency && (
        <div className="mt-6 font-mono text-[12px] text-muted flex items-center gap-2">
          <span>{strings.projects.filteredBy}</span>
          <span className="text-accent">
            {String(activeCompetency.index).padStart(2, '0')} · {t(activeCompetency.name)}
          </span>
        </div>
      )}

      <div className="mt-10 grid gap-5">
        {flagshipProjects.map((p) => (
          <Reveal key={p.id}>
            <ProjectCard project={p} dimmed={isDimmed(p.competencyIds)} />
          </Reveal>
        ))}
      </div>

      <div className="mt-10">
        <a
          href={`${BASE}projects/`}
          className="font-mono text-[13px] text-accent underline underline-offset-4 transition-opacity hover:opacity-80"
        >
          {strings.projects.moreCta}
        </a>
      </div>
    </section>
  )
}
