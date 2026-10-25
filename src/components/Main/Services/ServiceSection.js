import React from 'react';
import Link from 'next/link';
import classnames from 'tailwindcss-classnames';
import { SanitationProductLogoSection } from './SanitationProductLogoSection';
import { Bubbles, Drop, HoverBubbles, Sparkle, Sun, Wave } from '../Stickers';

const services = [
  {
    title: 'Bi-Weekly & Weekly Plans',
    description: 'Regular visits on a weekly or bi-weekly schedule to test and balance your water'
      + ' and keep up with routine maintenance between deeper cleanings.',
    Sticker: Bubbles,
    cardClassName: 'bg-pop-sky -rotate-2'
  },
  {
    title: 'Full Cleanings',
    description: 'A deeper clean of your spa, including the shell, filters and cover,'
      + ' to help get it fresh and ready to enjoy.',
    Sticker: Sparkle,
    cardClassName: 'bg-pop-aqua rotate-1'
  },
  {
    title: 'Drains & Refills',
    description: 'When it\'s time for fresh water, we\'ll drain and refill your spa'
      + ' and balance the new water so it\'s ready to use.',
    Sticker: Drop,
    cardClassName: 'bg-pop-periwinkle -rotate-1'
  },
  {
    title: 'Start Ups & Shut Downs',
    description: 'Changing seasons? We\'ll help get your spa up and running for the season,'
      + ' or prepare it to sit unused during the off-season.',
    Sticker: Sun,
    cardClassName: 'bg-white rotate-2'
  }
];

const pillClassName = classnames(
  'group',
  'relative',
  'rounded-full',
  'border-4',
  'border-deep-blue',
  'px-7',
  'py-3',
  'font-mulish',
  'font-extrabold',
  'uppercase',
  'tracking-wider',
  'text-lg',
  'transition',
  'hover:-translate-y-1'
);

export const ServiceSection = () => {
  return (
    <div className={classnames(
      'rexine-spa-care-service-section',
      'w-full',
      'overflow-x-clip',
      'bg-extra-light-blue',
      'text-deep-blue'
    )}>
      <section className={classnames(
        'relative',
        'max-w-(--breakpoint-1xl)',
        'mx-auto',
        'px-8',
        'py-16',
        'xl:px-16',
        'xl:py-24',
        'grid',
        'gap-12',
        'xl:grid-cols-5',
        'xl:items-center'
      )}>
        <div className={classnames('xl:col-span-3')}>
          <Wave className={classnames('w-28', 'mb-6')} />
          <p className={classnames(
            'font-fraunces',
            'font-wonky',
            'text-2xl',
            'md:text-3xl',
            'xl:text-4xl',
            'leading-snug'
          )}>
            At Rexine Spa Care, we specialize in ensuring your spa experience is as{' '}
            <span className={classnames('bg-pop-aqua', 'px-1', 'rounded-lg')}>relaxing and worry-free</span>
            {' '}as possible.
          </p>
          <p className={classnames(
            'mt-6',
            'font-mulish',
            'text-xl',
            'text-green-blue'
          )}>
            With extensive field experience and training in a variety of spa sanitation options including
            FROG @ease, Soft Soak, bromine, chlorine, and more. We are equipped to handle all your spa care needs
            with expertise and precision.
          </p>
        </div>
        <div className={classnames('relative', 'xl:col-span-2')}>
          <Sparkle className={classnames(
            'absolute',
            '-top-6',
            'right-2',
            'w-12',
            'rotate-12',
            'motion-safe:animate-bob'
          )} />
          <SanitationProductLogoSection />
        </div>
      </section>

      <section className={classnames(
        'max-w-(--breakpoint-1xl)',
        'mx-auto',
        'px-8',
        'pb-16',
        'xl:px-16',
        'xl:pb-24'
      )}>
        <h2 className={classnames(
          'mb-10',
          'font-fraunces',
          'font-wonky',
          'font-bold',
          'text-4xl',
          'md:text-5xl',
          'text-rexine-blue'
        )}>
          Our Services <span className={classnames('text-pop-cobalt')}>✹</span>
        </h2>
        <ul className={classnames(
          'grid',
          'gap-8',
          'md:grid-cols-2',
          'xl:grid-cols-4'
        )}>
          {services.map(({ title, description, Sticker, cardClassName }) => (
            <li
              key={title}
              className={classnames(
                'relative',
                'flex',
                'flex-col',
                'rounded-3xl',
                'border-4',
                'border-deep-blue',
                'p-7',
                'pt-12',
                'shadow-[6px_6px_0_var(--color-deep-blue)]',
                'transition',
                'duration-300',
                'hover:rotate-0',
                'hover:-translate-y-2',
                'hover:shadow-[10px_10px_0_var(--color-deep-blue)]',
                cardClassName
              )}
            >
              <Sticker className={classnames(
                'absolute',
                '-top-8',
                'left-6',
                'w-16',
                'h-16'
              )} />
              <h3 className={classnames(
                'mb-3',
                'font-fraunces',
                'font-wonky',
                'font-bold',
                'text-2xl'
              )}>
                {title}
              </h3>
              <p className={classnames('font-mulish', 'text-lg')}>
                {description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className={classnames('px-4', 'pb-16', 'sm:px-8', 'xl:pb-24')}>
        <div className={classnames(
          'relative',
          'overflow-hidden',
          'max-w-(--breakpoint-1xl)',
          'mx-auto',
          'rounded-[3rem]',
          'border-4',
          'border-deep-blue',
          'bg-rexine-blue',
          'text-white',
          'px-8',
          'py-14',
          'md:px-16',
          'md:py-20',
          'text-center'
        )}>
          <Bubbles className={classnames(
            'absolute',
            '-bottom-4',
            '-left-4',
            'w-28',
            'md:w-40',
            'opacity-90'
          )} />
          <Sparkle
            fill="var(--color-pop-aqua)"
            className={classnames(
              'absolute',
              'top-6',
              'right-6',
              'md:right-16',
              'w-12',
              'md:w-16',
              'motion-safe:animate-spin-slow'
            )}
          />
          <p className={classnames(
            'relative',
            'font-fraunces',
            'font-wonky',
            'font-semibold',
            'text-3xl',
            'md:text-5xl',
            'leading-tight'
          )}>
            We believe that a clean spa is a <span className={classnames('text-pop-aqua', 'italic')}>happy</span> spa.
            <br className={classnames('hidden', 'md:block')} />
            {' '}Let us help you maintain your oasis of relaxation!
          </p>
          <p className={classnames(
            'relative',
            'mt-6',
            'max-w-2xl',
            'mx-auto',
            'font-mulish',
            'text-xl',
            'text-light-blue'
          )}>
            Explore our services today and discover the difference that professional care can make.
          </p>
          <div className={classnames(
            'relative',
            'flex',
            'flex-col',
            'sm:flex-row',
            'justify-center',
            'gap-4',
            'mt-10'
          )}>
            <Link
              href="/services"
              className={classnames(
                pillClassName,
                'bg-pop-sky',
                'text-deep-blue',
                'hover:bg-pop-aqua'
              )}
            >
              Services + Pricing ➚
              <HoverBubbles />
            </Link>
            <Link
              href="/contact"
              className={classnames(
                pillClassName,
                'bg-white',
                'text-deep-blue',
                'hover:bg-extra-light-blue'
              )}
            >
              Contact ➚
              <HoverBubbles />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
