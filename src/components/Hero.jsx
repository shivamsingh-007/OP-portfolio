import { useEffect, useRef, useState } from 'react';
import { personal } from '../data/content';
import { useGsapReveal } from '../hooks/useGsap';

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [dims, setDims] = useState({ w: 1200, h: 800 });
  const heroRef = useRef(null);
  const chapterRef = useGsapReveal({ y: 30, delay: 0.2 });
  const nameRef = useGsapReveal({ y: 50, delay: 0.4 });
  const titleRef = useGsapReveal({ y: 20, delay: 0.6 });
  const lineRef = useGsapReveal({ y: 0, duration: 0.6, delay: 0.7 });
  const taglineRef = useGsapReveal({ y: 20, delay: 0.8 });
  const ctaRef = useGsapReveal({ y: 20, delay: 1.0 });

  useEffect(() => {
    const updateDims = () => setDims({ w: window.innerWidth, h: window.innerHeight });
    updateDims();
    window.addEventListener('resize', updateDims, { passive: true });
    return () => window.removeEventListener('resize', updateDims);
  }, []);

  useEffect(() => {
    const onMove = e => setMouse({ x: e.clientX, y: e.clientY });
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('mousemove', onMove); window.removeEventListener('scroll', onScroll); };
  }, []);

  const mx = (mouse.x / (dims.w || 1) - 0.5) * 8;
  const my = (mouse.y / (dims.h || 1) - 0.5) * 5;
  const parallaxY = scrollY * 0.3;

  return (
    <section ref={heroRef} id="hero" role="banner" style={{
      position: 'relative', width: '100%', height: '100vh', minHeight: 600,
      overflow: 'hidden',
    }}>
      <div aria-hidden="true" style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: `translate(-50%, -50%) translate(${mx * 0.2}px, ${-parallaxY * 0.5 + my * 0.2}px)`,
        width: '100vw', height: '100vh',
        backgroundImage: 'url(/assets/spiderman.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        willChange: 'transform',
      }} />

      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: `linear-gradient(180deg, rgba(5,5,8,0.35) 0%, rgba(5,5,8,0.2) 20%, rgba(10,10,10,0.6) 55%, rgba(10,10,10,0.92) 80%, #0A0A0A 100%)`,
      }} />

      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at center, transparent 30%, rgba(5,5,8,0.7) 100%)',
      }} />

      <div style={{
        position: 'relative', zIndex: 10, width: '100%', height: '100%',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '0 clamp(20px, 5vw, 80px)',
        transform: `translateY(${-parallaxY * 0.15}px)`,
      }}>
        <div ref={chapterRef} style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--blood)',
          textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 24,
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <span style={{ width: 28, height: 1, background: 'var(--blood)' }} />
          CHAPTER 00 // ORIGIN
        </div>

        <div ref={nameRef} style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          flexWrap: 'wrap', gap: '0 clamp(12px, 3vw, 40px)',
          marginBottom: 24,
        }}>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(4rem, 14vw, 11rem)',
            color: 'var(--paper)',
            lineHeight: 0.85,
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
            textShadow: '0 4px 40px rgba(0,0,0,0.5)',
          }}>
            {personal.name.split(' ')[0]}
          </h1>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(4rem, 14vw, 11rem)',
            color: 'var(--paper)',
            lineHeight: 0.85,
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
            textShadow: '0 4px 40px rgba(0,0,0,0.5)',
          }}>
            {personal.name.split(' ')[1]}
          </h1>
        </div>

        <div ref={titleRef} style={{
          fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.55rem, 1.2vw, 0.75rem)',
          color: 'rgba(245,240,232,0.4)', textTransform: 'uppercase',
          letterSpacing: '0.2em', marginBottom: 20,
        }}>{personal.title}</div>

        <div ref={lineRef} style={{
          width: 56, height: 3, background: 'var(--blood)', marginBottom: 20,
          borderRadius: 2, boxShadow: '0 0 14px var(--blood-glow)',
        }} />

        <p ref={taglineRef} style={{
          fontSize: 'clamp(0.9rem, 1.6vw, 1.1rem)', color: 'rgba(245,240,232,0.6)',
          maxWidth: 440, lineHeight: 1.75, marginBottom: 32,
        }}>{personal.tagline}</p>

        <div ref={ctaRef} style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href="#missions" style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.7rem', background: 'var(--blood)',
            color: 'var(--white)', padding: '11px 22px', borderRadius: 'var(--r-sm)',
            textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.06em',
            fontWeight: 600, cursor: 'pointer', transition: 'all var(--t-fast)', border: 'none',
          }}
            onMouseEnter={e => { e.target.style.boxShadow = 'var(--shadow-red-glow)'; e.target.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.target.style.boxShadow = 'none'; e.target.style.transform = 'none'; }}
          >View Missions</a>
          <a href="#contact" style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.7rem', background: 'transparent',
            color: 'var(--paper)', padding: '11px 22px', borderRadius: 'var(--r-sm)',
            textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.06em',
            border: '1px solid rgba(245,240,232,0.15)', cursor: 'pointer', transition: 'all var(--t-fast)',
          }}
            onMouseEnter={e => { e.target.style.borderColor = 'var(--blood)'; e.target.style.color = 'var(--blood)'; }}
            onMouseLeave={e => { e.target.style.borderColor = 'rgba(245,240,232,0.15)'; e.target.style.color = 'var(--paper)'; }}
          >Open Case File</a>
        </div>
      </div>

      <div aria-hidden="true" style={{
        position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)',
        zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5,
      }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', color: 'rgba(245,240,232,0.2)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>SCROLL</div>
        <div style={{ width: 16, height: 26, border: '1px solid rgba(245,240,232,0.12)', borderRadius: 8, position: 'relative' }}>
          <div style={{ width: 2, height: 5, background: 'var(--blood)', borderRadius: 1, position: 'absolute', top: 4, left: '50%', transform: 'translateX(-50%)', animation: 'float 1.4s ease-in-out infinite' }} />
        </div>
      </div>
    </section>
  );
}
