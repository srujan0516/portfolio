import React from 'react';
import { Check, MapPin, GraduationCap, Code } from './Icons';
import { portfolioData } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';

export const About: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--bg-card)' }}>
      <div className="container">
        <SectionHeading
          label="A LITTLE ABOUT MY JOURNEY"
          title="About Me"
          subtitle="A perspective on my background, technical focus, and engineering values."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)',
            gap: '48px',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Left Column: Narrative Text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <p style={{ fontSize: '1.0625rem', color: 'var(--text-primary)', lineHeight: 1.75 }}>
              I'm <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Sai Srujan</strong> (full name: <em>{personal.fullName}</em>), a Computer Science and Engineering undergraduate at Gokaraju Rangaraju Institute of Engineering and Technology (GRIET), Hyderabad, graduating in 2027.
            </p>

            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
              I have a strong interest in software engineering, logical thinking, and building technology that solves practical problems. <strong>Java</strong> is my primary programming language, and solving <strong>600+ Data Structures and Algorithms problems</strong> has helped me strengthen my problem-solving abilities and algorithmic thinking.
            </p>

            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
              Alongside DSA, I have worked on web application projects involving React, Node.js, Firebase, MongoDB, and other web technologies. My project interests include real-time information sharing, community support platforms, and AI-assisted learning experiences.
            </p>

            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
              I also enjoy collaborating with other students through developer-community activities, hackathons, and technology events. These experiences have helped me understand the importance of teamwork, communication, and turning ideas into working solutions. I believe in continuous learning, writing maintainable code, understanding problems before implementing solutions, and developing applications that provide real value.
            </p>

            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
              My current goal is to grow as a software engineer by contributing to meaningful projects and working with teams that value problem-solving, learning, and quality engineering.
            </p>
          </div>

          {/* Right Column: Key Attributes & Summary Card */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <div
              style={{
                backgroundColor: 'var(--bg-page)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-lg)',
                padding: '28px',
              }}
            >
              <h3
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '16px',
                }}
              >
                Key Focus & Attributes
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {personal.attributes.map((attr) => (
                  <div
                    key={attr}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                    }}
                  >
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--bg-accent-soft)',
                        border: '1px solid var(--accent-border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent-primary)',
                        flexShrink: 0,
                      }}
                    >
                      <Check size={14} strokeWidth={2.5} />
                    </div>
                    <span
                      style={{
                        fontSize: '0.9375rem',
                        fontWeight: 500,
                        color: 'var(--text-primary)',
                      }}
                    >
                      {attr}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Context Card */}
            <div
              style={{
                backgroundColor: 'var(--bg-accent-subtle)',
                border: '1px solid var(--accent-border)',
                borderRadius: 'var(--radius-lg)',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <GraduationCap size={18} color="var(--accent-primary)" />
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Undergraduate (2023–2027)
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Code size={18} color="var(--accent-primary)" />
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Primary Language: Java
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MapPin size={18} color="var(--accent-primary)" />
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Location: Hyderabad, Telangana, India
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
};
