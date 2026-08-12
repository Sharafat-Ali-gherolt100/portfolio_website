import React, { useState } from 'react';
import { Code2, Server, Cpu, Database, Cloud, Terminal, CheckCircle2 } from 'lucide-react';

interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'cloud' | 'database';
  proficiency: number;
  level: 'Expert' | 'Advanced' | 'Proficient';
  icon: string;
  description: string;
  tags: string[];
}

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const skills: Skill[] = [
    {
      name: 'React 19 & Next.js',
      category: 'frontend',
      proficiency: 95,
      level: 'Expert',
      icon: 'react',
      description: 'Server components, hooks optimization, concurrency, custom state managers, and SSR/SSG architectures.',
      tags: ['Hooks', 'Server Actions', 'Virtual DOM', 'Reconciliation'],
    },
    {
      name: 'TypeScript',
      category: 'frontend',
      proficiency: 92,
      level: 'Expert',
      icon: 'ts',
      description: 'Strict type safety, conditional generics, type mapping, and AST manipulation for enterprise codebases.',
      tags: ['Generics', 'Type Guards', 'Utility Types', 'AST'],
    },
    {
      name: 'Tailwind CSS & Motion',
      category: 'frontend',
      proficiency: 96,
      level: 'Expert',
      icon: 'tailwind',
      description: 'Design system engineering, glassmorphism, fluid typography, responsive layout grids, and Motion animations.',
      tags: ['Design Systems', 'Glassmorphism', 'Responsive', 'CSS-in-JS'],
    },
    {
      name: 'Node.js & Express',
      category: 'backend',
      proficiency: 90,
      level: 'Expert',
      icon: 'node',
      description: 'Asynchronous event loops, RESTful & GraphQL API routes, custom middleware, streams, and CJS/ESM bundling.',
      tags: ['Event Loop', 'REST/GraphQL', 'Middleware', 'Streams'],
    },
    {
      name: 'Gemini AI & LLM Systems',
      category: 'backend',
      proficiency: 94,
      level: 'Expert',
      icon: 'ai',
      description: 'Agentic tool calling, multi-modal prompt tuning, RAG vector retrieval, structured outputs, and streaming APIs.',
      tags: ['Function Calling', 'RAG', 'Embeddings', 'Streaming'],
    },
    {
      name: 'Python & PyTorch',
      category: 'backend',
      proficiency: 88,
      level: 'Advanced',
      icon: 'python',
      description: 'Fine-tuning, vector similarity search, data pipelines, model orchestration, and fast REST backends with FastAPI.',
      tags: ['FastAPI', 'PyTorch', 'Vector Search', 'Pandas'],
    },
    {
      name: 'PostgreSQL & Drizzle ORM',
      category: 'database',
      proficiency: 88,
      level: 'Advanced',
      icon: 'postgres',
      description: 'Complex relational indexing, query execution optimization, migrations, ACID transactions, and pool management.',
      tags: ['Index Optimization', 'Migrations', 'Transactions', 'SQL'],
    },
    {
      name: 'Redis & Caching',
      category: 'database',
      proficiency: 85,
      level: 'Advanced',
      icon: 'redis',
      description: 'In-memory caching strategies, pub/sub event broadcasting, rate-limiting counters, and session store synchronization.',
      tags: ['Pub/Sub', 'Rate Limiting', 'Key-Value', 'Caching'],
    },
    {
      name: 'Docker & Microservices',
      category: 'cloud',
      proficiency: 89,
      level: 'Advanced',
      icon: 'docker',
      description: 'Multi-stage container builds, Docker Compose local fabrics, volume persistence, and isolated environment runtimes.',
      tags: ['Containers', 'Multi-Stage', 'Orchestration', 'Networking'],
    },
    {
      name: 'Google Cloud & Serverless',
      category: 'cloud',
      proficiency: 87,
      level: 'Advanced',
      icon: 'gcp',
      description: 'Cloud Run container deployment, IAM security policies, secret manager integration, and Cloud SQL setups.',
      tags: ['Cloud Run', 'IAM', 'Secrets', 'Serverless'],
    },
    {
      name: 'Git & CI/CD Workflows',
      category: 'cloud',
      proficiency: 92,
      level: 'Expert',
      icon: 'git',
      description: 'Automated build matrices, GitHub Actions deployment pipelines, semantic release tagging, and branch strategy.',
      tags: ['GitHub Actions', 'Semantic Versioning', 'Hooks', 'Pipelines'],
    },
    {
      name: 'WebSockets & Real-Time',
      category: 'backend',
      proficiency: 86,
      level: 'Advanced',
      icon: 'socket',
      description: 'Full-duplex real-time synchronization, state reconciliation, canvas collaboration, and heartbeats.',
      tags: ['WebSockets', 'Full-Duplex', 'Sync', 'Collab'],
    },
  ];

  const filteredSkills =
    activeCategory === 'all'
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  const categoryIcons = {
    all: <Terminal className="w-4 h-4" />,
    frontend: <Code2 className="w-4 h-4 text-[#b0c6ff]" />,
    backend: <Cpu className="w-4 h-4 text-[#d2bbff]" />,
    cloud: <Cloud className="w-4 h-4 text-[#00dbe7]" />,
    database: <Database className="w-4 h-4 text-[#e5e2e1]" />,
  };

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#b0c6ff] uppercase tracking-wider mb-2">
              <Cpu className="w-3.5 h-3.5 text-[#00dbe7]" />
              <span>Technical Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#e5e2e1] uppercase tracking-tight">
              Skills & Expertise
            </h2>
            <div className="w-12 h-1 bg-[#b0c6ff] rounded-full mt-3" />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-[#131313] p-1.5 rounded-xl border border-white/10">
            {[
              { id: 'all', label: 'All Stack' },
              { id: 'frontend', label: 'Frontend' },
              { id: 'backend', label: 'Backend & AI' },
              { id: 'cloud', label: 'Cloud & DevOps' },
              { id: 'database', label: 'Databases' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`font-mono-code text-xs px-3.5 py-2 rounded-lg transition-all flex items-center gap-1.5 ${
                  activeCategory === cat.id
                    ? 'bg-[#b0c6ff] text-[#001945] font-bold shadow'
                    : 'text-[#c2c6d8] hover:text-white hover:bg-white/5'
                }`}
              >
                {categoryIcons[cat.id as keyof typeof categoryIcons]}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              onClick={() => setSelectedSkill(skill)}
              className="glass-card p-6 rounded-xl hover:border-[#b0c6ff]/40 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-base text-white group-hover:text-[#b0c6ff] transition-colors">
                    {skill.name}
                  </h3>
                  <span className="font-mono-code text-[11px] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#00dbe7]">
                    {skill.level}
                  </span>
                </div>

                <p className="text-xs text-[#c2c6d8] leading-relaxed mb-4 line-clamp-2">
                  {skill.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {skill.tags.map((t, i) => (
                    <span
                      key={i}
                      className="font-mono-code text-[10px] px-2 py-0.5 rounded bg-[#201f1f] text-[#8c90a1] border border-white/5"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Progress Bar */}
              <div>
                <div className="flex justify-between items-center text-[11px] font-mono-code text-[#8c90a1] mb-1.5">
                  <span>Proficiency</span>
                  <span className="text-[#b0c6ff] font-bold">{skill.proficiency}%</span>
                </div>
                <div className="w-full h-1.5 bg-[#201f1f] rounded-full overflow-hidden border border-white/5">
                  <div
                    className="h-full bg-gradient-to-r from-[#b0c6ff] to-[#00dbe7] rounded-full transition-all duration-1000"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Detail view if a skill is clicked */}
        {selectedSkill && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="glass-card max-w-lg w-full p-6 rounded-2xl border border-white/20 animate-in fade-in zoom-in duration-200">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="font-mono-code text-xs text-[#b0c6ff] uppercase tracking-wider">
                    {selectedSkill.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">{selectedSkill.name}</h3>
                </div>
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="p-1 rounded-lg bg-white/10 text-[#c2c6d8] hover:text-white"
                >
                  ✕
                </button>
              </div>

              <p className="text-sm text-[#c2c6d8] leading-relaxed mb-4">
                {selectedSkill.description}
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-xs text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#00dbe7]" />
                  <span>Production Tested in enterprise & high-growth applications</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#00dbe7]" />
                  <span>Proficiency Rating: {selectedSkill.proficiency}% ({selectedSkill.level})</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedSkill.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="font-mono-code text-xs px-3 py-1 rounded-md bg-[#201f1f] text-[#b0c6ff] border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedSkill(null)}
                className="primary-btn w-full py-2.5 rounded-xl font-mono-code text-xs font-bold"
              >
                Close Technical Detail
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
