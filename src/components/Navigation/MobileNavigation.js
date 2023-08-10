import React from 'react';
import classnames from 'tailwindcss-classnames';

 export const MobileNavigation = () => {
  return (
    <div className={classnames('rexine-spa-care-mobile-navigation', 'flex', 'md:hidden')}>
      <div className={classnames('w-full', 'h-24', 'bg-rexine-blue')}></div>
    </div>
  );
}
