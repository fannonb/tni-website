import type { CSSProperties } from 'react';

/**
 * Polished, on-brand stand-in for photography that hasn't been supplied yet.
 * Unlike a dashed box, this reads as an intentional designed panel — swap the
 * whole component for an <img> once real photos arrive.
 */

type Tone = 'sand' | 'navy';
type IconName = 'people' | 'scale' | 'physician' | 'image';

interface PlaceholderProps {
  label: string;
  icon?: IconName;
  tone?: Tone;
  caption?: string;
  style?: CSSProperties;
}

function Icon({ name, color }: { name: IconName; color: string }) {
  const common = { fill: 'none', stroke: color, strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  switch (name) {
    case 'people':
      return (
        <svg width="44" height="44" viewBox="0 0 24 24" {...common}>
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="9" r="2.2" />
          <path d="M4 19c0-3 2.2-5 5-5s5 2 5 5" />
          <path d="M15 19c0-2.4 1.4-4 3.2-4 1.3 0 2.4.8 2.8 2" />
        </svg>
      );
    case 'scale':
      return (
        <svg width="44" height="44" viewBox="0 0 24 24" {...common}>
          <path d="M12 3v18M6 21h12M4 8h16" />
          <path d="M4 8l-2.4 5a3 3 0 0 0 4.8 0z" />
          <path d="M20 8l-2.4 5a3 3 0 0 0 4.8 0z" />
          <circle cx="12" cy="4" r="1.4" />
        </svg>
      );
    case 'physician':
      return (
        <svg width="44" height="44" viewBox="0 0 24 24" {...common}>
          <circle cx="12" cy="7" r="3.4" />
          <path d="M5 21c0-3.6 3.1-6.5 7-6.5s7 2.9 7 6.5" />
          <path d="M12 10.4v3.6" />
          <path d="M9.5 12.5h5" />
        </svg>
      );
    default:
      return (
        <svg width="44" height="44" viewBox="0 0 24 24" {...common}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="8.5" cy="9.5" r="1.6" />
          <path d="M4 17l5-4 4 3 3-2 4 3" />
        </svg>
      );
  }
}

export function Placeholder({ label, icon = 'image', tone = 'sand', caption, style }: PlaceholderProps) {
  const dark = tone === 'navy';
  const bg = dark
    ? 'linear-gradient(150deg, #0a3f6e 0%, #062038 100%)'
    : 'linear-gradient(150deg, #f6ecdd 0%, #ecdfcb 100%)';
  const fg = dark ? 'rgba(243,236,225,0.92)' : 'rgba(7,53,94,0.78)';
  const iconRing = dark ? 'rgba(243,236,225,0.14)' : 'rgba(7,53,94,0.08)';
  const accent = '#e16d22';

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 14,
        textAlign: 'center',
        padding: 28,
        background: bg,
        overflow: 'hidden',
        ...style,
      }}
    >
      {/* subtle brand corner accent */}
      <span
        aria-hidden
        style={{
          position: 'absolute',
          top: -60,
          right: -60,
          width: 160,
          height: 160,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${accent}33 0%, transparent 70%)`,
        }}
      />
      <span
        style={{
          width: 82,
          height: 82,
          borderRadius: '50%',
          background: iconRing,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Icon name={icon} color={accent} />
      </span>
      <div style={{ fontFamily: "'Fraunces', serif", fontSize: 17, lineHeight: 1.35, color: fg, maxWidth: '24ch' }}>{label}</div>
      {caption && (
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: dark ? 'rgba(243,236,225,0.5)' : 'rgba(7,53,94,0.4)' }}>
          {caption}
        </div>
      )}
    </div>
  );
}
