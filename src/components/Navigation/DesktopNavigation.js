import React from 'react';
import Link from 'next/link';
import classnames from 'tailwindcss-classnames';

export const DesktopNavigation = () => {
  const navigationSections = [
    { 'tabTitle': 'Home', 'url': '/' },
    { 'tabTitle': 'Services + Pricing', 'url': '/services' },
    { 'tabTitle': 'About Us', 'url': '/about-us' },
    { 'tabTitle': 'Contact', 'url': '/contact' }
  ];

  return (
    <div className={classnames(
      'rexine-spa-care-desktop-navigation',
      'hidden',
      'tablet:flex',
      'tablet:flex-row',
      'tablet:grid',
      'tablet:grid-cols-3',
      'items-center',
      'w-full',
      'h-20',
      'bg-rexine-blue',
      'text-white',
      'font-fraunces',
      'font-light'
    )}>
      <Link
        className={classnames(
          'flex',
          'h-full',
          'items-center'
        )}
        href={'/'}
      >
        <span
          className={classnames(
            'navigation-logo',
            'px-6',
            'text-3xl',
          )}
        >
          Rexine Spa Care
        </span>
      </Link>
      <div className={classnames(
        'flex',
        'flex-row',
        'col-span-2',
        'justify-end',
        'h-full',
        'items-center'
      )}>
        {navigationSections.map((tab, i) => {
          return (
            <Link
              className={classnames('h-full')}
              key={`${tab?.tabTitle}-${i}`}
              href={tab?.url}
            >
              <span className={classnames(
                'navigation-tab',
                'flex',
                'pt-6',
                'px-4',
                'lg:px-6',
                'hover:bg-blue-500',
                'border-l',
                'border-blue-600',
                'h-full',
                'text-2xl'
              )}>
                {tab?.tabTitle}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
