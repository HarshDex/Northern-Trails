import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogs } from '@/data/blogs';

export const metadata = {
  title: 'Yatra Journal — Adi Kailash Travel Guides & Tips',
  description:
    'In-depth guides on Inner Line Permits, Adi Kailash weather, road conditions, packing lists, costs, and the sacred history of Om Parvat. Written by native guides from Dharchula.',
  alternates: { canonical: 'https://www.northerntrails.in/blog' },
  keywords: [
    'Adi Kailash blog',
    'inner line permit guide',
    'Adi Kailash weather',
    'Om Parvat history',
    'Adi Kailash road conditions',
    'Kalapani dispute',
    'Adi Kailash packing list',
  ],
};

export default function BlogIndex() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream">
        {/* Hero */}
        <section
          className="relative min-h-[40vh] flex items-end overflow-hidden pt-28 pb-14"
          style={{ background: 'linear-gradient(160deg, #1A0806 0%, #3D1808 40%, #1A0806 100%)' }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at 60% 0%, rgba(212,118,15,0.12) 0%, transparent 55%)' }}
          />
          <div className="relative mx-auto w-full max-w-7xl px-5 md:px-10">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-saffron mb-4">Yatra Journal</p>
            <h1 className="font-display text-4xl md:text-6xl font-medium leading-tight tracking-tight text-parchment text-balance max-w-3xl">
              Know the mountains before you meet them.
            </h1>
            <p className="mt-5 text-parchment/55 max-w-lg text-[15px] leading-relaxed">
              Permits, weather, road conditions, history — everything you need to plan your Adi Kailash and Om Parvat yatra, written by natives of Dharchula.
            </p>
          </div>
        </section>

        {/* Blog grid */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogs.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group rounded-2xl border border-border bg-cream-card p-7 flex flex-col transition-all hover:shadow-lg hover:-translate-y-1 hover:border-saffron/30"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-saffron mb-3">
                    {post.category}
                  </span>
                  <h2 className="font-display text-lg font-semibold text-charcoal leading-snug mb-3 group-hover:text-saffron transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-charcoal/55 leading-relaxed mb-5 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-mist">{post.readTime}</span>
                      <span className="text-xs text-mist">·</span>
                      <time className="text-xs text-mist" dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}
                      </time>
                    </div>
                    <span className="text-xs font-medium text-saffron group-hover:translate-x-1 transition-transform">
                      Read →
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
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
