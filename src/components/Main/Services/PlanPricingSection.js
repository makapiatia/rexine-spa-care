import React from 'react';
import classnames from 'tailwindcss-classnames';
import { useMediaQuery } from '../../../utils/hooks';

export const PlanPricingSection = () => {
  const mdScreen = useMediaQuery('768px');
  const plansText = mdScreen ? 'Select Your Plan' : 'Plans';

  return (
    <div
      className={classnames(
        'rexine-spa-care-pricing-section',
        'flex flex-col',
        'bg-white border border-light-blue',
        'px-8 pt-4 pb-2 md:pt-8 md:pb-8',
        'm-4 sm:m-12 md:m-20',
        'text-center',
      )}
    >
      <h1
        className={classnames(
          'flex',
          'font-bold',
          'font-josefin',
          'text-4xl',
          'text-medium-blue',
          'mb-9',
          'md:mb-0',
          'pt-6',
          'px-8',
          'w-fit',
          'place-self-center md:place-self-start',
        )}
      >
        {plansText}
      </h1>
      <div
        className={classnames(
          'tiered-service-pricing-section',
          'flex',
          'flex-col',
          'lg:flex-row',
          'grid',
          'grid-rows-3',
          'lg:grid-cols-3',
          'lg:grid-rows-1',
          'mb-10 md:my-10',
          'md:mx-10',
          'gap-8',
          'xl:gap-12',
          'text-white'
        )}
      >
        <div
          className={classnames(
            'six-month-pricing-section',
            'bg-medium-green',
            'p-8',
          )}
        >
          <h2
            className={classnames(
              'uppercase',
              'font-poppins',
              'font-light',
              'text-3xl',
              'py-2',
              'border-b-2',
            )}
          >
            Six Month Plan
          </h2>
          <div className={classnames(
            'six-month-bi-weekly-pricing',
            'py-6',
            'font-josefin',
          )}>
            <h3
              className={classnames(
                'font-semibold',
                'text-6xl',
                'pb-1'
              )}
            >
              $199*
            </h3>
            <p className={classnames('text-sm', 'leading-tight')}>Total Per Month</p>
            <p className={classnames('text-lg', 'leading-tight')}>For Two Visits</p>
          </div>
          <div className={classnames(
            'six-month-weekly-pricing',
            'font-josefin',
          )}>
            <h3
              className={classnames(
                'font-semibold',
                'text-6xl',
                'pb-1'
              )}
            >
              $399*
            </h3>
            <p className={classnames('text-sm', 'leading-tight')}>Total Per Month</p>
            <p className={classnames('text-lg', 'leading-tight')}>For Four Visits</p>
          </div>
          <p
            className={classnames(
              'text-white',
              'font-poppins',
              'font-medium',
              'text-sm',
              'xl:mb-4',
              'mt-6',
            )}
          >
            *Six month plans include a full system flush.
          </p>
        </div>
        <div
          className={classnames(
            'three-month-pricing-section',
            'bg-medium-teal',
            'p-8',
          )}
        >
          <h2
            className={classnames(
              'uppercase',
              'font-poppins',
              'font-light',
              'text-3xl',
              'py-2',
              'border-b-2',
            )}
          >
            Three Month Plan
          </h2>
          <div className={classnames(
            'three-month-bi-weekly-pricing',
            'py-6',
            'font-josefin',
          )}>
            <h3
              className={classnames(
                'font-semibold',
                'text-6xl',
                'pb-1'
              )}
            >
              $209
            </h3>
            <p className={classnames('text-sm', 'leading-tight')}>Total Per Month</p>
            <p className={classnames('text-lg', 'leading-tight')}>For Two Visits</p>
          </div>
          <div className={classnames(
            'three-month-weekly-pricing',
            'font-josefin',
          )}>
            <h3
              className={classnames(
                'font-semibold',
                'text-6xl',
                'pb-1'
              )}
            >
              $409
            </h3>
            <p className={classnames('text-sm', 'leading-tight')}>Total Per Month</p>
            <p className={classnames('text-lg', 'leading-tight')}>For Four Visits</p>
          </div>
        </div>
        <div
          className={classnames(
            'one-month-pricing-section',
            'bg-green-blue',
            'p-8',
          )}
        >
          <h2
            className={classnames(
              'uppercase',
              'font-poppins',
              'font-light',
              'text-3xl',
              'py-2',
              'border-b-2',
            )}
          >
            One Month Plan
          </h2>
          <div className={classnames(
            'one-month-bi-weekly-pricing',
            'py-6',
            'font-josefin',
          )}>
            <h3
              className={classnames(
                'font-semibold',
                'text-6xl',
                'pb-1'
              )}
            >
              $219
            </h3>
            <p className={classnames('text-sm', 'leading-tight')}>Total Per Month</p>
            <p className={classnames('text-lg', 'leading-tight')}>For Two Visits</p>
          </div>
          <div className={classnames(
            'one-month-weekly-pricing',
            'font-josefin',
          )}>
            <h3
              className={classnames(
                'font-semibold',
                'text-6xl',
                'pb-1'
              )}
            >
              $419
            </h3>
            <p className={classnames('text-sm', 'leading-tight')}>Total Per Month</p>
            <p className={classnames('text-lg', 'leading-tight')}>For Four Visits</p>
          </div>
        </div>
      </div>
      <div className={classnames(
        'text-green-blue',
        'font-poppins font-medium',
        'text-sm md:text-md italic text-center',
        'px-6 md:px-24 mb-6 md:mb-0'
      )}>
        Visits are performed on a monthly, weekly, or every other week basis.
        Some months may require one extra or one less visit depending on the alignment of the dates.
        Three month (2 visits/month) plans include 6 visits total, three month (4 visits/month) plans include 12 visits total.
        Six month (2 visits/month) plans include 12 visits total, six month (4 visits/month) plans include 24 visits total.
      </div>
    </div>
  );
}
