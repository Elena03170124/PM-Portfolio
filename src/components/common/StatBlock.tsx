export function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="font-serif font-semibold text-[26px] sm:text-[32px] text-amber font-mono-num leading-none">
        {value}
      </div>
      <div className="font-mono text-[10.5px] uppercase tracking-[0.06em] text-muted-dim">{label}</div>
    </div>
  )
}

export function StatRow({ items }: { items: { value: string; label: string }[] }) {
  if (items.length === 0) return null
  return (
    <div className="flex flex-wrap gap-x-8 gap-y-4">
      {items.map((item, i) => (
        <StatBlock key={i} value={item.value} label={item.label} />
      ))}
    </div>
  )
}
