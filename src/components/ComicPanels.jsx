import { useEffect, useRef } from 'react';
import SplitSection from './SplitSection';

const panels = [
  { text: 'THE SPIDER-VERSE CALLS', accent: 'var(--blood)' },
  { text: 'WHOOSH!', accent: 'var(--cyan)' },
  { text: 'POWER UP', accent: 'var(--yellow)' },
  { text: 'BAM!', accent: 'var(--blood)' },
  { text: 'SKRRT!', accent: 'var(--magenta)' },
  { text: 'THWIP!', accent: 'var(--cyan)' },
  { text: 'EVOLVE', accent: 'var(--blood)' },
  { text: 'ZAP!', accent: 'var(--yellow)' },
  { text: 'CRASH!', accent: 'var(--magenta)' },
  { text: 'ADAPT', accent: 'var(--cyan)' },
  { text: 'EXECUTE', accent: 'var(--blood)' },
  { text: 'BOOM!', accent: 'var(--yellow)' },
];

function Panel({ panel, index }) {
  const ref = useRef(null);
  const rot = (index % 2 === 0 ? -1 : 1) * (1 + Math.random() * 1.5);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal" style={{
      background: 'var(--ink-panel)', border: '2px solid rgba(245,240,232,0.04)',
      borderRadius: 'var(--r-md)', overflow: 'hidden', position: 'relative',
      transform: `rotate(${rot}deg)`, cursor: 'default', minHeight: 90,
      transition: 'all 0.5s var(--ease)',
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = panel.accent; e.currentTarget.style.boxShadow = `0 0 14px ${panel.accent}33`; e.currentTarget.style.transform = 'rotate(0deg) translateY(-2px)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(245,240,232,0.04)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = `rotate(${rot}deg) translateY(0)`; }}
    >
      <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: `radial-gradient(circle, ${panel.accent} 1px, transparent 1px)`, backgroundSize: '5px 5px' }} />
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%) rotate(-6deg)',
        fontFamily: 'var(--font-display)', fontSize: '1.3rem',
        color: panel.accent, textShadow: `0 0 12px ${panel.accent}44`, opacity: 0.7, whiteSpace: 'nowrap',
      }}>{panel.text}</div>
    </div>
  );
}

export default function ComicPanels() {
  const leftPanels = panels.slice(0, 6);
  const rightPanels = panels.slice(6);

  return (
    <SplitSection
      label="COMIC WALL"
      left={
        <>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--paper)', textTransform: 'uppercase', marginBottom: 20 }}>
            THE LIVING <span style={{ color: 'var(--blood)' }}>PANELS</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {leftPanels.map((p, i) => <Panel key={i} panel={p} index={i} />)}
          </div>
        </>
      }
      right={
        <>
          <div style={{ height: 48 }} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {rightPanels.map((p, i) => <Panel key={i} panel={p} index={i + 6} />)}
          </div>
        </>
      }
    />
  );
}
