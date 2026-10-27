import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ExternalLink } from './Icons';
import { portfolioData } from '../data/portfolio';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { personal, contact } = portfolioData;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: isScrolled ? 'rgba(250, 250, 248, 0.94)' : 'rgba(250, 250, 248, 0.82)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${isScrolled ? 'var(--border-light)' : 'rgba(232, 233, 230, 0.6)'}`,
        transition: 'all var(--transition-fast)',
        height: 'var(--navbar-height)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        {/* Brand Logo & Name */}
        <a
          href="#home"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
          }}
          aria-label="Sai Srujan Portfolio Home"
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--bg-accent-soft)',
              border: '1px solid var(--accent-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '0.9375rem',
              color: 'var(--accent-primary)',
              letterSpacing: '-0.02em',
              flexShrink: 0,
            }}
          >
            {personal.initials}
          </div>
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '1.0625rem',
              color: 'var(--text-primary)',
              letterSpacing: '-0.015em',
            }}
          >
            {personal.displayName}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '24px',
          }}
          className="desktop-nav"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                padding: '6px 2px',
                position: 'relative',
                transition: 'color var(--transition-fast)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Action: Resume & Mobile Hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a
            href={contact.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-subtle btn-sm resume-btn"
            aria-label="View Sai Srujan Resume on Google Drive (opens in new tab)"
            title="View Sai Srujan Resume"
          >
            <FileText size={15} aria-hidden="true" />
            <span>Resume</span>
            <ExternalLink size={13} style={{ opacity: 0.7 }} aria-hidden="true" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            style={{
              display: 'none',
              background: 'none',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-md)',
              padding: '8px',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              backgroundColor: 'var(--bg-card)',
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          style={{
            position: 'absolute',
            top: 'var(--navbar-height)',
            left: 0,
            right: 0,
            backgroundColor: 'var(--bg-card)',
            borderBottom: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-md)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={handleLinkClick}
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                padding: '10px 12px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--bg-subtle)',
                display: 'block',
              }}
            >
              {item.label}
            </a>
          ))}

          <div style={{ paddingTop: '8px', borderTop: '1px solid var(--border-light)' }}>
            <a
              href={contact.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ width: '100%' }}
              onClick={handleLinkClick}
            >
              <FileText size={16} />
              <span>View Resume (Google Drive)</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      )}

      {/* CSS Helper for responsive toggling */}
      <style>{`
        @media (min-width: 860px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-toggle {
            display: none !important;
          }
        }
        @media (max-width: 859px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};
