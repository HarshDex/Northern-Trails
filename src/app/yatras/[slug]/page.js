import { notFound } from 'next/navigation';
import { yatras, getYatraBySlug } from '@/data/yatras';
import YatraPage from '@/components/YatraPage';

export function generateStaticParams() {
  return yatras.map((y) => ({ slug: y.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const yatra = getYatraBySlug(slug);
  if (!yatra) return {};
  return {
    title: `${yatra.name} | Northern Trails`,
    description: yatra.overview.slice(0, 160),
    openGraph: {
      title: `${yatra.name} | Northern Trails`,
      description: yatra.tagline,
      url: `https://www.northerntrails.in/yatras/${yatra.slug}`,
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const yatra = getYatraBySlug(slug);
  if (!yatra) notFound();
  return <YatraPage yatra={yatra} />;
}
