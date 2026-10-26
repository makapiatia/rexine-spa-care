import React from 'react';
import classnames from 'tailwindcss-classnames';
import { ContactButtons, SectionHeading } from './servicePageStyles';

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
    + 'provide your own, or our technician can pick them up for you and you can simply reimburse us.';
const cleaningText = 'Cleanings, start ups & shut downs typically take 3-5 hours. To get the job done, we just need '
    + 'a hose hook up with running water and a working outdoor outlet. If there are any special instructions, '
    + 'please let us know ahead of time!';
const paymentText = "We use Square for invoicing, so paying is quick and secure. You can pay your invoice remotely "
    + "from anywhere, so there's no need to be home on visit day!";
const customPlanText = "Need a custom care plan? If our plans & services don't fit your needs, reach out and "
    + "we'll be happy to create one with you.";

const allServiceExpectations = [
    { title: 'Scheduling', text: [visitDayText, schedulingText, customPlanText], badgeClassName: 'bg-pop-sky', showContactButtons: true },
    { title: 'Billing & Payments', text: paymentText, badgeClassName: 'bg-pop-aqua' },
    { title: 'Sanitizer & Supplies', text: sanitizationOptions, badgeClassName: 'bg-pop-periwinkle' },
    { title: 'Access', text: accessText, badgeClassName: 'bg-pop-sky' },
    { title: 'Cleanings', text: cleaningText, badgeClassName: 'bg-pop-aqua' }
];

const ChevronIcon = () => (
    <svg
        viewBox="0 0 24 24"
        className={classnames('shrink-0 w-7 h-7 ml-auto transition-transform duration-300 group-open/item:rotate-180')}
        aria-hidden="true"
    >
        <path d="M6 9 L12 15 L18 9" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const WhatToExpectSection = () => {
    return (
        <section className={classnames('rexine-spa-care-what-to-expect w-full')}>
            <SectionHeading eyebrow="03 · Good To Know">What To Expect</SectionHeading>
            <div className={classnames('flex flex-col gap-4 max-w-3xl mx-auto font-mulish text-deep-blue')}>
                {allServiceExpectations.map(({ title, text, badgeClassName, showContactButtons }, i) => (
                    <details
                        key={title}
                        open={i === 0}
                        className={classnames(
                            'group/item',
                            'rounded-3xl border-4 border-deep-blue shadow-[6px_6px_0_var(--color-deep-blue)] bg-white'
                        )}
                    >
                        <summary className={classnames(
                            'flex items-center gap-3 p-5 md:p-6 cursor-pointer list-none',
                            '[&::-webkit-details-marker]:hidden'
                        )}>
                            <span className={classnames(
                                'flex shrink-0 items-center justify-center h-11 w-11',
                                'rounded-full border-2 border-deep-blue',
                                'font-fraunces font-wonky font-bold text-xl',
                                badgeClassName
                            )}>
                                {i + 1}
                            </span>
                            <h3 className={classnames('font-fraunces font-wonky font-bold text-2xl text-left')}>
                                {title}
                            </h3>
                            <ChevronIcon />
                        </summary>
                        <div className={classnames('flex flex-col gap-4 px-5 pb-6 md:px-6 text-base text-left leading-relaxed')}>
                            {[].concat(text).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                        </div>
                        {showContactButtons && <ContactButtons className={classnames('px-5 pb-6 md:px-6')} />}
                    </details>
                ))}
            </div>
        </section>
    );
}
