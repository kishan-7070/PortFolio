import React from 'react';

const About = () => {
  return (
    <section id="about" className="section container">
      <h2 className="section-title">About Me</h2>
      
      <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 400px' }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '24px', color: 'var(--text-secondary)' }}>
            I am a passionate Computer Science student and software developer focused on creating 
            efficient, scalable, and user-centric applications. With a strong foundation in 
            Data Structures and Algorithms, I enjoy tackling complex technical challenges.
          </p>
          <p style={{ fontSize: '1.1rem', marginBottom: '32px', color: 'var(--text-secondary)' }}>
            My technical journey spans across full-stack development, AI integrations, and mobile 
            application development. I am driven by the desire to build practical applications that 
            solve real-world problems.
          </p>
          
          <div className="card">
            <h3 style={{ marginBottom: '16px', fontSize: '1.2rem' }}>Quick Info</h3>
            <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><strong style={{ color: 'var(--text-primary)' }}>Education:</strong> B.Tech CSE, NIET</li>
              <li><strong style={{ color: 'var(--text-primary)' }}>Location:</strong> Greater Noida, India</li>
              <li><strong style={{ color: 'var(--text-primary)' }}>CGPA:</strong> 9.00/10 (2024-2028)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
