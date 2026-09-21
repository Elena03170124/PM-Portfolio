import { useEffect, useRef, useState } from 'react'
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

function NavLink({
  item,
  current,
  label,
  className = '',
  onNavigate,
}: {
  item: (typeof nav)[number]
  current: PageId
  label: string
  className?: string
  onNavigate?: () => void
}) {
  const isCurrent = item.page === current
  return (
    <a
      href={item.href}
      onClick={onNavigate}
      aria-current={isCurrent ? 'page' : undefined}
      className={`font-sans tracking-wide transition-colors hover:text-accent ${
        isCurrent ? 'text-accent' : 'text-muted'
      } ${className}`}
    >
      {label}
    </a>
  )
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
      {open ? (
        <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" />
      ) : (
        <path d="M2.5 4.5h11M2.5 8h11M2.5 11.5h11" />
      )}
    </svg>
  )
}

export function Header({ current = 'home' }: { current?: PageId }) {
  const { strings } = useLocale()
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  // Close the phone menu on Escape or a tap outside the header.
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    const onPointer = (e: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('pointerdown', onPointer)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('pointerdown', onPointer)
    }
  }, [menuOpen])

  return (
    <header ref={headerRef} className="sticky top-0 z-40 border-b border-rule/70 bg-paper/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href={BASE} className="font-serif text-[15px] tracking-wide text-ink">
          Elena Zhuang <span className="text-muted-dim">｜</span> 莊詒安<span className="text-accent">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-7">
          {nav.map((item) => (
            <NavLink key={item.key} item={item} current={current} label={strings.nav[item.key]} className="text-[12.5px]" />
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <ContactButton />
          </div>
          <LanguageToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? strings.menu.close : strings.menu.open}
            className="md:hidden flex h-8 w-10 items-center justify-center rounded-full border border-rule text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="md:hidden absolute inset-x-0 top-full border-b border-rule bg-paper">
          <nav aria-label="主選單" className="mx-auto max-w-6xl px-5 py-1 sm:px-8">
            <ul>
              {nav.map((item) => (
                <li key={item.key} className="border-b border-rule/60 last:border-b-0">
                  <NavLink
                    item={item}
                    current={current}
                    label={strings.nav[item.key]}
                    className="block py-3.5 text-[15px]"
                    onNavigate={() => setMenuOpen(false)}
                  />
                </li>
              ))}
            </ul>
            {/* The header only has room for the contact button from the sm breakpoint up. */}
            <div className="border-t border-rule/60 py-4 sm:hidden">
              <ContactButton />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
