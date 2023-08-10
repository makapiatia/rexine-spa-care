import React from 'react';
import classnames from 'tailwindcss-classnames';
import hero from '../../../assets/images/hero.jpeg';

export const Hero = () => {
    const desktopBannerText = "We're here to help with all of your spa care needs!";

    return (
        <div
            className={classnames(
                'rexine-spa-care-hero-section',
                'flex',
                'bg-cover',
                'bg-center',
                'w-full',
                'h-[500px]',
                'items-center',
                'justify-center',
                'text-center'
            )}
            style={{ backgroundImage: `url(${hero})` }}
        >
            <h1 className={classnames(
                'hidden',
                'md:flex',
                'text-[#0B387E]',
                'md:text-6xl',
                'lg:text-7xl',
                'font-bold',
                'tracking-tight',
                'max-w-[1000px]',
                'px-8'
            )}>
                {desktopBannerText}
            </h1>
        </div>
    );
}