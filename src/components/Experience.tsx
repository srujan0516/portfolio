import React from 'react';
import { Users, Calendar } from './Icons';
import { portfolioData } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';

export const Experience: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section" style={{ backgroundColor: 'var(--bg-card)' }}>
      <div className="container">
        <SectionHeading
          label="COLLABORATION & INITIATIVE"
          title="Experience & Community"
          subtitle="Learning, collaborating, and building beyond the classroom."
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            maxWidth: '920px',
          }}
        >
          {experience.map((item) => (
            <div
              key={item.id}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                padding: '26px 30px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '8px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Users size={16} color="var(--accent-primary)" />
                  <span
                    style={{
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      color: 'var(--accent-primary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {item.organization}
                  </span>
                </div>

                {item.dateOrDuration && (
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
                    {item.dateOrDuration}
                  </span>
                )}
              </div>

              <div>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '4px',
                  }}
                >
                  {item.title}
                </h3>
                {item.roleType && (
                  <div
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                      marginBottom: '10px',
                    }}
                  >
                    {item.roleType}
                  </div>
                )}
              </div>

              <p
                style={{
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
