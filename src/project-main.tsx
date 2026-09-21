import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import { ProjectDetailPage } from './pages/ProjectDetailPage'
import { LocaleProvider } from './i18n/LocaleContext'

// Every detail page shares this entry; the slug is the last segment of the URL
// (.../projects/<slug>/).
const slug = window.location.pathname.split('/').filter(Boolean).pop() ?? ''

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LocaleProvider>
      <ProjectDetailPage slug={slug} />
    </LocaleProvider>
  </StrictMode>,
)
