import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/700.css";
import "@fontsource/fraunces/900.css";
import "@fontsource/fraunces/400-italic.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";
import SacredParticles from "@/components/three/SacredParticles";

const siteUrl = "https://www.northerntrails.in";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Northern Trails | Adi Kailash, Om Parvat & Panchachuli Yatras",
    template: "%s | Northern Trails",
  },
  description:
    "Northern Trails is a native Dharchula-based travel agency leading Adi Kailash, Om Parvat, Panchachuli Base Camp and Darma Valley yatras across the Himalayas, run by locals committed to mountain conservation and community growth.",
  keywords: [
    "Adi Kailash yatra",
    "Om Parvat tour package",
    "Panchachuli base camp trek",
    "Darma Valley tour",
    "Dharchula travel agency",
    "Himalayan pilgrimage tours",
    "Kailash Mansarovar alternative India",
    "Uttarakhand Himalaya expeditions",
  ],
  authors: [{ name: "Northern Trails" }],
  creator: "Northern Trails",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Northern Trails",
    title: "Northern Trails | Adi Kailash, Om Parvat & Panchachuli Yatras",
    description:
      "Native-led Himalayan yatras to Adi Kailash, Om Parvat, Panchachuli Base Camp and Darma Valley — rooted in conservation and community.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Northern Trails - Himalayan Yatras" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Northern Trails | Adi Kailash, Om Parvat & Panchachuli Yatras",
    description:
      "Native-led Himalayan yatras to Adi Kailash, Om Parvat, Panchachuli Base Camp and Darma Valley.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Northern Trails",
  description:
    "Native Dharchula-based travel agency conducting Adi Kailash, Om Parvat, Panchachuli Base Camp and Darma Valley yatras, dedicated to Himalayan conservation and local community development.",
  url: siteUrl,
  areaServed: {
    "@type": "Place",
    name: "Uttarakhand Himalaya, India",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dharchula",
    addressRegion: "Uttarakhand",
    addressCountry: "IN",
  },
  knowsAbout: [
    "Adi Kailash Yatra",
    "Om Parvat",
    "Panchachuli Base Camp Trek",
    "Darma Valley",
    "Himalayan Conservation",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <SacredParticles />
        {children}
      </body>
    </html>
  );
}
