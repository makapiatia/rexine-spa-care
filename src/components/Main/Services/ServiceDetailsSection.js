import React from 'react';
import classnames from 'tailwindcss-classnames';
import { useMediaQuery } from '../../../utils/hooks';

export const ServiceDetailsSection = () => {
    const mdScreen = useMediaQuery('768px');
    const servicesText = mdScreen ? 'Explore Our Services' : 'Services';
    const monthlyServiceDetails = [
        'System Analysis',
        'Water Test & Balance',
        'Degrease & Clean Filter System',
        'Clean Shell, Waterline, Pillows & Interior Of Cover',
        'Check Computer Programming, Equipment, Sanitizing Systems & Settings'
    ];
    const fullCleaningDetails = [
        'Clean & Flush',
        'Cover Interior Cleaning',
        'Apply Exterior Protectants',
        'System Analysis',
        'Water Test & Balance',
        'Degrease & Clean Filter System',
        'Clean Shell, Waterline, Pillow, Jets, Diverter & Velocity Valves',
        'Check Computer Programming, Equipment, Sanitizing Systems Settings Upon Start Up After Refill'
    ];
    const snowbirdSpecialDetails = [
        'Shop-Vac Spa Jets',
        'Clean & Flush',
        'Cover Interior Cleaning',
        'Apply Exterior Protectants',
        'System Analysis',
        'Degrease & Clean Filter System',
        'Clean Shell, Waterline, Pillows (Pillows Removed, Cleaned & Stored If Applicable), Jets, Diverter &Velocity Valves',
        'Check Computer Programming, Equipment, Sanitizing Systems Before Shutdown'
    ];

    return (
        <div
            className={classnames(
                'rexine-spa-care-service-details-section',
                'flex',
                'flex-col',
                'md:bg-light-blue',
                'md:rounded-xl',
                'px-8 pb-8 pt-8 sm:pt-0 md:pt-8',
                'drop-shadow-md',
                'mx-4 sm:mx-12 md:mx-20',
                'md:mb-20'
            )}
        >
            <h1
                className={classnames(
                    'flex flex-row',
                    'font-bold font-dosis',
                    'text-4xl text-medium-blue',
                    'mb-9 md:mt-4 md:mb-0 xl:mb-4',
                    'py-5 sm:py-8 px-8',
                    'w-fit',
                    'drop-shadow-md',
                    'bg-white',
                    'rounded-xl',
                    'place-self-center'
                )}
            >
                {servicesText}
            </h1>
            <div
                className={classnames(
                    'service-details-section',
                    'flex',
                    'flex-col',
                    'xl:flex-row',
                    'grid',
                    'grid-rows-2',
                    'xl:grid-cols-2',
                    'xl:grid-rows-1',
                    'md:mt-10',
                    'md:mx-10',
                    'gap-8',
                    'xl:gap-4',
                    'text-white'
                )}
            >
                <div
                    className={classnames(
                        'monthly-details-section',
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
                            'text-4xl',
                            'py-2',
                            'border-b-2',
                            'drop-shadow-md',
                            'text-center'
                        )}
                    >
                        Maintenance
                    </h2>
                    <div className={classnames(
                        'full-cleaning-pricing',
                        'pt-6',
                        'font-dm',
                        'text-center'
                    )}>
                        <h3
                            className={classnames(
                                'font-semibold',
                                'text-6xl',
                                'drop-shadow-lg'
                            )}
                        >
                            $129*
                        </h3>
                    </div>
                    <p className={classnames('pt-2', 'text-center', 'text-md')}>Starting At</p>
                    <p className={classnames(
                        'text-center',
                        'italic',
                        'text-sm'
                    )}>
                        For a singular maintenance visit, see our monthly plans for greater savings!
                    </p>
                    <ul
                        className={classnames(
                            'flex',
                            'flex-col',
                            'list-disc',
                            'pt-4',
                            'pb-6',
                            'font-dm',
                            'pl-6',
                            'justify-self-start'
                        )}
                    >
                        {monthlyServiceDetails.map((montlyItem, i) => {
                            return <li key={`monthly-service-detail-item-${i}`}>
                                {montlyItem}
                            </li>;
                        })}
                    </ul>
                    <p className={classnames('text-center')}>
                        Monthly plans are available in weekly & bi-weekly increments to make sure that your spa
                        remains in excellent condition. Pricing plans below.
                    </p>
                </div>
                <div
                    className={classnames(
                        'full-cleaning-details-section',
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
                            'text-4xl',
                            'py-2',
                            'border-b-2',
                            'drop-shadow-md',
                            'text-center'
                        )}
                    >
                        Full Cleaning
                    </h2>
                    <div className={classnames(
                        'full-cleaning-pricing',
                        'pt-6',
                        'font-dm',
                        'text-center'
                    )}>
                        <h3
                            className={classnames(
                                'font-semibold',
                                'text-6xl',
                                'drop-shadow-lg'
                            )}
                        >
                            $549
                        </h3>
                    </div>
                    <p className={classnames('pt-2', 'text-center')}>(Clean, Drain, Summerize/Winterize)</p>
                    <ul
                        className={classnames(
                            'flex',
                            'flex-col',
                            'list-disc',
                            'py-6',
                            'font-dm',
                            'pl-6',
                            'justify-self-start'
                        )}
                    >
                        {fullCleaningDetails.map((fullCleaningItem, i) => {
                            return <li key={`full-cleaning-item-${i}`}>
                                {fullCleaningItem}
                            </li>;
                        })}
                    </ul>
                </div>
            </div>
            <div className={classnames(
                'text-green-blue',
                'font-dm font-medium',
                'text-md italic text-center',
                'mt-8 px-6 md:px-24'
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
