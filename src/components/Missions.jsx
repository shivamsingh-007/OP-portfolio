import { personal } from '../data/content';
import { CardStack } from './ui/card-stack';
import SplitSection from './SplitSection';
import SectionBg from './SectionBg';

const projectImages = [
  'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1531746790095-e5995f601e36?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
];

export default function Missions() {
  const projects = personal.projects;

  const cardItems = projects.map((p, i) => ({
    id: p.issue || i,
    title: p.title,
    subtitle: p.subtitle,
    description: p.description,
    imageSrc: projectImages[i % projectImages.length],
    href: p.repo,
    tech: p.tech,
    color: p.color,
  }));

  return (
    <SectionBg src="/assets/missions-bg.jpg" brightness={0.4} opacity={0.6} rotate>
      <div style={{
        padding: 'clamp(60px, 8vw, 100px) clamp(16px, 4vw, 80px)',
      }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
            color: 'var(--blood)', textTransform: 'uppercase',
            letterSpacing: '0.12em', marginBottom: 12,
          }}>
            CASE FILES
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            color: 'var(--paper)',
            textTransform: 'uppercase',
            lineHeight: 1,
          }}>
            ACTIVE <span style={{ color: 'var(--blood)' }}>MISSIONS</span>
          </h2>
        </div>

        <CardStack
          items={cardItems}
          initialIndex={0}
          maxVisible={5}
          cardWidth={Math.min(520, typeof window !== 'undefined' ? window.innerWidth - 80 : 520)}
          cardHeight={340}
          overlap={0.45}
          spreadDeg={40}
          autoAdvance
          intervalMs={3000}
          pauseOnHover
          showDots
          loop
        />
      </div>
    </SectionBg>
  );
}
