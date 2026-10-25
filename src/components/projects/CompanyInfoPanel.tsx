import type { CompanyInfo } from '../../content/companyInfo'
import { useLocale } from '../../i18n/LocaleContext'

/** Background facts about the employer — kept deliberately quiet (no box, small
 *  muted type) so the project cards below stay the focus of the page. */
export function CompanyInfoPanel({ info }: { info: CompanyInfo }) {
  const { t } = useLocale()

  const rows: { label: string; value: string }[] = [
    { label: t({ zh: '任職企業', en: 'Company' }), value: t(info.organization) },
    { label: t({ zh: '企業規模', en: 'Size' }), value: t(info.size) },
    { label: t({ zh: '隸屬集團', en: 'Group' }), value: t(info.group) },
    { label: t({ zh: '主責產品', en: 'Main products' }), value: t(info.products) },
    { label: t({ zh: '應徵職稱', en: 'Title applied for' }), value: t(info.appliedTitle) },
    { label: t({ zh: '內部職稱', en: 'Internal titles' }), value: t(info.internalTitles) },
    { label: t({ zh: '職責範疇', en: 'Scope' }), value: t(info.scope).join(' ・ ') },
  ]

  return (
    <dl className="text-[13px] leading-[1.7]">
      {rows.map((row) => (
        <div key={row.label} className="grid gap-0 py-0.5 sm:grid-cols-[88px_1fr] sm:gap-4">
          <dt className="font-mono text-[11px] tracking-[0.04em] text-muted-dim">{row.label}</dt>
          <dd className="text-muted">{row.value}</dd>
        </div>
      ))}
    </dl>
  )
}
