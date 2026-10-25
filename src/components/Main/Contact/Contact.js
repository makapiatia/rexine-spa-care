'use client';

import React, { useState } from 'react';
import classnames from 'tailwindcss-classnames';
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
        <p id={id} className={classnames('pt-1', 'text-base', 'text-red-600')}>
            {error}
        </p>
    );
};

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
        'border-b-2',
        fieldErrors[name] ? 'border-red-600' : 'border-gray-400',
        'focus:outline-hidden'
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
        return <p>Thank you! We will be in contact as soon as possible!</p>;
    }

    return (
        <div className={classnames(
            'flex',
            'flex-col',
            'xl:flex-row',
            'min-h-max',
            'w-full',
            'bg-extra-light-blue',
            'justify-center',
            'xl:py-8'
        )}>
            <form
                className={classnames(
                    'flex',
                    'flex-col',
                    'h-auto',
                    'w-auto',
                    'bg-white',
                    'm-8',
                    'sm:m-12',
                    'xl:ml-16',
                    'xl:mr-8',
                    'p-8',
                    'sm:p-12',
                    'xl:px-24',
                    'items-center',
                    'border border-light-blue'
                )}
                onSubmit={handleSubmit}
                noValidate
            >
                <input type="hidden" name="_subject" value="New Rexine Spa Care inquiry" />
                <input type="hidden" name="_template" value="table" />
                <h1 className={classnames(
                    'pb-8',
                    'sm:pb-16',
                    'font-fraunces',
                    'font-bold',
                    'text-4xl',
                    'text-green-blue',
                )}
                >
                    Get In Touch
                </h1>
                <div
                    className={classnames(
                        'flex',
                        'flex-col',
                        'pb-8',
                        'w-full',
                        'font-mulish',
                        'font-medium',
                        'text-xl'
                    )}
                >
                    <input
                        {...fieldProps('name')}
                        className={fieldClassName('name')}
                        placeholder="Name"
                        required={true}
                    />
                    <ValidationError id="name-error" error={fieldErrors.name} />
                </div>
                <div
                    className={classnames(
                        'flex',
                        'flex-col',
                        'pb-8',
                        'w-full',
                        'font-mulish',
                        'font-medium',
                        'text-xl'
                    )}>
                    <input
                        {...fieldProps('telephone')}
                        type="tel"
                        placeholder="Phone Number"
                        className={fieldClassName('telephone')}
                        required={true}
                    />
                    <ValidationError id="telephone-error" error={fieldErrors.telephone} />
                </div>
                <div
                    className={classnames(
                        'flex',
                        'flex-col',
                        'pb-8',
                        'w-full',
                        'font-mulish',
                        'font-medium',
                        'text-xl'
                    )}
                >
                    <input
                        {...fieldProps('email')}
                        type="email"
                        className={fieldClassName('email')}
                        placeholder="Email Address"
                        required={true}
                    />
                    <ValidationError id="email-error" error={fieldErrors.email} />
                </div>
                <div
                    className={classnames(
                        'flex',
                        'flex-col',
                        'pb-8',
                        'w-full',
                        'font-mulish',
                        'font-medium',
                        'text-xl'
                    )}
                >
                    <input
                        {...fieldProps('location')}
                        className={fieldClassName('location')}
                        placeholder="Location"
                        required={true}
                    />
                    <ValidationError id="location-error" error={fieldErrors.location} />
                </div>
                <div
                    className={classnames(
                        'flex',
                        'flex-col',
                        'pb-8',
                        'w-full',
                        'font-mulish',
                        'font-medium',
                        'text-xl',
                    )}
                >
                    <textarea
                        id="message"
                        name="message"
                        className={classnames(
                            'border-b-2',
                            'border-gray-400',
                            'focus:outline-hidden'

                        )}
                        placeholder="Extra Info (Optional)"
                    />
                </div>
                {state.error && (
                    <p className={classnames('font-mulish', 'text-red-600')}>{state.error}</p>
                )}
                <button
                    type="submit"
                    disabled={state.submitting}
                    className={classnames(
                        'px-6',
                        'py-4',
                        'bg-rexine-blue',
                        'hover:bg-blue-500',
                        'rounded-lg',
                        'text-white',
                        'text-3xl',
                        'tracking-wider',
                        'font-fraunces', 
                        'font-light', 
                        'mt-6',
                    )}
                >
                    Send
                </button>
            </form>
            <div
                className={classnames(
                    'rexine-spa-care-service-page',
                    'relative flex flex-col place-items-center',
                    'xl:my-12 font-bold font-fraunces text-4xl',
                    'text-green-blue bg-white border border-light-blue',
                    'p-8 mx-8 sm:mx-12 xl:ml-6 xl:mr-12 mb-8 sm:mb-12',
                )}
            >
                <h1 className={classnames('pt-2 sm:pt-4 pb-5')}>Service Area</h1>
                <ServiceArea />
            </div>
        </div>
    );
}