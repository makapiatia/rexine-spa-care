'use client';

import React, { Children, useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import classnames from 'tailwindcss-classnames';

const controlButtonClassName = classnames(
  'flex',
  'h-8',
  'w-8',
  'items-center',
  'justify-center',
  'rounded-full',
  'text-deep-blue/50',
  'transition',
  'hover:text-deep-blue'
);

const Chevron = ({ direction }) => (
  <svg viewBox="0 0 24 24" className={classnames('h-4', 'w-4')} aria-hidden="true">
    <path
      d={direction === 'left' ? 'M15 5 L8 12 L15 19' : 'M9 5 L16 12 L9 19'}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Swipeable, looping carousel.
// `inactiveFrom` is a media query where it turns off and the slides sit side by side.
export const Carousel = ({ children, label, slideClassName, inactiveFrom, align = 'center' }) => {
  const breakpoints = inactiveFrom ? { [inactiveFrom]: { active: false } } : {};
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align, breakpoints });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(0);
  const [isActive, setIsActive] = useState(true);

  const updateState = useCallback((api) => {
    setSelectedIndex(api.selectedScrollSnap());
    setSnapCount(api.scrollSnapList().length);
    setIsActive(api.internalEngine().options.active);
  }, []);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }
    updateState(emblaApi);
    emblaApi.on('select', updateState).on('reInit', updateState);
    return () => {
      emblaApi.off('select', updateState).off('reInit', updateState);
    };
  }, [emblaApi, updateState]);

  const slides = Children.toArray(children);

  return (
    <div role="region" aria-roledescription="carousel" aria-label={label}>
      <div className={classnames('overflow-hidden')} ref={emblaRef}>
        <div className={classnames('flex', 'touch-pan-y')}>
          {slides.map((slide, i) => (
            <div
              key={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}`}
              className={classnames('min-w-0', 'shrink-0', 'grow-0', 'px-3', 'pt-9', 'pb-3', slideClassName)}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {isActive && snapCount > 1 && (
        <div className={classnames('mt-1', 'flex', 'items-center', 'justify-center', 'gap-2')}>
          <button
            type="button"
            aria-label="Previous slide"
            className={controlButtonClassName}
            onClick={() => emblaApi?.scrollPrev()}
          >
            <Chevron direction="left" />
          </button>
          <div className={classnames('flex', 'items-center')}>
            {Array.from({ length: snapCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === selectedIndex ? 'true' : undefined}
                onClick={() => emblaApi?.scrollTo(i)}
                className={classnames('group', 'px-1', 'py-3')}
              >
                <span className={classnames(
                  'block',
                  'h-[3px]',
                  'rounded-full',
                  'transition-all',
                  'duration-300',
                  i === selectedIndex ? 'w-8 bg-deep-blue' : 'w-4 bg-deep-blue/20 group-hover:bg-deep-blue/40'
                )} />
              </button>
            ))}
          </div>
          <button
            type="button"
            aria-label="Next slide"
            className={controlButtonClassName}
            onClick={() => emblaApi?.scrollNext()}
          >
            <Chevron direction="right" />
          </button>
        </div>
      )}
    </div>
  );
}
