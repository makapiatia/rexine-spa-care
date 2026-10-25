import React from 'react';
import classnames from 'tailwindcss-classnames';
import { Wave } from '../Stickers';

// Stretches a carousel to the screen edges past the page padding
export const fullBleedClassName = classnames(
  'relative',
  'left-1/2',
  'w-screen',
  '-ml-[50vw]'
);

export const SectionHeading = ({ eyebrow, children }) => (
  <div className={classnames('mb-2', 'flex', 'flex-col', 'items-center', 'text-center')}>
    <p className={classnames(
      'rounded-full',
      'border-2',
      'border-deep-blue',
      'bg-white',
      'px-4',
      'py-1',
      'font-mulish',
      'font-extrabold',
      'uppercase',
      'tracking-[0.2em]',
      'text-sm',
      'text-deep-blue'
    )}>
      {eyebrow}
    </p>
    <h2 className={classnames(
      'mt-4',
      'font-fraunces',
      'font-wonky',
      'font-bold',
      'text-3xl',
      'md:text-4xl',
      'text-rexine-blue'
    )}>
      {children}
    </h2>
    <Wave className={classnames('mt-3', 'w-24')} />
  </div>
);
