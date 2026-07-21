import type { ServiceIconType } from '../components/ServiceCardIcon';

export type ServiceDomain = 'Diagnostics' | 'Assessment' | 'Rehabilitation';

export interface Service {
  title: string;
  body: string;
  hasLink: boolean;
  path?: string;
  icon: ServiceIconType;
  domain: ServiceDomain;
}

export type JourneyIcon = 'reach' | 'diagnostics' | 'findings' | 'recovery';

export interface JourneyStep {
  step: number;
  icon: JourneyIcon;
  label: string;
  copy: string;
}

export const SERVICE_DOMAIN_ORDER: ServiceDomain[] = ['Diagnostics', 'Assessment', 'Rehabilitation'];

export const SERVICE_DOMAIN_INTROS: Record<ServiceDomain, string> = {
  Diagnostics:
    'Objective neurological testing and brain mapping to identify dysfunction that standard imaging may not reveal.',
  Assessment:
    'Structured physician and cognitive evaluation to measure function and guide individualized care.',
  Rehabilitation:
    'Evidence-informed treatment and recovery programs that restore function after brain injury and neurological trauma.',
};

export const SERVICE_ARC =
  'We diagnose objectively, assess function, and rehabilitate — one coherent care journey.';

// Owner-specified institute service menu for the homepage.
// Items with detail pages link out; others remain descriptive until pages are built.
export const services: Service[] = [
  {
    title: 'Quantitative EEG (qEEG) Brain Mapping',
    body: 'Computerized analysis of brain electrical activity to identify functional dysregulation that may complement clinical assessment in selected patients.',
    hasLink: true,
    path: '/qeeg-service',
    icon: 'qeeg',
    domain: 'Diagnostics',
  },
  {
    title: 'Electroencephalography (EEG)',
    body: 'Clinical EEG used to evaluate seizure disorders and abnormalities of cerebral electrical activity.',
    hasLink: true,
    path: '/eeg',
    icon: 'eeg',
    domain: 'Diagnostics',
  },
  {
    title: 'Vestibular & Balance Evaluation',
    body: 'Assessment of dizziness, imbalance, visual motion sensitivity, and vestibular dysfunction following head injury.',
    hasLink: true,
    path: '/vestibular-balance',
    icon: 'vestibular',
    domain: 'Diagnostics',
  },
  {
    title: 'Physician Neurotrauma Evaluation',
    body: 'Comprehensive physician-led evaluation integrating history, neurological examination, symptom analysis, mechanism of injury, imaging review, and individualized treatment recommendations.',
    hasLink: true,
    path: '/physician-neurotrauma-evaluation',
    icon: 'evaluation',
    domain: 'Assessment',
  },
  {
    title: 'Neurocognitive Assessment',
    body: 'Objective testing of attention, processing speed, executive function, reaction time, working memory, learning, and cognitive efficiency.',
    hasLink: true,
    path: '/neurocognitive-testing',
    icon: 'cognitive',
    domain: 'Assessment',
  },
  {
    title: 'Neuropsychological Evaluation',
    body: 'Comprehensive assessment of cognitive, behavioral, and emotional functioning when clinically indicated.',
    hasLink: true,
    path: '/neuropsychology',
    icon: 'neuropsych',
    domain: 'Assessment',
  },
  {
    title: 'Cognitive Rehabilitation',
    body: 'Individualized therapy focused on restoring attention, memory, executive functioning, and processing speed.',
    hasLink: true,
    path: '/memory-cognitive-rehab',
    icon: 'memory',
    domain: 'Rehabilitation',
  },
  {
    title: 'Neurofeedback Therapy',
    body: 'Evidence-informed neurofeedback protocols individualized using clinical findings and qEEG when appropriate.',
    hasLink: true,
    path: '/neurofeedback',
    icon: 'neurofeedback',
    domain: 'Rehabilitation',
  },
  {
    title: 'Headache & Migraine Management',
    body: 'Evaluation and treatment of persistent post-traumatic headaches and migraine syndromes.',
    hasLink: true,
    path: '/headache-treatment',
    icon: 'headache',
    domain: 'Rehabilitation',
  },
  {
    title: 'Multidisciplinary Rehabilitation',
    body: 'Coordination with physical therapy, vestibular therapy, speech therapy, occupational therapy, behavioral health, pain management, and specialty providers.',
    hasLink: true,
    path: '/multidisciplinary-rehab',
    icon: 'multidisciplinary',
    domain: 'Rehabilitation',
  },
];

