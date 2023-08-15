import React from 'react';
import classnames from 'tailwindcss-classnames';
import { useMediaQuery } from '../../../utils/hooks';

export const ServiceArea = () => {
  const mdScreen = useMediaQuery('768px');
  const serviceMapWidth = mdScreen ? '640' : '320';
  const serviceMapHeight = mdScreen ? '480' : '240';

  return (
    <div
      className={classnames(
        'rexine-spa-care-service-area-section',
        'p-8',
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
