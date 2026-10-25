import React from 'react';
import classnames from 'tailwindcss-classnames';
import { DesktopNavigation } from './DesktopNavigation';
import { MobileNavigation } from './MobileNavigation';

export const Navigation = () => {
  return (
    <header
      className={classnames(
        'rexine-spa-care-navigation',
        'sticky', 
        'top-0',
        'z-50',
        'shadow-xs',
        'shadow-blue-500'
      )}
    >
      <DesktopNavigation />
      <MobileNavigation />
    </header>
  );
}