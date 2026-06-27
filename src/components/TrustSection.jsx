const trustPoints = [
  {
    num: '01',
    title: 'Professionally Run',
    body: 'Permits, route planning, medical contingencies and logistics handled by a dedicated operations team — not improvised on the trail.',
    color: 'text-saffron',
  },
  {
    num: '02',
    title: 'Born in These Valleys',
    body: 'Our guides grew up walking these routes before they ever led a single yatri. The mountain is home ground, not a job site.',
    color: 'text-gold',
  },
  {
    num: '03',
    title: 'Small, Accountable Groups',
    body: 'We deliberately cap group sizes so every yatri gets real attention — and so the trail does not bear more footfall than it should.',
    color: 'text-moss',
  },
];

export default function TrustSection() {
  return (
    <section className="relative bg-cream-alt py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-terracotta">
              Who Leads Your Yatra
            </p>
            <h2 className="mt-4 text-balance font-display text-4xl font-medium leading-tight tracking-tight text-charcoal md:text-5xl">
              A team that treats your yatra like it&rsquo;s their own family walking the trail.
            </h2>
          </div>
          <a
            href="/about"
            className="shrink-0 inline-flex items-center gap-2 rounded-full border border-charcoal/15 px-6 py-3 text-sm font-medium text-charcoal/65 hover:border-saffron/40 hover:text-saffron transition-colors"
          >
            Meet the team
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
              <path d="M1 6.5H12M12 6.5L7.5 2M12 6.5L7.5 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {trustPoints.map((point, i) => (
            <div
              key={point.title}
              className={`reveal reveal-d${i + 1} relative pl-6 border-l-2 border-charcoal/8 hover:border-saffron/30 transition-colors`}
            >
              <span className={`font-mono text-xs font-bold ${point.color}`}>{point.num}</span>
              <h3 className="mt-2 font-display text-xl md:text-2xl font-semibold text-charcoal">{point.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-charcoal/60">{point.body}</p>
            </div>
          ))}
        </div>

        {/* Social proof bar */}
        <div className="reveal mt-16 rounded-2xl border border-border bg-cream-card px-8 py-6 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {['RS', 'PM', 'VN', 'AK'].map((init, i) => (
                <div
                  key={init}
                  className="w-9 h-9 rounded-full border-2 border-cream-card bg-charcoal flex items-center justify-center text-[10px] font-semibold text-parchment"
                  style={{ zIndex: 4 - i }}
                >
                  {init}
                </div>
              ))}
            </div>
            <p className="text-sm text-charcoal/65">
              <span className="font-semibold text-charcoal">200+ yatris</span> in the last 3 seasons
            </p>
          </div>
          <div className="flex items-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} width="16" height="16" viewBox="0 0 14 14" fill="#B8922A" aria-hidden="true">
                <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.44L7 8.885l-3.09 1.625L4.5 7.07 2 4.635l3.455-.505L7 1z"/>
              </svg>
            ))}
            <span className="text-sm font-semibold text-charcoal ml-1">5.0</span>
            <span className="text-sm text-charcoal/45 ml-1">average rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}
