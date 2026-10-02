import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Mukesh Electronics",
      subtitle: "Inventory & Sales Management System",
      description: "A full-stack application for managing inventory and sales. Features JWT authentication, role-based access, REST APIs, CRUD operations for multiple modules, a dashboard with low-stock alerts, and automatic stock updates.",
      stack: ["Next.js", "React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
      demoLink: "https://mukesh-electronics.vercel.app",
      githubLink: "https://github.com/kishan-7070/Mukesh_Electronics-WebApplication",
      caseStudyLink: "https://mukesh-electronics.vercel.app/"
    },
    {
      title: "FinClassify",
      subtitle: "Fintech Expense Classification Tool",
      description: "Privacy-first expense classification engine and interactive financial dashboard for Indian banking statements. Features a 3-tier categorization engine, multi-bank CSV parser, duplicate detection, and dual database (PostgreSQL/SQLite) support.",
      stack: ["React.js", "Node.js", "Express.js", "PostgreSQL", "SQLite", "Recharts", "PDFKit"],
      demoLink: "https://finclassify.vercel.app/",
      githubLink: "https://github.com/kishan-7070/FinClassify-Website"
    }
  ];

  return (
    <section id="projects" className="section container">
      <h2 className="section-title">Projects</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
        {projects.map((project, index) => (
          <div key={index} className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '4px', color: 'var(--text-primary)' }}>
              {project.title}
            </h3>
            <h4 style={{ color: 'var(--text-secondary)', fontWeight: '500', fontSize: '0.95rem', marginBottom: '16px' }}>
              {project.subtitle}
            </h4>
            <p style={{ marginBottom: '24px', fontSize: '0.95rem', color: 'var(--text-secondary)', flexGrow: 1 }}>
              {project.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
              {project.stack.map((tech, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-secondary)',
                    padding: '4px 10px',
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '4px',
                    fontWeight: '500'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '12px', marginTop: 'auto' }}>
              <a href={project.demoLink} className="btn btn-primary" style={{ flex: 1, padding: '10px 16px', fontSize: '0.85rem', textAlign: 'center' }} target="_blank" rel="noreferrer">Live Demo</a>
              <a href={project.githubLink} className="btn btn-outline" style={{ flex: 1, padding: '10px 16px', fontSize: '0.85rem', textAlign: 'center' }} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
