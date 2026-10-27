import React from 'react';
import { Calendar, CheckCircle2, ExternalLink } from './Icons';
import { portfolioData } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';

export const Certifications: React.FC = () => {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="section" style={{ backgroundColor: 'var(--bg-card)' }}>
      <div className="container">
        <SectionHeading
          label="PROFESSIONAL LEARNING"
          title="Certifications"
          subtitle="Foundational industry coursework and verified technical credentials."
        />

        <div className="grid-2" style={{ maxWidth: '960px' }}>
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '24px 28px',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '14px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      color: 'var(--accent-primary)',
                    }}
                  >
                    {cert.issuer}
                  </span>

                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      fontSize: '0.8125rem',
                      color: 'var(--text-muted)',
                      fontWeight: 500,
                    }}
                  >
                    <Calendar size={13} />
                    {cert.date}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.1875rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '10px',
                    lineHeight: 1.4,
                  }}
                >
                  {cert.title}
                </h3>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '16px',
                  borderTop: '1px solid var(--border-light)',
                  marginTop: '16px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={15} color="#059669" />
                  <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                    Completed
                  </span>
                </div>

                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-link"
                    style={{ fontSize: '0.8125rem' }}
                  >
                    <span>Verify Credential</span>
                    <ExternalLink size={13} />
                  </a>
                ) : (
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    Verified on Academic Record
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
