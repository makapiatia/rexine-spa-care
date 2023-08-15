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
                <h1 className={classnames(
                    'pb-8', 
                    'text-2xl',
                    'sm:text-3xl',
                    'font-bold',
                    'uppercase'
                    )}
                >
                    Get In Touch
                    </h1>
                <div
                    className={classnames(
                        'flex',
                        'flex-col',
                        'pb-8'
                    )}
                >
                    <input
                        id="name"
                        name="name"
                        className={classnames(
                            'border-b-2',
                            'border-gray-400',
                            'focus:outline-none'
                        )}
                        placeholder="NAME"
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
                    <input
                        type="telephone"
                        name="telephone"
                        id="telephone"
                        placeholder="PHONE NUMBER"
                        className={classnames(
                            'border-b-2',
                            'border-gray-400',
                            'focus:outline-none'
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
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className={classnames(
                            'border-b-2',
                            'border-gray-400',
                            'focus:outline-none'
                        )}
                        placeholder="EMAIL ADDRESS"
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
                        'pb-8',
                        
                    )}
                >
                    <textarea
                        id="message"
                        name="message"
                        className={classnames(
                            'border-b-2',
                            'border-gray-400',
                            'sm:ml-3',
                            'focus:outline-none'
                            
                        )}
                        placeholder="EXTRA INFO"
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
                        'text-xl',
                        'uppercase',
                        'tracking-widest',
                        'font-semibold'
                    )}
                >
                    Send
                </button>
            </form>
        </div>
    );
}