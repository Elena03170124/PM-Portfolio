import { aboutThesis } from '../content'
import { useLocale } from '../i18n/LocaleContext'
import { SiteShell } from '../components/layout/SiteShell'
import { Reveal } from '../components/common/Reveal'
import { AboutTimeline } from '../components/about/AboutTimeline'

export function AboutPage() {
  const { t } = useLocale()
  const thesis = t(aboutThesis)

  return (
    <SiteShell current="about">
      <section className="pt-16 pb-14 sm:pt-24 sm:pb-16">
        <Reveal>
          <div className="mb-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {t({ zh: '關於我 · about', en: 'about' })}
          </div>
          <h1 className="max-w-4xl break-words font-serif text-[24px] font-semibold leading-[1.4] text-ink sm:text-[36px] md:text-[44px]">
            {thesis.map((line, i) => (
              // A short line stays whole so the quoted phrase never breaks mid-way.
              <span key={i} className={`block ${line.length <= 16 ? 'whitespace-nowrap' : ''}`}>
                {line}
              </span>
            ))}
          </h1>
        </Reveal>
      </section>

      <section className="pb-12 sm:pb-20">
        <AboutTimeline />
      </section>
    </SiteShell>
  )
}
