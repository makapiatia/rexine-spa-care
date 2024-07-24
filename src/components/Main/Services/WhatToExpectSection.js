import React from 'react';
import classnames from 'tailwindcss-classnames';

export const WhatToExpectSection = () => {
    const schedulingText = 'On the day of your service,'
        + ' our provider will perform the agreed upon visit within the business hours of 8am-6pm.'
        + ' Due to scheduling, weather and other factors, we cannot guarantee a specific time for your visit.'
        + ' If you do have a preferred time, you can communicate this to us and we will do our best to accomodate your needs.';
    const accessText = 'Our service provider will require unobstructed access to your spa,'
        + ' this means that gates must be unlocked for the day & access codes must be communicated prior to the visit.';
    const visitDayText = 'If you are receiving monthly, bi-weekly or weekly service, your visit will fall on the same day of the week unless either party asks for an alternative.'
        + ' You will receive your maintenance schedule upon your first visit & we ask that you give us 24 hours notice if you require a change to that schedule.'
        + ' We promise to give you as much notice as possible if we need to alter your visit schedule in any way.';
    const sanitizationOptions = 'We provide bromine, chlorine & potassium based sanitization at no extra cost.'
        + ' If FROG @Ease cartridges are your preferred sanitization, we will expect you to supply your cartridges, or we can supply those cartridges at cost.';
    const cleaningText = 'Cleanings, start ups & shut downs typically require 3-5 hours.'
        + ' We provide all supplies necessary for these services but do require a hose hook up with running water,'
        + ' working outdoor outlets, and any other special instructions.'
    const allServiceExpectations = [schedulingText, accessText, visitDayText, sanitizationOptions, cleaningText];

    return (
        <div
            className={classnames(
                'rexine-spa-care-what-to-expect',
                'flex flex-col',
                'bg-light-blue',
                'rounded-xl',
                'px-8 pt-8 md:pb-8',
                'drop-shadow-md',
                'mx-4 mb-4 sm:mx-12 sm:mb-12 md:mx-20 md:mb-20',
            )}
        >
            <h1
                className={classnames(
                    'flex place-self-center',
                    'px-4 md:px-8 py-4 mb-8 mt-4',
                    'font-bold font-dosis',
                    'text-4xl bg-white',
                    'rounded-xl w-fit drop-shadow-md',
                    'text-medium-blue text-center',
                )}
            >
                What To Expect
            </h1>
            <div className={classnames(
                'text-green-blue text-md',
                'font-dm font-medium md:px-8'
            )}>
                <ul className={classnames(
                    'flex flex-row',
                    'grid grid-flow-row',
                    'list-disc p-2'
                )}>
                    {allServiceExpectations?.map((text) => {
                        return <li className="pb-4">{text}</li>
                    })}
                </ul>
            </div>
        </div>
    );
}
