import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollRevealInit from '@/components/ScrollRevealInit';

export const metadata = {
  title: 'Gallery — Himalayan Yatra Photos | Northern Trails',
  description:
    'Photos from Adi Kailash, Om Parvat, Panchachuli Base Camp, Darma Valley, and Munsyari — captured by our native Dharchula team and yatris.',
  alternates: { canonical: 'https://www.northerntrails.in/gallery' },
};

const galleryItems = [
  { label: 'Adi Kailash at sunrise',       region: 'Adi Kailash & Om Parvat', gradient: 'from-[#3D1808] via-[#5C2C10] to-[#1A0806]' },
  { label: 'Parvati Sarovar reflections',   region: 'Adi Kailash & Om Parvat', gradient: 'from-[#1A2844] via-[#2A3D5C] to-[#0A1828]' },
  { label: 'Om Parvat OM symbol at dawn',   region: 'Adi Kailash & Om Parvat', gradient: 'from-[#2C1A08] via-[#4A2C10] to-[#1A0C04]' },
  { label: 'Panchachuli five peaks',         region: 'Panchachuli & Darma Valley', gradient: 'from-[#0d1f0a] via-[#1a3010] to-[#061408]' },
  { label: 'Apple orchards, Duktu village', region: 'Panchachuli & Darma Valley', gradient: 'from-[#1a200a] via-[#2a3210] to-[#0d1408]' },
  { label: 'Darma Valley Bhotiya village',  region: 'Panchachuli & Darma Valley', gradient: 'from-[#0d180a] via-[#1a2810] to-[#061008]' },
  { label: 'Khaliya Top panorama',          region: 'Munsyari',                  gradient: 'from-[#06101a] via-[#0d1f30] to-[#020810]' },
  { label: 'Birthi Falls in cedar forest',  region: 'Munsyari',                  gradient: 'from-[#061a10] via-[#0d2818] to-[#020c08]' },
  { label: 'Thamri Kund alpine lake',       region: 'Munsyari',                  gradient: 'from-[#0a1220] via-[#142040] to-[#060c18]' },
  { label: 'Kali River valley drive',       region: 'Adi Kailash & Om Parvat',  gradient: 'from-[#201408] via-[#301e0a] to-[#100804]' },
  { label: 'Gunji village at 3,350 M',     region: 'Adi Kailash & Om Parvat',  gradient: 'from-[#1C2419] via-[#2C3828] to-[#0E1610]' },
  { label: 'Nanda Devi Temple, Munsyari',  region: 'Munsyari',                  gradient: 'from-[#1a1408] via-[#282010] to-[#0c0a04]' },
];

export default function GalleryPage() {
  return (
    <>
      <ScrollRevealInit />
      <Header />
      <main>
        {/* Hero */}
        <section
          className="relative min-h-[40vh] flex items-end overflow-hidden pt-28 pb-14"
          style={{ background: 'linear-gradient(160deg, #1A0806 0%, #3D1808 40%, #1A0806 100%)' }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(212,118,15,0.12) 0%, transparent 60%)' }}
          />
          <div className="relative mx-auto w-full max-w-7xl px-5 md:px-10">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold mb-4">Visual Journal</p>
            <h1 className="font-display text-4xl md:text-6xl font-medium leading-tight tracking-tight text-parchment text-balance max-w-2xl">
              The Himalaya through the eyes of those who live here.
            </h1>
          </div>
        </section>

        {/* Gallery grid */}
        <section className="bg-cream py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-10">

            {/* Filter hint */}
            <div className="reveal flex flex-wrap gap-2 mb-10">
              {['All', 'Adi Kailash & Om Parvat', 'Panchachuli & Darma Valley', 'Munsyari'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-cream-card px-4 py-1.5 text-xs font-medium text-charcoal/60 cursor-pointer hover:border-saffron/40 hover:text-saffron transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Masonry-style grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
              {galleryItems.map((item, i) => (
                <div
                  key={item.label}
                  className={`reveal reveal-d${(i % 3) + 1} break-inside-avoid rounded-2xl overflow-hidden border border-border`}
                  style={{ aspectRatio: i % 3 === 1 ? '4/5' : '4/3' }}
                >
                  <div
                    className="w-full h-full min-h-[200px] flex flex-col justify-end p-5 relative"
                    style={{ background: `linear-gradient(135deg, ${item.gradient.replace('from-', '').replace('via-', '').replace('to-', '').split(' ').filter(Boolean).join(', ')})` }}
                    role="img"
                    aria-label={item.label}
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-0"
                      style={{ background: `linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)` }}
                    />
                    <div className="relative z-10">
                      <p className="font-mono text-[9px] uppercase tracking-widest text-parchment/45 mb-1">{item.region}</p>
                      <p className="text-sm font-medium text-parchment/90 leading-tight">{item.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Coming soon notice */}
            <div className="reveal mt-14 text-center rounded-2xl border border-border bg-cream-card p-10">
              <p className="font-mono text-xs uppercase tracking-widest text-charcoal/40 mb-3">Photo Library</p>
              <h2 className="font-display text-2xl font-medium text-charcoal mb-3">Real photos coming soon.</h2>
              <p className="text-sm text-charcoal/55 max-w-md mx-auto leading-relaxed">
                We are building our visual library from recent seasons. In the meantime, follow us on Instagram
                for regular updates from the trail.
              </p>
              <a
                href="https://instagram.com/northerntrails"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-saffron/40 px-6 py-2.5 text-sm font-medium text-saffron hover:bg-saffron hover:text-white transition-all"
              >
                @northerntrails on Instagram
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
