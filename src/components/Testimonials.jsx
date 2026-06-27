const testimonials = [
  {
    name: 'Rajesh Sharma',
    from: 'New Delhi',
    yatra: 'Adi Kailash & Om Parvat',
    month: 'September 2024',
    rating: 5,
    initials: 'RS',
    avatarClass: 'bg-saffron/15 text-saffron',
    quote:
      'Om Parvat darshan at sunrise changed something in me permanently. The natural Om in the snow — tears rolled down my cheeks without warning. Northern Trails made every logistical detail invisible so we could focus entirely on the experience. The native guides know this mountain like their own home, because it is.',
  },
  {
    name: 'Priya Menon',
    from: 'Bengaluru',
    yatra: 'Panchachuli Base Camp',
    month: 'October 2024',
    rating: 5,
    initials: 'PM',
    avatarClass: 'bg-moss/15 text-moss',
    quote:
      'I have done treks with big-city agencies before. There is simply no comparison. Northern Trails put us in homestays with actual valley families, hired porters from the local villages, and gave a portion of our fees to conservation work. The Panchachuli views from base camp were beyond anything I imagined. Will return for Adi Kailash.',
  },
  {
    name: 'Vikram Nair',
    from: 'Mumbai',
    yatra: 'Darma Valley Trail',
    month: 'June 2024',
    rating: 5,
    initials: 'VN',
    avatarClass: 'bg-gold/15 text-gold',
    quote:
      "Third time visiting Darma Valley, first time with a native guide. The difference is night and day. Harish (our guide) stopped at a village where his grandfather's family lives — the welcome we received was extraordinary. That authenticity cannot be packaged. Northern Trails is simply the only way to experience these valleys.",
  },
];

function StarRating({ count }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill={i < count ? '#B8922A' : 'none'} stroke="#B8922A" strokeWidth="1" aria-hidden="true">
          <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.44L7 8.885l-3.09 1.625L4.5 7.07 2 4.635l3.455-.505L7 1z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative bg-cream-alt py-24 md:py-32 overflow-hidden">
      {/* subtle grid pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-charcoal) 1px, transparent 1px), linear-gradient(90deg, var(--color-charcoal) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-saffron">
              Yatri Voices
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight text-charcoal text-balance">
              From those who walked with us.
            </h2>
          </div>
          <p className="max-w-xs text-sm text-charcoal/45 leading-relaxed">
            Every review below is from a real yatri — names, routes, and months are unedited.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal reveal-d${i + 1} card-hover group rounded-2xl border border-border bg-cream-card p-7 flex flex-col gap-5`}
            >
              <StarRating count={t.rating} />

              <blockquote className="flex-1 text-[15px] leading-relaxed text-charcoal/65 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${t.avatarClass}`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-charcoal">{t.name}</p>
                  <p className="text-xs text-mist">{t.from} · {t.yatra}</p>
                  <p className="text-xs text-mist/60">{t.month}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
