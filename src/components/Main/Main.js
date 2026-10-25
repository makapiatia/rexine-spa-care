import React from 'react';
import classnames from 'tailwindcss-classnames';
import { Hero } from './HeroSection/Hero';
import { Marquee } from './Marquee';
import { ServiceSection } from './Services/ServiceSection';

export const Main = () => {
  return (
    <div
      className={classnames('rexine-spa-care-main-body relative bg-extra-light-blue')}
    >
      <Hero />
      <Marquee />
      <ServiceSection />
    </div>
  );
}
