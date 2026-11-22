import React from 'react';
import classnames from 'tailwindcss-classnames';
import { HoverBubbles, Wave } from '../Stickers';

const pillClassName = classnames(
  'group relative px-5 py-2',
  'rounded-full border-2 border-deep-blue',
  'text-center whitespace-nowrap font-mulish font-extrabold uppercase tracking-wider text-sm',
  'transition hover:-translate-y-0.5'
);

const contactLinks = [
  { label: 'Call or text us', href: 'tel:+1623-282-2530', className: 'bg-deep-blue hover:bg-rexine-blue text-white' },
  { label: 'Email us', href: 'mailto:info@rexinespacare.com', className: 'bg-white hover:bg-extra-light-blue text-deep-blue' }
];

export const ContactButtons = ({ className }) => (
  <div className={classnames('flex flex-col sm:flex-row gap-3', className)}>
    {contactLinks.map(({ label, href, className: buttonClassName }) => (
      <a key={label} href={href} className={classnames(buttonClassName, pillClassName)}>
        {label}
        <HoverBubbles />
      </a>
    ))}
  </div>
);

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
