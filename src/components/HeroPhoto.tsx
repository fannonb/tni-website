import type { CSSProperties, ReactNode } from 'react';

interface HeroPhotoProps {
  src?: string;
  alt: string;
  tone?: 'light' | 'dark';
  aspectRatio?: CSSProperties['aspectRatio'];
  className?: string;
  overlay?: boolean;
  children?: ReactNode;
}

export function HeroPhoto({
  src,
  alt,
  tone = 'light',
  aspectRatio = '4 / 3',
  className = '',
  overlay = false,
  children,
}: HeroPhotoProps) {
  const classes = ['tni-hero-photo', `tni-hero-photo--${tone}`, className].filter(Boolean).join(' ');

  if (!src && children) {
    return (
      <div className={`${classes} tni-hero-photo--placeholder`} style={{ aspectRatio }}>
        {children}
      </div>
    );
  }

  return (
    <div className={classes} style={{ aspectRatio }}>
      {src && <img src={src} alt={alt} className="tni-hero-photo__img" />}
      {overlay && <div className="tni-hero-photo__overlay" aria-hidden />}
    </div>
  );
}
