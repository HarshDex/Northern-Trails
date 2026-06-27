import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ShopNotifyForm from '@/components/ShopNotifyForm';

export const metadata = {
  title: 'Shop — Himalayan Gear & Merchandise | Northern Trails',
  description:
    'Northern Trails shop — coming soon. Himalayan trekking essentials, merchandise, and locally made products from Dharchula.',
  alternates: { canonical: 'https://www.northerntrails.in/shop' },
};

const planned = [
  { name: 'Trek Essentials Kit',    desc: 'Hand-picked by our native guides — what actually works at altitude.',       icon: '🎒' },
  { name: 'Rang Weave Products',    desc: 'Handwoven woollen products from Bhotiya families in Darma Valley.',         icon: '🧵' },
  { name: 'Himalayan Local Honey',  desc: 'Pure wild honey from beekeepers in the Byans and Darma valleys.',           icon: '🍯' },
  { name: 'Northern Trails Merch',  desc: 'Caps, tees and trail notebooks — made for the mountains.',                  icon: '🏔' },
  { name: 'Yatra Photo Prints',     desc: 'Limited edition large-format prints from our Adi Kailash photo archive.',   icon: '🖼' },
  { name: 'Apricot & Apple Jams',   desc: 'Made from organically grown fruit in Duktu and Dar villages, Darma Valley.', icon: '🍑' },
];

export default function ShopPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream">
        {/* Hero */}
        <section
          className="relative min-h-[45vh] flex items-end overflow-hidden pt-28 pb-16"
          style={{ background: 'linear-gradient(160deg, #1A0806 0%, #3D1808 40%, #1A0806 100%)' }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at 60% 0%, rgba(212,118,15,0.12) 0%, transparent 55%)' }}
          />
          <div className="relative mx-auto w-full max-w-7xl px-5 md:px-10">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold mb-4">Coming Soon</p>
            <h1 className="font-display text-4xl md:text-6xl font-medium leading-tight tracking-tight text-parchment text-balance max-w-2xl">
              The mountains give more than views.
            </h1>
            <p className="mt-5 text-parchment/55 max-w-lg text-[15px] leading-relaxed">
              We are building a shop that brings Himalayan craft, native produce, and trail essentials from Dharchula to your door.
            </p>
          </div>
        </section>

        {/* What's coming */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <p className="font-mono text-xs uppercase tracking-widest text-saffron mb-3">What to Expect</p>
            <h2 className="font-display text-3xl font-medium text-charcoal mb-12 max-w-xl text-balance">
              Products sourced from the valleys we trek through.
            </h2>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {planned.map((item) => (
                <div key={item.name} className="rounded-2xl border border-border bg-cream-card p-7">
                  <div className="text-3xl mb-4" aria-hidden="true">{item.icon}</div>
                  <h3 className="font-display text-lg font-semibold text-charcoal mb-2">{item.name}</h3>
                  <p className="text-sm leading-relaxed text-charcoal/60">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Notify me */}
            <div className="mt-16 text-center rounded-3xl border border-border bg-cream-card p-12 md:p-16">
              <p className="font-mono text-xs uppercase tracking-widest text-saffron mb-4">Get Early Access</p>
              <h2 className="font-display text-3xl font-medium text-charcoal mb-4 text-balance">
                Be the first to know when we launch.
              </h2>
              <p className="text-charcoal/55 max-w-md mx-auto text-sm leading-relaxed mb-8">
                Leave your email and we will notify you when the shop opens — with an exclusive early-access offer.
              </p>
              <ShopNotifyForm />
            </div>

            {/* Back link */}
            <div className="mt-10 text-center">
              <Link href="/" className="text-sm text-charcoal/50 hover:text-saffron transition-colors">
                ← Back to homepage
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
