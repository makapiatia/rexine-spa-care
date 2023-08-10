import React from 'react';
import classnames from 'tailwindcss-classnames';
import spaJet from '../../../assets/images/spaJet.jpeg';

export const ServiceSection = () => {

  return (
    <div
      className={classnames(
        'rexine-spa-care-service-section',
        'flex',
        'flex-col',
        'w-auto',
        'h-auto',
        'm-12',
        'border-2',
        'border-[#C0F0FF]',
        'rounded-3xl',
        'bg-[#C0F0FF]'
      )}
    >
      <h1 className={classnames(
        'text-[#005D9E]',
        'text-4xl',
        'uppercase',
        'font-semibold',
        'font-mono',
        'my-8',
        'py-8',
        'px-24',
        'self-center',
        'w-fit',
        'bg-white',
        'rounded-full'
      )}>
        Services
      </h1>
      <div className={classnames('flex', 'flex-row', 'justify-end')}>
        <div className={classnames('pl-16', 'pb-16', 'max-w-[900px]', 'text-[#007DB6]', 'text-lg')}>
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
          <p className={classnames('mt-6')}>
            Xinjiangovenator Zhongjianosaurus Macelognathus Almas Hypsirhophus Beelemodon Mamenchisaurus
            Coloradia Dacentrurus Guaibasaurus Micropachycephalosaurus Corythoraptor Kritosaurus Moabosaurus
            Serendipaceratops Heterosaurus Eousdryosaurus Bambiraptor Paluxysaurus Bravoceratops.
          </p>
          <button className={classnames(
            'mt-6',
            'text-2xl',
            'uppercase',
            'font-semibold',
            'font-mono',
            'text-white',
            'bg-[#0B387E]',
            'hover:bg-[#005D9E]',
            'rounded-md',
            'p-8'
            )}>
              Services + Pricing
              </button>
        </div>
        <div className={classnames('pt-8', 'pb-16', 'px-16')}>
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
