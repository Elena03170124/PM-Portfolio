import type { CompanyInfo } from '../../content/companyInfo'
import { useLocale } from '../../i18n/LocaleContext'

export function CompanyInfoPanel({ info }: { info: CompanyInfo }) {
  const { t } = useLocale()

  const rows: { label: string; value: string }[] = [
    { label: t({ zh: '任職企業', en: 'Company' }), value: t(info.organization) },
    { label: t({ zh: '企業規模', en: 'Size' }), value: t(info.size) },
    { label: t({ zh: '隸屬集團', en: 'Group' }), value: t(info.group) },
    { label: t({ zh: '主責產品', en: 'Main products' }), value: t(info.products) },
    { label: t({ zh: '應徵職稱', en: 'Title applied for' }), value: t(info.appliedTitle) },
    { label: t({ zh: '內部職稱', en: 'Internal titles' }), value: t(info.internalTitles) },
  ]

  return (
    <dl className="border border-rule bg-surface px-5 py-4 sm:px-6 sm:py-5">
      {rows.map((row) => (
        <div key={row.label} className="grid gap-1 py-1.5 sm:grid-cols-[104px_1fr] sm:gap-5">
          <dt className="pt-0.5 font-mono text-[11.5px] tracking-[0.04em] text-muted-dim">{row.label}</dt>
          <dd className="text-[14.5px] leading-relaxed text-ink">{row.value}</dd>
        </div>
      ))}
      <div className="grid gap-2 border-t border-rule/70 pb-1 pt-3.5 mt-2 sm:grid-cols-[104px_1fr] sm:gap-5">
        <dt className="pt-1 font-mono text-[11.5px] tracking-[0.04em] text-muted-dim">{t({ zh: '職責範疇', en: 'Scope' })}</dt>
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
