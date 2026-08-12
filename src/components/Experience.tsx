import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, Award } from 'lucide-react';

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  tech: string[];
}

export const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      period: '2024 — PRESENT',
      role: 'Senior AI & Full-Stack Systems Engineer',
      company: 'Synthetix Systems Inc.',
      location: 'Remote / San Francisco, CA',
      type: 'Full-time',
      description: 'Leading the core agentic AI engineering team, building high-performance web applications, and architecting LLM tool-calling orchestration pipelines.',
      achievements: [
        'Architected server-side Gemini 2.5 Flash API proxy with streaming function calling, reducing API latency by 42%.',
        'Built full-stack React 19 + Express workspace supporting 50k+ active developers.',
        'Mentored 6 junior/mid engineers and established strict TypeScript and automated linting standards.',
      ],
      tech: ['React 19', 'TypeScript', 'Gemini API', 'Express', 'Node.js', 'Docker', 'PostgreSQL'],
    },
    {
      period: '2022 — 2024',
      role: 'Lead Full-Stack Web Architect',
      company: 'Aether Cloud Labs',
      location: 'Hybrid',
      type: 'Full-time',
      description: 'Designed and deployed multi-tenant SaaS dashboards, edge container management platforms, and real-time WebGL data visualizers.',
      achievements: [
        'Engineered WebGL neural graph visualizer in Three.js processing 100k+ dynamic vector nodes at 60 FPS.',
        'Reduced database query execution times by 65% through PostgreSQL indexing and Redis caching layers.',
        'Spearheaded migration from legacy monolith to Vite + micro-frontends with zero customer downtime.',
      ],
      tech: ['React', 'Next.js', 'Three.js', 'PostgreSQL', 'Redis', 'Tailwind CSS', 'WebSockets'],
    },
    {
      period: '2021 — 2022',
      role: 'AI & Software Engineer',
      company: 'Quantum Tech Solutions',
      location: 'On-site',
      type: 'Full-time',
      description: 'Developed Python backend APIs, fine-tuned transformer models, and built responsive React user interfaces.',
      achievements: [
        'Integrated RAG vector embeddings search with Pinecone and FastAPI, increasing search relevance accuracy by 38%.',
        'Created custom UI component design system adopted across 8 internal projects.',
        'Automated CI/CD release pipelines with GitHub Actions and Docker container registries.',
      ],
      tech: ['Python', 'FastAPI', 'PyTorch', 'React', 'TypeScript', 'Docker', 'GitHub Actions'],
    },
  ];

  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#b0c6ff] uppercase tracking-wider mb-2">
            <Briefcase className="w-3.5 h-3.5 text-[#00dbe7]" />
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#e5e2e1] uppercase tracking-tight">
            Work Experience
          </h2>
          <div className="w-12 h-1 bg-[#b0c6ff] rounded-full mt-3" />
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 relative before:absolute before:left-4 md:before:left-1/2 before:top-4 before:bottom-4 before:w-0.5 before:bg-white/10">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 w-5 h-5 rounded-full bg-[#050505] border-2 border-[#b0c6ff] z-20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00dbe7] animate-pulse" />
                </div>

                {/* Content Card */}
                <div className="w-full md:w-[calc(50%-2rem)] pl-12 md:pl-0">
                  <div className="glass-card p-7 rounded-2xl border border-white/10 hover:border-[#b0c6ff]/40 transition-all">
                    {/* Role & Date */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="font-mono-code text-xs font-bold text-[#b0c6ff] flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#00dbe7]" />
                        {exp.period}
                      </span>
                      <span className="font-mono-code text-[11px] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#c2c6d8]">
                        {exp.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-white mb-1">{exp.role}</h3>
                    
                    <div className="flex items-center gap-2 text-xs text-[#8c90a1] font-mono-code mb-4">
                      <span className="text-white font-semibold">{exp.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#b0c6ff]" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#c2c6d8] leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2 mb-5">
                      {exp.achievements.map((ach, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#e5e2e1]">
                          <CheckCircle className="w-3.5 h-3.5 text-[#00dbe7] shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                      {exp.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="font-mono-code text-[10px] px-2 py-0.5 rounded bg-[#201f1f] text-[#b0c6ff] border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
