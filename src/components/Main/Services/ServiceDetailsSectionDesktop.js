import React from 'react';
import classnames from 'tailwindcss-classnames';
import { Carousel } from '../Carousel';
import { Sparkle, Sun } from '../Stickers';
import { fullBleedClassName, SectionHeading } from './servicePageStyles';

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

const cardClassName = classnames(
    'relative',
    'flex',
    'flex-col',
    'h-full',
    'rounded-3xl',
    'border-4',
    'border-deep-blue',
    'p-6',
    'pt-10',
    'sm:p-8',
    'sm:pt-12',
    'md:p-10',
    'md:pt-14',
    'shadow-[6px_6px_0_var(--color-deep-blue)]'
);

const priceClassName = classnames(
    'font-fraunces',
    'font-wonky',
    'font-bold',
    'text-5xl',
    'md:text-6xl'
);

const ChecklistItem = ({ children, sparkleFill }) => (
    <li className={classnames('flex', 'items-start', 'gap-3')}>
        <Sparkle fill={sparkleFill} className={classnames('mt-1', 'w-4', 'md:w-5', 'shrink-0')} />
        <span>{children}</span>
    </li>
);

export const ServiceDetailsSectionDesktop = () => {
    return (
        <section className={classnames('rexine-spa-care-service-details-section', 'w-full')}>
            <SectionHeading eyebrow="02 · Services">Explore Our Services</SectionHeading>
            <div className={classnames(
                'service-details-section',
                fullBleedClassName,
                'lg:left-auto',
                'lg:ml-0',
                'lg:w-auto',
                'lg:-mx-3',
                'font-mulish',
                'text-base',
                'md:text-lg'
            )}>
                <Carousel
                    label="Services"
                    minSlides={4}
                    inactiveFrom="(min-width: 1024px)"
                    slideClassName={classnames('basis-[92%]', 'sm:basis-[75%]', 'lg:basis-1/2')}
                >
                <div className={classnames(cardClassName, 'monthly-details-section', 'bg-white', 'text-deep-blue')}>
                    <Sparkle className={classnames('absolute', '-top-8', 'left-8', 'w-16')} />
                    <h3 className={classnames('font-fraunces', 'font-wonky', 'font-bold', 'text-3xl')}>
                        Maintenance
                    </h3>
                    <div className={classnames('mt-4', 'flex', 'flex-wrap', 'items-baseline', 'gap-x-3')}>
                        <p className={classnames('whitespace-nowrap', 'font-bold', 'uppercase', 'tracking-wider', 'text-sm')}>Starting At</p>
                        <p className={classnames(priceClassName, 'text-rexine-blue')}>$129*</p>
                    </div>
                    <p className={classnames('mt-2', 'italic', 'text-sm', 'md:text-base', 'text-green-blue')}>
                        For a singular maintenance visit, see our monthly plans for greater savings!
                    </p>
                    <ul className={classnames('flex', 'flex-col', 'gap-2', 'md:gap-3', 'my-6', 'md:my-8')}>
                        {monthlyServiceDetails.map((monthlyItem) => (
                            <ChecklistItem key={monthlyItem}>{monthlyItem}</ChecklistItem>
                        ))}
                    </ul>
                    <p className={classnames(
                        'mt-auto',
                        'rounded-2xl',
                        'bg-extra-light-blue',
                        'px-4',
                        'py-3',
                        'md:px-5',
                        'md:py-4',
                        'text-sm',
                        'md:text-base'
                    )}>
                        Prefer regular visits? Monthly plans come in weekly & bi-weekly options. See plan pricing above.
                    </p>
                </div>

                <div className={classnames(cardClassName, 'full-cleaning-details-section', 'bg-rexine-blue', 'text-white')}>
                    <Sun fill="var(--color-pop-aqua)" className={classnames('absolute', '-top-8', 'left-8', 'w-16')} />
                    <h3 className={classnames('font-fraunces', 'font-wonky', 'font-bold', 'text-3xl')}>
                        Full Cleaning
                    </h3>
                    <p className={classnames(priceClassName, 'mt-4', 'text-pop-aqua')}>$549</p>
                    <p className={classnames('mt-2', 'text-light-blue')}>(Clean, Drain, Summerize/Winterize)</p>
                    <ul className={classnames('flex', 'flex-col', 'gap-2', 'md:gap-3', 'mt-6', 'md:mt-8')}>
                        {fullCleaningDetails.map((fullCleaningItem) => (
                            <ChecklistItem key={fullCleaningItem} sparkleFill="var(--color-pop-aqua)">
                                {fullCleaningItem}
                            </ChecklistItem>
                        ))}
                    </ul>
                </div>
                </Carousel>
            </div>
        </section>
    );
}
