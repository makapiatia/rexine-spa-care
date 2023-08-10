import React from 'react';
import classnames from 'tailwindcss-classnames';

export const DesktopNavigation = () => {
  const navigationSections = ['Home', 'Services + Pricing', 'About Us', 'Contact'];

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
      <div
        className={classnames('navigation-logo', 'px-6', 'text-xl', 'font-extrabold')}
      >
        Rexine Spa Care
      </div>
      <div className={classnames(
        'flex',
        'flex-row',
        'col-span-2',
        'justify-end',
        'h-full'
      )}>
        {navigationSections.map((tab, i) => {
          return (
            <button
              className={classnames(
                'navigation-tab', 
                'px-4',
                'lg:px-6', 
                'hover:bg-blue-500', 
                'border-l',
                'border-blue-600'
                )}
              key={`${tab}-${i}`}
            >
              {tab}
            </button>
          );
        })}
      </div>
    </div>
  );
}
