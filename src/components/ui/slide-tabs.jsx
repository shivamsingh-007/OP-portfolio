import React, { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";

const tabs = [
  { label: "Origin", href: "#origin" },
  { label: "Powers", href: "#powers" },
  { label: "Missions", href: "#missions" },
  { label: "Allies", href: "#allies" },
  { label: "Contact", href: "#contact" },
];

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const handleTabClick = useCallback((href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <ul
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
      style={{
        position: 'relative',
        display: 'flex',
        width: 'fit-content',
        margin: '0 auto',
        borderRadius: 'var(--r-full)',
        border: '2px solid var(--blood)',
        background: 'rgba(10,10,10,0.85)',
        backdropFilter: 'blur(12px)',
        padding: '4px',
        listStyle: 'none',
        zIndex: 80,
      }}
    >
      {tabs.map((tab) => (
        <Tab key={tab.label} setPosition={setPosition} href={tab.href} onClick={handleTabClick}>
          {tab.label}
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition, href, onClick }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      onClick={() => onClick(href)}
      style={{
        position: 'relative',
        zIndex: 10,
        cursor: 'pointer',
        padding: '8px 16px',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.7rem',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        color: 'var(--paper)',
        transition: 'color 0.2s ease',
        userSelect: 'none',
      }}
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{ ...position }}
      style={{
        position: 'absolute',
        zIndex: 0,
        height: '32px',
        borderRadius: 'var(--r-full)',
        background: 'var(--blood)',
        top: '4px',
        boxShadow: '0 0 14px rgba(196,30,58,0.4)',
      }}
    />
  );
};

export const SlideTabsExample = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 80,
      padding: '12px 0',
      display: 'flex',
      justifyContent: 'center',
      opacity: visible ? 1 : 0,
      pointerEvents: visible ? 'auto' : 'none',
      transition: 'opacity 0.4s ease',
    }}>
      <SlideTabs />
    </div>
  );
};
