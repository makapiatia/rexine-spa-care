import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'tailwindcss-classnames';
import { SanitationProductLogoSection } from './SanitationProductLogoSection';


export const ServiceSection = () => {
  return (
    <div className={classnames(
      'rexine-spa-care-service-section',
      'flex flex-row w-full h-auto',
      'bg-extra-light-blue',
    )}>
      <div
        className={classnames(
          'flex flex-col',
        )}
      >
        <div className={classnames('flex', 'flex-col', 'xl:flex-row', 'xl:justify-end',)}>
          <div className={classnames(
            'flex',
            'flex-col',
            'h-auto',
            'text-green-blue',
            'text-2xl',
            'font-poppins',
            'font-light',
            'p-8 xl:p-16'
          )}>
            <SanitationProductLogoSection />
            <p className={classnames('xl:mt-6', 'mb-8')}>
              At Rexine Spa Care, we specialize in ensuring your spa experience is as relaxing and worry-free as possible.
              With extensive field experience and training in a variety of spa sanitation options—including
              FROG @ease, Soft Soak, bromine, chlorine, and more—we are equipped to handle all your spa care needs
              with expertise and precision.
            </p>
            <p className={classnames('mb-8')}>
              We believe that a clean spa is a happy spa. Let us help you maintain your oasis of relaxation!
              Explore our services today and discover the difference that professional care can make.
            </p>
            <ul className={classnames('xl:mb-6 xl:mt-3', 'xl:grid xl:grid-cols-4 xl:gap-6', 'hidden')}>
              <li>
                <p className="font-bold font-josefin">Bi-Weekly & Weekly Plans: </p>
                Enjoy consistent care with our tailored maintenance plans that fit your schedule.
                We'll take care of everything, so you can focus on relaxation.
              </li>
              <li>
                <p className="font-bold font-josefin">Full Cleanings: </p>
                Experience the ultimate refresh with our thorough cleaning services. We'll ensure every inch of your spa is spotless and ready for use.
              </li>
              <li>
                <p className="font-bold font-josefin">Drains & Refills: </p>
                When it's time for a change, we'll expertly drain and refill your spa,
                ensuring the water is pristine and inviting.
              </li>
              <li>
                <p className="font-bold font-josefin">Start Ups & Shut Downs:</p>
                Transitioning seasons?
                Our start-up and shut-down services will prepare your spa for use or secure it for the off-season, protecting your investment.</li>
            </ul>
            <div className={classnames('my-4', 'text-2xl',
              'sm:text-3xl',
              'font-josefin',
              'font-light',
              'text-white',
              'bg-rexine-blue',
              'hover:bg-blue-500',
              'px-6 py-6 xl:px-8',
              'w-full xl:w-fit text-center',)}>
              <Link
                to="/services"
              >
                <span
                  className={classnames(

                  )}>
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
