import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, SectionHeading, Button } from './ui';
import { Reveal } from './Reveal';
import { QeegWaveform } from './brand/QeegWaveform';
import { TopographicPattern } from './brand/TopographicPattern';
import { WaveDivider } from './brand/WaveDivider';
import { HeroPhoto } from './HeroPhoto';
import { ServiceImagePlaceholder } from './ServiceImagePlaceholder';
import { ServiceOfferingMarkers } from './ServiceListMarkers';
import clinicalDark from '../assets/images/clinical-dark.jpg';
import type { ServicePageContent } from '../data/allServices';

const NAVY = '#07355e';
const COPPER = '#e16d22';

interface ServicePageLayoutProps {
  service: ServicePageContent;
}

export function ServicePageLayout({ service }: ServicePageLayoutProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service.slug]);

  const usePathwayMarkers = service.listStyle !== 'numbered';
  const hasOddOfferingCount = service.offerings.length % 2 !== 0;
  const isRehabilitation = service.domain === 'Rehabilitation';
  const ctaLabel = isRehabilitation ? 'Request an Appointment' : 'Request an Evaluation';

  return (
    <div style={{ background: '#fcfaf7', color: NAVY, overflow: 'hidden' }}>
      {/* Hero */}
      <section className="tni-hero-light tni-concussion-hero" aria-label={`${service.heroTitle} Hero`}>
        <div className="tni-hero-light__bg">
          <TopographicPattern tone="light" className="tni-hero-light__topo" style={{ opacity: 0.15 }} />
          <div className="tni-hero-light__waves">
            <QeegWaveform variant="hero" />
          </div>
        </div>

        <div className="tni-hero-light__content" style={{ position: 'relative', zIndex: 2 }}>
          <Container>
            <div className="tni-hero-grid">
              <Reveal className="tni-hero-grid__visual" delay={120}>
                {service.heroImageSrc ? (
                  <HeroPhoto
                    src={service.heroImageSrc}
                    alt={service.heroImageAlt ?? service.heroImageLabel}
                    tone="light"
                  />
                ) : (
                  <ServiceImagePlaceholder label={service.heroImageLabel} />
                )}
              </Reveal>

              <Reveal className="tni-hero-grid__copy">
                <div style={{ maxWidth: 560 }}>
                  <h1
                    className="tni-fluid-h1-hero"
                    style={{
                      fontFamily: "'Fraunces', serif",
                      fontWeight: 500,
                      color: NAVY,
                      margin: '0 0 22px',
                      lineHeight: 1.08,
                    }}
                  >
                    {service.heroTitle}
                    {service.heroTitleAccent && (
                      <>
                        <br />
                        <span style={{ color: COPPER }}>{service.heroTitleAccent}</span>
                      </>
                    )}
                  </h1>

                  <p className="tni-hero-sub" style={{ fontFamily: "'Fraunces', serif", fontStyle: 'italic', fontSize: 'clamp(1.05rem, 2.2vw, 1.2rem)', color: 'rgba(7,53,94,0.78)', margin: '0 0 18px', lineHeight: 1.45 }}>
                    {service.tagline}
                  </p>

                  <p className="tni-hero-body" style={{ fontSize: 17, color: 'rgba(7,53,94,0.82)', lineHeight: 1.7, margin: '0 0 32px', maxWidth: '50ch' }}>
                    {service.heroIntro}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 16 }}>
                    <Button to="/contact" variant="primary" size="lg" style={{ padding: '16px 36px', borderRadius: 99, boxShadow: '0 12px 30px rgba(225,109,34,0.25)' }}>
                      {ctaLabel}
                    </Button>
                    <Link to="/services" className="tni-service-back-link">
                      ← Back to Services
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </Container>
        </div>

        <WaveDivider fill="#f5ede3" background="#fcfaf7" className="tni-wave-divider--hero-exit" />
      </section>

      {/* Audience / clinical overview */}
      <section className="tni-evaluation-audience" aria-label={service.expertTitle}>
        <TopographicPattern tone="light" style={{ opacity: 0.03, pointerEvents: 'none' }} />
        <Container style={{ position: 'relative', zIndex: 1 }}>
          <Reveal>
            <div className="tni-evaluation-audience__grid">
              <h2 className="tni-evaluation-audience__title">{service.expertTitle}</h2>
              <div className="tni-evaluation-audience__detail">
                <p className="tni-evaluation-audience__intro">{service.expertBody}</p>
                {service.expertItems && (
                  <ul className="tni-evaluation-audience__list">
                    {service.expertItems.map((item) => (
                      <li key={item}>
                        <span aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Service offerings */}
      <section className="tni-symptom-areas tni-flow-section" aria-label={service.offeringsTitle}>
        <WaveDivider fill="#fcfaf7" background="#f5ede3" />
        <div className="tni-flow-section__body">
          <div className="tni-symptom-areas__glow" aria-hidden />
          <TopographicPattern tone="light" className="tni-symptom-areas__topo" style={{ opacity: 0.04, pointerEvents: 'none' }} />
          <Container style={{ position: 'relative', zIndex: 1 }}>
            <Reveal>
              <div className="tni-symptom-areas__header">
                <div>
                  <SectionHeading size={36} style={{ marginBottom: 0, maxWidth: 520 }}>
                    {service.offeringsTitle}
                  </SectionHeading>
                </div>
                {service.offeringsIntro && (
                  <p className="tni-symptom-areas__intro">{service.offeringsIntro}</p>
                )}
              </div>

              <div className={`tni-service-offerings__grid${usePathwayMarkers ? ' tni-service-offerings__grid--pathway' : ''} tni-service-offerings__grid--evaluation`}>
                {service.offerings.map((offering, index) => (
                  <article
                    key={offering.title}
                    className={`tni-service-offering-card${usePathwayMarkers ? ' tni-service-offering-card--pathway' : ''}${hasOddOfferingCount && index === service.offerings.length - 1 ? ' tni-service-offering-card--wide' : ''}`}
                  >
                    {usePathwayMarkers ? (
                      <ServiceOfferingMarkers index={index} />
                    ) : (
                      <span className="tni-service-offering-card__num" aria-hidden>
                        {index + 1}
                      </span>
                    )}
                    <div className="tni-service-offering-card__content">
                      <h3 className="tni-service-offering-card__title">{offering.title}</h3>
                      <p className="tni-service-offering-card__desc">{offering.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </Reveal>
          </Container>
        </div>
      </section>

      {/* Approach band */}
      <section className="tni-approach-band" aria-label="Clinical approach">
        <WaveDivider fill="#07203a" background="#fcfaf7" className="tni-wave-divider--into-dark" />
        <img src={clinicalDark} alt="" className="tni-approach-band__image" />
        <div className="tni-approach-band__overlay" />
        <TopographicPattern tone="dark" style={{ opacity: 0.04, pointerEvents: 'none' }} />
        <div className="tni-approach-band__content">
          <Reveal>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, fontSize: 36, lineHeight: 1.3, color: '#f5ede3', margin: '0 0 24px', letterSpacing: '-0.01em' }}>
              {service.approachTitle}
            </h2>
            <p style={{ fontSize: 16.5, color: 'rgba(245,237,227,0.85)', lineHeight: 1.85, margin: 0, maxWidth: '76ch', marginLeft: 'auto', marginRight: 'auto' }}>
              {service.approachBody}
            </p>
            {service.approachItems && (
              <ul className="tni-evaluation-outcomes">
                {service.approachItems.map((item) => (
                  <li key={item}>
                    <span aria-hidden>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        </div>
      </section>

      <section className="tni-evaluation-cta" aria-label={ctaLabel}>
        <Container>
          <Reveal>
            <div className="tni-evaluation-cta__inner">
              <div>
                <h2>{isRehabilitation ? 'Ready to discuss your care?' : 'Ready to request an evaluation?'}</h2>
                <p>Contact our team to discuss symptoms, referral needs, and the appropriate next step.</p>
              </div>
              <Button to="/contact" variant="primary" size="lg" style={{ borderRadius: 99, flexShrink: 0 }}>
                {ctaLabel}
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
