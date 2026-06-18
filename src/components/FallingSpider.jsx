import { useState, useEffect, useRef } from 'react';

export default function FallingSpider({ stopAtRef, behindSectionRef }) {
  const [scrollY, setScrollY] = useState(0);
  const [stopped, setStopped] = useState(false);
  const [dims, setDims] = useState({ innerH: 800, docH: 1600 });
  const [behindProjects, setBehindProjects] = useState(false);

  useEffect(() => {
    const updateDims = () => {
      setDims({ innerH: window.innerHeight, docH: document.documentElement.scrollHeight });
    };
    updateDims();
    window.addEventListener('resize', updateDims, { passive: true });
    return () => window.removeEventListener('resize', updateDims);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
      if (stopAtRef?.current) {
        const rect = stopAtRef.current.getBoundingClientRect();
        const centerOfSection = rect.top + rect.height / 2;
        setStopped(centerOfSection <= dims.innerH * 0.5);
      }
      if (behindSectionRef?.current) {
        const rect = behindSectionRef.current.getBoundingClientRect();
        setBehindProjects(rect.top < dims.innerH * 0.5 && rect.bottom > 0);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [stopAtRef, behindSectionRef, dims.innerH]);

  const heroH = dims.innerH;
  const docH = dims.docH - heroH;
  const pastHero = Math.max(0, scrollY - heroH);
  const progress = docH > 0 ? pastHero / docH : 0;

  const visible = scrollY > heroH * 0.8;
  const fallY = stopped ? 50 : (-8 + progress * 100);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        left: '50%',
        top: `${fallY}vh`,
        transform: 'translateX(-50%)',
        width: 'clamp(90px, 11vw, 150px)',
        zIndex: behindProjects ? 1 : 70,
        pointerEvents: 'none',
        opacity: visible ? 0.85 : 0,
        transition: stopped
          ? 'top 0.9s cubic-bezier(0.22,1,0.36,1), opacity 0.5s ease, z-index 0s'
          : 'opacity 0.5s ease, z-index 0s',
      }}
    >
      <div style={{
        position: 'absolute', inset: '-16px -4px',
        background: 'var(--ink)', borderRadius: 'var(--r-lg)',
        zIndex: -1,
      }} />
      <video
        src="/assets/motion.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{ width: '100%', height: 'auto', borderRadius: 'var(--r-md)', position: 'relative' }}
      />
    </div>
  );
}
