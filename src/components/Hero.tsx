import React from 'react';
import { ArrowDown, Terminal, Code2, Bot, Sparkles } from 'lucide-react';
import { HeroShaderCanvas } from './HeroShaderCanvas';

interface HeroProps {
  onOpenResume: () => void;
  onViewWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onViewWork }) => {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center pt-10 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content Column */}
        <div className="flex flex-col items-start gap-6">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2.5 bg-[#201f1f] border border-white/10 rounded-full px-4 py-1.5 font-mono-code text-xs font-semibold text-[#b0c6ff] shadow-inner">
            <span className="w-2 h-2 rounded-full bg-[#b0c6ff] animate-ping" />
            <span className="w-2 h-2 rounded-full bg-[#b0c6ff] -ml-4" />
            <span>Available for new opportunities</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tighter leading-[1.08] uppercase text-[#e5e2e1]">
            BUILDING{' '}
            <span className="text-gradient">DIGITAL PRODUCTS</span>{' '}
            THAT ACTUALLY WORK.
          </h1>

          {/* Subtitle / Bio */}
          <p className="text-base sm:text-lg text-[#c2c6d8] leading-relaxed max-w-xl font-normal">
            Full-Stack Developer & AI Engineer specializing in high-performance web applications, intelligent systems, and scalable architectures. I turn complex problems into elegant, production-ready code.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onViewWork}
              className="primary-btn px-7 py-3.5 rounded-full font-mono-code text-xs md:text-sm font-bold flex items-center gap-2.5 shadow-lg group"
            >
              <span>View My Work</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>

            <button
              onClick={onOpenResume}
              className="ghost-btn px-7 py-3.5 rounded-full font-mono-code text-xs md:text-sm font-bold flex items-center gap-2.5 text-[#e5e2e1] hover:text-white"
            >
              <Terminal className="w-4 h-4 text-[#00dbe7]" />
              <span>Resume</span>
            </button>
          </div>

          {/* Tech Spec Quick Highlights */}
          <div className="pt-4 flex items-center gap-6 text-xs text-[#8c90a1] font-mono-code border-t border-white/5 w-full max-w-lg">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#b0c6ff]" />
              <span>React 19 & Next.js</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00dbe7]" />
              <span>LLM & Agentic AI</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d2bbff]" />
              <span>Cloud & System Design</span>
            </div>
          </div>
        </div>

        {/* Right Shader Container with Floating Glass Badges */}
        <div className="relative h-[420px] sm:h-[480px] w-full hidden lg:block">
          {/* Interactive WebGL Shader Canvas */}
          <HeroShaderCanvas />

          {/* Floating Glass Badge 1 - Clean Code */}
          <div className="absolute top-8 right-6 glass-card p-4 rounded-xl flex items-center gap-3.5 animate-float shadow-xl">
            <div className="w-10 h-10 rounded-lg bg-[#b0c6ff]/15 flex items-center justify-center text-[#b0c6ff] border border-[#b0c6ff]/30">
              <Code2 className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono-code text-[11px] text-[#c2c6d8] uppercase tracking-wider">Clean Code</span>
              <span className="font-bold text-xs text-white">100% Guaranteed</span>
            </div>
          </div>

          {/* Floating Glass Badge 2 - AI Integration */}
          <div className="absolute bottom-12 left-6 glass-card p-4 rounded-xl flex items-center gap-3.5 animate-float-reverse shadow-xl">
            <div className="w-10 h-10 rounded-lg bg-[#d2bbff]/15 flex items-center justify-center text-[#d2bbff] border border-[#d2bbff]/30">
              <Bot className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono-code text-[11px] text-[#c2c6d8] uppercase tracking-wider">AI Integration</span>
              <span className="font-bold text-xs text-white">Next-Gen Apps</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
