import React from 'react';
import classnames from 'tailwindcss-classnames';
import { Carousel } from '../Carousel';
import { fullBleedClassName, SectionHeading } from './servicePageStyles';

const schedulingText = "Your visit will take place on your scheduled day, anytime between 8am and 6pm. Because "
    + "scheduling, weather and other things can shift our day, we can't promise an exact time. Have a preferred "
    + "time? Just let us know and we'll do our best to make it work!";
const accessText = "To take care of your spa, we'll need easy access to it on the day of your visit. Please "
    + 'leave any gates unlocked and share gate or access codes with us ahead of time. Thank you!';
const visitDayText = 'With weekly or every other week service, your visits will land on the same day of the week, '
    + "unless one of us needs to switch things up. You'll get your maintenance schedule at your first visit. Need "
    + "to make a change? Just give us 24 hours' notice. And if we ever need to adjust your schedule, we'll let you "
    + 'know as early as we can!';
const sanitizationOptions = 'We provide bromine, chlorine & potassium based sanitization at no extra cost. '
    + "New filters, FROG @ease cartridges and system kits aren't included, but we're happy to help! Feel free to "
    + 'use your own, or our technician can pick them up for you and you can simply reimburse us.';
const cleaningText = 'Cleanings, start ups & shut downs typically take 3-5 hours. To get the job done, we just need '
    + 'a hose hook up with running water and a working outdoor outlet. If there are any special instructions, '
    + 'please let us know ahead of time!';

const allServiceExpectations = [
    { title: 'Scheduling', text: schedulingText, badgeClassName: 'bg-pop-sky' },
    { title: 'Access', text: accessText, badgeClassName: 'bg-pop-aqua' },
    { title: 'Visit Days', text: visitDayText, badgeClassName: 'bg-pop-periwinkle' },
    { title: 'Sanitizer & Supplies', text: sanitizationOptions, badgeClassName: 'bg-pop-sky' },
    { title: 'Cleanings', text: cleaningText, badgeClassName: 'bg-pop-aqua' }
];

export const WhatToExpectSection = () => {
    return (
        <section className={classnames('rexine-spa-care-what-to-expect w-full')}>
            <SectionHeading eyebrow="03 · Good To Know">What To Expect</SectionHeading>
            <div className={classnames('font-mulish text-deep-blue', fullBleedClassName)}>
                <Carousel
                    label="What To Expect"
                    slideClassName={classnames('basis-[85%] md:basis-[45%] xl:basis-[30%]')}
                >
                {allServiceExpectations.map(({ title, text, badgeClassName }, i) => (
                    <div
                        key={title}
                        className={classnames(
                            'h-full p-7',
                            'rounded-3xl border-4 border-deep-blue shadow-[6px_6px_0_var(--color-deep-blue)] bg-white'
                        )}
                    >
                        <div className={classnames('flex items-center gap-3 mb-4')}>
                            <span className={classnames(
                                'flex shrink-0 items-center justify-center h-11 w-11',
                                'rounded-full border-2 border-deep-blue',
                                'font-fraunces font-wonky font-bold text-xl',
                                badgeClassName
                            )}>
                                {i + 1}
                            </span>
                            <h3 className={classnames('font-fraunces font-wonky font-bold text-2xl')}>
                                {title}
                            </h3>
                        </div>
                        <p className={classnames('text-base leading-relaxed')}>{text}</p>
                    </div>
                ))}
                </Carousel>
            </div>
        </section>
    );
}
