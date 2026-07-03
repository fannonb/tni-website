import { useEffect } from 'react';
import { Container, Eyebrow, SectionHeading, Button } from './ui';
import { Reveal } from './Reveal';
import { QeegWaveform } from './brand/QeegWaveform';
import { TopographicPattern } from './brand/TopographicPattern';
import { WaveDivider } from './brand/WaveDivider';
import { HeroPhoto } from './HeroPhoto';
import { ServiceImagePlaceholder } from './ServiceImagePlaceholder';
import { ServiceOfferingMarkers, ServiceWhyChooseMarkers } from './ServiceListMarkers';
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
                      Schedule Evaluation
                    </Button>
                    <Button to="/services" variant="ghost" style={{ padding: '15px 28px', borderRadius: 99 }}>
                      ← Back to Services
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>
          </Container>
        </div>

        <WaveDivider fill="#f5ede3" background="#fcfaf7" className="tni-wave-divider--hero-exit" />
      </section>

      {/* Expert standard */}
      <section className="tni-expert-standard tni-flow-section" aria-label="Clinical overview">
        <TopographicPattern tone="light" style={{ opacity: 0.03, pointerEvents: 'none' }} />
        <Container>
          <Reveal>
            <div className="tni-expert-standard__grid">
              <div className="tni-expert-standard__statement">
                <div className="tni-expert-standard__accent" aria-hidden />
                <Eyebrow style={{ marginBottom: 14 }}>{service.expertEyebrow ?? 'Expert Standard'}</Eyebrow>
                <h2 className="tni-expert-standard__title">{service.expertTitle}</h2>
              </div>
              <div className="tni-expert-standard__body">
                <p>{service.expertBody}</p>
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
                  <Eyebrow style={{ marginBottom: 14 }}>{service.offeringsEyebrow}</Eyebrow>
                  <SectionHeading size={36} style={{ marginBottom: 0, maxWidth: 520 }}>
                    {service.offeringsTitle}
                  </SectionHeading>
                </div>
                {service.offeringsIntro && (
                  <p className="tni-symptom-areas__intro">{service.offeringsIntro}</p>
                )}
              </div>

              <div className={`tni-service-offerings__grid${usePathwayMarkers ? ' tni-service-offerings__grid--pathway' : ''}`}>
                {service.offerings.map((offering, index) => (
                  <article
                    key={offering.title}
                    className={`tni-service-offering-card${usePathwayMarkers ? ' tni-service-offering-card--pathway' : ''}`}
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

      {/* Why choose */}
      <section className="tni-section tni-section--sand tni-flow-section" aria-label="Why Choose Texas NeuroTrauma Institute">
        <WaveDivider fill="#f5ede3" background="#fcfaf7" />
        <div className="tni-flow-section__body">
          <Container>
            <Reveal>
              {usePathwayMarkers ? (
                <div className="tni-why-choose-uniform">
                  <header className="tni-why-choose-uniform__header">
                    <Eyebrow style={{ marginBottom: 14 }}>Medically Defensible Care</Eyebrow>
                    <SectionHeading size={34} style={{ lineHeight: 1.25, color: 'var(--tni-navy)', marginBottom: 20 }}>
                      Why Choose Texas NeuroTrauma Institute?
                    </SectionHeading>
                    <div className="tni-why-choose-uniform__accent" aria-hidden />
                    <p className="tni-why-choose-uniform__lead">{service.whyChooseIntro}</p>
                  </header>

                  <div className="tni-why-choose-uniform__grid">
                    {service.whyChoose.map((item, index) => (
                      <article key={item.title} className="tni-why-feature">
                        <ServiceWhyChooseMarkers index={index} />
                        <h4 className="tni-why-feature__title">{item.title}</h4>
                        <p className="tni-why-feature__body">{item.body}</p>
                      </article>
                    ))}
                  </div>
                </div>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 64 }}>
                  <div style={{ position: 'sticky', top: 120, height: 'fit-content' }}>
                    <Eyebrow style={{ marginBottom: 14 }}>Medically Defensible Care</Eyebrow>
                    <SectionHeading size={34} style={{ lineHeight: 1.25, color: 'var(--tni-navy)', marginBottom: 20 }}>
                      Why Choose Texas NeuroTrauma Institute?
                    </SectionHeading>
                    <div style={{ width: 50, height: 3, background: 'var(--tni-accent)', marginBottom: 24, borderRadius: 2 }} />
                    <p style={{ fontSize: 16, color: 'rgba(7,53,94,0.72)', lineHeight: 1.7, margin: 0 }}>
                      {service.whyChooseIntro}
                    </p>
                  </div>

                  <div className="tni-why-choose-list">
                    {service.whyChoose.map((item, index) => (
                      <div key={item.title} className="tni-why-choose-card">
                        <div className="tni-why-choose-card__num">{index + 1}</div>
                        <div>
                          <h4 className="tni-why-choose-card__title">{item.title}</h4>
                          <p className="tni-why-choose-card__body">{item.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Reveal>
          </Container>
        </div>
      </section>

      {/* Approach band */}
      <section className="tni-approach-band" aria-label="Clinical approach">
        <WaveDivider fill="#07203a" background="#f5ede3" className="tni-wave-divider--into-dark" />
        <img src={clinicalDark} alt="" className="tni-approach-band__image" />
        <div className="tni-approach-band__overlay" />
        <TopographicPattern tone="dark" style={{ opacity: 0.04, pointerEvents: 'none' }} />
        <div className="tni-approach-band__content">
          <Reveal>
            <Eyebrow color="var(--tni-accent)" style={{ marginBottom: 20 }}>
              {service.approachEyebrow ?? 'Clinical Philosophy'}
            </Eyebrow>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, fontSize: 36, lineHeight: 1.3, color: '#f5ede3', margin: '0 0 24px', letterSpacing: '-0.01em' }}>
              {service.approachTitle}
              {service.approachTitleAccent && (
                <>
                  <br />
                  <span style={{ fontStyle: 'italic', color: 'var(--tni-accent)' }}>{service.approachTitleAccent}</span>
                </>
              )}
            </h2>
            <p style={{ fontSize: 16.5, color: 'rgba(245,237,227,0.85)', lineHeight: 1.85, margin: 0, maxWidth: '76ch', marginLeft: 'auto', marginRight: 'auto' }}>
              {service.approachBody}
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
