import type { CSSProperties } from 'react';

interface ImageSlotProps {
  placeholder: string;
  style?: CSSProperties;
}

/**
 * Stand-in for a real photograph that hasn't been supplied yet. Swap for an
 * <img> once photography is available — the surrounding layout (size, radius,
 * shadow) is controlled entirely by the `style` prop passed from the caller.
 */
export function ImageSlot({ placeholder, style }: ImageSlotProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 20,
        fontSize: 13,
        lineHeight: 1.5,
        color: 'rgba(7,53,94,0.45)',
        background:
          'repeating-linear-gradient(135deg, rgba(7,53,94,0.05), rgba(7,53,94,0.05) 10px, rgba(7,53,94,0.02) 10px, rgba(7,53,94,0.02) 20px)',
        border: '1px dashed rgba(7,53,94,0.25)',
        ...style,
      }}
    >
      {placeholder}
    </div>
  );
}
