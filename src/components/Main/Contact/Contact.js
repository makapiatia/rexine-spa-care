'use client';

import React, { useState } from 'react';
import classnames from 'tailwindcss-classnames';
import { PageBanner } from '../PageBanner';
import { Bubbles, Drop, HoverBubbles, Sparkle, Sun } from '../Stickers';
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
        <p id={id} className={classnames('pt-1', 'font-mulish', 'text-sm', 'font-semibold', 'text-red-600')}>
            {error}
        </p>
    );
};

const cardClassName = classnames(
    'relative',
    'rounded-3xl',
    'border-4',
    'border-deep-blue',
    'bg-white',
    'p-6',
    'pt-10',
    'md:p-10',
    'shadow-[6px_6px_0_var(--color-deep-blue)]'
);

const headingClassName = classnames(
    'font-fraunces',
    'font-wonky',
    'font-bold',
    'text-3xl',
    'md:text-4xl',
    'text-rexine-blue'
);

const labelClassName = classnames(
    'mb-1',
    'block',
    'font-mulish',
    'font-extrabold',
    'uppercase',
    'tracking-wider',
    'text-sm'
);

const inputClassName = classnames(
    'w-full',
    'rounded-2xl',
    'border-2',
    'bg-extra-light-blue',
    'px-4',
    'py-3',
    'font-mulish',
    'text-lg',
    'placeholder:text-deep-blue/40',
    'transition',
    'focus:border-deep-blue',
    'focus:bg-white',
    'focus:outline-hidden'
);

const quickContacts = [
    {
        label: 'Call',
        value: '+1-623-282-2530',
        href: 'tel:+1623-282-2530',
        Sticker: Sun,
        cardClassName: 'bg-pop-sky'
    },
    {
        label: 'Email',
        value: 'info@rexinespacare.com',
        href: 'mailto:info@rexinespacare.com',
        Sticker: Drop,
        cardClassName: 'bg-pop-aqua'
    },
    {
        label: 'Hours',
        value: 'Monday-Friday 8:00am-6:00pm',
        note: 'Saturday & Sunday available by appointment.',
        Sticker: Sparkle,
        cardClassName: 'bg-pop-periwinkle'
    }
];

const Field = ({ label, error, id, children, className }) => (
    <div className={className}>
        <label htmlFor={id} className={labelClassName}>{label}</label>
        {children}
        <ValidationError id={`${id}-error`} error={error} />
    </div>
);

const ContactLayout = ({ children }) => (
    <div className={classnames(
        'rexine-spa-care-contact',
        'w-full',
        'overflow-x-clip',
        'bg-extra-light-blue',
        'text-deep-blue'
    )}>
        <PageBanner
            title="Contact"
            description="Have a question or ready to book a visit? Send us a note and we'll get back to you."
        />
        <div className={classnames(
            'flex',
            'flex-col',
            'gap-14',
            'max-w-(--breakpoint-1xl)',
            'mx-auto',
            'px-6',
            'sm:px-12',
            'pb-12',
            'md:pb-16',
            'xl:pb-24'
        )}>
            <div className={classnames('rexine-spa-care-contact-main', 'grid', 'gap-10', 'lg:grid-cols-[3fr_2fr]')}>
                {children}
                <div className={classnames('rexine-spa-care-service-area-card', cardClassName, 'flex', 'flex-col', 'pt-6', 'md:pt-8')}>
                    <h2 className={classnames(headingClassName, 'mb-4', 'text-2xl', 'md:text-3xl')}>Service Area</h2>
                    <ServiceArea />
                </div>
            </div>
            <ul className={classnames('rexine-spa-care-quick-contacts', 'grid', 'gap-4', 'md:grid-cols-3', 'md:gap-6')}>
                {quickContacts.map(({ label, value, note, href, Sticker, cardClassName: quickCardClassName }) => (
                    <li
                        key={label}
                        className={classnames(
                            'flex',
                            'items-center',
                            'gap-4',
                            'rounded-2xl',
                            'border-4',
                            'border-deep-blue',
                            'px-5',
                            'py-4',
                            'shadow-[4px_4px_0_var(--color-deep-blue)]',
                            quickCardClassName
                        )}
                    >
                        <Sticker fill="#FFFFFF" className={classnames('w-10', 'shrink-0')} />
                        <div className={classnames('min-w-0', 'font-mulish')}>
                            <p className={classnames('font-extrabold', 'uppercase', 'tracking-wider', 'text-sm')}>{label}</p>
                            {href ? (
                                <a href={href} className={classnames('break-words', 'text-lg', 'font-semibold', 'hover:underline')}>
                                    {value}
                                </a>
                            ) : (
                                <p className={classnames('text-lg', 'font-semibold')}>{value}</p>
                            )}
                            {note && <p className={classnames('text-sm', 'italic')}>{note}</p>}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

export const Contact = () => {
    const [state, setState] = useState({ submitting: false, succeeded: false, error: null });
    const [fieldErrors, setFieldErrors] = useState({});

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
        fieldErrors[name] ? 'border-red-600' : 'border-deep-blue/20'
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
                <div className={classnames('rexine-spa-care-contact-thank-you', cardClassName, 'flex', 'flex-col', 'items-center', 'justify-center', 'text-center', 'min-h-[24rem]')}>
                    <Sparkle className={classnames('absolute', '-top-8', 'left-8', 'w-16', 'motion-safe:animate-bob')} />
                    <Bubbles className={classnames('mb-6', 'w-24')} />
                    <h2 className={headingClassName}>
                        Thank You!
                    </h2>
                    <p className={classnames('mt-3', 'font-mulish', 'font-medium', 'text-xl')}>
                        We will be in contact as soon as possible!
                    </p>
                </div>
            </ContactLayout>
        );
    }

    return (
        <ContactLayout>
            <form className={classnames('rexine-spa-care-contact-form', cardClassName)} onSubmit={handleSubmit} noValidate>
                <Sparkle className={classnames('absolute', '-top-8', 'left-8', 'w-16')} />
                <input type="hidden" name="_subject" value="New Rexine Spa Care inquiry" />
                <input type="hidden" name="_template" value="table" />
                <h2 className={headingClassName}>Get In Touch</h2>
                <p className={classnames('mt-2', 'font-mulish', 'text-green-blue')}>
                    Fill out the form and we'll reach out to you.
                </p>

                <div className={classnames('mt-8', 'grid', 'gap-5', 'sm:grid-cols-2')}>
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
                            placeholder="Spa make or model, gate codes, preferred visit times…"
                            className={classnames(inputClassName, 'border-deep-blue/20', 'resize-y')}
                        />
                    </Field>
                </div>

                {state.error && (
                    <p className={classnames('mt-6', 'font-mulish', 'font-semibold', 'text-red-600')}>{state.error}</p>
                )}
                <button
                    type="submit"
                    disabled={state.submitting}
                    className={classnames(
                        'group',
                        'relative',
                        'mt-8',
                        'w-full',
                        'sm:w-auto',
                        'rounded-full',
                        'border-4',
                        'border-deep-blue',
                        'bg-pop-sky',
                        'px-10',
                        'py-3',
                        'font-mulish',
                        'font-extrabold',
                        'uppercase',
                        'tracking-wider',
                        'text-lg',
                        'transition',
                        'hover:-translate-y-1',
                        'hover:bg-pop-aqua',
                        'disabled:opacity-60',
                        'disabled:hover:translate-y-0'
                    )}
                >
                    {state.submitting ? 'Sending…' : 'Send ➚'}
                    <HoverBubbles />
                </button>
            </form>
        </ContactLayout>
    );
}
