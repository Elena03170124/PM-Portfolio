/** Fixed decorative schematic grid + radial teal glow behind all content.
 *  Purely presentational — sits at z-0 with pointer-events disabled. */
export function GridBackground() {
  return (
    <div className="fixed inset-0 -z-10 grid-backdrop" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 15% -10%, rgba(79,209,197,0.10), transparent 60%), radial-gradient(ellipse 60% 40% at 90% 20%, rgba(240,184,96,0.06), transparent 60%)',
        }}
      />
    </div>
  )
}
