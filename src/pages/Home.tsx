import { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Container, Eyebrow, SectionHeading, SectionIntro, Button } from '../components/ui';
import { Reveal } from '../components/Reveal';
import { QeegWaveform } from '../components/brand/QeegWaveform';
import { TopographicPattern } from '../components/brand/TopographicPattern';
import { site, hasRealPhone } from '../data/site';
import { services, conditions, journey, authorityConditions, type JourneyStep } from '../data/home';

// Import custom generated premium images
import heroDiagScreen from '../assets/images/hero_diagnostic_screen.png';
import concussionAssessment from '../assets/images/concussion_assessment.png';
import heroConsultationTablet from '../assets/images/hero_consultation_tablet.png';
import patientConsult from '../assets/images/patient_consultation.png';
import legalDoc from '../assets/images/legal_documentation.png';
import neuralDark from '../assets/images/neural_pathways_dark.png';
import doctorScan from '../assets/images/doctor_explaining_scan.png';

const NAVY = '#07355e';
const SAND = '#f5ede3';
const COPPER = '#e16d22';

const getConditionIcon = (index: number) => {
  switch (index) {
    case 0: // TBI
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-4.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2Z" />
          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-4.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2Z" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );
    case 1: // Concussion
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22a7 7 0 0 0 7-7c0-4.3-3-7-7-11-4 4-7 6.7-7 11a7 7 0 0 0 7 7Z" />
          <path d="M12 11v4" />
          <path d="M12 18h.01" />
          <path d="M19 12c1.5-1.5 1.5-4 0-5.5" />
          <path d="M5 12C3.5 10.5 3.5 8 5 6.5" />
        </svg>
      );
    case 2: // Motor Vehicle
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v18" />
          <rect x="9" y="5" width="6" height="3" rx="1" />
          <rect x="9" y="10" width="6" height="3" rx="1" />
          <rect x="9" y="15" width="6" height="3" rx="1" />
          <path d="M6 8c2 2 10 2 12 0" />
          <path d="M6 13c2 2 10 2 12 0" />
          <path d="M6 18c2 2 10 2 12 0" />
        </svg>
      );
    case 3: // Cognitive
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <line x1="12" y1="2" x2="12" y2="9" />
          <line x1="12" y1="15" x2="12" y2="22" />
          <line x1="2" y1="12" x2="9" y2="12" />
          <line x1="15" y1="12" x2="22" y2="12" />
          <circle cx="12" cy="2" r="1.5" fill="currentColor" />
          <circle cx="22" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );
    case 4: // Headache
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h.01" />
          <path d="M12 6a6 6 0 1 0 6 6" />
          <path d="m12 6-4-4-4 4" />
          <path d="M12 18h.01" />
          <path d="M6 12C4 8 8 4 12 6" />
          <path d="M8 12h.01" />
        </svg>
      );
    case 5: // Decline
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 18c2-2 4-7 9-7s7 3 9 1" />
          <circle cx="3" cy="18" r="2" />
          <circle cx="12" cy="11" r="2" fill="currentColor" />
          <circle cx="21" cy="12" r="2" />
          <path d="M19 6v6h-6" />
        </svg>
      );
    default:
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      );
  }
};

