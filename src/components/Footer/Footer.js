import React from 'react';
import classnames from 'tailwindcss-classnames';
import linkedin from '../../assets/images/socials/linkedin.svg';
import squareFacebook from '../../assets/images/socials/squareFacebook.svg';
import squareInstagram from '../../assets/images/socials/squareInstagram.svg';
import { Bubbles, darkOutline, HoverBubbles } from '../Main/Stickers';

const headingClassName = classnames('font-fraunces font-wonky font-semibold text-2xl text-white');

const detailClassName = classnames('text-lg text-light-blue font-mulish font-medium');

const socialLinks = [
  { href: 'https://www.linkedin.com/company/rexine-spa-care/', icon: linkedin, alt: 'Rexine Spa Care on LinkedIn' },
  { href: 'https://www.facebook.com/rexinespacare/', icon: squareFacebook, alt: 'Rexine Spa Care on Facebook' },
  { href: 'https://www.instagram.com/rexinespacare/', icon: squareInstagram, alt: 'Rexine Spa Care on Instagram' }
];

export const Footer = () => {
  return (
    <footer className={classnames('rexine-spa-care-footer w-full bg-extra-light-blue')}>
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className={classnames('block w-full h-8 md:h-12')}
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
      <div className={classnames('relative overflow-hidden px-8 sm:px-12 pt-8 pb-10 bg-rexine-blue')}>
        <Bubbles outline={darkOutline} className={classnames(
          'absolute hidden sm:block right-6 top-4 w-20 md:w-28',
          'opacity-90',
          'motion-safe:animate-bob'
        )} />

        <div className={classnames('relative max-w-(--breakpoint-1xl) mx-auto')}>
          <div className={classnames('grid gap-10 md:grid-cols-3')}>
            <div className={classnames('flex flex-col gap-1')}>
              <p className={headingClassName}>Call or text us</p>
              <a href='tel:+1623-282-2530' className={classnames('w-fit hover:text-white', detailClassName)}>
                +1-623-282-2530
              </a>
              <a href='sms:+16232822530' className={classnames('w-fit hover:text-white', detailClassName)}>
                Send us a text <span aria-hidden="true">➚</span>
              </a>
              <p className={classnames('pt-4', headingClassName)}>Drop us a line</p>
              <a href='mailto:info@rexinespacare.com' className={classnames('w-fit hover:text-white', detailClassName)}>
                info@rexinespacare.com
              </a>
            </div>

            <div className={classnames('flex flex-col gap-1')}>
              <p className={headingClassName}>When you can reach us</p>
              <p className={detailClassName}>Monday-Friday 8:00am-6:00pm</p>
              <p className={classnames('italic font-normal', detailClassName)}>
                Saturday & Sunday available by appointment.
              </p>
            </div>

            <div className={classnames('flex flex-col gap-3')}>
              <p className={headingClassName}>Come say hi online</p>
              <div className={classnames('flex flex-row gap-4')}>
                {socialLinks.map(({ href, icon, alt }) => (
                  <a
                    key={href}
                    href={href}
                    className={classnames(
                      'group relative p-2',
                      'rounded-2xl border-4 border-deep-blue shadow-[4px_4px_0_var(--color-deep-blue)] bg-pop-cobalt',
                      'transition hover:-translate-y-1'
                    )}
                  >
                    <img src={icon.src} width='40px' height='40px' alt={alt} />
                    <HoverBubbles dark />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className={classnames(
            'flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-12 pt-6',
            'border-t-2 border-light-blue/30',
            'font-mulish text-light-blue'
          )}>
            <div className={classnames('flex flex-row gap-2')}>
              <a
                href="https://app.enzuzo.com/policies/tos/8f9a68b8-5d1c-11ee-9c4b-af1815b5c510"
                className={classnames('hover:text-white')}
              >
                Terms of Service
              </a>
              <span aria-hidden="true" className={classnames('text-pop-sky')}>✹</span>
              <a
                href="https://app.enzuzo.com/policies/privacy/8f9a68b8-5d1c-11ee-9c4b-af1815b5c510"
                className={classnames('hover:text-white')}
              >
                Privacy Policy
              </a>
            </div>
            <p className={classnames('italic text-sm')}>
              © Rexine Spa Care LLC 2023
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
