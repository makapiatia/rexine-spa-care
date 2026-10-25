import React from 'react';
import classnames from 'tailwindcss-classnames';

const services = [
  'Bi-Weekly & Weekly Plans',
  'Full Cleanings',
  'Drains & Refills',
  'Start Ups & Shut Downs'
];

// Repeated so each row is wider than the screen
const marqueeItems = [...services, ...services];

const MarqueeRow = ({ hidden }) => (
  <ul className={classnames('flex', 'shrink-0', 'items-center')} aria-hidden={hidden}>
    {marqueeItems.map((item, i) => (
      <li key={`${item}-${i}`} className={classnames('flex', 'items-center', 'whitespace-nowrap')}>
        <span className={classnames('px-6')}>{item}</span>
        <span className={classnames('text-pop-sky')}>✹</span>
      </li>
    ))}
  </ul>
);

export const Marquee = () => {
  return (
    <div
      className={classnames(
        'rexine-spa-care-marquee',
        'overflow-hidden',
        'border-y-4',
        'border-deep-blue',
        'bg-rexine-blue',
        'py-4',
        'text-white',
        'font-fraunces',
        'font-wonky',
        'text-2xl',
        'md:text-3xl'
      )}
    >
      <div className={classnames('flex', 'w-max', 'motion-safe:animate-marquee')}>
        <MarqueeRow />
        <MarqueeRow hidden />
      </div>
    </div>
  );
}
