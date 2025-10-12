import { Link } from "react-router-dom";
import React from "react";

interface ProjectCardProps {
  slug: string;
  title: string;
  summary: string;
  imgSrc: string;
  externalUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ slug, title, summary, imgSrc, externalUrl }) => {
  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) =>
    externalUrl ? (
      <a href={externalUrl} className="stretched-link" target="_blank" rel="noopener noreferrer" aria-label={title}>
        {children}
      </a>
    ) : (
      <Link to={`/projects/${slug}`} className="stretched-link" aria-label={title}>
        {children}
      </Link>
    );

  return (
    <div className="col-12 col-sm-6 col-lg-4 d-flex">
      <div className="card shadow-sm w-100 h-100 hover-lift position-relative">
        <img
          src={imgSrc}
          className="card-img-top project-img"
          alt={title}
          loading="lazy"
        />
        <div className="card-body">
          <h5 className="card-title mb-2">{title}</h5>
          <p className="card-text text-body-secondary mb-0">{summary}</p>
        </div>
        <Wrapper>{ externalUrl }</Wrapper>
      </div>
    </div>
  );
};

export default ProjectCard;
