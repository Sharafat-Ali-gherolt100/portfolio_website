import React, { useState } from 'react';
import { Cpu, ShieldCheck, Zap, Layers, Terminal } from 'lucide-react';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'principles' | 'stack'>('overview');

  const HOTLINK_IMAGE_URL =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBkc87Ypis_XaYzpOx5MkyJS0AgWDHwRmAMidl6O5_HUj-QJI4oj-BQLJm2SyFjcyfHqo9HzfqYlGELtPyzvnFd1JJJAs6dxxvd6NX9Y8s2wUw4dwAnUqnIOlPEipLtmzv1E5CNcQKetwIHMDQS6nqDmNNzN8zSzGDj8Ce3L9lI_aKyvRgSg5ov8ReTASKcUyfYeZUiQgBEWIv5srAYRWn1y5mY_ZMdTRytNDwjGdutnLIV7zFLSLbW';

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Image Card */}
        <div className="lg:col-span-5">
          <div className="glass-card aspect-square rounded-2xl relative overflow-hidden group shadow-2xl border border-white/10">
            <img
              src={HOTLINK_IMAGE_URL}
              alt="Sharafat Workstation Setup"
              className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-700 mix-blend-luminosity hover:mix-blend-normal group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />

            {/* Overlay Glass Badge */}
            <div className="absolute bottom-4 left-4 right-4 glass-card p-3.5 rounded-xl border border-white/15 backdrop-blur-md flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00dbe7] animate-pulse" />
                <span className="font-mono-code text-xs font-semibold text-white">Full-Stack & AI Systems</span>
              </div>
              <span className="font-mono-code text-[11px] text-[#b0c6ff] font-bold">2026 Ready</span>
            </div>
          </div>
        </div>

        {/* Right Column: Text & Stats */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#b0c6ff] uppercase tracking-wider mb-2">
              <Terminal className="w-3.5 h-3.5 text-[#00dbe7]" />
              <span>Engineering Excellence</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#e5e2e1] mb-4 uppercase tracking-tight">
              The Engineering Mindset
            </h2>
            <div className="w-12 h-1 bg-[#b0c6ff] rounded-full mb-6" />

            {/* Tab Navigation */}
            <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-2">
              <button
                onClick={() => setActiveTab('overview')}
                className={`font-mono-code text-xs px-3.5 py-1.5 rounded-lg transition-all ${
                  activeTab === 'overview'
                    ? 'bg-[#b0c6ff] text-[#001945] font-bold shadow'
                    : 'text-[#c2c6d8] hover:text-white hover:bg-white/5'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('principles')}
                className={`font-mono-code text-xs px-3.5 py-1.5 rounded-lg transition-all ${
                  activeTab === 'principles'
                    ? 'bg-[#b0c6ff] text-[#001945] font-bold shadow'
                    : 'text-[#c2c6d8] hover:text-white hover:bg-white/5'
                }`}
              >
                Core Principles
              </button>
              <button
                onClick={() => setActiveTab('stack')}
                className={`font-mono-code text-xs px-3.5 py-1.5 rounded-lg transition-all ${
                  activeTab === 'stack'
                    ? 'bg-[#b0c6ff] text-[#001945] font-bold shadow'
                    : 'text-[#c2c6d8] hover:text-white hover:bg-white/5'
                }`}
              >
                Stack Highlights
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'overview' && (
              <div className="space-y-4 text-base text-[#c2c6d8] leading-relaxed">
                <p>
                  I am a software engineer focused on building robust, scalable, and intelligent systems. My approach combines rigorous software engineering principles with modern AI capabilities to create products that solve real-world problems efficiently.
                </p>
                <p>
                  Whether it's architecting a microservices backend, designing a fluid glassmorphism UI, or fine-tuning an LLM integration, I prioritize performance, maintainability, and exceptional user experience above all else.
                </p>
              </div>
            )}

            {activeTab === 'principles' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="p-3.5 rounded-xl bg-[#201f1f] border border-white/10 flex items-start gap-3">
                  <Zap className="w-5 h-5 text-[#b0c6ff] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-mono-code font-bold text-white">High Throughput</h4>
                    <p className="text-xs text-[#c2c6d8] mt-1">Optimized database indexing, async tasks, and edge caching for sub-100ms response times.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#201f1f] border border-white/10 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#00dbe7] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-mono-code font-bold text-white">Clean Architecture</h4>
                    <p className="text-xs text-[#c2c6d8] mt-1">Strict domain boundary separation, TypeScript strict types, and thorough automated testing.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#201f1f] border border-white/10 flex items-start gap-3">
                  <Cpu className="w-5 h-5 text-[#d2bbff] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-mono-code font-bold text-white">AI-Native Logic</h4>
                    <p className="text-xs text-[#c2c6d8] mt-1">Streaming responses, agentic tool workflows, RAG vector embeddings, and fallback resilience.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#201f1f] border border-white/10 flex items-start gap-3">
                  <Layers className="w-5 h-5 text-[#b0c6ff] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-mono-code font-bold text-white">Crafted UX</h4>
                    <p className="text-xs text-[#c2c6d8] mt-1">Pixel-perfect layout, WCAG AA compliance, dark-first elegance, and fluid layout animations.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'stack' && (
              <div className="p-4 rounded-xl bg-[#201f1f] border border-white/10 space-y-3 font-mono-code text-xs">
                <div className="flex justify-between items-center pb-2 border-b border-white/5">
                  <span className="text-[#8c90a1]">Frontend:</span>
                  <span className="text-white font-bold">React 19, TypeScript, Tailwind CSS, Vite</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/5">
                  <span className="text-[#8c90a1]">Backend & AI:</span>
                  <span className="text-[#b0c6ff] font-bold">Node.js, Express, Gemini API, PyTorch</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/5">
                  <span className="text-[#8c90a1]">Database & Cache:</span>
                  <span className="text-[#00dbe7] font-bold">PostgreSQL, Redis, Firestore, VectorDB</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#8c90a1]">DevOps & Cloud:</span>
                  <span className="text-[#d2bbff] font-bold">Docker, Cloud Run, GitHub Actions, Linux</span>
                </div>
              </div>
            )}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
            <div className="glass-card p-5 flex flex-col items-center justify-center text-center hover:border-[#b0c6ff]/40 transition-colors">
              <span className="text-3xl font-extrabold text-[#b0c6ff] mb-1">20+</span>
              <span className="font-mono-code text-[11px] text-[#c2c6d8]">Projects Delivered</span>
            </div>

            <div className="glass-card p-5 flex flex-col items-center justify-center text-center hover:border-[#d2bbff]/40 transition-colors">
              <span className="text-3xl font-extrabold text-[#d2bbff] mb-1">3+</span>
              <span className="font-mono-code text-[11px] text-[#c2c6d8]">Years Exp.</span>
            </div>

            <div className="glass-card p-5 flex flex-col items-center justify-center text-center hover:border-[#00dbe7]/40 transition-colors">
              <span className="text-3xl font-extrabold text-[#00dbe7] mb-1">15</span>
              <span className="font-mono-code text-[11px] text-[#c2c6d8]">Happy Clients</span>
            </div>

            <div className="glass-card p-5 flex flex-col items-center justify-center text-center hover:border-white/40 transition-colors">
              <span className="text-3xl font-extrabold text-[#e5e2e1] mb-1">∞</span>
              <span className="font-mono-code text-[11px] text-[#c2c6d8]">Lines of Code</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
