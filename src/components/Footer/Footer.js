import React from 'react';
import classnames from 'tailwindcss-classnames';
import linkedin from '../../assets/images/socials/linkedin.svg';
import squareFacebook from '../../assets/images/socials/squareFacebook.svg';
import squareInstagram from '../../assets/images/socials/squareInstagram.svg';

export const Footer = () => {
  return (
    <div
      className={classnames(
        'rexine-spa-care-footer',
        'flex',
        'flex-col',
        'sm:flex-row',
        'w-full',
        'h-auto',
        'bg-rexine-blue',
        'p-12',
        'grid',
        'grid-cols-1',
        'md:grid-cols-2'
      )}
    >
      <div
        className={classnames(
          'flex',
          'flex-col',
          'place-content-end',
          'text-white',
        )}
      >
        <p className={classnames('font-mono', 'font-semibold', 'text-xl')}>Inquiries & Assistance:</p>
        <p className={classnames('text-lg', 'text-light-blue')}>623-282-2530</p>
        <p className={classnames('font-mono', 'font-semibold', 'text-xl', 'pt-4')}>Email:</p>
        <p className={classnames('text-xl', 'text-light-blue')}>info@rexinespacare.com</p>
        <p className={classnames('font-mono', 'font-semibold', 'text-xl', 'pt-4')}>Regular Business Hours:</p>
        <p className={classnames('text-lg', 'text-light-blue')}>Monday-Friday 8:00am-6:00pm </p>
        <p className={classnames('text-lg', 'text-light-blue', 'italic')}>Saturday & Sunday available by appointment.</p>
      </div>
      <div
        className={classnames(
          'flex',
          'flex-col',
          'place-self-start',
          'mt-6',
          'md:place-self-end',
          'text-lg',
          'text-light-blue'
        )}>
        <p>Follow us on social media!</p>
        <div
          className={classnames(
            'flex',
            'flex-row',
            'mt-1',
            'md:justify-end'
          )}
        >
          <a href='https://www.linkedin.com/company/rexine-spa-care/' >
            <img src={linkedin} width='50px' height='50px' alt={'linkedin-logo'} className={classnames('mr-6')} />
          </a>
          <a href='https://www.facebook.com/rexinespacare/'>
            <img src={squareFacebook} width='50px' height='50px' alt={'facebook-logo'} className={classnames('mr-6')} />
          </a>
          <a href='https://www.instagram.com/rexinespacare/'>
            <img src={squareInstagram} width='50px' height='50px' alt={'instagram-logo'} />
          </a>
        </div>
      </div>
    </div>
  );
}