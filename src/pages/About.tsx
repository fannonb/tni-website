import { useEffect } from 'react';
import { Container, SectionHeading } from '../components/ui';
import { Reveal } from '../components/Reveal';
import { TopographicPattern } from '../components/brand/TopographicPattern';
import { HeroPhoto } from '../components/HeroPhoto';
import physicianPortrait from '../assets/images/dr_derrick_randdolf.png';
import {
  aboutClosing,
  aboutCredentials,
  aboutHero,
  clinicalBackground,
  education,
  interestGroups,
  medicoLegal,
  practices,
} from '../data/about';

function CheckMark() {
  return (
    <span className="tni-about-check" aria-hidden>
      <svg
        width="11"
        height="11"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </span>
  );
}

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="tni-about-page">
      <section className="tni-about-hero" aria-labelledby="about-hero-heading">
        <div className="tni-about-hero__bg">
          <TopographicPattern tone="dark" className="tni-about-hero__topo" style={{ opacity: 0.45 }} />
          <div className="tni-about-hero__glow" aria-hidden />
        </div>

        <Container style={{ position: 'relative', zIndex: 2 }}>
          <div className="tni-about-hero__grid">
            <div className="tni-about-hero__content">
              <h1 id="about-hero-heading" className="tni-about-hero__title">
                {aboutHero.name}
              </h1>
              <p className="tni-about-hero__role">{aboutHero.role}</p>
              <p className="tni-about-hero__summary">{aboutHero.summary}</p>
              <div className="tni-about-hero__credentials">
                <p className="tni-about-hero__credentials-label">Clinical Background</p>
                <p className="tni-about-hero__credentials-value">{aboutHero.clinicalBackground}</p>
              </div>
            </div>

            <div className="tni-about-hero__visual">
              <HeroPhoto
                src={physicianPortrait}
                    alt="Dr. Derrick Enoch Randdolf, founder of Texas NeuroTrauma Institute"
                tone="dark"
                aspectRatio="4 / 5"
                overlay
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="tni-about-facts" aria-label="Credentials at a glance">
        <Container>
          <ul className="tni-about-facts__grid">
            {aboutCredentials.map((credential) => (
              <li key={credential.label} className="tni-about-facts__item">
                <span className="tni-about-facts__label">{credential.label}</span>
                <span className="tni-about-facts__value">{credential.value}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="tni-about-background" aria-labelledby="overview-heading">
        <Container>
          <div className="tni-about-background__layout">
            <Reveal>
              <header className="tni-about-section-intro">
                <SectionHeading as="h2" size={34}>
                  <span id="overview-heading">Overview</span>
                </SectionHeading>
              </header>
            </Reveal>

            <Reveal delay={80}>
              <div className="tni-about-prose">
                {clinicalBackground.map((paragraph) => (
                  <p key={paragraph.slice(0, 52)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="tni-about-practices" aria-labelledby="practices-heading">
        <Container>
          <Reveal>
            <header className="tni-about-practices__header">
              <SectionHeading as="h2" size={34}>
                <span id="practices-heading">Medical Practices</span>
              </SectionHeading>
            </header>
          </Reveal>

          <div className="tni-about-practices__grid">
            {practices.map((practice, index) => (
              <Reveal key={practice.id} delay={index * 90}>
                <article className="tni-about-practice">
                  <span className="tni-about-practice__number" aria-hidden>
                    {index + 1}
                  </span>
                  <h3 className="tni-about-practice__name">{practice.name}</h3>
                  <p className="tni-about-practice__focus">{practice.focus}</p>
                  <p className="tni-about-practice__body">{practice.body}</p>
                  <p className="tni-about-practice__body">{practice.detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="tni-about-credentials" aria-label="Medico-legal evaluations and education">
        <Container>
          <div className="tni-about-credentials__grid">
            <Reveal>
              <article className="tni-about-credential-block">
                <SectionHeading as="h2" size={30} style={{ marginBottom: 16 }}>
                  Medico-Legal Evaluations
                </SectionHeading>
                <p className="tni-about-credential-block__lead">{medicoLegal.body}</p>
                <ul className="tni-about-checklist">
                  {medicoLegal.services.map((service) => (
                    <li key={service}>
                      <CheckMark />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <Reveal delay={80}>
              <article className="tni-about-credential-block tni-about-credential-block--education">
                <SectionHeading as="h2" size={30} style={{ marginBottom: 20 }}>
                  Education &amp; Training
                </SectionHeading>
                <ol className="tni-about-education">
                  {education.map((item, index) => (
                    <li key={item.institution}>
                      <span className="tni-about-education__number" aria-hidden>
                        {index + 1}
                      </span>
                      <span>
                        <strong>{item.institution}</strong>
                        <small>{item.detail}</small>
                      </span>
                    </li>
                  ))}
                </ol>
              </article>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="tni-about-interests" aria-labelledby="interests-heading">
        <Container>
          <Reveal>
            <header className="tni-about-interests__header">
              <SectionHeading as="h2" size={34}>
                <span id="interests-heading">Professional Interests</span>
              </SectionHeading>
            </header>
          </Reveal>

          <div className="tni-about-interests__grid">
            {interestGroups.map((group, index) => (
              <Reveal key={group.title} delay={index * 70}>
                <section className="tni-about-interest-group">
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="tni-about-vision" aria-labelledby="vision-heading">
        <Container>
          <div className="tni-about-vision__layout">
            <Reveal>
              <header className="tni-about-section-intro">
                <SectionHeading as="h2" size={34}>
                  <span id="vision-heading">Vision</span>
                </SectionHeading>
              </header>
            </Reveal>

            <Reveal delay={80}>
              <div className="tni-about-prose">
                <p>{aboutClosing}</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </div>
  );
}
