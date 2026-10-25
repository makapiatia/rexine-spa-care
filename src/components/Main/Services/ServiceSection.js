import React from 'react';
import Link from 'next/link';
import classnames from 'tailwindcss-classnames';
import { SanitationProductLogoSection } from './SanitationProductLogoSection';


export const ServiceSection = () => {
  return (
    <div className={classnames(
      'rexine-spa-care-service-section',
      'flex flex-row w-full h-auto bg-extra-light-blue',
    )}>
      <div className="flex flex-col" >
        <div className="flex flex-col xl:flex-row xl:justify-end">
          <div className={classnames(
            'flex flex-col h-auto text-green-blue text-xl',
            'font-mulish font-light p-8 xl:p-16'
          )}>
            <SanitationProductLogoSection />
            <p className={classnames('xl:mt-6 mb-8')}>
              At Rexine Spa Care, we specialize in ensuring your spa experience is as relaxing and worry-free as possible.
              With extensive field experience and training in a variety of spa sanitation options—including
              FROG @ease, Soft Soak, bromine, chlorine, and more—we are equipped to handle all your spa care needs
              with expertise and precision.
            </p>
            <p className="mb-8">
              We believe that a clean spa is a happy spa. Let us help you maintain your oasis of relaxation!
              Explore our services today and discover the difference that professional care can make.
            </p>
            <ul className="xl:mb-6 xl:mt-3 xl:grid xl:grid-cols-4 xl:gap-6 hidden">
              <li>
                <p className="font-bold font-fraunces">Bi-Weekly & Weekly Plans: </p>
                Enjoy consistent care with our tailored maintenance plans that fit your schedule.
                We'll take care of everything, so you can focus on relaxation.
              </li>
              <li>
                <p className="font-bold font-fraunces">Full Cleanings: </p>
                Experience the ultimate refresh with our thorough cleaning services. We'll ensure every inch of your spa is spotless and ready for use.
              </li>
              <li>
                <p className="font-bold font-fraunces">Drains & Refills: </p>
                When it's time for a change, we'll expertly drain and refill your spa,
                ensuring the water is pristine and inviting.
              </li>
              <li>
                <p className="font-bold font-fraunces">Start Ups & Shut Downs:</p>
                Transitioning seasons?
                Our start-up and shut-down services will prepare your spa for use or secure it for the off-season, protecting your investment.</li>
            </ul>
            <div className={classnames(
              'font-fraunces font-light text-white bg-rexine-blue my-4 text-2xl sm:text-3xl',
              'hover:bg-blue-500 px-6 py-6 xl:px-8 w-full xl:w-fit text-center'
            )}>
              <Link
                href="/services"
              >
                <span>
                  Services + Pricing
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
