'use client';
import { useState } from 'react';

const faqs = [
  {
    q: 'Are Adi Kailash and Om Parvat one yatra or two separate trips?',
    a: 'They are ONE combined yatra. Both peaks are visited on consecutive days from Gunji. Day 2 is Adi Kailash darshan at Jolingkong; Day 3 is Om Parvat darshan from Nabhidhang. Northern Trails offers this as a single 5–7 day package — you do not need two separate bookings.',
  },
  {
    q: 'When is the best time to visit?',
    a: 'May–June and September–October are ideal for all our yatras. The monsoon (July–August) brings heavy rain and landslide risk on the upper routes; we advise against travel in these months. Darma Valley is accessible from April through October.',
  },
  {
    q: 'Do you handle the Inner Line Permit (ILP)?',
    a: 'Yes — completely. As a native Dharchula team, ILP processing for the Adi Kailash, Om Parvat and border-area routes is routine for us. You only need to share a government ID copy and 2 passport photos. We handle everything else.',
  },
  {
    q: 'Is lunch included in the package?',
    a: 'No. Breakfast and dinner (pure vegetarian) are included from Gunji onwards. Lunch is not included and is available from dhabas and teahouses along the route. This follows standard practice on the Adi Kailash circuit.',
  },
  {
    q: 'What is included in the package price?',
    a: 'All accommodation (guesthouse or camping), pure vegetarian breakfast + dinner on trail, experienced native guide, ILP processing, all entry and permit fees, local transport Dharchula ↔ Gunji ↔ Jolingkong/Nabhidhang, and first aid kit with emergency oxygen. Flights and personal gear are excluded. GST (5%) and TCS (5%) are charged additionally.',
  },
  {
    q: 'How do I reach Dharchula?',
    a: 'Dharchula is 6–7 hours by road from Pithoragarh, which is connected by bus and shared cabs from Kathgodam (nearest railhead, ~5 hrs from Delhi). We provide detailed transport guidance and can coordinate onward travel from Kathgodam or Pithoragarh on request.',
  },
  {
    q: 'What is the payment and cancellation policy?',
    a: '10% deposit confirms your booking. 40% is due 7 days before departure. The remaining 50% is payable on arrival at Pithoragarh. A 5% discount applies for full upfront payment. Cancellations before departure: full deposit refund. Within 15 days: no refund. If we cancel due to weather or force majeure: full refund or free rescheduling.',
  },
  {
    q: 'Can I book a custom or private group itinerary?',
    a: 'Yes — and this is one of our specialities. Whether you want a private family group, a corporate retreat, or a combined multi-yatra route, write to us and we will build an itinerary for your dates, group size and fitness level.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="relative bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 md:px-10">
        <div className="reveal mb-12 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-saffron">
            Common Questions
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight text-charcoal">
            Everything you want to know.
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="reveal rounded-xl border border-border bg-cream-card overflow-hidden transition-colors hover:border-gold/30"
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-medium text-[15px] text-charcoal/85 leading-snug pr-2">
                  {faq.q}
                </span>
                <span
                  className={`flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full border transition-all duration-300 ${
                    open === i
                      ? 'border-saffron/50 bg-saffron/10 text-saffron rotate-45'
                      : 'border-border text-mist'
                  }`}
                  aria-hidden="true"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </span>
              </button>

              <div className={`faq-body ${open === i ? 'open' : ''}`}>
                <p className="px-6 pb-5 text-[15px] leading-relaxed text-charcoal/60">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-10 text-center">
          <p className="text-sm text-charcoal/45">
            Have a question not listed here?{' '}
            <a href="/contact" className="text-saffron hover:underline font-medium">
              Write to us
            </a>{' '}
            or{' '}
            <a href="https://wa.me/919876543210" className="text-[#25D366] hover:underline font-medium">
              WhatsApp us directly
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
