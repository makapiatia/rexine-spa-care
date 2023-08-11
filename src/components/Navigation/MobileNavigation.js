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
      height: '36px',
      width: '36px'
    },
    bmCross: {
      background: '#FFFFFF'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
      width: '375px'
    },
    bmMenu: {
      background: '#0B387E',
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
    <div className={classnames('rexine-spa-care-mobile-navigation', 'flex', 'flex-col', 'md:hidden')}>
      <div className={classnames('w-full', 'h-24', 'bg-rexine-blue')}>
        <Menu styles={menuStyles}>
          <a
            id="home"
            className={classnames(
              'menu-item',
              'font-semibold',
              'border-b-2',
              'hover:bg-medium-blue',
              'py-2'
            )}
            href="/">
            Home
          </a>
          <a
            id="services"
            className={classnames(
              'menu-item',
              'font-semibold',
              'border-b-2',
              'hover:bg-medium-blue',
              'py-2'
            )}
            href="/services">
            Services + Pricing
          </a>
          <a
            id="about-us"
            className={classnames(
              'menu-item',
              'font-semibold',
              'border-b-2',
              'hover:bg-medium-blue',
              'py-2'
            )}
            href="/about-us">
            About Us
          </a>
          <a
            id="contact"
            className={classnames(
              'menu-item',
              'font-semibold',
              'hover:bg-medium-blue',
              'py-2'
            )}
            href="/contact">
            Contact
          </a>
        </Menu>
      </div>
    </div>
  );
}
