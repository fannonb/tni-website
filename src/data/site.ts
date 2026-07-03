/**
 * Central site configuration — brand strings, contact details, and nav.
 * Contact fields are placeholders until the clinic supplies real values;
 * `tel:` / `mailto:` links are wired so only the value needs updating.
 */

export const site = {
  brand: 'Texas NeuroTrauma Institute',
  tagline: 'Advanced Neurotrauma Diagnostics & Functional Restoration',
  subTagline: 'Objective Brain Mapping. Evidence-Based Care. Forensic-Grade Documentation.',
  disclosure: 'Texas NeuroTrauma Institute — A Division of StarMED Clinic — Randdolf Physicians PLLC',
  footerLine: 'Advancing the standard of neurotrauma care in Texas.',

  // --- Contact (placeholders — swap for real values) ---
  phoneDisplay: '(000) 000-0000',
  phoneHref: 'tel:+10000000000',
  email: 'info@texasneurotrauma.com',
  emailHref: 'mailto:info@texasneurotrauma.com',
  locations: ['Houston', 'San Antonio'],
  responsePromise: 'We respond to every inquiry within one business day.',
} as const;

/** True once a real clinic phone replaces the placeholder zeros. */
export function hasRealPhone(): boolean {
  return !site.phoneDisplay.includes('000') && site.phoneHref !== 'tel:+10000000000';
}

export interface NavItem {
  label: string;
  to: string;
  /** Shown in nav but not clickable until the route exists. */
  disabled?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about', disabled: true },
  { label: 'Services', to: '/services' },
  { label: 'Conditions', to: '/conditions' },
  { label: 'For Attorneys', to: '/for-attorneys' },
  { label: 'Contact', to: '/contact' },
];
