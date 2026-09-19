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
          <h1 className="max-w-4xl break-words font-serif font-semibold text-ink text-balance">
            <span className="block text-[22px] leading-[1.4] sm:text-[28px] md:text-[36px]">{thesis.lead}</span>
            {/* 「 is drawn in the right half of its box; pull it left so the glyph lines up with the line above. */}
            <span
              className={`mt-1 block text-[28px] leading-[1.25] sm:text-[44px] md:text-[52px] ${thesis.emphasis.startsWith('「') ? '-ml-[0.5em]' : ''}`}
            >
              {thesis.emphasis}
              {thesis.tail}
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
