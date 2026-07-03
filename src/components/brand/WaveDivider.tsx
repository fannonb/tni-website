/**
 * Soft cream wave divider — transitions dark hero into light page sections.
 */

export function WaveDivider({
  fill = 'var(--tni-cream)',
  background,
  className = '',
}: {
  fill?: string;
  background?: string;
  className?: string;
}) {
  return (
    <div
      className={`tni-wave-divider ${className}`.trim()}
      aria-hidden
      style={background ? { background } : undefined}
    >
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path
          d="M0 40 C360 80 720 0 1080 40 C1260 60 1380 50 1440 40 L1440 80 L0 80 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
