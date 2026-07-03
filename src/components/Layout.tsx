import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { getRouteMeta } from '../routes';

export function SiteLayout() {
  const location = useLocation();
  const meta = getRouteMeta(location.pathname);

  useEffect(() => {
    document.title = meta.title;
  }, [meta.title]);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#fcfaf7',
        color: '#07355e',
        fontFamily: "'Google Sans', ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <ScrollToTop />
      <Nav />
      <main key={location.pathname}>
        <Outlet />
      </main>
      <Footer showCta={meta.showFooterCta !== false} minimal={meta.minimalFooter === true} />
    </div>
  );
}
