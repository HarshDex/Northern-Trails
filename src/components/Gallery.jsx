/* Replace gradient placeholders with real <Image> components when photos are ready.
   Place 6 photos (min 1200×800px) in /public/gallery/ and update src below. */

const placeholders = [
  {
    label: 'Adi Kailash (Chhota Kailash) at dawn',
    gradient: 'from-[#0a1e35] via-[#0d2440] to-[#1a2818]',
    tag: '5,945 M · Jolingkong',
    large: true,
  },
  {
    label: 'Natural Om (ॐ) in snow · Om Parvat',
    gradient: 'from-[#1a0a06] via-[#3d1808] to-[#1a2818]',
    tag: '6,191 M · Nabhidhang',
    large: false,
  },
  {
    label: 'Panchachuli Base Camp meadows',
    gradient: 'from-[#1a1208] via-[#221808] to-[#1a2818]',
    tag: '4,500 M · Nagling',
    large: false,
  },
  {
    label: 'Darma Valley apple orchards',
    gradient: 'from-[#081a0c] via-[#0a2010] to-[#1a2818]',
    tag: '2,650 M · Duktu',
    large: false,
  },
  {
    label: 'Parvati Sarovar — holy glacial lake',
    gradient: 'from-[#0a1520] via-[#0e1c28] to-[#1a2818]',
    tag: '4,750 M · Jolingkong',
    large: false,
  },
  {
    label: 'Kali River border valley',
    gradient: 'from-[#071a0d] via-[#0a2010] to-[#1a2818]',
    tag: '3,350 M · Gunji',
    large: false,
  },
];

export default function Gallery() {
  return (
    <section className="relative bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="reveal mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-saffron">
            From the Trail
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight text-charcoal text-balance">
            The mountains speak for themselves.
          </h2>
          <p className="mt-4 text-sm text-charcoal/45 max-w-lg leading-relaxed">
            Photos taken by our guides and yatris across seasons. No filters — just the Himalaya as it is.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {/* Large card — left column, 2 rows */}
          <div
            className={`reveal col-span-2 md:col-span-1 md:row-span-2 rounded-2xl overflow-hidden border border-border bg-gradient-to-br ${placeholders[0].gradient} relative`}
            style={{ minHeight: '380px' }}
          >
            <GalleryCard item={placeholders[0]} />
          </div>

          {/* Remaining 5 cards */}
          {placeholders.slice(1).map((item, i) => (
            <div
              key={item.label}
              className={`reveal reveal-d${(i % 3) + 1} rounded-2xl overflow-hidden border border-border bg-gradient-to-br ${item.gradient} relative`}
              style={{ minHeight: '180px' }}
            >
              <GalleryCard item={item} />
            </div>
          ))}
        </div>

        <p className="reveal mt-6 text-xs text-center text-mist/50 font-mono">
          More photos coming soon · Your journey photos may appear here
        </p>
      </div>
    </section>
  );
}

function GalleryCard({ item }) {
  return (
    <div
      className="absolute inset-0 flex flex-col justify-end p-5"
      style={{ background: 'linear-gradient(to top, rgba(6,10,8,0.85) 0%, transparent 55%)' }}
    >
      {/* Mountain icon watermark */}
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06] w-24 h-24"
        viewBox="0 0 80 60"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M40 5 L70 55 H10 Z" />
        <path d="M60 20 L80 55 H40 Z" opacity="0.7"/>
      </svg>

      <span className="font-mono text-[9px] uppercase tracking-wider text-gold/70 mb-1">{item.tag}</span>
      <span className="font-display text-sm font-medium text-white/90 leading-snug">{item.label}</span>
    </div>
  );
}
