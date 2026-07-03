import { ALL_SERVICES } from './data/allServices';

export interface RouteMeta {
  path: string;
  title: string;
  showFooterCta?: boolean;
  minimalFooter?: boolean;
}

const STATIC_ROUTES: RouteMeta[] = [
  { path: '/', title: 'Texas NeuroTrauma Institute — Home' },
  { path: '/conditions', title: 'Conditions We Treat — Texas NeuroTrauma Institute' },
  { path: '/services', title: 'Our Services — Texas NeuroTrauma Institute' },
  { path: '/for-attorneys', title: 'For Attorneys — Texas NeuroTrauma Institute' },
  { path: '/contact', title: 'Contact — Texas NeuroTrauma Institute', showFooterCta: false, minimalFooter: true },
];

export const ROUTES: RouteMeta[] = [
  ...STATIC_ROUTES.slice(0, 3),
  ...ALL_SERVICES.map((s) => ({ path: s.path, title: s.pageTitle })),
  ...STATIC_ROUTES.slice(3),
];

export function getRouteMeta(pathname: string): RouteMeta {
  return ROUTES.find((route) => route.path === pathname) ?? ROUTES[0];
}
