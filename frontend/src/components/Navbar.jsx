import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Navbar = () => {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-color)',
      zIndex: 1000,
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        height: '76px',
        maxWidth: '1350px',
        margin: '0 auto',
        padding: '0 32px'
      }}>
        {/* Logo */}
        <div style={{ flex: '1', fontSize: '1.4rem', fontWeight: '900', letterSpacing: '-0.5px' }}>
          <a href="#home" style={{ color: 'var(--text-primary)' }}>
            Kishan<span style={{ color: 'var(--accent-color)' }}>.</span>
          </a>
        </div>

        {/* Navigation Links - Centered */}
        <nav style={{ 
          display: 'flex', 
          gap: '40px', 
          alignItems: 'center',
          justifyContent: 'center',
          flex: '2'
        }}>
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              style={{
                color: 'var(--text-secondary)',
                fontSize: '0.95rem',
                fontWeight: '600',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Social Icons & Resume - Right Aligned */}
        <div style={{ flex: '1', display: 'flex', gap: '24px', alignItems: 'center', justifyContent: 'flex-end' }}>
          <a href="https://github.com/kishan-7070" target="_blank" rel="noreferrer" style={iconStyle}>
            <FaGithub size={22} />
          </a>
          <a href="https://linkedin.com/in/kishan-kumar-22a3a2331" target="_blank" rel="noreferrer" style={iconStyle}>
            <FaLinkedin size={22} />
          </a>
          <a href="https://leetcode.com/KishanKumar01" target="_blank" rel="noreferrer" style={iconStyle}>
            <SiLeetcode size={22} />
          </a>
          <a href="/resume.pdf" className="btn btn-primary" style={{ padding: '8px 24px', fontSize: '0.9rem', marginLeft: '8px' }} target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};

const iconStyle = {
  color: 'var(--text-secondary)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'color 0.2s',
};

export default Navbar;
