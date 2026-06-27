/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Old individual yatra URLs → combined pages
      { source: '/yatras/adi-kailash',        destination: '/yatras/adi-kailash-om-parvat',    permanent: true },
      { source: '/yatras/om-parvat',          destination: '/yatras/adi-kailash-om-parvat',    permanent: true },
      { source: '/yatras/panchachuli-base-camp', destination: '/yatras/panchachuli-darma-valley', permanent: true },
      { source: '/yatras/darma-valley',       destination: '/yatras/panchachuli-darma-valley', permanent: true },
      // Conservation page renamed to social-work
      { source: '/conservation',              destination: '/social-work',                      permanent: true },
    ];
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
