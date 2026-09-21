import { useLocale } from '../../i18n/LocaleContext'
import { ContactButton } from './ContactButton'
import { LanguageToggle } from './LanguageToggle'

const BASE = import.meta.env.BASE_URL

export type PageId = 'home' | 'about' | 'projects'

type NavKey = 'about' | 'projects' | 'competencies'

// Sections live on the home page, so their links go through BASE + hash:
// clicking one on the home page just scrolls, on another page it navigates home first.
const nav: { key: NavKey; href: string; page?: PageId }[] = [
  { key: 'about', href: `${BASE}about/`, page: 'about' },
  { key: 'projects', href: `${BASE}projects/`, page: 'projects' },
  { key: 'competencies', href: `${BASE}#competencies` },
]

function NavLink({ item, current, label }: { item: (typeof nav)[number]; current: PageId; label: string }) {
  const isCurrent = item.page === current
  return (
    <a
      href={item.href}
      aria-current={isCurrent ? 'page' : undefined}
      className={`font-sans text-[12.5px] tracking-wide transition-colors hover:text-accent ${
        isCurrent ? 'text-accent' : 'text-muted'
      }`}
    >
      {label}
    </a>
  )
}

export function Header({ current = 'home' }: { current?: PageId }) {
  const { strings } = useLocale()

  return (
    <header className="sticky top-0 z-40 border-b border-rule/70 bg-paper/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href={BASE} className="font-serif text-[15px] tracking-wide text-ink">
          Elena Zhuang <span className="text-muted-dim">｜</span> 莊詒安<span className="text-accent">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-7">
          {nav.map((item) => (
            <NavLink key={item.key} item={item} current={current} label={strings.nav[item.key]} />
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ContactButton />
          <LanguageToggle />
        </div>
      </div>
      {/* Phones have no room for the links beside the logo, so they get their own row. */}
      <nav aria-label="主選單" className="md:hidden border-t border-rule/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8 h-11">
          {nav.map((item) => (
            <NavLink key={item.key} item={item} current={current} label={strings.nav[item.key]} />
          ))}
        </div>
      </nav>
    </header>
  )
}
