import React from 'react';
import classnames from 'tailwindcss-classnames';
import { PlanPricingSection } from './PlanPricingSection';
import { ServiceDetailsSectionDesktop } from './ServiceDetailsSectionDesktop';
import { WhatToExpectSection } from './WhatToExpectSection';
import { ContactButtons } from './servicePageStyles';
import { PageBanner } from '../PageBanner';

export const ServicePage = () => {
  return (
    <div className={classnames(
      'rexine-spa-care-service-page overflow-x-clip w-full',
      'bg-extra-light-blue',
      'text-deep-blue'
    )}>
      <PageBanner
        title="Services + Pricing"
        description="Ready to get started? Text, call or email us to schedule your service!"
      >
        <div className={classnames(
          'flex flex-col items-center gap-4 max-w-xl px-6 pb-8'
        )}>
          <ContactButtons />
        </div>
      </PageBanner>

      <div className={classnames(
        'flex flex-col gap-14 md:gap-24 max-w-(--breakpoint-1xl) mx-auto px-6 sm:px-12 pb-12 md:pb-16 xl:pb-24'
      )}>
        <ServiceDetailsSectionDesktop />
        <PlanPricingSection />
        <WhatToExpectSection />
      </div>
    </div>
  );
}
