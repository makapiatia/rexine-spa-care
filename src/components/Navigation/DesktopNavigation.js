import React from 'react';
import { Link } from 'react-router-dom';
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
      'md:flex',
      'md:flex-row',
      'md:grid',
      'md:grid-cols-3',
      'items-center',
      'w-full',
      'h-20',
      'bg-rexine-blue',
      'font-mono',
      'text-white'
    )}>
      <Link
        className={classnames(
          'flex',
          'h-full',
          'items-center'
        )}
        to={'/'}
      >
        <span
          className={classnames(
            'navigation-logo',
            'px-6',
            'text-xl',
            'font-extrabold',
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
              to={tab?.url}
            >
              <span className={classnames(
                'navigation-tab',
                'flex',
                'pt-7',
                'px-4',
                'lg:px-6',
                'hover:bg-blue-500',
                'border-l',
                'border-blue-600',
                'h-full',
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
