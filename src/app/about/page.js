import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollRevealInit from '@/components/ScrollRevealInit';

export const metadata = {
  title: 'About Us — Native Dharchula Team | Northern Trails',
  description:
    'Northern Trails is a native Dharchula-based travel agency. Meet the team that grew up in these valleys and now leads yatras to Adi Kailash, Om Parvat, Panchachuli and Darma Valley.',
};

const team = [
  {
    initials: 'HP',
    name: 'Harish Panwar',
    role: 'Founder & Lead Guide',
    bio: 'Born in Dharchula. Has been walking the routes to Adi Kailash and Om Parvat since he was 14. Holds a certificate in mountain rescue and wilderness first aid.',
    color: 'bg-saffron/15 text-saffron',
  },
  {
    initials: 'DM',
    name: 'Deepa Mehra',
    role: 'Operations & Permits',
    bio: 'Handles all ILP processing, group logistics, and homestay coordination. Has deep relationships with families across the Darma and Byans valleys.',
    color: 'bg-gold/15 text-gold',
  },
  {
    initials: 'RB',
    name: 'Ratan Bisht',
    role: 'Trek Lead, High Routes',
    bio: 'Veteran of over 60 Adi Kailash circuits and 40 Om Parvat darshans. Ratan has guided yatris of all ages and fitness levels across the border-area routes.',
    color: 'bg-saffron/10 text-saffron',
  },
];

const values = [
  { title: 'Native by default', body: 'Every person on our team is from Dharchula or the surrounding valleys. This isn\'t a marketing claim — it shapes everything we do.' },
  { title: 'Conservation first', body: 'A fixed share of every booking goes directly into local conservation and livelihood work. We are accountable for that money.' },
  { title: 'Small groups, real attention', body: 'We cap group sizes deliberately. Every yatri is known by name, not by booking number.' },
  { title: 'No hidden costs', body: 'Our packages are all-inclusive and clearly defined. We will tell you exactly what is and isn\'t included before you book.' },
];

export default function AboutPage() {
  return (
    <>
      <ScrollRevealInit />
      <Header />
      <main>
        {/* Hero — stays dark for visual contrast */}
        <section className="relative min-h-[50vh] flex items-end overflow-hidden pt-28 pb-16"
          style={{ background: 'linear-gradient(160deg, #1A0806 0%, #3D1808 40%, #1A0806 100%)' }}>
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at 60% 0%, rgba(212,118,15,0.12) 0%, transparent 55%)' }}
          />
          <div className="relative mx-auto w-full max-w-7xl px-5 md:px-10">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold mb-4">Our Story</p>
            <h1 className="font-display text-4xl md:text-6xl font-medium leading-tight tracking-tight text-parchment text-balance max-w-3xl">
              We grew up in these valleys. Now we share them with the world.
            </h1>
            <p className="mt-6 text-[16px] leading-relaxed text-parchment/60 max-w-xl">
              Northern Trails was started by a small team of people from Dharchula who got tired of watching
              tourists pay city-based agencies for experiences that rarely reflected the real Himalaya.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="bg-cream py-20 text-charcoal">
          <div className="mx-auto max-w-7xl px-5 md:px-10 grid gap-12 md:grid-cols-2 md:gap-20">
            <div className="reveal">
              <p className="font-mono text-xs uppercase tracking-widest text-saffron mb-6">How We Started</p>
              <div className="space-y-5 text-[16px] leading-relaxed text-charcoal/70">
                <p>
                  Dharchula has been a staging point for Himalayan pilgrimage for centuries. The routes to
                  Adi Kailash, Om Parvat, and the border valleys of Darma and Byans have been walked by devotees
                  long before the word &ldquo;trekking&rdquo; existed.
                </p>
                <p>
                  When organised tourism came to the region, most of the money flowed to agencies in Delhi,
                  Haridwar and Kathgodam. Local guides were hired seasonally. Porters were paid minimally.
                  Homestay families got a small cut. The valleys themselves got the footfall but not the income.
                </p>
                <p>
                  Northern Trails was built to change that. Every rupee you pay stays in the mountains you
                  are visiting. Our guides are from here. Our porters are from here. Our homestay families
                  are people we have known all our lives.
                </p>
              </div>
            </div>
            <div className="reveal reveal-d1">
              <p className="font-mono text-xs uppercase tracking-widest text-saffron mb-6">Our Values</p>
              <div className="space-y-5">
                {values.map((v) => (
                  <div key={v.title} className="border-l-2 border-border pl-5 hover:border-saffron/50 transition-colors">
                    <h3 className="font-display text-lg font-semibold text-charcoal mb-1">{v.title}</h3>
                    <p className="text-sm leading-relaxed text-charcoal/60">{v.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-cream-alt py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <div className="reveal mb-12">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-saffron mb-4">The Team</p>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-charcoal text-balance max-w-xl">
                The people who will be with you on the trail.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {team.map((member, i) => (
                <div key={member.name} className={`reveal reveal-d${i + 1} rounded-2xl border border-border bg-cream-card p-7`}>
                  <div className={`w-14 h-14 rounded-full ${member.color} flex items-center justify-center font-semibold text-lg mb-5`}>
                    {member.initials}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-charcoal">{member.name}</h3>
                  <p className="text-xs text-charcoal/50 mt-1 mb-4 font-mono uppercase tracking-wide">{member.role}</p>
                  <p className="text-sm leading-relaxed text-charcoal/60">{member.bio}</p>
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
              Ready to walk with us?
            </h2>
            <p className="reveal reveal-d1 text-parchment/55 mb-8 text-sm leading-relaxed">
              Get in touch and we&rsquo;ll build a yatra around your dates and preferences.
            </p>
            <div className="reveal reveal-d2 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="rounded-full bg-saffron px-7 py-3.5 text-sm font-semibold text-white hover:bg-saffron/90 transition-colors">
                Plan Your Yatra
              </Link>
              <Link href="/#yatras" className="rounded-full border border-parchment/20 px-7 py-3.5 text-sm text-parchment/75 hover:border-parchment/40 transition-colors">
                View All Routes
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
