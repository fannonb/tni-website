import { Link } from 'react-router-dom';
import { site, hasRealPhone } from '../data/site';

interface FooterProps {
  showCta?: boolean;
  minimal?: boolean;
}

export function Footer({ showCta: _showCta = true, minimal = false }: FooterProps) {
  const year = new Date().getFullYear();
  const showPhone = hasRealPhone();

  return (
    <footer className={`tni-footer${minimal ? ' tni-footer--minimal' : ''}`}>
      <div className="tni-footer__inner">
        {!minimal && (
        <nav className="tni-footer__nav" aria-label="Footer navigation">
          <div className="tni-footer__col tni-footer__brand">
            <span className="tni-footer__brandname">Texas NeuroTrauma Institute</span>
            <p className="tni-footer__blurb">
              Advancing neurotrauma diagnosis, recovery, and neurological health through physician-led, evidence-informed care.
            </p>
          </div>

          <div className="tni-footer__col">
            <h5 className="tni-footer-title">Services</h5>
            <ul className="tni-footer__list">
              <li><Link to="/physician-neurotrauma-evaluation" className="tni-footer-link">Neurotrauma Evaluation</Link></li>
              <li><Link to="/qeeg-service" className="tni-footer-link">qEEG Brain Mapping</Link></li>
              <li><Link to="/neurocognitive-testing" className="tni-footer-link">Neurocognitive Assessment</Link></li>
              <li><Link to="/neurofeedback" className="tni-footer-link">Neurofeedback</Link></li>
              <li><Link to="/vestibular-balance" className="tni-footer-link">Vestibular Rehabilitation</Link></li>
              <li><Link to="/headache-treatment" className="tni-footer-link">Headache Management</Link></li>
              <li><Link to="/memory-cognitive-rehab" className="tni-footer-link">Rehabilitation Services</Link></li>
            </ul>
          </div>

          <div className="tni-footer__col">
            <h5 className="tni-footer-title">For Attorneys</h5>
            <ul className="tni-footer__list">
              <li><Link to="/for-attorneys#case-portal" className="tni-footer-link tni-footer-link--emphasis">Referral Portal</Link></li>
              <li><Link to="/for-attorneys" className="tni-footer-link">Medico-Legal Services</Link></li>
              <li><Link to="/for-attorneys" className="tni-footer-link">Medical Records Review</Link></li>
              <li><Link to="/for-attorneys" className="tni-footer-link">Narrative Reports</Link></li>
              <li><Link to="/for-attorneys" className="tni-footer-link">Expert Witness Services</Link></li>
            </ul>
          </div>

          <div className="tni-footer__col">
            <h5 className="tni-footer-title">Locations &amp; Contact</h5>
            <ul className="tni-footer__list">
              <li className="tni-footer__location">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{site.locations.join(' · ')}</span>
              </li>
              <li className="tni-footer__location">
                <span style={{ width: 14, display: 'inline-block' }} aria-hidden />
                <span>{site.serviceArea}</span>
              </li>
              <li className="tni-footer__contact">
                <a href={site.emailHref} className="tni-footer-link">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  {site.email}
                </a>
              </li>
              {showPhone && (
                <li>
                  <a href={site.phoneHref} className="tni-footer-link">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
                    </svg>
                    {site.phoneDisplay}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </nav>
        )}

        <div className="tni-footer-bottom">
          <p className="tni-footer-disclosure">{site.disclosure}</p>
          <p className="tni-footer-copyright">
            © {year} {site.brand}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
