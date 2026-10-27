import React from 'react';
import { Calendar, Building2 } from './Icons';
import { portfolioData } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeading
          label="ACADEMIC BACKGROUND"
          title="Education"
          subtitle="Formal academic foundations in Computer Science, Mathematics, and Engineering."
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            maxWidth: '920px',
          }}
        >
          {education.map((item, idx) => (
            <div
              key={item.institution}
              className="card"
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1fr) auto',
                gap: '24px',
                alignItems: 'start',
                position: 'relative',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '8px',
                    flexWrap: 'wrap',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      color: 'var(--accent-primary)',
                      backgroundColor: 'var(--bg-accent-soft)',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-sm)',
                    }}
                  >
                    <Calendar size={13} />
                    {item.duration}
                  </span>

                  <span
                    style={{
                      fontSize: '0.8125rem',
                      color: 'var(--text-muted)',
                      fontWeight: 500,
                    }}
                  >
                    Entry {idx + 1}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '6px',
                  }}
                >
                  {item.degree}
                </h3>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)',
                    fontWeight: 500,
                    marginBottom: '14px',
                  }}
                >
                  <Building2 size={16} color="var(--accent-primary)" />
                  <span>{item.institution}</span>
                </div>

                <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </div>

              {/* Score Display Card */}
              <div
                style={{
                  backgroundColor: 'var(--bg-subtle)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px 20px',
                  textAlign: 'center',
                  minWidth: '130px',
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--text-muted)',
                    marginBottom: '4px',
                  }}
                >
                  {item.scoreLabel}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.75rem',
                    fontWeight: 800,
                    color: 'var(--accent-primary)',
                    lineHeight: 1.1,
                  }}
                >
                  {item.score}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
