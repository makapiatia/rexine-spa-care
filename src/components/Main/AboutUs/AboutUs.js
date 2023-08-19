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

  const certifications = [
    'Bullfrog Spa Factory',
    'Caldera Spas',
    'Hot Spring',
    'Artesian Spas',
    'Tropic Seas Spas',
    'TidalFit'
  ];

  return (
    <div
      className={classnames(
        'rexine-spa-care-about-us',
        'flex',
        'flex-col',
        'place-items-center',
        'bg-extra-light-blue'
      )}
    >
      <div
        className={classnames(
          'mx-8',
          'my-9',
          'md:my-16',
          'lg:my-20',
          'lg:px-8',
          'flex',
          'flex-col',
          'lg:flex-row',
          'items-center'
        )}
      >
        {!mdScreen && (
          <img
            src={aboutUs}
            alt={'about-us'}
            className={classnames(
              'rounded-full',
              'about-us-photo',
              'w-70',
              'h-70',
              'sm:h-96',
              'sm:w-96',
              'drop-shadow-lg',
              'mb-8',
              'md:mb-16'
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
            'drop-shadow-md'
          )}
        >
          <h1
            className={classnames(
              'px-8',
              'py-4',
              'mb-8',
              'font-black',
              'font-abeezee',
              'text-4xl',
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
          <div className={classnames(
            'text-green-blue',
            'text-xl',
            'font-dm',
            'font-medium'
          )}>
            <div
              className={classnames(
                'pb-6',
              )}
            >
              Our lead technician has ten years experience in spa service and sales.
              Much of that experience includes spa chemical, cleaning and maintenance trainings with the leading spa chemical
              manufacturer Spa Guard/Bio Guard.
            </div>
            <div className={classnames(
              'pb-6',
            )}>
              He has extensive experience with numerous other spa brands and has attended several
              factory and vendor trainings.
              His spa brand certifications include:
              <ul
                className={classnames(
                  'flex',
                  'flex-row',
                  'grid',
                  'grid-flow-row',
                  'list-disc',
                  'pl-6'
                )}
              >
                {certifications.map((cert, i) => {
                  return <li>{cert}</li>;
                })}
              </ul>
            </div>
            <div>
              At Rexine Spa Care we are fully field experienced & trained in a multitude of spa
              sanitation options including Spa Frog/@Ease,
              bromine, chlorine, softsoak, and many more!
            </div>
          </div>
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
          'h-auto',
          'md:h-36',
          'px-6',
          'md:px-12',
          'mb-7',
          'md:mb-16',
          'xl:mb-20',
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
                'mx-2',
                'rounded-xl'
              )}
            />
          );
        })}
      </div>
    </div>
  );
}
