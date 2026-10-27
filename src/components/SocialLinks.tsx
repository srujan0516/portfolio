import React from 'react';
import { Github, Linkedin, Mail, Phone, Code2, ExternalLink } from './Icons';
import { portfolioData } from '../data/portfolio';

interface SocialLinksProps {
  className?: string;
  showLabels?: boolean;
  compact?: boolean;
  variant?: 'hero' | 'footer' | 'contact';
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  className = '',
  showLabels = false,
  compact = false,
  variant = 'hero',
}) => {
  const { contact } = portfolioData;

  const links = [
    {
      name: 'GitHub',
      url: contact.github,
      icon: <Github size={compact ? 16 : 18} aria-hidden="true" />,
      label: 'GitHub profile: srujan0516',
      isExternal: true,
    },
    {
      name: 'LinkedIn',
      url: contact.linkedin,
      icon: <Linkedin size={compact ? 16 : 18} aria-hidden="true" />,
      label: 'LinkedIn profile: Gondela Sai Srujan',
      isExternal: true,
    },
    {
      name: 'LeetCode',
      url: contact.leetcode,
      icon: <Code2 size={compact ? 16 : 18} aria-hidden="true" />,
      label: 'LeetCode profile: G2lYT6OPhC',
      isExternal: true,
    },
  ];

  return (
    <div
      className={`social-links-container ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: compact ? '8px' : '12px',
      }}
    >
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          title={link.name}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: showLabels ? '8px 16px' : '10px',
            borderRadius: 'var(--radius-md)',
            backgroundColor: variant === 'contact' ? 'var(--bg-card)' : 'transparent',
            border: variant === 'contact' ? '1px solid var(--border-light)' : '1px solid var(--border-light)',
            color: 'var(--text-primary)',
            fontSize: '0.875rem',
            fontWeight: 500,
            transition: 'all var(--transition-fast)',
            textDecoration: 'none',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--accent-primary)';
            e.currentTarget.style.color = 'var(--accent-primary)';
            e.currentTarget.style.backgroundColor = 'var(--bg-accent-soft)';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--border-light)';
            e.currentTarget.style.color = 'var(--text-primary)';
            e.currentTarget.style.backgroundColor = variant === 'contact' ? 'var(--bg-card)' : 'transparent';
            e.currentTarget.style.transform = 'none';
          }}
        >
          {link.icon}
          {showLabels && <span>{link.name}</span>}
          {showLabels && <ExternalLink size={14} style={{ opacity: 0.6 }} aria-hidden="true" />}
        </a>
      ))}
    </div>
  );
};
