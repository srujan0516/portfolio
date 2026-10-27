import React from 'react';
import { portfolioData } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';
import { Trophy, Code2, Award, Users } from './Icons';

export const Achievements: React.FC = () => {
  const { achievements } = portfolioData;

  const getIcon = (id: string) => {
    switch (id) {
      case 'dsa-600':
        return <Code2 size={22} color="var(--accent-primary)" />;
      case 'academics':
        return <Award size={22} color="var(--accent-primary)" />;
      case 'hackathon':
        return <Trophy size={22} color="var(--accent-primary)" />;
      default:
        return <Users size={22} color="var(--accent-primary)" />;
    }
  };

  return (
    <section id="achievements" className="section">
      <div className="container">
        <SectionHeading
          label="MILESTONES & RECOGNITION"
          title="Achievements & Highlights"
          subtitle="Factual personal highlights reflecting dedication to problem-solving, academics, and peer collaboration."
        />

        <div className="grid-2">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="card"
              style={{
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--bg-accent-soft)',
                  border: '1px solid var(--accent-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {getIcon(item.id)}
              </div>

              <div>
                <h3
                  style={{
                    fontSize: '1.1875rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '4px',
                  }}
                >
                  {item.title}
                </h3>
                <div
                  style={{
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    color: 'var(--accent-primary)',
                    marginBottom: '8px',
                  }}
                >
                  {item.subtitle}
                </div>
                <p
                  style={{
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
