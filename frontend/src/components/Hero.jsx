import React, { useState, useEffect } from 'react';

// Simple counter animation component
const AnimatedCounter = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (typeof value === 'string' && value.includes('+')) {
      setCount(value);
      return;
    }

    const target = parseInt(value, 10);
    if (isNaN(target)) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [value, duration]);

  return <span>{count}{typeof value === 'string' && value.includes('+') ? '' : '+'}</span>;
};

const Hero = () => {
  const [lcStats, setLcStats] = useState({
    solved: '800+',
    rating: '1493',
    loading: true
  });

  useEffect(() => {
    const fetchLeetCodeData = async () => {
      try {
        const response = await fetch('https://leetcode-stats-api.herokuapp.com/KishanKumar01');
        const data = await response.json();

        if (data.status === 'success') {
          setLcStats(prev => ({
            ...prev,
            solved: data.totalSolved,
            loading: false
          }));
        }
      } catch (error) {
        console.error('Error fetching LeetCode stats:', error);
        setLcStats(prev => ({ ...prev, loading: false }));
      }
    };

    fetchLeetCodeData();
  }, []);

  return (
    <section id="home" className="section container">
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '5%',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between'
      }}>
        {/* Left Side: 55% */}
        <div style={{ flex: '1 1 55%', minWidth: '320px' }}>
          <h1 className="text-gradient" style={{ fontSize: 'clamp(44px, 7vw, 64px)', marginBottom: '12px', lineHeight: 1.1, fontWeight: '900', letterSpacing: '-0.04em' }}>
            Kishan Kumar.
          </h1>
          <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: 1.3, fontWeight: '600', letterSpacing: '-0.02em' }}>
            Computer Science Student <br />& Software Developer.
          </h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: '40px', lineHeight: 1.7, maxWidth: '90%' }}>
            I build real-world applications and solve complex problems. Focused on creating efficient, scalable, and user-centric software solutions.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-outline">Let's Connect</a>
          </div>
        </div>

        {/* Right Side: 40% */}
        <div className="card" style={{
          flex: '1 1 40%',
          minWidth: '300px',
          padding: '0',
          overflow: 'hidden'
        }}>
          <div style={{ padding: '24px', borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--bg-secondary)' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-primary)' }}>Performance Highlights</h3>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
          }}>
            <div style={{ padding: '32px 24px', borderRight: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--text-primary)', marginBottom: '4px', letterSpacing: '-0.03em' }}>
                {!lcStats.loading ? <AnimatedCounter value={lcStats.solved} /> : '...'}
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: '600', lineHeight: 1.4 }}>
                DSA Problems
              </div>
            </div>

            <div style={{ padding: '32px 24px', borderBottom: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--text-primary)', marginBottom: '4px', letterSpacing: '-0.03em' }}>
                {lcStats.rating}
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: '600', lineHeight: 1.4 }}>
                LeetCode Rating
              </div>
            </div>

            <div style={{ padding: '32px 24px', borderRight: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--text-primary)', marginBottom: '4px', letterSpacing: '-0.03em' }}>3★</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: '600', lineHeight: 1.4 }}>
                HackerRank
              </div>
            </div>

            <div style={{ padding: '32px 24px' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--text-primary)', marginBottom: '4px', letterSpacing: '-0.03em' }}>9.0</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: '600', lineHeight: 1.4 }}>
                CGPA (B.Tech)
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
