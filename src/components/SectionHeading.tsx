import React from 'react';

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  subtitle,
  centered = false,
}) => {
  return (
    <div
      className="section-header"
      style={{
        textAlign: centered ? 'center' : 'left',
        marginLeft: centered ? 'auto' : undefined,
        marginRight: centered ? 'auto' : undefined,
      }}
    >
      {label && <span className="section-label">{label}</span>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};
