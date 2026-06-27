'use client';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const FloatingGem = dynamic(() => import('./three/FloatingGem'), {
  ssr: false,
  loading: () => null,
});

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
    price: '₹22,000',
    priceNote: 'starting price',
    gemColor: '#D4760F',
    desc: 'Adi Kailash and Om Parvat are one inseparable yatra — two sacred peaks visited on consecutive days from Gunji. The natural OM (ॐ) etched in eternal snow on Om Parvat at sunrise is unmissable.',
    highlights: ['Parvati Sarovar glacial lake', 'Natural OM symbol at Nabhidhang', 'Kalapani tri-junction', 'ILP handled by us'],
    bannerStyle: 'linear-gradient(135deg, #1A0806 0%, #3D1808 50%, #5C2C10 100%)',
    featured: true,
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
    price: '₹12,000',
    priceNote: 'starting price',
    gemColor: '#4A7B52',
    desc: 'Walk through apple orchards and ancient Bhotiya villages to the foot of the five sacred Panchachuli peaks. Darma Valley alone or the full base camp push — pick your trail.',
    highlights: ['Panchachuli 5-peak view', 'Darma Valley orchards', 'No ILP required', '6–14 day options'],
    bannerStyle: 'linear-gradient(135deg, #0d1f0a 0%, #1a3010 50%, #0d1f0a 100%)',
    featured: false,
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
    price: '₹10,000',
    priceNote: 'starting price',
    gemColor: '#5BA4CF',
    desc: 'Where the Panchachuli peaks fill the eastern horizon at sunrise. Day trek to Khaliya Top, Birthi Falls, Thamri Kund alpine lake, and the gateway to the legendary Milam Glacier route.',
    highlights: ['Khaliya Top 270° panorama', 'Birthi Falls (126 M)', 'Milam Glacier gateway', 'Hot springs at Madkot'],
    bannerStyle: 'linear-gradient(135deg, #06101a 0%, #0d1f30 50%, #06101a 100%)',
    featured: false,
  },
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
              className={`reveal reveal-d${i + 1} group relative rounded-3xl overflow-hidden border border-border bg-cream-card flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                pkg.featured ? 'lg:col-span-1' : ''
              }`}
            >
              {/* Dark hero banner */}
              <div
                className="relative h-52 flex flex-col justify-between p-6 overflow-hidden"
                style={{ background: pkg.bannerStyle }}
              >

                {/* Tag + Gem row */}
                <div className="relative z-10 flex items-start justify-between">
                  <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium tracking-wide ${pkg.tagColor}`}>
                    {pkg.tag}
                  </span>
                  {/* Three.js gem — desktop only, lazy loaded */}
                  <div className="hidden lg:block" aria-hidden="true">
                    <FloatingGem color={pkg.gemColor} size={90} />
                  </div>
                </div>

                {/* Package name in banner */}
                <div className="relative z-10">
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
                <ul className="space-y-1.5 mb-6 flex-1" role="list">
                  {pkg.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-charcoal/70">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-saffron flex-shrink-0" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Price + CTA */}
                <div className="flex items-end justify-between pt-5 border-t border-border">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-charcoal/40">{pkg.priceNote}</p>
                    <p className="font-display text-2xl font-semibold text-charcoal">{pkg.price}</p>
                  </div>
                  <Link
                    href={`/yatras/${pkg.slug}`}
                    className="rounded-full bg-charcoal px-5 py-2.5 text-sm font-semibold text-parchment transition-all hover:bg-saffron hover:shadow-[0_0_18px_rgba(212,118,15,0.4)] group-hover:bg-saffron"
                    aria-label={`View ${pkg.name} package details`}
                  >
                    View Package
                  </Link>
                </div>
              </div>
            </article>
          ))}
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
