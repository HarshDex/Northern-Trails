'use client';
import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const yatraOptions = [
  'Adi Kailash & Om Parvat Yatra (5–7 Days)',
  'Panchachuli Base Camp (8–10 Days)',
  'Darma Valley Trail (6–8 Days)',
  'Custom / Combination Yatra',
  'Not sure yet — need advice',
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', yatra: '', dates: '', groupSize: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.yatra) {
      setError('Please fill in your name, email, and preferred yatra.');
      return;
    }
    setError('');
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream pt-28 pb-20">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          {/* Header */}
          <div className="mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-saffron mb-4">Plan Your Yatra</p>
            <h1 className="font-display text-4xl md:text-6xl font-medium leading-tight tracking-tight text-charcoal text-balance max-w-2xl">
              Tell us when. We&rsquo;ll handle the mountain.
            </h1>
            <p className="mt-6 text-[15px] leading-relaxed text-charcoal/55 max-w-lg">
              Fill in the form and our team will send you a detailed itinerary and quote within 24 hours.
              Or reach us directly — WhatsApp is the fastest way.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[2fr_1fr] lg:gap-16">
            {/* Form */}
            <div>
              {submitted ? (
                <div className="rounded-2xl border border-border bg-cream-card p-10 text-center">
                  <div className="text-4xl mb-5" aria-hidden="true">🙏</div>
                  <h2 className="font-display text-2xl font-medium text-charcoal mb-3">
                    Namaste, {form.name.split(' ')[0]}!
                  </h2>
                  <p className="text-charcoal/65 leading-relaxed mb-6">
                    We&rsquo;ve received your enquiry about <strong className="text-charcoal/90">{form.yatra}</strong>.
                    Our team will get back to you within 24 hours with a detailed itinerary and quote.
                  </p>
                  <p className="text-sm text-charcoal/45">
                    For faster response, WhatsApp us at{' '}
                    <a href="https://wa.me/919876543210" className="text-[#25D366] hover:underline font-medium">
                      +91 98765 43210
                    </a>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField label="Your Name *" id="name" name="name" type="text"
                      placeholder="Rajesh Sharma" value={form.name} onChange={handleChange} required />
                    <FormField label="Email Address *" id="email" name="email" type="email"
                      placeholder="rajesh@email.com" value={form.email} onChange={handleChange} required />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField label="WhatsApp / Phone" id="phone" name="phone" type="tel"
                      placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
                    <div>
                      <label htmlFor="yatra" className="block text-xs font-medium text-charcoal/60 mb-2 uppercase tracking-wide">
                        Which Yatra? *
                      </label>
                      <select
                        id="yatra" name="yatra" value={form.yatra} onChange={handleChange} required
                        className="w-full rounded-xl border border-border bg-cream-card px-4 py-3 text-sm text-charcoal focus:border-saffron/50 focus:outline-none transition-colors"
                      >
                        <option value="" disabled>Select a yatra</option>
                        {yatraOptions.map((o) => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField label="Preferred Dates" id="dates" name="dates" type="text"
                      placeholder="e.g. May 15–30, 2025" value={form.dates} onChange={handleChange} />
                    <FormField label="Group Size" id="groupSize" name="groupSize" type="text"
                      placeholder="e.g. 4 people" value={form.groupSize} onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-charcoal/60 mb-2 uppercase tracking-wide">
                      Anything else we should know?
                    </label>
                    <textarea
                      id="message" name="message" rows={4} value={form.message} onChange={handleChange}
                      placeholder="Special requirements, fitness level, any concerns..."
                      className="w-full rounded-xl border border-border bg-cream-card px-4 py-3 text-sm text-charcoal placeholder-charcoal/40 focus:border-saffron/50 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-terracotta border border-terracotta/20 rounded-lg px-4 py-3 bg-terracotta/10">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto rounded-full bg-saffron px-10 py-3.5 text-sm font-semibold text-white transition-all hover:bg-saffron/90 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                  >
                    {loading ? 'Sending…' : 'Send Enquiry'}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* WhatsApp */}
              <div className="rounded-2xl border border-[#25D366]/30 bg-[#25D366]/5 p-6">
                <h3 className="font-display text-lg font-semibold text-charcoal mb-2">
                  WhatsApp — fastest response
                </h3>
                <p className="text-sm text-charcoal/55 mb-5">
                  Most of our team is on the trail. WhatsApp is how we stay connected.
                </p>
                <a
                  href="https://wa.me/919876543210?text=Hi%2C%20I%20am%20interested%20in%20a%20yatra%20with%20Northern%20Trails."
                  className="flex items-center justify-center gap-2.5 w-full rounded-full border border-[#25D366]/40 bg-[#25D366]/10 py-3 text-sm font-semibold text-[#25D366] hover:bg-[#25D366]/20 transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>

              {/* Contact info */}
              <div className="rounded-2xl border border-border bg-cream-card p-6 space-y-4">
                <h3 className="font-display text-lg font-semibold text-charcoal">Contact Details</h3>
                {[
                  { label: 'Email', value: 'hello@northerntrails.in', href: 'mailto:hello@northerntrails.in' },
                  { label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
                  { label: 'Location', value: 'Dharchula, Pithoragarh, Uttarakhand', href: null },
                ].map(({ label, value, href }) => (
                  <div key={label} className="text-sm">
                    <span className="text-charcoal/50 block mb-0.5">{label}</span>
                    {href ? (
                      <a href={href} className="text-charcoal/80 hover:text-saffron transition-colors">{value}</a>
                    ) : (
                      <span className="text-charcoal/80">{value}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Best time */}
              <div className="rounded-2xl border border-border bg-cream-card p-6">
                <h3 className="font-mono text-[10px] uppercase tracking-widest text-charcoal/50 mb-3">Best Time to Go</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-charcoal/60">Adi Kailash & Om Parvat</span>
                    <span className="text-charcoal font-medium">May–Jun, Sep–Oct</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal/60">Panchachuli BC</span>
                    <span className="text-charcoal font-medium">May–Oct</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal/60">Darma Valley</span>
                    <span className="text-charcoal font-medium">Apr–Oct</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function FormField({ label, id, name, type, placeholder, value, onChange, required }) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-medium text-charcoal/60 mb-2 uppercase tracking-wide">
        {label}
      </label>
      <input
        id={id} name={name} type={type} placeholder={placeholder} value={value}
        onChange={onChange} required={required}
        className="w-full rounded-xl border border-border bg-cream-card px-4 py-3 text-sm text-charcoal placeholder-charcoal/40 focus:border-saffron/50 focus:outline-none transition-colors"
      />
    </div>
  );
}
