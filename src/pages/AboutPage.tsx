import { aboutThesis } from '../content'
import { useLocale } from '../i18n/LocaleContext'
import { SiteShell } from '../components/layout/SiteShell'
import { Reveal } from '../components/common/Reveal'
import { AboutTimeline } from '../components/about/AboutTimeline'
import { GrowthCompare } from '../components/about/GrowthCompare'
import { PageToc } from '../components/common/PageToc'

export function AboutPage() {
  const { t } = useLocale()
  const thesis = t(aboutThesis)

  return (
    <SiteShell current="about">
      <section className="pt-16 pb-14 sm:pt-24 sm:pb-16">
        <Reveal>
          <div className="mb-6 flex items-center gap-2 font-mono text-[14px] uppercase tracking-[0.12em] text-accent">
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
          <p className="mt-5 max-w-3xl text-[15.5px] leading-[1.85] text-muted sm:text-[16.5px]">
            {t({
              zh: '回顧每階段的轉職動機與PM專業能力成長幅度、訂定長遠職涯目標，並簡述個人的專長優勢、劣勢調整與失敗經驗省思。',
              en: 'A look back at the motivation behind each career move and how far my PM skills have grown, the long-term career goal I have set, and a short overview of my strengths, how I adjust for weaknesses, and what I have taken from setbacks.',
            })}
          </p>
        </Reveal>
      </section>

      <div className="pb-12 sm:pb-20 lg:grid lg:grid-cols-[minmax(0,1fr)_190px] lg:gap-12">
        <div className="min-w-0">
          <section id="career" className="scroll-mt-24 pb-6">
            <Reveal>
              <p className="mb-8 font-mono text-[14px] uppercase tracking-[0.12em] text-accent">
                {t({ zh: '職涯發展 · career', en: 'career' })}
              </p>
            </Reveal>
            <AboutTimeline />
          </section>

          <GrowthCompare />

          {/* Placeholder until the content is written: grey card, no links. */}
          <section id="traits" className="scroll-mt-24 pt-12 sm:pt-14">
            <Reveal>
              <div className="rounded-md bg-disabled px-6 py-8 sm:px-8 sm:py-10">
                <h2 className="font-serif text-[24px] font-semibold leading-[1.35] text-muted sm:text-[30px]">
                  {t({ zh: '個人特質與成長', en: 'Personal traits and growth' })}
                </h2>
                <p className="mt-3 font-mono text-[13px] text-muted-dim">{t({ zh: '內容整理中', en: 'Content in progress' })}</p>
              </div>
            </Reveal>
          </section>
        </div>
        <PageToc
          items={[
            { id: 'career', label: t({ zh: '職涯發展', en: 'Career' }) },
            { id: 'growth', label: t({ zh: '專業能力演進', en: 'Professional growth' }) },
            { id: 'traits', label: t({ zh: '個人特質與成長', en: 'Personal traits' }) },
          ]}
        />
      </div>
    </SiteShell>
  )
}
