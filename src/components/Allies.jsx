import { personal } from '../data/content';
import { GraduationCap } from 'lucide-react';
import SplitSection from './SplitSection';
import SectionBg from './SectionBg';
import { useGsapReveal } from '../hooks/useGsap';

export default function Allies() {
  const edu = personal.education;
  const philosophyRef = useGsapReveal({ y: 30, delay: 0.2 });

  return (
    <SectionBg src="/assets/allies-bg.webp" brightness={0.3} opacity={0.5}>
      <SplitSection
        label="ALLIES"
        left={
          <>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--paper)', textTransform: 'uppercase', marginBottom: 20 }}>
              THE <span style={{ color: 'var(--blood)' }}>ALLIES</span>
            </h2>
            {edu.map((e, i) => (
              <div key={i} style={{
                background: 'rgba(10,10,10,0.75)', border: '1px solid rgba(245,240,232,0.04)',
                borderRadius: 'var(--r-md)', padding: 20, position: 'relative', overflow: 'hidden',
                cursor: 'default', transition: 'all 0.3s ease', marginBottom: 14,
                backdropFilter: 'blur(8px)',
              }}
                onMouseEnter={ev => { ev.currentTarget.style.borderColor = 'var(--cyan)'; ev.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={ev => { ev.currentTarget.style.borderColor = 'rgba(245,240,232,0.04)'; ev.currentTarget.style.transform = 'none'; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <GraduationCap size={22} color="var(--cyan)" />
                  <span style={{ fontSize: '1.05rem', color: 'var(--paper)', fontWeight: 600 }}>{e.degree}</span>
                </div>
                <div style={{ fontSize: '0.88rem', color: 'rgba(245,240,232,0.5)', marginBottom: 4 }}>{e.school}</div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(245,240,232,0.3)', fontFamily: 'var(--font-mono)' }}>{e.year}</div>
                {e.detail && <div style={{ fontSize: '0.8rem', color: 'var(--blood)', marginTop: 6 }}>{e.detail}</div>}
              </div>
            ))}
          </>
        }
        right={
          <>
            <div style={{ height: 48 }} />
            <div ref={philosophyRef} style={{
              background: 'rgba(10,10,10,0.75)', border: '1px solid rgba(245,240,232,0.05)',
              borderRadius: 'var(--r-md)', padding: 28, backdropFilter: 'blur(8px)',
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--blood)', textTransform: 'uppercase', marginBottom: 16, letterSpacing: '0.12em' }}>
                PHILOSOPHY
              </div>
              <p style={{ fontSize: '1rem', color: 'rgba(245,240,232,0.6)', lineHeight: 1.8, fontStyle: 'italic' }}>
                "The best way to predict the future is to build it."
              </p>
              <div style={{ marginTop: 16, fontSize: '0.85rem', color: 'rgba(245,240,232,0.4)', lineHeight: 1.7 }}>
                Constantly learning, constantly evolving. Every project is a new chapter in the story of building intelligent systems.
              </div>
            </div>
          </>
        }
      />
    </SectionBg>
  );
}
