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
                'flex-row',
                'mx-auto',
                'my-6',
                'sm:gap-3'
            )}
        >
            {sanitationProducts?.map((product, i) => {
                return (
                    <div className={classnames(
                        'bg-white',
                        'w-[80px]',
                        'h-[80px]',
                        'sm:w-[120px]',
                        'sm:h-[120px]',
                        'xl:w-[190px]',
                        'xl:h-[190px]',
                        'mb-2',
                        'mx-2',
                        'md:mx-4',
                        'p-4 xl:p-8',
                        'object-contain',
                        'flex items-center',
                        'border border-light-blue'
                    )}>
                    <img
                        src={product?.imgSrc}
                        alt={product?.brand + i}
                        key={product?.brand + i}
                    />
                    </div>
                );
            })}
        </div>
    );
}