import { useLocale } from '../../i18n/LocaleContext'
import { LanguageToggle } from './LanguageToggle'

const sections: { id: string; key: 'competencies' | 'projects' | 'growth' | 'future' | 'about' }[] = [
  { id: 'competencies', key: 'competencies' },
  { id: 'projects', key: 'projects' },
  { id: 'growth', key: 'growth' },
  { id: 'future', key: 'future' },
  { id: 'about', key: 'about' },
]

export function Header() {
  const { strings } = useLocale()

  return (
    <header className="sticky top-0 z-40 border-b border-rule/70 bg-paper/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="font-serif text-[15px] tracking-wide text-ink">
          Elena Zhuang <span className="text-muted-dim">｜</span> 莊詒安<span className="text-accent">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-7">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="font-sans text-[12.5px] tracking-wide text-muted hover:text-accent transition-colors"
            >
              {strings.nav[s.key]}
            </a>
          ))}
        </nav>
        <LanguageToggle />
      </div>
    </header>
  )
}
