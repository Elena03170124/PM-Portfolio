import type { CompanyInfo } from '../../content/companyInfo'
import { useLocale } from '../../i18n/LocaleContext'

/** Background facts about the employer — kept deliberately quiet (no box, small
 *  muted type, hairline dividers) so the project cards below stay the focus. */
export function CompanyInfoPanel({ info }: { info: CompanyInfo }) {
  const { t } = useLocale()

  const rows: { label: string; value: string }[] = [
    { label: t({ zh: '任職企業', en: 'Company' }), value: t(info.organization) },
    { label: t({ zh: '企業規模', en: 'Size' }), value: t(info.size) },
    { label: t({ zh: '隸屬集團', en: 'Group' }), value: t(info.group) },
    { label: t({ zh: '產業類別', en: 'Industry' }), value: t(info.industry) },
    { label: t({ zh: '主責產品', en: 'Main products' }), value: t(info.products) },
    { label: t({ zh: '應徵職稱', en: 'Title applied for' }), value: t(info.appliedTitle) },
    { label: t({ zh: '內部職稱', en: 'Internal titles' }), value: t(info.internalTitles) },
  ]

  const rowClass = 'grid gap-0.5 border-b border-rule/50 py-2 sm:grid-cols-[88px_1fr] sm:gap-4 last:border-b-0'
  const labelClass = 'font-mono text-[11px] tracking-[0.04em] text-muted-dim'

  return (
    <dl className="border-t border-rule/50 text-[13px] leading-[1.7]">
      {rows.map((row) => (
        <div key={row.label} className={rowClass}>
          <dt className={labelClass}>{row.label}</dt>
          <dd className="text-muted">{row.value}</dd>
        </div>
      ))}
      <div className={`${rowClass} sm:items-start`}>
        <dt className={`${labelClass} sm:pt-1`}>{t({ zh: '職責範疇', en: 'Scope' })}</dt>
        <dd>
          <ul className="flex flex-wrap gap-2">
            {t(info.scope).map((item) => (
              <li key={item} className="rounded-full border border-accent-dim/60 px-3 py-1 text-[12.5px] leading-snug text-accent">
                {item}
              </li>
            ))}
          </ul>
        </dd>
      </div>
    </dl>
  )
}
