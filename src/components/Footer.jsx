import Link from 'next/link';

const packageLinks = [
  { href: '/yatras/adi-kailash-om-parvat',   label: 'Adi Kailash & Om Parvat' },
  { href: '/yatras/panchachuli-darma-valley', label: 'Panchachuli & Darma Valley' },
  { href: '/yatras/munsyari',                 label: 'Munsyari Retreat' },
];

const companyLinks = [
  { href: '/about',       label: 'About Us' },
  { href: '/social-work', label: 'Social Work' },
  { href: '/gallery',     label: 'Gallery' },
  { href: '/shop',        label: 'Shop' },
  { href: '/contact',     label: 'Contact' },
];

export default function Footer() {
  return (
    <>
      {/* CTA band */}
      <section
        className="relative py-24 text-center md:py-32 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #1A0806 0%, #3D1808 40%, #2C1208 100%)' }}
        aria-label="Call to action"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.06]">
          <svg viewBox="0 0 1440 300" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
            <path d="M0,250 L180,100 L360,160 L540,60 L720,130 L900,40 L1080,110 L1260,70 L1440,120 L1440,300 L0,300Z"
              fill="var(--color-parchment)"/>
          </svg>
        </div>
        <div className="relative mx-auto max-w-3xl px-5">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold">Plan Your Yatra</p>
          <h2 className="mt-4 text-balance font-display text-4xl font-medium leading-tight tracking-tight text-parchment md:text-5xl">
            Tell us when you want to go.
            <span className="block italic text-parchment/55 mt-1">We&rsquo;ll handle the mountain.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-parchment/50">
            Adi Kailash &amp; Om Parvat, Panchachuli, Darma Valley, Munsyari — write to our native
            Dharchula team and get a route plan built around you.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-saffron px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-saffron/90 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(212,118,15,0.4)]"
            >
              Get a Custom Itinerary
            </Link>
            <a
              href="https://wa.me/919876543210"
              className="flex items-center gap-2.5 rounded-full border border-parchment/20 px-7 py-3.5 text-sm font-medium text-parchment/75 transition-all hover:border-[#25D366]/50 hover:text-[#25D366]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Main footer */}
      <footer
        className="border-t border-line py-14 text-parchment/50"
        style={{ background: 'var(--color-void)' }}
      >
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr] md:gap-16">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-mono font-semibold">
                  NT
                </span>
                <span className="font-display text-lg font-semibold text-parchment">Northern Trails</span>
              </div>
              <p className="text-sm leading-relaxed max-w-xs">
                A native Dharchula travel team running Himalayan yatras with conservation
                and community at the centre.
              </p>
              <div className="mt-5 space-y-1.5 text-sm">
                <p>
                  <span className="text-mist/60">Location:</span>{' '}
                  Dharchula, Pithoragarh, Uttarakhand
                </p>
                <p>
                  <span className="text-mist/60">Email:</span>{' '}
                  <a href="mailto:hello@northerntrails.in" className="hover:text-gold transition-colors">
                    hello@northerntrails.in
                  </a>
                </p>
                <p>
                  <span className="text-mist/60">WhatsApp:</span>{' '}
                  <a href="https://wa.me/919876543210" className="hover:text-[#25D366] transition-colors">
                    +91 98765 43210
                  </a>
                </p>
              </div>
            </div>

            {/* Packages */}
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-mist mb-4">Packages</p>
              <ul className="space-y-2.5" role="list">
                {packageLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm hover:text-gold transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-mist mb-4">Company</p>
              <ul className="space-y-2.5" role="list">
                {companyLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm hover:text-gold transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <p className="font-mono text-[10px] uppercase tracking-widest text-mist mb-3">Best Time to Go</p>
                <p className="text-xs text-parchment/40 leading-relaxed">
                  May–June &amp; September–October<br />
                  for all high-altitude routes
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-line flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-mist/50">
            <p suppressHydrationWarning>
              © {new Date().getFullYear()} Northern Trails, Dharchula, Uttarakhand. All rights reserved.
            </p>
            <p>Registered Travel Agency · Uttarakhand Tourism</p>
          </div>
        </div>
      </footer>
    </>
  );
}
