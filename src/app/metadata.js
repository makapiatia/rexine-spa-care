export const siteName = 'Rexine Spa Care';

const shareImage = {
  url: '/og-image.png',
  width: 1200,
  height: 630,
  alt: 'Rexine Spa Care logo badge with the tagline "a clean spa is a happy spa" and the services weekly and '
    + 'bi-weekly plans, full cleanings, and drains and refills'
};

// Next.js replaces (rather than merges) a parent's openGraph, so each page builds the full set here
export const pageMetadata = ({ title, description }) => ({
  title,
  description,
  openGraph: {
    title,
    description,
    siteName,
    type: 'website',
    images: [shareImage]
  },
  twitter: {
    card: 'summary_large_image',
    images: [shareImage]
  }
});
