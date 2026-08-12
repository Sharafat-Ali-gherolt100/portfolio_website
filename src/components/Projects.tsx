import React, { useState } from 'react';
import { ExternalLink, Github, Code, Sparkles, Layers, Terminal, ArrowUpRight, Check } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'ai' | 'fullstack' | 'cloud' | 'mobile';
  description: string;
  longDescription: string;
  architecture: string[];
  tech: string[];
  metrics: string;
  githubUrl: string;
  liveUrl: string;
  accentColor: string;
}

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'synthetix',
      title: 'Synthetix AI Workspace',
      tagline: 'Autonomous AI Coding Agent & Live IDE Platform',
      category: 'ai',
      description: 'Agentic AI studio featuring automated code refactoring, function calling tools, and multi-modal canvas code generation.',
      longDescription: 'Synthetix is an agentic AI coding workspace built with React 19, Express, and Gemini API. It enables developers to issue natural language directives to refactor full-stack codebases, execute background test runners, and preview canvas components with sub-second feedback loops.',
      architecture: [
        'Server-side Gemini 2.5 Flash API proxy with function calling tool dispatcher',
        'In-memory Vite dev server middleware integration with custom WebSocket hot reload fallback',
        'Secure multi-file diff engine with automatic AST syntax validation',
      ],
      tech: ['React 19', 'TypeScript', 'Gemini API', 'Express', 'Tailwind CSS', 'Vite'],
      metrics: '4x faster feature iteration for dev teams',
      githubUrl: 'https://github.com/sharafat-dev/synthetix-ai',
      liveUrl: '#',
      accentColor: '#b0c6ff',
    },
    {
      id: 'neuroflow',
      title: 'NeuroFlow Visual Engine',
      tagline: 'Real-Time Neural Network & Data Pipeline Inspector',
      category: 'ai',
      description: 'Interactive WebGL neural activation canvas visualizing tensor weights, node attention maps, and model inference latency.',
      longDescription: 'NeuroFlow brings deep learning model internals into interactive WebGL visualizers. Built with Three.js and WebSockets, it streams live training metrics and activation graphs directly from PyTorch / TensorFlow backends.',
      architecture: [
        'Custom WebGL shader pipeline for rendering 100k+ dynamic synaptic nodes at 60 FPS',
        'Binary WebSocket protocol for low-latency state vector streaming',
        'Client-side matrix math acceleration using WebAssembly',
      ],
      tech: ['Three.js', 'WebGL', 'WebAssembly', 'Python', 'FastAPI', 'WebSockets'],
      metrics: '<15ms telemetry rendering latency',
      githubUrl: 'https://github.com/sharafat-dev/neuroflow-engine',
      liveUrl: '#',
      accentColor: '#d2bbff',
    },
    {
      id: 'aether',
      title: 'Aether Cloud Fabric',
      tagline: 'Distributed Edge Container Orchestrator',
      category: 'cloud',
      description: 'Zero-trust microservice orchestrator with automated failover routing, edge deployment, and health monitoring.',
      longDescription: 'Aether simplifies container deployment across multi-cloud regions. Features real-time cluster health topology maps, automated SSL provisioning, and declarative YAML manifest sync.',
      architecture: [
        'Distributed raft consensus layer for edge node leader election',
        'eBPF kernel packet filtering for instant zero-trust service mesh routing',
        'Prometheus metrics scraper with custom anomaly detection alerts',
      ],
      tech: ['Go', 'Docker', 'Kubernetes', 'eBPF', 'PostgreSQL', 'gRPC'],
      metrics: '99.999% uptime across 12 edge nodes',
      githubUrl: 'https://github.com/sharafat-dev/aether-cloud',
      liveUrl: '#',
      accentColor: '#00dbe7',
    },
    {
      id: 'quantumpay',
      title: 'QuantumPay Gateway',
      tagline: 'High-Throughput Zero-Knowledge Payment Protocol',
      category: 'fullstack',
      description: 'Privacy-focused merchant payment API processing 50,000+ transactions/sec with zero-knowledge cryptographic proofs.',
      longDescription: 'QuantumPay is a full-stack payment gateway providing instant settlement, low fees, and complete transaction privacy via ZK-SNARKs proofs and distributed ledger verification.',
      architecture: [
        'Rust ZK-SNARK circuit verifier executed in isolated edge workers',
        'Optimized PostgreSQL connection pooling handling 10k concurrent write transactions',
        'React SDK with automatic idempotency key handling and webhooks',
      ],
      tech: ['Rust', 'React 19', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker'],
      metrics: '50k TPS with sub-second finality',
      githubUrl: 'https://github.com/sharafat-dev/quantumpay',
      liveUrl: '#',
      accentColor: '#b0c6ff',
    },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#b0c6ff] uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#00dbe7]" />
              <span>Selected Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#e5e2e1] uppercase tracking-tight">
              Featured Projects
            </h2>
            <div className="w-12 h-1 bg-[#b0c6ff] rounded-full mt-3" />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-[#131313] p-1.5 rounded-xl border border-white/10">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'ai', label: 'AI Systems' },
              { id: 'fullstack', label: 'Full-Stack' },
              { id: 'cloud', label: 'Cloud & Infrastructure' },
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`font-mono-code text-xs px-3.5 py-2 rounded-lg transition-all ${
                  activeFilter === filter.id
                    ? 'bg-[#b0c6ff] text-[#001945] font-bold shadow'
                    : 'text-[#c2c6d8] hover:text-white hover:bg-white/5'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl border border-white/10 overflow-hidden hover:border-[#b0c6ff]/40 transition-all group flex flex-col justify-between"
            >
              {/* Card Header & Content */}
              <div className="p-7">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="font-mono-code text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10"
                    style={{ color: project.accentColor }}
                  >
                    {project.category}
                  </span>
                  <span className="font-mono-code text-xs text-[#8c90a1] flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-[#00dbe7]" />
                    {project.metrics}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-white group-hover:text-[#b0c6ff] transition-colors mb-1.5">
                  {project.title}
                </h3>
                <p className="font-mono-code text-xs text-[#b0c6ff] mb-4">{project.tagline}</p>

                <p className="text-sm text-[#c2c6d8] leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="font-mono-code text-xs px-2.5 py-1 rounded-md bg-[#201f1f] text-[#c2c6d8] border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-7 py-4 bg-[#0a0a0d] border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="font-mono-code text-xs font-bold text-[#b0c6ff] hover:text-white flex items-center gap-1.5"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>View Architecture</span>
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#c2c6d8] hover:text-white hover:bg-white/10 transition-colors"
                    title="Source Code"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="ghost-btn px-3 py-1.5 rounded-lg font-mono-code text-xs font-semibold flex items-center gap-1 text-white"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#00dbe7]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
            <div className="glass-card max-w-2xl w-full p-8 rounded-2xl border border-white/20 animate-in fade-in zoom-in duration-200 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span
                    className="font-mono-code text-xs font-bold uppercase tracking-wider"
                    style={{ color: selectedProject.accentColor }}
                  >
                    {selectedProject.category} System
                  </span>
                  <h3 className="text-2xl font-extrabold text-white mt-1">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg bg-white/10 text-[#c2c6d8] hover:text-white"
                >
                  ✕
                </button>
              </div>

              <p className="font-mono-code text-xs text-[#b0c6ff] mb-4">
                {selectedProject.tagline}
              </p>

              <div className="p-4 rounded-xl bg-[#201f1f] border border-white/10 mb-6 text-sm text-[#c2c6d8] leading-relaxed">
                {selectedProject.longDescription}
              </div>

              {/* Architecture Highlights */}
              <div className="mb-6">
                <h4 className="font-mono-code text-xs font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#00dbe7]" />
                  <span>Key Architectural Innovations</span>
                </h4>
                <ul className="space-y-2.5 text-xs text-[#c2c6d8]">
                  {selectedProject.architecture.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white/5 border border-white/5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#b0c6ff] shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Badges */}
              <div className="mb-6">
                <h4 className="font-mono-code text-xs font-bold text-white uppercase tracking-wider mb-2">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="font-mono-code text-xs px-3 py-1 rounded-md bg-[#201f1f] text-[#b0c6ff] border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ghost-btn px-5 py-2.5 rounded-xl font-mono-code text-xs font-bold flex items-center gap-2 text-white"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repo</span>
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="primary-btn flex-1 py-2.5 rounded-xl font-mono-code text-xs font-bold"
                >
                  Close Architecture View
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
