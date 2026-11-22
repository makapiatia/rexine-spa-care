import React from 'react';
import classnames from 'tailwindcss-classnames';
import RexineSpaCareLogo_WhiteText from '../../assets/images/RexineSpaCareLogo_WhiteText.png';

// Light blue page header with a wavy bottom edge and the logo badge sitting on the wave
export const PageBanner = ({ title, description, children }) => (
  <header className={classnames('rexine-spa-care-page-banner relative mb-24 md:mb-28')}>
    <div className={classnames('bg-light-blue')}>
      <div className={classnames(
        'flex flex-col items-center gap-4 max-w-(--breakpoint-1xl) mx-auto px-6 sm:px-12 pt-8 pb-16 md:pt-12 md:pb-20',
        'text-center'
      )}>
        <div className={classnames(
          // Badge sitting on the wavy bottom edge of the banner
          'flex items-center justify-center absolute z-10 bottom-4 md:bottom-6 left-1/2 aspect-square -translate-x-1/2',
          'translate-y-1/2 w-36 md:w-44 p-3 md:p-4',
          'rounded-full border-4 border-deep-blue shadow-[5px_5px_0_var(--color-deep-blue)] bg-green-blue'
        )}>
          <img
            src={RexineSpaCareLogo_WhiteText.src}
            alt="Rexine Spa Care logo"
          />
        </div>
        {/* Banners without extra content get the same bottom space as those with buttons */}
        <div className={classnames(!children && 'pb-8')}>
          <h1 className={classnames('font-fraunces font-wonky font-bold text-4xl md:text-5xl text-deep-blue')}>
            {title}
          </h1>
          <p className={classnames('max-w-xl mt-2 mx-auto font-mulish text-deep-blue')}>
            {description}
          </p>
        </div>
        {children}
      </div>
    </div>
    <svg
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      // Tucks 1px up under the banner so no hairline gap shows on high-density screens
      className={classnames('block w-full h-8 md:h-12 -mt-px')}
      aria-hidden="true"
    >
      <path
        d="M0 0 H 1440 V 30 C 1320 60 1200 60 1080 30 S 840 0 720 30 S 480 60 360 30 S 120 0 0 30 Z"
        fill="var(--color-light-blue)"
      />
      <path
        d="M1440 30 C 1320 60 1200 60 1080 30 S 840 0 720 30 S 480 60 360 30 S 120 0 0 30"
        fill="none"
        stroke="var(--color-deep-blue)"
        strokeWidth="4"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  </header>
);
