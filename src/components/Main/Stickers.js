import React from 'react';

const outline = 'var(--color-deep-blue)';

export const Sparkle = ({ className, fill = 'var(--color-pop-sky)' }) => (
  <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
    <path
      d="M50 4 C55 34 66 45 96 50 C66 55 55 66 50 96 C45 66 34 55 4 50 C34 45 45 34 50 4 Z"
      fill={fill}
      stroke={outline}
      strokeWidth="5"
      strokeLinejoin="round"
    />
  </svg>
);

export const Bubbles = ({ className, fill = 'var(--color-pop-aqua)' }) => (
  <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
    <circle cx="38" cy="58" r="28" fill={fill} stroke={outline} strokeWidth="5" />
    <circle cx="74" cy="30" r="16" fill={fill} stroke={outline} strokeWidth="5" />
    <circle cx="80" cy="74" r="9" fill={fill} stroke={outline} strokeWidth="5" />
    <path d="M24 50 A16 16 0 0 1 36 40" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
    <path d="M67 26 A8 8 0 0 1 73 22" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

export const Drop = ({ className, fill = 'var(--color-pop-periwinkle)' }) => (
  <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
    <path
      d="M50 6 C50 6 18 46 18 64 A32 32 0 0 0 82 64 C82 46 50 6 50 6 Z"
      fill={fill}
      stroke={outline}
      strokeWidth="5"
      strokeLinejoin="round"
    />
    <path d="M34 64 A16 16 0 0 0 44 80" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
  </svg>
);

export const Sun = ({ className, fill = 'var(--color-pop-sky)' }) => (
  <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
      <line
        key={angle}
        x1="50"
        y1="6"
        x2="50"
        y2="20"
        stroke={outline}
        strokeWidth="5"
        strokeLinecap="round"
        transform={`rotate(${angle} 50 50)`}
      />
    ))}
    <circle cx="50" cy="50" r="22" fill={fill} stroke={outline} strokeWidth="5" />
  </svg>
);

export const Wave = ({ className, stroke = 'var(--color-pop-sky)' }) => (
  <svg viewBox="0 0 128 40" className={className} aria-hidden="true">
    <path
      d="M4 20 Q 19 4 34 20 T 64 20 T 94 20 T 124 20"
      fill="none"
      stroke={stroke}
      strokeWidth="7"
      strokeLinecap="round"
    />
  </svg>
);

const hoverBubbles = [
  { left: '12%', size: 'w-2 h-2', delay: '0s' },
  { left: '30%', size: 'w-3 h-3', delay: '0.35s' },
  { left: '50%', size: 'w-1.5 h-1.5', delay: '0.7s' },
  { left: '68%', size: 'w-2.5 h-2.5', delay: '0.15s' },
  { left: '86%', size: 'w-2 h-2', delay: '0.5s' }
];

// Bubbles that float up out of a button on hover; the button needs `group relative`
export const HoverBubbles = () => (
  <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0">
    {hoverBubbles.map(({ left, size, delay }) => (
      <span
        key={left}
        className={`absolute top-0 rounded-full border-2 border-deep-blue bg-pop-aqua opacity-0 motion-safe:group-hover:animate-bubble motion-safe:group-focus-visible:animate-bubble ${size}`}
        style={{ left, animationDelay: delay }}
      />
    ))}
  </span>
);
