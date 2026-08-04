import { futurePillars } from '../../content'
import { useLocale } from '../../i18n/LocaleContext'
import { SectionHeading } from '../common/SectionHeading'
import { Reveal } from '../common/Reveal'
import { PillarCard } from './PillarCard'

export function FuturePillars() {
  const { strings } = useLocale()
  return (
    <section id="future" className="py-20 sm:py-28 scroll-mt-16">
      <Reveal>
        <SectionHeading eyebrow="04 / next chapter" title={strings.future.title} subtitle={strings.future.subtitle} />
      </Reveal>
      <Reveal delayMs={80}>
        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {futurePillars.map((p) => (
            <PillarCard key={p.id} pillar={p} />
          ))}
        </div>
      </Reveal>
    </section>
  )
}
