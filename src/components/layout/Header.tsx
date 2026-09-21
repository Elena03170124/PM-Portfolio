import { useLocale } from '../../i18n/LocaleContext'
import { CONTACT_EMAIL } from '../../content/contact'
import { LanguageToggle } from './LanguageToggle'

const BASE = import.meta.env.BASE_URL

export type PageId = 'home' | 'about'

type NavKey = 'about' | 'projects' | 'competencies'

// Sections live on the home page, so their links go through BASE + hash:
// clicking one on the home page just scrolls, on another page it navigates home first.
const nav: { key: NavKey; href: string; page?: PageId }[] = [
  { key: 'about', href: `${BASE}about/`, page: 'about' },
  { key: 'projects', href: `${BASE}#projects` },
  { key: 'competencies', href: `${BASE}#competencies` },
]

export function Header({ current = 'home' }: { current?: PageId }) {
  const { strings } = useLocale()

  return (
    <header className="sticky top-0 z-40 border-b border-rule/70 bg-paper/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href={BASE} className="font-serif text-[15px] tracking-wide text-ink">
          Elena Zhuang <span className="text-muted-dim">｜</span> 莊詒安<span className="text-accent">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-7">
          {nav.map((item) => {
            const isCurrent = item.page === current
            return (
              <a
                key={item.key}
                href={item.href}
                aria-current={isCurrent ? 'page' : undefined}
                className={`font-sans text-[12.5px] tracking-wide transition-colors hover:text-accent ${
                  isCurrent ? 'text-accent' : 'text-muted'
                }`}
              >
                {strings.nav[item.key]}
              </a>
            )
          })}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-sans text-[12.5px] tracking-wide px-3.5 py-1.5 rounded-full border border-accent/40 text-accent transition-colors hover:bg-accent hover:text-on-accent"
          >
            {strings.contact.cta}
          </a>
          <LanguageToggle />
        </div>
      </div>
    </header>
  )
}
