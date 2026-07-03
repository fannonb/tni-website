import type { CSSProperties, ReactNode } from 'react';
import { Link } from 'react-router-dom';

export const MAXW = 1200;

/** Centered content column with consistent gutters. */
export function Container({ children, width = MAXW, style }: { children: ReactNode; width?: number; style?: CSSProperties }) {
  return <div style={{ maxWidth: width, margin: '0 auto', padding: '0 24px', ...style }}>{children}</div>;
}

/** Small uppercase copper label used above section headings. */
export function Eyebrow({ children, color = 'var(--tni-accent)', style }: { children: ReactNode; color?: string; style?: CSSProperties }) {
  return (
    <div
      style={{
        fontSize: 12.5,
        fontWeight: 700,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/** Fraunces display heading (defaults to h2). */
export function SectionHeading({
  children,
  as: Tag = 'h2',
  size = 38,
  color = '#07355e',
  style,
}: {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3';
  size?: number;
  color?: string;
  style?: CSSProperties;
}) {
  return (
    <Tag
      style={{
        fontFamily: "'Fraunces', serif",
        fontWeight: 500,
        fontSize: size,
        lineHeight: 1.14,
        letterSpacing: '-0.01em',
        textWrap: 'balance',
        color,
        margin: 0,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

/** Centered eyebrow + heading + optional lead, for section intros. */
export function SectionIntro({
  eyebrow,
  heading,
  lead,
  align = 'center',
  headingSize = 38,
  color = '#07355e',
  leadColor = 'rgba(7,53,94,0.7)',
  maxWidth = 660,
}: {
  eyebrow?: string;
  heading: ReactNode;
  lead?: ReactNode;
  align?: 'center' | 'left';
  headingSize?: number;
  color?: string;
  leadColor?: string;
  maxWidth?: number;
}) {
  return (
    <div
      style={{
        textAlign: align,
        maxWidth,
        margin: align === 'center' ? '0 auto' : undefined,
        marginBottom: 48,
      }}
    >
      {eyebrow && <Eyebrow style={{ marginBottom: 14 }}>{eyebrow}</Eyebrow>}
      <SectionHeading size={headingSize} color={color}>
        {heading}
      </SectionHeading>
      {lead && (
        <p style={{ fontSize: 16.5, color: leadColor, lineHeight: 1.65, margin: '16px 0 0' }}>{lead}</p>
      )}
    </div>
  );
}

type ButtonVariant = 'primary' | 'navy' | 'ghost' | 'ghostDark';
type ButtonSize = 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  full?: boolean;
  style?: CSSProperties;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

const VARIANT_CLASS: Record<ButtonVariant, string> = {
  primary: 'tni-btn-primary',
  navy: 'tni-btn-navy',
  ghost: 'tni-btn-ghost',
  ghostDark: 'tni-btn-ghost-dark',
};

function variantStyle(variant: ButtonVariant): CSSProperties {
  switch (variant) {
    case 'primary':
      return { background: 'var(--tni-accent)', color: '#fff', boxShadow: '0 10px 26px rgba(225,109,34,0.30)' };
    case 'navy':
      return { background: '#07355e', color: '#f5ede3' };
    case 'ghost':
      return { background: 'transparent', color: '#07355e', border: '1.5px solid rgba(7,53,94,0.22)' };
    case 'ghostDark':
      return { background: 'rgba(245,237,227,0.06)', color: '#f5ede3', border: '1.5px solid rgba(245,237,227,0.28)' };
  }
}

export function Button({ children, to, href, variant = 'primary', size = 'md', full, style, onClick, type = 'button' }: ButtonProps) {
  const pad = size === 'lg' ? '16px 32px' : '13px 24px';
  const fontSize = size === 'lg' ? 15.5 : 14.5;
  const base: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: pad,
    borderRadius: 10,
    textDecoration: 'none',
    fontSize,
    fontWeight: 600,
    fontFamily: 'inherit',
    cursor: 'pointer',
    width: full ? '100%' : undefined,
    ...variantStyle(variant),
    ...style,
  };
  const cls = VARIANT_CLASS[variant];

  if (to) return <Link to={to} className={cls} style={base}>{children}</Link>;
  if (href) return <a href={href} className={cls} style={base}>{children}</a>;
  return <button type={type} onClick={onClick} className={cls} style={{ ...base, border: base.border ?? 'none' }}>{children}</button>;
}
