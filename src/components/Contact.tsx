import React, { useState } from 'react';
import { Mail, Phone, MapPin, Briefcase, ExternalLink, Copy, Check, FileText } from './Icons';
import { portfolioData } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';
import { SocialLinks } from './SocialLinks';

export const Contact: React.FC = () => {
  const { contact, personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading
          label="GET IN TOUCH"
          title="Let's Connect"
          subtitle="Have an opportunity or an interesting project in mind?"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)',
            gap: '40px',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Main Direct Contact Card */}
          <div
            className="card"
            style={{
              padding: '36px',
            }}
          >
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '12px',
              }}
            >
              Reach Out Directly
            </h3>

            <p
              style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '28px',
              }}
            >
              I'm open to internship and full-time software development opportunities, collaborative projects, and conversations about technology. Feel free to reach out via email or phone.
            </p>

            {/* Primary Action Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <a
                  href={contact.emailLink}
                  className="btn btn-primary"
                  style={{ flex: '1 1 200px', padding: '14px 22px' }}
                >
                  <Mail size={18} aria-hidden="true" />
                  <span>Send an Email</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn btn-secondary"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                  style={{ padding: '14px 18px' }}
                >
                  {copied ? <Check size={18} color="#059669" /> : <Copy size={18} />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <a
                  href={contact.phoneLink}
                  className="btn btn-secondary"
                  style={{ flex: '1 1 200px', padding: '12px 20px' }}
                >
                  <Phone size={17} aria-hidden="true" />
                  <span>Call +91 6305387164</span>
                </a>

                <a
                  href={contact.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-subtle"
                  style={{ flex: '1 1 200px', padding: '12px 20px' }}
                >
                  <FileText size={17} aria-hidden="true" />
                  <span>View Resume</span>
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Social Links Row */}
            <div>
              <div
                style={{
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: 'var(--text-muted)',
                  marginBottom: '12px',
                }}
              >
                Developer Profiles
              </div>
              <SocialLinks showLabels variant="contact" />
            </div>
          </div>

          {/* Contact Details & Metadata Card */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <div
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-lg)',
                padding: '30px',
              }}
            >
              <h4
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '20px',
                }}
              >
                Contact Information
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>
                    Full Name
                  </div>
                  <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {personal.fullName}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>
                    Email
                  </div>
                  <a
                    href={contact.emailLink}
                    style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--accent-primary)' }}
                  >
                    {contact.email}
                  </a>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>
                    Phone
                  </div>
                  <a
                    href={contact.phoneLink}
                    style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-primary)' }}
                  >
                    +91 {contact.phone}
                  </a>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>
                    Location
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9375rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                    <MapPin size={16} color="var(--accent-primary)" />
                    <span>{personal.location}</span>
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>
                    Availability Status
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9375rem', color: '#059669', fontWeight: 600 }}>
                    <Briefcase size={16} />
                    <span>{personal.availability}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }
      `}</style>
    </section>
  );
};
