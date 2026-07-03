import { useId } from 'react';

type Tone = 'light' | 'dark';

/**
 * Faint topographic brain-map contour pattern for hero backgrounds.
 */

export function TopographicPattern({
  tone = 'light',
  className = '',
  style,
}: {
  tone?: Tone;
  className?: string;
  style?: React.CSSProperties;
}) {
  const uid = useId().replace(/:/g, '');
  const light = tone === 'light';

  return (
    <svg
      className={`tni-topo-pattern ${className}`.trim()}
      viewBox="0 0 800 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', ...style }}
    >
      <defs>
        <radialGradient id={`glow-${uid}`} cx="50%" cy="45%" r="55%">
          {light ? (
            <>
              <stop offset="0%" stopColor="#3a9aad" stopOpacity="0.03" />
              <stop offset="100%" stopColor="#fcfaf7" stopOpacity="0" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="#3a9aad" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#041f3a" stopOpacity="0" />
            </>
          )}
        </radialGradient>
      </defs>
      <rect width="800" height="800" fill={`url(#glow-${uid})`} />
      <g
        className="tni-topo-pattern__contours"
        fill="none"
        stroke={light ? 'rgba(7,53,94,0.04)' : 'rgba(245,237,227,0.07)'}
        strokeWidth="1"
      >
        <ellipse cx="400" cy="380" rx="320" ry="280" />
        <ellipse cx="400" cy="380" rx="260" ry="225" />
        <ellipse cx="400" cy="380" rx="200" ry="172" />
        <ellipse cx="400" cy="380" rx="145" ry="124" />
        <ellipse cx="400" cy="380" rx="95" ry="80" />
        <ellipse cx="400" cy="380" rx="50" ry="42" />
        <ellipse cx="280" cy="340" rx="90" ry="75" transform="rotate(-12 280 340)" />
        <ellipse cx="520" cy="340" rx="90" ry="75" transform="rotate(12 520 340)" />
        <ellipse cx="400" cy="500" rx="110" ry="70" />
      </g>
    </svg>
  );
}
