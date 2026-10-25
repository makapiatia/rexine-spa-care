import React from 'react';
import classnames from 'tailwindcss-classnames';
import { Carousel } from '../Carousel';
import { Sparkle, Sun } from '../Stickers';
import { fullBleedClassName, SectionHeading } from './servicePageStyles';

const monthlyServiceDetails = [
    'Water test & balance',
    'Filter degrease & clean',
    'Shell, waterline, pillows & cover interior cleaned',
    'System, equipment & sanitizer settings check'
];

// Only what's added on top of a maintenance visit
const fullCleaningDetails = [
    'Clean, drain, flush & refill',
    'Seasonal start up or shut down',
    'Jets, diverter & velocity valves cleaned',
    'Exterior protectants applied',
    'System & settings check on start up'
];

const cardClassName = classnames(
    'relative flex flex-col h-full p-6 pt-10 sm:p-8 sm:pt-12 md:p-10 md:pt-14',
    'rounded-3xl border-4 border-deep-blue shadow-[6px_6px_0_var(--color-deep-blue)]'
);

const priceClassName = classnames('font-fraunces font-wonky font-bold text-5xl md:text-6xl');

const ChecklistItem = ({ children, sparkleFill }) => (
    <li className={classnames('flex items-start gap-3')}>
        <Sparkle fill={sparkleFill} className={classnames('shrink-0 w-4 md:w-5 mt-1')} />
        <span>{children}</span>
    </li>
);

export const ServiceDetailsSectionDesktop = () => {
    return (
        <section className={classnames('rexine-spa-care-service-details-section w-full')}>
            <SectionHeading eyebrow="02 · Services">Explore Our Services</SectionHeading>
            <div className={classnames(
                'service-details-section lg:left-auto lg:w-auto lg:ml-0 lg:-mx-3',
                'font-mulish text-base md:text-lg',
                fullBleedClassName
            )}>
                <Carousel
                    label="Services"
                    minSlides={4}
                    inactiveFrom="(min-width: 1024px)"
                    slideClassName={classnames('basis-[92%] sm:basis-[75%] lg:basis-1/2')}
                >
                <div className={classnames('monthly-details-section bg-white text-deep-blue', cardClassName)}>
                    <Sparkle className={classnames('absolute z-10 -top-8 left-8 rotate-20 w-16')} />
                    <h3 className={classnames('font-fraunces font-wonky font-bold text-3xl')}>
                        Maintenance
                    </h3>
                    <div className={classnames('flex flex-wrap items-baseline gap-x-3 mt-4')}>
                        <p className={classnames(
                            'whitespace-nowrap font-bold uppercase tracking-wider text-sm'
                        )}>Starting At</p>
                        <p className={classnames('text-rexine-blue', priceClassName)}>
                            $199<span className={classnames('text-2xl md:text-3xl')}>/month</span>
                        </p>
                    </div>
                    <p className={classnames('mt-2 italic text-sm md:text-base text-medium-blue')}>
                        With a 6 or 12 month bi-weekly plan.
                    </p>
                    <ul className={classnames('flex flex-col gap-2 md:gap-3 my-6 md:my-8')}>
                        {monthlyServiceDetails.map((monthlyItem) => (
                            <ChecklistItem key={monthlyItem}>{monthlyItem}</ChecklistItem>
                        ))}
                    </ul>
                    <p className={classnames(
                        'mt-auto px-4 py-3 md:px-5 md:py-4',
                        'rounded-2xl bg-extra-light-blue',
                        'text-sm md:text-base'
                    )}>
                        Prefer regular visits? Monthly plans come in weekly & bi-weekly options. See plan pricing above.
                    </p>
                </div>

                <div className={classnames(
                    'full-cleaning-details-section bg-pop-periwinkle text-deep-blue',
                    cardClassName
                )}>
                    <Sun className={classnames('absolute z-10 -top-8 left-8 rotate-20 w-16')} />
                    <h3 className={classnames('font-fraunces font-wonky font-bold text-3xl')}>
                        Full Cleaning
                    </h3>
                    <p className={classnames('mt-4 text-rexine-blue', priceClassName)}>$549</p>
                    <p className={classnames('mt-6 md:mt-8 font-bold')}>
                        Everything in a maintenance visit, plus the following as needed*:
                    </p>
                    <ul className={classnames('flex flex-col gap-2 md:gap-3 mt-3')}>
                        {fullCleaningDetails.map((fullCleaningItem) => (
                            <ChecklistItem key={fullCleaningItem}>
                                {fullCleaningItem}
                            </ChecklistItem>
                        ))}
                    </ul>
                    <p className={classnames('mt-auto pt-6 text-sm italic')}>
                        *Depending on your needs and your spa's condition.
                    </p>
                </div>
                </Carousel>
            </div>
        </section>
    );
}
