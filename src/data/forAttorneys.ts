export interface WorkingSection {
  title: string;
  body: string;
}

export const workingLead =
  'From first referral through formal retention, each step is defined upfront so counsel knows exactly what to expect.';

export const provisionsLead =
  'Objective clinical work product for counsel — structured, transparent, and built for cases where neurological injury is in dispute.';

export const provisions: string[] = [
  'Structured causation analysis',
  'Functional impairment documentation',
  'Treatment rationale supported by medical literature',
  'Clearly separated clinical vs. forensic billing',
  'Expert medical reporting (when retained)',
];

export const workingSections: WorkingSection[] = [
  { title: 'Referral Process', body: 'Attorneys submit case information through the secure portal or by phone; our clinical team confirms scope and scheduling.' },
  { title: 'Clinical vs. Forensic Distinction', body: 'Clinical care and forensic documentation are billed and administered separately, with clear scope defined at intake.' },
  { title: 'Report Types Offered', body: 'Structured neurotrauma reports are available at varying levels of depth depending on case needs and retention scope.' },
  { title: 'Fee Structure', body: 'Fee information is provided by request. Pricing is not published; submit a request for a scope-specific quote.' },
  { title: 'Retention Process', body: 'Formal retention is confirmed in writing prior to any forensic reporting or expert testimony engagement.' },
];

export const reportLead =
  'Our structured report format presents each section in a clear, attorney-ready sequence — from intake materials through causation analysis and a statement of independence.';

export const reportSections: string[] = [
  'Purpose',
  'Materials Reviewed',
  'History of Present Illness',
  'Neurological Exam Findings',
  'Diagnostic Testing',
  'Diagnostic Impression',
  'Causation Analysis',
  'Functional Impairment Assessment',
  'Treatment Recommendations',
  'Statement of Independence',
];
