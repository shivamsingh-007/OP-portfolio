import { useEffect, useRef, useState } from 'react';
import './CircularGallery.css';

export default function CircularGallery({ items }) {
  const containerRef = useRef(null);
  const [angle, setAngle] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);
  const rafRef = useRef(null);
  const currentAngle = useRef(0);

  const total = items.length;
  const angleStep = 360 / total;
  const radius = typeof window !== 'undefined'
    ? Math.max(240, Math.min(window.innerWidth * 0.32, 450))
    : 350;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      const sectionH = rect.height;

      const visibleTop = -rect.top;
      const scrollable = sectionH - viewH;
      if (scrollable <= 0) return;

      const progress = Math.max(0, Math.min(1, visibleTop / scrollable));
      currentAngle.current = progress * total * angleStep;
    };

    const animate = () => {
      setAngle(currentAngle.current);

      const norm = (((-currentAngle.current % 360) + 360) % 360);
      const idx = Math.round(norm / angleStep) % total;
      setActiveIdx(idx);

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    rafRef.current = requestAnimationFrame(animate);
    onScroll();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('scroll', onScroll);
    };
  }, [total, angleStep]);

  const activeItem = items[activeIdx] || items[0];

  return (
    <div ref={containerRef} className="CircularGallery">
      <div className="cg-sticky">
        <div className="cg-scene">
          <div
            className="cg-ring"
            style={{ transform: `translateZ(-${radius}px) rotateY(${angle}deg)` }}
          >
            {items.map((item, i) => (
              <div
                key={i}
                className="cg-card"
                style={{
                  transform: `rotateY(${i * angleStep}deg) translateZ(${radius}px)`,
                }}
              >
                <img src={item.image} alt={item.title} draggable={false} />
              </div>
            ))}
          </div>
        </div>
        <div className="InfoOverlay">
          <h3>{activeItem?.title}</h3>
          <p>{activeItem?.subtitle}</p>
        </div>
      </div>
    </div>
  );
}
