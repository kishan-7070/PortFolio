import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      if (result.success) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      setStatus('An error occurred. Please try again.');
    }
    
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <section id="contact" className="section container">
      <h2 className="section-title">Let's Connect</h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
        <div style={{ flex: '1 1 350px' }}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '16px' }}>Get In Touch</h3>
          <p style={{ marginBottom: '32px', color: 'var(--text-secondary)' }}>
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p><strong style={{ color: 'var(--text-primary)' }}>Email:</strong> kishan.kumar@example.com</p>
            <p><strong style={{ color: 'var(--text-primary)' }}>Location:</strong> Greater Noida, India</p>
          </div>
        </div>
        
        <div className="card" style={{ flex: '1 1 400px' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', fontFamily: 'var(--font-main)', fontSize: '0.95rem' }}
              />
            </div>
            
            <div>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', fontFamily: 'var(--font-main)', fontSize: '0.95rem' }}
              />
            </div>
            
            <div>
              <label htmlFor="message" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                rows="5"
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', fontFamily: 'var(--font-main)', resize: 'vertical', fontSize: '0.95rem' }}
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '12px' }}>Send Message</button>
            {status && <p style={{ textAlign: 'center', marginTop: '16px', color: 'var(--accent-color)', fontWeight: '500' }}>{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
