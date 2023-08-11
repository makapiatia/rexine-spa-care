import React, { useState } from 'react';
import classnames from 'tailwindcss-classnames';

export const MobileNavigation = () => {
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  console.log('navMenuOpen: ', navMenuOpen);

  return (
    <div className={classnames('rexine-spa-care-mobile-navigation', 'flex', 'md:hidden')}>
      <div className={classnames('w-full', 'h-24', 'bg-rexine-blue')}>
        <button onClick={setNavMenuOpen(true)}>
          Menu
        </button>
      </div>
    </div>
  );
}
