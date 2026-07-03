const OFFERING_MARKER_COLORS = ['#e16d22', '#07355e', '#2e6b9e', '#8c3b0c', '#e16d22', '#07355e'] as const;

function MarkerIcon({ type }: { type: 'eval' | 'cognitive' | 'plan' | 'symptom' | 'return' | 'monitor' | 'expert' | 'evidence' | 'team' | 'personal' | 'continuity' }) {
  const props = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.75, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true as const };

  switch (type) {
    case 'eval':
      return (
        <svg {...props}>
          <path d="M4.5 16.5c-1.5 0-2.5-1-2.5-2.5v-3c0-1.5 1-2.5 2.5-2.5h3c1.5 0 2.5 1 2.5 2.5v3c0 1.5-1 2.5-2.5 2.5h-3Z" />
          <path d="M10 12h4" />
          <path d="M12 12v6c0 2 2 3 4 3s3-1 3-3" />
        </svg>
      );
    case 'cognitive':
      return (
        <svg {...props}>
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M6 10h3l1.5-3 2 6 1.5-4 1 2h3" />
        </svg>
      );
    case 'plan':
      return (
        <svg {...props}>
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" />
          <path d="M9 10h6M9 14h6M9 18h4" />
        </svg>
      );
    case 'symptom':
      return (
        <svg {...props}>
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      );
    case 'return':
      return (
        <svg {...props}>
          <path d="M3 12a9 9 0 1 0 3-6.7" />
          <path d="M3 4v5h5" />
        </svg>
      );
    case 'monitor':
      return (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        </svg>
      );
    case 'expert':
      return (
        <svg {...props}>
          <circle cx="12" cy="8" r="4" />
          <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
        </svg>
      );
    case 'evidence':
      return (
        <svg {...props}>
          <path d="M12 3 4 7v6c0 4.4 3.6 8 8 8s8-3.6 8-8V7l-8-4Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case 'team':
      return (
        <svg {...props}>
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M14 20c0-2.2 1.8-4 4-4" />
        </svg>
      );
    case 'personal':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3" />
        </svg>
      );
    case 'continuity':
      return (
        <svg {...props}>
          <path d="M17 2l4 4-4 4" />
          <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
          <path d="M7 22l-4-4 4-4" />
          <path d="M21 13v1a4 4 0 0 1-4 4H3" />
        </svg>
      );
  }
}

const OFFERING_MARKER_TYPES = ['eval', 'cognitive', 'plan', 'symptom', 'return', 'monitor'] as const;
const WHY_MARKER_TYPES = ['expert', 'evidence', 'team', 'personal', 'continuity'] as const;

export function OfferingPathwayMarker({ index }: { index: number }) {
  const color = OFFERING_MARKER_COLORS[index % OFFERING_MARKER_COLORS.length];
  const type = OFFERING_MARKER_TYPES[index % OFFERING_MARKER_TYPES.length];

  return (
    <span
      className="tni-service-offering-card__marker"
      style={{ '--marker-color': color, '--marker-bg': `${color}14` } as React.CSSProperties}
      aria-hidden
    >
      <MarkerIcon type={type} />
    </span>
  );
}

export function WhyChoosePathwayMarker({ index }: { index: number }) {
  const type = WHY_MARKER_TYPES[index % WHY_MARKER_TYPES.length];

  return (
    <span className="tni-why-feature__icon" aria-hidden>
      <MarkerIcon type={type} />
    </span>
  );
}

export function ServiceOfferingMarkers({ index }: { index: number }) {
  return <OfferingPathwayMarker index={index} />;
}

export function ServiceWhyChooseMarkers({ index }: { index: number }) {
  return <WhyChoosePathwayMarker index={index} />;
}
