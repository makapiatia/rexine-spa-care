import React from 'react';
import classnames from 'tailwindcss-classnames';
import artesianSpasLogo from '../../../assets/images/logos/artesianSpasLogo.png';
import bioGuardLogo from '../../../assets/images/logos/bioGuardLogo.jpeg';
import bullfrogSpasLogo from '../../../assets/images/logos/bullfrogSpasLogo.jpg';
import calderaSpasLogo from '../../../assets/images/logos/calderaSpasLogo.png';
import hotSpringLogo from '../../../assets/images/logos/hotSpringLogo.jpeg';
import spaGuardLogo from '../../../assets/images/logos/spaGuardLogo.jpg';
import sundanceSpasLogo from '../../../assets/images/logos/sundanceSpasLogo.png';
import aboutUs from '../../../assets/images/aboutUs.jpeg';
import { useMediaQuery } from '../../../utils/hooks';

export const AboutUs = () => {
  const mdScreen = useMediaQuery('1024px');

  const logos = [
    { 'brand': 'bullfrog-spas-logo', 'imgSrc': bullfrogSpasLogo },
    { 'brand': 'caldera-spas-logo', 'imgSrc': calderaSpasLogo },
    { 'brand': 'artesian-spas-logo', 'imgSrc': artesianSpasLogo },
    { 'brand': 'hotspring-spas-logo', 'imgSrc': hotSpringLogo },
    { 'brand': 'spa-guard-logo', 'imgSrc': spaGuardLogo },
    { 'brand': 'bio-guard-logo', 'imgSrc': bioGuardLogo },
    { 'brand': 'sundance-spas-logo', 'imgSrc': sundanceSpasLogo }
  ];

  return (
    <div
      className={classnames(
        'rexine-spa-care-about-us',
        'flex',
        'flex-col',
        'place-items-center'
      )}
    >
      <div
        className={classnames(
          'mx-12',
          'my-16',
          'lg:my-24',
          'lg:px-8',
          'flex',
          'flex-col',
          'lg:flex-row',
          'items-center',
          'lg:items-start'
        )}
      >
        {!mdScreen && (
          <img
            src={aboutUs}
            alt={'about-us'}
            className={classnames(
              'rounded-full',
              'about-us-photo',
              'w-60',
              'h-60',
              'sm:h-96',
              'sm:w-96',
              'drop-shadow-lg',
              'mb-16'
            )}
          />
        )}
        <div
          className={classnames(
            'flex',
            'flex-col',
            'bg-light-blue',
            'rounded-xl',
            'p-8',
            'drop-shadow-md',
            'mb-10',
            'md:mb-0'
          )}
        >
          <h1
            className={classnames(
              'px-8',
              'py-4',
              'mb-8',
              'text-3xl',
              'md:text-4xl',
              'uppercase',
              'font-bold',
              'bg-white',
              'rounded-xl',
              'w-fit',
              'drop-shadow-md',
              'text-medium-blue',
              'self-center',
              'lg:self-start'
            )}
          >
            About Us
          </h1>
          <p
            className={classnames(
              'pb-4',
              'text-green-blue',
              'text-xl',
            )}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className={classnames(
            'pb-4',
            'text-green-blue',
            'text-xl',
          )}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        {mdScreen && (
          <img
            src={aboutUs}
            alt={'about-us'}
            className={classnames(
              'rounded-full',
              'about-us-photo',
              'h-96',
              'w-96',
              'drop-shadow-lg',
              'mt-16',
              'lg:mt-0',
              'lg:ml-16'
            )}
          />
        )}
      </div>
      <div
        className={classnames(
          'flex',
          'flex-row',
          'flex-wrap',
          'w-full',
          'h-36',
          'px-6',
          'md:px-12',
          'mb-24',
          'md:grid',
          'md:grid-cols-7',
          'justify-center',
          'content-center',
          'justify-items-center'
        )}
      >
        {logos?.map((logo, i) => {
          return (
            <img
              src={logo?.imgSrc}
              alt={logo?.brand + i}
              key={logo?.brand + i}
              className={classnames(
                'bg-green-blue/75',
                'w-[80px]',
                'h-[80px]',
                'md:w-[110px]',
                'md:h-[110px]',
                'xl:w-[150px]',
                'xl:h-[150px]',
                'drop-shadow-lg',
                'mb-2',
                'mx-2'
              )}
            />
          );
        })}
      </div>
    </div>
  );
}
