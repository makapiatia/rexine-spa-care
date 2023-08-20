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
                'bg-light-blue',
                'rounded-xl',
                'p-8',
                'drop-shadow-md',
                'mt-8',
                'mx-8',
                'sm:mx-20',
                'sm:mt-20'
            )}
        >
            <h1
                className={classnames(
                    'flex',
                    'font-black',
                    'font-abeezee',
                    'text-3xl',
                    'sm:text-4xl',
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
                    'lg:flex-row',
                    'grid',
                    'grid-rows-3',
                    'lg:grid-cols-3',
                    'lg:grid-rows-1',
                    'md:my-10',
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
                        Monthly Service
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
                            $219
                        </h3>
                    </div>
                    <p className={classnames('pt-3', 'text-center')}>(Starting At)</p>
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
                <div
                    className={classnames(
                        'snowbird-special-details-section',
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
                            'text-4xl',
                            'py-2',
                            'border-b-2',
                            'drop-shadow-md',
                            'text-center'
                        )}
                    >
                        Snowbird Special
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
                            $699
                        </h3>
                    </div>
                    <p className={classnames('pt-3', 'text-center')}>(Clean, Drain, Summerize/Winterize)</p>
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
                        {snowbirdSpecialDetails.map((snowbirdSpecialItem, i) => {
                            return <li key={`snowbird-special-item-${i}`}>
                                {snowbirdSpecialItem}
                            </li>;
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}
