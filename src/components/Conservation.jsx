const stats = [
  { value: '240+', label: 'Kg waste cleared per season' },
  { value: '30+',  label: 'Local families employed' },
  { value: '5',    label: 'Villages directly supported' },
  { value: '₹0',   label: 'Plastic water bottles used on our treks' },
];

const commitments = [
  'Mandatory waste pack-out on every route — what goes in comes back out',
  'Fixed percentage of every booking routed to local conservation funds',
  'All porters paid above minimum wage with proper gear and equipment',
  'Capped group sizes to limit trail impact on sensitive ecosystems',
  'Reusable water refill stations at all major camps',
];

export default function Conservation() {
  return (
    <section className="relative bg-cream py-24 md:py-32 overflow-hidden">
      {/* mountain outline — very subtle */}
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 right-0 opacity-[0.04]">
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="w-full h-40">
          <path d="M0,160 L180,80 L360,120 L540,40 L720,100 L900,30 L1080,90 L1260,50 L1440,100 L1440,200 L0,200Z"
            fill="var(--color-charcoal)"/>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-14 md:grid-cols-2 md:gap-20 items-center">
          {/* Left */}
          <div>
            <p className="reveal font-mono text-xs uppercase tracking-[0.25em] text-moss">
              Conservation &amp; Community
            </p>
            <h2 className="reveal reveal-d1 mt-4 text-balance font-display text-4xl font-medium leading-tight tracking-tight text-charcoal md:text-5xl">
              A yatra should leave the mountain better than it found it.
            </h2>
            <p className="reveal reveal-d2 mt-6 text-[15px] leading-relaxed text-charcoal/60">
              Tourism in the high Himalaya can wear down the very places people come to experience.
              We run our yatras differently — every decision, from group size to procurement,
              is made with the mountain&rsquo;s long-term health in mind.
            </p>

            <ul className="reveal reveal-d3 mt-8 space-y-3">
              {commitments.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-charcoal/65">
                  <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full border border-moss/40 flex items-center justify-center" aria-hidden="true">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1.5 4l1.8 2L6.5 2" stroke="var(--color-moss)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {c}
                </li>
              ))}
            </ul>

            <a
              href="/conservation"
              className="reveal reveal-d4 mt-8 inline-flex items-center gap-2 text-sm font-semibold text-saffron hover:text-saffron/80 transition-colors"
            >
              Read our full conservation commitment
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 7H13M13 7L8 2M13 7L8 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Right — stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`reveal reveal-d${i + 1} rounded-2xl border border-border bg-cream-card p-6 md:p-7`}
              >
                <dt className="font-mono text-3xl md:text-4xl font-semibold text-charcoal">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-xs leading-snug text-charcoal/55">
                  {stat.label}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
