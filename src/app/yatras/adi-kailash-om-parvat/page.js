import YatraPage from '@/components/YatraPage';
import { getYatraBySlug } from '@/data/yatras';

export const metadata = {
  title: 'Adi Kailash & Om Parvat Yatra | Sacred Twin Darshan',
  description:
    'Combined Adi Kailash & Om Parvat yatra from Dharchula — Jolingkong (5,945M) darshan + Om Parvat (6,191M) in one 5–7 day package. Native-led by Northern Trails, Uttarakhand.',
  alternates: {
    canonical: '/yatras/adi-kailash-om-parvat',
  },
  openGraph: {
    title: 'Adi Kailash & Om Parvat Yatra | Northern Trails',
    description:
      'Adi Kailash and Om Parvat in one combined 5–7 day yatra from Dharchula. Parvati Sarovar, Jolingkong, Nabhidhang darshan. Native-led by Northern Trails.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function Page() {
  const yatra = getYatraBySlug('adi-kailash-om-parvat');
  return <YatraPage yatra={yatra} />;
}
