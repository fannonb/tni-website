import { ALL_SERVICES, type ServicePageContent } from './allServices';

export const SERVICE_CATEGORIES = ['Diagnostics', 'Assessment', 'Rehabilitation'] as const;
export type ServiceCategory = (typeof SERVICE_CATEGORIES)[number];
export type ServiceFilter = ServiceCategory | 'All';

const DISPLAY_TITLES: Record<string, string> = {
  '/qeeg-service': 'qEEG Brain Mapping',
  '/eeg': 'Electroencephalography (EEG)',
  '/brain-mapping': 'Brain Mapping',
  '/ncv-emg': 'Nerve Conduction & EMG',
  '/neurocognitive-testing': 'Neurocognitive Testing',
  '/neuropsychology': 'Neuropsychology',
  '/concussion-management': 'Concussion Management',
  '/memory-cognitive-rehab': 'Memory & Cognitive Rehab',
  '/headache-treatment': 'Headache Treatment',
  '/counseling': 'Counseling',
};

const GLOBAL_ORDER = [
  '/qeeg-service',
  '/eeg',
  '/brain-mapping',
  '/ncv-emg',
  '/neurocognitive-testing',
  '/neuropsychology',
  '/concussion-management',
  '/memory-cognitive-rehab',
  '/headache-treatment',
  '/counseling',
] as const;

const DOMAIN_ORDER: Record<ServiceCategory, string[]> = {
  Diagnostics: ['/qeeg-service', '/eeg', '/brain-mapping', '/ncv-emg'],
  Assessment: ['/neurocognitive-testing', '/neuropsychology'],
  Rehabilitation: ['/concussion-management', '/memory-cognitive-rehab', '/headache-treatment', '/counseling'],
};

const DOMAIN_INTROS: Record<ServiceCategory, string> = {
  Diagnostics:
    'Objective neurological testing and brain mapping to identify dysfunction that standard imaging may not reveal.',
  Assessment:
    'Structured cognitive and neuropsychological evaluation to measure function and guide individualized care.',
  Rehabilitation:
    'Evidence-based treatment and recovery programs that restore function after brain injury and neurological trauma.',
};

export interface ServiceIndexItem {
  slug: string;
  path: string;
  domain: ServiceCategory;
  title: string;
  summary: string;
  tagline: string;
}

function buildTitle(service: ServicePageContent): string {
  return DISPLAY_TITLES[service.path] ?? [service.heroTitle, service.heroTitleAccent].filter(Boolean).join(' ');
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
      summary: service.tagline,
      tagline: service.tagline,
    };
  }).filter((item): item is ServiceIndexItem => Boolean(item));
}

export function getServicesGroupedByDomain(): { domain: ServiceCategory; intro: string; services: ServiceIndexItem[] }[] {
  const items = getServiceIndexItems();
  const byPath = new Map(items.map((item) => [item.path, item]));

  return SERVICE_CATEGORIES.map((domain) => ({
    domain,
    intro: DOMAIN_INTROS[domain],
    services: DOMAIN_ORDER[domain]
      .map((path) => byPath.get(path))
      .filter((item): item is ServiceIndexItem => Boolean(item)),
  }));
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
  return DOMAIN_INTROS[domain];
}
