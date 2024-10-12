import React from 'react';
import classnames from 'tailwindcss-classnames';
import { slide as Menu } from 'react-burger-menu';

export const MobileNavigation = () => {
  const menuStyles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#FFFFFF'
    },
    bmBurgerBarsHover: {
      background: '#C0F0FF'
    },
    bmCrossButton: {
      height: '40px',
      width: '40px'
    },
    bmCross: {
      background: '#FFFFFF',
      height: '36px',
      paddingLeft: '4px',
      margin: '-4px'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
      width: '355px'
    },
    bmMenu: {
      background: '#0F52BA',
      padding: '1.5em 0 0',
      fontSize: '2.15em'
    },
    bmMorphShape: {
      fill: '#000000'
    },
    bmItemList: {
      color: '#FFFFFF',
      padding: '0.8em'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.6)'
    }
  }

  return (
    <div className={classnames('rexine-spa-care-mobile-navigation', 'flex', 'flex-col', 'tablet:hidden')}>
      <div className={classnames('w-full', 'h-24', 'font-fraunces', 'bg-rexine-blue', 'font-light')}>
        <Menu styles={menuStyles}>
          <a
            id="home"
            className={classnames(
              'menu-item',
              'border-b-2',
              'border-extra-light-blue',
              'hover:bg-blue-500',
              'py-2',
              'pl-1'
            )}
            href="/">
            Home
          </a>
          <a
            id="services"
            className={classnames(
              'menu-item',
              'border-b-2',
              'border-extra-light-blue',
              'hover:bg-blue-500',
              'py-2',
              'pl-1'
            )}
            href="/services">
            Services + Pricing
          </a>
          <a
            id="about-us"
            className={classnames(
              'menu-item',
              'border-b-2',
              'border-extra-light-blue',
              'hover:bg-blue-500',
              'py-2',
              'pl-1'
            )}
            href="/about-us">
            About Us
          </a>
          <a
            id="contact"
            className={classnames(
              'menu-item',
              'border-b-2',
              'border-light-blue',
              'hover:bg-blue-500',
              'py-2',
              'pl-1'
            )}
            href="/contact">
            Contact
          </a>
          <a
            id="call-us"
            href='tel:+1623-282-2530'
            className={classnames(
              'menu-item',
              'hover:bg-blue-500',
              'py-2',
              'pl-1'
            )}
          >
            Call Us Today!
          </a>
        </Menu>
      </div>
    </div>
  );
}
