import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo-full.png';
import { NAV_ITEMS, site } from '../data/site';

import { ALL_SERVICES } from '../data/allServices';
import { getServicesGroupedByDomain } from '../data/servicesIndex';

function isActive(to: string, pathname: string): boolean {
  if (to === '/') return pathname === '/';
  if (to === '/services') {
    return pathname === '/services' || ALL_SERVICES.some((s) => s.path === pathname);
  }
  return pathname === to;
}


function NavItemLink({
  item,
  pathname,
  variant,
}: {
  item: (typeof NAV_ITEMS)[number];
  pathname: string;
  variant: 'desktop' | 'drawer';
}) {
  if (item.disabled) {
    if (variant === 'drawer') {
      return (
        <span className="tni-drawer-link tni-drawer-link--disabled" aria-disabled="true" title="Coming soon">
          {item.label}
        </span>
      );
    }
    return (
      <span className="tni-navlink tni-navlink--disabled" aria-disabled="true" title="Coming soon">
        {item.label}
      </span>
    );
  }

  const active = isActive(item.to, pathname);

  if (variant === 'drawer') {
    return (
      <Link to={item.to} className="tni-drawer-link">
        {item.label}
      </Link>
    );
  }

  return (
    <Link
      to={item.to}
      className="tni-navlink"
      style={{
        textDecoration: 'none',
        color: active ? '#07355e' : 'inherit',
        borderBottom: active ? '2px solid var(--tni-accent)' : '2px solid transparent',
        paddingBottom: 3,
      }}
    >
      {item.label}
    </Link>
  );
}

function DesktopServicesDropdown({
  item,
  pathname,
}: {
  item: (typeof NAV_ITEMS)[number];
  pathname: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const groups = getServicesGroupedByDomain();
  const active = pathname === '/services' || ALL_SERVICES.some((s) => s.path === pathname);

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setIsOpen(false);
        }
      }}
      style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}
    >
      <Link
        to="/services"
        className="tni-navlink"
        style={{
          textDecoration: 'none',
          color: active ? '#07355e' : 'inherit',
          borderBottom: active ? '2px solid var(--tni-accent)' : '2px solid transparent',
          paddingBottom: 3,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          cursor: 'pointer',
        }}
      >
        {item.label}
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
          }}
          aria-hidden="true"
        >
          <polyline points="1 1 5 5 9 1" />
        </svg>
      </Link>

      <div
        style={{
          position: 'absolute',
          top: '100%',
          left: '50%',
          transform: isOpen ? 'translate(-50%, 14px)' : 'translate(-50%, 0px)',
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? 'visible' : 'hidden',
          transition: 'opacity 0.2s ease, transform 0.2s ease, visibility 0.2s',
          width: '680px',
          background: '#fcfaf7',
          border: '1px solid rgba(7,53,94,0.08)',
          borderRadius: '12px',
          boxShadow: '0 16px 40px rgba(7,53,94,0.12)',
          padding: '24px 28px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          zIndex: 100,
          textAlign: 'left',
        }}
      >
        {groups.map((group) => (
          <div key={group.domain}>
            <span
              style={{
                display: 'block',
                fontSize: '11px',
                fontWeight: 700,
                color: 'var(--tni-accent)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '12px',
                borderBottom: '1px solid rgba(7,53,94,0.06)',
                paddingBottom: '4px',
              }}
            >
              {group.domain}
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {group.services.map((service) => {
                const subActive = pathname === service.path;
                return (
                  <Link
                    key={service.path}
                    to={service.path}
                    style={{
                      fontSize: '13px',
                      fontWeight: 500,
                      color: subActive ? 'var(--tni-accent)' : '#07355e',
                      textDecoration: 'none',
                      lineHeight: '1.35',
                      transition: 'color 0.15s, padding-left 0.15s',
                    }}
                    className="tni-dropdown-item"
                  >
                    {service.title}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileServicesAccordion({
  item,
  pathname,
}: {
  item: (typeof NAV_ITEMS)[number];
  pathname: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const groups = getServicesGroupedByDomain();
  const active = pathname === '/services' || ALL_SERVICES.some((s) => s.path === pathname);

  return (
    <div style={{ borderBottom: '1px solid rgba(7, 53, 94, 0.08)' }}>
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          padding: '15px 4px',
          fontSize: '17px',
          fontWeight: 500,
          color: active ? '#07355e' : 'var(--tni-navy)',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'inherit',
          textAlign: 'left',
        }}
      >
        <span>{item.label}</span>
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.25s ease',
            color: active ? '#07355e' : 'var(--tni-navy)',
          }}
          aria-hidden="true"
        >
          <polyline points="1 1 6 6 11 1" />
        </svg>
      </button>

      <div
        style={{
          maxHeight: expanded ? '600px' : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div style={{ padding: '4px 8px 16px 16px', display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Link
            to="/services"
            style={{
              fontSize: '15px',
              fontWeight: 600,
              color: 'var(--tni-accent)',
              textDecoration: 'none',
            }}
          >
            All Services Directory →
          </Link>

          {groups.map((group) => (
            <div key={group.domain} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: 'rgba(7,53,94,0.45)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {group.domain}
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingLeft: 8 }}>
                {group.services.map((service) => {
                  const subActive = pathname === service.path;
                  return (
                    <Link
                      key={service.path}
                      to={service.path}
                      style={{
                        fontSize: '14.5px',
                        fontWeight: 500,
                        color: subActive ? 'var(--tni-accent)' : '#07355e',
                        textDecoration: 'none',
                        lineHeight: '1.25',
                      }}
                    >
                      {service.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export function Nav() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(252,250,247,0.9)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(7,53,94,0.08)',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          height: 86,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
        }}
      >
        <Link to="/" aria-label={`${site.brand} — home`} style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <img src={logo} alt={site.brand} style={{ height: 75, width: 'auto', display: 'block' }} />
        </Link>

        {/* Desktop nav */}
        <div className="tni-nav-desktop">
          <div style={{ display: 'flex', alignItems: 'center', gap: 26, fontSize: 14, fontWeight: 500, color: 'rgba(7,53,94,0.82)' }}>
            {NAV_ITEMS.map((item) => {
              if (item.label === 'Services') {
                return <DesktopServicesDropdown key={item.label} item={item} pathname={pathname} />;
              }
              return <NavItemLink key={item.label} item={item} pathname={pathname} variant="desktop" />;
            })}
          </div>
          <Link
            to="/contact"
            className="tni-btn-primary"
            style={{
              background: 'var(--tni-accent)',
              color: '#fff',
              padding: '11px 20px',
              borderRadius: 999,
              textDecoration: 'none',
              fontSize: 14,
              fontWeight: 600,
              whiteSpace: 'nowrap',
            }}
          >
            Request Evaluation
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="tni-nav-mobile-controls">
          <button
            type="button"
            className="tni-nav-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`tni-mobile-panel${open ? ' is-open' : ''}`} style={{ background: '#fcfaf7', borderTop: '1px solid rgba(7,53,94,0.08)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '10px 24px 24px' }}>
          {NAV_ITEMS.map((item) => {
            if (item.label === 'Services') {
              return <MobileServicesAccordion key={item.label} item={item} pathname={pathname} />;
            }
            return <NavItemLink key={item.label} item={item} pathname={pathname} variant="drawer" />;
          })}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 20 }}>
            <Link
              to="/contact"
              className="tni-btn-primary"
              style={{ background: 'var(--tni-accent)', color: '#fff', padding: '14px 20px', borderRadius: 10, textDecoration: 'none', fontSize: 15, fontWeight: 600, textAlign: 'center' }}
            >
              Request Evaluation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
