import React from 'react';
import classnames from 'tailwindcss-classnames';

export const ServiceArea = () => {
  return (
    <div className={classnames(
      // Fills the card so it matches the form's height beside it
      'rexine-spa-care-service-area-section overflow-hidden aspect-[4/3] lg:aspect-auto lg:flex-1 lg:min-h-80',
      'rounded-2xl border-2 border-deep-blue'
    )}>
      <iframe
        title={'rexine-spa-care-service-area'}
        src="https://www.google.com/maps/d/u/0/embed?mid=1UyHDSPPsklTNcs322jUS_YWkBQIr6VA&ehbc=2E312F"
        className={classnames('h-full w-full')}
        loading="lazy"
      />
    </div>
  );
}
