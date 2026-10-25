'use client';

import React, { useState } from 'react';
import classnames from 'tailwindcss-classnames';

const services = [
  'Bi-Weekly & Weekly Plans',
  'Full Cleanings',
  'Drains & Refills',
  'Start Ups & Shut Downs'
];

// Repeated so each row is wider than the screen
const marqueeItems = [...services, ...services];

const MarqueeRow = () => (
  <ul className={classnames('flex shrink-0 items-center')}>
    {marqueeItems.map((item, i) => (
      <li key={`${item}-${i}`} className={classnames('flex items-center whitespace-nowrap')}>
        <span className={classnames('px-6')}>{item}</span>
        <span className={classnames('text-pop-sky')}>✹</span>
      </li>
    ))}
  </ul>
);

const PauseIcon = () => (
  <svg viewBox="0 0 24 24" className={classnames('w-4 h-4')} aria-hidden="true">
    <rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor" />
    <rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor" />
  </svg>
);

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" className={classnames('w-4 h-4')} aria-hidden="true">
    <path d="M8 5 L19 12 L8 19 Z" fill="currentColor" strokeLinejoin="round" />
  </svg>
);

export const Marquee = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    // The button sits on the strip's bottom border, so it lives outside the clipped strip
    <div className={classnames('rexine-spa-care-marquee relative')}>
      <div className={classnames(
        'overflow-hidden py-4',
        'border-y-4 border-deep-blue bg-rexine-blue',
        'text-white font-fraunces font-wonky text-2xl md:text-3xl'
      )}>
        {/* Screen readers get the list once; the scrolling copies are visual only */}
        <ul className={classnames('sr-only')}>
          {services.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <div
          aria-hidden="true"
          className={classnames('flex w-max motion-safe:animate-marquee')}
          // Inline so it wins over the animation shorthand
          style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
        >
          <MarqueeRow />
          <MarqueeRow />
        </div>
      </div>
      <button
        type="button"
        onClick={() => setIsPaused(!isPaused)}
        aria-label={isPaused ? 'Play scrolling services' : 'Pause scrolling services'}
        className={classnames(
          'absolute z-10 bottom-0.5 right-6 md:right-10 translate-y-1/2 flex items-center justify-center',
          'motion-reduce:hidden w-9 h-9',
          'rounded-full border-2 border-deep-blue bg-white hover:bg-pop-aqua',
          'text-deep-blue',
          'transition'
        )}
      >
        {isPaused ? <PlayIcon /> : <PauseIcon />}
      </button>
    </div>
  );
}
