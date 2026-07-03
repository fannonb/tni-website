import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Eyebrow, SectionHeading, Button } from '../components/ui';
import { Reveal } from '../components/Reveal';
import { TopographicPattern } from '../components/brand/TopographicPattern';
import { QeegWaveform } from '../components/brand/QeegWaveform';
import { HeroPhoto } from '../components/HeroPhoto';
import { ServiceCardIcon } from '../components/ServiceCardIcon';
import servicesHeroImage from '../assets/images/services_index_hero.png';
import { getServiceIndexItems } from '../data/servicesIndex';

const SERVICE_GUIDE =
  'Select a service below to learn about what we offer, our clinical approach, and how we support patients through every stage of care. If you are unsure which evaluation fits your needs, our team can help guide you after an initial consultation.';

export default function Services() {
  const services = getServiceIndexItems();

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
            <div className="tni-services-hero__visual">
              <HeroPhoto
                src={servicesHeroImage}
                alt="Clinician explaining neurological scan results to a patient during evaluation"
                tone="light"
              />
            </div>

            <div className="tni-services-hero__copy">
              <Eyebrow style={{ marginBottom: 16 }}>Our Clinical Services</Eyebrow>
              <h1 className="tni-fluid-h1-hero tni-services-hero__title">
                Physician-directed neurological care, from evaluation to recovery.
              </h1>
              <p className="tni-services-hero__lead">
                Texas NeuroTrauma Institute offers specialized outpatient services for patients recovering from
                brain injury, concussion, and related neurological conditions. Each service is designed to provide
                objective diagnostics, clear findings, and evidence-based treatment.
              </p>
              <div className="tni-services-hero__actions">
                <Button to="/contact" variant="primary" size="lg" style={{ padding: '16px 36px', borderRadius: 99 }}>
                  Schedule Evaluation
                </Button>
                <a href="#all-services" className="tni-services-hero__scroll">
                  View all services ↓
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="all-services" className="tni-services-list-section" aria-label="All services">
        <Container>
          <Reveal>
            <div className="tni-services-list__header">
              <SectionHeading size={32} style={{ marginBottom: 14 }}>
                All Services
              </SectionHeading>
              <p className="tni-services-list__guide">{SERVICE_GUIDE}</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="tni-services-grid">
              {services.map((service) => (
                <ServiceCard key={service.path} service={service} />
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="tni-services-cta">
              <SectionHeading size={28} style={{ marginBottom: 12 }}>
                Not sure where to start?
              </SectionHeading>
              <p className="tni-services-cta__text">
                Our team helps direct you to the right evaluation based on your symptoms, injury history, and recovery
                goals.
              </p>
              <div className="tni-services-cta__actions">
                <Button to="/contact" variant="primary" size="lg" style={{ padding: '16px 36px', borderRadius: 99 }}>
                  Request an Evaluation
                </Button>
                <Button to="/conditions" variant="ghost" style={{ padding: '15px 28px', borderRadius: 99 }}>
                  Conditions We Treat
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}

function ServiceCard({
  service,
}: {
  service: { path: string; title: string; summary: string };
}) {
  return (
    <Link to={service.path} className="tni-service-index-card">
      <ServiceCardIcon path={service.path} className="tni-service-index-card__icon" />
      <SectionHeading as="h3" size={20} style={{ marginBottom: 10, lineHeight: 1.35 }}>
        {service.title}
      </SectionHeading>
      <p className="tni-service-index-card__summary">{service.summary}</p>
      <span className="tni-link-arrow tni-service-index-card__link">
        View service details <span className="tni-arrow">→</span>
      </span>
    </Link>
  );
}
