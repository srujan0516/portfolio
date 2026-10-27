import React from 'react';
import { portfolioData } from '../data/portfolio';

export const QuickHighlights: React.FC = () => {
  const { stats } = portfolioData.personal;

  return (
    <section
      aria-label="Key Highlights"
      style={{
        paddingTop: '0',
        paddingBottom: '56px',
      }}
    >
      <div className="container">
        <div
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-sm)',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            overflow: 'hidden',
          }}
          className="highlights-strip"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              style={{
                padding: '28px 24px',
                textAlign: 'center',
                borderRight: index < stats.length - 1 ? '1px solid var(--border-light)' : 'none',
                position: 'relative',
              }}
              className="highlight-item"
            >
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                  fontWeight: 800,
                  color: 'var(--accent-primary)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                  marginBottom: '6px',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '4px',
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontSize: '0.8125rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.4,
                }}
              >
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 680px) {
          .highlights-strip {
            grid-template-columns: 1fr !important;
          }
          .highlight-item {
            border-right: none !important;
            border-bottom: 1px solid var(--border-light);
            padding: 20px 18px !important;
          }
          .highlight-item:last-child {
            border-bottom: none !important;
          }
        }
      `}</style>
    </section>
  );
};
