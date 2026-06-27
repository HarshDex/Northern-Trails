import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Adi Kailash Yatra | Northern Trails',
  description: 'Adi Kailash yatra is now part of our combined Adi Kailash & Om Parvat package.',
};

export default function AdiKailashPage() {
  redirect('/yatras/adi-kailash-om-parvat');
}
