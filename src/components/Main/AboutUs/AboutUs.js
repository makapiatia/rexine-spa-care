import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classnames from 'tailwindcss-classnames';
import aboutUsPhoto from '../../../assets/images/aboutUs.jpeg';
import spaJetPhoto from '../../../assets/images/spaJet.jpeg';
import artesianSpasLogo from '../../../assets/images/logos/artesianSpasLogo.png';
import bioGuardLogo from '../../../assets/images/logos/bioGuardLogo.jpeg';
import bullfrogSpasLogo from '../../../assets/images/logos/bullfrogSpasLogo.jpg';
import calderaSpasLogo from '../../../assets/images/logos/calderaSpasLogo.png';
import hotSpringLogo from '../../../assets/images/logos/hotSpringLogo.jpeg';
import spaGuardLogo from '../../../assets/images/logos/spaGuardLogo.jpg';
import sundanceSpasLogo from '../../../assets/images/logos/sundanceSpasLogo.png';
import { PageBanner } from '../PageBanner';
import { SectionHeading } from '../Services/servicePageStyles';
import { Bubbles, Drop, HoverBubbles, Sparkle, Sun, Wave } from '../Stickers';

const logos = [
  { brand: 'Bullfrog Spas', imgSrc: bullfrogSpasLogo, tilt: '-rotate-3' },
  // White logo on a transparent background, so it needs a dark tile
  { brand: 'Caldera Spas', imgSrc: calderaSpasLogo, tilt: 'rotate-2', tileClassName: 'bg-green-blue p-4' },
  { brand: 'Artesian Spas', imgSrc: artesianSpasLogo, tilt: '-rotate-1' },
  { brand: 'HotSpring', imgSrc: hotSpringLogo, tilt: 'rotate-3' },
  { brand: 'SpaGuard', imgSrc: spaGuardLogo, tilt: '-rotate-2' },
  { brand: 'BioGuard', imgSrc: bioGuardLogo, tilt: 'rotate-1' },
  { brand: 'Sundance Spas', imgSrc: sundanceSpasLogo, tilt: '-rotate-3' }
];

const funFacts = [
  {
    stat: '10+',
    label: 'Years in spa service & sales',
    Sticker: Sparkle,
    cardClassName: 'bg-pop-sky -rotate-2'
  },
  {
    stat: 'Spa Brands',
    label: 'Hands-on experience with a wide range of makes & models',
    Sticker: Sun,
    cardClassName: 'bg-pop-aqua rotate-1'
  },
  {
    stat: 'Water Care',
    label: 'Know-how in spa chemicals, cleaning & maintenance',
    Sticker: Drop,
    cardClassName: 'bg-pop-periwinkle -rotate-1'
  }
];

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

