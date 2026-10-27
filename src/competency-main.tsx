import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import { CompetencyPage } from './pages/CompetencyPage'
import { LocaleProvider } from './i18n/LocaleContext'

// Every competency page shares this entry; the slug is the last segment of the URL
// (.../competencies/<slug>/).
const slug = window.location.pathname.split('/').filter(Boolean).pop() ?? ''

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LocaleProvider>
      <CompetencyPage slug={slug} />
    </LocaleProvider>
  </StrictMode>,
)
