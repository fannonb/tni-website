import { useEffect } from 'react';
import { Container, SectionHeading, Button } from '../components/ui';
import { Reveal } from '../components/Reveal';
import { TopographicPattern } from '../components/brand/TopographicPattern';
import { HeroPhoto } from '../components/HeroPhoto';
import legalDocImage from '../assets/images/attorneys_hero.png';
import doctorScanImage from '../assets/images/attorneys_provision.png';
import {
  engagementStandards,
  provisionGroups,
  provisionsLead,
  referralIndicators,
  reportLead,
  reportSections,
  workingLead,
  workingSections,
} from '../data/forAttorneys';
import { site } from '../data/site';

export default function ForAttorneys() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="tni-attorneys-hero" aria-labelledby="attorneys-hero-heading">
        <div className="tni-attorneys-hero__bg">
          <TopographicPattern tone="dark" className="tni-attorneys-hero__topo" style={{ opacity: 0.45 }} />
          <div className="tni-attorneys-hero__glow" aria-hidden />
        </div>

        <Container style={{ position: 'relative', zIndex: 2 }}>
          <div className="tni-attorneys-hero__grid">
            <div className="tni-attorneys-hero__content">
              <h1 id="attorneys-hero-heading" className="tni-attorneys-hero__title">
                For Attorneys
              </h1>
              <p className="tni-attorneys-hero__tagline">
                Physician-led neurotrauma evaluation and{' '}
                <span className="tni-attorneys-hero__accent">clear medical documentation.</span>
              </p>
              <p className="tni-attorneys-hero__body">
                We evaluate patients with suspected neurological injury after motor vehicle collisions, workplace
                incidents, falls, and other trauma — integrating physician examination, records review, indicated
                neurodiagnostic testing, functional assessment, and structured reporting.
              </p>
              <div className="tni-attorneys-hero__actions">
                <Button to="/contact?for=attorney" variant="primary" size="lg" style={{ padding: '16px 28px', borderRadius: 8 }}>
                  Request a Case Consultation
                </Button>
                <Button
                  to="#referral-process"
                  variant="ghostDark"
                  size="lg"
                  style={{ padding: '16px 24px', borderRadius: 8 }}
                >
                  Review Referral Process →
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

      <section className="tni-attorneys-fit" aria-labelledby="attorneys-refer-heading">
        <Container>
          <Reveal>
            <div className="tni-attorneys-fit__header">
              <SectionHeading as="h2" size={34} style={{ marginBottom: 12 }}>
                <span id="attorneys-refer-heading">When to Refer a Case</span>
              </SectionHeading>
              <p className="tni-attorneys-fit__lead">
                A referral may be appropriate when symptoms, clinical questions, or future-care needs require a
                physician-directed neurological assessment.
              </p>
            </div>

            <ul className="tni-attorneys-fit__grid">
              {referralIndicators.map((indicator) => (
                <li key={indicator} className="tni-attorneys-fit__item">
                  <span className="tni-attorneys-fit__mark" aria-hidden>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span>{indicator}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section className="tni-attorneys-provide" aria-labelledby="attorneys-provide-heading">
        <Container>
          <div className="tni-attorneys-provide__grid">
            <Reveal>
              <div className="tni-attorneys-provide__content">
                <SectionHeading as="h2" size={34} style={{ marginBottom: 16, maxWidth: '22ch' }}>
                  <span id="attorneys-provide-heading">What We Provide</span>
                </SectionHeading>
                <p className="tni-attorneys-provide__lead">{provisionsLead}</p>

                <div className="tni-provide-groups">
                  {provisionGroups.map((group) => (
                    <div key={group.title} className="tni-provide-group">
                      <h3 className="tni-provide-group__title">{group.title}</h3>
                      <ul className="tni-provide-group__list">
                        {group.items.map((item) => (
                          <li key={item} className="tni-provide-group__row">
                            <span className="tni-provide-group__check" aria-hidden>
                              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 6L9 17l-5-5" />
                              </svg>
                            </span>
                            <span className="tni-provide-group__label">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
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

      <section id="referral-process" className="tni-attorneys-working" aria-labelledby="attorneys-process-heading">
        <TopographicPattern tone="light" className="tni-attorneys-working__topo" style={{ opacity: 0.06 }} />
        <Container style={{ position: 'relative', zIndex: 1 }}>
          <Reveal>
            <div className="tni-attorneys-working__intro">
              <SectionHeading as="h2" size={34} style={{ marginBottom: 16 }}>
                <span id="attorneys-process-heading">How Referrals Work</span>
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
                      {index + 1}
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

      <section id="reporting" className="tni-attorneys-report" aria-labelledby="attorneys-report-heading">
        <Container>
          <Reveal>
            <div className="tni-attorneys-report__intro">
              <SectionHeading as="h2" size={34} style={{ marginBottom: 16, maxWidth: '28ch' }}>
                <span id="attorneys-report-heading">What Reports Include</span>
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

      <section className="tni-attorneys-standards" aria-labelledby="attorneys-standards-heading">
        <Container>
          <Reveal>
            <div className="tni-attorneys-standards__intro">
              <SectionHeading as="h2" size={34} style={{ marginBottom: 14 }}>
                <span id="attorneys-standards-heading">Engagement Standards</span>
              </SectionHeading>
              <p>
                Retention scope, deliverables, and professional boundaries are confirmed in writing so clinical
                judgment stays independent and counsel knows what to expect.
              </p>
            </div>

            <div className="tni-attorneys-standards__grid">
              {engagementStandards.map((standard, index) => (
                <article key={standard.title} className="tni-attorneys-standards__card">
                  <span className="tni-attorneys-standards__index" aria-hidden>
                    {index + 1}
                  </span>
                  <h3>{standard.title}</h3>
                  <p>{standard.body}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="tni-attorneys-cta" aria-labelledby="attorneys-cta-heading">
        <TopographicPattern tone="dark" className="tni-attorneys-cta__topo" style={{ opacity: 0.18 }} />
        <Container style={{ position: 'relative', zIndex: 1 }}>
          <Reveal>
            <div className="tni-attorneys-cta__inner">
              <SectionHeading as="h2" size={38} color="var(--tni-sand)" style={{ marginBottom: 16 }}>
                <span id="attorneys-cta-heading">Request a Case Consultation</span>
              </SectionHeading>
              <p className="tni-attorneys-cta__copy">
                Share a brief case overview and the clinical question you need addressed. Our team will review the
                inquiry and explain next steps before records or protected health information are requested.
              </p>
              <div className="tni-attorneys-cta__actions">
                <Button to="/contact?for=attorney" variant="primary" size="lg" style={{ borderRadius: 8 }}>
                  Request a Case Consultation
                </Button>
                <Button href={site.emailHref} variant="ghostDark" size="lg" style={{ borderRadius: 8 }}>
                  Email Our Team
                </Button>
              </div>
              <p className="tni-attorneys-cta__notice">
                Please do not email medical records or confidential case materials. Secure transfer instructions are
                provided after scope and engagement are confirmed.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
