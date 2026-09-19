import { aboutThesis } from '../content'
import { useLocale } from '../i18n/LocaleContext'
import { SiteShell } from '../components/layout/SiteShell'
import { Reveal } from '../components/common/Reveal'
import { AboutTimeline } from '../components/about/AboutTimeline'

/** Let a headline wrap only after a comma, so a quoted phrase isn't split
 *  mid-way. Text with no comma is returned as-is and wraps normally. */
function breakAtCommas(text: string) {
  const parts = text.split(/(?<=[，,])/)
  if (parts.length < 2) return text
  return parts.map((part, i) => (
    <span key={i} className="inline-block">
      {part}
    </span>
  ))
}

export function AboutPage() {
  const { t } = useLocale()

  return (
    <SiteShell current="about">
      <section className="pt-16 pb-14 sm:pt-24 sm:pb-16">
        <Reveal>
          <div className="mb-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            about
          </div>
          <h1 className="max-w-3xl break-words font-serif text-[28px] font-semibold leading-[1.35] text-ink text-balance sm:text-[36px] md:text-[44px]">
            {breakAtCommas(t(aboutThesis))}
          </h1>
        </Reveal>
      </section>

      <section className="pb-12 sm:pb-20">
        <AboutTimeline />
      </section>
    </SiteShell>
  )
}
