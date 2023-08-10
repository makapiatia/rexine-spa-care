import React from 'react';
import classnames from 'tailwindcss-classnames';
import { DesktopNavigation } from './DesktopNavigation';
import { MobileNavigation } from './MobileNavigation';

export const Navigation = () => {
  return (
    <div
      className={classnames(
        'rexine-spa-care-navigation',
        'z-[50]',
        'shadow-sm',
        'shadow-blue-500'
      )}
    >
      <DesktopNavigation />
      <MobileNavigation />
    </div>
  );
}