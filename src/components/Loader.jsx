import { useState, useEffect } from 'react';

export default function Loader() {
  const [p, setP] = useState(0);
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const i = setInterval(() => setP(v => v >= 100 ? (clearInterval(i), 100) : v + Math.random() * 18 + 4), 180);
    const g = setInterval(() => { setGlitch(true); setTimeout(() => setGlitch(false), 120); }, 700);
    return () => { clearInterval(i); clearInterval(g); };
  }, []);

  return (
    <div role="progressbar" aria-valuenow={Math.min(Math.floor(p), 100)} aria-valuemin={0} aria-valuemax={100} aria-label="Loading" style={{
      position: 'fixed', inset: 0, zIndex: 9999, background: 'var(--ink)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'var(--font-display)',
    }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(245,240,232,0.02) 2px, rgba(245,240,232,0.02) 4px)',
      }} />
      <svg viewBox="0 0 100 100" fill="none" style={{
        width: 100, height: 100, marginBottom: 32,
        transform: glitch ? `translate(${Math.random()*4-2}px,${Math.random()*4-2}px)` : 'none',
      }}>
        <circle cx="50" cy="50" r="45" stroke="var(--blood)" strokeWidth="1.5" opacity="0.3" />
        <circle cx="50" cy="50" r="28" stroke="var(--blood)" strokeWidth="0.8" opacity="0.15" />
        {[0,45,90,135].map(a => <line key={a} x1="50" y1="5" x2="50" y2="95" stroke="var(--blood)" strokeWidth="0.4" opacity="0.2" transform={`rotate(${a} 50 50)`} />)}
        <ellipse cx="50" cy="44" rx="5" ry="7" fill="var(--blood)" />
        <ellipse cx="50" cy="56" rx="3.5" ry="4.5" fill="var(--blood)" />
        <path d="M45 41 Q32 30 22 26" stroke="var(--blood)" strokeWidth="1.2" fill="none" />
        <path d="M55 41 Q68 30 78 26" stroke="var(--blood)" strokeWidth="1.2" fill="none" />
        <path d="M45 44 Q30 38 18 34" stroke="var(--blood)" strokeWidth="1.2" fill="none" />
        <path d="M55 44 Q70 38 82 34" stroke="var(--blood)" strokeWidth="1.2" fill="none" />
        <path d="M45 49 Q32 54 20 54" stroke="var(--blood)" strokeWidth="1.2" fill="none" />
        <path d="M55 49 Q68 54 80 54" stroke="var(--blood)" strokeWidth="1.2" fill="none" />
        <path d="M45 54 Q34 64 24 68" stroke="var(--blood)" strokeWidth="1.2" fill="none" />
        <path d="M55 54 Q66 64 76 68" stroke="var(--blood)" strokeWidth="1.2" fill="none" />
      </svg>
      <div style={{
        fontSize: '2.2rem', letterSpacing: '0.2em', color: 'var(--paper)', marginBottom: 20,
        textShadow: glitch ? '2px 0 var(--blood), -2px 0 var(--cyan)' : 'none',
      }}>LOADING</div>
      <div style={{ width: 260, height: 2, background: 'var(--ink-grey)', borderRadius: 1, overflow: 'hidden' }}>
        <div style={{
          width: `${Math.min(p,100)}%`, height: '100%',
          background: 'linear-gradient(90deg, var(--blood), var(--crimson))',
          transition: 'width 0.15s ease', boxShadow: '0 0 12px var(--blood)',
        }} />
      </div>
      <div style={{
        marginTop: 14, fontSize: '0.65rem', color: 'var(--ink-wash)',
        fontFamily: 'var(--font-mono)', letterSpacing: '0.08em',
      }}>INITIALIZING {Math.min(Math.floor(p),100)}%</div>
    </div>
  );
}
