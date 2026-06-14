import { useState, useEffect, useRef } from 'react';
import Loader from './components/Loader';
import { SlideTabsExample } from './components/ui/slide-tabs';
import LogoLoop from './components/ui/LogoLoop';
import Hero from './components/Hero';

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

function FallingSpider({ stopAtRef }) {
  const [scrollY, setScrollY] = useState(0);
  const [stopped, setStopped] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
      if (stopAtRef?.current) {
        const rect = stopAtRef.current.getBoundingClientRect();
        const centerOfSection = rect.top + rect.height / 2;
        if (centerOfSection <= window.innerHeight * 0.5) setStopped(true);
        else setStopped(false);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [stopAtRef]);

  const heroH = window.innerHeight;
  const docH = document.documentElement.scrollHeight - heroH;
  const pastHero = Math.max(0, scrollY - heroH);
  const progress = docH > 0 ? pastHero / docH : 0;

  const visible = scrollY > heroH * 0.8;
  const fallY = stopped ? 50 : (-8 + progress * 100);

  return (
    <div style={{
      position: 'fixed', left: '50%', top: `${fallY}vh`,
      transform: 'translateX(-50%)', width: 'clamp(90px, 11vw, 150px)',
      zIndex: 70, pointerEvents: 'none', opacity: visible ? 0.85 : 0,
      transition: stopped ? 'top 0.9s cubic-bezier(0.22,1,0.36,1), opacity 0.5s ease' : 'opacity 0.5s ease',
    }}>
      <div style={{
        position: 'absolute', inset: '-16px -4px',
        background: 'var(--ink)', borderRadius: 'var(--r-lg)',
        zIndex: -1,
      }} />
      <video src="/assets/motion.mp4" autoPlay muted loop playsInline preload="auto"
        style={{ width: '100%', height: 'auto', borderRadius: 'var(--r-md)', position: 'relative' }} />
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const contactRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.5s ease' }}>
      {loading && <Loader />}
      {!loading && (
        <>
          <FallingSpider stopAtRef={contactRef} />
          <SlideTabsExample />
          <main>
            <Hero />
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden',
              }}>
                <img src="/assets/gallery-bg.jpg" alt="" style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  filter: 'grayscale(1) brightness(0.3) contrast(1.3)',
                  opacity: 0.5,
                }} />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(180deg, var(--ink) 0%, transparent 8%, transparent 92%, var(--ink) 100%)',
                }} />
              </div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <CircularGallery items={galleryItems} />
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden',
              }}>
                <img src="/assets/origin-powers-bg.webp" alt="" style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  filter: 'grayscale(1) brightness(0.35) contrast(1.3)',
                  opacity: 0.55,
                }} />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(180deg, var(--ink) 0%, transparent 8%, transparent 92%, var(--ink) 100%)',
                }} />
              </div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div id="origin"><Origin /></div>
                <div id="powers"><Powers /></div>
              </div>
            </div>
            <div id="missions"><Missions /></div>
            <div id="allies"><Allies /></div>
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden',
              }}>
                <img src="/assets/game-bg.jpg" alt="" style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  filter: 'grayscale(1) brightness(0.4) contrast(1.3)',
                  opacity: 0.6,
                  transform: 'rotate(180deg)',
                }} />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(180deg, var(--ink) 0%, transparent 8%, transparent 92%, var(--ink) 100%)',
                }} />
              </div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <Chatbot />
                <Arcade />
              </div>
            </div>
            <div style={{
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
            </div>
            <div ref={contactRef} id="contact">
              <Contact />
            </div>
          </main>
        </>
      )}
    </div>
  );
}
