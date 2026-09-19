import type { ReactNode } from 'react'
import { useLocale } from '../../i18n/LocaleContext'
import { Reveal } from '../common/Reveal'

const BASE = import.meta.env.BASE_URL

interface HeroStatProps {
  /** Small text before the figure, e.g. "省". */
  prefix?: string
  value: ReactNode
  /** Small text after the figure, e.g. "年". */
  suffix?: string
  label: string
}

/** A label may end in "｜project name". When it wraps, break at the bar and keep a short
 *  project name whole, so it never splits mid-word. */
function renderLabel(label: string) {
  const match = label.match(/^(.*?[｜|])\s*(.+)$/)
  if (!match) return label
  const [, main, project] = match
  return (
    <>
      {main}
      <span className={project.length <= 12 ? 'whitespace-nowrap' : ''}>{project}</span>
    </>
  )
}

function HeroStat({ prefix, value, suffix, label }: HeroStatProps) {
  return (
    <div className="bg-paper px-3.5 py-6 sm:px-6 sm:py-7">
      <div className="flex items-baseline gap-1 whitespace-nowrap font-serif font-semibold leading-none text-accent">
        {prefix && <span className="text-[13px] sm:text-[18px]">{prefix}</span>}
        <span className="font-mono-num text-[clamp(20px,6vw,26px)] sm:text-[38px]">{value}</span>
        {suffix && <span className="text-[13px] sm:text-[18px]">{suffix}</span>}
      </div>
      <div className="mt-3 font-mono text-[11.5px] leading-snug tracking-[0.04em] text-muted">{renderLabel(label)}</div>
    </div>
  )
}

export function Hero() {
  const { t, strings } = useLocale()

  const stats: HeroStatProps[] = [
    { value: '2.5', suffix: t({ zh: '年', en: 'yrs' }), label: t({ zh: 'PM經驗', en: 'PM experience' }) },
    { value: '6', suffix: t({ zh: '個', en: '' }), label: t({ zh: '複雜專案經驗', en: 'complex projects' }) },
    {
      prefix: t({ zh: '省', en: '' }),
      value: '6~8',
      suffix: t({ zh: '個月', en: 'months saved' }),
      label: t({ zh: '重構時間成本｜教育雲串接專案', en: 'in rebuild time and cost | EduCloud integration' }),
    },
    {
      value: (
        <>
          5,000<span className="mx-1 text-[0.7em]">→</span>60
        </>
      ),
      suffix: t({ zh: '班', en: 'classes' }),
      label: t({
        zh: '班級資料重構收斂｜雙系統合併專案',
        en: 'class-data restructuring, consolidated | two-system merge',
      }),
    },
  ]

  return (
    <section className="pt-16 pb-24 sm:pt-24 sm:pb-32">
      <Reveal>
        <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-accent mb-6 flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse" aria-hidden="true" />
          {strings.hero.eyebrow}
        </div>

        {/* PLACEHOLDER: the author's own story goes here — two or three sentences, the largest text on the page. */}
        <h1 className="font-serif font-semibold text-[28px] sm:text-[40px] md:text-[52px] leading-[1.3] text-ink max-w-4xl text-balance break-words">
          {t({
            zh: '【示意文字】這裡放你自己寫的故事，兩到三句話，是首頁最大的字。',
            en: '[Placeholder] Your own story goes here — two or three sentences, the largest type on the page.',
          })}
        </h1>

        <p className="mt-6 max-w-2xl text-[16px] sm:text-[17px] leading-[1.8] text-muted">
          {t({
            zh: '跨系統整合串接型PM：擅長吸收轉譯陌生技術知識、梳理資訊並拆解複雜問題、管理風險以確保專案順利落地。',
            en: 'A cross-system integration PM: good at absorbing and translating unfamiliar technical knowledge, structuring information, breaking down complex problems, and managing risk to keep projects landing smoothly.',
          })}
        </p>

        {/* Hairline grid: the 1px gap shows the rule colour between cells, in 2x2 and 4-up alike. */}
        <div className="mt-12 grid max-w-5xl grid-cols-2 gap-px border-y border-rule bg-rule lg:grid-cols-4">
          {stats.map((stat, i) => (
            <HeroStat key={i} {...stat} />
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="font-mono text-[13px] px-5 py-2.5 rounded-md bg-accent text-on-accent font-semibold hover:opacity-90 transition-opacity"
          >
            {strings.hero.ctaProjects}
          </a>
          <a
            href={`${BASE}about/`}
            className="font-mono text-[13px] px-5 py-2.5 rounded-md border border-rule text-ink hover:border-accent hover:text-accent transition-colors"
          >
            {strings.hero.ctaAbout}
          </a>
        </div>
      </Reveal>
    </section>
  )
}
