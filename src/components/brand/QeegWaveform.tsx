import { useId } from 'react';

/**
 * Animated qEEG-style waveform lines — the signature brand motif.
 * Pure SVG + CSS; honors prefers-reduced-motion via global.css.
 */

interface QeegWaveformProps {
  /** 'hero' = full-width ambient layer; 'connector' = thin horizontal link */
  variant?: 'hero' | 'connector';
  className?: string;
  style?: React.CSSProperties;
}

const WAVES = [
  { d: 'M0 24 C40 8 80 40 120 24 S200 8 240 24 S320 40 360 24 S440 8 480 24 S560 40 600 24 S680 8 720 24 S800 40 840 24 S920 8 960 24 S1040 40 1080 24 S1160 8 1200 24', color: 'var(--tni-accent)', opacity: 0.35, delay: '0s' },
  { d: 'M0 32 C50 48 100 16 150 32 S250 48 300 32 S400 16 450 32 S550 48 600 32 S700 16 750 32 S850 48 900 32 S1000 16 1050 32 S1150 48 1200 32', color: 'var(--tni-teal)', opacity: 0.28, delay: '-4s' },
  { d: 'M0 16 C35 32 70 0 105 16 S175 32 210 16 S280 0 315 16 S385 32 420 16 S490 0 525 16 S595 32 630 16 S700 0 735 16 S805 32 840 16 S910 0 945 16 S1015 32 1050 16 S1120 0 1155 16 S1200 32 1200 16', color: 'var(--tni-accent)', opacity: 0.18, delay: '-8s' },
  { d: 'M0 40 C60 24 120 56 180 40 S300 24 360 40 S480 56 540 40 S660 24 720 40 S840 56 900 40 S1020 24 1080 40 S1140 56 1200 40', color: 'var(--tni-teal)', opacity: 0.15, delay: '-12s' },
];

export function QeegWaveform({ variant = 'hero', className = '', style }: QeegWaveformProps) {
  const uid = useId().replace(/:/g, '');
  const height = variant === 'connector' ? 48 : 120;

  return (
    <svg
      className={`tni-qeeg-waveform tni-qeeg-waveform--${variant} ${className}`.trim()}
      viewBox={`0 0 1200 ${height}`}
      preserveAspectRatio="none"
      aria-hidden
      style={{ width: '100%', height: variant === 'hero' ? '100%' : height, display: 'block', ...style }}
    >
      <defs>
        <linearGradient id={`fade-${uid}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="white" stopOpacity="0" />
          <stop offset="0.08" stopColor="white" stopOpacity="1" />
          <stop offset="0.92" stopColor="white" stopOpacity="1" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <mask id={`mask-${uid}`}>
          <rect width="1200" height={height} fill={`url(#fade-${uid})`} />
        </mask>
      </defs>
      <g mask={`url(#mask-${uid})`}>
        {WAVES.map((wave, i) => (
          <path
            key={i}
            className="tni-qeeg-waveform__line"
            d={wave.d}
            fill="none"
            stroke={wave.color}
            strokeWidth={variant === 'connector' ? 1.5 : 2}
            strokeLinecap="round"
            opacity={wave.opacity}
            style={{ animationDelay: wave.delay }}
          />
        ))}
      </g>
    </svg>
  );
}
