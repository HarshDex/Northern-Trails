'use client';
import Link from 'next/link';
import Image from 'next/image';

const packages = [
  {
    slug: 'adi-kailash-om-parvat',
    name: 'Adi Kailash & Om Parvat',
    subtitle: 'Twin Sacred Darshan',
    tag: 'Most Popular',
    tagColor: 'bg-saffron/15 text-saffron border-saffron/30',
    elevation: '5,945 M / 6,191 M',
    duration: '5–7 Days',
    difficulty: 'Moderate',
    image: '/packages/adi-kailash.jpg',
    imageAlt: 'Snow-covered Adi Kailash peak at sunrise with Parvati Sarovar in foreground',
    desc: 'Adi Kailash and Om Parvat are one inseparable yatra — two sacred peaks visited on consecutive days from Gunji. Witness the natural OM (ॐ) etched in eternal snow on Om Parvat at sunrise, and seek blessings at the sacred Parvati Sarovar glacial lake.',
    highlights: [
      'Adi Kailash darshan at Jyolingkong',
      'Parvati Sarovar & Gauri Kund sacred lakes',
      'Natural OM symbol at Nabhidhang viewpoint',
      'Kali Mata Temple · Ved Vyas Cave',
      'ILP & all permits handled by us',
    ],
    route: 'Kathgodam → Pithoragarh → Dharchula → Gunji/Nabi → Adi Kailash → Om Parvat → Return',
    bestSeason: 'May – October',
  },
  {
    slug: 'panchachuli-darma-valley',
    name: 'Panchachuli & Darma Valley',
    subtitle: 'Alpine Peaks · Bhotiya Villages',
    tag: 'Family Friendly',
    tagColor: 'bg-gold/15 text-gold border-gold/30',
    elevation: '4,500 M',
    duration: '6–14 Days',
    difficulty: 'Easy–Moderate',
    image: '/packages/panchachuli.jpg',
    imageAlt: 'Panchachuli five peaks panoramic view above alpine meadows and rhododendron forests',
    desc: 'Trek through apple orchards, rhododendron forests, and ancient Bhotiya villages to the foot of the five sacred Panchachuli peaks. Includes a stay at the historic Narayan Ashram (est. 1936). Choose the valley walk or the full base camp push.',
    highlights: [
      'Panchachuli 5-peak panoramic view',
      'Darma Valley orchards & Bhotiya villages',
      'Narayan Ashram spiritual retreat',
      'Alpine meadows & glacial streams',
      'No ILP required · 6–14 day options',
    ],
    route: 'Kathgodam → Pithoragarh → Dantu → Panchachuli Base Camp → Dharchula → Return',
    bestSeason: 'May – October (Sep–Oct ideal)',
  },
  {
    slug: 'munsyari',
    name: 'Munsyari Retreat',
    subtitle: 'Khaliya Top · Milam Gateway',
    tag: 'New Package',
    tagColor: 'bg-sky-400/15 text-sky-500 border-sky-400/30',
    elevation: '3,500 M',
    duration: '5–7 Days',
    difficulty: 'Easy–Moderate',
    image: '/packages/munsyari.jpg',
    imageAlt: 'Munsyari hill station with Panchachuli peaks filling the eastern horizon at sunrise',
    desc: 'Where the Panchachuli peaks fill the entire eastern horizon at sunrise. Day trek to Khaliya Top for a 270-degree panorama, chase Birthi Falls, soak in Madkot hot springs, and explore the gateway to the legendary Milam Glacier route.',
    highlights: [
      'Khaliya Top 270° Himalayan panorama',
      'Birthi Falls (126 M) & Thamri Kund',
      'Milam Glacier gateway trek',
      'Hot springs at Madkot',
      'Tea gardens at Chaukori & Berinag',
    ],
    route: 'Kathgodam → Almora → Munsyari → Chaukori/Berinag → Return',
    bestSeason: 'Apr – June, Sep – Nov',
  },
];

const inclusions = [
  'Inner Line Permit (ILP) processing',
  'All ground transport (SUV / Tempo Traveller)',
  'Accommodation (hotels, homestays, cottages)',
  'Breakfast & dinner (pure veg, sattvic)',
  'Experienced native guide from Dharchula',
  'Tolls, parking & fuel',
];

