import { useState, useRef, useEffect } from 'react';
import { personal } from '../data/content';
import { MessageCircle, Send } from 'lucide-react';
import SplitSection from './SplitSection';

const quickActions = ['skills', 'projects', 'education', 'contact', 'about', 'experience', 'ai', 'hire'];

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hey! I am SAM — Shivam\'s AI Mission Assistant. Ask me anything!' },
  ]);
  const [input, setInput] = useState('');
  const messagesEnd = useRef(null);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (messagesEnd.current && chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const respond = (text) => {
    const q = text.toLowerCase().trim();
    setMessages(prev => [...prev, { from: 'user', text }]);
    let reply = personal.chatbotResponses.default;
    for (const [key, val] of Object.entries(personal.chatbotResponses)) {
      if (key !== 'default' && q.includes(key)) { reply = val; break; }
    }
    setTimeout(() => setMessages(prev => [...prev, { from: 'bot', text: reply }]), 400);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    respond(input.trim());
    setInput('');
  };

  return (
    <SplitSection
      label="SAM AI"
      left={
        <>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--paper)', textTransform: 'uppercase', marginBottom: 16 }}>
            MISSION <span style={{ color: 'var(--blood)' }}>CONTROL</span>
          </h2>
          <div style={{
            background: 'rgba(18,18,18,0.8)', border: '1px solid rgba(245,240,232,0.06)',
            borderRadius: 'var(--r-md)', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: 340,
          }}>
            <div style={{ padding: '10px 14px', borderBottom: '1px solid rgba(245,240,232,0.06)', display: 'flex', alignItems: 'center', gap: 8 }}>
              <MessageCircle size={16} color="var(--blood)" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--blood)', textTransform: 'uppercase' }}>SAM ONLINE</span>
            </div>
            <div ref={chatContainerRef} style={{ flex: 1, overflowY: 'auto', padding: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {messages.map((m, i) => (
                <div key={i} style={{
                  alignSelf: m.from === 'user' ? 'flex-end' : 'flex-start', maxWidth: '85%',
                  padding: '8px 12px', background: m.from === 'user' ? 'rgba(196,30,58,0.15)' : 'rgba(245,240,232,0.04)',
                  borderRadius: m.from === 'user' ? '10px 10px 2px 10px' : '10px 10px 10px 2px',
                  fontSize: '0.88rem', color: 'var(--paper)', lineHeight: 1.6,
                }} dangerouslySetInnerHTML={{ __html: m.text }} />
              ))}
              <div ref={messagesEnd} />
            </div>
            <div style={{ padding: 10, borderTop: '1px solid rgba(245,240,232,0.06)', display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 4 }}>
              {quickActions.map((a) => (
                <button key={a} onClick={() => respond(a)} style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.6rem', padding: '4px 10px',
                  background: 'rgba(196,30,58,0.1)', color: 'var(--blood)', border: '1px solid rgba(196,30,58,0.2)',
                  borderRadius: 'var(--r-sm)', cursor: 'pointer', textTransform: 'uppercase', transition: 'all 0.2s ease',
                }}>{a}</button>
              ))}
            </div>
            <form onSubmit={handleSubmit} style={{ padding: '6px 10px 10px', display: 'flex', gap: 8 }}>
              <input value={input} onChange={e => setInput(e.target.value)} placeholder="Ask SAM..."
                style={{
                  flex: 1, background: 'rgba(245,240,232,0.04)', border: '1px solid rgba(245,240,232,0.06)',
                  borderRadius: 'var(--r-sm)', padding: '8px 10px', fontSize: '0.88rem', color: 'var(--paper)',
                  outline: 'none', fontFamily: 'var(--font-mono)',
                }} />
              <button type="submit" style={{
                background: 'var(--blood)', border: 'none', borderRadius: 'var(--r-sm)',
                padding: '8px 12px', cursor: 'pointer', display: 'flex', alignItems: 'center',
              }}><Send size={14} color="var(--paper)" /></button>
            </form>
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
              QUICK QUERIES
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { q: 'What are your skills?', a: 'AI/ML, Agents, Full-Stack, DevOps...' },
                { q: 'Tell me about your projects', a: 'SCOUT, NEXUS, SHARP, VERITAS...' },
                { q: 'How can I contact you?', a: 'Email, LinkedIn, GitHub...' },
                { q: 'What is your education?', a: 'B.Tech CSE at GLA University Mathura' },
                { q: 'Tell me about SCOUT', a: 'Self-evolving memory agent with LangChain' },
                { q: 'What AI experience do you have?', a: 'LLMs, RAG, agents, fine-tuning...' },
              ].map((item, i) => (
                <div key={i} style={{ padding: '8px 0', borderBottom: '1px solid rgba(245,240,232,0.04)' }}>
                  <div style={{ fontSize: '0.85rem', color: 'var(--paper)', marginBottom: 4 }}>{item.q}</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(245,240,232,0.4)' }}>{item.a}</div>
                </div>
              ))}
            </div>
          </div>
        </>
      }
    />
  );
}
