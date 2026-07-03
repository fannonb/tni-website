import { useEffect } from 'react';
import { Container, Eyebrow, SectionHeading, Button } from '../components/ui';
import { Reveal } from '../components/Reveal';
import { TopographicPattern } from '../components/brand/TopographicPattern';
import { HeroPhoto } from '../components/HeroPhoto';
import legalDocImage from '../assets/images/attorneys_hero.png';
import doctorScanImage from '../assets/images/attorneys_provision.png';
import { provisions, provisionsLead, workingSections, workingLead, reportSections, reportLead } from '../data/forAttorneys';

export default function ForAttorneys() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="tni-attorneys-hero" aria-label="For Attorneys">
        <div className="tni-attorneys-hero__bg">
          <TopographicPattern tone="dark" className="tni-attorneys-hero__topo" style={{ opacity: 0.45 }} />
          <div className="tni-attorneys-hero__glow" aria-hidden />
        </div>

        <Container style={{ position: 'relative', zIndex: 2 }}>
          <div className="tni-attorneys-hero__grid">
            <div className="tni-attorneys-hero__content">
              <p className="tni-attorneys-hero__eyebrow">For Attorneys</p>
              <h1 className="tni-attorneys-hero__title">
                Objective medical documentation for{' '}
                <span className="tni-attorneys-hero__accent">neurotrauma cases.</span>
              </h1>
              <p className="tni-attorneys-hero__body">
                Texas NeuroTrauma Institute provides objective clinical evaluation and medical documentation for patients
                suffering neurological symptoms following motor vehicle accidents and other traumatic events.
              </p>
              <p className="tni-attorneys-hero__body">
                Our reports focus on mechanism of injury analysis, clinical findings, symptom progression, and functional
                impairment documentation. We prioritize clinical integrity and objective medical analysis.
              </p>
              <div className="tni-attorneys-hero__actions">
                <Button to="#referral-packet" variant="primary" size="lg" style={{ padding: '16px 28px', borderRadius: 8 }}>
                  Download Referral Packet
                </Button>
                <Button
                  to="#case-portal"
                  variant="ghostDark"
                  size="lg"
                  style={{ padding: '16px 24px', borderRadius: 8 }}
                >
                  Secure Case Review Portal →
                </Button>
              </div>
            </div>

            <div className="tni-attorneys-hero__visual">
              <HeroPhoto
                src={legalDocImage}
                alt="Medical documentation and clinical records for legal review"
                tone="dark"
                aspectRatio="1.05 / 1"
                overlay
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="tni-attorneys-provide" aria-label="What We Provide">
        <Container>
          <div className="tni-attorneys-provide__grid">
            <Reveal>
              <div className="tni-attorneys-provide__content">
                <Eyebrow style={{ marginBottom: 14 }}>What We Provide</Eyebrow>
                <SectionHeading as="h2" size={34} style={{ marginBottom: 16, maxWidth: '22ch' }}>
                  Texas NeuroTrauma Institute provides:
                </SectionHeading>
                <p className="tni-attorneys-provide__lead">{provisionsLead}</p>

                <ul className="tni-attorneys-provide__list">
                  {provisions.map((item) => (
                    <li key={item} className="tni-attorneys-provide__row">
                      <span className="tni-attorneys-provide__check" aria-hidden>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </span>
                      <span className="tni-attorneys-provide__label">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="tni-attorneys-provide__visual">
                <HeroPhoto
                  src={doctorScanImage}
                  alt="Clinician reviewing neurological findings with a patient"
                  tone="light"
                  aspectRatio="4 / 5"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="tni-attorneys-working" aria-label="Working With Us">
        <TopographicPattern tone="light" className="tni-attorneys-working__topo" style={{ opacity: 0.06 }} />
        <Container style={{ position: 'relative', zIndex: 1 }}>
          <Reveal>
            <div className="tni-attorneys-working__intro">
              <Eyebrow style={{ marginBottom: 14 }}>Working With Us</Eyebrow>
              <SectionHeading as="h2" size={34} style={{ marginBottom: 16 }}>
                How referral and retention work.
              </SectionHeading>
              <p className="tni-attorneys-working__lead">{workingLead}</p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <ol className="tni-attorneys-working__flow">
              {workingSections.map((step, index) => (
                <li key={step.title} className="tni-attorneys-working__card">
                  <div className="tni-attorneys-working__card-head">
                    <span className="tni-attorneys-working__step-num" aria-hidden>
                      Step {index + 1}
                    </span>
                    {index < workingSections.length - 1 && (
                      <span className="tni-attorneys-working__connector" aria-hidden />
                    )}
                  </div>
                  <h3 className="tni-attorneys-working__card-title">{step.title}</h3>
                  <p className="tni-attorneys-working__card-text">{step.body}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </section>

      <section className="tni-attorneys-report" aria-label="Reporting">
        <Container>
          <Reveal>
            <div className="tni-attorneys-report__intro">
              <Eyebrow style={{ marginBottom: 14 }}>Reporting</Eyebrow>
              <SectionHeading as="h2" size={34} style={{ marginBottom: 16, maxWidth: '28ch' }}>
                Forensic Neurotrauma Report — available upon retention.
              </SectionHeading>
              <p className="tni-attorneys-report__lead">{reportLead}</p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="tni-attorneys-report__outline">
              <ol className="tni-attorneys-report__col">
                {reportSections.filter((_, index) => index % 2 === 0).map((section, index) => (
                  <li key={section} className="tni-attorneys-report__row">
                    <span className="tni-attorneys-report__index" aria-hidden>
                      {index * 2 + 1}
                    </span>
                    <span className="tni-attorneys-report__label">{section}</span>
                  </li>
                ))}
              </ol>
              <ol className="tni-attorneys-report__col">
                {reportSections.filter((_, index) => index % 2 === 1).map((section, index) => (
                  <li key={section} className="tni-attorneys-report__row">
                    <span className="tni-attorneys-report__index" aria-hidden>
                      {index * 2 + 2}
                    </span>
                    <span className="tni-attorneys-report__label">{section}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* DOWNLOAD / PORTAL */}
      <section style={{ padding: '88px 0', background: '#07355e', color: '#f5ede3' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px' }}>
          <div id="referral-packet" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
            <div className="tni-dark-card" style={{ background: 'rgba(245,237,227,0.06)', borderRadius: 16, padding: 34 }}>
              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--tni-accent)', marginBottom: 14 }}>
                Download
              </div>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 23, marginBottom: 14 }}>Attorney Referral Packet</div>
              <p style={{ fontSize: 14, color: 'rgba(245,237,227,0.75)', lineHeight: 1.65, margin: '0 0 22px' }}>
                Dear Counselor — Texas NeuroTrauma Institute provides physician-directed evaluation and treatment for
                patients experiencing neurological symptoms following traumatic injury, particularly motor vehicle
                accidents and concussive events.
              </p>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 600, color: 'rgba(245,237,227,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                PDF — coming soon
              </span>
            </div>
            <div id="case-portal" className="tni-dark-card" style={{ background: 'rgba(245,237,227,0.06)', borderRadius: 16, padding: 34 }}>
              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--tni-accent)', marginBottom: 14 }}>
                Portal
              </div>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 23, marginBottom: 14 }}>Secure Case Review Portal</div>
              <p style={{ fontSize: 14, color: 'rgba(245,237,227,0.75)', lineHeight: 1.65, margin: '0 0 22px' }}>
                Submit case materials for review through our secure attorney portal. Portal access is provisioned upon
                retention.
              </p>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 600, color: 'rgba(245,237,227,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                URL — coming soon
              </span>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}
