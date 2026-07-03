import { useEffect } from 'react';
import { Container, Eyebrow, SectionHeading, Button } from '../components/ui';
import { Reveal } from '../components/Reveal';
import { TopographicPattern } from '../components/brand/TopographicPattern';
import conditionsHeroImage from '../assets/images/conditions_hero.png';
import { conditions, focusAreas, conditionsPageCopy } from '../data/conditions';

const FOCUS_MARKER_COLORS = ['#e16d22', '#07355e', '#2e6b9e', '#8c3b0c', '#e16d22'] as const;

function FocusAreaIcon({ type }: { type: 'tbi' | 'concussion' | 'vehicle' | 'whiplash' | 'headache' }) {
  const props = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.75,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true as const,
  };

  switch (type) {
    case 'tbi':
      return (
        <svg {...props}>
          <path d="M12 3a7 7 0 0 0-7 7c0 2.8 1.6 5.2 4 6.4V20a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3.6c2.4-1.2 4-3.6 4-6.4a7 7 0 0 0-7-7Z" />
          <path d="M9.5 11.5h5M12 9v5" />
        </svg>
      );
    case 'concussion':
      return (
        <svg {...props}>
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      );
    case 'vehicle':
      return (
        <svg {...props}>
          <path d="M5 17h14M5 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm14 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
          <path d="M3 13h18l-2-6H5l-2 6Z" />
        </svg>
      );
    case 'whiplash':
      return (
        <svg {...props}>
          <path d="M4 12c2-4 4-4 6 0s4 4 6 0" />
          <path d="M4 16c2-4 4-4 6 0s4 4 6 0" />
        </svg>
      );
    case 'headache':
      return (
        <svg {...props}>
          <circle cx="12" cy="10" r="5" />
          <path d="M8.5 7.5 6 5M15.5 7.5 18 5M12 5V3" />
          <path d="M8 18c0-2.2 1.8-4 4-4s4 1.8 4 4" />
        </svg>
      );
  }
}

const FOCUS_ICON_TYPES = ['tbi', 'concussion', 'vehicle', 'whiplash', 'headache'] as const;

export default function Conditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="tni-conditions-page">
      <section className="tni-conditions-noir" aria-label="Conditions We Treat">
        <div className="tni-conditions-noir__bg">
          <TopographicPattern tone="dark" className="tni-conditions-noir__topo" style={{ opacity: 0.5 }} />
          <div className="tni-conditions-noir__glow" aria-hidden />
        </div>

        <Container style={{ position: 'relative', zIndex: 2 }}>
          <div className="tni-conditions-noir__grid">
            <div className="tni-conditions-noir__content">
              <p className="tni-conditions-noir__eyebrow">Conditions We Treat</p>
              <h1 className="tni-conditions-noir__title">
                When trauma affects your brain, <span className="tni-conditions-noir__accent">you deserve to know why.</span>
              </h1>
              <p className="tni-conditions-noir__lead">
                {conditionsPageCopy.heroLead}
              </p>

              <a href="#condition-list" className="tni-conditions-noir__scroll-link">
                See conditions we evaluate
                <span className="tni-conditions-noir__scroll-arrow" aria-hidden>↓</span>
              </a>
            </div>

            <div className="tni-conditions-noir__visual">
              <div className="tni-conditions-noir-frame">
                <img
                  src={conditionsHeroImage}
                  alt="Patient in consultation with care team"
                  className="tni-conditions-noir-frame__photo"
                />
                <div className="tni-conditions-noir-frame__overlay" aria-hidden />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="condition-list" className="tni-conditions-symptoms" aria-label="Symptoms and presentations">
        <Container>
          <div className="tni-conditions-symptoms__layout">
            <Reveal>
              <div className="tni-conditions-symptoms__header">
                <Eyebrow style={{ marginBottom: 14 }}>Commonly Evaluated</Eyebrow>
                <SectionHeading size={32} style={{ marginBottom: 14 }}>
                  Symptoms &amp; presentations we evaluate
                </SectionHeading>
                <p className="tni-conditions-symptoms__intro">{conditionsPageCopy.symptomsIntro}</p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <ul className="tni-conditions-symptoms-list">
                {conditions.map((condition) => (
                  <li key={condition} className="tni-conditions-symptoms-list__item">
                    <span className="tni-conditions-symptoms-list__mark" aria-hidden />
                    <span className="tni-conditions-symptoms-list__name">{condition}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="tni-conditions-focus" aria-label="Areas of clinical focus">
        <TopographicPattern tone="light" className="tni-conditions-focus__topo" style={{ opacity: 0.04 }} />
        <Container style={{ position: 'relative', zIndex: 1 }}>
          <Reveal>
            <div className="tni-conditions-focus__header">
              <Eyebrow style={{ marginBottom: 14 }}>Focus Areas</Eyebrow>
              <SectionHeading size={32} style={{ marginBottom: 14 }}>
                Areas of specialized clinical focus
              </SectionHeading>
              <p className="tni-conditions-focus__intro">{conditionsPageCopy.focusIntro}</p>
              <span className="tni-conditions-focus__tag">Clinical specialties</span>
            </div>
          </Reveal>

          <Reveal>
            <div className="tni-conditions-focus-grid">
              {focusAreas.map((area, index) => (
                <article key={area.title} className="tni-conditions-focus-card">
                  <span
                    className="tni-conditions-focus-card__marker"
                    style={{ background: `${FOCUS_MARKER_COLORS[index % FOCUS_MARKER_COLORS.length]}14`, color: FOCUS_MARKER_COLORS[index % FOCUS_MARKER_COLORS.length] }}
                    aria-hidden
                  >
                    <FocusAreaIcon type={FOCUS_ICON_TYPES[index]} />
                  </span>
                  <h3 className="tni-conditions-focus-card__title">{area.title}</h3>
                  <p className="tni-conditions-focus-card__body">{area.body}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="tni-conditions-cta-section">
        <Container>
          <Reveal>
            <div className="tni-conditions-cta">
              <SectionHeading size={28} style={{ marginBottom: 12 }}>
                Not sure which pathway fits your symptoms?
              </SectionHeading>
              <p className="tni-conditions-cta__text">
                Our team can help direct you to the right evaluation based on your injury history, symptoms, and recovery
                goals.
              </p>
              <div className="tni-conditions-cta__actions">
                <Button to="/contact" variant="primary" size="lg" style={{ padding: '16px 36px', borderRadius: 99 }}>
                  Request an Evaluation
                </Button>
                <Button to="/services" variant="ghost" style={{ padding: '15px 28px', borderRadius: 99 }}>
                  View Our Services
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
