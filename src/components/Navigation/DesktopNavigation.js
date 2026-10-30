'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classnames from 'tailwindcss-classnames';
import { Bubbles } from '../Main/Stickers';

export const DesktopNavigation = () => {
  const pathname = usePathname();
  const navigationSections = [
    { 'tabTitle': 'Home', 'url': '/' },
    { 'tabTitle': 'Services + Pricing', 'url': '/services' },
    { 'tabTitle': 'About Us', 'url': '/about-us' },
    { 'tabTitle': 'Contact', 'url': '/contact' }
  ];

  return (
    <div className={classnames(
      'rexine-spa-care-desktop-navigation hidden lg:flex items-center justify-between w-full h-20 px-12',
      'bg-rexine-blue',
      'text-white font-fraunces'
    )}>
      <Link
        className={classnames('group flex shrink-0 items-center gap-2')}
        href={'/'}
      >
        <Bubbles className={classnames('w-9 motion-safe:group-hover:animate-wiggle')} />
        <span
          className={classnames('navigation-logo whitespace-nowrap font-wonky font-semibold text-2xl xl:text-3xl')}
        >
          Rexine Spa Care
        </span>
      </Link>
      <nav aria-label="Main" className={classnames('flex items-center gap-2')}>
        {navigationSections.map((tab, i) => {
          const isActive = pathname === tab?.url;

          return (
            <Link
              key={`${tab?.tabTitle}-${i}`}
              href={tab?.url}
              aria-current={isActive ? 'page' : undefined}
              className={classnames(
                'navigation-tab px-4 xl:px-5 py-1.5',
                'rounded-full border-2',
                'whitespace-nowrap text-xl xl:text-2xl font-wonky',
                'transition',
                isActive
                  ? 'border-deep-blue bg-white text-deep-blue shadow-[3px_3px_0_var(--color-deep-blue)]'
                  : 'border-transparent hover:border-deep-blue hover:bg-pop-sky hover:text-deep-blue'
              )}
            >
              {tab?.tabTitle}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
