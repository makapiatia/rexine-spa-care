import React from 'react';
import Link from 'next/link';
import classnames from 'tailwindcss-classnames';
import { SanitationProductLogoSection } from './SanitationProductLogoSection';
import { Bubbles, darkOutline, Drop, HoverBubbles, Sparkle, stickerTilt, Sun, Wave } from '../Stickers';

const services = [
  {
    title: 'Bi-Weekly & Weekly Plans',
    description: 'Regular visits on a weekly or bi-weekly schedule to test and balance your water'
      + ' and keep up with routine maintenance between deeper cleanings.',
    Sticker: Bubbles,
    cardClassName: 'bg-pop-sky'
  },
  {
    title: 'Full Cleanings',
    description: 'A deeper clean of your spa, including the shell, filters and cover,'
      + ' to help get it fresh and ready to enjoy.',
    Sticker: Sparkle,
    cardClassName: 'bg-pop-aqua'
  },
  {
    title: 'Drains & Refills',
    description: 'When it\'s time for fresh water, we\'ll drain and refill your spa'
      + ' and balance the new water so it\'s ready to use.',
    Sticker: Drop,
    stickerFill: 'var(--color-pop-sky)',
    cardClassName: 'bg-pop-periwinkle'
  },
  {
    title: 'Start Ups & Shut Downs',
    description: 'Changing seasons? We\'ll help get your spa up and running for the season,'
      + ' or prepare it to sit unused during the off-season.',
    Sticker: Sun,
    cardClassName: 'bg-white'
  }
];

const pillClassName = classnames(
  'group relative px-5 py-2',
  'rounded-full border-2 border-deep-blue',
  'font-mulish font-extrabold uppercase tracking-wider text-sm',
  'transition hover:-translate-y-0.5'
);

export const ServiceSection = () => {
  return (
    <div className={classnames(
      'rexine-spa-care-service-section overflow-x-clip w-full',
      'bg-extra-light-blue',
      'text-deep-blue'
    )}>
      <section className={classnames(
        'rexine-spa-care-home-intro relative grid gap-12 xl:grid-cols-5 xl:items-center max-w-(--breakpoint-1xl)',
        'mx-auto px-6 sm:px-12 py-14 md:py-24'
      )}>
        <div className={classnames('xl:col-span-3')}>
          <Wave className={classnames('w-28 mb-6')} />
          <p className={classnames('font-fraunces font-wonky text-2xl md:text-3xl xl:text-4xl leading-snug')}>
            At Rexine Spa Care, we specialize in ensuring your spa experience is as{' '}
            <span className={classnames('px-1 rounded-lg bg-pop-aqua')}>relaxing and worry-free</span>
            {' '}as possible.
          </p>
          <p className={classnames('mt-6 font-mulish text-xl text-medium-blue')}>
            With extensive field experience and training in a variety of spa sanitation options including
            FROG @ease, Soft Soak, bromine, chlorine, and more. We are equipped to handle all your spa care needs
            with expertise and precision.
          </p>
        </div>
        <div className={classnames('relative xl:col-span-2')}>
          <Sparkle className={classnames('absolute z-10 -top-6 right-2 rotate-12 w-12 motion-safe:animate-bob')} />
          <SanitationProductLogoSection />
        </div>
      </section>

      <section className={classnames(
        'rexine-spa-care-home-services max-w-(--breakpoint-1xl) mx-auto px-6 sm:px-12 pb-14 md:pb-24'
      )}>
        <h2 className={classnames('mb-10 font-fraunces font-wonky font-bold text-4xl md:text-5xl text-rexine-blue')}>
          Our Services <span aria-hidden="true" className={classnames('text-pop-cobalt')}>✹</span>
        </h2>
        <ul className={classnames('grid gap-x-10 gap-y-14 md:grid-cols-2 xl:grid-cols-4')}>
          {services.map(({ title, description, Sticker, stickerFill, cardClassName }) => (
            <li
              key={title}
              className={classnames(
                'relative flex flex-col p-6 pt-12',
                'rounded-3xl border-4 border-deep-blue shadow-[6px_6px_0_var(--color-deep-blue)]',
                'hover:shadow-[10px_10px_0_var(--color-deep-blue)]',
                'transition duration-300 hover:-translate-y-2',
                cardClassName
              )}
            >
              <Sticker fill={stickerFill} className={classnames(
                'absolute z-10 -top-8 left-6 w-16 h-16',
                stickerTilt(Sticker)
              )} />
              <h3 className={classnames('mb-3 font-fraunces font-wonky font-bold text-2xl')}>
                {title}
              </h3>
              <p className={classnames('font-mulish text-lg')}>
                {description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className={classnames('rexine-spa-care-home-cta px-6 sm:px-12 pb-14 md:pb-24')}>
        <div className={classnames(
          'relative overflow-hidden max-w-4xl mx-auto px-6 py-10 md:px-12 md:py-12',
          'rounded-3xl border-4 border-deep-blue bg-rexine-blue',
          'text-white text-center'
        )}>
          <Sparkle
            fill="var(--color-pop-aqua)"
            outline={darkOutline}
            className={classnames('absolute z-10 top-4 right-4 md:right-8 w-8 md:w-10 motion-safe:animate-spin-slow')}
          />
          <p className={classnames(
            'relative',
            'font-fraunces font-wonky font-semibold text-2xl md:text-3xl leading-tight'
          )}>
            We believe that a clean spa is a <span className={classnames('text-pop-aqua italic')}>happy</span> spa.
            <br className={classnames('hidden md:block')} />
            {' '}Let us help you maintain your oasis of relaxation!
          </p>
          <p className={classnames('relative max-w-xl mt-3 mx-auto font-mulish text-light-blue')}>
            Explore our services today and discover the difference that professional care can make.
          </p>
          <div className={classnames('relative flex flex-col sm:flex-row justify-center gap-3 mt-6')}>
            <Link
              href="/services"
              className={classnames('bg-pop-sky hover:bg-pop-aqua text-deep-blue', pillClassName)}
            >
              Services + Pricing <span aria-hidden="true">➚</span>
              <HoverBubbles />
            </Link>
            <Link
              href="/contact"
              className={classnames('bg-white hover:bg-extra-light-blue text-deep-blue', pillClassName)}
            >
              Contact <span aria-hidden="true">➚</span>
              <HoverBubbles />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
