'use client';

import React from 'react';
import Link from 'next/link';
import classnames from 'tailwindcss-classnames';
import heroBG_3000x2000 from '../../../assets/images/heroBG_3000x2000.jpg';
import heroBGTablet from '../../../assets/images/heroBG_900x600.jpg';
import heroBGMobile from '../../../assets/images/heroBG_600x400.jpg';
import RexineSpaCareLogo_WhiteText from '../../../assets/images/RexineSpaCareLogo_WhiteText.png';
import { useMediaQuery } from '../../../utils/hooks';
import { Bubbles, darkOutline, HoverBubbles, Sparkle } from '../Stickers';

export const Hero = () => {
    const tabletScreen = useMediaQuery('900px');
    const mobileScreen = useMediaQuery('600px');
    const imageUrl = mobileScreen ? heroBGMobile : tabletScreen ? heroBGTablet : heroBG_3000x2000;

    return (
        <section
            className={classnames(
                'rexine-spa-care-hero-section relative flex overflow-hidden items-center justify-center',
                'w-full min-h-[480px] md:min-h-[600px] px-6 py-16',
                'bg-cover bg-center',
                'text-center'
            )}
            style={{ backgroundImage: `url(${imageUrl.src})` }}
        >
            <div className={classnames(
                'absolute inset-0',
                'bg-linear-to-b from-deep-blue/30 via-transparent to-deep-blue/60'
            )} />

            <div className={classnames('relative flex flex-col items-center')}>
                <div className={classnames(
                    'relative max-w-[300px] md:max-w-[360px] px-7 py-9 md:px-9 md:py-11',
                    'rounded-full bg-green-blue/25',
                    'backdrop-blur-[2px]'
                )}>
                    <h1>
                        <img
                            src={RexineSpaCareLogo_WhiteText.src}
                            alt="Rexine Spa Care"
                        />
                    </h1>
                    <Sparkle outline={darkOutline} className={classnames(
                        'absolute z-10 -top-2 -left-4 md:-top-10 md:-left-44 rotate-12 w-14 md:w-28',
                        'motion-safe:animate-bob'
                    )} />
                    <Sparkle
                        outline={darkOutline}
                        fill="var(--color-pop-periwinkle)"
                        className={classnames(
                            'absolute z-10 top-1/2 -right-3 md:-right-44 -rotate-12 w-8 md:w-16',
                            'motion-safe:animate-bob [animation-delay:0.8s]'
                        )}
                    />
                    <Bubbles outline={darkOutline} className={classnames(
                        'absolute z-10 -bottom-1 -left-1 md:bottom-0 md:-left-36 w-12 md:w-24',
                        'motion-safe:animate-bob [animation-delay:1.5s]'
                    )} />
                </div>

                <p className={classnames(
                    'mt-8 px-6 py-3',
                    'rounded-full border-4 border-deep-blue shadow-[5px_5px_0_var(--color-deep-blue)] bg-white',
                    'text-deep-blue font-fraunces font-wonky font-semibold whitespace-nowrap text-xl xs:text-2xl',
                    'md:text-4xl'
                )}>
                    a clean spa is a{' '}
                    <span className={classnames('text-pop-cobalt italic')}>happy</span>
                    {' '}spa <span aria-hidden="true">✹</span>
                </p>

                <div className={classnames(
                    'flex flex-col sm:flex-row gap-4 mt-8',
                    'font-mulish font-extrabold uppercase tracking-wider text-lg'
                )}>
                    <Link
                        href="/services"
                        className={classnames(
                            'group relative px-7 py-3',
                            'rounded-full border-4 border-deep-blue bg-pop-sky hover:bg-pop-aqua',
                            'text-deep-blue',
                            'transition hover:-translate-y-1'
                        )}
                    >
                        Services + Pricing <span aria-hidden="true">➚</span>
                        <HoverBubbles dark />
                    </Link>
                    <a
                        href="tel:+1623-282-2530"
                        className={classnames(
                            'group relative px-7 py-3',
                            'rounded-full border-4 border-white bg-deep-blue/70 hover:bg-rexine-blue',
                            'text-white',
                            'transition hover:-translate-y-1'
                        )}
                    >
                        Call Us Today!
                        <HoverBubbles dark />
                    </a>
                </div>
            </div>
        </section>
    );
}
