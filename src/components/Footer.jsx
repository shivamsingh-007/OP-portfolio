import { personal } from '../data/content';
import { Mail, ExternalLink, GitBranch, Terminal } from 'lucide-react';

export default function Footer() {
  const socials = [
    { icon: Mail, href: `mailto:${personal.email}`, hc: 'var(--blood)' },
    { icon: ExternalLink, href: personal.linkedin, hc: 'var(--cyan)' },
    { icon: GitBranch, href: personal.github, hc: 'var(--magenta)' },
    { icon: Terminal, href: `https://leetcode.com/${personal.leetcode}`, hc: 'var(--yellow)' },
  ];

  return (
    <footer style={{
      width: '100%', borderTop: '3px solid var(--ink-grey)',
      position: 'relative', padding: 'clamp(28px,4vw,40px) clamp(16px,4vw,80px)',
      background: 'var(--ink-panel)',
    }}>
      <div className="halftone" style={{ position: 'absolute', inset: 0, opacity: 0.02, pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 1100, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', color: 'rgba(245,240,232,0.25)', letterSpacing: '0.25em', textTransform: 'uppercase' }}>SPIDER-VERSE PROTOCOL</div>
        <div style={{ display: 'flex', gap: 20 }}>
          {socials.map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(245,240,232,0.35)', transition: 'color var(--t-fast)', cursor: 'pointer' }}
              onMouseEnter={e => e.currentTarget.style.color = s.hc}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,240,232,0.35)'}
            ><s.icon size={20} /></a>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          {personal.navLinks.slice(0, 4).map(l => (
            <a key={l.href} href={l.href} style={{ color: 'rgba(245,240,232,0.35)', textDecoration: 'none', transition: 'color var(--t-fast)', cursor: 'pointer' }}
              onMouseEnter={e => e.target.style.color = 'var(--cyan)'}
              onMouseLeave={e => e.target.style.color = 'rgba(245,240,232,0.35)'}
            >{l.label}</a>
          ))}
        </div>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'rgba(245,240,232,0.15)', textTransform: 'uppercase' }}>&copy; 2024 SPIDER-VERSE PROTOCOL // CREATED BY {personal.name}</p>
      </div>
    </footer>
  );
}
