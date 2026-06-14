import { useState, useEffect } from 'react';
import { personal } from '../data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const linkStyle = {
    fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'rgba(245,240,232,0.45)',
    textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.12em',
    transition: 'color var(--t-fast)', cursor: 'pointer',
  };

  return (
    <nav style={{
      position: 'fixed', top: 12, left: 12, right: 12, zIndex: 100,
      height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 20px',
      background: scrolled ? 'rgba(10,10,10,0.92)' : 'rgba(10,10,10,0.35)',
      backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
      border: '1px solid rgba(245,240,232,0.06)',
      borderRadius: 'var(--r-lg)',
      transition: 'background var(--t-base), border-color var(--t-base)',
    }}>
      <a href="#" style={{
        fontFamily: 'var(--font-display)', fontSize: '1.3rem',
        color: 'var(--paper)', textDecoration: 'none', letterSpacing: '0.04em',
      }}>
        <span style={{ color: 'var(--blood)' }}>&lt;</span>S<span style={{ color: 'var(--blood)' }}>/&gt;</span>
      </a>

      <div className="nav-desktop" style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
        {personal.navLinks.map(l => (
          <a key={l.href} href={l.href}
            style={linkStyle}
            onMouseEnter={e => e.target.style.color = 'var(--blood)'}
            onMouseLeave={e => e.target.style.color = 'rgba(245,240,232,0.45)'}
          >{l.label}</a>
        ))}
        <a href="#contact" style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.7rem', background: 'var(--blood)',
          color: 'var(--white)', padding: '7px 16px', borderRadius: 'var(--r-sm)',
          textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.06em',
          fontWeight: 600, cursor: 'pointer', transition: 'all var(--t-fast)',
        }}
          onMouseEnter={e => { e.target.style.boxShadow = 'var(--shadow-red-glow)'; e.target.style.transform = 'translateY(-1px)'; }}
          onMouseLeave={e => { e.target.style.boxShadow = 'none'; e.target.style.transform = 'none'; }}
        >Contact</a>
      </div>

      <button onClick={() => setOpen(!open)} className="nav-hamburger" aria-label="Menu" style={{
        display: 'none', background: 'none', border: 'none', cursor: 'pointer',
        flexDirection: 'column', gap: 4, padding: 6,
      }}>
        <span style={{ width: 20, height: 1.5, background: 'var(--paper)', transition: 'var(--t-fast)', transform: open ? 'rotate(45deg) translateY(5.5px)' : 'none' }} />
        <span style={{ width: 20, height: 1.5, background: 'var(--paper)', transition: 'var(--t-fast)', opacity: open ? 0 : 1 }} />
        <span style={{ width: 20, height: 1.5, background: 'var(--paper)', transition: 'var(--t-fast)', transform: open ? 'rotate(-45deg) translateY(-5.5px)' : 'none' }} />
      </button>

      {open && (
        <div className="nav-mobile" style={{
          position: 'absolute', top: 64, left: 0, right: 0,
          background: 'rgba(10,10,10,0.96)', backdropFilter: 'blur(16px)',
          border: '1px solid rgba(245,240,232,0.06)', borderRadius: 'var(--r-lg)',
          padding: 20, display: 'flex', flexDirection: 'column', gap: 12,
        }}>
          {personal.navLinks.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ ...linkStyle, padding: '6px 0' }}>{l.label}</a>
          ))}
        </div>
      )}

      <style>{`
        @media(max-width:768px){
          .nav-desktop{display:none!important}
          .nav-hamburger{display:flex!important}
        }
      `}</style>
    </nav>
  );
}
