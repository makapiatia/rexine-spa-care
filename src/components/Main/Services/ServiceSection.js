import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'tailwindcss-classnames';
import spaJet from '../../../assets/images/spaJet.jpeg';
import { useMediaQuery } from '../../../utils/hooks';


export const ServiceSection = () => {
  const smallScreen = useMediaQuery('500px');
  const serviceButtonText = smallScreen ? 'Services + Pricing' : 'Services';

  return (
    <div
      className={classnames(
        'rexine-spa-care-service-section',
        'flex',
        'flex-col',
        'm-8',
        'rounded-3xl',
        'bg-light-blue',
        'drop-shadow-md'
      )}
    >
      <h1 className={classnames(
        'text-medium-blue',
        'text-4xl',
        'uppercase',
        'font-bold',
        'my-8',
        'py-4',
        'sm:py-8',
        'px-5',
        'sm:px-16',
        'self-center',
        'w-fit',
        'bg-white',
        'rounded-2xl',
        'drop-shadow-md'
      )}>
        Services
      </h1>
      <div className={classnames('flex', 'flex-col', 'xl:flex-row', 'xl:justify-end')}>
        <div className={classnames(
          'flex',
          'flex-col',
          'pl-8',
          'pr-8',
          'xl:pr-0',
          'pb-16',
          'h-auto',
          'text-green-blue',
          'text-lg',
          'items-center',
          'xl:items-start'
        )}>
          <p className={classnames('xl:mt-6')}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className={classnames('my-6')}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className={classnames('pt-9')}>
            <Link
              to="/services"
            >
              <span
                className={classnames(
                  'text-lg',
                  'md:text-2xl',
                  'uppercase',
                  'font-semibold',
                  'font-mono',
                  'text-white',
                  'bg-rexine-blue',
                  'hover:bg-blue-500',
                  'rounded-md',
                  'p-8',
                  'w-max',
                  'drop-shadow-md'
                )}>
                {serviceButtonText}
              </span>
            </Link>
          </div>
        </div>
        <div className={classnames(
          'hidden',
          'xl:flex',
          'pt-7',
          'pb-16',
          'px-16',
          'xl:min-w-[500px]',
          'drop-shadow-md'
        )}>
          <img
            src={spaJet}
            alt='spa-jet'
            className={classnames(
              'h-[400px]',
              'w-[400px]',
              'rounded-full'
            )}
          />
        </div>
      </div>
    </div>
  );
}
