import type { FuturePillar } from '../../content/types'
import { useLocale } from '../../i18n/LocaleContext'
import { CornerBracketCard } from '../common/CornerBracketCard'

export function PillarCard({ pillar }: { pillar: FuturePillar }) {
  const { t } = useLocale()
  return (
    <CornerBracketCard className="p-5 sm:p-6">
      <span className="font-mono text-[13px] text-accent">{String(pillar.index).padStart(2, '0')}</span>
      <h3 className="mt-2.5 font-serif text-[15px] font-semibold text-ink leading-snug">{t(pillar.name)}</h3>
      <p className="mt-2.5 text-[13px] leading-relaxed text-muted">{t(pillar.description)}</p>
    </CornerBracketCard>
  )
}
