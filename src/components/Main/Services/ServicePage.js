import React from 'react';
import classnames from 'tailwindcss-classnames';
import { PlanPricingSection } from './PlanPricingSection';
import { ServiceDetailsSectionDesktop } from './ServiceDetailsSectionDesktop';
import { WhatToExpectSection } from './WhatToExpectSection';
import RexineSpaCareLogo_WhiteText from '../../../assets/images/RexineSpaCareLogo_WhiteText.png';
import { HoverBubbles } from '../Stickers';

const pillClassName = classnames(
  'group',
  'relative',
  'rounded-full',
  'border-2',
  'border-deep-blue',
  'px-5',
  'py-2',
  'text-center',
  'whitespace-nowrap',
  'font-mulish',
  'font-extrabold',
  'uppercase',
  'tracking-wider',
  'text-sm',
  'text-deep-blue',
  'transition',
  'hover:-translate-y-0.5'
);

export const ServicePage = () => {
  return (
    <div className={classnames(
      'rexine-spa-care-service-page',
      'w-full',
      'overflow-x-clip',
      'bg-extra-light-blue',
      'text-deep-blue'
    )}>
      <header className={classnames('relative', 'mb-24', 'md:mb-28')}>
        <div className={classnames('bg-pop-sky')}>
          <div className={classnames(
            'flex',
            'flex-col',
            'items-center',
            'gap-4',
            'text-center',
            'max-w-(--breakpoint-1xl)',
            'mx-auto',
            'px-6',
            'sm:px-12',
            'pt-8',
            'pb-16',
            'md:pt-12',
            'md:pb-20'
          )}>
            <div className={classnames(
              'flex',
              'items-center',
              'justify-center',
              // Badge sitting on the wavy bottom edge of the banner
              'absolute',
              'z-10',
              'bottom-4',
              'md:bottom-6',
              'left-1/2',
              '-translate-x-1/2',
              'translate-y-1/2',
              'aspect-square',
              'w-36',
              'md:w-44',
              'p-3',
              'md:p-4',
              'rounded-full',
              'bg-green-blue',
              'border-4',
              'border-deep-blue',
              'shadow-[5px_5px_0_var(--color-deep-blue)]'
            )}>
              <img
                src={RexineSpaCareLogo_WhiteText.src}
                alt={'rexine-spa-care-logo'}
              />
            </div>
            <div>
              <h1 className={classnames(
                'font-fraunces',
                'font-wonky',
                'font-bold',
                'text-4xl',
                'md:text-5xl',
                'text-deep-blue'
              )}>
                Services + Pricing
              </h1>
              <p className={classnames('mt-2', 'mx-auto', 'max-w-xl', 'font-mulish', 'text-deep-blue')}>
                Explore our services today and discover the difference that professional care can make.
              </p>
            </div>
          </div>
        </div>
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className={classnames('block', 'w-full', 'h-8', 'md:h-12')}
          aria-hidden="true"
        >
          <path
            d="M0 0 H 1440 V 30 C 1320 60 1200 60 1080 30 S 840 0 720 30 S 480 60 360 30 S 120 0 0 30 Z"
            fill="var(--color-pop-sky)"
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

      <div className={classnames(
        'flex',
        'flex-col',
        'gap-14',
        'md:gap-24',
        'max-w-(--breakpoint-1xl)',
        'mx-auto',
        'px-6',
        'sm:px-12',
        'pb-12',
        'md:pb-16',
        'xl:pb-24'
      )}>
        <PlanPricingSection />
        <ServiceDetailsSectionDesktop />
        <WhatToExpectSection />

        <section className={classnames(
          'flex',
          'flex-col',
          'md:flex-row',
          'md:items-center',
          'md:justify-between',
          'gap-5',
          'mx-auto',
          'w-full',
          'max-w-4xl',
          'rounded-3xl',
          'border-4',
          'border-deep-blue',
          'bg-rexine-blue',
          'text-white',
          'px-6',
          'py-6',
          'md:px-8'
        )}>
          <div>
            <p className={classnames('font-fraunces', 'font-wonky', 'font-semibold', 'text-2xl')}>
              Need a custom care plan?
            </p>
            <p className={classnames('mt-1', 'font-mulish', 'text-light-blue')}>
              If our plans & services don't fit your needs, reach out and we'll be happy to create one with you.
            </p>
          </div>
          <div className={classnames('flex', 'flex-col', 'sm:flex-row', 'gap-3', 'shrink-0')}>
            <a
              href='mailto:info@rexinespacare.com'
              className={classnames(pillClassName, 'bg-pop-sky', 'hover:bg-pop-aqua')}
            >
              Email us
              <HoverBubbles />
            </a>
            <a
              href='tel:+1623-282-2530'
              className={classnames(pillClassName, 'bg-white', 'hover:bg-extra-light-blue')}
            >
              Call us
              <HoverBubbles />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
