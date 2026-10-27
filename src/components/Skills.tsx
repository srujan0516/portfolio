import React from 'react';
import { portfolioData } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';
import { Star } from './Icons';

export const Skills: React.FC = () => {
  const { skillCategories } = portfolioData;

  return (
    <section id="skills" className="section" style={{ backgroundColor: 'var(--bg-card)' }}>
      <div className="container">
        <SectionHeading
          label="TOOLS I WORK WITH"
          title="Technical Skills"
          subtitle="Carefully categorized technologies, languages, and core computer science foundations."
        />

        <div className="grid-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: '1.1875rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '4px',
                  }}
                >
                  {category.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-muted)',
                    marginBottom: '20px',
                  }}
                >
                  {category.subtitle}
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px',
                  }}
                >
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`tech-pill ${skill.primary ? 'primary' : ''}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: skill.primary ? '6px 14px' : '6px 12px',
                        fontSize: skill.primary ? '0.875rem' : '0.8125rem',
                        boxShadow: skill.primary ? '0 1px 3px rgba(66, 99, 235, 0.15)' : 'none',
                      }}
                    >
                      {skill.primary && <Star size={13} fill="currentColor" strokeWidth={0} />}
                      <span>{skill.name}</span>
                      {skill.tag && (
                        <span
                          style={{
                            fontSize: '0.6875rem',
                            fontWeight: 600,
                            opacity: 0.8,
                            marginLeft: '4px',
                            padding: '1px 5px',
                            borderRadius: '4px',
                            backgroundColor: skill.primary ? 'rgba(66, 99, 235, 0.12)' : 'rgba(0,0,0,0.06)',
                          }}
                        >
                          {skill.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
