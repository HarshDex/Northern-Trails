import Link from 'next/link';
import { blogs } from '@/data/blogs';

const featured = blogs.slice(0, 4);

export default function BlogSection() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-saffron">
              Yatra Journal
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight text-charcoal text-balance">
              Know before you go.
            </h2>
          </div>
          <Link
            href="/blog"
            className="shrink-0 inline-flex items-center gap-2 rounded-full border border-charcoal/15 px-6 py-3 text-sm font-medium text-charcoal/65 hover:border-saffron/40 hover:text-saffron transition-colors"
          >
            All articles
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
              <path d="M1 6.5H12M12 6.5L7.5 2M12 6.5L7.5 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {featured.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`reveal reveal-d${(i % 4) + 1} group rounded-2xl border border-border bg-cream-card p-6 flex flex-col transition-all hover:shadow-lg hover:-translate-y-1 hover:border-saffron/30`}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-saffron mb-3">
                {post.category}
              </span>
              <h3 className="font-display text-base font-semibold text-charcoal leading-snug mb-3 line-clamp-3 group-hover:text-saffron transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-charcoal/55 leading-relaxed line-clamp-2 mb-4 flex-1">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-border">
                <span className="text-xs text-mist">{post.readTime}</span>
                <span className="text-xs font-medium text-saffron group-hover:translate-x-1 transition-transform">
                  Read →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
