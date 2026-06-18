import { useEffect, useRef } from 'react';

const SpiderLogo = ({ size = 40, glow = false }) => (
  <svg viewBox="0 0 100 100" fill="none" style={{ width: size, height: size }}>
    <circle cx="50" cy="50" r="46" stroke="#C41E3A" strokeWidth="3" fill="#0A0A0A" />
    {glow && <circle cx="50" cy="50" r="46" stroke="#C41E3A" strokeWidth="1" opacity="0.3" style={{ filter: 'blur(4px)' }} />}
    <ellipse cx="50" cy="42" rx="5" ry="7" fill="#C41E3A" />
    <ellipse cx="50" cy="55" rx="3.5" ry="4.5" fill="#C41E3A" />
    <path d="M45 39 Q34 28 24 24" stroke="#C41E3A" strokeWidth="2" fill="none" />
    <path d="M55 39 Q66 28 76 24" stroke="#C41E3A" strokeWidth="2" fill="none" />
    <path d="M45 42 Q32 36 20 32" stroke="#C41E3A" strokeWidth="2" fill="none" />
    <path d="M55 42 Q68 36 80 32" stroke="#C41E3A" strokeWidth="2" fill="none" />
    <path d="M45 47 Q34 52 22 52" stroke="#C41E3A" strokeWidth="2" fill="none" />
    <path d="M55 47 Q66 52 78 52" stroke="#C41E3A" strokeWidth="2" fill="none" />
    <path d="M45 52 Q36 62 26 66" stroke="#C41E3A" strokeWidth="2" fill="none" />
    <path d="M55 52 Q64 62 74 66" stroke="#C41E3A" strokeWidth="2" fill="none" />
    <ellipse cx="42" cy="38" rx="4" ry="3" fill="#F5F0E8" opacity="0.9" />
    <ellipse cx="58" cy="38" rx="4" ry="3" fill="#F5F0E8" opacity="0.9" />
  </svg>
);

export default function SplitSection({ left, right, label = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) el.classList.add('visible');
    }, { threshold: 0.06 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal split-section" style={{
      display: 'grid',
      gridTemplateColumns: '1fr clamp(60px, 10vw, 140px) 1fr',
      minHeight: '80vh',
      position: 'relative',
    }}>
      <style>{`
        @media (max-width: 768px) {
          .split-section {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }
          .split-section .split-center {
            display: none !important;
          }
          .split-section .split-left,
          .split-section .split-right {
            order: unset !important;
            padding: 24px 16px !important;
          }
        }
      `}</style>

      <div className="split-left" style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: 'clamp(32px, 5vw, 72px) clamp(24px, 4vw, 56px)',
        order: 0,
      }}>
        {left}
      </div>

      <div className="split-center" style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        position: 'relative', order: 1, zIndex: 1,
      }}>
        <div style={{
          position: 'absolute', top: 0, bottom: 0, width: 3,
          background: 'linear-gradient(180deg, transparent 0%, #C41E3A 6%, #C41E3A 94%, transparent 100%)',
        }} />
        <div style={{ position: 'absolute', top: 'clamp(20px, 4vw, 48px)', zIndex: 2 }}>
          <div style={{
            background: '#0A0A0A', border: '2px solid #C41E3A', borderRadius: '50%',
            padding: 4, boxShadow: '0 0 20px rgba(196,30,58,0.4)',
          }}>
            <SpiderLogo size={36} glow />
          </div>
        </div>
        {label && (
          <div style={{
            position: 'absolute', top: 'clamp(64px, 9vw, 100px)',
            fontFamily: 'var(--font-mono)', fontSize: '0.5rem',
            color: 'var(--blood)', textTransform: 'uppercase',
            letterSpacing: '0.12em', whiteSpace: 'nowrap',
            writingMode: 'vertical-rl', textOrientation: 'mixed',
          }}>{label}</div>
        )}
      </div>

      <div className="split-right" style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: 'clamp(32px, 5vw, 72px) clamp(24px, 4vw, 56px)',
        order: 2,
      }}>
        {right}
      </div>
    </div>
  );
}

export { SpiderLogo };
