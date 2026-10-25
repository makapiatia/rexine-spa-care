import { Analytics } from '@vercel/analytics/next';
import classnames from 'tailwindcss-classnames';
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
  axes: ['opsz', 'SOFT', 'WONK'],
  variable: '--font-fraunces-loaded'
});

export const metadata = {
  title: 'Rexine Spa Care',
  description: 'We are fully field experienced & trained in a multitude of spa sanitation options including '
    + 'FROG @ease, Soft Soak, bromine, chlorine, and many more!',
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
        <a
          href="#main-content"
          className={classnames(
            'rexine-spa-care-skip-link sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100',
            'focus:px-5 focus:py-3',
            'rounded-full border-4 border-deep-blue bg-white',
            'font-mulish font-extrabold uppercase tracking-wider text-sm text-deep-blue'
          )}
        >
          Skip to main content
        </a>
        <div className="rexine-spa-care-app text-blue bg-extra-light-blue">
          <Navigation />
          <main id="main-content" tabIndex={-1} className={classnames('focus:outline-hidden')}>
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
