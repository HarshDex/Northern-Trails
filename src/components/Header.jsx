'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/',            label: 'Home' },
  { href: '/about',       label: 'About' },
  { href: '/#packages',   label: 'Yatra Packages' },
  { href: '/shop',        label: 'Shop' },
  { href: '/social-work', label: 'Social Work' },
  { href: '/blog',        label: 'Blog' },
  { href: '/gallery',     label: 'Gallery' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-cream-card/95 backdrop-blur-md border-b border-border shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10 md:py-4"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group flex-shrink-0"
            onClick={() => setMobileOpen(false)}
            aria-label="Northern Trails — Home"
          >
            <span className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs font-mono font-semibold transition-all ${
              scrolled
                ? 'border-saffron/40 bg-saffron/10 text-saffron'
                : 'border-white/40 bg-white/10 text-white'
            }`}>
              NT
            </span>
            <span className={`font-display text-lg font-semibold tracking-tight transition-colors ${
              scrolled ? 'text-charcoal' : 'text-white'
            }`}>
              Northern Trails
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-6 xl:flex" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm transition-colors hover:text-saffron ${
                    scrolled ? 'text-charcoal/70' : 'text-white/80'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden xl:inline-flex items-center gap-2 rounded-full bg-saffron px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-saffron/90 hover:scale-[1.03] flex-shrink-0"
          >
            Plan Your Yatra
          </Link>

          {/* Mobile hamburger */}
          <button
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((v) => !v)}
            className={`xl:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5 rounded-lg border transition-colors ${
              scrolled
                ? 'border-border bg-cream-card'
                : 'border-white/20 bg-white/10'
            }`}
          >
            <span className={`block h-0.5 w-5 transition-all duration-300 ${scrolled ? 'bg-charcoal' : 'bg-white'} ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-5 transition-all duration-300 ${scrolled ? 'bg-charcoal' : 'bg-white'} ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 transition-all duration-300 ${scrolled ? 'bg-charcoal' : 'bg-white'} ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        aria-hidden="true"
        className={`fixed inset-0 z-40 transition-opacity duration-300 xl:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(26,8,6,0.65)', backdropFilter: 'blur(6px)' }}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
        className={`fixed top-0 right-0 z-50 h-full w-[300px] max-w-[85vw] bg-cream-card border-l border-border transition-transform duration-300 ease-in-out xl:hidden flex flex-col ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <span className="font-display text-base font-semibold text-charcoal">Northern Trails</span>
          <button
            aria-label="Close navigation menu"
            onClick={() => setMobileOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-border hover:border-saffron/40 text-charcoal/60 hover:text-saffron transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto p-5">
          <ul className="flex flex-col gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-charcoal/80 hover:bg-cream-alt hover:text-saffron transition-colors"
                >
                  <span className="h-1 w-1 rounded-full bg-saffron/40 flex-shrink-0" aria-hidden="true" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Drawer footer */}
        <div className="p-5 border-t border-border space-y-3">
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center rounded-full bg-saffron px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-saffron/90"
          >
            Plan Your Yatra
          </Link>
          <a
            href="https://wa.me/919876543210"
            className="flex items-center justify-center gap-2 w-full rounded-full border border-border px-5 py-3 text-sm text-charcoal/70 hover:border-[#25D366]/40 hover:text-[#25D366] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#25D366]" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp Us
          </a>
        </div>
      </div>
    </>
  );
}
