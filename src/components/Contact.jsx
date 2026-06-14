import { personal } from '../data/content';
import { Send, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import SplitSection from './SplitSection';

export default function Contact() {
  return (
    <div style={{ position: 'relative' }}>
      {/* Black & white comic background */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden',
      }}>
        <img src="/assets/contact-bg.webp" alt="" style={{
          width: '100%', height: '100%', objectFit: 'cover',
          filter: 'grayscale(1) brightness(0.4) contrast(1.3)',
          opacity: 0.6,
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, var(--ink) 0%, transparent 10%, transparent 90%, var(--ink) 100%)',
        }} />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
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
                <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <input placeholder="Your Name" style={{
                    background: 'rgba(245,240,232,0.04)', border: '1px solid rgba(245,240,232,0.06)',
                    borderRadius: 'var(--r-sm)', padding: '10px 12px', fontSize: '0.88rem', color: 'var(--paper)',
                    outline: 'none', fontFamily: 'var(--font-mono)',
                  }} />
                  <input placeholder="Your Email" type="email" style={{
                    background: 'rgba(245,240,232,0.04)', border: '1px solid rgba(245,240,232,0.06)',
                    borderRadius: 'var(--r-sm)', padding: '10px 12px', fontSize: '0.88rem', color: 'var(--paper)',
                    outline: 'none', fontFamily: 'var(--font-mono)',
                  }} />
                  <textarea placeholder="Your Message" rows={3} style={{
                    background: 'rgba(245,240,232,0.04)', border: '1px solid rgba(245,240,232,0.06)',
                    borderRadius: 'var(--r-sm)', padding: '10px 12px', fontSize: '0.88rem', color: 'var(--paper)',
                    outline: 'none', fontFamily: 'var(--font-mono)', resize: 'none',
                  }} />
                  <button type="submit" style={{
                    background: 'var(--blood)', border: 'none', borderRadius: 'var(--r-sm)',
                    padding: '10px 18px', cursor: 'pointer', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', gap: 8, fontSize: '0.88rem', color: 'var(--paper)',
                    fontFamily: 'var(--font-mono)', fontWeight: 600,
                  }}><Send size={14} /> TRANSMIT</button>
                </form>
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
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    { icon: Github, href: personal.github, label: 'GitHub', color: 'var(--paper)' },
                    { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn', color: 'var(--cyan)' },
                    { icon: Mail, href: `mailto:${personal.email}`, label: 'Email', color: 'var(--blood)' },
                  ].map((s, i) => (
                    <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" style={{
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
                </div>
              </div>
            </>
          }
        />
      </div>
    </div>
  );
}
