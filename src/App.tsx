import { useEffect } from 'react'
import { SiteShell } from './components/layout/SiteShell'
import { Hero } from './components/hero/Hero'
import { CompetencyMatrix } from './components/competency/CompetencyMatrix'
import { ProjectTimeline } from './components/projects/ProjectTimeline'
import { PageToc } from './components/common/PageToc'
import { useLocale } from './i18n/LocaleContext'

function App() {
  const { t } = useLocale()

  // Arriving from another page via "/#projects": the sections are rendered by
  // React after load, so the browser's own anchor scroll finds nothing. Do it here.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (id) document.getElementById(id)?.scrollIntoView()
  }, [])

  return (
    <SiteShell>
      <Hero />
      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_190px] lg:gap-12">
        <div className="min-w-0">
          <ProjectTimeline />
          <CompetencyMatrix />
        </div>
        <PageToc
          items={[
            { id: 'projects', num: '01', label: t({ zh: '專案經驗', en: 'Project Experience' }) },
            { id: 'competencies', num: '02', label: t({ zh: '能力矩陣', en: 'Competency matrix' }) },
          ]}
        />
      </div>
    </SiteShell>
  )
}

export default App
