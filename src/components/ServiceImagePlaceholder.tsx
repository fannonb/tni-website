import { HeroPhoto } from './HeroPhoto';

interface ServiceImagePlaceholderProps {
  label: string;
}

export function ServiceImagePlaceholder({ label }: ServiceImagePlaceholderProps) {
  return (
    <HeroPhoto alt="" tone="light">
      <div className="tni-service-placeholder__inner">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(7,53,94,0.35)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <circle cx="8.5" cy="8.5" r="1.75" />
          <path d="m21 15-5-5L5 21" />
        </svg>
        <span className="tni-service-placeholder__label">{label}</span>
        <span className="tni-service-placeholder__note">Clinical image coming soon</span>
      </div>
    </HeroPhoto>
  );
}
