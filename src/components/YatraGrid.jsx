import Link from 'next/link';

const yatras = [
  {
    name: 'Adi Kailash & Om Parvat Yatra',
    slug: 'adi-kailash-om-parvat',
    elevation: '5,945 M / 6,191 M',
    duration: '5–7 Days',
    difficulty: 'Moderate',
    price: 'From ₹22,000',
    badge: 'Most Popular',
    accent: 'text-saffron border-saffron/25 bg-saffron/8',
    badgeClass: 'bg-saffron text-white',
    blurb:
      'Adi Kailash darshan at Jolingkong + Om Parvat darshan at Nabhidhang — the sacred twin peaks in one combined 5–7 day yatra from Dharchula.',
    tags: ['Sacred Pilgrimage', 'ILP Required', 'Twin Darshan'],
    featured: true,
  },
  {
    name: 'Panchachuli Base Camp',
    slug: 'panchachuli-base-camp',
    elevation: '4,500 M',
    duration: '8–10 Days',
    difficulty: 'Easy–Moderate',
    price: 'From ₹15,000',
    badge: null,
    accent: 'text-gold border-gold/25 bg-gold/8',
    blurb:
      'Five peaks where the Pandavas cooked their last meal. Through Dar, Duktu and Sela — the living villages of the upper Darma Valley.',
    tags: ['Trekking', 'Culture', 'Beginner-Friendly'],
    featured: false,
  },
  {
    name: 'Darma Valley Trail',
    slug: 'darma-valley',
    elevation: '3,200 M',
    duration: '6–8 Days',
    difficulty: 'Easy',
    price: 'From ₹12,000',
    badge: null,
    accent: 'text-moss border-moss/25 bg-moss/8',
    blurb:
      'Apple orchards, Bhotiya villages, and river-fed trails. Ideal for first-timers, families, and senior yatris. No ILP required.',
    tags: ['Family-Friendly', 'Cultural', 'No ILP'],
    featured: false,
  },
];

const difficultyDot = {
  'Easy': 'bg-moss',
  'Easy–Moderate': 'bg-gold',
  'Moderate': 'bg-saffron',
  'Challenging': 'bg-terracotta',
};

export default function YatraGrid() {
  return (
    <section id="yatras" className="relative bg-cream-alt py-24 md:py-32 overflow-hidden">
      {/* subtle warm gradient top */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(184,146,42,0.05) 0%, transparent 60%)' }}
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-saffron">
              Signature Routes
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight text-charcoal text-balance">
              Three yatras we know like our own backyard.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-charcoal/50">
            Beyond these, we run expeditions across the wider Northern Himalaya — Pithoragarh, Munsiyari, Niti-Mana and more.
          </p>
        </div>

        {/* Featured card (Adi Kailash + Om Parvat) — full width */}
        <div className="mb-5">
          {yatras.filter((y) => y.featured).map((y) => (
            <Link
              key={y.slug}
              href={`/yatras/${y.slug}`}
              className="reveal card-hover group relative overflow-hidden rounded-2xl border border-border bg-cream-card p-8 md:p-10 flex flex-col md:flex-row gap-8 md:items-center hover:border-gold/30"
            >
              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  {y.badge && (
                    <span className={`font-mono text-[9px] uppercase tracking-wider rounded-full px-2.5 py-1 font-semibold ${y.badgeClass}`}>
                      {y.badge}
                    </span>
                  )}
                  {y.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[9px] uppercase tracking-wider text-charcoal/40 border border-charcoal/12 rounded-full px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-display text-3xl md:text-4xl font-medium text-charcoal group-hover:text-saffron transition-colors leading-tight mb-3">
                  {y.name}
                </h3>
                <p className="text-[15px] leading-relaxed text-charcoal/60 max-w-lg">
                  {y.blurb}
                </p>

                <div className="flex flex-wrap items-center gap-5 mt-6">
                  <span className="font-mono text-lg font-semibold text-saffron">{y.elevation}</span>
                  <div className="flex items-center gap-1.5">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="text-mist" aria-hidden="true">
                      <circle cx="6.5" cy="6.5" r="5.5" stroke="currentColor" strokeWidth="1.2"/>
                      <path d="M6.5 3.5V6.5l2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                    <span className="text-sm text-charcoal/50">{y.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className={`h-1.5 w-1.5 rounded-full ${difficultyDot[y.difficulty] ?? 'bg-mist'}`} aria-hidden="true"/>
                    <span className="text-sm text-charcoal/50">{y.difficulty}</span>
                  </div>
                  <span className={`font-mono text-sm rounded-full border px-3 py-0.5 ${y.accent}`}>{y.price}</span>
                </div>
              </div>

              {/* Right CTA */}
              <div className="shrink-0 flex flex-col items-start md:items-end gap-3">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-saffron group-hover:gap-3 transition-all">
                  View full itinerary
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                    <path d="M1 7H13M13 7L8 2M13 7L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-xs text-charcoal/40 max-w-[160px] text-right hidden md:block">
                  Packages from ₹22,000 · ILP handled
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Other two cards — side by side */}
        <div className="grid gap-5 md:grid-cols-2">
          {yatras.filter((y) => !y.featured).map((y, i) => (
            <Link
              key={y.slug}
              href={`/yatras/${y.slug}`}
              className={`reveal reveal-d${i + 1} card-hover group relative overflow-hidden rounded-2xl border border-border bg-cream-card p-8 flex flex-col gap-5 hover:border-gold/30`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {y.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[9px] uppercase tracking-wider text-charcoal/40 border border-charcoal/10 rounded-full px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="font-mono text-sm font-semibold text-gold shrink-0">{y.elevation}</span>
              </div>

              <div>
                <h3 className="font-display text-2xl md:text-3xl font-medium text-charcoal group-hover:text-saffron transition-colors leading-tight">
                  {y.name}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-charcoal/60">
                  {y.blurb}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border">
                <div className="flex items-center gap-1.5">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="text-mist" aria-hidden="true">
                    <circle cx="6.5" cy="6.5" r="5.5" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M6.5 3.5V6.5l2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                  <span className="text-xs text-charcoal/50">{y.duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className={`h-1.5 w-1.5 rounded-full ${difficultyDot[y.difficulty] ?? 'bg-mist'}`} aria-hidden="true"/>
                  <span className="text-xs text-charcoal/50">{y.difficulty}</span>
                </div>
                <span className={`font-mono text-xs rounded-full border px-2.5 py-0.5 ${y.accent}`}>{y.price}</span>
                <span className="ml-auto flex items-center gap-1.5 text-xs font-medium text-charcoal/50 group-hover:text-saffron transition-colors">
                  View itinerary
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                    <path d="M1 6H11M11 6L7 2M11 6L7 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
