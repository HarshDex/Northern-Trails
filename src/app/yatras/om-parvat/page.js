import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Om Parvat Darshan | Northern Trails',
  description: 'Om Parvat darshan is part of our combined Adi Kailash & Om Parvat yatra package.',
};

export default function OmParvatPage() {
  redirect('/yatras/adi-kailash-om-parvat');
}
