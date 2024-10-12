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
        <p className={classnames('font-fraunces', 'font-light', 'text-2xl')}>Inquiries & Assistance:</p>
        <div className={classnames('text-lg', 'text-light-blue', 'font-mulish', 'font-medium')}>
          <a
            href='tel:+1623-282-2530'
            className={classnames('hover:text-white')}
          >
            +1-623-282-2530
          </a>
        </div>
        <p className={classnames('font-fraunces', 'font-light', 'text-2xl', 'pt-4')}>Email:</p>
        <div className={classnames('text-xl', 'text-light-blue', 'font-mulish', 'font-medium')}>
          <a
            href='mailto:info@rexinespacare.com'
            className={classnames('hover:text-white')}
          >
            info@rexinespacare.com
          </a>
        </div>
        <p className={classnames('font-fraunces', 'font-light', 'text-2xl', 'pt-4')}>Regular Business Hours:</p>
        <p className={classnames('text-lg', 'text-light-blue', 'font-mulish', 'font-medium')}>Monday-Friday 8:00am-6:00pm </p>
        <p className={classnames('text-lg', 'text-light-blue', 'font-mulish', 'italic')}>
          Saturday & Sunday available by appointment.
        </p>
        <div
          className={classnames('flex', 'flex-row', 'text-md', 'text-light-blue', 'font-mulish', 'pt-3', 'pb-0.5')}
        >
          <a href="https://app.enzuzo.com/policies/tos/8f9a68b8-5d1c-11ee-9c4b-af1815b5c510"
            className={classnames('hover:text-white', 'pr-1')}
          >
            Terms of Service
          </a>
          <p>|</p>
          <a href="https://app.enzuzo.com/policies/privacy/8f9a68b8-5d1c-11ee-9c4b-af1815b5c510"
          className={classnames('hover:text-white', 'pl-1')}
          >
            Privacy Policy
          </a>
        </div>
        <p className={classnames('italic', 'text-sm', 'text-light-blue', 'font-mulish')}>
          © Rexine Spa Care LLC 2023
        </p>
      </div>
      <div
        className={classnames(
          'flex',
          'flex-col',
          'place-self-start',
          'mt-6',
          'md:place-self-end',
          'text-lg',
          'text-light-blue',
          'font-mulish'
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