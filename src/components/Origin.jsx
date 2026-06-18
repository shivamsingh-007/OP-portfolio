import { personal } from '../data/content';
import SplitSection from './SplitSection';
import { useGsapReveal } from '../hooks/useGsap';

export default function Origin() {
  const headingRef = useGsapReveal({ y: 30 });
  const bodyRef = useGsapReveal({ y: 30, delay: 0.2 });
  const statsRef = useGsapReveal({ y: 30, delay: 0.3 });

  return (
    <SplitSection
      label="ORIGIN"
      left={
        <div ref={headingRef}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--paper)', textTransform: 'uppercase', lineHeight: 1, marginBottom: 8 }}>
            THE <span style={{ color: 'var(--blood)' }}>ORIGIN</span>
          </h2>
          <div style={{ width: 48, height: 4, background: 'var(--blood)', marginBottom: 24, borderRadius: 2 }} />
          <p ref={bodyRef} style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'rgba(245,240,232,0.7)', lineHeight: 1.8, marginBottom: 18 }}>
            {personal.about}
          </p>
          <p style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1rem)', color: 'rgba(245,240,232,0.45)', lineHeight: 1.8 }}>
            Every hero has an origin story. Mine begins in the intersection of code and consciousness.
          </p>
        </div>
      }
      right={
        <div ref={statsRef} style={{
          background: 'rgba(10,10,10,0.75)', border: '1px solid rgba(245,240,232,0.05)',
          borderRadius: 'var(--r-md)', padding: 28, backdropFilter: 'blur(8px)',
        }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--blood)', textTransform: 'uppercase', marginBottom: 20, letterSpacing: '0.12em' }}>
            VITAL STATISTICS
          </div>
          {[
            { l: 'Name', v: personal.name },
            { l: 'Handle', v: personal.handle },
            { l: 'Location', v: personal.location },
            { l: 'Title', v: personal.title },
            { l: 'Focus', v: 'AI / Autonomous Agents' },
            { l: 'Status', v: 'Building the future', red: true },
          ].map((s, i) => (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '12px 0', borderBottom: i < 5 ? '1px solid rgba(245,240,232,0.04)' : 'none',
            }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'rgba(245,240,232,0.4)', textTransform: 'uppercase' }}>{s.l}</span>
              <span style={{ fontSize: '0.95rem', color: s.red ? 'var(--blood)' : 'var(--paper)', fontWeight: s.red ? 600 : 400, textAlign: 'right', maxWidth: '60%' }}>{s.v}</span>
            </div>
          ))}
        </div>
      }
    />
  );
}
