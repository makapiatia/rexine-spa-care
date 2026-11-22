import React from 'react';
import classnames from 'tailwindcss-classnames';
import { Bubbles, darkOutline } from '../Main/Stickers';

const headingClassName = classnames('font-fraunces font-wonky font-semibold text-2xl text-white');

const detailClassName = classnames('text-lg text-light-blue font-mulish font-medium');

// Thicker lines on standard screens keep the small badge readable; high-density screens get the original line art
const trexBadgeMaskImage = 'image-set(url(/trex-badge-bold.png) 1x, url(/trex-badge.png) 2x)';
const trexBadgeMask = {
  maskImage: trexBadgeMaskImage,
  WebkitMaskImage: `-webkit-${trexBadgeMaskImage}`,
  maskSize: '100% 100%',
  WebkitMaskSize: '100% 100%'
};

export const Footer = () => {
  return (
    <footer className={classnames('rexine-spa-care-footer w-full bg-extra-light-blue')}>
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        // Tucks 1px under the block below so no hairline gap shows on high-density screens
        className={classnames('block w-full h-8 md:h-12 -mb-px')}
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
      <div className={classnames('relative overflow-hidden px-6 sm:px-12 pt-8 pb-10 bg-rexine-blue')}>
        <Bubbles outline={darkOutline} className={classnames(
          'absolute hidden sm:block right-6 top-4 w-20 md:w-28',
          'opacity-90',
          'motion-safe:animate-bob'
        )} />

        <div className={classnames('relative max-w-(--breakpoint-1xl) mx-auto')}>
          <div className={classnames('grid gap-10 md:grid-cols-2')}>
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
          </div>

          <div className={classnames(
            'flex items-end justify-between gap-6 mt-12 pt-6',
            'border-t-2 border-light-blue/30',
            'font-mulish text-light-blue'
          )}>
            <div className={classnames('flex flex-col gap-2')}>
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
            <div className={classnames('flex shrink-0 flex-col items-center gap-1 text-xs')}>
              Site by
              {/* The badge's shape masks an off-white fill, so its cut-out lettering shows the navy behind it */}
              <span
                role="img"
                aria-label="TREX"
                className={classnames('relative block w-12 h-12 md:w-14 md:h-14 rounded-full bg-deep-blue')}
              >
                <span className={classnames('absolute inset-0 bg-extra-light-blue')} style={trexBadgeMask} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
