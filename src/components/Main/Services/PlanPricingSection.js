import React from 'react';
import classnames from 'tailwindcss-classnames';
import { Carousel } from '../Carousel';
import { Bubbles, Drop, Sparkle, stickerTilt } from '../Stickers';
import { fullBleedClassName, SectionHeading } from './servicePageStyles';

const plans = [
  {
    name: 'Six Month Plan',
    biWeeklyPrice: '$199*',
    weeklyPrice: '$399*',
    note: '*Six month plans include a full system flush.',
    badge: 'Lowest monthly price',
    Sticker: Sparkle,
    cardClassName: 'bg-pop-sky'
  },
  {
    name: 'Three Month Plan',
    biWeeklyPrice: '$209',
    weeklyPrice: '$409',
    Sticker: Bubbles,
    cardClassName: 'bg-pop-aqua'
  },
  {
    name: 'One Month Plan',
    biWeeklyPrice: '$219',
    weeklyPrice: '$419',
    Sticker: Drop,
    cardClassName: 'bg-pop-periwinkle'
  }
];

const visitTotals = [
  { plan: 'Three month', twoPerMonth: 6, fourPerMonth: 12 },
  { plan: 'Six month', twoPerMonth: 12, fourPerMonth: 24 }
];

const PriceTile = ({ price, visits }) => (
  <div className={classnames('px-4 py-5 rounded-2xl border-2 border-deep-blue bg-white')}>
    <p className={classnames('font-fraunces font-wonky font-bold text-5xl xl:text-6xl')}>
      {price}
    </p>
    <p className={classnames('mt-1 text-sm font-bold uppercase tracking-wider')}>
      Total Per Month
    </p>
    <p className={classnames('text-lg')}>{visits}</p>
  </div>
);

export const PlanPricingSection = () => {
  return (
    <section className={classnames('rexine-spa-care-pricing-section w-full')}>
      <SectionHeading eyebrow="01 · Plans">Select Your Plan</SectionHeading>
      <div className={classnames(
        'tiered-service-pricing-section lg:left-auto lg:w-auto lg:ml-0 lg:-mx-3',
        'text-deep-blue font-mulish text-center',
        fullBleedClassName
      )}>
        <Carousel
          label="Plans"
          inactiveFrom="(min-width: 1024px)"
          slideClassName={classnames('basis-[88%] sm:basis-[60%] lg:basis-1/3')}
        >
        {plans.map(({ name, biWeeklyPrice, weeklyPrice, note, badge, Sticker, cardClassName }) => (
          <div
            key={name}
            className={classnames(
              'relative flex flex-col gap-4 h-full p-6 pt-12',
              'rounded-3xl border-4 border-deep-blue shadow-[6px_6px_0_var(--color-deep-blue)]',
              'transition duration-300 hover:-translate-y-2',
              cardClassName
            )}
          >
            <Sticker className={classnames(
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
            <h3 className={classnames('font-fraunces font-wonky font-bold text-3xl')}>
              {name}
            </h3>
            <PriceTile price={biWeeklyPrice} visits="For Two Visits" />
            <PriceTile price={weeklyPrice} visits="For Four Visits" />
            {note && (
              <p className={classnames('text-sm font-semibold')}>{note}</p>
            )}
          </div>
        ))}
        </Carousel>
      </div>
      <div className={classnames(
        'rexine-spa-care-visits-card grid gap-6 md:grid-cols-[1fr_auto] md:items-center max-w-3xl',
        'mt-6 md:mt-12 mx-auto p-6 md:p-8',
        'rounded-3xl border-4 border-deep-blue bg-white',
        'font-mulish text-deep-blue'
      )}>
        <div>
          <h3 className={classnames('font-fraunces font-wonky font-bold text-2xl')}>
            How visits work
          </h3>
          <p className={classnames('mt-2')}>
            Visits happen weekly, every other week, or monthly. Depending on how the dates fall,
            a month may have one more or one fewer visit.
          </p>
        </div>
        <table className={classnames('text-center text-sm')}>
          <caption className={classnames('sr-only')}>Total visits per plan</caption>
          <thead>
            <tr className={classnames('font-bold uppercase tracking-wider text-xs text-medium-blue')}>
              <th scope="col" className={classnames('px-3 pb-2 whitespace-nowrap')}><span className={classnames(
                'sr-only'
              )}>Plan</span></th>
              <th scope="col" className={classnames('px-3 pb-2 whitespace-nowrap')}>2 / month</th>
              <th scope="col" className={classnames('px-3 pb-2 whitespace-nowrap')}>4 / month</th>
            </tr>
          </thead>
          <tbody>
            {visitTotals.map(({ plan, twoPerMonth, fourPerMonth }) => (
              <tr key={plan} className={classnames('border-t-2 border-extra-light-blue')}>
                <th scope="row" className={classnames('px-3 py-2 text-left font-bold whitespace-nowrap')}>{plan}</th>
                <td className={classnames('px-3 py-2')}>{twoPerMonth} visits</td>
                <td className={classnames('px-3 py-2')}>{fourPerMonth} visits</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
