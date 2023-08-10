import React from 'react';
import classnames from 'tailwindcss-classnames';
import { Hero } from './HeroSection/Hero';

export const Main = () => {
  return (
    <div
      className={classnames(
        'rexine-spa-care-main-body'
      )}
    >
        <Hero />
    </div>
  );
}