const PROOF = [
  'Physician-led care',
  'qEEG brain mapping',
  'Response within 1 business day',
  'Houston & San Antonio',
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

type ServiceCategory = 'All' | 'Diagnostics' | 'Assessment' | 'Rehabilitation';

export default function Home() {
  const [activeTab, setActiveTab] = useState<ServiceCategory>('All');
  const showPhone = hasRealPhone();

  // Hero Carousel State
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      image: heroDiagScreen,
      alt: "Sleek medical diagnostic mapping interface showing a detailed 3D rendering of functional brain activity",
    },
    {
      image: concussionAssessment,
      alt: "Clinician conducting a comprehensive, professional neurological and concussion assessment with a patient",
    },
    {
      image: heroConsultationTablet,
      alt: "Physician showing and explaining a colorful topographic qEEG brain map on a tablet to a patient",
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

  // Filter services based on category matching their 'domain' field
  const filteredServices = services.filter((s) => {
    if (activeTab === 'All') return true;
    return s.domain === activeTab;
  });

  return (
    <>
      {/* ===================== HERO — light theme ===================== */}
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
                    {/* Slides */}
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

                    {/* Navigation Arrows */}
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

                    {/* Navigation Dots */}
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
                    Objective Brain Mapping. Evidence-Based Outpatient Care.
                  </p>
                </div>

                <p className="tni-hero-body">
                  We provide structured, medically defensible clinical evaluations and recovery strategies for patients recovering from concussions, traumatic brain injuries, and neurological trauma across Texas.
                </p>

                <div className="tni-hero-actions">
                  <Button to="/contact" variant="primary" size="lg" full style={{ padding: '16px 36px', borderRadius: 99 }}>
                    Request an Evaluation
                  </Button>
                  {showPhone && (
                    <a href={site.phoneHref} className="tni-hero-phone">
                      <span className="tni-hero-phone__label">or call</span>
                      <span className="tni-hero-phone__number">{site.phoneDisplay}</span>
                    </a>
                  )}
                </div>
              </Reveal>
            </div>
            <div className="tni-hero-proof">
              <div className="tni-hero-proof__list">
                {PROOF.map((item, i) => (
                  <span key={item} className="tni-hero-proof__item">
                    {i > 0 && <span className="tni-hero-proof__tick" aria-hidden>·</span>}
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* ===================== CLINICAL FOCUS / AUTHORITY STATEMENT ===================== */}
      <section className="tni-section tni-section--cream tni-section--follow-hero tni-section--compact-bottom" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Subtle decorative glow in background, reflecting brand colors */}
        <div style={{
          position: 'absolute',
          top: '50%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(225,109,34,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
          transform: 'translateY(-50%)'
        }} />
        <Container>
          <Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 64, alignItems: 'center' }}>
            <div style={{ borderLeft: `4px solid ${COPPER}`, paddingLeft: 24 }}>
              <Eyebrow style={{ marginBottom: 12 }}>Clinical Specialization</Eyebrow>
              <SectionHeading size={38} style={{ marginBottom: 20 }}>
                Precision in <span style={{ color: COPPER }}>Diagnosis.</span> <br />
                Integrity in <span style={{ color: COPPER }}>Documentation.</span>
              </SectionHeading>
              <p style={{ fontSize: 16.5, color: 'rgba(7,53,94,0.76)', lineHeight: 1.75, margin: 0, maxWidth: '48ch' }}>
                We combine objective diagnostic modalities, such as quantitative EEG mapping, with physician-directed recovery plans to restore neurological performance, cognitive capacity, and patient autonomy.
              </p>
            </div>
            <div className="tni-stagger-grid">
              {authorityConditions.map((condition, index) => (
                <div
                  key={condition}
                  className="tni-specialty-card"
                >
                  <div className="tni-specialty-icon-container">
                    {getConditionIcon(index)}
                  </div>
                  <span className="tni-specialty-card-text">
                    {condition}
                  </span>
                </div>
              ))}
            </div>
          </div>
          </Reveal>
        </Container>
      </section>

      {/* ===================== TWO PATHS ===================== */}
      <section className="tni-section tni-section--sand">
        <Container>
          <Reveal>
          <SectionIntro
            eyebrow="Custom Care Protocols"
            heading="We serve patients, families, and referring partners."
            lead="Select a pathway to explore how we support your specific medical or documentation goals."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 32 }}>
            {/* Patients Block */}
            <div
              className="tni-hover-card tni-glow-card"
              style={{
                borderRadius: 24,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid rgba(7,53,94,0.06)',
              }}
            >
              <div className="tni-image-wrap" style={{ height: 240, borderRadius: '24px 24px 0 0' }}>
                <img
                  src={patientConsult}
                  alt="A doctor showing brain-activity mapping results on a tablet to a patient"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, rgba(7,53,94,0.2) 100%)' }} />
              </div>
              <div style={{ padding: '36px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span style={{ fontSize: 11, fontWeight: 800, color: COPPER, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 10 }}>
                  For Patients &amp; Families
                </span>
                <SectionHeading as="h3" size={24} style={{ marginBottom: 14 }}>
                  Comprehensive Recovery
                </SectionHeading>
                <p style={{ fontSize: 15, color: 'rgba(7,53,94,0.72)', lineHeight: 1.65, margin: '0 0 28px', flex: 1 }}>
                  Struggling with persistent symptoms like head pressure, brain fog, or memory changes following a concussion or impact? Our team provides an objective diagnosis and builds a clear roadmap to restore your quality of life.
                </p>
                <Button to="/contact" variant="primary" style={{ alignSelf: 'flex-start', borderRadius: 99, padding: '12px 24px' }}>
                  Request an Evaluation →
                </Button>
              </div>
            </div>

            {/* Attorneys Block */}
            <div
              className="tni-hover-card-dark tni-dark-glow-card"
              style={{
                borderRadius: 24,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              <div className="tni-image-wrap" style={{ height: 240, borderRadius: '24px 24px 0 0' }}>
                <img
                  src={legalDoc}
                  alt="Corporate table with forensic folders and medical documents"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, rgba(4,19,34,0.4) 100%)' }} />
              </div>
              <div style={{ padding: '36px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span style={{ fontSize: 11, fontWeight: 800, color: COPPER, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 10 }}>
                  For Legal Teams
                </span>
                <SectionHeading as="h3" size={24} color={SAND} style={{ marginBottom: 14 }}>
                  Forensic-Grade Reporting
                </SectionHeading>
                <p style={{ fontSize: 15, color: 'rgba(245,237,227,0.75)', lineHeight: 1.65, margin: '0 0 28px', flex: 1 }}>
                  We deliver meticulous clinical evaluations, objective causation analysis, and clear functional impairment documentation. We maintain clinical integrity with strictly separated clinical vs. forensic billing records.
                </p>
                <Button to="/for-attorneys" variant="primary" style={{ alignSelf: 'flex-start', borderRadius: 99, padding: '12px 24px' }}>
                  Referral Portal →
                </Button>
              </div>
            </div>
          </div>
          </Reveal>
        </Container>
      </section>

      {/* ===================== CAUSATION/OBJECTIVE BAND ===================== */}
      <section className="tni-section tni-section--dark" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Glowing Neural Network Background */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <img
            src={neuralDark}
            alt=""
            aria-hidden
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(4,31,58,0.9) 0%, rgba(4,31,58,0.7) 50%, rgba(4,31,58,0.9) 100%)' }} />
        </div>

        <Container style={{ position: 'relative', zIndex: 10 }}>
          <Reveal>
          <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
            <div className="tni-dark-glow-card" style={{ padding: '48px 40px', borderRadius: 28, border: '1px solid rgba(255,255,255,0.08)' }}>
              <Eyebrow color={COPPER} style={{ marginBottom: 18 }}>Objective Verification</Eyebrow>
              <SectionHeading size={36} color={SAND} style={{ marginBottom: 20 }}>
                We measure what other evaluations only estimate.
              </SectionHeading>
              <p style={{ fontSize: 17, color: 'rgba(245,237,227,0.85)', lineHeight: 1.75, margin: 0 }}>
                Many traumatic brain injuries result in normal structural scans like CTs or MRIs. Our advanced quantitative EEG brain mapping visually captures and records functional dysregulation within specific neural networks, translating invisible symptoms into structured, medically defensible data.
              </p>
            </div>
          </div>
          </Reveal>
        </Container>
      </section>

      {/* ===================== INTERACTIVE SERVICES OVERVIEW ===================== */}
      <section id="services" className="tni-section tni-section--sand">
        <Container>
          <Reveal>
          <SectionIntro
            eyebrow="Our Capabilities"
            heading="Advanced medical diagnostics and clinical rehabilitation."
            lead="Choose a category below to explore our ten specialized services across neurological diagnosis, cognitive assessment, and recovery."
          />

          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <Link
              to="/services"
              className="tni-link-arrow"
              style={{ fontSize: 15, fontWeight: 700, color: COPPER }}
            >
              View full service directory <span className="tni-arrow">→</span>
            </Link>
          </div>

          {/* Interactive Tabs */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: 12,
              marginBottom: 48,
            }}
          >
            {(['All', 'Diagnostics', 'Assessment', 'Rehabilitation'] as ServiceCategory[]).map((tab) => (
              <button
                key={tab}
                className={`tni-tab-btn ${activeTab === tab ? 'is-active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'All' ? 'All Services' : tab}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {filteredServices.map((service) => (
              <article
                key={service.num}
                className="tni-svc-card"
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                  <div className="tni-svc-number">
                    {service.num}
                  </div>
                  <span className={`tni-svc-category tni-svc-category--${service.domain.toLowerCase()}`}>
                    {service.domain}
                  </span>
                </div>
                <SectionHeading as="h3" size={20} style={{ marginBottom: 12, lineHeight: 1.3 }}>
                  {service.title}
                </SectionHeading>
                <p style={{ fontSize: 14.5, color: 'rgba(7,53,94,0.72)', lineHeight: 1.6, margin: '0 0 20px', flex: 1 }}>
                  {service.body}
                </p>
                {service.hasLink && (
                  <Link
                    to={service.path!}
                    className="tni-link-arrow"
                    style={{ fontSize: 14, fontWeight: 700, color: COPPER, marginTop: 'auto' }}
                  >
                    Explore service details <span className="tni-arrow">→</span>
                  </Link>
                )}
              </article>
            ))}
          </div>
          </Reveal>
        </Container>
      </section>

      {/* ===================== CONDITIONS WE TREAT ===================== */}
      <section className="tni-section tni-section--sand tni-section--follow-section" style={{ position: 'relative', overflow: 'hidden' }}>
        <Container>
          <Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 64, alignItems: 'center' }}>
            {/* Image Side */}
            <div style={{ width: '100%', maxWidth: 440, margin: '0 auto' }}>
              <div className="tni-image-wrap" style={{ borderRadius: 28, boxShadow: '0 30px 60px rgba(7,53,94,0.12)', aspectRatio: '5/6' }}>
                <img
                  src={doctorScan}
                  alt="A clinician presenting a topographic brain map printout to a patient during an evaluation"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Text Side */}
            <div>
              <Eyebrow style={{ marginBottom: 16 }}>Clinical Indications</Eyebrow>
              <SectionHeading size={36} style={{ marginBottom: 18 }}>
                The symptoms we help patients understand.
              </SectionHeading>
              <p style={{ fontSize: 16, color: 'rgba(7,53,94,0.75)', lineHeight: 1.7, margin: '0 0 32px', maxWidth: '46ch' }}>
                You do not have to navigate recovery alone. An objective neurodiagnostic evaluation can help pinpoint brain dysregulation and establish a roadmap.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 20px' }}>
                {conditions.map((condition) => (
                  <div
                    key={condition}
                    className="tni-symptom-item"
                  >
                    <span className="tni-symptom-icon" aria-hidden />
                    <span style={{ fontSize: 14, fontWeight: 700, color: NAVY, lineHeight: 1.3 }}>
                      {condition}
                    </span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 36 }}>
                <Link
                  to="/conditions"
                  className="tni-link-arrow"
                  style={{ color: NAVY, fontWeight: 700, fontSize: 15 }}
                >
                  View full list of conditions &amp; symptoms <span className="tni-arrow">→</span>
                </Link>
              </div>
            </div>
          </div>
          </Reveal>
        </Container>
      </section>

      {/* ===================== WHAT TO EXPECT / TIMELINE ===================== */}
      <section id="journey" className="tni-section tni-section--cream">
        <Container>
          <Reveal>
          <SectionIntro
            eyebrow="Evaluation Journey"
            heading="A supportive, structured clinical path."
            lead="We guide you step-by-step from initial inquiry through objective diagnostics and specialized recovery."
          />
          <div className="tni-journey-track">
            {journey.map((step, index) => (
              <Fragment key={step.label}>
                {index > 0 && <div className="tni-journey-bridge" aria-hidden="true" />}
                <div className="tni-journey-card tni-glow-card tni-hover-card">
                  <div className="tni-journey-card__marker">
                    <JourneyStepIcon type={step.icon} />
                  </div>
                  <h3 className="tni-journey-card__title">{step.label}</h3>
                  <p className="tni-journey-card__copy">{step.copy}</p>
                </div>
              </Fragment>
            ))}
          </div>
          </Reveal>
        </Container>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <section className="tni-section tni-final-cta" style={{ padding: '100px 0' }}>
        <div className="tni-final-cta__glow" />
        <TopographicPattern tone="dark" style={{ opacity: 0.04, pointerEvents: 'none' }} />
        <Container>
          <Reveal>
            <div className="tni-final-cta__grid">
              {/* Left Column: Content */}
              <div className="tni-final-cta__content">
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: COPPER,
                      boxShadow: '0 0 0 4px rgba(225, 109, 34, 0.25)',
                    }}
                  />
                  <Eyebrow color={COPPER}>Get Started Today</Eyebrow>
                </div>
                
                <h2
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontWeight: 500,
                    fontSize: 'clamp(2.2rem, 5vw, 3rem)',
                    color: '#f5ede3',
                    lineHeight: 1.12,
                    margin: '0 0 20px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Your path to clear, <br />
                  <span style={{ fontStyle: 'italic', color: COPPER }}>objective</span> answers.
                </h2>
                
                <p style={{ fontSize: 16.5, color: 'rgba(245,237,227,0.8)', lineHeight: 1.7, margin: '0 0 36px', maxWidth: '50ch' }}>
                  We remove the guesswork from brain injury recovery. Whether you are a patient struggling with persistent symptoms or an attorney seeking forensic-grade documentation, our team is ready to help.
                </p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 32 }}>
                  <Button to="/contact" variant="primary" size="lg" style={{ borderRadius: 99, padding: '16px 36px', boxShadow: '0 12px 30px rgba(225,109,34,0.3)' }}>
                    Request Evaluation
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
                      color: '#f5ede3',
                    }}
                  >
                    Attorney Portal
                  </Button>
                </div>
                
                <div className="tni-final-cta__reassurance">
                  <div className="tni-final-cta__reassurance-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={COPPER} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Response within 1 business day</span>
                  </div>
                  <div className="tni-final-cta__reassurance-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={COPPER} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Houston &amp; San Antonio</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual */}
              <div className="tni-final-cta__visual">
                <div className="tni-final-cta__image-wrap">
                  <img src={patientConsult} alt="A clinician showing brain mapping results to a patient" />
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