const exclusions = [
  'Train / flight tickets to Kathgodam',
  'Lunch (flexibility on the road)',
  'Personal expenses & tips',
  'Travel insurance',
  'Trekking ponies / porters (on request)',
];

export default function Packages() {
  return (
    <section id="packages" className="bg-cream-alt py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">

        {/* Section header */}
        <div className="reveal mb-14 md:mb-16 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-saffron mb-4">Tour Packages</p>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-charcoal leading-tight text-balance">
            Three routes. One native team. Every mountain in reach.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-charcoal/60 max-w-xl">
            All packages run from Dharchula — our home base. Closer to the peaks, faster clearances, and guides who have walked these routes their whole lives.
          </p>
        </div>

        {/* Package grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <article
              key={pkg.slug}
              className={`reveal reveal-d${i + 1} group relative rounded-3xl overflow-hidden border border-border bg-cream-card flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
            >
              {/* Image banner */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Dark overlay for readability */}
                <div
                  className="absolute inset-0 z-[1]"
                  style={{ background: 'linear-gradient(to top, rgba(6,2,1,0.85) 0%, rgba(6,2,1,0.25) 50%, rgba(6,2,1,0.15) 100%)' }}
                />

                {/* Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium tracking-wide ${pkg.tagColor}`}>
                    {pkg.tag}
                  </span>
                </div>

                {/* Package name over image */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-parchment/50 mb-1">{pkg.subtitle}</p>
                  <h3 className="font-display text-xl font-semibold text-parchment leading-tight">{pkg.name}</h3>
                </div>
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-6">

                {/* Key stats */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { label: 'Elevation', value: pkg.elevation },
                    { label: 'Duration', value: pkg.duration },
                    { label: 'Difficulty', value: pkg.difficulty },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-xl bg-cream-alt px-3 py-2.5">
                      <p className="font-mono text-[9px] uppercase tracking-widest text-charcoal/40 mb-1">{stat.label}</p>
                      <p className="text-xs font-semibold text-charcoal leading-tight">{stat.value}</p>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-charcoal/65 mb-5">
                  {pkg.desc}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-4 flex-1" role="list">
                  {pkg.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-charcoal/70">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-saffron flex-shrink-0" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Route & Season */}
                <div className="rounded-xl bg-cream-alt px-4 py-3 mb-5">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-charcoal/40 mb-1">Route</p>
                  <p className="text-xs text-charcoal/70 leading-relaxed">{pkg.route}</p>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-charcoal/40 mt-2 mb-1">Best Season</p>
                  <p className="text-xs text-charcoal/70">{pkg.bestSeason}</p>
                </div>

                {/* CTA */}
                <div className="pt-4 border-t border-border">
                  <Link
                    href={`/yatras/${pkg.slug}`}
                    className="block w-full text-center rounded-full bg-charcoal px-5 py-2.5 text-sm font-semibold text-parchment transition-all hover:bg-saffron hover:shadow-[0_0_18px_rgba(212,118,15,0.4)] group-hover:bg-saffron"
                    aria-label={`View ${pkg.name} package details`}
                  >
                    View Full Itinerary
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Inclusions / Exclusions */}
        <div className="reveal mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-cream-card p-7">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-moss mb-4 flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Included in all packages
            </p>
            <ul className="space-y-2" role="list">
              {inclusions.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-charcoal/70">
                  <span className="mt-1 text-moss text-xs">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-cream-card p-7">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-terracotta mb-4 flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
              Not included
            </p>
            <ul className="space-y-2" role="list">
              {exclusions.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-charcoal/70">
                  <span className="mt-1 text-terracotta text-xs">-</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="reveal mt-12 text-center">
          <p className="text-sm text-charcoal/55 mb-4">
            Not sure which package is right for you?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-saffron/40 px-7 py-3 text-sm font-medium text-saffron hover:bg-saffron hover:text-white transition-all"
          >
            Talk to our team →
          </Link>
        </div>
      </div>
    </section>
  );
}
