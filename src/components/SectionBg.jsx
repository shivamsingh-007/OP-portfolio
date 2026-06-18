import { useGsapParallax } from '../hooks/useGsap';

export default function SectionBg({
  src,
  alt = '',
  brightness = 0.35,
  contrast = 1.3,
  opacity = 0.55,
  rotate = false,
  clip = true,
  children,
}) {
  const parallaxRef = useGsapParallax(0.15);

  return (
    <div style={{ position: 'relative', overflow: clip ? 'hidden' : 'visible' }}>
      <div style={{ position: 'absolute', inset: clip ? '-20% 0' : '0 0', zIndex: 0, overflow: 'hidden' }}>
        <img
          ref={parallaxRef}
          src={src}
          alt={alt}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: `grayscale(1) brightness(${brightness}) contrast(${contrast})`,
            opacity,
            transform: rotate ? 'rotate(180deg)' : 'none',
          }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, var(--ink) 0%, transparent 8%, transparent 92%, var(--ink) 100%)',
        }} />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}
