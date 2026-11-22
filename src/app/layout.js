import { Analytics } from '@vercel/analytics/next';
import classnames from 'tailwindcss-classnames';
import { Fraunces, Mulish } from 'next/font/google';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { pageMetadata, siteName } from './metadata';
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
  // Lets the share image (public/og-image.png) resolve to a full URL in link previews
  metadataBase: new URL('https://www.rexinespacare.com'),
  ...pageMetadata({
    title: `${siteName} | Spa & Hot Tub Cleaning and Maintenance in the Phoenix Area`,
    description: 'Weekly and bi-weekly spa maintenance plans, full cleanings, drains and refills, and seasonal '
      + 'start ups and shut downs across the Phoenix area. Call, text or email to schedule.'
  }),
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
