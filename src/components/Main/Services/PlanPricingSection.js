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
          'flex',
          'flex-col',
          'md:bg-light-blue',
          'md:rounded-xl',
          'md:p-8',
          'drop-shadow-md',
          'm-8',
          'sm:m-20',
          'text-center'
        )}
      >
        <h1
          className={classnames(
            'flex',
            'font-bold',
            'font-dosis',
            'text-4xl',
            'text-medium-blue',
            'mb-9',
            'md:mt-8',
            'md:mb-0',
            'xl:mb-4',
            'py-5',
            'sm:py-8',
            'px-8',
            'w-fit',
            'drop-shadow-md',
            'bg-white',
            'rounded-xl',
            'place-self-center',
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
            'md:my-10',
            'md:mx-10',
            'gap-8',
            'xl:gap-12',
            'text-white'
          )}
        >
          <div
            className={classnames(
              'one-month-pricing-section',
              'bg-green-blue',
              'rounded-xl',
              'p-8',
              'drop-shadow-xl'
            )}
          >
            <h2
              className={classnames(
                'uppercase',
                'font-signika',
                'font-light',
                'text-3xl',
                'py-2',
                'border-b-2',
                'drop-shadow-md'
              )}
            >
              One Month Plan
            </h2>
            <div className={classnames(
              'one-month-bi-weekly-pricing',
              'py-6',
              'font-dm',
            )}>
              <h3
                className={classnames(
                  'font-semibold',
                  'text-6xl',
                  'drop-shadow-lg',
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
              'font-dm',
            )}>
              <h3
                className={classnames(
                  'font-semibold',
                  'text-6xl',
                  'drop-shadow-lg',
                  'pb-1'
                )}
              >
                $419
              </h3>
              <p className={classnames('text-sm', 'leading-tight')}>Total Per Month</p>
              <p className={classnames('text-lg', 'leading-tight')}>For Four Visits</p>
            </div>
          </div>
          <div
            className={classnames(
              'three-month-pricing-section',
              'bg-medium-teal',
              'rounded-xl',
              'p-8',
              'drop-shadow-xl'
            )}
          >
            <h2
              className={classnames(
                'uppercase',
                'font-signika',
                'font-light',
                'text-3xl',
                'py-2',
                'border-b-2',
                'drop-shadow-md'
              )}
            >
              Three Month Plan
            </h2>
            <div className={classnames(
              'three-month-bi-weekly-pricing',
              'py-6',
              'font-dm',
            )}>
              <h3
                className={classnames(
                  'font-semibold',
                  'text-6xl',
                  'drop-shadow-lg',
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
              'font-dm',
            )}>
              <h3
                className={classnames(
                  'font-semibold',
                  'text-6xl',
                  'drop-shadow-lg',
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
              'six-month-pricing-section',
              'bg-medium-green',
              'rounded-xl',
              'p-8',
              'drop-shadow-xl'
            )}
          >
            <h2
              className={classnames(
                'uppercase',
                'font-signika',
                'font-light',
                'text-3xl',
                'py-2',
                'border-b-2',
                'drop-shadow-md'
              )}
            >
              Six Month Plan
            </h2>
            <div className={classnames(
              'six-month-bi-weekly-pricing',
              'py-6',
              'font-dm',
            )}>
              <h3
                className={classnames(
                  'font-semibold',
                  'text-6xl',
                  'drop-shadow-lg',
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
              'font-dm',
            )}>
              <h3
                className={classnames(
                  'font-semibold',
                  'text-6xl',
                  'drop-shadow-lg',
                  'pb-1'
                )}
              >
                $399*
              </h3>
              <p className={classnames('text-sm', 'leading-tight')}>Total Per Month</p>
              <p className={classnames('text-lg', 'leading-tight')}>For Four Visits</p>
            </div>
          </div>
        </div>
        <p
          className={classnames(
            'text-green-blue',
            'font-dm',
            'font-medium',
            'text-xl',
            'xl:mb-4',
            'mt-6',
            'md:mt-0'
          )}
        >
          *Six month plans include a full system flush.
        </p>
        <div className={classnames(
          'text-green-blue',
          'font-dm',
          'font-medium',
          'text-md',
          'italic',
          'mt-4',
          'xl:mt-0'
          )}>
            If our plans & services do not fit your needs please send us an email at
            <a
              href='mailto:info@rexinespacare.com'
              className={classnames('pl-1', 'hover:text-medium-blue')}
            >
              info@rexinespacare.com
            </a>
            , or give us a call at
            <a
              href='tel:+1623-282-2530'
              className={classnames('pl-1', 'hover:text-medium-blue')}
            >
              +1-623-282-2530
            </a>
            , and we will be happy to work with you to
            create a custom care plan.
          </div>
      </div>
  );
}
