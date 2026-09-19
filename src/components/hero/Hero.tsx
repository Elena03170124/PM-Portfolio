import { useLocale } from '../../i18n/LocaleContext'
import { heroQuotes, positioningStatement } from '../../content'
import { southoneProjects } from '../../content/projects.southone'
import { competencies } from '../../content/competencies'
import { ValuePropQuote } from './ValuePropQuote'
import { StatRow } from '../common/StatBlock'
import { Reveal } from '../common/Reveal'

export function Hero() {
  const { t, strings } = useLocale()

  const stats = [
    { value: String(southoneProjects.length), label: t({ zh: '南一集團核心專案', en: 'core projects at Nani' }) },
    { value: String(competencies.length), label: t({ zh: '核心能力矩陣', en: 'core competencies' }) },
    { value: t({ zh: '2.5 年', en: '2.5 yrs' }), label: t({ zh: 'PM 相關經驗', en: 'PM experience' }) },
  ]

  return (
    <section className="pt-16 pb-24 sm:pt-24 sm:pb-32">
      <Reveal>
        <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-accent mb-6 flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse" aria-hidden="true" />
          {strings.hero.eyebrow}
        </div>

        <h1 className="font-serif font-semibold text-[26px] sm:text-[36px] md:text-[44px] leading-[1.3] text-ink max-w-3xl text-balance break-words">
          {t(positioningStatement)}
        </h1>

        <div className="mt-10 flex flex-col gap-5 max-w-2xl">
          {heroQuotes.map((q) => (
            <ValuePropQuote key={q.id} index={heroQuotes.indexOf(q) + 1} text={t(q.text)} />
          ))}
        </div>

        <div className="mt-12">
          <StatRow items={stats} />
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="font-mono text-[13px] px-5 py-2.5 rounded-md bg-accent text-on-accent font-semibold hover:opacity-90 transition-opacity"
          >
            {strings.hero.ctaProjects}
          </a>
          <a
            href="#about"
            className="font-mono text-[13px] px-5 py-2.5 rounded-md border border-rule text-ink hover:border-accent hover:text-accent transition-colors"
          >
            {strings.hero.ctaContact}
          </a>
        </div>
      </Reveal>
    </section>
  )
}
