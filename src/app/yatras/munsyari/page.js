import { getYatraBySlug } from '@/data/yatras';
import YatraPage from '@/components/YatraPage';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Munsyari Retreat | Khaliya Top & Milam Gateway | Northern Trails',
  description:
    'Stay in Munsyari with Panchachuli peak views. Day trek to Khaliya Top (3,500 M), Birthi Falls, Thamri Kund, and the Milam Glacier gateway. From ₹10,000.',
  openGraph: {
    title: 'Munsyari Retreat — Khaliya Top & Milam Gateway | Northern Trails',
    description: 'Where the Panchachuli peaks fill the horizon at dawn. Trek, waterfalls, and alpine lakes.',
    url: 'https://www.northerntrails.in/yatras/munsyari',
  },
  alternates: { canonical: 'https://www.northerntrails.in/yatras/munsyari' },
};

export default function MunsyariPage() {
  const yatra = getYatraBySlug('munsyari');
  if (!yatra) notFound();
  return <YatraPage yatra={yatra} />;
}
