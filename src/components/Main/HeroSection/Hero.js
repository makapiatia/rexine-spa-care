import React from 'react';
import classnames from 'tailwindcss-classnames';
import hero from '../../../assets/images/hero.jpeg';

export const Hero = () => {
    return (
        <div
            className={classnames(
                'rexine-spa-care-hero-section'
            )}
        >
            <img
                src={hero}
                width={2000}
                alt={'hero'}
            />
        </div>
    );
}