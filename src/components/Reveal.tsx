import { useLayoutEffect, useRef, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms for sequential reveals within a section */
  delay?: number;
}

function isInViewport(el: HTMLElement): boolean {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight;
  if (rect.bottom <= 0 || rect.top >= vh) return false;
  const visibleHeight = Math.min(rect.bottom, vh) - Math.max(rect.top, 0);
  return visibleHeight / Math.max(rect.height, 1) >= 0.08;
}

/**
 * Scroll-reveal wrapper — adds `.tni-reveal.is-visible` when entering viewport.
 * Above-the-fold content is revealed immediately to avoid a flash-then-hide on load.
 */
export function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timeoutId: number | undefined;

    const markVisible = () => {
      el.classList.add('is-visible');
    };

    const scheduleVisible = () => {
      if (delay > 0) {
        timeoutId = window.setTimeout(markVisible, delay);
      } else {
        markVisible();
      }
    };

    if (isInViewport(el)) {
      scheduleVisible();
      return () => {
        if (timeoutId !== undefined) window.clearTimeout(timeoutId);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          scheduleVisible();
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -24px 0px' },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`tni-reveal ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
