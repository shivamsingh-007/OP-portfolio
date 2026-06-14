import { useState, useRef, useEffect, useCallback } from 'react';
import { Trophy, RotateCcw } from 'lucide-react';
import SplitSection from './SplitSection';

const W = 400, H = 250, GRAVITY = 0.22, JUMP = -6.5, GAP = 150, SPEED = 1.8;

export default function Arcade() {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const gameRef = useRef(null);

  const initGame = useCallback(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;
    setScore(0); setGameOver(false);
    const g = {
      spider: { x: 60, y: H / 2, vy: 0, frame: 0 },
      pipes: [], frame: 0, score: 0, over: false, running: true, loop: null,
    };
    gameRef.current = g;

    const drawSpider = () => {
      const { x, y, frame } = g.spider;
      ctx.save(); ctx.translate(x, y);
      ctx.fillStyle = '#C41E3A'; ctx.beginPath(); ctx.ellipse(0, 0, 10, 7, 0, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#0A0A0A';
      ctx.beginPath(); ctx.arc(-3.5, -2, 2.5, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(3.5, -2, 2.5, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = '#C41E3A'; ctx.lineWidth = 1.4;
      const a = Math.sin(frame * 0.25) * 0.5;
      [-1, 1].forEach(s => {
        ctx.beginPath(); ctx.moveTo(s * 4, -2); ctx.quadraticCurveTo(s * 14, -10 + a * 8, s * 18, -14 + a * 10); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(s * 4, 0); ctx.quadraticCurveTo(s * 14, 6 - a * 6, s * 16, 10 - a * 8); ctx.stroke();
      });
      ctx.restore();
    };

    const drawPipe = (p) => {
      const top = p.gap, btm = p.gap + GAP;
      ctx.fillStyle = '#C41E3A'; ctx.fillRect(p.x, 0, 26, top); ctx.fillRect(p.x, btm, 26, H - btm);
      ctx.fillStyle = '#FF3366'; ctx.fillRect(p.x + 2, top - 6, 22, 6); ctx.fillRect(p.x + 2, btm, 22, 6);
      ctx.fillStyle = 'rgba(245,240,232,0.04)'; ctx.fillRect(p.x + 4, 0, 18, top - 8); ctx.fillRect(p.x + 4, btm + 6, 18, H - btm - 12);
    };

    const loop = () => {
      if (g.over) return;
      ctx.fillStyle = '#0A0A0A'; ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = 'rgba(196,30,58,0.04)';
      for (let i = 0; i < W; i += 20) ctx.fillRect(i, 0, 1, H);
      for (let i = 0; i < H; i += 20) ctx.fillRect(0, i, W, 1);
      g.spider.vy += GRAVITY; g.spider.y += g.spider.vy; g.spider.frame++;
      if (g.frame % 100 === 0) g.pipes.push({ x: W + 10, gap: 40 + Math.random() * (H - GAP - 80), scored: false });
      g.pipes.forEach(p => { p.x -= SPEED; });
      g.pipes = g.pipes.filter(p => p.x > -30);
      g.pipes.forEach(p => { if (!p.scored && p.x + 26 < g.spider.x) { p.scored = true; g.score++; setScore(g.score); } });
      const sx = g.spider.x, sy = g.spider.y;
      if (sy < 0 || sy > H) { g.over = true; setGameOver(true); setHighScore(h => Math.max(h, g.score)); return; }
      for (const p of g.pipes) {
        if (sx + 8 > p.x && sx - 8 < p.x + 26 && (sy - 7 < p.gap || sy + 7 > p.gap + GAP)) {
          g.over = true; setGameOver(true); setHighScore(h => Math.max(h, g.score)); return;
        }
      }
      g.pipes.forEach(drawPipe); drawSpider();
      ctx.fillStyle = 'rgba(245,240,232,0.2)'; ctx.font = '12px JetBrains Mono, monospace';
      ctx.fillText(`SCORE: ${g.score}`, 10, 16);
      g.frame++; g.loop = requestAnimationFrame(loop);
    };
    g.loop = requestAnimationFrame(loop);
  }, []);

  const restart = () => { if (gameRef.current?.loop) cancelAnimationFrame(gameRef.current.loop); initGame(); };
  useEffect(() => { initGame(); return () => { if (gameRef.current?.loop) cancelAnimationFrame(gameRef.current.loop); }; }, [initGame]);

  const handleInput = useCallback((e) => {
    if (e.type === 'keydown' && e.code !== 'Space' && e.code !== 'ArrowUp') return;
    e.preventDefault();
    const g = gameRef.current;
    if (g?.over) { restart(); return; }
    if (g?.running) g.spider.vy = JUMP;
  }, []);

  return (
    <SplitSection
      label="ARCADE"
      left={
        <>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--paper)', textTransform: 'uppercase', marginBottom: 16 }}>
            WEB <span style={{ color: 'var(--blood)' }}>SWING</span>
          </h2>
          <div style={{
            background: 'rgba(18,18,18,0.8)', border: '1px solid rgba(245,240,232,0.06)',
            borderRadius: 'var(--r-md)', padding: 14, position: 'relative',
          }}>
            <canvas ref={canvasRef} width={W} height={H} tabIndex={0} onClick={handleInput} onKeyDown={handleInput} onTouchStart={handleInput}
              style={{ width: '100%', maxWidth: 440, height: 'auto', borderRadius: 'var(--r-sm)', display: 'block', outline: 'none', cursor: 'pointer' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, padding: '0 4px' }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <div style={{ fontSize: '0.7rem', color: 'rgba(245,240,232,0.4)', fontFamily: 'var(--font-mono)' }}>
                  SCORE: <span style={{ color: 'var(--paper)' }}>{score}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Trophy size={12} color="var(--yellow)" />
                  <span style={{ fontSize: '0.7rem', color: 'var(--yellow)', fontFamily: 'var(--font-mono)' }}>{highScore}</span>
                </div>
              </div>
              <button onClick={restart} style={{
                background: 'rgba(196,30,58,0.1)', border: '1px solid rgba(196,30,58,0.2)',
                borderRadius: 'var(--r-sm)', padding: '4px 8px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 5, color: 'var(--blood)', fontSize: '0.65rem', fontFamily: 'var(--font-mono)',
              }}><RotateCcw size={12} /> RESET</button>
            </div>
            {gameOver && (
              <div style={{
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
                fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--blood)',
                textShadow: '0 0 20px rgba(196,30,58,0.5)', textAlign: 'center',
              }}>
                GAME OVER<div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'rgba(245,240,232,0.5)' }}>TAP TO RESTART</div>
              </div>
            )}
          </div>
        </>
      }
      right={
        <>
          <div style={{ height: 48 }} />
          <div style={{
            background: 'rgba(18,18,18,0.6)', border: '1px solid rgba(245,240,232,0.05)',
            borderRadius: 'var(--r-md)', padding: 28,
          }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--blood)', textTransform: 'uppercase', marginBottom: 16, letterSpacing: '0.12em' }}>
              LEADERBOARD
            </div>
            <div style={{ fontSize: '0.9rem', color: 'rgba(245,240,232,0.5)', lineHeight: 1.7 }}>
              Guide Spider-Man through the city. Tap or Space to swing. Dodge the obstacles and set a high score.
            </div>
            <div style={{ marginTop: 16, padding: '10px 0', borderTop: '1px solid rgba(245,240,232,0.04)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem' }}>
                <span style={{ color: 'rgba(245,240,232,0.4)', fontFamily: 'var(--font-mono)' }}>BEST</span>
                <span style={{ color: 'var(--yellow)', fontFamily: 'var(--font-mono)' }}>{highScore}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', marginTop: 6 }}>
                <span style={{ color: 'rgba(245,240,232,0.4)', fontFamily: 'var(--font-mono)' }}>CURRENT</span>
                <span style={{ color: 'var(--paper)', fontFamily: 'var(--font-mono)' }}>{score}</span>
              </div>
            </div>
          </div>
        </>
      }
    />
  );
}
