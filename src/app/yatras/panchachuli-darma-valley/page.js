import { getYatraBySlug } from '@/data/yatras';
import YatraPage from '@/components/YatraPage';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Panchachuli & Darma Valley Package | Northern Trails',
  description:
    'Trek to Panchachuli Base Camp (4,500 M) or walk through Bhotiya villages of Darma Valley. Native guides, apple orchards, ancient culture. From ₹12,000. No ILP required.',
  openGraph: {
    title: 'Panchachuli & Darma Valley | Northern Trails',
    description: 'Trek to the five sacred Panchachuli peaks through the living culture of Darma Valley.',
    url: 'https://www.northerntrails.in/yatras/panchachuli-darma-valley',
  },
  alternates: { canonical: 'https://www.northerntrails.in/yatras/panchachuli-darma-valley' },
};

export default function PanchachuliDarmaValleyPage() {
  const yatra = getYatraBySlug('panchachuli-darma-valley');
  if (!yatra) notFound();
  return <YatraPage yatra={yatra} />;
}
