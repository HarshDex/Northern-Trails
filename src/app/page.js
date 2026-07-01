import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import YatraRoute from '@/components/three/YatraRoute';
import Packages from '@/components/Packages';
import NativeDifference from '@/components/NativeDifference';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import TrustSection from '@/components/TrustSection';
import BlogSection from '@/components/BlogSection';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import ScrollRevealInit from '@/components/ScrollRevealInit';

export const metadata = {
  title: 'Northern Trails — Sacred Himalayan Yatras from Dharchula',
  description:
    'Native Dharchula team running Adi Kailash & Om Parvat yatras, Panchachuli Base Camp, Darma Valley treks, and Munsyari retreats. ILP handled. Small groups. 100% local guides.',
  openGraph: {
    title: 'Northern Trails — Sacred Himalayan Yatras',
    description: 'Adi Kailash & Om Parvat · Panchachuli · Darma Valley · Munsyari. Native guides from Dharchula.',
    url: 'https://www.northerntrails.in',
    siteName: 'Northern Trails',
    images: [{ url: '/hero.png', width: 1920, height: 1080, alt: 'Adi Kailash at golden hour' }],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: { canonical: 'https://www.northerntrails.in' },
  keywords: [
    'Adi Kailash yatra',
    'Om Parvat darshan',
    'Panchachuli base camp trek',
    'Darma Valley trek',
    'Munsyari travel',
    'Dharchula travel agency',
    'Inner Line Permit ILP',
    'Uttarakhand Himalayan yatra',
    'native mountain guide',
  ],
};

export default function Home() {
  return (
    <>
      <ScrollRevealInit />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Packages />
        <YatraRoute />
        <NativeDifference />
        <Testimonials />
        <Gallery />
        <TrustSection />
        <BlogSection />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
