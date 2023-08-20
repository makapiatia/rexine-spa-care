import React from 'react';
import classnames from 'tailwindcss-classnames';
import hero from '../../../assets/images/hero.jpeg';
import RexineSpaCareLogo_WhiteText from '../../../assets/images/RexineSpaCareLogo_WhiteText.png';

export const Hero = () => {

    return (
        <div
            className={classnames(
                'rexine-spa-care-hero-section',
                'flex',
                'bg-cover',
                'bg-center',
                'w-full',
                'h-[400px]',
                'md:h-[500px]',
                'items-center',
                'justify-center',
                'text-center',
                'drop-shadow-md'
            )}
            style={{ backgroundImage: `url(${hero})` }}
        >
            <div
                className={classnames(
                    'hidden',
                    'md:flex',
                    'flex-col'
                )}
            >
                <div className={classnames(
                'max-w-[400px]',
                'max-h-[400px]',
                'py-12',
                'px-9',
                'drop-shadow-lg',
                'bg-green-blue/25',
                'rounded-full'
            )}>
                <img
                    src={RexineSpaCareLogo_WhiteText}
                    alt={'rexine-spa-care-logo'}
                />
                </div>
            </div>
            <div className={classnames(
                'flex',
                'md:hidden',
                'max-w-[330px]',
                'max-h-[330px]',
                'px-6',
                'py-8',
                'my-12',
                'drop-shadow-lg',
                'bg-green-blue/25',
                'rounded-full'
            )}>
                <img
                    src={RexineSpaCareLogo_WhiteText}
                    alt={'rexine-spa-care-logo'}
                />
            </div>
        </div>
    );
}