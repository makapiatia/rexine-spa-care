import React from 'react';
import classnames from 'tailwindcss-classnames';
import { PlanPricingSection } from './PlanPricingSection';
import { ServiceDetailsSectionDesktop } from './ServiceDetailsSectionDesktop';
import { WhatToExpectSection } from './WhatToExpectSection';
import { PageBanner } from '../PageBanner';
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
      <PageBanner
        title="Services + Pricing"
        description="Explore our services today and discover the difference that professional care can make."
      />

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
