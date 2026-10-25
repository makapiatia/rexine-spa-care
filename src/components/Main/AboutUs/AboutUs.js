import React from 'react';
import classnames from 'tailwindcss-classnames';
import artesianSpasLogo from '../../../assets/images/logos/artesianSpasLogo.png';
import bioGuardLogo from '../../../assets/images/logos/bioGuardLogo.jpeg';
import bullfrogSpasLogo from '../../../assets/images/logos/bullfrogSpasLogo.jpg';
import calderaSpasLogo from '../../../assets/images/logos/calderaSpasLogo.png';
import hotSpringLogo from '../../../assets/images/logos/hotSpringLogo.jpeg';
import spaGuardLogo from '../../../assets/images/logos/spaGuardLogo.jpg';
import sundanceSpasLogo from '../../../assets/images/logos/sundanceSpasLogo.png';

export const AboutUs = () => {
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
        'flex flex-col place-items-center bg-extra-light-blue',
        'max-w-(--breakpoint-1xl) justify-center mx-auto'
      )}
    >
      <div className="mx-8 mt-9 lg:px-8 flex flex-col lg:flex-row items-center">
        <div className="flex flex-col pb-8 px-4 lg:p-8">
          <h1
            className={classnames(
              'mb-8 mt-4 font-bold font-fraunces text-4xl',
              'w-fit text-medium-blue self-center lg:self-start'
            )}
          >
            About Us
          </h1>
          <div className="text-green-blue text-xl font-mulish font-light">
            <div className="pb-6" >
              At Rexine Spa Care, our lead technician brings a decade of experience in spa service and sales,
              making us a trusted choice for your spa needs. His expertise encompasses spa chemicals, cleaning, and maintenance,
              backed by extensive training with top industry leaders, including Spa Guard and Bio Guard.
            </div>
            <div className="pb-2">
              With a deep understanding of a wide range of spa brands, he has participated in numerous
              factory and vendor training programs, ensuring that he stays at the forefront of the latest technologies
              and best practices. His certifications include:
            </div>
          </div>
        </div>
      </div>
      <div
        className={classnames(
          'flex flex-row flex-wrap w-full h-auto',
          'md:h-36 px-6 md:px-20 mb-7 lg:mt-6 md:mb-16 xl:mb-20',
          'md:grid gap-3 md:gap-2 md:grid-cols-7',
          'justify-center content-center justify-items-center'
        )}
      >
        {logos?.map((logo, i) => {
          return (
            <img
              src={logo?.imgSrc?.src}
              alt={logo?.brand + i}
              key={logo?.brand + i}
              className={classnames(
                'bg-green-blue/75 w-[80px] h-[80px] border border-light-blue',
                'md:w-[110px] md:h-[110px] xl:w-[150px] xl:h-[150px] mb-2 mx-2',
              )}
            />
          );
        })}
      </div>
    </div>
  );
}
