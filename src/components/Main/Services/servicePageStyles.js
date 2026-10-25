import React from 'react';
import classnames from 'tailwindcss-classnames';
import { Wave } from '../Stickers';

// Stretches a carousel to the screen edges past the page padding
export const fullBleedClassName = classnames('relative left-1/2 w-screen -ml-[50vw]');

export const SectionHeading = ({ eyebrow, children }) => (
  <div className={classnames('flex flex-col items-center mb-2 text-center')}>
    <p className={classnames(
      'px-4 py-1',
      'rounded-full border-2 border-deep-blue bg-white',
      'font-mulish font-extrabold uppercase tracking-[0.2em] text-sm text-deep-blue'
    )}>
      {eyebrow}
    </p>
    <h2 className={classnames('mt-4 font-fraunces font-wonky font-bold text-3xl md:text-4xl text-rexine-blue')}>
      {children}
    </h2>
    <Wave className={classnames('w-24 mt-3')} />
  </div>
);
