const assets = [
  { src: '/assets/download1.jpg', alt: 'Spider-Verse' },
  { src: '/assets/download2.jpg', alt: 'Spider-Man Swinging' },
  { src: '/assets/download3.jpg', alt: 'Spider-Man Action' },
  { src: '/assets/spider-man.webp', alt: 'Spider-Man' },
  { src: '/assets/spiderman-wallpaper.webp', alt: 'Spider-Man Wallpaper' },
  { src: '/assets/spiderman-art.webp', alt: 'Spider-Man Art' },
  { src: '/assets/spiderman-action.webp', alt: 'Spider-Man Dynamic' },
  { src: '/assets/noir.jpg', alt: 'Spider-Man Noir' },
  { src: '/assets/spiderrr.jpg', alt: 'Spider-Man Close' },
];

function DividerStyle1({ src, alt }) {
  return (
    <div style={{ padding: '24px clamp(16px,4vw,80px)', display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'flex', gap: 6, alignItems: 'center', width: '100%', maxWidth: 600 }}>
        <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, var(--blood))' }} />
        <div style={{ width: 50, height: 50, borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--blood)', flexShrink: 0, opacity: 0.4 }}>
          <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.5) brightness(0.6)' }} />
        </div>
        <div style={{ flex: 1, height: 1, background: 'linear-gradient(270deg, transparent, var(--blood))' }} />
      </div>
    </div>
  );
}

function DividerStyle2({ src, alt }) {
  return (
    <div style={{ padding: '16px clamp(16px,4vw,80px)' }}>
      <div style={{ position: 'relative', height: 60, borderRadius: 'var(--r-sm)', overflow: 'hidden', opacity: 0.15 }}>
        <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0) brightness(0.4)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, var(--ink), transparent 30%, transparent 70%, var(--ink))' }} />
      </div>
    </div>
  );
}

function DividerStyle3({ src, alt }) {
  return (
    <div style={{ padding: '20px clamp(16px,4vw,80px)', display: 'flex', justifyContent: 'center', gap: 8 }}>
      {[0, 1, 2].map(i => (
        <div key={i} style={{ width: 40, height: 40, borderRadius: 'var(--r-sm)', overflow: 'hidden', border: '1px solid rgba(196,30,58,0.15)', opacity: 0.25, transform: `rotate(${i * 5 - 5}deg)` }}>
          <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.3) brightness(0.5)' }} />
        </div>
      ))}
    </div>
  );
}

function DividerStyle4({ src, alt }) {
  return (
    <div style={{ padding: '12px clamp(16px,4vw,80px)' }}>
      <div style={{ display: 'flex', height: 3, borderRadius: 2, overflow: 'hidden', opacity: 0.2 }}>
        <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0) brightness(0.5)' }} />
      </div>
    </div>
  );
}

const styles = [DividerStyle1, DividerStyle2, DividerStyle3, DividerStyle4];

export default function SectionDivider({ index = 0 }) {
  const asset = assets[index % assets.length];
  const Style = styles[index % styles.length];
  return <Style src={asset.src} alt={asset.alt} />;
}
