'use client';

import React from 'react';
import classnames from 'tailwindcss-classnames';
import { useMediaQuery } from '../../../utils/hooks';

export const ServiceArea = () => {
  const xsScreen = useMediaQuery('500px');
  const mdScreen = useMediaQuery('768px');
  
  const serviceMapWidth = xsScreen
    ? mdScreen
      ? '640'
      : '369'
    : '250';
  const serviceMapHeight = xsScreen
    ? mdScreen
      ? '480'
      : '280'
    : '200';

  return (
    <div
      className={classnames(
        'rexine-spa-care-service-area-section',
      )}
    >
      <iframe
        title={'rexine-spa-care-service-area'}
        src="https://www.google.com/maps/d/u/0/embed?mid=1UyHDSPPsklTNcs322jUS_YWkBQIr6VA&ehbc=2E312F"
        width={serviceMapWidth}
        height={serviceMapHeight}>
      </iframe>
    </div>
  );
}
