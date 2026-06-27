import { useState, useEffect, useRef } from 'react';
import Loader from './components/Loader';
import { SlideTabsExample } from './components/ui/slide-tabs';
import LogoLoop from './components/ui/LogoLoop';
import Hero from './components/Hero';
import FallingSpider from './components/FallingSpider';
import SectionBg from './components/SectionBg';

import CircularGallery from './components/ui/CircularGallery';
import Origin from './components/Origin';
import Powers from './components/Powers';
import Missions from './components/Missions';
import Allies from './components/Allies';
import Chatbot from './components/Chatbot';
import Arcade from './components/Arcade';
import Contact from './components/Contact';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiPython, SiRust, SiDocker, SiGithubactions } from 'react-icons/si';

const galleryItems = [
  { image: '/assets/spider-man.webp', title: 'THE SPIDER-VERSE', subtitle: 'Across every dimension' },
  { image: '/assets/download1.jpg', title: 'WEB OF SHADOWS', subtitle: 'Darkness falls' },
  { image: '/assets/download2.jpg', title: 'THE DARK KNIGHT', subtitle: 'Noir dimension' },
  { image: '/assets/noir.jpg', title: 'NOIR SPIDEY', subtitle: 'Black and white vengeance' },
  { image: '/assets/spine-tingling.webp', title: 'SPINE-TINGLING', subtitle: 'Peter Parker rising' },
  { image: '/assets/spiderman-art.webp', title: 'ARACHNID ART', subtitle: 'Motion in every thread' },
  { image: '/assets/download3.jpg', title: 'THE AMAZING', subtitle: 'With great power' },
  { image: '/assets/spiderman-action.webp', title: 'ACTION FRAMES', subtitle: 'Web-swinging into battle' },
];

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiPython />, title: "Python", href: "https://python.org" },
  { node: <SiRust />, title: "Rust", href: "https://rust-lang.org" },
  { node: <SiDocker />, title: "Docker", href: "https://docker.com" },
  { node: <SiGithubactions />, title: "GitHub Actions", href: "https://github.com/features/actions" },
];

export default function App() {
  const [loading, setLoading] = useState(true);
  const contactRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.5s ease', overflowX: 'hidden' }}>
      {loading && <Loader />}
      {!loading && (
        <>
          <a href="#main-content" style={{
            position: 'absolute', top: -100, left: 16, zIndex: 9999,
            background: 'var(--blood)', color: 'var(--white)', padding: '8px 16px',
            borderRadius: 'var(--r-sm)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
            textDecoration: 'none', fontWeight: 600,
          }}
            onFocus={e => { e.target.style.top = '16px'; }}
            onBlur={e => { e.target.style.top = '-100px'; }}
          >Skip to content</a>
          <FallingSpider stopAtRef={contactRef} behindSectionRef={projectsRef} />
          <SlideTabsExample />
          <main id="main-content" role="main">
            <Hero />
            <section aria-label="Project gallery" style={{ background: 'var(--ink)', overflow: 'hidden' }}>
              <SectionBg src="/assets/gallery-bg.jpg" brightness={0.3} opacity={0.5} clip={false}>
                <CircularGallery items={galleryItems} />
              </SectionBg>
            </section>
            <section aria-label="About me">
              <SectionBg src="/assets/origin-powers-bg.webp" brightness={0.35} opacity={0.55}>
                <div id="origin"><Origin /></div>
                <div id="powers"><Powers /></div>
              </SectionBg>
            </section>
            <section ref={projectsRef} aria-label="Projects">
              <div id="missions"><Missions /></div>
            </section>
            <section aria-label="Education">
              <div id="allies"><Allies /></div>
            </section>
            <section aria-label="Interactive games and chatbot">
              <SectionBg src="/assets/game-bg.jpg" brightness={0.4} opacity={0.6} rotate>
                <Chatbot />
                <Arcade />
              </SectionBg>
            </section>
            <section aria-label="Technology stack" style={{
              padding: 'clamp(32px, 5vw, 60px) clamp(16px, 4vw, 80px)',
              overflow: 'hidden',
            }}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                color: 'var(--blood)', textTransform: 'uppercase',
                letterSpacing: '0.12em', textAlign: 'center', marginBottom: 20,
              }}>
                TECH STACK
              </div>
              <LogoLoop
                logos={techLogos}
                speed={100}
                direction="left"
                logoHeight={36}
                gap={48}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="#0A0A0A"
                ariaLabel="Technology stack"
              />
            </section>
            <div ref={contactRef} id="contact">
              <Contact />
            </div>
          </main>
        </>
      )}
    </div>
  );
}
