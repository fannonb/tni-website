import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, SectionHeading, Button } from '../components/ui';
import { Reveal } from '../components/Reveal';
import { TopographicPattern } from '../components/brand/TopographicPattern';
import conditionsHeroImage from '../assets/images/conditions_hero.png';
import {
  conditionGroups,
  evaluationPathways,
  conditionsPageCopy,
} from '../data/conditions';

function ConditionCheckIcon() {
  return (
    <span className="tni-conditions-item__icon" aria-hidden>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M2.5 7.2 5.4 10l6.1-6.6"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function Conditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="tni-conditions-page">
      <section className="tni-conditions-noir" aria-labelledby="conditions-hero-heading">
        <div className="tni-conditions-noir__bg">
          <TopographicPattern tone="dark" className="tni-conditions-noir__topo" style={{ opacity: 0.5 }} />
          <div className="tni-conditions-noir__glow" aria-hidden />
        </div>

        <Container style={{ position: 'relative', zIndex: 2 }}>
          <div className="tni-conditions-noir__grid">
            <div className="tni-conditions-noir__content">
              <h1 id="conditions-hero-heading" className="tni-conditions-noir__title">
                Conditions We Evaluate
              </h1>
              <p className="tni-conditions-noir__tagline">
                When trauma affects your brain, <span className="tni-conditions-noir__accent">you deserve to know why.</span>
              </p>
              <p className="tni-conditions-noir__lead">{conditionsPageCopy.heroLead}</p>
              <p className="tni-conditions-noir__trust">{conditionsPageCopy.heroNote}</p>

              <div className="tni-conditions-noir__actions">
                <Button to="/contact" variant="primary" size="lg" style={{ padding: '15px 28px', borderRadius: 99 }}>
                  Request an Evaluation
                </Button>
                <a href="#condition-list" className="tni-conditions-noir__secondary">
                  Browse conditions &amp; symptoms
                </a>
              </div>
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

      <section
        id="condition-list"
        className="tni-conditions-groups"
        aria-labelledby="conditions-browse-heading"
      >
        <Container>
          <Reveal>
            <div className="tni-conditions-groups__header">
              <SectionHeading as="h2" size={32} style={{ marginBottom: 12 }}>
                <span id="conditions-browse-heading">Browse by Diagnosis, Injury, or Symptoms</span>
              </SectionHeading>
              <p className="tni-conditions-groups__intro">{conditionsPageCopy.groupsIntro}</p>
            </div>
          </Reveal>

          <div className="tni-conditions-groups__grid">
            {conditionGroups.map((group, index) => (
              <Reveal key={group.id} delay={index * 60}>
                <section
                  className="tni-conditions-group"
                  aria-labelledby={`condition-group-${group.id}`}
                >
                  <h3 id={`condition-group-${group.id}`} className="tni-conditions-group__title">
                    {group.title}
                  </h3>

                  {group.subgroups ? (
                    <div className="tni-conditions-group__subgroups">
                      {group.subgroups.map((subgroup) => (
                        <div key={subgroup.title} className="tni-conditions-subgroup">
                          <h4 className="tni-conditions-subgroup__title">{subgroup.title}</h4>
                          <ul className="tni-conditions-item-list">
                            {subgroup.items.map((item) => (
                              <li key={item} className="tni-conditions-item">
                                <ConditionCheckIcon />
                                <span className="tni-conditions-item__label">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="tni-conditions-item-list">
                      {(group.items ?? []).map((item) => (
                        <li key={item} className="tni-conditions-item">
                          <ConditionCheckIcon />
                          <span className="tni-conditions-item__label">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="tni-conditions-pathways" aria-labelledby="conditions-pathways-heading">
        <TopographicPattern tone="light" className="tni-conditions-pathways__topo" style={{ opacity: 0.04 }} />
        <Container style={{ position: 'relative', zIndex: 1 }}>
          <Reveal>
            <div className="tni-conditions-pathways__header">
              <SectionHeading as="h2" size={32} style={{ marginBottom: 12 }}>
                <span id="conditions-pathways-heading">How We Evaluate These Concerns</span>
              </SectionHeading>
              <p className="tni-conditions-pathways__intro">{conditionsPageCopy.evaluateIntro}</p>
            </div>
          </Reveal>

          <Reveal delay={60}>
            <ul className="tni-conditions-pathways__list">
              {evaluationPathways.map((pathway) => (
                <li key={pathway.path}>
                  <Link to={pathway.path} className="tni-conditions-pathway">
                    <span className="tni-conditions-pathway__body">
                      <span className="tni-conditions-pathway__title">{pathway.title}</span>
                      <span className="tni-conditions-pathway__copy">{pathway.body}</span>
                    </span>
                    <span className="tni-conditions-pathway__cta">
                      {pathway.linkLabel}
                      <span aria-hidden="true"> →</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <p className="tni-conditions-pathways__more">
              Prefer to browse the full directory?{' '}
              <Link to="/services" className="tni-link-arrow">
                View all services <span className="tni-arrow">→</span>
              </Link>
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="tni-conditions-cta-section" aria-label="Request an evaluation">
        <Container>
          <Reveal>
            <div className="tni-conditions-cta">
              <SectionHeading size={28} style={{ marginBottom: 12 }}>
                Ready for a clearer clinical picture?
              </SectionHeading>
              <p className="tni-conditions-cta__text">{conditionsPageCopy.ctaLead}</p>
              <div className="tni-conditions-cta__actions">
                <Button to="/contact" variant="primary" size="lg" style={{ padding: '16px 36px', borderRadius: 99 }}>
                  Request an Evaluation
                </Button>
                <Button
                  to="/for-attorneys"
                  variant="ghost"
                  style={{ padding: '14px 24px', borderRadius: 99, fontSize: 14 }}
                >
                  Attorney referral pathway
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
