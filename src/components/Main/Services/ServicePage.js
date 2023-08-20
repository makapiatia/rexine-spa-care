import React from 'react';
import classnames from 'tailwindcss-classnames';
import { PlanPricingSection } from './PlanPricingSection';
import { ServiceDetailsSection } from './ServiceDetailsSection';

export const ServicePage = () => {
  return (
    <div
      className={classnames(
        'rexine-spa-care-service-page',
        'relative',
        'flex',
        'flex-col',
        'place-items-center',
        'bg-extra-light-blue'
      )}
    >
      <ServiceDetailsSection />
      <PlanPricingSection /> 
    </div>
  );
}