export const FEATURED_SERVICE_TITLE = 'Physician Neurotrauma Evaluation';

export function getFeaturedPhysicianService(): Service | undefined {
  return services.find((service) => service.title === FEATURED_SERVICE_TITLE);
}

export function getHomeServicesGrouped() {
  return SERVICE_DOMAIN_ORDER.map((domain) => ({
    domain,
    intro: SERVICE_DOMAIN_INTROS[domain],
    services: services.filter(
      (service) => service.domain === domain && service.title !== FEATURED_SERVICE_TITLE,
    ),
  }));
}

// Every evaluation integrates — owner-specified components of a physician-led workup.
export const evaluationIntegrates: string[] = [
  'Comprehensive physician assessment',
  'Detailed neurological examination',
  'Mechanism of injury analysis',
  'Objective neurodiagnostic testing',
  'Cognitive assessment',
  'Individualized recovery planning',
  'Clear medical documentation',
];

// Compact trust strip — supported differentiators for the homepage credibility section.
export const trustPoints: string[] = [
  'Physician-led evaluations',
  'Objective medical documentation',
  'Integrated multidisciplinary care',
  'Individualized treatment plans',
  'Statewide Texas referrals',
];

// Representative homepage subset; full list lives in conditions.ts for /conditions.
export const homepageConditions: string[] = [
  'Traumatic Brain Injury (TBI)',
  'Concussion',
  'Persistent Post-Concussion Symptoms',
  'Motor Vehicle Collision Injuries',
  'Sports-Related Concussion',
  'Brain Fog',
  'Chronic Headaches',
  'Dizziness',
  'Memory Impairment',
  'Mood Changes After Brain Injury',
  'Neurocognitive Dysfunction',
];

export const whyTniProof = {
  narrative: [
    'Traumatic brain injury is frequently misunderstood because conventional CT and MRI imaging often appears normal despite persistent neurological dysfunction. Our institute combines physician expertise with advanced functional neurodiagnostic testing to identify objective abnormalities.',
    'We correlate those findings with the clinical picture and develop individualized treatment strategies focused on recovery, function, and quality of life.',
  ],
  objectiveHeading: 'Structural imaging shows anatomy. We evaluate function.',
  objectiveCopy: [
    'Many patients experience persistent neurological symptoms despite normal CT or MRI findings. Structural imaging evaluates anatomy, whereas functional neurodiagnostic testing may provide additional information regarding brain function when interpreted alongside the patient\'s history, neurological examination, imaging studies, and other clinical findings.',
    'Our evaluations integrate multiple data sources to provide a comprehensive understanding of each patient\'s condition.',
  ],
} as const;

// Your Recovery Pathway — the four-step patient journey.
export const journey: JourneyStep[] = [
  { step: 1, icon: 'reach', label: 'Initial Consultation', copy: 'Comprehensive physician evaluation and review of your injury history.' },
  { step: 2, icon: 'diagnostics', label: 'Objective Assessment', copy: 'Neurological examination and advanced diagnostic testing when indicated.' },
  { step: 3, icon: 'findings', label: 'Integrated Interpretation', copy: 'Clinical findings correlated with diagnostic results to establish individualized recommendations.' },
  { step: 4, icon: 'recovery', label: 'Treatment & Recovery', copy: 'A personalized rehabilitation plan with ongoing reassessment and progress monitoring.' },
];

// Attorney referral pathway — compact counterpart to the patient journey.
export const attorneyJourney: JourneyStep[] = [
  { step: 1, icon: 'reach', label: 'Case Referral', copy: 'Submit case information by phone or secure portal; our team confirms scope and scheduling.' },
  { step: 2, icon: 'diagnostics', label: 'Objective Evaluation', copy: 'Independent physician evaluation with neurodiagnostic testing when clinically indicated.' },
  { step: 3, icon: 'findings', label: 'Structured Documentation', copy: 'Narrative medical reports, functional findings, and clear recommendations for counsel.' },
  { step: 4, icon: 'recovery', label: 'Ongoing Legal Support', copy: 'Physician consultation, letters of medical necessity, and expert services when retained separately.' },
];
