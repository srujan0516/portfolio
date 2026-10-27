import React from 'react';
import { ArrowRight, FileText, MapPin, CheckCircle2 } from './Icons';
import { portfolioData } from '../data/portfolio';
import { SocialLinks } from './SocialLinks';

export const Hero: React.FC = () => {
  const { personal, contact } = portfolioData;

  return (
    <section id="home" className="section" style={{ paddingTop: '56px', paddingBottom: '72px' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.35fr) minmax(0, 0.85fr)',
            gap: '48px',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Information & Actions */}
          <div>
            {/* Availability Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--bg-accent-soft)',
                border: '1px solid var(--accent-border)',
                marginBottom: '20px',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#10B981',
                  display: 'inline-block',
                }}
              />
              <span
                style={{
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  color: 'var(--text-accent)',
                  letterSpacing: '0.01em',
                }}
              >
                {personal.availability}
              </span>
            </div>

            {/* Eyebrow */}
            <div
              style={{
                fontSize: '0.8125rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '8px',
              }}
            >
              HELLO, I'M
            </div>

            {/* Main Name Heading */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
                fontWeight: 800,
                letterSpacing: '-0.035em',
                color: 'var(--text-primary)',
                lineHeight: 1.1,
                marginBottom: '16px',
              }}
            >
              {personal.displayName}
            </h1>

            {/* Professional Headline */}
            <p
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.125rem, 2.2vw, 1.375rem)',
                fontWeight: 600,
                color: 'var(--text-primary)',
                lineHeight: 1.45,
                marginBottom: '20px',
              }}
            >
              {personal.headline}
            </p>

            {/* Intro paragraph */}
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '32px',
                maxWidth: '620px',
              }}
            >
              I'm a Computer Science and Engineering undergraduate at GRIET, Hyderabad, graduating in 2027. I enjoy solving challenging programming problems and building practical software applications. With 600+ DSA problems solved and hands-on experience with web development projects, I am continuously strengthening my engineering skills and preparing to contribute to real-world software products.
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '14px',
                marginBottom: '28px',
              }}
            >
              <a href="#projects" className="btn btn-primary">
                <span>View My Projects</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>

              <a
                href={contact.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                aria-label="View Sai Srujan Resume on Google Drive (opens in new tab)"
              >
                <FileText size={16} aria-hidden="true" />
                <span>View Resume</span>
              </a>

              <a href="#contact" className="btn-link" style={{ marginLeft: '4px' }}>
                <span>Get in Touch</span>
                <ArrowRight size={14} aria-hidden="true" />
              </a>
            </div>

            {/* Compact Social Row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: 'var(--text-muted)',
                }}
              >
                Connect:
              </span>
              <SocialLinks compact />
            </div>
          </div>

          {/* Right Column: Minimalist Initials & Architectural Visual */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '380px',
                aspectRatio: '1 / 1',
                borderRadius: '24px',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '36px',
                overflow: 'hidden',
              }}
            >
              {/* Subtle background geometric accent */}
              <div
                style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '-40px',
                  width: '160px',
                  height: '160px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg-accent-soft)',
                  opacity: 0.7,
                  zIndex: 0,
                  pointerEvents: 'none',
                }}
              />

              {/* Top metadata strip inside visual */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <MapPin size={14} color="var(--accent-primary)" />
                  <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                    {personal.displayCity}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    color: 'var(--accent-primary)',
                    backgroundColor: 'var(--bg-accent-soft)',
                    padding: '3px 8px',
                    borderRadius: 'var(--radius-sm)',
                  }}
                >
                  B.Tech CSE '27
                </span>
              </div>

              {/* Central SS Monogram */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  textAlign: 'center',
                  margin: 'auto 0',
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100px',
                    height: '100px',
                    borderRadius: '24px',
                    backgroundColor: 'var(--bg-accent-soft)',
                    border: '1.5px solid var(--accent-border)',
                    marginBottom: '16px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '2.5rem',
                      fontWeight: 800,
                      color: 'var(--accent-primary)',
                      letterSpacing: '-0.04em',
                    }}
                  >
                    {personal.initials}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: '1.1875rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '4px',
                  }}
                >
                  {personal.displayName}
                </h3>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                  GRIET · Hyderabad
                </p>
              </div>

              {/* Bottom engineering capability badge */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--bg-subtle)',
                  border: '1px solid var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} color="var(--accent-primary)" />
                  <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    Primary Focus
                  </span>
                </div>
                <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--accent-primary)' }}>
                  Java & DSA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 890px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
};