export const AboutUs = () => {
  return (
    <div className={classnames(
      'rexine-spa-care-about-us',
      'w-full',
      'overflow-x-clip',
      'bg-extra-light-blue',
      'text-deep-blue'
    )}>
      <PageBanner
        title="About Us"
        description="Meet the spa technician behind Rexine Spa Care."
      />

      <div className={classnames(
        'flex',
        'flex-col',
        'gap-16',
        'md:gap-24',
        'max-w-(--breakpoint-1xl)',
        'mx-auto',
        'px-6',
        'sm:px-12',
        'pb-12',
        'md:pb-16',
        'xl:pb-24'
      )}>
        <section className={classnames(
          'grid',
          'gap-12',
          'lg:grid-cols-2',
          'lg:gap-16',
          'items-center'
        )}>
          <div className={classnames('relative', 'mx-auto', 'w-full', 'max-w-md')}>
            <Sparkle className={classnames(
              'absolute',
              'z-10',
              '-top-6',
              '-right-4',
              'w-16',
              'md:w-20',
              'rotate-12',
              'motion-safe:animate-bob'
            )} />
            <Bubbles className={classnames(
              'absolute',
              'z-10',
              '-bottom-6',
              '-left-6',
              'w-20',
              'md:w-24',
              'motion-safe:animate-bob',
              '[animation-delay:1.2s]'
            )} />
            <div className={classnames(
              'overflow-hidden',
              'rounded-[2rem]',
              'border-4',
              'border-deep-blue',
              'shadow-[8px_8px_0_var(--color-deep-blue)]',
              '-rotate-2',
              'transition',
              'duration-300',
              'hover:rotate-0'
            )}>
              <Image
                src={aboutUsPhoto}
                alt="Rexine Spa Care technician installing a clean filter in a spa"
                sizes="(min-width: 1024px) 448px, 90vw"
                className={classnames('h-auto', 'w-full')}
                placeholder="blur"
              />
            </div>
          </div>

          <div>
            <p className={classnames(
              'w-fit',
              'rounded-full',
              'border-2',
              'border-deep-blue',
              'bg-white',
              'px-4',
              'py-1',
              'font-mulish',
              'font-extrabold',
              'uppercase',
              'tracking-[0.2em]',
              'text-sm'
            )}>
              Our Story
            </p>
            <h2 className={classnames(
              'mt-4',
              'font-fraunces',
              'font-wonky',
              'font-bold',
              'text-3xl',
              'md:text-4xl',
              'text-rexine-blue'
            )}>
              Over a decade of spa know-how
            </h2>
            <Wave className={classnames('mt-3', 'w-24')} />
            <p className={classnames('mt-6', 'font-mulish', 'text-lg', 'md:text-xl', 'leading-relaxed')}>
              At Rexine Spa Care, our lead technician brings{' '}
              <span className={classnames('rounded-lg', 'bg-pop-aqua', 'px-1')}>well over a decade of experience</span>
              {' '}in spa service and sales. Along the way he's built up a working knowledge of spa chemicals,
              cleaning, and maintenance, and has learned from industry leaders like Spa Guard and Bio Guard.
            </p>
          </div>
        </section>

        <section>
          <ul className={classnames('grid', 'gap-8', 'md:grid-cols-3')}>
            {funFacts.map(({ stat, label, Sticker, cardClassName }) => (
              <li
                key={stat}
                className={classnames(
                  'group',
                  'relative',
                  'rounded-3xl',
                  'border-4',
                  'border-deep-blue',
                  'p-7',
                  'pt-10',
                  'text-center',
                  'shadow-[6px_6px_0_var(--color-deep-blue)]',
                  'transition',
                  'duration-300',
                  'hover:rotate-0',
                  'hover:-translate-y-2',
                  cardClassName
                )}
              >
                <Sticker className={classnames(
                  'absolute',
                  '-top-7',
                  'left-1/2',
                  '-translate-x-1/2',
                  'w-14',
                  'motion-safe:group-hover:animate-wiggle'
                )} />
                <p className={classnames(
                  'font-fraunces',
                  'font-wonky',
                  'font-bold',
                  stat.length > 3 ? 'text-4xl' : 'text-6xl'
                )}>
                  {stat}
                </p>
                <p className={classnames('mt-2', 'font-mulish', 'font-semibold')}>{label}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <SectionHeading eyebrow="Know-How">Brands We Know</SectionHeading>
          <p className={classnames(
            'mx-auto',
            'mt-6',
            'max-w-3xl',
            'text-center',
            'font-mulish',
            'text-lg'
          )}>
            He's worked with a wide range of spa brands and has taken part in factory and vendor training
            programs along the way, and he keeps learning as new equipment and best practices come out.
            Brands he knows well include:
          </p>
          <ul className={classnames(
            'mt-10',
            'flex',
            'flex-wrap',
            'justify-center',
            'gap-3',
            'sm:gap-5',
            'md:gap-6'
          )}>
            {logos.map(({ brand, imgSrc, tilt, tileClassName }) => (
              <li
                key={brand}
                className={classnames(
                  'flex',
                  'aspect-square',
                  'w-[21%]',
                  'sm:w-[20%]',
                  'lg:w-[11%]',
                  'max-w-[150px]',
                  'items-center',
                  'justify-center',
                  'overflow-hidden',
                  'rounded-2xl',
                  'border-4',
                  'border-deep-blue',
                  'shadow-[4px_4px_0_var(--color-deep-blue)]',
                  'motion-safe:hover:animate-wiggle',
                  tilt,
                  tileClassName || 'bg-white'
                )}
              >
                <Image
                  src={imgSrc}
                  alt={`${brand} logo`}
                  sizes="150px"
                  className={classnames(
                    'h-full',
                    'w-full',
                    tileClassName ? 'object-contain' : 'object-cover'
                  )}
                />
              </li>
            ))}
          </ul>
        </section>

        <section className={classnames(
          'relative',
          'overflow-hidden',
          'mx-auto',
          'w-full',
          'max-w-4xl',
          'rounded-3xl',
          'border-4',
          'border-deep-blue',
          'text-white'
        )}>
          <Image
            src={spaJetPhoto}
            alt=""
            fill
            sizes="(min-width: 1024px) 896px, 100vw"
            className={classnames('object-cover')}
          />
          <div className={classnames('absolute', 'inset-0', 'bg-deep-blue/55')} />
          <div className={classnames(
            'relative',
            'flex',
            'flex-col',
            'md:flex-row',
            'md:items-center',
            'md:justify-between',
            'gap-5',
            'px-6',
            'py-6',
            'md:px-8'
          )}>
            <div>
              <p className={classnames('font-fraunces', 'font-wonky', 'font-semibold', 'text-2xl')}>
                Ready to dive in?
              </p>
              <p className={classnames('mt-1', 'font-mulish', 'text-light-blue')}>
                Let us help you maintain your oasis of relaxation!
              </p>
            </div>
            <div className={classnames('flex', 'flex-col', 'sm:flex-row', 'gap-3', 'shrink-0')}>
              <Link href="/services" className={classnames(pillClassName, 'bg-pop-sky', 'hover:bg-pop-aqua')}>
                Services + Pricing
                <HoverBubbles />
              </Link>
              <Link href="/contact" className={classnames(pillClassName, 'bg-white', 'hover:bg-extra-light-blue')}>
                Contact
                <HoverBubbles />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
