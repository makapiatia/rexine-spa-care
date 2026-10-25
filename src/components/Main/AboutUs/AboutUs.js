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
import { Bubbles, Drop, HoverBubbles, Sparkle, Sun, stickerTilt, Wave } from '../Stickers';

const logos = [
  { brand: 'Bullfrog Spas', imgSrc: bullfrogSpasLogo },
  // White logo on a transparent background, so it needs a dark tile
  { brand: 'Caldera Spas', imgSrc: calderaSpasLogo, tileClassName: 'bg-green-blue p-4' },
  { brand: 'Artesian Spas', imgSrc: artesianSpasLogo },
  { brand: 'HotSpring', imgSrc: hotSpringLogo },
  { brand: 'SpaGuard', imgSrc: spaGuardLogo },
  { brand: 'BioGuard', imgSrc: bioGuardLogo },
  { brand: 'Sundance Spas', imgSrc: sundanceSpasLogo }
];

const funFacts = [
  {
    stat: '10+',
    label: 'Years in spa service & sales',
    Sticker: Sparkle,
    cardClassName: 'bg-pop-sky'
  },
  {
    stat: 'Spa Brands',
    label: 'Hands-on experience with a wide range of makes & models',
    Sticker: Sun,
    cardClassName: 'bg-pop-aqua'
  },
  {
    stat: 'Water Care',
    label: 'Know-how in spa chemicals, cleaning & maintenance',
    Sticker: Drop,
    cardClassName: 'bg-pop-periwinkle'
  }
];

const pillClassName = classnames(
  'group relative px-5 py-2',
  'rounded-full border-2 border-deep-blue',
  'text-center whitespace-nowrap font-mulish font-extrabold uppercase tracking-wider text-sm text-deep-blue',
  'transition hover:-translate-y-0.5'
);

