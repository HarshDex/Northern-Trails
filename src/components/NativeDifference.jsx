const pillars = [
  {
    label: 'We Are Native',
    sub: '0 M — Home Ground',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 3L26 23H2L14 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M14 3L22 15H6L14 3Z" fill="currentColor" opacity="0.15"/>
        <circle cx="14" cy="10" r="2" fill="currentColor" opacity="0.6"/>
      </svg>
    ),
    color: 'text-saffron',
    border: 'border-saffron/20',
    body: "We aren't an agency that flies in guides for the season. Northern Trails is run by people born and raised in Dharchula. We know which ridge holds ice in June, which trail is dangerous in October rain, and which homestay family will look after you like their own.",
  },
  {
    label: 'We Conserve',
    sub: '4,200 M — Treeline',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 4C14 4 6 10 6 17a8 8 0 0016 0c0-7-8-13-8-13z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M14 4C14 4 6 10 6 17a8 8 0 0016 0c0-7-8-13-8-13z" fill="currentColor" opacity="0.1"/>
        <path d="M14 18V28" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    color: 'text-moss',
    border: 'border-moss/20',
    body: "Every yatra we run includes cleanup drives, waste-segregation at camps, and environmental awareness work along the route. The mountains gave us our livelihood — protecting them isn't a side project, it's the entire point.",
  },
  {
    label: 'We Give Back',
    sub: '3,500 M — Village Level',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 6l2.5 7H22l-4.5 3.5 1.5 7L14 20l-5 3.5 1.5-7L6 13h5.5L14 6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M14 6l2.5 7H22l-4.5 3.5 1.5 7L14 20l-5 3.5 1.5-7L6 13h5.5L14 6z" fill="currentColor" opacity="0.12"/>
      </svg>
    ),
    color: 'text-gold',
    border: 'border-gold/20',
    body: 'Porters, cooks, mule owners, and homestay families from Darma and Byans valleys are hired first — always. Income from your yatra stays in the very valleys you walk through, not in a city office far away.',
  },
];

export default function NativeDifference() {
  return (
    <section id="native-difference" className="relative bg-cream py-24 md:py-32 overflow-hidden">
      {/* subtle topographic texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 w-80 h-80 opacity-[0.04]"
        style={{
          backgroundImage: `repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 18px, rgba(0,0,0,0.8) 18px, rgba(0,0,0,0.8) 19px)`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <div className="reveal max-w-2xl mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-terracotta">
            The Native Difference
          </p>
          <h2 className="mt-4 text-balance font-display text-4xl font-medium leading-tight tracking-tight text-charcoal md:text-5xl">
            Tourism is what we do.
            <span className="block italic mt-1 text-charcoal/60">Looking after these mountains is why we do it.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.label}
              className={`reveal reveal-d${i + 1} rounded-2xl border bg-cream-card p-8 md:p-9 ${pillar.border} hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] transition-shadow`}
            >
              <div className={`mb-5 ${pillar.color}`}>
                {pillar.icon}
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-charcoal/35 mb-2">
                {pillar.sub}
              </p>
              <h3 className="font-display text-2xl font-semibold text-charcoal mb-4">
                {pillar.label}
              </h3>
              <p className="text-[15px] leading-relaxed text-charcoal/65">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
