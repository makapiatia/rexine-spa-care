'use client';

import React, { useEffect, useRef, useState } from 'react';
import classnames from 'tailwindcss-classnames';
import { PageBanner } from '../PageBanner';
import { ContactButtons } from '../Services/servicePageStyles';
import { Bubbles, HoverBubbles, Sparkle } from '../Stickers';
import { ServiceArea } from './ServiceArea';

// After activating the form, the email can be swapped for the random string FormSubmit provides
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/info@rexinespacare.com';

const validate = (values) => {
    const errors = {};

    if (!values.name.trim()) {
        errors.name = 'Please enter your name.';
    }
    if (!values.telephone.trim()) {
        errors.telephone = 'Please enter your phone number.';
    } else if (values.telephone.replace(/\D/g, '').length < 10) {
        errors.telephone = 'Please enter a valid phone number, including area code.';
    }
    if (!values.email.trim()) {
        errors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
        errors.email = 'Please enter a valid email address.';
    }
    if (!values.location.trim()) {
        errors.location = 'Please enter your location.';
    }

    return errors;
};

const ValidationError = ({ id, error }) => {
    if (!error) {
        return null;
    }

    return (
        <p id={id} className={classnames('pt-1 font-mulish text-sm font-semibold text-red-600')}>
            {error}
        </p>
    );
};

const cardClassName = classnames(
    'relative p-6 pt-12 md:p-10 md:pt-14',
    'rounded-3xl border-4 border-deep-blue shadow-[6px_6px_0_var(--color-deep-blue)] bg-white'
);

const headingClassName = classnames('font-fraunces font-wonky font-bold text-3xl md:text-4xl text-rexine-blue');

const labelClassName = classnames('block mb-1 font-mulish font-extrabold uppercase tracking-wider text-sm');

const inputClassName = classnames(
    'w-full px-4 py-3',
    'rounded-2xl border-2 focus:border-deep-blue bg-extra-light-blue focus:bg-white',
    'font-mulish text-lg placeholder:text-deep-blue/70',
    'transition'
);

const Field = ({ label, error, id, children, className }) => (
    <div className={className}>
        <label htmlFor={id} className={labelClassName}>{label}</label>
        {children}
        <ValidationError id={`${id}-error`} error={error} />
    </div>
);

const ContactLayout = ({ children }) => (
    <div className={classnames('rexine-spa-care-contact overflow-x-clip w-full bg-extra-light-blue text-deep-blue')}>
        <PageBanner
            title="Contact"
            description="Have a question or ready to book a visit? Text, call or email us, or send a note and we'll get back to you."
        >
            <div className={classnames('flex flex-col items-center gap-4 max-w-xl px-6 pb-8')}>
                <ContactButtons />
            </div>
        </PageBanner>
        <div className={classnames(
            'flex flex-col gap-14 md:gap-24 max-w-(--breakpoint-1xl) mx-auto px-6 sm:px-12 pb-14 md:pb-24'
        )}>
            <div className={classnames('rexine-spa-care-contact-main grid gap-10 lg:grid-cols-[3fr_2fr]')}>
                {children}
                <div className={classnames(
                    'rexine-spa-care-service-area-card flex flex-col pt-6 md:pt-8',
                    cardClassName
                )}>
                    <h2 className={classnames('mb-4 text-2xl md:text-3xl', headingClassName)}>Service Area</h2>
                    <ServiceArea />
                </div>
            </div>
        </div>
    </div>
);

