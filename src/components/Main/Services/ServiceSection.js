import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'tailwindcss-classnames';
import spaJet from '../../../assets/images/spaJet.jpeg';


export const ServiceSection = () => {
  return (
    <div className={classnames(
      'rexine-spa-care-service-section',
      'flex',
      'flex-row',
      'bg-extra-light-blue'
    )}>
      <div
        className={classnames(
          'flex',
          'flex-col',
          'm-8',
          'xl:my-20',
          'xl:ml-20',
          'rounded-3xl',
          'bg-light-blue',
          'drop-shadow-md'
        )}
      >
        <h1 className={classnames(
          'text-medium-blue',
          'text-3xl',
          'sm:text-4xl',
          'font-black',
          'font-abeezee',
          'm-8',
          'xl:mt-8',
          'xl:mx-8',
          'xl:mb-3',
          'py-8',
          'sm:pt-8',
          'px-6',
          'sm:px-8',
          'w-fit',
          'bg-white',
          'rounded-2xl',
          'drop-shadow-md',
          'self-center',
          'xl:self-start'
        )}>
          What We Do
        </h1>
        <div className={classnames('flex', 'flex-col', 'xl:flex-row', 'xl:justify-end')}>
          <div className={classnames(
            'flex',
            'flex-col',
            'pl-8',
            'pr-8',
            'pb-16',
            'h-auto',
            'text-green-blue',
            'text-xl',
            'items-center',
            'xl:items-start',
            'font-dm',
            'font-medium'
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
            <div className={classnames('xl:hidden', 'pt-9', 'self-center')}>
              <Link
                to="/services"
              >
                <span
                  className={classnames(
                    'text-2xl',
                    'sm:text-3xl',
                    'uppercase',
                    'font-signika', 
                    'font-light', 
                    'text-white',
                    'bg-rexine-blue',
                    'hover:bg-blue-500',
                    'rounded-md',
                    'px-4',
                    'py-8',
                    'sm:px-8',
                    'w-max',
                    'drop-shadow-md'
                  )}>
                   Services + Pricing
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={classnames(
        'hidden',
        'xl:flex',
        'pt-7',
        'pb-16',
        'px-8',
        'xl:min-w-[500px]',
        'drop-shadow-md',
        'place-self-center'
      )}>
        <img
          src={spaJet}
          alt='spa-jet'
          className={classnames(
            'h-[395px]',
            'w-[400px]',
            'rounded-full'
          )}
        />
      </div>
    </div>
  );
}
