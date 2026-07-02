import Image from 'next/image';

export default function SacredPeak() {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: 'clamp(480px, 75vh, 900px)' }}>

      {/* Image */}
      <Image
        src="/packages/adi-kailash.jpg"
        alt="Adi Kailash — Chota Kailash, Uttarakhand"
        fill
        className="object-cover object-center"
        priority={false}
        sizes="100vw"
      />

      {/* Dark vignette top + bottom */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(4,4,8,0.35) 0%, transparent 30%, transparent 55%, rgba(4,4,8,0.80) 100%)',
        }}
      />

      {/* Bottom text */}
      <div className="absolute bottom-0 left-0 right-0 px-6 md:px-16 pb-10 md:pb-14">
        <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-saffron mb-2">
          Adi Kailash · Chota Kailash · 5,945 M
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-medium leading-tight text-white/90 text-balance max-w-2xl">
          Where earth touches<br />
          <span className="italic text-saffron/90">the eternal.</span>
        </h2>
      </div>

    </section>
  );
}
