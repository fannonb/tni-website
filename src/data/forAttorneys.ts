export interface WorkingSection {
  title: string;
  body: string;
}

export interface ProvisionGroup {
  title: string;
  items: string[];
}

export interface EngagementStandard {
  title: string;
  body: string;
}

export const referralIndicators: string[] = [
  'Persistent neurological symptoms despite normal or inconclusive structural imaging',
  'Suspected concussion or traumatic brain injury after a motor vehicle collision, fall, or workplace incident',
  'Cognitive, vestibular, headache, visual, or functional complaints following trauma',
  'Need for physician-directed evaluation and objective neurodiagnostic testing when clinically indicated',
  'Complex neurological presentations requiring coordinated assessment and future-care recommendations',
  'Cases requiring clear documentation of clinical findings, functional impact, and treatment needs',
];

export const workingLead =
  'From the initial case inquiry through reporting, each stage is defined so counsel understands scope, timing, and next steps.';

export const provisionsLead =
  'Physician-led evaluation and structured clinical work product designed to communicate findings, functional impact, and recommendations clearly.';

// Grouped into the natural stages of a referral: what we evaluate, what we
// produce, and how we support counsel beyond the initial report.
export const provisionGroups: ProvisionGroup[] = [
  {
    title: 'Evaluation & Testing',
    items: [
      'Independent physician evaluation',
      'Comprehensive medical records review',
      'Objective neurodiagnostic testing',
      'Functional impairment assessment',
    ],
  },
  {
    title: 'Reporting & Documentation',
    items: [
      'Narrative medical reports',
      'Future treatment recommendations',
      'Causation analysis (when appropriate)',
      'Letters of medical necessity',
    ],
  },
  {
    title: 'Legal Support Services',
    items: [
      'Life-care planning collaboration',
      'Deposition & expert witness services (retained separately)',
      'Physician consultation',
    ],
  },
];

export const workingSections: WorkingSection[] = [
  {
    title: 'Initial Case Inquiry',
    body: 'Counsel contacts our team with a concise case overview, injury history, and the clinical question requiring evaluation.',
  },
  {
    title: 'Scope Review',
    body: 'Our clinical team reviews the requested services, confirms whether the matter fits our scope, and identifies appropriate next steps.',
  },
  {
    title: 'Retention & Records',
    body: 'Engagement scope, fees, and records requirements are confirmed in writing before formal review or forensic services begin.',
  },
  {
    title: 'Evaluation & Testing',
    body: 'The patient receives a physician-directed TBI evaluation with records review and objective testing when clinically indicated.',
  },
  {
    title: 'Reporting & Consultation',
    body: 'Findings are communicated through the agreed report format, with physician consultation available within the retained scope.',
  },
];

export const reportLead =
  'Reporting scope is determined after case review and retention. When indicated, reports organize the relevant clinical record, examination findings, diagnostic data, functional impact, and recommendations in a clear sequence.';

export const engagementStandards: EngagementStandard[] = [
  {
    title: 'Clinical Objectivity',
    body: 'Opinions and recommendations are based on the available history, examination, records, and diagnostic findings.',
  },
  {
    title: 'Separate Professional Engagements',
    body: 'Clinical treatment and forensic expert services are maintained as separate professional engagements to preserve objectivity and compliance with applicable legal and ethical standards.',
  },
  {
    title: 'Defined Scope & Fees',
    body: 'Retention scope, report type, records requirements, and applicable fees are confirmed in writing before forensic reporting or testimony.',
  },
];

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