export const Contact = () => {
    const [state, setState] = useState({ submitting: false, succeeded: false, error: null });
    const [fieldErrors, setFieldErrors] = useState({});
    const thankYouHeadingRef = useRef(null);

    // The form is replaced by the thank-you card, so move focus there for keyboard & screen reader users
    useEffect(() => {
        if (state.succeeded) {
            thankYouHeadingRef.current?.focus();
        }
    }, [state.succeeded]);

    const clearFieldError = (event) => {
        const { name } = event.target;
        if (fieldErrors[name]) {
            setFieldErrors({ ...fieldErrors, [name]: undefined });
        }
    };

    const fieldProps = (name) => ({
        id: name,
        name,
        onChange: clearFieldError,
        'aria-invalid': Boolean(fieldErrors[name]),
        'aria-describedby': fieldErrors[name] ? `${name}-error` : undefined
    });

    const fieldClassName = (name) => classnames(
        inputClassName,
        fieldErrors[name] ? 'border-red-600' : 'border-deep-blue/60'
    );

    const handleSubmit = async (event) => {
        event.preventDefault();

        const values = Object.fromEntries(new FormData(event.target));
        const errors = validate(values);
        setFieldErrors(errors);
        if (Object.keys(errors).length > 0) {
            event.target.elements[Object.keys(errors)[0]].focus();
            return;
        }

        setState({ submitting: true, succeeded: false, error: null });

        try {
            const response = await fetch(FORM_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify(values)
            });
            const data = await response.json();

            // FormSubmit returns success as the string "true"
            if (!response.ok || String(data.success) !== 'true') {
                throw new Error(data.message);
            }
            setState({ submitting: false, succeeded: true, error: null });
        } catch (error) {
            setState({
                submitting: false,
                succeeded: false,
                error: 'Sorry, something went wrong. Please try again or email us at info@rexinespacare.com.'
            });
        }
    };

    if (state.succeeded) {
        return (
            <ContactLayout>
                <div className={classnames(
                    'rexine-spa-care-contact-thank-you flex flex-col items-center justify-center min-h-[24rem]',
                    'text-center',
                    cardClassName
                )}>
                    <Sparkle className={classnames(
                        'absolute z-10 -top-8 left-8 rotate-20 w-16',
                        'motion-safe:animate-bob'
                    )} />
                    <Bubbles className={classnames('w-24 mb-6')} />
                    <h2 ref={thankYouHeadingRef} tabIndex={-1} className={headingClassName}>
                        Thank You!
                    </h2>
                    <p className={classnames('mt-3 font-mulish font-medium text-xl')}>
                        We will be in contact as soon as possible!
                    </p>
                </div>
            </ContactLayout>
        );
    }

    return (
        <ContactLayout>
            <form className={classnames(
                'rexine-spa-care-contact-form',
                cardClassName
            )} onSubmit={handleSubmit} noValidate>
                <Sparkle className={classnames('absolute z-10 -top-8 left-8 rotate-20 w-16')} />
                <input type="hidden" name="_subject" value="New Rexine Spa Care inquiry" />
                <input type="hidden" name="_template" value="table" />
                <h2 className={headingClassName}>Get In Touch</h2>
                <p className={classnames('mt-2 font-mulish text-medium-blue')}>
                    Fill out the form and we'll reach out to you.
                </p>

                <div className={classnames('grid gap-5 sm:grid-cols-2 mt-8')}>
                    <Field label="Name" id="name" error={fieldErrors.name}>
                        <input
                            {...fieldProps('name')}
                            placeholder="Your name"
                            autoComplete="name"
                            className={fieldClassName('name')}
                            required={true}
                        />
                    </Field>
                    <Field label="Phone Number" id="telephone" error={fieldErrors.telephone}>
                        <input
                            {...fieldProps('telephone')}
                            type="tel"
                            placeholder="(623) 555-0123"
                            autoComplete="tel"
                            className={fieldClassName('telephone')}
                            required={true}
                        />
                    </Field>
                    <Field label="Email Address" id="email" error={fieldErrors.email}>
                        <input
                            {...fieldProps('email')}
                            type="email"
                            placeholder="you@example.com"
                            autoComplete="email"
                            className={fieldClassName('email')}
                            required={true}
                        />
                    </Field>
                    <Field label="Location" id="location" error={fieldErrors.location}>
                        <input
                            {...fieldProps('location')}
                            placeholder="City or neighborhood"
                            className={fieldClassName('location')}
                            required={true}
                        />
                    </Field>
                    <Field label="Extra Info (Optional)" id="message" className={classnames('sm:col-span-2')}>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            placeholder="Spa make or model, services you're interested in, any questions…"
                            className={classnames('border-deep-blue/60 resize-y', inputClassName)}
                        />
                    </Field>
                </div>

                {state.error && (
                    <p role="alert" className={classnames(
                        'mt-6',
                        'font-mulish font-semibold text-red-600'
                    )}>{state.error}</p>
                )}
                <button
                    type="submit"
                    disabled={state.submitting}
                    className={classnames(
                        'group relative w-full sm:w-auto mt-8 px-10 py-3',
                        'rounded-full border-4 border-deep-blue bg-pop-sky hover:bg-pop-aqua disabled:opacity-60',
                        'font-mulish font-extrabold uppercase tracking-wider text-lg',
                        'transition hover:-translate-y-1 disabled:hover:translate-y-0'
                    )}
                >
                    {state.submitting ? 'Sending…' : <>Send <span aria-hidden="true">➚</span></>}
                    <HoverBubbles />
                </button>
            </form>
        </ContactLayout>
    );
}
