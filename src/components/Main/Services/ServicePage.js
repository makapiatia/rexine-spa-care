import React from 'react';
import classnames from 'tailwindcss-classnames';
import { PlanPricingSection } from './PlanPricingSection';
import { ServiceDetailsSectionDesktop } from './ServiceDetailsSectionDesktop';
import { WhatToExpectSection } from './WhatToExpectSection';
import { useMediaQuery } from '../../../utils/hooks';

export const ServicePage = () => {
  const mdScreen = useMediaQuery('768px');
  
  return (
    <div
      className={classnames(
        'rexine-spa-care-service-page',
        'relative',
        'flex',
        'flex-col',
        'place-items-center',
        'bg-extra-light-blue',
        'max-w-screen-1xl',
        'justify-center',
        'mx-auto'
      )}
    >
      <PlanPricingSection />
      <ServiceDetailsSectionDesktop />
      <WhatToExpectSection />
    </div>
  );
}