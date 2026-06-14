import { personal } from '../data/content';
import { ExternalLink, Github } from 'lucide-react';
import SplitSection from './SplitSection';

function ProjectCard({ p }) {
  return (
    <div style={{
      background: 'rgba(10,10,10,0.75)', border: '1px solid rgba(245,240,232,0.04)',
      borderRadius: 'var(--r-md)', padding: 20, position: 'relative', overflow: 'hidden',
      cursor: 'default', transition: 'all 0.3s ease', marginBottom: 14,
      backdropFilter: 'blur(8px)',
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = p.color; e.currentTarget.style.transform = 'translateY(-2px)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(245,240,232,0.04)'; e.currentTarget.style.transform = 'none'; }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, width: 4, height: '100%', background: p.color }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8, paddingLeft: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: p.color, textTransform: 'uppercase' }}>ISSUE {p.issue}</span>
          {p.team && (
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.5rem', padding: '2px 6px',
              background: 'rgba(0,212,255,0.15)', color: 'var(--cyan)',
              borderRadius: 'var(--r-sm)', textTransform: 'uppercase', letterSpacing: '0.05em',
            }}>TEAM</span>
          )}
        </div>
        {p.repo ? (
          <a href={p.repo} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(245,240,232,0.3)', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = p.color}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,240,232,0.3)'}>
            <Github size={14} />
          </a>
        ) : (
          <ExternalLink size={14} color="rgba(245,240,232,0.3)" />
        )}
      </div>
      <div style={{ paddingLeft: 10 }}>
        <div style={{ fontSize: '1.05rem', color: 'var(--paper)', fontWeight: 600, marginBottom: 4 }}>{p.title}</div>
        <div style={{ fontSize: '0.8rem', color: p.color, marginBottom: 6, fontFamily: 'var(--font-mono)' }}>{p.subtitle}</div>
        <div style={{ fontSize: '0.88rem', color: 'rgba(245,240,232,0.5)', lineHeight: 1.6, marginBottom: 10 }}>{p.description}</div>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {p.tech.map((t, j) => (
            <span key={j} style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.6rem', padding: '3px 7px',
              background: `${p.color}15`, color: p.color, borderRadius: 'var(--r-sm)',
            }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Missions() {
  const projects = personal.projects;
  const mid = Math.ceil(projects.length / 2);

  return (
    <div style={{ position: 'relative' }}>
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden',
      }}>
        <img src="/assets/missions-bg.jpg" alt="" style={{
          width: '100%', height: '100%', objectFit: 'cover',
          filter: 'grayscale(1) brightness(0.4) contrast(1.3)',
          opacity: 0.6,
          transform: 'rotate(180deg)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, var(--ink) 0%, transparent 8%, transparent 92%, var(--ink) 100%)',
        }} />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <SplitSection
          label="MISSIONS"
          left={
            <>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--paper)', textTransform: 'uppercase', marginBottom: 20 }}>
                ACTIVE <span style={{ color: 'var(--blood)' }}>MISSIONS</span>
              </h2>
              {projects.slice(0, mid).map((p, i) => <ProjectCard key={i} p={p} />)}
            </>
          }
          right={
            <>
              <div style={{ height: 'clamp(52px, 5vw, 68px)' }} />
              {projects.slice(mid).map((p, i) => <ProjectCard key={i} p={p} />)}
            </>
          }
        />
      </div>
    </div>
  );
}
