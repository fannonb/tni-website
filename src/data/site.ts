/**
 * Central site configuration — brand strings, contact details, and nav.
 * Contact fields are placeholders until the clinic supplies real values;
 * `tel:` / `mailto:` links are wired so only the value needs updating.
 */

export const site = {
  brand: 'Texas NeuroTrauma Institute',
  tagline: 'Comprehensive Neurotrauma Evaluation, Advanced Neurodiagnostics & Physician-Led Recovery',
  subTagline: 'Objective, evidence-informed neurotrauma care for patients and legal partners across Texas.',
  disclosure: 'Texas NeuroTrauma Institute — A Division of StarMED Clinic — Randdolf Physicians PLLC',
  footerLine:
    'Advancing neurotrauma diagnosis, recovery, and neurological health through physician-led, evidence-informed care.',

  // --- Contact (placeholders — swap for real values) ---
  phoneDisplay: '(726) 242-3011',
  phoneHref: 'tel:+17262423011',
  email: 'info@texasneurotrauma.com',
  emailHref: 'mailto:info@texasneurotrauma.com',
  locations: ['Houston', 'San Antonio'],
  serviceArea: 'Statewide Texas Referrals',
  responsePromise: 'We respond to every inquiry within one business day.',
} as const;

/** True once a real clinic phone replaces the placeholder zeros. */
export function hasRealPhone(): boolean {
  return !(site.phoneDisplay as string).includes('000') && (site.phoneHref as string) !== 'tel:+10000000000';
}

export interface NavItem {
  label: string;
  to: string;
  /** Shown in nav but not clickable until the route exists. */
  disabled?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Conditions', to: '/conditions' },
  { label: 'For Attorneys', to: '/for-attorneys' },
  { label: 'Contact', to: '/contact' },
];
