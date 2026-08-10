export function ValuePropQuote({ index, text }: { index: number; text: string }) {
  return (
    <div className="flex gap-4 items-start">
      <span className="font-mono text-[12px] text-accent pt-1.5 shrink-0">{String(index).padStart(2, '0')}</span>
      <p className="font-serif text-[17px] sm:text-[19px] leading-snug text-ink/90">{text}</p>
    </div>
  )
}
