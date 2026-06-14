import { personal } from '../data/content';
import { FileCheck } from 'lucide-react';
import SplitSection from './SplitSection';

export default function CaseFiles() {
  const certs = personal.certificates;

  return (
    <SplitSection
      label="CASE FILES"
      left={
        <>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--paper)', textTransform: 'uppercase', marginBottom: 20 }}>
            CASE <span style={{ color: 'var(--blood)' }}>FILES</span>
          </h2>
          {certs.map((c, i) => (
            <div key={i} style={{
              background: 'rgba(18,18,18,0.6)', border: '1px solid rgba(245,240,232,0.04)',
              borderRadius: 'var(--r-md)', padding: 20, position: 'relative', overflow: 'hidden',
              cursor: 'default', transition: 'all 0.3s ease', marginBottom: 14,
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--yellow)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(245,240,232,0.04)'; e.currentTarget.style.transform = 'none'; }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                <FileCheck size={20} color="var(--yellow)" />
                <span style={{ fontSize: '1rem', color: 'var(--paper)', fontWeight: 600 }}>{c.name}</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(245,240,232,0.45)', paddingLeft: 30 }}>{c.issuer}</div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(245,240,232,0.3)', fontFamily: 'var(--font-mono)', marginTop: 4, paddingLeft: 30 }}>{c.year}</div>
            </div>
          ))}
        </>
      }
      right={
        <>
          <div style={{ height: 48 }} />
          <div style={{
            background: 'rgba(18,18,18,0.6)', border: '1px solid rgba(245,240,232,0.05)',
            borderRadius: 'var(--r-md)', padding: 28,
          }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--blood)', textTransform: 'uppercase', marginBottom: 16, letterSpacing: '0.12em' }}>
              CREDENTIALS LOG
            </div>
            <div style={{ fontSize: '0.9rem', color: 'rgba(245,240,232,0.5)', lineHeight: 1.7 }}>
              Verified certifications in cloud infrastructure, AI/ML fundamentals, and deep learning architectures.
            </div>
            <div style={{ marginTop: 16, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['AWS', 'GCP', 'Coursera', 'Cloud', 'AI/ML', 'Deep Learning'].map((tag, i) => (
                <span key={i} style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.6rem', padding: '3px 8px',
                  background: 'rgba(255,227,48,0.1)', color: 'var(--yellow)',
                  borderRadius: 'var(--r-sm)', textTransform: 'uppercase',
                }}>{tag}</span>
              ))}
            </div>
          </div>
        </>
      }
    />
  );
}
