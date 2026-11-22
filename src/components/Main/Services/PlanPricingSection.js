import React from 'react';
import classnames from 'tailwindcss-classnames';
import { Carousel } from '../Carousel';
import { Bubbles, Drop, Sparkle, stickerTilt } from '../Stickers';
import { fullBleedClassName, SectionHeading } from './servicePageStyles';

const plans = [
  {
    name: 'Three Month Plan',
    months: 3,
    biWeeklyPrice: '$209',
    weeklyPrice: '$409',
    Sticker: Bubbles,
    stickerFill: 'var(--color-pop-sky)',
    cardClassName: 'bg-pop-aqua'
  },
  {
    name: 'Six Month Plan',
    months: 6,
    biWeeklyPrice: '$199',
    weeklyPrice: '$399',
    perk: 'Includes 1 full system flush',
    perkValue: '$549 value',
    badge: 'Most popular',
    Sticker: Sparkle,
    stickerFill: 'var(--color-pop-periwinkle)',
    cardClassName: 'bg-pop-sky'
  },
  {
    name: 'Twelve Month Plan',
    months: 12,
    biWeeklyPrice: '$199',
    weeklyPrice: '$399',
    perk: 'Includes 2 full system flushes',
    perkValue: '$1,098 value',
    Sticker: Drop,
    stickerFill: 'var(--color-pop-aqua)',
    cardClassName: 'bg-pop-periwinkle'
  }
];

// Open the carousel on the most popular plan
const featuredPlanIndex = plans.findIndex((plan) => plan.badge);

const PriceTile = ({ price, frequency, visitsPerMonth, totalVisits }) => (
  <div className={classnames('px-4 py-5 rounded-2xl border-2 border-deep-blue bg-white')}>
    <p className={classnames('font-fraunces font-wonky font-bold text-5xl xl:text-6xl')}>
      {price}<span className={classnames('text-2xl')}>/month</span>
    </p>
    <p className={classnames('mt-2 text-sm font-bold uppercase tracking-wider')}>{frequency}</p>
    <p>{visitsPerMonth} visits a month</p>
    <p className={classnames('text-sm text-medium-blue')}>{totalVisits} visits total</p>
  </div>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" className={classnames('inline-block w-6 h-6 mr-1.5 -mt-1 align-middle')} aria-hidden="true">
    <circle cx="12" cy="12" r="10" fill="var(--color-deep-blue)" />
    <path d="M7 12.5 L10.5 16 L17 9" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const PlanPricingSection = () => {
  return (
    <section className={classnames('rexine-spa-care-pricing-section w-full')}>
      <SectionHeading eyebrow="02 · Plans">Select Your Plan</SectionHeading>
      <div className={classnames(
        'tiered-service-pricing-section lg:left-auto lg:w-auto lg:ml-0 lg:-mx-3',
        'text-deep-blue font-mulish text-center',
        fullBleedClassName
      )}>
        <Carousel
          label="Plans"
          inactiveFrom="(min-width: 1024px)"
          startIndex={featuredPlanIndex}
          slideClassName={classnames('basis-[88%] sm:basis-[60%] lg:basis-1/3')}
        >
        {plans.map(({ name, months, biWeeklyPrice, weeklyPrice, perk, perkValue, badge, Sticker, stickerFill, cardClassName }) => (
          <div
            key={name}
            className={classnames(
              'relative flex flex-col gap-4 h-full p-6 pt-12 md:p-8 md:pt-14',
              'rounded-3xl border-4 border-deep-blue shadow-[6px_6px_0_var(--color-deep-blue)]',
              'transition duration-300 hover:-translate-y-2',
              cardClassName
            )}
          >
            <Sticker fill={stickerFill} className={classnames(
              'absolute z-10 -top-8 left-6 w-16 h-16',
              stickerTilt(Sticker)
            )} />
            {badge && (
              <p className={classnames(
                'absolute z-20 -top-4 right-5 px-3 py-1',
                'rounded-full border-2 border-deep-blue bg-deep-blue',
                'text-xs font-extrabold uppercase tracking-wider text-white'
              )}>
                {badge}
              </p>
            )}
            <h3 className={classnames('font-fraunces font-wonky font-bold text-2xl md:text-3xl')}>
              {name}
            </h3>
            {perk && (
              <p className={classnames('font-semibold')}>
                <CheckIcon />
                {perk}{' '}
                <span className={classnames('px-1.5 rounded-lg bg-white whitespace-nowrap')}>{perkValue}</span>
              </p>
            )}
            <PriceTile price={biWeeklyPrice} frequency="Every other week" visitsPerMonth={2} totalVisits={months * 2} />
            <PriceTile price={weeklyPrice} frequency="Weekly" visitsPerMonth={4} totalVisits={months * 4} />
          </div>
        ))}
        </Carousel>
      </div>
      <div className={classnames(
        'rexine-spa-care-visits-card max-w-2xl mt-6 md:mt-12 mx-auto p-6 md:p-8',
        'rounded-3xl border-4 border-deep-blue bg-white',
        'font-mulish text-deep-blue text-center'
      )}>
        <h3 className={classnames('font-fraunces font-wonky font-bold text-2xl')}>
          How visits work
        </h3>
        <p className={classnames('mt-2 text-base md:text-lg')}>
          Visits happen weekly or every other week. Depending on how the dates fall,
          a month may have one more or one fewer visit.
        </p>
      </div>
    </section>
  );
}
