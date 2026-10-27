import React from 'react';
import { portfolioData } from '../data/portfolio';
import { SocialLinks } from './SocialLinks';
import { MapPin, ArrowUp } from './Icons';

export const Footer: React.FC = () => {
  const { personal, contact } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-footer)',
        borderTop: '1px solid var(--border-light)',
        paddingTop: '64px',
        paddingBottom: '44px',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr) minmax(0, 1fr)',
            gap: '40px',
            marginBottom: '48px',
          }}
          className="footer-grid"
        >
          {/* Col 1: Identity & Role */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--bg-accent-soft)',
                  border: '1px solid var(--accent-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '0.875rem',
                  color: 'var(--accent-primary)',
                }}
              >
                {personal.initials}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                {personal.displayName}
              </h3>
            </div>

            <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: '14px', maxWidth: '380px' }}>
              Software Developer | Java | DSA | Web Development
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              <MapPin size={15} color="var(--accent-primary)" />
              <span>Location: {personal.displayCity}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <div
              style={{
                fontSize: '0.8125rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--text-primary)',
                marginBottom: '16px',
              }}
            >
              Navigation
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="#home" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Home</a>
              <a href="#about" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>About</a>
              <a href="#skills" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Skills</a>
              <a href="#projects" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Projects</a>
              <a href="#experience" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Experience</a>
              <a href="#achievements" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Achievements</a>
              <a href="#contact" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Contact</a>
            </div>
          </div>

          {/* Col 3: Connect & Top Button */}
          <div>
            <div
              style={{
                fontSize: '0.8125rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--text-primary)',
                marginBottom: '16px',
              }}
            >
              Profiles & Resume
            </div>
            <div style={{ marginBottom: '20px' }}>
              <SocialLinks compact variant="footer" />
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="btn btn-secondary btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              aria-label="Back to top of page"
            >
              <ArrowUp size={14} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div
          style={{
            paddingTop: '28px',
            borderTop: '1px solid var(--border-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
            © {currentYear} {personal.displayName}. All rights reserved.
          </p>

          <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
            Designed & Built with React, TypeScript & Vite
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  );
};
