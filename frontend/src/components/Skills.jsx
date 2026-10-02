import React from 'react';

const Skills = () => {
  const skillCategories = [
    { title: "Programming", skills: ["C", "C++", "Python", "JavaScript"] },
    { title: "Frontend", skills: ["HTML", "CSS", "React.js", "Next.js"] },
    { title: "Backend", skills: ["Node.js", "Express.js", "REST APIs"] },
    { title: "Databases", skills: ["SQL", "MongoDB"] },
    { title: "Data / ML", skills: ["Pandas", "NumPy", "Matplotlib"] },
    { title: "Core CS", skills: ["DSA", "OOP", "Operating Systems"] },
    { title: "Tools", skills: ["GitHub", "GitLab"] }
  ];

  return (
    <section id="skills" className="section container">
      <h2 className="section-title">Technical Skills</h2>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '24px' 
      }}>
        {skillCategories.map((category, index) => (
          <div key={index} className="card">
            <h3 style={{ marginBottom: '16px', fontSize: '1.1rem', color: 'var(--text-primary)' }}>{category.title}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {category.skills.map((skill, i) => (
                <span 
                  key={i} 
                  style={{ 
                    padding: '6px 14px', 
                    backgroundColor: 'var(--text-primary)', 
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    color: '#ffffff',
                    fontWeight: '600'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
