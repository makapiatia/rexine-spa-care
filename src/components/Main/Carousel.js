'use client';

import React, { Children, useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import classnames from 'tailwindcss-classnames';

const controlButtonClassName = classnames(
  'flex items-center justify-center h-8 w-8',
  'rounded-full',
  'text-deep-blue/70 hover:text-deep-blue',
  'transition'
);

const Chevron = ({ direction }) => (
  <svg viewBox="0 0 24 24" className={classnames('h-4 w-4')} aria-hidden="true">
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
// `minSlides` repeats the slides so Embla has enough of them to loop endlessly.
export const Carousel = ({
  children, label, slideClassName, inactiveFrom, align = 'center', minSlides = 0, startIndex = 0
}) => {
  const breakpoints = inactiveFrom ? { [inactiveFrom]: { active: false } } : {};
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align, breakpoints, startIndex });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isActive, setIsActive] = useState(true);

  const updateState = useCallback((api) => {
    setSelectedIndex(api.selectedScrollSnap());
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

  // Embla turns looping off when there aren't enough slides to fill the
  // viewport, so wrap the arrows around ourselves in that case
  const scrollPrev = () => {
    if (!emblaApi) {
      return;
    }
    if (emblaApi.canScrollPrev()) {
      emblaApi.scrollPrev();
    } else {
      emblaApi.scrollTo(emblaApi.scrollSnapList().length - 1);
    }
  };

  const scrollNext = () => {
    if (!emblaApi) {
      return;
    }
    if (emblaApi.canScrollNext()) {
      emblaApi.scrollNext();
    } else {
      emblaApi.scrollTo(0);
    }
  };

  const originals = Children.toArray(children);
  const slideCount = originals.length;
  const copies = isActive && minSlides > slideCount ? Math.ceil(minSlides / slideCount) : 1;
  const slides = Array.from({ length: copies }, () => originals).flat();
  const currentSlide = selectedIndex % slideCount;

  return (
    <div className={classnames(
      'rexine-spa-care-carousel'
    )} role="region" aria-roledescription="carousel" aria-label={label}>
      <div className={classnames('overflow-hidden')} ref={emblaRef}>
        <div className={classnames('flex touch-pan-y')}>
          {slides.map((slide, i) => (
            <div
              key={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`${(i % slideCount) + 1} of ${slideCount}`}
              // Repeated copies only exist so the loop works, so screen readers skip them
              aria-hidden={i >= slideCount || undefined}
              inert={i >= slideCount || undefined}
              className={classnames('shrink-0 grow-0 min-w-0 px-3 pt-9 pb-3', slideClassName)}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {isActive && slideCount > 1 && (
        <div className={classnames('flex items-center justify-center gap-2 mt-1')}>
          <button
            type="button"
            aria-label="Previous slide"
            className={controlButtonClassName}
            onClick={scrollPrev}
          >
            <Chevron direction="left" />
          </button>
          <div className={classnames('flex items-center')}>
            {Array.from({ length: slideCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === currentSlide ? 'true' : undefined}
                onClick={() => emblaApi?.scrollTo(i)}
                className={classnames('group px-1.5 py-3')}
              >
                <span className={classnames(
                  'block h-[3px]',
                  'rounded-full',
                  'transition-all duration-300',
                  i === currentSlide ? 'w-8 bg-deep-blue' : 'w-4 bg-deep-blue/60 group-hover:bg-deep-blue/80'
                )} />
              </button>
            ))}
          </div>
          <button
            type="button"
            aria-label="Next slide"
            className={controlButtonClassName}
            onClick={scrollNext}
          >
            <Chevron direction="right" />
          </button>
        </div>
      )}
    </div>
  );
}
