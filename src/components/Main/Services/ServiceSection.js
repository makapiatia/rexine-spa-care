import React from 'react';
import classnames from 'tailwindcss-classnames';
import spaJet from '../../../assets/images/spaJet.jpeg';
import { Link } from 'react-router-dom';

export const ServiceSection = () => {

  return (
    <div
      className={classnames(
        'rexine-spa-care-service-section',
        'flex',
        'flex-col',
        'm-12',
        'rounded-3xl',
        'bg-light-blue'
      )}
    >
      <h1 className={classnames(
        'text-medium-blue',
        'text-4xl',
        'uppercase',
        'font-semibold',
        'font-mono',
        'my-8',
        'py-8',
        'px-16',
        'self-center',
        'w-fit',
        'bg-white',
        'rounded-full'
      )}>
        Services
      </h1>
      <div className={classnames('flex', 'flex-col', 'xl:flex-row', 'xl:justify-end' )}>
        <div className={classnames(
          'flex',
          'flex-col',
          'pl-16', 
          'pr-16',
          'xl:pr-0',
          'pb-16', 
          'h-auto',
          'text-green-blue', 
          'text-lg',
          'items-center',
          'xl:items-start'
          )}>
          <p className={classnames('mt-6')}>
            Zhuchengceratops Haestasaurus Nanosaurus Magnapaulia Brachylophosaurus Pararhabdodon Dilong
            Huangshanlong Anzu Oohkotokia Titanosaurus Suchomimus Eocursor Sinornithomimus Cedrorestes
            Stygimoloch Mongolosaurus Nanyangosaurus Antarctosaurus Acristavus.
          </p>
          <p className={classnames('mt-6')}>
            Daurosaurus Xenoposeidon Blikanasaurus Marmarospondylus Yuanmousaurus Sinornithosaurus
            Wyleyia Klamelisaurus Aliwalia Koshisaurus Conchoraptor Ornithomerus Gongxianosaurus Graciliceratops
            Buitreraptor Frenguellisaurus Beelemodon Coronosaurus Augustynolophus Monkonosaurus.
          </p>
          <p className={classnames('my-6')}>
            Xinjiangovenator Zhongjianosaurus Macelognathus Almas Hypsirhophus Beelemodon Mamenchisaurus
            Coloradia Dacentrurus Guaibasaurus Micropachycephalosaurus Corythoraptor Kritosaurus Moabosaurus
            Serendipaceratops Heterosaurus Eousdryosaurus Bambiraptor Paluxysaurus Bravoceratops.
          </p>
          <div className={classnames('pt-9')}>
          <Link
            to="/services"
          >
            <span
              className={classnames(
                'text-lg',
                'md:text-2xl',
                'uppercase',
                'font-semibold',
                'font-mono',
                'text-white',
                'bg-rexine-blue',
                'hover:bg-blue-500',
                'rounded-md',
                'p-8',
                'w-max'
              )}>
              Services + Pricing
            </span>
          </Link>
          </div>
        </div>
        <div className={classnames('hidden', 'xl:flex', 'pt-7', 'pb-16', 'px-16', 'xl:min-w-[500px]')}>
          <img
            src={spaJet}
            alt='spa-jet'
            className={classnames('h-auto', 'w-[400px]', 'rounded-tl-extraLarge rounded-br-extraLarge')}
          />
        </div>
      </div>
    </div>
  );
}
