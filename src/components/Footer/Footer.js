import React from 'react';
import classnames from 'tailwindcss-classnames';
import linkedin from '../../assets/images/socials/linkedin.svg';
import squareFacebook from '../../assets/images/socials/squareFacebook.svg';
import squareInstagram from '../../assets/images/socials/squareInstagram.svg';
import { Bubbles, HoverBubbles, Sparkle } from '../Main/Stickers';

const headingClassName = classnames(
  'font-fraunces',
  'font-wonky',
  'font-semibold',
  'text-2xl',
  'text-white'
);

const detailClassName = classnames(
  'text-lg',
  'text-light-blue',
  'font-mulish',
  'font-medium'
);

const socialLinks = [
  { href: 'https://www.linkedin.com/company/rexine-spa-care/', icon: linkedin, alt: 'linkedin-logo' },
  { href: 'https://www.facebook.com/rexinespacare/', icon: squareFacebook, alt: 'facebook-logo' },
  { href: 'https://www.instagram.com/rexinespacare/', icon: squareInstagram, alt: 'instagram-logo' }
];

export const Footer = () => {
  return (
    <footer className={classnames('rexine-spa-care-footer', 'w-full', 'bg-extra-light-blue')}>
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className={classnames('block', 'w-full', 'h-8', 'md:h-12')}
        aria-hidden="true"
      >
        <path
          d="M0 30 C 120 0 240 0 360 30 S 600 60 720 30 S 960 0 1080 30 S 1320 60 1440 30 V 60 H 0 Z"
          fill="var(--color-rexine-blue)"
        />
        <path
          d="M0 30 C 120 0 240 0 360 30 S 600 60 720 30 S 960 0 1080 30 S 1320 60 1440 30"
          fill="none"
          stroke="var(--color-deep-blue)"
          strokeWidth="4"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div className={classnames(
        'relative',
        'overflow-hidden',
        'bg-rexine-blue',
        'px-8',
        'sm:px-12',
        'pt-8',
        'pb-10'
      )}>
        <Bubbles className={classnames(
          'absolute',
          'hidden',
          'sm:block',
          'right-6',
          'top-4',
          'w-20',
          'md:w-28',
          'opacity-90',
          'motion-safe:animate-bob'
        )} />

        <div className={classnames('relative', 'max-w-(--breakpoint-1xl)', 'mx-auto')}>
          <p className={classnames(
            'flex',
            'items-center',
            'gap-3',
            'mb-10',
            'font-fraunces',
            'font-wonky',
            'font-semibold',
            'text-3xl',
            'sm:text-4xl',
            'md:text-5xl',
            'text-white'
          )}>
            <Sparkle className={classnames('w-10', 'md:w-12', 'shrink-0')} />
            Rexine Spa Care
          </p>

          <div className={classnames(
            'grid',
            'gap-10',
            'md:grid-cols-3'
          )}>
            <div className={classnames('flex', 'flex-col', 'gap-1')}>
              <p className={headingClassName}>Inquiries & Assistance:</p>
              <a href='tel:+1623-282-2530' className={classnames(detailClassName, 'w-fit', 'hover:text-white')}>
                +1-623-282-2530
              </a>
              <p className={classnames(headingClassName, 'pt-4')}>Email:</p>
              <a href='mailto:info@rexinespacare.com' className={classnames(detailClassName, 'w-fit', 'hover:text-white')}>
                info@rexinespacare.com
              </a>
            </div>

            <div className={classnames('flex', 'flex-col', 'gap-1')}>
              <p className={headingClassName}>Regular Business Hours:</p>
              <p className={detailClassName}>Monday-Friday 8:00am-6:00pm</p>
              <p className={classnames(detailClassName, 'italic', 'font-normal')}>
                Saturday & Sunday available by appointment.
              </p>
            </div>

            <div className={classnames('flex', 'flex-col', 'gap-3')}>
              <p className={headingClassName}>Follow us on social media!</p>
              <div className={classnames('flex', 'flex-row', 'gap-4')}>
                {socialLinks.map(({ href, icon, alt }) => (
                  <a
                    key={href}
                    href={href}
                    className={classnames(
                      'group',
                      'relative',
                      'rounded-2xl',
                      'border-4',
                      'border-deep-blue',
                      'bg-pop-cobalt',
                      'p-2',
                      'shadow-[4px_4px_0_var(--color-deep-blue)]',
                      'transition',
                      'hover:-translate-y-1'
                    )}
                  >
                    <img src={icon.src} width='40px' height='40px' alt={alt} />
                    <HoverBubbles />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className={classnames(
            'flex',
            'flex-col',
            'sm:flex-row',
            'sm:items-center',
            'sm:justify-between',
            'gap-2',
            'mt-12',
            'pt-6',
            'border-t-2',
            'border-light-blue/30',
            'font-mulish',
            'text-light-blue'
          )}>
            <div className={classnames('flex', 'flex-row', 'gap-2')}>
              <a
                href="https://app.enzuzo.com/policies/tos/8f9a68b8-5d1c-11ee-9c4b-af1815b5c510"
                className={classnames('hover:text-white')}
              >
                Terms of Service
              </a>
              <span className={classnames('text-pop-sky')}>✹</span>
              <a
                href="https://app.enzuzo.com/policies/privacy/8f9a68b8-5d1c-11ee-9c4b-af1815b5c510"
                className={classnames('hover:text-white')}
              >
                Privacy Policy
              </a>
            </div>
            <p className={classnames('italic', 'text-sm')}>
              © Rexine Spa Care LLC 2023
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
