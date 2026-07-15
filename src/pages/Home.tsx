import { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Container, Eyebrow, SectionHeading, SectionIntro, Button } from '../components/ui';
import { Reveal } from '../components/Reveal';
import { QeegWaveform } from '../components/brand/QeegWaveform';
import { TopographicPattern } from '../components/brand/TopographicPattern';
import { ServiceCardIcon } from '../components/ServiceCardIcon';
import {
  homepageConditions,
  journey,
  attorneyJourney,
  evaluationIntegrates,
  trustPoints,
  whyTniProof,
  getHomeServicesGrouped,
  getFeaturedPhysicianService,
  type ServiceDomain,
  type JourneyStep,
} from '../data/home';

import heroDiagScreen from '../assets/images/hero_diagnostic_screen.png';
import concussionAssessment from '../assets/images/concussion_assessment.png';
import heroConsultationTablet from '../assets/images/hero_consultation_tablet.png';
import patientConsult from '../assets/images/patient_consultation.png';
import legalDoc from '../assets/images/legal_documentation.png';
import doctorScan from '../assets/images/doctor_explaining_scan.png';
import getStartedCta from '../assets/images/get_started_cta.png';

const SAND = '#f5ede3';
const COPPER = '#e16d22';

const SERVICE_STAGE_LABELS: Record<ServiceDomain, { title: string; summary: string }> = {
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

function CheckIcon({ color = COPPER, size = 15 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function IntegratesIcon({ index }: { index: number }) {
  const p = {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true as const,
  };
  switch (index) {
    case 0:
      return (
        <svg {...p}>
          <path d="M4.5 3v4.5a4 4 0 0 0 8 0V3" />
          <path d="M3.5 3h1.5M12 3h1.5" />
          <path d="M8.5 15.5v.8a4.7 4.7 0 0 0 9.4 0v-2.6" />
          <circle cx="17.9" cy="11.3" r="2" />
        </svg>
      );
    case 1:
      return (
        <svg {...p}>
          <path d="M9.5 3.5A2.5 2.5 0 0 1 12 6v12a2.5 2.5 0 0 1-4.95.5 2.5 2.5 0 0 1-.55-4.9 2.5 2.5 0 0 1 0-4.2 2.5 2.5 0 0 1 .5-4.4A2.5 2.5 0 0 1 9.5 3.5Z" />
          <path d="M14.5 3.5A2.5 2.5 0 0 0 12 6v12a2.5 2.5 0 0 0 4.95.5 2.5 2.5 0 0 0 .55-4.9 2.5 2.5 0 0 0 0-4.2 2.5 2.5 0 0 0-.5-4.4A2.5 2.5 0 0 0 14.5 3.5Z" />
        </svg>
      );
    case 2:
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3.5M12 18.5V22M2 12h3.5M18.5 12H22M5 5l2.5 2.5M16.5 16.5 19 19M19 5l-2.5 2.5M7.5 16.5 5 19" />
        </svg>
      );
    case 3:
      return (
        <svg {...p}>
          <path d="M2 12h4l2.2-7 3.6 14 2.2-7H22" />
        </svg>
      );
    case 4:
      return (
        <svg {...p}>
          <path d="M9.5 18h5M10.5 21h3" />
          <path d="M12 3a6 6 0 0 0-3.8 10.6c.7.6 1.1 1.2 1.2 2.4h5.2c.1-1.2.5-1.8 1.2-2.4A6 6 0 0 0 12 3Z" />
        </svg>
      );
    case 5:
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="4.5" />
          <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    default:
      return (
        <svg {...p}>
          <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
          <path d="M14 3v5h5" />
          <path d="M9 13h6M9 17h4" />
        </svg>
      );
  }
}

const PROOF = [
  'Physician-led evaluations',
  'Advanced neurodiagnostics',
  'Individualized treatment plans',
  'Attorney & physician referrals accepted',
];

function JourneyStepIcon({ type }: { type: JourneyStep['icon'] }) {
  const props = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.85,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true as const,
  };

  switch (type) {
    case 'reach':
      return (
        <svg {...props}>
          <path d="M21 15a4 4 0 0 1-4 4H7l-4 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
          <path d="M8 10h8M8 14h5" />
        </svg>
      );
    case 'diagnostics':
      return (
        <svg {...props}>
          <path d="M12 3a7 7 0 0 0-7 7c0 2.8 1.6 5.2 4 6.4V20a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3.6c2.4-1.2 4-3.6 4-6.4a7 7 0 0 0-7-7Z" />
          <path d="M9.5 11.5h5M12 9v5" />
        </svg>
      );
    case 'findings':
      return (
        <svg {...props}>
          <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
          <path d="M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z" />
          <path d="M9 14l2 2 4-4" />
        </svg>
      );
    case 'recovery':
      return (
        <svg {...props}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
  }
}

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [pathwayTab, setPathwayTab] = useState<'patients' | 'attorneys'>('patients');
  const [openServiceDomain, setOpenServiceDomain] = useState<ServiceDomain>('Diagnostics');
  const serviceGroups = getHomeServicesGrouped();
  const featuredService = getFeaturedPhysicianService();
  const activePathway = pathwayTab === 'patients' ? journey : attorneyJourney;
  const slides = [
    {
      image: heroDiagScreen,
      alt: 'Sleek medical diagnostic mapping interface showing a detailed 3D rendering of functional brain activity',
    },
    {
      image: concussionAssessment,
      alt: 'Clinician conducting a comprehensive, professional neurological and concussion assessment with a patient',
    },
    {
      image: heroConsultationTablet,
      alt: 'Physician showing and explaining a colorful topographic qEEG brain map on a tablet to a patient',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="tni-hero-light">
        <div className="tni-hero-light__bg">
          <TopographicPattern tone="light" className="tni-hero-light__topo" />
          <div className="tni-hero-light__waves">
            <QeegWaveform variant="hero" />
          </div>
        </div>

        <div className="tni-hero-light__content">
          <Container>
            <div className="tni-hero-grid">
              <Reveal className="tni-hero-grid__visual" delay={120}>
                <div className="tni-hero-visual">
                  <div className="tni-hero-carousel">
                    {slides.map((slide, index) => (
                      <div
                        key={index}
                        className={`tni-hero-carousel__slide ${activeSlide === index ? 'is-active' : ''}`}
                      >
                        <img
                          src={slide.image}
                          alt={slide.alt}
                          className="tni-hero-carousel__image"
                        />
                      </div>
                    ))}

                    <button
                      onClick={handlePrevSlide}
                      className="tni-hero-carousel__arrow tni-hero-carousel__arrow--prev"
                      aria-label="Previous slide"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                      </svg>
                    </button>
                    <button
                      onClick={handleNextSlide}
                      className="tni-hero-carousel__arrow tni-hero-carousel__arrow--next"
                      aria-label="Next slide"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </button>

                    <div className="tni-hero-carousel__nav">
                      {slides.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveSlide(index)}
                          className={`tni-hero-carousel__dot ${activeSlide === index ? 'is-active' : ''}`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal className="tni-hero-grid__copy">
                <div className="tni-hero-intro">
                  <h1 className="tni-fluid-h1-hero tni-hero-title">
                    Texas NeuroTrauma <br />
                    <span className="tni-hero-title__accent">Institute</span>
                  </h1>
                  <p className="tni-hero-sub">
                    Comprehensive Neurotrauma Evaluation, Advanced Neurodiagnostics, and Physician-Led Recovery
                  </p>
                </div>

                <p className="tni-hero-body">
                  Objective, evidence-informed care for patients with concussion, traumatic brain injury, and complex neurological symptoms following motor vehicle collisions, workplace injuries, falls, sports injuries, and other traumatic events.
                </p>
                <p className="tni-hero-body tni-hero-body--muted">
                  Physician-directed care integrating advanced neurodiagnostic testing, cognitive assessment, individualized rehabilitation, and medicolegal documentation when appropriate.
                </p>

                <div className="tni-hero-actions">
                  <Button to="/contact" variant="primary" size="lg" style={{ padding: '16px 36px', borderRadius: 99 }}>
                    Request an Evaluation
                  </Button>
                  <Button to="/for-attorneys" variant="ghost" size="lg" style={{ padding: '15px 28px', borderRadius: 99 }}>
                    For Attorneys
                  </Button>
                </div>

                <div className="tni-hero-locale">
                  <span className="tni-hero-locale__lead">Serving Patients Throughout Texas</span>
                  <span className="tni-hero-locale__cities">Statewide Referrals</span>
                </div>
              </Reveal>
            </div>
            <div className="tni-hero-proof">
              <ul className="tni-hero-proof__list">
                {PROOF.map((item) => (
                  <li key={item} className="tni-hero-proof__item">
                    <span className="tni-hero-proof__check" aria-hidden>
                      <CheckIcon size={12} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </div>
      </section>

      {/* ===================== COMPACT AUDIENCE FORK ===================== */}
      <section className="tni-section tni-section--cream tni-section--follow-hero tni-section--compact-bottom" aria-label="Choose your pathway">
        <Container>
          <Reveal>
            <div className="tni-audience-fork">
              <div className="tni-audience-fork__intro">
                <Eyebrow style={{ marginBottom: 14 }}>Two Pathways, One Standard</Eyebrow>
                <p className="tni-audience-fork__lead">
                  Objective care for patients, families, and legal partners.
                </p>
              </div>
              <div className="tni-audience-fork__cards">
                <Link to="/contact" className="tni-audience-fork__card tni-audience-fork__card--light tni-hover-card tni-glow-card">
                  <span className="tni-audience-fork__media">
                    <img
                      src={patientConsult}
                      alt="Physician discussing neurological findings with a patient"
                    />
                  </span>
                  <span className="tni-audience-fork__body">
                    <span className="tni-audience-fork__kicker">For Patients &amp; Families</span>
                    <span className="tni-audience-fork__title">Comprehensive Recovery</span>
                    <span className="tni-audience-fork__copy">
                      We identify and document post-traumatic neurological symptoms, then build an individualized
                      treatment and recovery plan to help you regain function and confidence.
                    </span>
                    <span className="tni-audience-fork__cta">
                      Start Your Evaluation <span className="tni-arrow" aria-hidden>→</span>
                    </span>
                  </span>
                </Link>
                <Link to="/for-attorneys" className="tni-audience-fork__card tni-audience-fork__card--dark tni-hover-card-dark tni-dark-glow-card">
                  <span className="tni-audience-fork__media">
                    <img
                      src={legalDoc}
                      alt="Medical records and documentation prepared for legal review"
                    />
                  </span>
                  <span className="tni-audience-fork__body">
                    <span className="tni-audience-fork__kicker">For Attorneys &amp; Law Firms</span>
                    <span className="tni-audience-fork__title">Objective Medical Documentation</span>
                    <span className="tni-audience-fork__copy">
                      We provide independent physician evaluations, objective neurodiagnostic findings, and structured
                      reports that clarify injury, impairment, and future care needs for your case.
                    </span>
                    <span className="tni-audience-fork__cta">
                      For Attorney <span className="tni-arrow" aria-hidden>→</span>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ===================== SERVICES ===================== */}
      <section id="services" className="tni-section tni-section--sand">
        <Container>
          <Reveal>
            <SectionIntro
              eyebrow="Comprehensive Neurotrauma Services"
              heading="Our neurotrauma services."
              lead="Advanced neurodiagnostics and physician-led rehabilitation — we diagnose objectively, assess function, and rehabilitate as one coherent care journey."
            />

            {featuredService && (
              <Link
                to={featuredService.path ?? '/services'}
                className="tni-svc-start tni-glow-card tni-hover-card"
              >
                <div className="tni-svc-start__icon">
                  <ServiceCardIcon icon={featuredService.icon} />
                </div>
                <div className="tni-svc-start__body">
                  <span className="tni-svc-start__badge">Start Here · Physician-Led Evaluation</span>
                  <h3 className="tni-svc-start__title">{featuredService.title}</h3>
                  <p className="tni-svc-start__copy">
                    A comprehensive clinical assessment that determines which testing, treatment, and recovery pathway
                    is appropriate for you.
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
                    aria-controls={`services-${group.domain.toLowerCase()}`}
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
                    <span className="tni-svc-stage__chevron" aria-hidden>⌄</span>
                  </button>

                  <div
                    id={`services-${group.domain.toLowerCase()}`}
                    className={`tni-svc-stage__list ${
                      openServiceDomain === group.domain ? 'is-open' : ''
                    }`}
                  >
                    {group.services.map((service) => (
                      <Link
                        key={service.path ?? service.title}
                        to={service.path ?? '/services'}
                        className="tni-svc-row"
                      >
                        <ServiceCardIcon icon={service.icon} className="tni-svc-row__icon" />
                        <span className="tni-svc-row__body">
                          <span className="tni-svc-row__title">{service.title}</span>
                          <span className="tni-svc-row__copy">{service.body}</span>
                        </span>
                        <span className="tni-svc-row__arrow" aria-hidden>→</span>
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ===================== CONDITIONS TEASER ===================== */}
      <section className="tni-section tni-section--sand tni-section--follow-section" aria-label="Conditions we evaluate">
        <Container>
          <Reveal>
            <div className="tni-conditions-home">
              <div className="tni-conditions-home__visual">
                <div className="tni-image-wrap tni-conditions-home__image">
                  <img
                    src={doctorScan}
                    alt="A clinician presenting a topographic brain map printout to a patient during an evaluation"
                  />
                </div>
              </div>

              <div className="tni-conditions-home__body">
                <Eyebrow style={{ marginBottom: 16 }}>Conditions We Evaluate</Eyebrow>
                <SectionHeading size={36} style={{ marginBottom: 18 }}>
                  Persistent symptoms after a traumatic event.
                </SectionHeading>
                <p className="tni-conditions-home__intro">
                  You do not have to navigate recovery alone. From traumatic brain injury to the cognitive, headache, vestibular, visual, and mood symptoms that follow, an objective neurodiagnostic evaluation can help identify brain dysregulation and establish a clear path forward.
                </p>
                <ul className="tni-cond-chips">
                  {homepageConditions.map((condition) => (
                    <li key={condition} className="tni-cond-chip">
                      <span className="tni-cond-chip__mark" aria-hidden />
                      {condition}
                    </li>
                  ))}
                </ul>
                <div className="tni-conditions-home__link-wrap">
                  <Link to="/conditions" className="tni-link-arrow tni-conditions-home__link">
                    Explore conditions &amp; symptoms in detail <span className="tni-arrow">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ===================== COMBINED PROOF SECTION ===================== */}
      <section className="tni-section tni-section--cream tni-proof-section" aria-labelledby="proof-heading">
        <Container>
          <Reveal>
            <div className="tni-proof-section__layout">
              <div className="tni-proof-section__narrative">
                <Eyebrow style={{ marginBottom: 14 }}>{whyTniProof.eyebrow}</Eyebrow>
                <SectionHeading size={38} style={{ marginBottom: 20 }}>
                  <span id="proof-heading">Objective answers when imaging looks </span>
                  <span className="tni-proof-section__accent">{whyTniProof.headingAccent}</span>
                </SectionHeading>
                {whyTniProof.narrative.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)} className="tni-proof-section__paragraph">
                    {paragraph}
                  </p>
                ))}

                <div className="tni-proof-section__objective">
                  <Eyebrow style={{ marginBottom: 12 }}>{whyTniProof.objectiveEyebrow}</Eyebrow>
                  <SectionHeading as="h3" size={26} style={{ marginBottom: 16, lineHeight: 1.25 }}>
                    {whyTniProof.objectiveHeading}
                  </SectionHeading>
                  {whyTniProof.objectiveCopy.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)} className="tni-proof-section__paragraph">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="tni-integrates tni-integrates--compact">
                <div className="tni-integrates__head">
                  <span className="tni-integrates__kicker">Every Evaluation Integrates</span>
                  <span className="tni-integrates__count">7 components</span>
                </div>
                <ul className="tni-integrates__list">
                  {evaluationIntegrates.map((item, i) => (
                    <li key={item} className="tni-integrates__list-item">
                      <span className="tni-integrates__icon" aria-hidden>
                        <IntegratesIcon index={i} />
                      </span>
                      <span className="tni-integrates__label">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ===================== PATHWAY — PATIENTS / ATTORNEYS ===================== */}
      <section id="journey" className="tni-section tni-section--sand">
        <Container>
          <Reveal>
            <SectionIntro
              eyebrow="Your Recovery Pathway"
              heading={pathwayTab === 'patients' ? 'A supportive, structured clinical path.' : 'A clear referral process for counsel.'}
              lead={
                pathwayTab === 'patients'
                  ? 'We guide patients step-by-step from initial consultation through objective assessment, integrated interpretation, and personalized recovery.'
                  : 'From first referral through structured documentation, each step is defined so counsel knows what to expect.'
              }
            />

            <div className="tni-pathway-tabs" role="tablist" aria-label="Pathway audience">
              <button
                type="button"
                role="tab"
                aria-selected={pathwayTab === 'patients'}
                className={`tni-pathway-tab ${pathwayTab === 'patients' ? 'is-active' : ''}`}
                onClick={() => setPathwayTab('patients')}
              >
                Patient journey
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={pathwayTab === 'attorneys'}
                className={`tni-pathway-tab ${pathwayTab === 'attorneys' ? 'is-active' : ''}`}
                onClick={() => setPathwayTab('attorneys')}
              >
                Attorney process
              </button>
            </div>

            <div className="tni-journey-track" role="tabpanel">
              {activePathway.map((step, index) => (
                <Fragment key={`${pathwayTab}-${step.label}`}>
                  {index > 0 && <div className="tni-journey-bridge" aria-hidden="true" />}
                  <div className="tni-journey-card tni-glow-card tni-hover-card">
                    <div className="tni-journey-card__marker">
                      <JourneyStepIcon type={step.icon} />
                      <span className="tni-journey-card__step" aria-hidden>{step.step}</span>
                    </div>
                    <h3 className="tni-journey-card__title">{step.label}</h3>
                    <p className="tni-journey-card__copy">{step.copy}</p>
                  </div>
                </Fragment>
              ))}
            </div>

            {pathwayTab === 'attorneys' && (
              <div className="tni-pathway-followup">
                <Link to="/for-attorneys" className="tni-link-arrow">
                  Explore attorney services &amp; referral details <span className="tni-arrow">→</span>
                </Link>
              </div>
            )}
          </Reveal>
        </Container>
      </section>

      {/* ===================== TRUST STRIP ===================== */}
      <section className="tni-section tni-section--cream tni-trust-section" aria-label="Why choose Texas NeuroTrauma Institute">
        <Container>
          <Reveal>
            <div className="tni-trust-strip">
              <div className="tni-trust-strip__header">
                <Eyebrow style={{ marginBottom: 10 }}>Why Choose Us</Eyebrow>
                <p className="tni-trust-strip__lead">
                  A physician-led institute built on objectivity, advanced diagnostics, and coordinated recovery.
                </p>
              </div>
              <ul className="tni-trust-strip__list">
                {trustPoints.map((item) => (
                  <li key={item} className="tni-trust-strip__item">
                    <span className="tni-trust-strip__check" aria-hidden>
                      <CheckIcon size={12} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <section className="tni-section tni-final-cta">
        <div className="tni-final-cta__glow" />
        <TopographicPattern tone="dark" style={{ opacity: 0.04, pointerEvents: 'none' }} />
        <Container>
          <Reveal>
            <div className="tni-final-cta__grid">
              <div className="tni-final-cta__content">
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                  <span className="tni-final-cta__pulse" aria-hidden />
                  <Eyebrow color={COPPER}>Request an Evaluation</Eyebrow>
                </div>

                <h2 className="tni-final-cta__title">
                  Your path to clear, <br />
                  <span className="tni-final-cta__title-accent">objective</span> answers.
                </h2>

                <p className="tni-final-cta__lead">
                  Whether you are a patient with persistent symptoms after a traumatic event or an attorney seeking objective medical documentation, our physician-led team is ready to help.
                </p>

                <div className="tni-final-cta__actions">
                  <Button to="/contact" variant="primary" size="lg" style={{ borderRadius: 99, padding: '16px 36px', boxShadow: '0 12px 30px rgba(225,109,34,0.3)' }}>
                    Request an Evaluation
                  </Button>
                  <Button
                    to="/for-attorneys"
                    variant="navy"
                    size="lg"
                    style={{
                      borderRadius: 99,
                      padding: '16px 36px',
                      background: 'rgba(255,255,255,0.08)',
                      border: '1.5px solid rgba(245,237,227,0.25)',
                      color: SAND,
                    }}
                  >
                    For Attorneys
                  </Button>
                </div>
              </div>

              <div className="tni-final-cta__visual">
                <div className="tni-final-cta__image-wrap">
                  <img src={getStartedCta} alt="Neurologists analyzing brain mapping data on a clinical screen" />
                  <div className="tni-final-cta__image-overlay" />
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
