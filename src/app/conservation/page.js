import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollRevealInit from '@/components/ScrollRevealInit';

export const metadata = {
  title: 'Conservation & Community Commitment | Northern Trails',
  description:
    'How Northern Trails protects the Himalayan environment and supports local communities in Dharchula, Darma and Byans valleys through every yatra we run.',
};

const actions = [
  {
    title: 'Zero Waste Policy',
    body: 'Every camp generates waste. Every piece of that waste comes back down. We carry refillable water systems, ban single-use plastics, and brief every yatri on our pack-in/pack-out approach before departure.',
    icon: '♻',
    color: 'text-charcoal border-border bg-cream',
  },
  {
    title: 'Local Hiring — Always First',
    body: 'Guides, porters, cooks, and mule owners are hired from Darma, Byans, and Dharchula — not from agencies elsewhere. We pay above-region wages and provide proper gear to every person in our supply chain.',
    icon: '🤝',
    color: 'text-charcoal border-border bg-cream',
  },
  {
    title: 'Conservation Fund',
    body: 'A fixed percentage of every booking is routed into a conservation fund used for trail maintenance, reforestation, and community infrastructure. Receipts are available on request.',
    icon: '🌱',
    color: 'text-charcoal border-border bg-cream',
  },
  {
    title: 'Capped Group Sizes',
    body: 'We do not run mass groups. Every route has a maximum — enforced, not suggested. Smaller groups mean less trail erosion, more personal attention, and less pressure on the local ecosystem.',
    icon: '👣',
    color: 'text-charcoal border-border bg-cream',
  },
  {
    title: 'Seasonal Cleanup Drives',
    body: 'At the start and end of every season, we run dedicated cleanup drives on our most-used routes. In 2024, we cleared over 240 kg of waste from the Gunji–Jolingkong corridor alone.',
    icon: '🧹',
    color: 'text-charcoal border-border bg-cream',
  },
  {
    title: 'Cultural Respect Protocol',
    body: 'We brief every group on local customs, sacred sites, and community boundaries before they begin. Our guides are from these communities — they set the standards for respectful behaviour on the trail.',
    icon: '🙏',
    color: 'text-charcoal border-border bg-cream',
  },
];

const impactStats = [
  { value: '240+', label: 'Kg of waste cleared per season', sub: '2024 season, Gunji–Jolingkong route' },
  { value: '30+',  label: 'Local families employed',        sub: 'Guides, porters, cooks, homestays' },
  { value: '5',    label: 'Villages directly supported',    sub: 'Darma & Byans valleys' },
  { value: '100%', label: 'Native hire rate',               sub: 'Every team member is local' },
];

export default function ConservationPage() {
  return (
    <>
      <ScrollRevealInit />
      <Header />
      <main>
        {/* Hero — stays dark */}
        <section className="relative min-h-[45vh] flex items-end overflow-hidden pt-28 pb-16"
          style={{ background: 'linear-gradient(160deg, #1A0806 0%, #2C1208 40%, #1A0806 100%)' }}>
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at 20% 0%, rgba(74,120,82,0.12) 0%, transparent 55%)' }}
          />
          <div className="relative mx-auto w-full max-w-7xl px-5 md:px-10">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold mb-4">Our Commitment</p>
            <h1 className="font-display text-4xl md:text-6xl font-medium leading-tight tracking-tight text-parchment text-balance max-w-3xl">
              The mountain doesn&rsquo;t belong to us. We borrow it from those who come after.
            </h1>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-cream py-16">
          <div className="mx-auto max-w-3xl px-5 md:px-10">
            <p className="reveal text-[16px] md:text-[18px] leading-relaxed text-charcoal/70">
              Tourism to the high Himalaya has real costs — trail erosion, waste, cultural disruption,
              and an economic model that extracts value from valleys while leaving little behind.
              Northern Trails was started specifically to operate differently. This page describes exactly
              how we do that.
            </p>
          </div>
        </section>

        {/* Actions grid */}
        <section className="bg-cream-alt py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <p className="reveal font-mono text-xs uppercase tracking-[0.25em] text-saffron mb-3">What We Do</p>
            <h2 className="reveal reveal-d1 font-display text-3xl md:text-4xl font-medium text-charcoal mb-12 text-balance max-w-xl">
              Six concrete commitments, not aspirational statements.
            </h2>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {actions.map((a, i) => (
                <div key={a.title} className={`reveal reveal-d${(i % 3) + 1} rounded-2xl border p-7 ${a.color}`}>
                  <div className="text-2xl mb-4" aria-hidden="true">{a.icon}</div>
                  <h3 className="font-display text-lg font-semibold text-charcoal mb-3">{a.title}</h3>
                  <p className="text-sm leading-relaxed text-charcoal/60">{a.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact stats */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <p className="reveal font-mono text-xs uppercase tracking-[0.25em] text-saffron mb-10">2024 Impact Numbers</p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {impactStats.map((s, i) => (
                <div key={s.label} className={`reveal reveal-d${i + 1} rounded-2xl border border-border bg-cream-card p-7`}>
                  <dt className="font-mono text-4xl font-medium text-saffron">{s.value}</dt>
                  <dd className="mt-3 text-sm font-medium text-charcoal">{s.label}</dd>
                  <p className="mt-1 text-xs text-charcoal/50">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA — dark for emphasis */}
        <section className="py-16 text-center"
          style={{ background: 'linear-gradient(135deg, #1A0806 0%, #3D1808 50%, #1A0806 100%)' }}>
          <div className="mx-auto max-w-xl px-5">
            <h2 className="reveal font-display text-3xl font-medium text-parchment mb-4">
              Walk with a team that cares.
            </h2>
            <p className="reveal reveal-d1 text-parchment/50 mb-8 text-sm leading-relaxed">
              When you book with Northern Trails, your yatra directly funds this work.
            </p>
            <div className="reveal reveal-d2 flex flex-wrap justify-center gap-4">
              <Link href="/#yatras" className="rounded-full bg-saffron px-7 py-3.5 text-sm font-semibold text-white hover:bg-saffron/90 transition-colors">
                View Our Yatras
              </Link>
              <Link href="/contact" className="rounded-full border border-parchment/20 px-7 py-3.5 text-sm text-parchment/75 hover:border-parchment/40 transition-colors">
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
