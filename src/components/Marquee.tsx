import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    'FULL STACK',
    '•',
    'AI & LLM AGENTS',
    '•',
    'WEB DEVELOPMENT',
    '•',
    'SOFTWARE ENGINEERING',
    '•',
    'SYSTEM ARCHITECTURE',
    '•',
    'CLOUD NATIVE',
    '•',
    'REACT & TYPESCRIPT',
    '•',
    'SCALABLE BACKENDS',
    '•',
  ];

  return (
    <div className="w-full border-y border-white/5 bg-[#0e0e0e]/80 backdrop-blur-md py-5 my-12 overflow-hidden">
      <div className="marquee font-mono-code text-xs md:text-sm text-[#c2c6d8] font-bold tracking-widest opacity-70">
        <div className="marquee-content items-center">
          {items.map((item, idx) => (
            <span
              key={idx}
              className={item === '•' ? 'text-[#b0c6ff] opacity-50' : 'hover:text-[#b0c6ff] transition-colors'}
            >
              {item}
            </span>
          ))}
        </div>
        <div aria-hidden="true" className="marquee-content items-center">
          {items.map((item, idx) => (
            <span
              key={`dup-${idx}`}
              className={item === '•' ? 'text-[#b0c6ff] opacity-50' : 'hover:text-[#b0c6ff] transition-colors'}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
