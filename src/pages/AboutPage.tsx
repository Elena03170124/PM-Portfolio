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
          {/* One sentence: only the key phrase is enlarged, lead and tail share the smaller size.
              A short phrase (+ tail) stays together when the line has to wrap. */}
          <h1 className="max-w-4xl break-words font-serif font-semibold leading-[1.35] text-ink">
            <span className="text-[22px] sm:text-[28px] md:text-[36px]">{thesis.lead}</span>
            <span className={thesis.emphasis.length <= 12 ? 'whitespace-nowrap' : ''}>
              <span className="text-[28px] sm:text-[44px] md:text-[52px]">{thesis.emphasis}</span>
              <span className="text-[22px] sm:text-[28px] md:text-[36px]">{thesis.tail}</span>
            </span>
          </h1>
        </Reveal>
      </section>

      <section className="pb-12 sm:pb-20">
        <AboutTimeline />
      </section>
    </SiteShell>
  )
}
