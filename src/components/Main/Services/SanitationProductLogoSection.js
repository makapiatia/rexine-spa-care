import React from 'react';
import classnames from 'tailwindcss-classnames';
import frogEase from '../../../assets/images/sanitationImages/frogEASE.jpg';
import softSoakTrio from '../../../assets/images/sanitationImages/softSoakTrio.jpeg';
import spaguardLogo from '../../../assets/images/sanitationImages/spaguardLogo.png';

export const SanitationProductLogoSection = () => {

    const sanitationProducts = [
        { 'brand': 'soft-soak-trio', 'imgSrc': softSoakTrio },
        { 'brand': 'spa-guard-logo', 'imgSrc': spaguardLogo },
        { 'brand': 'frog-@ease-logo', 'imgSrc': frogEase }    
    ];

    return (
        <div
            className={classnames(
                'sanitation-product-logo-section',
                'flex',
                'flex-col',
                'sm:flex-row',
                'place-items-center',
                'max-w-screen-1xl',
                'justify-center',
                'mx-auto',
                'mb-6',
                'gap-3'
            )}
        >
            {sanitationProducts?.map((product, i) => {
                return (
                    <img
                        src={product?.imgSrc}
                        alt={product?.brand + i}
                        key={product?.brand + i}
                        className={classnames(
                            'bg-white',
                            'w-[190px]',
                            'h-[120px]',
                            'sm:w-[120px]',
                            'sm:h-[100px]',
                            'xl:w-[190px]',
                            'xl:h-[160px]',
                            'drop-shadow-lg',
                            'mb-2',
                            'mx-2',
                            'p-2',
                            'md:mx-4',
                            'rounded-xl',
                            'object-contain'
                        )}
                    />
                );
            })}
        </div>
    );
}