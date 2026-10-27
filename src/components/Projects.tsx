import React from 'react';
import { ArrowRight } from './Icons';
import { portfolioData } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';
import { ProjectCard } from './ProjectCard';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading
          label="PORTFOLIO & WORK"
          title="Selected Projects"
          subtitle="A selection of applications and technical projects I've worked on."
        />

        <div className="grid-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Closing Action Link */}
        <div
          style={{
            marginTop: '44px',
            textAlign: 'center',
            padding: '24px',
            backgroundColor: 'var(--bg-card)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-light)',
          }}
        >
          <span style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginRight: '8px' }}>
            Interested in working together?
          </span>
          <a
            href="#contact"
            className="btn-link"
            style={{ fontSize: '0.9375rem', fontWeight: 600 }}
          >
            <span>Get in touch</span>
            <ArrowRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
