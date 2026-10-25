import React from 'react';
import classnames from 'tailwindcss-classnames';
import { Carousel } from '../Carousel';
import { fullBleedClassName, SectionHeading } from './servicePageStyles';

const schedulingText = 'On the day of your service,'
    + ' our provider will perform the agreed upon visit within the business hours of 8am-6pm.'
    + ' Due to scheduling, weather and other factors, we cannot guarantee a specific time for your visit.'
    + ' If you do have a preferred time, you can communicate this to us and we will do our best to accommodate your needs.';
const accessText = 'Our service provider will require unobstructed access to your spa,'
    + ' this means that gates must be unlocked for the day & access codes must be communicated prior to the visit.';
const visitDayText = 'If you are receiving monthly, bi-weekly or weekly service, your visit will fall on the same day of the week unless either party asks for an alternative.'
    + ' You will receive your maintenance schedule upon your first visit & we ask that you give us 24 hours notice if you require a change to that schedule.'
    + ' We promise to give you as much notice as possible if we need to alter your visit schedule in any way.';
const sanitizationOptions = 'We provide bromine, chlorine & potassium based sanitization at no extra cost.'
    + ' If FROG @Ease cartridges are your preferred sanitization, we will expect you to supply your cartridges, or we can supply those cartridges at cost.';
const cleaningText = 'Cleanings, start ups & shut downs typically require 3-5 hours.'
    + ' We provide all supplies necessary for these services but do require a hose hook up with running water,'
    + ' working outdoor outlets, and any other special instructions.';

const allServiceExpectations = [
    { title: 'Scheduling', text: schedulingText, badgeClassName: 'bg-pop-sky' },
    { title: 'Access', text: accessText, badgeClassName: 'bg-pop-aqua' },
    { title: 'Visit Days', text: visitDayText, badgeClassName: 'bg-pop-periwinkle' },
    { title: 'Sanitization', text: sanitizationOptions, badgeClassName: 'bg-pop-sky' },
    { title: 'Cleanings', text: cleaningText, badgeClassName: 'bg-pop-aqua' }
];

export const WhatToExpectSection = () => {
    return (
        <section className={classnames('rexine-spa-care-what-to-expect', 'w-full')}>
            <SectionHeading eyebrow="03 · Good To Know">What To Expect</SectionHeading>
            <div className={classnames(fullBleedClassName, 'font-mulish', 'text-deep-blue')}>
                <Carousel
                    label="What To Expect"
                    slideClassName={classnames('basis-[85%]', 'md:basis-[45%]', 'xl:basis-[30%]')}
                >
                {allServiceExpectations.map(({ title, text, badgeClassName }, i) => (
                    <div
                        key={title}
                        className={classnames(
                            'h-full',
                            'rounded-3xl',
                            'border-4',
                            'border-deep-blue',
                            'bg-white',
                            'p-7',
                            'shadow-[6px_6px_0_var(--color-deep-blue)]'
                        )}
                    >
                        <div className={classnames('flex', 'items-center', 'gap-3', 'mb-4')}>
                            <span className={classnames(
                                'flex',
                                'h-11',
                                'w-11',
                                'shrink-0',
                                'items-center',
                                'justify-center',
                                'rounded-full',
                                'border-2',
                                'border-deep-blue',
                                'font-fraunces',
                                'font-wonky',
                                'font-bold',
                                'text-xl',
                                badgeClassName
                            )}>
                                {i + 1}
                            </span>
                            <h3 className={classnames('font-fraunces', 'font-wonky', 'font-bold', 'text-2xl')}>
                                {title}
                            </h3>
                        </div>
                        <p className={classnames('text-base', 'leading-relaxed')}>{text}</p>
                    </div>
                ))}
                </Carousel>
            </div>
        </section>
    );
}
