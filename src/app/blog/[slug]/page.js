import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogs } from '@/data/blogs';

export async function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `https://www.northerntrails.in/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['Northern Trails'],
      images: [{ url: post.image, width: 1200, height: 800, alt: post.title }],
    },
  };
}

function renderMarkdown(content) {
  const lines = content.trim().split('\n');
  const elements = [];
  let i = 0;
  let tableRows = [];
  let inTable = false;

  const flush = () => {
    if (inTable && tableRows.length > 0) {
      const header = tableRows[0];
      const body = tableRows.slice(1);
      elements.push(
        <div key={`table-${elements.length}`} className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                {header.map((cell, ci) => (
                  <th key={ci} className="text-left py-2.5 px-3 border-b-2 border-border font-semibold text-charcoal text-xs uppercase tracking-wide">
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {body.map((row, ri) => (
                <tr key={ri} className="border-b border-border/50">
                  {row.map((cell, ci) => (
                    <td key={ci} className="py-2 px-3 text-charcoal/70">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableRows = [];
      inTable = false;
    }
  };

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      const cells = trimmed.split('|').slice(1, -1).map((c) => c.trim());
      if (cells.every((c) => /^[-:]+$/.test(c))) {
        i++;
        continue;
      }
      inTable = true;
      tableRows.push(cells);
      i++;
      continue;
    }

    flush();

    if (trimmed === '') { i++; continue; }

    if (trimmed.startsWith('### ')) {
      elements.push(<h3 key={i} className="font-display text-lg font-semibold text-charcoal mt-8 mb-3">{trimmed.slice(4)}</h3>);
    } else if (trimmed.startsWith('## ')) {
      elements.push(<h2 key={i} className="font-display text-2xl font-semibold text-charcoal mt-10 mb-4">{trimmed.slice(3)}</h2>);
    } else if (/^\d+\.\s/.test(trimmed)) {
      const items = [trimmed];
      while (i + 1 < lines.length && /^\d+\.\s/.test(lines[i + 1].trim())) {
        i++;
        items.push(lines[i].trim());
      }
      elements.push(
        <ol key={i} className="list-decimal list-inside space-y-1.5 my-4 text-[15px] text-charcoal/70 leading-relaxed">
          {items.map((item, idx) => {
            const text = item.replace(/^\d+\.\s/, '');
            return <li key={idx} dangerouslySetInnerHTML={{ __html: inlineFormat(text) }} />;
          })}
        </ol>
      );
    } else if (trimmed.startsWith('- ')) {
      const items = [trimmed];
      while (i + 1 < lines.length && lines[i + 1].trim().startsWith('- ')) {
        i++;
        items.push(lines[i].trim());
      }
      elements.push(
        <ul key={i} className="space-y-1.5 my-4 text-[15px] text-charcoal/70 leading-relaxed">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-saffron flex-shrink-0" aria-hidden="true" />
              <span dangerouslySetInnerHTML={{ __html: inlineFormat(item.slice(2)) }} />
            </li>
          ))}
        </ul>
      );
    } else {
      elements.push(
        <p key={i} className="text-[15px] leading-relaxed text-charcoal/70 my-4" dangerouslySetInnerHTML={{ __html: inlineFormat(trimmed) }} />
      );
    }
    i++;
  }
  flush();
  return elements;
}

function inlineFormat(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-charcoal">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>');
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);
  if (!post) notFound();

  const related = blogs.filter((b) => b.slug !== slug).slice(0, 3);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream">
        {/* Hero */}
        <section
          className="relative min-h-[35vh] flex items-end overflow-hidden pt-28 pb-12"
          style={{ background: 'linear-gradient(160deg, #1A0806 0%, #3D1808 40%, #1A0806 100%)' }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at 60% 0%, rgba(212,118,15,0.12) 0%, transparent 55%)' }}
          />
          <div className="relative mx-auto w-full max-w-3xl px-5 md:px-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-saffron">
                {post.category}
              </span>
              <span className="text-parchment/30">·</span>
              <span className="font-mono text-[10px] text-parchment/50">{post.readTime}</span>
              <span className="text-parchment/30">·</span>
              <time className="font-mono text-[10px] text-parchment/50" dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
              </time>
            </div>
            <h1 className="font-display text-3xl md:text-5xl font-medium leading-tight tracking-tight text-parchment text-balance">
              {post.title}
            </h1>
          </div>
        </section>

        {/* Article */}
        <article className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl px-5 md:px-10">
            {renderMarkdown(post.content)}
          </div>
        </article>

        {/* CTA */}
        <section className="border-t border-border py-14">
          <div className="mx-auto max-w-3xl px-5 md:px-10 text-center">
            <p className="font-display text-2xl font-medium text-charcoal mb-4 text-balance">
              Ready to begin your yatra?
            </p>
            <p className="text-sm text-charcoal/55 mb-6">
              Northern Trails handles ILP, transport, accommodation, and every logistical detail — so you can focus on the mountains.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-saffron px-8 py-3.5 text-sm font-semibold text-white hover:bg-saffron/90 transition-colors"
            >
              Plan Your Yatra →
            </Link>
          </div>
        </section>

        {/* Related */}
        <section className="border-t border-border bg-cream-alt py-14">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <h2 className="font-display text-2xl font-medium text-charcoal mb-8">More from the journal</h2>
            <div className="grid gap-5 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group rounded-2xl border border-border bg-cream-card p-6 flex flex-col transition-all hover:shadow-lg hover:-translate-y-1 hover:border-saffron/30"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-saffron mb-2">{r.category}</span>
                  <h3 className="font-display text-base font-semibold text-charcoal leading-snug mb-2 line-clamp-2 group-hover:text-saffron transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-sm text-charcoal/55 leading-relaxed line-clamp-2 flex-1">{r.excerpt}</p>
                  <span className="mt-3 text-xs font-medium text-saffron">{r.readTime}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
