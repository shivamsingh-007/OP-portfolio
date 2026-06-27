import { useState } from 'react';
import { Brain, Code, Cpu, Cloud, Database, Wrench, Shield, Zap, Crosshair, Circle } from 'lucide-react';
import SplitSection from './SplitSection';
import { useGsapStagger } from '../hooks/useGsap';

const heroes = [
  {
    icon: Brain, color: 'var(--blood)', label: 'AI / ML',
    items: ['LLMs', 'RAG', 'Agentic AI', 'PyTorch', 'Scikit-learn', 'Prompt Engineering'],
    hero: 'ironman', bg: 'linear-gradient(135deg, #8B0000 0%, #1a1a1a 100%)',
    border: '#C41E3A', accent: '#FFD700', emblem: Zap,
    idle: 'idle-float', hover: 'hover-boost',
  },
  {
    icon: Code, color: 'var(--cyan)', label: 'Languages',
    items: ['Python', 'Java', 'SQL', 'R', 'JavaScript', 'DSA'],
    hero: 'cap', bg: 'linear-gradient(135deg, #0a1628 0%, #1a1a3a 100%)',
    border: '#1E90FF', accent: '#FFFFFF', emblem: Shield,
    idle: 'idle-stride', hover: 'hover-shield',
  },
  {
    icon: Cpu, color: 'var(--yellow)', label: 'Full-Stack',
    items: ['React', 'FastAPI', 'Node.js', 'Tailwind', 'GSAP', 'Three.js'],
    hero: 'thor', bg: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
    border: '#666666', accent: '#FFFF00', emblem: Zap,
    idle: 'idle-heavy', hover: 'hover-lightning',
  },
  {
    icon: Cloud, color: 'var(--magenta)', label: 'Infra & Ops',
    items: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Linux'],
    hero: 'hulk', bg: 'linear-gradient(135deg, #0a2a0a 0%, #1a3a1a 100%)',
    border: '#32CD32', accent: '#8B4513', emblem: Circle,
    idle: 'idle-stomp', hover: 'hover-smash',
  },
  {
    icon: Database, color: 'var(--blood)', label: 'Data & Vectors',
    items: ['ChromaDB', 'MySQL', 'Embeddings', 'Sentence-Transformers'],
    hero: 'widow', bg: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
    border: '#8B0000', accent: '#FF4444', emblem: Circle,
    idle: 'idle-roll', hover: 'hover-flip',
  },
  {
    icon: Wrench, color: 'var(--cyan)', label: 'Tools & Ecosystem',
    items: ['Git', 'HuggingFace', 'OpenRouter', 'VS Code', 'LoRA / QLoRA'],
    hero: 'hawkeye', bg: 'linear-gradient(135deg, #1a0a2a 0%, #2a1a3a 100%)',
    border: '#9370DB', accent: '#00FF00', emblem: Crosshair,
    idle: 'idle-aim', hover: 'hover-volley',
  },
];

const powStyles = `
@media (max-width: 600px) {
  .pow-grid { grid-template-columns: 1fr !important; }
}
`;

const idleKeyframes = `
@keyframes idle-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}
@keyframes idle-stride {
  0%, 100% { transform: translateY(0) translateX(0); }
  25% { transform: translateY(-3px) translateX(2px); }
  75% { transform: translateY(-3px) translateX(-2px); }
}
@keyframes idle-heavy {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  30% { transform: translateY(-4px) rotate(1deg); }
  70% { transform: translateY(-4px) rotate(-1deg); }
}
@keyframes idle-stomp {
  0%, 100% { transform: translateY(0) scaleX(1); }
  40% { transform: translateY(3px) scaleX(1.02); }
  60% { transform: translateY(-2px) scaleX(0.98); }
}
@keyframes idle-roll {
  0%, 100% { transform: translateX(0) rotate(0deg); }
  25% { transform: translateX(4px) rotate(-3deg); }
  75% { transform: translateX(-4px) rotate(3deg); }
}
@keyframes idle-aim {
  0%, 100% { transform: translateX(0) rotate(0deg); }
  50% { transform: translateX(2px) rotate(-2deg); }
}
`;

const hoverKeyframes = `
@keyframes hover-boost {
  0% { transform: scale(1); box-shadow: 0 0 0 var(--blood-glow); }
  40% { transform: translateY(-12px) scale(1.05); box-shadow: 0 0 30px var(--blood-glow); }
  100% { transform: translateY(0) scale(1); box-shadow: 0 0 0 var(--blood-glow); }
}
@keyframes hover-shield {
  0% { transform: translateX(0); }
  30% { transform: translateX(-8px); }
  60% { transform: translateX(12px); }
  100% { transform: translateX(0); }
}
@keyframes hover-lightning {
  0% { filter: brightness(1); }
  20% { filter: brightness(1.8); }
  40% { filter: brightness(1); }
  60% { filter: brightness(2); }
  100% { filter: brightness(1); }
}
@keyframes hover-smash {
  0% { transform: translateY(0) scale(1); }
  20% { transform: translateY(8px) scale(0.95, 1.1); }
  50% { transform: translateY(-8px) scale(0.98, 1.02); }
  100% { transform: translateY(0) scale(1); }
}
@keyframes hover-flip {
  0% { transform: rotateY(0deg); }
  50% { transform: rotateY(180deg); }
  100% { transform: rotateY(0deg); }
}
@keyframes hover-volley {
  0% { transform: rotate(0deg); }
  30% { transform: rotate(-5deg); }
  60% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
}
@keyframes pulse-glow {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.15); }
}
`;

