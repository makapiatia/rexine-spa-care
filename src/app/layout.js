import { Analytics } from '@vercel/analytics/next';
import { Fraunces, Mulish } from 'next/font/google';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import '../index.css';

const mulish = Mulish({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-mulish-loaded'
});

const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['opsz'],
  variable: '--font-fraunces-loaded'
});

export const metadata = {
  title: 'Rexine Spa Care',
  description: 'We are fully field experienced & trained in a multitude of spa sanitation options including FROG @ease, Soft Soak, bromine, chlorine, and many more!',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/logo192.png'
  }
};

export const viewport = {
  themeColor: '#000000'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${mulish.variable} ${fraunces.variable}`}>
      <body>
        <div className="rexine-spa-care-app text-blue bg-extra-light-blue">
          <Navigation />
          {children}
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
