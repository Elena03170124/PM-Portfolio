import { useLocale } from '../../i18n/LocaleContext'
import { SectionHeading } from '../common/SectionHeading'
import { Reveal } from '../common/Reveal'
import { EraComparisonColumn } from './EraComparisonColumn'

export function GrowthNarrative() {
  const { strings } = useLocale()
  const { hotaiEra, southoneEra } = strings.growth

  return (
    <section id="growth" className="py-20 sm:py-28 scroll-mt-16">
      <Reveal>
        <SectionHeading eyebrow="03 / growth arc" title={strings.growth.title} subtitle={strings.growth.subtitle} />
      </Reveal>

      <Reveal delayMs={80}>
        <div className="mt-10 flex flex-col sm:flex-row items-stretch gap-4 sm:gap-2">
          <EraComparisonColumn label={hotaiEra.label} title={hotaiEra.title} description={hotaiEra.description} />
          <div className="hidden sm:flex items-center justify-center px-2 text-accent font-mono text-xl" aria-hidden="true">
            →
          </div>
          <EraComparisonColumn
            label={southoneEra.label}
            title={southoneEra.title}
            description={southoneEra.description}
            emphasized
          />
        </div>
      </Reveal>
    </section>
  )
}
