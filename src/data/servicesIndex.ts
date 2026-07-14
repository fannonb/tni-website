import { ALL_SERVICES, type ServicePageContent } from './allServices';

export const SERVICE_CATEGORIES = ['Diagnostics', 'Assessment', 'Rehabilitation'] as const;
export type ServiceCategory = (typeof SERVICE_CATEGORIES)[number];
export type ServiceFilter = ServiceCategory | 'All';

export const FEATURED_SERVICE_PATH = '/physician-neurotrauma-evaluation';

/** Directory-facing labels; underlying category keys remain Diagnostics / Assessment / Rehabilitation. */
export const DOMAIN_PRESENTATION: Record<
  ServiceCategory,
  { id: string; navLabel: string; clinicalLabel: string; intro: string }
> = {
  Diagnostics: {
    id: 'diagnostics',
    navLabel: 'Diagnostic Testing',
    clinicalLabel: 'Diagnostics',
    intro:
      'Objective neurological testing and brain mapping to identify dysfunction that standard imaging may not reveal.',
  },
  Assessment: {
    id: 'assessment',
    navLabel: 'Cognitive & Functional Assessment',
    clinicalLabel: 'Assessment',
    intro:
      'Structured cognitive and neuropsychological evaluation to measure function and guide individualized care.',
  },
  Rehabilitation: {
    id: 'treatment-recovery',
    navLabel: 'Treatment & Rehabilitation',
    clinicalLabel: 'Rehabilitation',
    intro:
      'Evidence-informed treatment and recovery programs that restore function after brain injury and neurological trauma.',
  },
};

const DISPLAY_TITLES: Record<string, string> = {
  '/qeeg-service': 'qEEG Brain Mapping',
  '/eeg': 'Electroencephalography (EEG)',
  '/neurocognitive-testing': 'Neurocognitive Testing',
  '/neuropsychology': 'Neuropsychology',
  '/memory-cognitive-rehab': 'Memory & Cognitive Rehab',
  '/headache-treatment': 'Headache Treatment',
  '/physician-neurotrauma-evaluation': 'Physician Neurotrauma Evaluation',
  '/vestibular-balance': 'Vestibular & Balance Evaluation',
  '/neurofeedback': 'Neurofeedback Therapy',
  '/multidisciplinary-rehab': 'Multidisciplinary Rehabilitation',
};

/** Concise, differentiated summaries for the /services directory (not marketing taglines). */
const DIRECTORY_SUMMARIES: Record<string, string> = {
  '/qeeg-service':
    'Quantitative EEG that measures and analyzes brainwave patterns to identify functional dysregulation when clinically indicated.',
  '/eeg':
    'Records cerebral electrical activity to investigate seizures, altered consciousness, and related neurological concerns.',
  '/vestibular-balance':
    'Evaluates dizziness, imbalance, and vestibular dysfunction that can follow head injury or concussion.',
  '/physician-neurotrauma-evaluation':
    'Physician-led evaluation that determines which diagnostic testing, cognitive assessment, and recovery services are appropriate.',
  '/neurocognitive-testing':
    'Measures memory, attention, processing speed, and executive function with standardized cognitive testing.',
  '/neuropsychology':
    'Broader assessment of cognitive, behavioral, and emotional functioning to clarify clinical impact and guide care.',
  '/memory-cognitive-rehab':
    'Therapy focused on rebuilding attention, memory, processing speed, and everyday cognitive skills after neurotrauma.',
  '/neurofeedback':
    'Trains self-regulation of brain activity using real-time feedback, individualized with clinical findings and qEEG when appropriate.',
  '/headache-treatment':
    'Evaluation and treatment of post-traumatic headache and migraine syndromes linked to brain injury.',
  '/multidisciplinary-rehab':
    'Coordinated rehabilitation across therapy disciplines—such as physical, vestibular, speech, and occupational therapy—aligned to clinical findings.',
};

const GLOBAL_ORDER = [
  '/physician-neurotrauma-evaluation',
  '/qeeg-service',
  '/eeg',
  '/neurocognitive-testing',
  '/neuropsychology',
  '/vestibular-balance',
  '/memory-cognitive-rehab',
  '/neurofeedback',
  '/headache-treatment',
  '/multidisciplinary-rehab',
] as const;

const DOMAIN_ORDER: Record<ServiceCategory, string[]> = {
  Diagnostics: ['/qeeg-service', '/eeg', '/vestibular-balance'],
  Assessment: ['/physician-neurotrauma-evaluation', '/neurocognitive-testing', '/neuropsychology'],
  Rehabilitation: [
    '/memory-cognitive-rehab',
    '/neurofeedback',
    '/headache-treatment',
    '/multidisciplinary-rehab',
  ],
};

export interface ServiceIndexItem {
  slug: string;
  path: string;
  domain: ServiceCategory;
  title: string;
  summary: string;
  tagline: string;
}

export interface ServiceDomainGroup {
  domain: ServiceCategory;
  id: string;
  navLabel: string;
  clinicalLabel: string;
  intro: string;
  services: ServiceIndexItem[];
}

function buildTitle(service: ServicePageContent): string {
  return DISPLAY_TITLES[service.path] ?? [service.heroTitle, service.heroTitleAccent].filter(Boolean).join(' ');
}

function buildDirectorySummary(service: ServicePageContent): string {
  return DIRECTORY_SUMMARIES[service.path] ?? service.tagline;
}

export function getServiceGlobalIndex(path: string): number {
  const index = GLOBAL_ORDER.indexOf(path as (typeof GLOBAL_ORDER)[number]);
  return index >= 0 ? index + 1 : 0;
}

export function getServiceIndexItems(): ServiceIndexItem[] {
  return GLOBAL_ORDER.map((path) => {
    const service = ALL_SERVICES.find((s) => s.path === path);
    if (!service) return null;
    return {
      slug: service.slug,
      path: service.path,
      domain: service.domain as ServiceCategory,
      title: buildTitle(service),
      summary: buildDirectorySummary(service),
      tagline: service.tagline,
    };
  }).filter((item): item is ServiceIndexItem => Boolean(item));
}

export function getFeaturedServiceIndexItem(): ServiceIndexItem | undefined {
  return getServiceIndexItems().find((item) => item.path === FEATURED_SERVICE_PATH);
}

/** Grouped directory for /services — Physician Evaluation is featured separately. */
export function getServicesGroupedByDomain(): ServiceDomainGroup[] {
  const items = getServiceIndexItems();
  const byPath = new Map(items.map((item) => [item.path, item]));

  return SERVICE_CATEGORIES.map((domain) => {
    const presentation = DOMAIN_PRESENTATION[domain];
    return {
      domain,
      id: presentation.id,
      navLabel: presentation.navLabel,
      clinicalLabel: presentation.clinicalLabel,
      intro: presentation.intro,
      services: DOMAIN_ORDER[domain]
        .filter((path) => path !== FEATURED_SERVICE_PATH)
        .map((path) => byPath.get(path))
        .filter((item): item is ServiceIndexItem => Boolean(item)),
    };
  });
}

export function filterServiceIndexItems(filter: ServiceFilter): ServiceIndexItem[] {
  const items = getServiceIndexItems();
  if (filter === 'All') return items;
  return items.filter((item) => item.domain === filter);
}

export function getServiceCount(): number {
  return getServiceIndexItems().length;
}

export function getDomainIntro(domain: ServiceCategory): string {
  return DOMAIN_PRESENTATION[domain].intro;
}
