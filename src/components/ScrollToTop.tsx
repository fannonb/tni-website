import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Reset scroll on route changes; smooth-scroll to hash targets after the new page renders. */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const scrollToTarget = () => {
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
      // Wait for the outlet page to paint before scrolling to in-page anchors.
      requestAnimationFrame(scrollToTarget);
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
