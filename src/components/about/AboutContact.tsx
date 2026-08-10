import { useLocale } from '../../i18n/LocaleContext'
import { positioningStatement, selfDescription } from '../../content'
import { SectionHeading } from '../common/SectionHeading'
import { Reveal } from '../common/Reveal'
import { CornerBracketCard } from '../common/CornerBracketCard'

const CONTACT_EMAIL = 'friend070666@gmail.com'

export function AboutContact() {
  const { t, strings } = useLocale()

  return (
    <section id="about" className="py-20 sm:py-32 scroll-mt-16">
      <Reveal>
        <SectionHeading eyebrow="05 / about" title={strings.about.title} />
      </Reveal>

      <Reveal delayMs={80}>
        <CornerBracketCard className="mt-10 p-6 sm:p-10 max-w-2xl">
          <p className="font-serif text-[20px] sm:text-[24px] leading-snug text-ink text-balance">
            {t(selfDescription)}
          </p>
          <div className="mt-6 pt-6 border-t border-rule">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-muted-dim">
              {strings.about.positioningLabel}
            </div>
            <p className="mt-2 text-[14px] leading-relaxed text-muted">{t(positioningStatement)}</p>
          </div>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-8 inline-flex items-center gap-2 font-mono text-[13px] px-5 py-2.5 rounded-md bg-accent text-on-accent font-semibold hover:opacity-90 transition-opacity"
          >
            {strings.about.contactCta} · {CONTACT_EMAIL}
          </a>
        </CornerBracketCard>
      </Reveal>
    </section>
  )
}
