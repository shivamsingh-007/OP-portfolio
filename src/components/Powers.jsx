import { Brain, Code, Cpu, Cloud, Database, Wrench } from 'lucide-react';
import SplitSection from './SplitSection';
import { useGsapStagger } from '../hooks/useGsap';

const skillGroups = [
  {
    icon: Brain, color: 'var(--blood)', label: 'AI / ML',
    items: ['LLMs', 'RAG', 'Agentic AI', 'PyTorch', 'Scikit-learn', 'Prompt Engineering'],
  },
  {
    icon: Code, color: 'var(--cyan)', label: 'Languages',
    items: ['Python', 'Java', 'SQL', 'R', 'JavaScript', 'DSA'],
  },
  {
    icon: Cpu, color: 'var(--yellow)', label: 'Full-Stack',
    items: ['React', 'FastAPI', 'Node.js', 'Tailwind', 'GSAP', 'Three.js'],
  },
  {
    icon: Cloud, color: 'var(--magenta)', label: 'Infra & Ops',
    items: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Linux'],
  },
  {
    icon: Database, color: 'var(--blood)', label: 'Data & Vectors',
    items: ['ChromaDB', 'MySQL', 'Embeddings', 'Sentence-Transformers'],
  },
  {
    icon: Wrench, color: 'var(--cyan)', label: 'Tools & Ecosystem',
    items: ['Git', 'HuggingFace', 'OpenRouter', 'VS Code', 'LoRA / QLoRA'],
  },
];

function SkillCard({ group }) {
  const Icon = group.icon;
  return (
    <div className="skill-card" style={{
      background: 'rgba(10,10,10,0.75)', border: '1px solid rgba(245,240,232,0.04)',
      borderRadius: 'var(--r-md)', padding: 18, position: 'relative', overflow: 'hidden',
      cursor: 'default', transition: 'all 0.3s ease', marginBottom: 12,
      backdropFilter: 'blur(8px)',
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = group.color; e.currentTarget.style.transform = 'translateY(-2px)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(245,240,232,0.04)'; e.currentTarget.style.transform = 'none'; }}
    >
      <div style={{ position: 'absolute', top: -20, right: -20, width: 60, height: 60, borderRadius: '50%', background: `${group.color}11` }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
        <Icon size={20} color={group.color} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: group.color, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{group.label}</span>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
        {group.items.map((item, j) => (
          <span key={j} style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.6rem', padding: '3px 8px',
            background: `${group.color}10`, color: 'rgba(245,240,232,0.7)',
            borderRadius: 'var(--r-sm)', border: `1px solid ${group.color}18`,
          }}>{item}</span>
        ))}
      </div>
    </div>
  );
}

export default function Powers() {
  const mid = Math.ceil(skillGroups.length / 2);
  const leftRef = useGsapStagger('.skill-card', { y: 30, stagger: 0.1, duration: 0.7 });
  const rightRef = useGsapStagger('.skill-card', { y: 30, stagger: 0.1, duration: 0.7 });

  return (
    <SplitSection
      label="POWERS"
      left={
        <div ref={leftRef}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--paper)', textTransform: 'uppercase', marginBottom: 20 }}>
            <span style={{ color: 'var(--blood)' }}>SUPER</span> POWERS
          </h2>
          {skillGroups.slice(0, mid).map((g, i) => <SkillCard key={i} group={g} />)}
        </div>
      }
      right={
        <div ref={rightRef}>
          <div style={{ height: 60 }} />
          {skillGroups.slice(mid).map((g, i) => <SkillCard key={i} group={g} />)}
        </div>
      }
    />
  );
}
