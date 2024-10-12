import React from 'react';
import classnames from 'tailwindcss-classnames';
import heroBG_3000x2000 from '../../../assets/images/heroBG_3000x2000.jpg';
import heroBGTablet from '../../../assets/images/heroBG_900x600.jpg';
import heroBGMobile from '../../../assets/images/heroBG_600x400.jpg';
import RexineSpaCareLogo_WhiteText from '../../../assets/images/RexineSpaCareLogo_WhiteText.png';
import { useMediaQuery } from '../../../utils/hooks';

export const Hero = () => {
    const tabletScreen = useMediaQuery('900px');
    const mobileScreen = useMediaQuery('600px');
    const imageUrl = mobileScreen ? heroBGMobile : tabletScreen ? heroBGTablet : heroBG_3000x2000;

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
            )}
            style={{ backgroundImage: `url(${imageUrl})` }}
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