function HeroOutfit({ hero, accent }) {
  if (hero === 'ironman') return (
    <>
      <div style={{ position: 'absolute', top: 6, left: '50%', transform: 'translateX(-50%)', width: 16, height: 16, borderRadius: '50%', background: accent, boxShadow: `0 0 12px ${accent}`, animation: 'pulse-glow 2s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', top: 4, left: 6, right: 6, height: 3, borderRadius: 2, background: accent, opacity: 0.6 }} />
    </>
  );
  if (hero === 'cap') return (
    <>
      <div style={{ position: 'absolute', top: 6, left: '50%', transform: 'translateX(-50%)', width: 14, height: 14, background: accent, clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', opacity: 0.8 }} />
      <div style={{ position: 'absolute', bottom: 6, left: '50%', transform: 'translateX(-50%)', width: '60%', height: 4, borderRadius: 2, background: 'repeating-linear-gradient(90deg, #C41E3A 0px, #C41E3A 6px, white 6px, white 12px)', opacity: 0.5 }} />
    </>
  );
  if (hero === 'thor') return (
    <>
      <div style={{ position: 'absolute', top: 4, left: '50%', transform: 'translateX(-50%)', width: 4, height: 10, background: accent, borderRadius: 2, opacity: 0.7 }} />
      <div style={{ position: 'absolute', top: 6, right: 8, width: 3, height: 3, borderRadius: '50%', background: '#aaa', opacity: 0.5 }} />
      <div style={{ position: 'absolute', top: 14, right: 8, width: 3, height: 3, borderRadius: '50%', background: '#aaa', opacity: 0.5 }} />
      <div style={{ position: 'absolute', top: 22, right: 8, width: 3, height: 3, borderRadius: '50%', background: '#aaa', opacity: 0.5 }} />
    </>
  );
  if (hero === 'hulk') return (
    <>
      <div style={{ position: 'absolute', bottom: 6, left: 6, right: 6, height: 5, borderRadius: 2, background: 'repeating-linear-gradient(90deg, #8B4513 0px, #8B4513 6px, transparent 6px, transparent 8px)', opacity: 0.4 }} />
      <div style={{ position: 'absolute', top: 4, left: 4, right: 4, height: 2, background: '#32CD32', opacity: 0.15 }} />
    </>
  );
  if (hero === 'widow') return (
    <>
      <div style={{ position: 'absolute', top: 8, left: '50%', transform: 'translateX(-50%)', width: 8, height: 8, borderRadius: '50%', background: accent, opacity: 0.8 }} />
      <div style={{ position: 'absolute', top: '50%', left: 6, right: 6, height: 2, background: accent, opacity: 0.5 }} />
    </>
  );
  if (hero === 'hawkeye') return (
    <>
      <div style={{ position: 'absolute', top: 6, left: 8, width: 2, height: 12, background: accent, opacity: 0.5, transform: 'rotate(15deg)' }} />
      <div style={{ position: 'absolute', bottom: 8, right: 8, width: 10, height: 10, borderRadius: '50%', border: `2px solid ${accent}`, opacity: 0.4 }} />
    </>
  );
  return null;
}

function SkillCard({ group }) {
  const Icon = group.icon;
  const Emblem = group.emblem;
  const { hero, bg, border, accent, idle, hover } = group;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`skill-card pow-${hero}`}
      style={{
        background: bg,
        border: `2px solid ${hovered ? accent : border}`,
        borderRadius: 'var(--r-md)',
        padding: 16,
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
        aspectRatio: '1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        animation: hovered ? `${hover} 0.6s var(--ease)` : `${idle} 3s ease-in-out infinite`,
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        boxShadow: hovered ? `0 0 24px ${accent}44` : 'none',
        backdropFilter: 'blur(4px)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <HeroOutfit hero={hero} accent={accent} />
      <div style={{
        position: 'relative', zIndex: 1,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', textAlign: 'center',
        gap: 8,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
          <Icon size={18} color={accent} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: accent, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{group.label}</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
          {group.items.map((item, j) => (
            <span key={j} style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.55rem', padding: '2px 7px',
              background: `${accent}15`, color: 'rgba(245,240,232,0.7)',
              borderRadius: 'var(--r-sm)', border: `1px solid ${accent}20`,
            }}>{item}</span>
          ))}
        </div>
      </div>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: hovered ? `radial-gradient(circle at center, ${accent}08, transparent 70%)` : 'none',
        transition: 'background 0.3s ease',
      }} />
    </div>
  );
}

export default function Powers() {
  const mid = Math.ceil(heroes.length / 2);
  const leftRef = useGsapStagger('.skill-card', { y: 30, stagger: 0.15, duration: 0.7 });
  const rightRef = useGsapStagger('.skill-card', { y: 30, stagger: 0.15, duration: 0.7 });

  return (
    <>
      <style>{powStyles}{idleKeyframes}{hoverKeyframes}</style>
      <SplitSection
        label="POWERS"
        left={
          <div ref={leftRef}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--paper)', textTransform: 'uppercase', marginBottom: 20 }}>
              <span style={{ color: 'var(--blood)' }}>SUPER</span> POWERS
            </h2>
            <div className="pow-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {heroes.slice(0, mid).map((g, i) => <SkillCard key={i} group={g} />)}
            </div>
          </div>
        }
        right={
          <div ref={rightRef}>
            <div style={{ height: 48 }} />
            <div className="pow-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {heroes.slice(mid).map((g, i) => <SkillCard key={i} group={g} />)}
            </div>
          </div>
        }
      />
    </>
  );
}