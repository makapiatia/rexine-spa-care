import React from 'react';
import classnames from 'tailwindcss-classnames';

export const AboutUs = () => {
  return (
    <div
      className={classnames(
        'rexine-spa-care-about-us',
        'flex',
        'flex-col',
        'place-items-center'
      )}
    >
      <div
        className={classnames(
          'about-us-matt-photo',
          'flex',
          'flex-col',
          'bg-medium-green',
          'rounded-full',
          'h-80',
          'w-80',
          'm-16',
          'drop-shadow-lg'
        )}
      >
      </div>
      <div
        className={classnames(
          'mx-12',
          'mb-12',
          'text-medium-teal',
          'text-xl',
          'px-28'
        )}
      >
        <p
          className={classnames(
            'pb-4'
          )}
        >
          Nambalia. Algoasaurus. Lewisuchus. Neosaurus.
          Kileskus. Palaeopteryx. Tatankaceratops. Incisivosaurus.
          Garudimimus. Scipionyx. Dracorex. Heterodontosaurus. Yixianosaurus.
          Ohmdenosaurus. Sauroniops. Achelousaurus. Laplatasaurus. Protognathus.
          Machairasaurus. Neuquenraptor. Sauroniops. Saurolophus. Troodon. Alioramus.
          Juravenator. Agathaumas. Breviceratops.
        </p>
        <p>
          Notoceratops. Homalocephale. Dasygnathoides. Deinonychus. Chindesaurus.
          Anthodon. Leptospondylus. Arizonasaurus. Maiasaura. Eucnemesaurus. Teratophoneus.
          Loricosaurus. Bonitasaura. Proceratops. Becklespinax. Galesaurus.
        </p>
      </div>
      <div
        className={classnames(
          'bg-medium-teal',
          'w-4/5',
          'h-36',
          'mb-6'
        )}
      >

      </div>
      <div
        className={classnames(
          'about-us-tia-photo',
          'flex',
          'flex-col',
          'bg-green-blue',
          'rounded-full',
          'h-80',
          'w-80',
          'm-16',
          'drop-shadow-lg'
        )}
      >
      </div>
      <div
        className={classnames(
          'mx-12',
          'mb-12',
          'text-green-blue',
          'text-xl',
          'px-28'
        )}
      >
        <p>
          Notoceratops. Homalocephale. Dasygnathoides. Deinonychus. Chindesaurus.
          Anthodon. Leptospondylus. Arizonasaurus. Maiasaura. Eucnemesaurus. Teratophoneus.
          Loricosaurus. Bonitasaura. Proceratops. Becklespinax. Galesaurus.
        </p>
      </div>
    </div>
  );
}
