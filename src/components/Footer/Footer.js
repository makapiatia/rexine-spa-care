import React from 'react';
import classnames from 'tailwindcss-classnames';

export const Footer = () => {
  return (
    <div
      className={classnames(
        'rexine-spa-care-footer',
        'flex',
        'flex-col',
        'place-content-end',
        'w-full',
        'h-auto',
        'bg-rexine-blue',
        'text-white',
        'p-12'
      )}
    >
      <p className={classnames('font-mono', 'font-semibold', 'text-xl')}>Inquiries & Assistance:</p>
      <p className={classnames('text-lg', 'text-light-blue')}>623-282-2530</p>
      <p className={classnames('font-mono', 'font-semibold', 'text-xl', 'pt-4')}>Email:</p>
      <p className={classnames('text-xl', 'text-light-blue')}>info@rexinespacare.com</p>
      <p className={classnames('font-mono', 'font-semibold', 'text-xl', 'pt-4')}>Standard Business Hours:</p>
      <p className={classnames('text-lg', 'text-light-blue')}>Monday-Friday 8:00am-6:00pm </p>
      <p className={classnames('text-lg', 'text-light-blue', 'italic')}>Saturday & Sunday available by appointment.</p>
    </div>
  );
}