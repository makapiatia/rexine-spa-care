import React from 'react';
import classnames from 'tailwindcss-classnames';
import frogEase from '../../../assets/images/sanitationImages/frogEASE.jpg';
import softSoakTrio from '../../../assets/images/sanitationImages/softSoakTrio.jpeg';
import spaguardLogo from '../../../assets/images/sanitationImages/spaguardLogo.png';

export const SanitationProductLogoSection = () => {

    const sanitationProducts = [
        { 'brand': 'soft-soak-trio', 'name': 'Soft Soak Trio', 'imgSrc': softSoakTrio },
        { 'brand': 'spa-guard-logo', 'name': 'SpaGuard', 'imgSrc': spaguardLogo },
        { 'brand': 'frog-@ease-logo', 'name': 'FROG @ease', 'imgSrc': frogEase }
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
                            'flex-1 min-w-0 max-w-37.5 aspect-square p-3 sm:p-5',
                            'rounded-2xl border-4 border-deep-blue shadow-[4px_4px_0_var(--color-deep-blue)] bg-white',
                            'transition duration-300 hover:scale-105'
                        )}
                    >
                        <img
                            src={product?.imgSrc?.src}
                            alt={`${product?.name} logo`}
                        />
                    </div>
                );
            })}
        </div>
    );
}
