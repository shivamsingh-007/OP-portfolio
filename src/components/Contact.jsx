import { useState } from 'react';
import { personal } from '../data/content';
import { Send, Github, Linkedin, Mail, MapPin, CheckCircle } from 'lucide-react';
import SplitSection from './SplitSection';
import SectionBg from './SectionBg';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!form.email.trim()) e.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.message.trim()) e.message = 'Required';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  };

  const inputStyle = (hasError) => ({
    background: 'rgba(245,240,232,0.04)',
    border: `1px solid ${hasError ? 'var(--blood)' : 'rgba(245,240,232,0.06)'}`,
    borderRadius: 'var(--r-sm)',
    padding: '10px 12px',
    fontSize: '0.88rem',
    color: 'var(--paper)',
    outline: 'none',
    fontFamily: 'var(--font-mono)',
    transition: 'border-color 0.2s',
  });

  return (
    <SectionBg src="/assets/contact-bg.webp" brightness={0.4} opacity={0.6}>
      <SplitSection
        label="CONTACT"
        left={
          <>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--paper)', textTransform: 'uppercase', marginBottom: 16 }}>
              MAKE <span style={{ color: 'var(--blood)' }}>CONTACT</span>
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'rgba(245,240,232,0.5)', lineHeight: 1.7, marginBottom: 20 }}>
              {personal.tagline}
            </p>
            <div style={{
              background: 'rgba(10,10,10,0.75)', border: '1px solid rgba(245,240,232,0.04)',
              borderRadius: 'var(--r-md)', padding: 20, backdropFilter: 'blur(8px)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <MapPin size={16} color="var(--blood)" />
                <span style={{ fontSize: '0.88rem', color: 'rgba(245,240,232,0.5)' }}>{personal.location}</span>
              </div>
              {submitted ? (
                <div role="status" style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  gap: 12, padding: '24px 0', textAlign: 'center',
                }}>
                  <CheckCircle size={40} color="var(--cyan)" />
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--paper)' }}>MESSAGE TRANSMITTED</div>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(245,240,232,0.5)' }}>I&apos;ll get back to you soon.</div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div>
                    <input
                      placeholder="Your Name"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      aria-label="Your name"
                      aria-invalid={!!errors.name}
                      style={inputStyle(errors.name)}
                    />
                    {errors.name && <div style={{ fontSize: '0.7rem', color: 'var(--blood)', marginTop: 4 }}>{errors.name}</div>}
                  </div>
                  <div>
                    <input
                      placeholder="Your Email"
                      type="email"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      aria-label="Your email"
                      aria-invalid={!!errors.email}
                      style={inputStyle(errors.email)}
                    />
                    {errors.email && <div style={{ fontSize: '0.7rem', color: 'var(--blood)', marginTop: 4 }}>{errors.email}</div>}
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={3}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      aria-label="Your message"
                      aria-invalid={!!errors.message}
                      style={{ ...inputStyle(errors.message), resize: 'none' }}
                    />
                    {errors.message && <div style={{ fontSize: '0.7rem', color: 'var(--blood)', marginTop: 4 }}>{errors.message}</div>}
                  </div>
                  <button type="submit" style={{
                    background: 'var(--blood)', border: 'none', borderRadius: 'var(--r-sm)',
                    padding: '10px 18px', cursor: 'pointer', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', gap: 8, fontSize: '0.88rem', color: 'var(--paper)',
                    fontFamily: 'var(--font-mono)', fontWeight: 600, transition: 'all var(--t-fast)',
                  }}
                    onMouseEnter={e => { e.target.style.boxShadow = '0 0 20px var(--blood-glow)'; e.target.style.transform = 'translateY(-1px)'; }}
                    onMouseLeave={e => { e.target.style.boxShadow = 'none'; e.target.style.transform = 'none'; }}
                  ><Send size={14} /> TRANSMIT</button>
                </form>
              )}
            </div>
          </>
        }
        right={
          <>
            <div style={{ height: 48 }} />
            <div style={{
              background: 'rgba(10,10,10,0.75)', border: '1px solid rgba(245,240,232,0.05)',
              borderRadius: 'var(--r-md)', padding: 28, backdropFilter: 'blur(8px)',
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--blood)', textTransform: 'uppercase', marginBottom: 20, letterSpacing: '0.12em' }}>
                CHANNELS
              </div>
              <nav aria-label="Social links" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { icon: Github, href: personal.github, label: 'GitHub', color: 'var(--paper)' },
                  { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn', color: 'var(--cyan)' },
                  { icon: Mail, href: `mailto:${personal.email}`, label: 'Email', color: 'var(--blood)' },
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} style={{
                    display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px',
                    background: 'rgba(245,240,232,0.03)', border: '1px solid rgba(245,240,232,0.06)',
                    borderRadius: 'var(--r-sm)', textDecoration: 'none', transition: 'all 0.3s ease', cursor: 'pointer',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = s.color; e.currentTarget.style.background = `${s.color}08`; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(245,240,232,0.06)'; e.currentTarget.style.background = 'rgba(245,240,232,0.03)'; }}
                  >
                    <s.icon size={18} color={s.color} />
                    <span style={{ fontSize: '0.9rem', color: 'var(--paper)' }}>{s.label}</span>
                  </a>
                ))}
              </nav>
            </div>
          </>
        }
      />
    </SectionBg>
  );
}
