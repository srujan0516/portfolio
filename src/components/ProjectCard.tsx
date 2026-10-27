import React from 'react';
import { ExternalLink, Github, Info, Layers } from './Icons';
import { Project } from '../data/portfolio';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const hasActions = Boolean(project.liveUrl || project.githubUrl || project.detailsUrl);

  return (
    <div
      className="card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        padding: '30px',
      }}
    >
      <div>
        {/* Category & Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '14px',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'var(--accent-primary)',
            }}
          >
            {project.category}
          </span>

          {project.badge && (
            <span
              className="badge"
              style={{
                fontSize: '0.6875rem',
                padding: '3px 8px',
              }}
            >
              {project.badge}
            </span>
          )}
        </div>

        {/* Project Title */}
        <h3
          style={{
            fontSize: '1.25rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: '12px',
            lineHeight: 1.35,
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: '0.9375rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.65,
            marginBottom: '20px',
          }}
        >
          {project.description}
        </p>

        {/* Key Features if present */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <div style={{ marginBottom: '20px' }}>
            <div
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'var(--text-muted)',
                marginBottom: '8px',
              }}
            >
              Key Characteristics:
            </div>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
              }}
            >
              {project.keyFeatures.map((feature, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: '0.8125rem',
                    color: 'var(--text-secondary)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px',
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent-primary)',
                      marginTop: '7px',
                      flexShrink: 0,
                    }}
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Architecture flow for IncidentIQ */}
        {project.architectureFlow && (
          <div
            style={{
              marginBottom: '22px',
              padding: '16px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--bg-subtle)',
              border: '1px solid var(--border-light)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'var(--accent-primary)',
                marginBottom: '10px',
              }}
            >
              <Layers size={14} />
              <span>Architecture Workflow (RAG Pipeline)</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {project.architectureFlow.map((step, idx) => (
                <div
                  key={idx}
                  style={{
                    fontSize: '0.8125rem',
                    color: 'var(--text-primary)',
                    fontFamily: 'monospace',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-light)',
                  }}
                >
                  {step}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technology Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: hasActions ? '24px' : '0',
          }}
        >
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="tech-pill"
              style={{ fontSize: '0.75rem', padding: '3px 9px' }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Conditionally rendered buttons (hidden if URL not supplied, per strict requirement) */}
      {hasActions && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            paddingTop: '16px',
            borderTop: '1px solid var(--border-light)',
          }}
        >
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <span>Live Demo</span>
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <Github size={14} aria-hidden="true" />
              <span>View Source</span>
            </a>
          )}
          {project.detailsUrl && (
            <a href={project.detailsUrl} className="btn btn-secondary btn-sm">
              <Info size={14} aria-hidden="true" />
              <span>Details</span>
            </a>
          )}
        </div>
      )}
    </div>
  );
};
