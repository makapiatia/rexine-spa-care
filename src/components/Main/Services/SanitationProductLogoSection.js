import React from 'react';
import classnames from 'tailwindcss-classnames';
import frogEase from '../../../assets/images/sanitationImages/frogEASE.jpg';
import softSoakTrio from '../../../assets/images/sanitationImages/softSoakTrio.jpeg';
import spaguardLogo from '../../../assets/images/sanitationImages/spaguardLogo.png';

export const SanitationProductLogoSection = () => {

    const sanitationProducts = [
        { 'brand': 'soft-soak-trio', 'imgSrc': softSoakTrio, 'tilt': '-rotate-3' },
        { 'brand': 'spa-guard-logo', 'imgSrc': spaguardLogo, 'tilt': 'rotate-2 translate-y-4' },
        { 'brand': 'frog-@ease-logo', 'imgSrc': frogEase, 'tilt': '-rotate-1' }
    ];

    return (
        <div
            className={classnames('sanitation-product-logo-section flex flex-row justify-center gap-3 sm:gap-6')}
        >
            {sanitationProducts?.map((product, i) => {
                return (
                    <div
                        key={product?.brand + i}
                        className={classnames(
                            'object-contain flex items-center',
                            'w-[90px] h-[90px] sm:w-[140px] sm:h-[140px] xl:w-[150px] xl:h-[150px] p-3 sm:p-5',
                            'rounded-2xl border-4 border-deep-blue shadow-[4px_4px_0_var(--color-deep-blue)] bg-white',
                            'transition duration-300 hover:rotate-0 hover:scale-105',
                            product?.tilt
                        )}
                    >
                        <img
                            src={product?.imgSrc?.src}
                            alt={product?.brand + i}
                        />
                    </div>
                );
            })}
        </div>
    );
}
