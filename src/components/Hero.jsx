'use client';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const HeroParticles = dynamic(() => import('./three/HeroParticles'), {
  ssr: false,
  loading: () => null,
});

const stats = [
  { value: '5,945 M', label: 'Adi Kailash' },
  { value: '6,191 M', label: 'Om Parvat' },
  { value: '5–7 Days', label: 'Twin Darshan' },
  { value: '100%', label: 'Native Team' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" aria-label="Hero">

      {/* Background photo — LCP priority */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Adi Kailash peak and Parvati Sarovar sacred lake at golden hour, Jolingkong, Uttarakhand"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Left-side text legibility overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[1]"
          style={{
            background:
              'linear-gradient(105deg, rgba(5,2,1,0.90) 0%, rgba(5,2,1,0.78) 30%, rgba(5,2,1,0.38) 58%, rgba(5,2,1,0.05) 100%)',
          }}
        />
        {/* Top/bottom vignette */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[1]"
          style={{
            background:
              'linear-gradient(to bottom, rgba(5,2,1,0.45) 0%, transparent 38%, rgba(5,2,1,0.60) 100%)',
          }}
        />
        {/* Saffron warmth at bottom */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 z-[2] h-72 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(212,118,15,0.15) 0%, transparent 100%)' }}
        />
      </div>

      {/* Three.js ember/spark particles (desktop: 170, mobile: 55) */}
      <HeroParticles />

      {/* Content */}
      <div className="relative z-[10] mx-auto w-full max-w-7xl px-5 md:px-10 pt-32 pb-24 md:pt-40 md:pb-28">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.28em] text-parchment/70 mb-5">
            <span className="h-px w-8 bg-saffron/60" aria-hidden="true" />
            Dharchula, Uttarakhand · Native Mountain Team
          </p>

          {/* Headline */}
          <h1 className="font-display leading-[1.05] tracking-tight text-parchment" style={{ textShadow: '0 2px 24px rgba(0,0,0,0.85), 0 1px 4px rgba(0,0,0,0.7)' }}>
            <span className="block text-5xl sm:text-6xl md:text-7xl font-medium">
              We don&rsquo;t just guide you
            </span>
            <em className="block not-italic text-5xl sm:text-6xl md:text-7xl font-medium text-saffron mt-1">
              to the mountains.
            </em>
            <span className="block text-3xl sm:text-4xl md:text-5xl font-light italic text-parchment/50 mt-2">
              We live in them.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 text-base md:text-lg leading-relaxed text-parchment/65 max-w-xl">
            Northern Trails is a native Dharchula team running sacred yatras to{' '}
            <strong className="text-parchment/90 font-medium">Adi Kailash &amp; Om Parvat</strong>,
            Panchachuli Base Camp, Darma Valley, and Munsyari — guided by people who call these peaks home.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/#packages"
              className="rounded-full bg-saffron px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-saffron/90 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(212,118,15,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-saffron"
            >
              Explore Our Yatras →
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-parchment/30 bg-white/5 px-8 py-3.5 text-sm font-medium text-parchment/85 backdrop-blur-sm transition-all hover:border-parchment/55 hover:bg-white/10"
            >
              Plan a Custom Yatra
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <dl className="mt-16 md:mt-20 inline-flex flex-wrap gap-px rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-start px-6 py-4 md:px-8 md:py-5">
              <dt className="font-mono text-lg md:text-xl font-semibold text-parchment leading-none">
                {s.value}
              </dt>
              <dd className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-parchment/45">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>

        {/* Scroll cue */}
        <div className="mt-12 flex items-center gap-2 text-parchment/35" aria-hidden="true">
          <svg width="14" height="20" viewBox="0 0 14 20" fill="none" className="animate-bounce">
            <rect x="1" y="1" width="12" height="18" rx="6" stroke="currentColor" strokeWidth="1.2"/>
            <rect x="6" y="5" width="2" height="4" rx="1" fill="currentColor"/>
          </svg>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
