import React from 'react';
import classnames from 'tailwindcss-classnames';
import { ServiceArea } from './ServiceArea';

export const ServicePage = () => {
  return (
    <div
      className={classnames(
        'rexine-spa-care-service-page',
        'relative',
        'flex',
        'flex-col',
        'md:flex-row',
        'place-items-center'
      )}
    >
      <ServiceArea />
    </div>
  );
}