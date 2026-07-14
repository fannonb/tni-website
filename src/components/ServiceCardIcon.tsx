export type ServiceIconType = 'qeeg' | 'eeg' | 'mapping' | 'ncv' | 'cognitive' | 'neuropsych' | 'concussion' | 'memory' | 'headache' | 'counseling' | 'evaluation' | 'vestibular' | 'neurofeedback' | 'multidisciplinary';

const ICON_PATHS: Record<string, ServiceIconType> = {
  '/qeeg-service': 'qeeg',
  '/eeg': 'eeg',
  '/brain-mapping': 'mapping',
  '/ncv-emg': 'ncv',
  '/neurocognitive-testing': 'cognitive',
  '/neuropsychology': 'neuropsych',
  '/concussion-management': 'concussion',
  '/memory-cognitive-rehab': 'memory',
  '/headache-treatment': 'headache',
  '/counseling': 'counseling',
  '/physician-neurotrauma-evaluation': 'evaluation',
  '/vestibular-balance': 'vestibular',
  '/neurofeedback': 'neurofeedback',
  '/multidisciplinary-rehab': 'multidisciplinary',
};

function ServiceIconGlyph({ type }: { type: ServiceIconType }) {
  const props = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.75,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true as const,
  };

  switch (type) {
    case 'qeeg':
      return (
        <svg {...props}>
          <path d="M4 14c2-4 4-4 6 0s4 4 6 0 4-4 4-4" />
          <circle cx="12" cy="8" r="3" />
          <path d="M9 21h6" />
        </svg>
      );
    case 'eeg':
      return (
        <svg {...props}>
          <path d="M2 12h3l2-6 3 12 3-8 2 4h6" />
        </svg>
      );
    case 'mapping':
      return (
        <svg {...props}>
          <path d="M12 3a6 6 0 0 0-6 6c0 4 6 12 6 12s6-8 6-12a6 6 0 0 0-6-6Z" />
          <circle cx="12" cy="9" r="2" />
        </svg>
      );
    case 'ncv':
      return (
        <svg {...props}>
          <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      );
    case 'cognitive':
      return (
        <svg {...props}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M7 9h6M7 13h10M7 17h8" />
        </svg>
      );
    case 'neuropsych':
      return (
        <svg {...props}>
          <circle cx="12" cy="8" r="4" />
          <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
          <path d="M12 12v2" />
        </svg>
      );
    case 'concussion':
      return (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case 'memory':
      return (
        <svg {...props}>
          <circle cx="6" cy="6" r="2" />
          <circle cx="18" cy="6" r="2" />
          <circle cx="12" cy="18" r="2" />
          <path d="M8 7.5 10.5 16M16 7.5 13.5 16" />
        </svg>
      );
    case 'headache':
      return (
        <svg {...props}>
          <circle cx="12" cy="10" r="5" />
          <path d="M8.5 7.5 6 5M15.5 7.5 18 5M12 5V3" />
          <path d="M8 18c0-2.2 1.8-4 4-4s4 1.8 4 4" />
        </svg>
      );
    case 'counseling':
      return (
        <svg {...props}>
          <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
          <path d="M8 10h8M8 14h5" />
        </svg>
      );
    case 'evaluation':
      return (
        <svg {...props}>
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M9 3V2h6v1" />
          <path d="M8 12h2l1-2 2 4 1-2h2" />
        </svg>
      );
    case 'vestibular':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="2.5" />
          <ellipse cx="12" cy="12" rx="9" ry="4" />
          <ellipse cx="12" cy="12" rx="4" ry="9" />
        </svg>
      );
    case 'neurofeedback':
      return (
        <svg {...props}>
          <path d="M20 12a8 8 0 1 1-2.34-5.66" />
          <path d="M20 4v3.5h-3.5" />
          <path d="M7.5 12h2l1.3-2.6 1.8 5 1.3-2.4h2.1" />
        </svg>
      );
    case 'multidisciplinary':
      return (
        <svg {...props}>
          <circle cx="12" cy="5" r="2" />
          <circle cx="5" cy="18" r="2" />
          <circle cx="19" cy="18" r="2" />
          <path d="M12 7v3M11 10.5 6.2 16M13 10.5 17.8 16" />
        </svg>
      );
  }
}

function resolveIcon(path?: string) {
  if (path && ICON_PATHS[path]) return ICON_PATHS[path];
  return 'mapping';
}

export function ServiceCardIcon({
  path,
  icon,
  className = '',
}: {
  path?: string;
  icon?: ServiceIconType;
  className?: string;
}) {
  const resolved = icon ?? resolveIcon(path);

  return (
    <span className={`tni-svc-icon ${className}`.trim()} aria-hidden>
      <ServiceIconGlyph type={resolved} />
    </span>
  );
}