export const AboutUs = () => {
  return (
    <div className={classnames('rexine-spa-care-about-us overflow-x-clip w-full bg-extra-light-blue text-deep-blue')}>
      <PageBanner
        title="About Us"
        description="Meet the spa technician behind Rexine Spa Care."
      />

      <div className={classnames(
        'flex flex-col gap-16 md:gap-24 max-w-(--breakpoint-1xl) mx-auto px-6 sm:px-12 pb-12 md:pb-16 xl:pb-24'
      )}>
        <section className={classnames(
          'rexine-spa-care-about-story grid gap-12 lg:grid-cols-2 lg:gap-16 items-center'
        )}>
          <div className={classnames('relative w-full max-w-md mx-auto')}>
            <Sparkle className={classnames(
              'absolute z-10 -top-6 -right-4 rotate-12 w-16 md:w-20',
              'motion-safe:animate-bob'
            )} />
            <Bubbles className={classnames(
              'absolute z-10 -bottom-6 -left-6 w-20 md:w-24',
              'motion-safe:animate-bob [animation-delay:1.2s]'
            )} />
            <div className={classnames(
              'overflow-hidden',
              'rounded-4xl border-4 border-deep-blue shadow-[8px_8px_0_var(--color-deep-blue)]'
            )}>
              <Image
                src={aboutUsPhoto}
                alt="Rexine Spa Care technician installing a clean filter in a spa"
                sizes="(min-width: 1024px) 448px, 90vw"
                className={classnames('h-auto w-full')}
                placeholder="blur"
              />
            </div>
          </div>

          <div>
            <p className={classnames(
              'w-fit px-4 py-1',
              'rounded-full border-2 border-deep-blue bg-white',
              'font-mulish font-extrabold uppercase tracking-[0.2em] text-sm'
            )}>
              Our Story
            </p>
            <h2 className={classnames('mt-4 font-fraunces font-wonky font-bold text-3xl md:text-4xl text-rexine-blue')}>
              Over a decade of spa know-how
            </h2>
            <Wave className={classnames('w-24 mt-3')} />
            <p className={classnames('mt-6 font-mulish text-lg md:text-xl leading-relaxed')}>
              At Rexine Spa Care, our lead technician brings{' '}
              <span className={classnames('px-1 rounded-lg bg-pop-aqua')}>well over a decade of experience</span>
              {' '}in spa service and sales. Along the way he's built up a working knowledge of spa chemicals,
              cleaning, and maintenance, and has learned from industry leaders like Spa Guard and Bio Guard.
            </p>
          </div>
        </section>

        <section className={classnames('rexine-spa-care-about-fun-facts')}>
          <ul className={classnames('grid gap-8 md:grid-cols-3')}>
            {funFacts.map(({ stat, label, Sticker, cardClassName }) => (
              <li
                key={stat}
                className={classnames(
                  'group relative p-7 pt-10',
                  'rounded-3xl border-4 border-deep-blue shadow-[6px_6px_0_var(--color-deep-blue)]',
                  'text-center',
                  'transition duration-300 hover:-translate-y-2',
                  cardClassName
                )}
              >
                <Sticker className={classnames(
                  'absolute z-10 -top-7 left-1/2 -translate-x-1/2 w-14',
                  'motion-safe:group-hover:animate-wiggle',
                  stickerTilt(Sticker)
                )} />
                <p className={classnames(
                  'font-fraunces font-wonky font-bold',
                  stat.length > 3 ? 'text-4xl' : 'text-6xl'
                )}>
                  {stat}
                </p>
                <p className={classnames('mt-2 font-mulish font-semibold')}>{label}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={classnames('rexine-spa-care-about-brands')}>
          <SectionHeading eyebrow="Know-How">Brands We Know</SectionHeading>
          <p className={classnames('max-w-3xl mx-auto mt-6 text-center font-mulish text-lg')}>
            He's worked with a wide range of spa brands and has taken part in factory and vendor training
            programs along the way, and he keeps learning as new equipment and best practices come out.
            Brands he knows well include:
          </p>
          <ul className={classnames('flex flex-wrap justify-center gap-3 sm:gap-5 md:gap-6 mt-10')}>
            {logos.map(({ brand, imgSrc, tileClassName }) => (
              <li
                key={brand}
                className={classnames(
                  'flex aspect-square items-center justify-center overflow-hidden',
                  'w-[21%] sm:w-[20%] lg:w-[11%] max-w-37.5',
                  'rounded-2xl border-4 border-deep-blue shadow-[4px_4px_0_var(--color-deep-blue)]',
                  'motion-safe:hover:animate-wiggle',
                  tileClassName || 'bg-white'
                )}
              >
                <Image
                  src={imgSrc}
                  alt={`${brand} logo`}
                  sizes="150px"
                  className={classnames('h-full w-full', tileClassName ? 'object-contain' : 'object-cover')}
                />
              </li>
            ))}
          </ul>
        </section>

        <section className={classnames(
          'rexine-spa-care-dive-in relative overflow-hidden w-full max-w-4xl mx-auto',
          'rounded-3xl border-4 border-deep-blue',
          'text-white'
        )}>
          <Image
            src={spaJetPhoto}
            alt=""
            fill
            sizes="(min-width: 1024px) 896px, 100vw"
            className={classnames('object-cover')}
          />
          <div className={classnames('absolute inset-0 bg-deep-blue/70')} />
          <div className={classnames(
            'relative flex flex-col md:flex-row md:items-center md:justify-between gap-5 px-6 py-6 md:px-8'
          )}>
            <div>
              <p className={classnames('font-fraunces font-wonky font-semibold text-2xl')}>
                Ready to dive in?
              </p>
              <p className={classnames('mt-1 font-mulish text-white')}>
                Let us help you maintain your oasis of relaxation!
              </p>
            </div>
            <div className={classnames('flex flex-col sm:flex-row gap-3 shrink-0')}>
              <Link href="/services" className={classnames('bg-pop-sky hover:bg-pop-aqua', pillClassName)}>
                Services + Pricing
                <HoverBubbles />
              </Link>
              <Link href="/contact" className={classnames('bg-white hover:bg-extra-light-blue', pillClassName)}>
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
