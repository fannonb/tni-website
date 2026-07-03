import { cloneElement, isValidElement, useState, type FormEvent, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Container, Eyebrow, Button } from '../components/ui';
import { Reveal } from '../components/Reveal';
import { TopographicPattern } from '../components/brand/TopographicPattern';
import { site } from '../data/site';
import { contactPageCopy } from '../data/contactPage';
import contactHeroImage from '../assets/images/contact_hero.png';

const ICONS: Record<string, ReactNode> = {
  call: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
    </svg>
  ),
  email: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  ),
  visit: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  ),
};

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  referredBy: string;
  reason: string;
}

type FormField = keyof FormState;

const initialState: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  referredBy: '',
  reason: '',
};

interface ContactFieldProps {
  id: string;
  label: string;
  required?: boolean;
  optional?: boolean;
  hint?: string;
  error?: string;
  children: ReactNode;
}

function ContactField({ id, label, required, optional, hint, error, children }: ContactFieldProps) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined;

  const fieldControl = isValidElement(children)
    ? cloneElement(children as React.ReactElement<Record<string, unknown>>, {
        'aria-describedby': describedBy,
        'aria-invalid': error ? true : undefined,
      })
    : children;

  return (
    <div className={`tni-contact-field${error ? ' tni-contact-field--error' : ''}`}>
      <div className="tni-contact-field__head">
        <label className="tni-contact-label" htmlFor={id}>
          {label}
          {required && <span className="tni-contact-required" aria-hidden="true"> *</span>}
        </label>
        {optional && <span className="tni-contact-optional">Optional</span>}
      </div>
      {hint && (
        <p id={hintId} className="tni-contact-hint">
          {hint}
        </p>
      )}
      {fieldControl}
      {error && (
        <p id={errorId} className="tni-contact-field__error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<FormField, string>>>({});

  const update = (field: FormField) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (fieldErrors[field]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validate = (): Partial<Record<FormField, string>> => {
    const errors: Partial<Record<FormField, string>> = {};
    if (!form.firstName.trim()) errors.firstName = 'First name is required.';
    if (!form.lastName.trim()) errors.lastName = 'Last name is required.';
    if (!form.email.trim()) {
      errors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errors.email = 'Enter a valid email address.';
    }
    if (!form.reason.trim()) errors.reason = 'Please describe your reason for evaluation.';
    return errors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    setFieldErrors({});
    setSubmitted(true);
  };

  const contactMethods = [
    { icon: 'call' as const, label: 'Phone', value: site.phoneDisplay, href: site.phoneHref },
    { icon: 'email' as const, label: 'Email', value: site.email, href: site.emailHref },
    {
      icon: 'visit' as const,
      label: 'Locations',
      value: site.locations.join(' · '),
      href: undefined as string | undefined,
    },
  ];

  return (
    <div className="tni-contact-page">
      <section className="tni-contact-hero" aria-labelledby="contact-heading">
        <Container width={1280}>
          <Reveal>
            <div className="tni-contact-hero__banner">
              <TopographicPattern tone="dark" className="tni-contact-hero__topo" style={{ opacity: 0.4 }} />
              <div className="tni-contact-hero__glow" aria-hidden />
              <div className="tni-contact-hero__media">
                <img
                  src={contactHeroImage}
                  alt="Patient consultation with a neurotrauma clinician"
                  className="tni-contact-hero__img"
                />
              </div>

              <div className="tni-contact-hero__content">
                <Eyebrow style={{ marginBottom: 14 }}>Contact</Eyebrow>
                <h1 id="contact-heading" className="tni-contact-hero__title">
                  Request an <span className="tni-contact__accent">evaluation.</span>
                </h1>
                <p className="tni-contact-hero__intro">{contactPageCopy.intro}</p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="tni-contact" aria-label="Contact form and details">
        <Container width={1280}>
          <div className="tni-contact__grid">
            <Reveal className="tni-contact__info-wrap">
              <div className="tni-contact-info">
                <Eyebrow style={{ marginBottom: 12 }}>{contactPageCopy.infoEyebrow}</Eyebrow>
                <h2 className="tni-contact-info__title">{contactPageCopy.infoHeading}</h2>
                <div className="tni-contact-info__body">
                  <p>{contactPageCopy.infoBody}</p>
                </div>

                <div className="tni-contact-details">
                  <h3 className="tni-contact-details__title">{contactPageCopy.contactDetailsTitle}</h3>
                  <ul className="tni-contact-methods">
                    {contactMethods.map((item) => {
                      const inner = (
                        <>
                          <span className="tni-contact-methods__icon">{ICONS[item.icon]}</span>
                          <span className="tni-contact-methods__text">
                            <span className="tni-contact-methods__label">{item.label}</span>
                            <span className="tni-contact-methods__value">{item.value}</span>
                          </span>
                        </>
                      );
                      return (
                        <li key={item.label} className="tni-contact-methods__item">
                          {item.href ? (
                            <a href={item.href} className="tni-contact-methods__link">
                              {inner}
                            </a>
                          ) : (
                            <div className="tni-contact-methods__link tni-contact-methods__link--static">
                              {inner}
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="tni-contact-attorney">
                  <p className="tni-contact-attorney__label">Referring a patient?</p>
                  <Link to="/for-attorneys" className="tni-contact-attorney__link">
                    Visit the Attorney Referral Portal →
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal className="tni-contact__form-wrap" delay={80}>
              <form className="tni-contact-form" onSubmit={handleSubmit} noValidate>
                <Eyebrow style={{ marginBottom: 20 }}>Evaluation Request</Eyebrow>

                {submitted ? (
                  <div className="tni-contact-success" role="status">
                    <p className="tni-contact-success__title">Thank you, {form.firstName}.</p>
                    <p className="tni-contact-success__body">
                      Your evaluation request has been received. {site.responsePromise}
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="tni-contact-form__row">
                      <ContactField id="firstName" label="First name" required error={fieldErrors.firstName}>
                        <input
                          id="firstName"
                          className="tni-contact-input"
                          value={form.firstName}
                          onChange={update('firstName')}
                          autoComplete="given-name"
                        />
                      </ContactField>
                      <ContactField id="lastName" label="Last name" required error={fieldErrors.lastName}>
                        <input
                          id="lastName"
                          className="tni-contact-input"
                          value={form.lastName}
                          onChange={update('lastName')}
                          autoComplete="family-name"
                        />
                      </ContactField>
                    </div>

                    <ContactField id="email" label="Email" required error={fieldErrors.email}>
                      <input
                        id="email"
                        type="email"
                        className="tni-contact-input"
                        value={form.email}
                        onChange={update('email')}
                        autoComplete="email"
                      />
                    </ContactField>

                    <ContactField
                      id="phone"
                      label="Phone"
                      optional
                      hint="Helpful if we need to reach you quickly about scheduling."
                    >
                      <input
                        id="phone"
                        type="tel"
                        className="tni-contact-input"
                        value={form.phone}
                        onChange={update('phone')}
                        autoComplete="tel"
                      />
                    </ContactField>

                    <ContactField
                      id="referredBy"
                      label="Referral source"
                      optional
                      hint="Physician, attorney, or other referring provider — if applicable."
                    >
                      <input
                        id="referredBy"
                        className="tni-contact-input"
                        value={form.referredBy}
                        onChange={update('referredBy')}
                        autoComplete="off"
                      />
                    </ContactField>

                    <ContactField id="reason" label="Reason for evaluation" required error={fieldErrors.reason}>
                      <textarea
                        id="reason"
                        rows={4}
                        className="tni-contact-input tni-contact-input--textarea"
                        value={form.reason}
                        onChange={update('reason')}
                      />
                    </ContactField>

                    <Button type="submit" variant="primary" size="lg" full>
                      Submit Evaluation Request
                    </Button>

                    <p className="tni-contact-form__disclaimer">
                      {contactPageCopy.privacyNote} Not for medical emergencies — call 911 if urgent.
                    </p>
                  </>
                )}
              </form>
            </Reveal>
          </div>
        </Container>
      </section>
    </div>
  );
}
