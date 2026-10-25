'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classnames from 'tailwindcss-classnames';
import { Sparkle } from '../Main/Stickers';

const menuLinks = [
  { title: 'Home', url: '/' },
  { title: 'Services + Pricing', url: '/services' },
  { title: 'About Us', url: '/about-us' },
  { title: 'Contact', url: '/contact' }
];

const burgerBarClassName = classnames(
  'absolute',
  'left-0',
  'h-1',
  'w-full',
  'rounded-full',
  'bg-white',
  'transition',
  'duration-300'
);

export const MobileNavigation = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isOpen]);

  return (
    <div className={classnames('rexine-spa-care-mobile-navigation', 'relative', 'lg:hidden')}>
      <div className={classnames(
        'flex',
        'items-center',
        'justify-between',
        'w-full',
        'h-24',
        'px-7',
        'font-fraunces',
        'bg-rexine-blue'
      )}>
        <button
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation-menu"
          onClick={() => setIsOpen(!isOpen)}
          className={classnames('relative', 'h-7', 'w-9', 'shrink-0')}
        >
          <span className={classnames(
            burgerBarClassName,
            isOpen ? 'top-3 rotate-45' : 'top-0'
          )} />
          <span className={classnames(
            burgerBarClassName,
            'top-3',
            isOpen ? 'opacity-0' : 'opacity-100'
          )} />
          <span className={classnames(
            burgerBarClassName,
            isOpen ? 'top-3 -rotate-45' : 'top-6'
          )} />
        </button>
        <Link
          href="/"
          className={classnames(
            'flex',
            'items-center',
            'gap-2',
            'text-white',
            'text-2xl',
            'font-wonky',
            'font-semibold'
          )}
        >
          <Sparkle className={classnames('w-7')} />
          Rexine Spa Care
        </Link>
        {/* Balances the menu button so the title stays centered */}
        <span className={classnames('w-9', 'shrink-0')} aria-hidden="true" />
      </div>

      {isOpen && (
        <div
          className={classnames('fixed', 'inset-x-0', 'top-24', 'bottom-0', 'bg-deep-blue/50')}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        id="mobile-navigation-menu"
        inert={!isOpen}
        className={classnames(
          'rexine-spa-care-mobile-menu',
          'absolute',
          'inset-x-0',
          'top-full',
          'grid',
          'transition-[grid-template-rows]',
          'duration-300',
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        )}
      >
        <div className={classnames('overflow-hidden')}>
          <nav className={classnames(
            'flex',
            'flex-col',
            'gap-2',
            'px-6',
            'pt-4',
            'pb-8',
            'bg-rexine-blue',
            'border-b-4',
            'border-deep-blue',
            'font-fraunces',
            'text-2xl',
            'text-white'
          )}>
            {menuLinks.map(({ title, url }) => {
              const isActive = pathname === url;

              return (
                <Link
                  key={url}
                  href={url}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => setIsOpen(false)}
                  className={classnames(
                    'rounded-full',
                    'border-2',
                    'px-5',
                    'py-2',
                    'font-wonky',
                    isActive
                      ? 'border-deep-blue bg-white text-deep-blue shadow-[3px_3px_0_var(--color-deep-blue)]'
                      : 'border-transparent hover:border-deep-blue hover:bg-pop-sky hover:text-deep-blue'
                  )}
                >
                  {title}
                </Link>
              );
            })}
            <a
              href='tel:+1623-282-2530'
              className={classnames(
                'mt-4',
                'rounded-full',
                'border-4',
                'border-deep-blue',
                'bg-pop-sky',
                'px-5',
                'py-3',
                'text-center',
                'font-mulish',
                'font-extrabold',
                'uppercase',
                'tracking-wider',
                'text-lg',
                'text-deep-blue',
                'hover:bg-pop-aqua'
              )}
            >
              Call Us Today!
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
