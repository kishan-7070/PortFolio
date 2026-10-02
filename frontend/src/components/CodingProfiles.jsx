import React from 'react';
import { FaGithub, FaHackerrank } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks, SiCodechef } from 'react-icons/si';

const CodingProfiles = () => {
  const profiles = [
    {
      platform: 'LeetCode',
      username: 'KishanKumar01',
      stats: '1493 Rating | Top percentile',
      link: 'https://leetcode.com/KishanKumar01',
      icon: <SiLeetcode size={32} color="#FFA116" />
    },
    {
      platform: 'GeeksforGeeks',
      username: 'Kishan Kumar',
      stats: 'Advanced Problem Solver',
      link: 'https://www.geeksforgeeks.org/profile/kishansax26a',
      icon: <SiGeeksforgeeks size={32} color="#2F8D46" />
    },
    {
      platform: 'CodeChef',
      username: 'KishanKumar',
      stats: '1509 Rating | Division 2',
      link: 'https://www.codechef.com/users/gaily_hope_02',
      icon: <SiCodechef size={32} color="#5B4638" />
    },
    {
      platform: 'HackerRank',
      username: 'KishanKumar',
      stats: '3★ Problem Solving',
      link: 'https://www.hackerrank.com/kishansanjat00',
      icon: <FaHackerrank size={32} color="#2EC866" />
    },
    {
      platform: 'GitHub',
      username: 'kishan-7070',
      stats: 'Open Source Contributor',
      link: 'https://github.com/kishan-7070',
      icon: <FaGithub size={32} color="#171515" />
    }
  ];

  return (
    <section id="profiles" className="section container">
      <h2 className="section-title">Coding Profiles</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px'
      }}>
        {profiles.map((profile, index) => (
          <a key={index} href={profile.link} target="_blank" rel="noreferrer" className="card" style={{ display: 'flex', alignItems: 'center', gap: '20px', textDecoration: 'none' }}>
            <div style={{
              width: '64px',
              height: '64px',
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              {profile.icon}
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '4px', color: 'var(--text-primary)' }}>{profile.platform}</h3>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '600', marginBottom: '2px' }}>
                @{profile.username}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                {profile.stats}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CodingProfiles;
