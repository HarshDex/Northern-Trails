import Link from 'next/link';
import Header from './Header';
import Footer from './Footer';
import ScrollRevealInit from './ScrollRevealInit';

function ItineraryItem({ day, title, desc, night, total }) {
  return (
    <div className="relative flex gap-5 pb-8 last:pb-0">
      <div className="flex flex-col items-center">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-saffron/40 bg-saffron/8 font-mono text-xs text-saffron z-10">
          {day}
        </div>
        {day < total && <div className="mt-2 w-px flex-1 bg-border" aria-hidden="true" />}
      </div>
      <div className="pb-2 flex-1">
        <div className="flex items-center gap-3 mb-1">
          <h4 className="font-display text-lg font-medium text-charcoal">{title}</h4>
          <span className="font-mono text-[9px] text-mist border border-border rounded-full px-2 py-0.5 uppercase">
            Night: {night}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-charcoal/60">{desc}</p>
      </div>
    </div>
  );
}

export default function YatraPage({ yatra }) {
  if (!yatra) return null;

  return (
    <>
      <ScrollRevealInit />
      <Header />
      <main>
        {/* Hero banner — dark dramatic header */}
        <section
          className="relative min-h-[60vh] flex items-end overflow-hidden pt-28 pb-16"
          style={{ background: `linear-gradient(160deg, #1A0806 0%, #3D1808 40%, #2C1408 100%)` }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(10,4,2,0.15) 0%, rgba(10,4,2,0.65) 100%)' }}
          />
          {/* mountain silhouette */}
          <svg className="absolute bottom-0 left-0 w-full opacity-[0.08]" viewBox="0 0 1440 160" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0,140 L180,60 L360,100 L540,30 L720,80 L900,20 L1080,70 L1260,40 L1440,80 L1440,160 L0,160Z" fill="currentColor" className="text-parchment"/>
          </svg>

          <div className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-10">
            <Link href="/#yatras" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-gold/60 hover:text-gold mb-8 transition-colors">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M11 6H1M1 6L5 2M1 6L5 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              All Yatras
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="font-mono text-xs border border-gold/40 rounded-full px-3 py-1 text-gold">
                {yatra.elevation}
              </span>
              <span className="font-mono text-xs border border-parchment/20 rounded-full px-3 py-1 text-parchment/60">
                {yatra.duration}
              </span>
              <span className="font-mono text-xs border border-parchment/20 rounded-full px-3 py-1 text-parchment/60">
                {yatra.difficulty}
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-6xl font-medium leading-tight tracking-tight text-parchment text-balance mb-4">
              {yatra.name}
            </h1>
            <p className="text-lg text-parchment/50 font-light italic max-w-xl">{yatra.tagline}</p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-saffron px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-saffron/90 hover:scale-[1.03]"
              >
                Book This Yatra
              </Link>
              <a
                href="https://wa.me/919876543210"
                className="flex items-center gap-2 rounded-full border border-parchment/20 px-6 py-3.5 text-sm text-parchment/70 hover:border-parchment/40 transition-colors"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Enquire on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Packages (combined yatra only) */}
        {yatra.packages?.length > 0 && (
          <section className="bg-cream-alt py-16">
            <div className="mx-auto max-w-7xl px-5 md:px-10">
              <p className="reveal font-mono text-xs uppercase tracking-[0.25em] text-saffron mb-2">Choose Your Package</p>
              <h2 className="reveal reveal-d1 font-display text-2xl md:text-3xl font-medium text-charcoal mb-8">
                Two ways to experience the twin darshan
              </h2>
              <div className="grid gap-5 md:grid-cols-2">
                {yatra.packages.map((pkg, i) => (
                  <div key={pkg.id} className={`reveal reveal-d${i + 1} rounded-2xl border bg-cream-card p-7 ${i === 0 ? 'border-saffron/30' : 'border-border'}`}>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-mist mb-1">{pkg.label}</p>
                        <h3 className="font-display text-2xl font-semibold text-charcoal">{pkg.name} Package</h3>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="font-mono text-lg font-semibold text-saffron">{pkg.price}</p>
                        <p className="text-xs text-mist">per person</p>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-charcoal/60 mb-3">{pkg.desc}</p>
                    {pkg.note && (
                      <p className="text-xs text-saffron/70 font-mono">{pkg.note}</p>
                    )}
                    <Link
                      href="/contact"
                      className={`mt-5 block w-full text-center rounded-full py-3 text-sm font-semibold transition-colors ${
                        i === 0
                          ? 'bg-saffron text-white hover:bg-saffron/90'
                          : 'border border-border text-charcoal/70 hover:border-saffron/40 hover:text-saffron'
                      }`}
                    >
                      Book {pkg.name} Package
                    </Link>
                  </div>
                ))}
              </div>
              {yatra.bookingPolicy && (
                <div className="reveal mt-6 rounded-xl border border-border bg-cream-card p-5">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-mist mb-3">Payment Terms</p>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {yatra.bookingPolicy.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-charcoal/60">
                        <span className="text-saffron mt-0.5">·</span> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Overview + Quick Facts */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-10 grid gap-12 md:grid-cols-[2fr_1fr] md:gap-16">
            <div>
              <p className="reveal font-mono text-xs uppercase tracking-[0.25em] text-gold mb-4">Overview</p>
              <p className="reveal reveal-d1 text-[16px] md:text-[17px] leading-relaxed text-charcoal/65">
                {yatra.overview}
              </p>

              <div className="reveal reveal-d2 mt-10">
                <p className="font-mono text-xs uppercase tracking-widest text-mist mb-5">Highlights</p>
                <ul className="space-y-3">
                  {yatra.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm text-charcoal/65">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5 text-saffron/70" aria-hidden="true">
                        <path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick facts sidebar */}
            <div className="reveal">
              <div className="sticky top-28 rounded-2xl border border-border bg-cream-card p-6 space-y-5">
                <h3 className="font-display text-lg font-semibold text-charcoal">Quick Facts</h3>
                {[
                  { label: 'Elevation', value: yatra.elevation },
                  { label: 'Duration', value: yatra.duration },
                  { label: 'Difficulty', value: yatra.difficulty },
                  { label: 'Group Size', value: `Max ${yatra.maxGroupSize} pax` },
                  { label: 'Best Months', value: yatra.bestMonths },
                  { label: 'Start / End', value: yatra.startEnd },
                  { label: 'Price Range', value: yatra.priceRange },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-start justify-between gap-2 text-sm pb-4 border-b border-border last:border-0 last:pb-0">
                    <span className="text-mist">{label}</span>
                    <span className="font-medium text-charcoal text-right">{value}</span>
                  </div>
                ))}

                <Link
                  href="/contact"
                  className="block w-full text-center rounded-full bg-saffron py-3 text-sm font-semibold text-white hover:bg-saffron/90 transition-colors"
                >
                  Book This Yatra
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Itinerary */}
        <section className="bg-cream-alt py-20">
          <div className="mx-auto max-w-4xl px-5 md:px-10">
            <p className="reveal font-mono text-xs uppercase tracking-[0.25em] text-saffron mb-2">Day by Day</p>
            <h2 className="reveal reveal-d1 font-display text-3xl md:text-4xl font-medium text-charcoal mb-12">
              The Full Itinerary
            </h2>
            <div className="reveal reveal-d2">
              {yatra.itinerary.map((item) => (
                <ItineraryItem
                  key={item.day}
                  {...item}
                  total={yatra.itinerary.length}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Inclusions / Exclusions */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-10 grid gap-10 md:grid-cols-2 md:gap-16">
            <div className="reveal">
              <p className="font-mono text-xs uppercase tracking-widest text-moss mb-5 flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7l3 3 7-7" stroke="var(--color-moss)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                What&rsquo;s Included
              </p>
              <ul className="space-y-3">
                {yatra.inclusions.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-charcoal/65">
                    <span className="h-5 w-5 shrink-0 mt-0.5 rounded-full bg-moss/10 border border-moss/20 flex items-center justify-center" aria-hidden="true">
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                        <path d="M1.5 4.5l2 2 4-4" stroke="var(--color-moss)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal reveal-d1">
              <p className="font-mono text-xs uppercase tracking-widest text-terracotta mb-5 flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 2l10 10M12 2L2 12" stroke="var(--color-terracotta)" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                Not Included
              </p>
              <ul className="space-y-3">
                {yatra.exclusions.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-charcoal/55">
                    <span className="h-5 w-5 shrink-0 mt-0.5 rounded-full bg-terracotta/8 border border-terracotta/20 flex items-center justify-center" aria-hidden="true">
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                        <path d="M2 2l5 5M7 2L2 7" stroke="var(--color-terracotta)" strokeWidth="1.3" strokeLinecap="round"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Cancellation policy */}
              {yatra.cancellationPolicy && (
                <div className="mt-8 rounded-xl border border-border bg-cream-alt p-5">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-mist mb-3">Cancellation Policy</p>
                  <ul className="space-y-1.5">
                    {yatra.cancellationPolicy.map((p) => (
                      <li key={p} className="text-sm text-charcoal/55 flex items-start gap-2">
                        <span className="text-mist mt-0.5">·</span>{p}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* FAQs */}
        {yatra.faqs?.length > 0 && (
          <section className="bg-cream-alt py-20">
            <div className="mx-auto max-w-3xl px-5 md:px-10">
              <p className="reveal font-mono text-xs uppercase tracking-[0.25em] text-gold mb-4">Common Questions</p>
              <h2 className="reveal reveal-d1 font-display text-3xl md:text-4xl font-medium text-charcoal mb-10">
                About This Yatra
              </h2>
              <div className="reveal reveal-d2 space-y-4">
                {yatra.faqs.map((faq) => (
                  <div key={faq.q} className="rounded-xl border border-border bg-cream-card p-6">
                    <h3 className="font-medium text-[15px] text-charcoal mb-3">{faq.q}</h3>
                    <p className="text-sm leading-relaxed text-charcoal/60">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <section
          className="py-20 text-center"
          style={{ background: 'linear-gradient(160deg, #1A0806 0%, #3D1808 50%, #1A0806 100%)' }}
        >
          <div className="mx-auto max-w-2xl px-5">
            <h2 className="reveal font-display text-3xl md:text-4xl font-medium text-parchment mb-4">
              Ready to walk this route?
            </h2>
            <p className="reveal reveal-d1 text-parchment/50 mb-8 leading-relaxed">
              Tell us your preferred dates and group size. We&rsquo;ll send you a detailed itinerary and quote within 24 hours.
            </p>
            <div className="reveal reveal-d2 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-saffron px-8 py-3.5 text-sm font-semibold text-white hover:bg-saffron/90 transition-all hover:scale-[1.02]"
              >
                Start Planning
              </Link>
              <a
                href="https://wa.me/919876543210"
                className="flex items-center gap-2 rounded-full border border-parchment/20 px-7 py-3.5 text-sm text-parchment/70 hover:border-parchment/40 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
