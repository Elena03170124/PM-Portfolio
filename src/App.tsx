import { useEffect, useState } from 'react'
import { SiteShell } from './components/layout/SiteShell'
import { Hero } from './components/hero/Hero'
import { CompetencyMatrix } from './components/competency/CompetencyMatrix'
import { ProjectTimeline } from './components/projects/ProjectTimeline'
import { PageToc } from './components/common/PageToc'
import { useLocale } from './i18n/LocaleContext'
import type { CompetencyId } from './content/types'

function App() {
  const { t } = useLocale()
  // Single source of truth for the competency <-> project filter, shared
  // between CompetencyMatrix (sets it) and ProjectTimeline (reads it).
  const [activeCompetencyId, setActiveCompetencyId] = useState<CompetencyId | null>(null)

  // Arriving from another page via "/#projects": the sections are rendered by
  // React after load, so the browser's own anchor scroll finds nothing. Do it here.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (id) document.getElementById(id)?.scrollIntoView()
  }, [])

  return (
    <SiteShell>
      <Hero />
      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_190px] lg:gap-12 lg:items-start">
        <div className="min-w-0">
          <CompetencyMatrix activeId={activeCompetencyId} onSelect={setActiveCompetencyId} />
          <ProjectTimeline activeCompetencyId={activeCompetencyId} />
        </div>
        <PageToc
          items={[
            { id: 'competencies', num: '01', label: t({ zh: '能力矩陣', en: 'Competency matrix' }) },
            { id: 'projects', num: '02', label: t({ zh: '專案經驗', en: 'Project Experience' }) },
          ]}
        />
      </div>
    </SiteShell>
  )
}

export default App
