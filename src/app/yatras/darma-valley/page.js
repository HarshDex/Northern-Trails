import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Darma Valley Trail | Northern Trails',
  description: 'Darma Valley is now part of our combined Panchachuli & Darma Valley package.',
};

export default function DarmaValleyPage() {
  redirect('/yatras/panchachuli-darma-valley');
}
