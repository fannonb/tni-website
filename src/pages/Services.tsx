import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Eyebrow, SectionHeading, Button } from '../components/ui';
import { Reveal } from '../components/Reveal';
import { TopographicPattern } from '../components/brand/TopographicPattern';
import { QeegWaveform } from '../components/brand/QeegWaveform';
import { HeroPhoto } from '../components/HeroPhoto';
import { ServiceCardIcon } from '../components/ServiceCardIcon';
import servicesHeroImage from '../assets/images/services_index_hero.png';
import {
  getFeaturedServiceIndexItem,
  getServicesGroupedByDomain,
  type ServiceCategory,
} from '../data/servicesIndex';

const SERVICE_STAGE_LABELS: Record<ServiceCategory, { title: string; summary: string }> = {
  Diagnostics: {
    title: 'Diagnose',
    summary: 'Understand brain and neurological function.',
  },
  Assessment: {
    title: 'Assess',
    summary: 'Measure cognition and clinical impact.',
  },
  Rehabilitation: {
    title: 'Recover',
    summary: 'Restore function through targeted care.',
  },
};

export default function Services() {
  const featured = getFeaturedServiceIndexItem();
  const serviceGroups = getServicesGroupedByDomain();
  const [openServiceDomain, setOpenServiceDomain] = useState<ServiceCategory>('Diagnostics');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="tni-services-page">
      <section className="tni-services-hero" aria-label="Our Services">
        <div className="tni-services-hero__bg">
          <TopographicPattern tone="light" className="tni-hero-light__topo" style={{ opacity: 0.1 }} />
          <div className="tni-hero-light__waves">
            <QeegWaveform variant="hero" />
          </div>
        </div>

        <Container style={{ position: 'relative', zIndex: 1 }}>
          <div className="tni-services-hero__grid">
            <div className="tni-services-hero__copy">
              <Eyebrow style={{ marginBottom: 16 }}>Our Clinical Services</Eyebrow>
              <h1 className="tni-fluid-h1-hero tni-services-hero__title">
                Physician-directed neurological care, from evaluation to recovery.
              </h1>
              <p className="tni-services-hero__lead">
                Objective diagnostics, cognitive assessment, and rehabilitation—coordinated under physician
                direction for traumatic brain injury (TBI), mild traumatic brain injury (mTBI), concussion, and
                related neurological conditions.
              </p>
              <div className="tni-services-hero__actions">
                <Button to="/contact" variant="primary" size="lg" style={{ padding: '16px 36px', borderRadius: 99 }}>
                  Request an Evaluation
                </Button>
                <a href="#all-services" className="tni-services-hero__scroll">
                  Browse services ↓
                </a>
              </div>
            </div>

            <div className="tni-services-hero__visual">
              <HeroPhoto
                src={servicesHeroImage}
                alt="Clinician explaining neurological scan results to a patient during evaluation"
                tone="light"
              />
            </div>
          </div>
        </Container>
      </section>

      <section id="all-services" className="tni-services-list-section" aria-label="Service directory">
        <Container>
          <Reveal>
            {featured && (
              <Link to={featured.path} className="tni-svc-start tni-glow-card tni-hover-card">
                <div className="tni-svc-start__icon">
                  <ServiceCardIcon path={featured.path} />
                </div>
                <div className="tni-svc-start__body">
                  <span className="tni-svc-start__badge">Start Here · TBI (Traumatic Brain Injury) Evaluation</span>
                  <h2 className="tni-svc-start__title">{featured.title}</h2>
                  <p className="tni-svc-start__copy">
                    Physician-led traumatic brain injury evaluation that determines which testing, assessment, and
                    recovery services are appropriate for your symptoms, injury history, and clinical presentation.
                  </p>
                </div>
                <span className="tni-svc-start__cta">
                  Explore evaluation <span aria-hidden>→</span>
                </span>
              </Link>
            )}

            <div className="tni-svc-navigator">
              {serviceGroups.map((group) => (
                <section key={group.domain} className="tni-svc-stage">
                  <div className="tni-svc-stage__desktop-header">
                    <span className="tni-svc-stage__heading">
                      <span className="tni-svc-stage__domain">{group.domain}</span>
                      <span className="tni-svc-stage__title">
                        {SERVICE_STAGE_LABELS[group.domain].title}
                      </span>
                      <span className="tni-svc-stage__summary">
                        {SERVICE_STAGE_LABELS[group.domain].summary}
                      </span>
                    </span>
                  </div>
                  <button
                    type="button"
                    className="tni-svc-stage__toggle"
                    aria-expanded={openServiceDomain === group.domain}
                    aria-controls={`services-page-${group.domain.toLowerCase()}`}
                    onClick={() => setOpenServiceDomain(group.domain)}
                  >
                    <span className="tni-svc-stage__heading">
                      <span className="tni-svc-stage__domain">{group.domain}</span>
                      <span className="tni-svc-stage__title">
                        {SERVICE_STAGE_LABELS[group.domain].title}
                      </span>
                      <span className="tni-svc-stage__summary">
                        {SERVICE_STAGE_LABELS[group.domain].summary}
                      </span>
                    </span>
                    <span className="tni-svc-stage__chevron" aria-hidden>
                      ⌄
                    </span>
                  </button>

                  <div
                    id={`services-page-${group.domain.toLowerCase()}`}
                    className={`tni-svc-stage__list ${
                      openServiceDomain === group.domain ? 'is-open' : ''
                    }`}
                  >
                    {group.services.map((service) => (
                      <Link key={service.path} to={service.path} className="tni-svc-row">
                        <ServiceCardIcon path={service.path} className="tni-svc-row__icon" />
                        <span className="tni-svc-row__body">
                          <span className="tni-svc-row__title">{service.title}</span>
                          <span className="tni-svc-row__copy">{service.summary}</span>
                        </span>
                        <span className="tni-svc-row__arrow" aria-hidden>
                          →
                        </span>
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="tni-services-crosslink">
              <Link to="/conditions" className="tni-services-crosslink__link">
                <span className="tni-services-crosslink__body">
                  <span className="tni-services-crosslink__eyebrow">Conditions We Evaluate</span>
                  <span className="tni-services-crosslink__label">
                    Explore by symptoms or injury type
                  </span>
                  <span className="tni-services-crosslink__hint">
                    Browse diagnoses, injury mechanisms, and symptom profiles to find the right starting point.
                  </span>
                </span>
                <span className="tni-services-crosslink__cta">
                  View conditions
                  <span className="tni-services-crosslink__arrow" aria-hidden="true">
                    →
                  </span>
                </span>
              </Link>
            </div>
          </Reveal>

          <Reveal>
            <div className="tni-services-cta">
              <SectionHeading size={28} style={{ marginBottom: 12 }}>
                Ready for the next step?
              </SectionHeading>
              <p className="tni-services-cta__text">
                Request an evaluation to discuss your symptoms and goals, or explore how we support attorney
                referrals and objective documentation.
              </p>
              <div className="tni-services-cta__actions">
                <Button to="/contact" variant="primary" size="lg" style={{ padding: '16px 36px', borderRadius: 99 }}>
                  Request an Evaluation
                </Button>
                <Button to="/for-attorneys" variant="ghost" style={{ padding: '15px 28px', borderRadius: 99 }}>
                  For Attorneys
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
