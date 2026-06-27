import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Panchachuli Base Camp | Northern Trails',
  description: 'Panchachuli Base Camp is now part of our combined Panchachuli & Darma Valley package.',
};

export default function PanchachuliBasecamp() {
  redirect('/yatras/panchachuli-darma-valley');
}
