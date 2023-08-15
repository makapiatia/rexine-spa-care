import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import classnames from 'tailwindcss-classnames';

export const Contact = () => {
    const [state, handleSubmit] = useForm("mleyjapj");
    if (state.succeeded) {
        return <p>Thank you! We will be in contact as soon as possible!</p>;
    }

    return (
        <div className={classnames(
            'flex',
            'flex-row',
            'min-h-max',
            'w-full',
            'bg-light-blue',
            'justify-center'
        )}>
            <form
                className={classnames(
                    'flex',
                    'flex-col',
                    'h-auto',
                    'w-auto',
                    'bg-white',
                    'm-12',
                    'md:m-16',
                    'p-12',
                    'md:px-24',
                    'items-center',
                    'rounded-lg',
                    'font-mono'
                )}
                onSubmit={handleSubmit}
            >
                <div
                    className={classnames(
                        'flex',
                        'flex-col',
                        'pb-8'
                    )}
                >
                    <label htmlFor="name">Full Name:</label>
                    <input
                        id="name"
                        name="name"
                        className={classnames(
                            'border-2',
                            'border-gray-400',
                            'rounded-lg',
                        )}
                        placeholder="First Last"
                        required={true}
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                </div>
                <div
                    className={classnames(
                        'flex',
                        'flex-col',
                        'pb-8'
                    )}>
                    <label htmlFor="telephone">Telephone Number:</label>
                    <input
                        type="telephone"
                        name="telephone"
                        id="telephone"
                        placeholder="(555) 555-5555"
                        className={classnames(
                            'border-2',
                            'border-gray-400',
                            'rounded-lg'
                        )}
                        required={true}
                    />
                </div>
                <div
                    className={classnames(
                        'flex',
                        'flex-col',
                        'pb-8'
                    )}
                >
                    <label htmlFor="email">
                        Email Address:
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className={classnames(
                            'border-2',
                            'border-gray-400',
                            'rounded-lg'
                        )}
                        placeholder="email@domain.tld"
                        required={true}
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>
                <div
                    className={classnames(
                        'flex',
                        'flex-col',
                        'pb-8'
                    )}
                >
                    <label htmlFor="message">
                        Relevant Info:
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        className={classnames(
                            'border-2',
                            'border-gray-400',
                            'rounded-lg'
                        )}
                        placeholder="(Optional)"
                        required={true}
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                </div>
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
                        'uppercase',
                        'tracking-widest',
                        'font-semibold'
                    )}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}