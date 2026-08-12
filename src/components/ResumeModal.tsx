import React, { useState } from 'react';
import { Terminal as TerminalIcon, FileText, Download, Copy, Check, X, Shield, Award, Sparkles } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'formatted' | 'terminal'>('formatted');
  const [copied, setCopied] = useState(false);

  // Terminal state
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<Array<{ cmd: string; output: string }>>([
    {
      cmd: 'sharafat.dev --version',
      output: 'SHARAFAT.DEV Interactive Resume CLI v2.6.0 [Ready]',
    },
    {
      cmd: 'help',
      output: 'Available commands: skills | experience | education | contact | download | clear',
    },
  ]);

  if (!isOpen) return null;

  const handleCopyCV = () => {
    const cvText = `
SHARAFAT.DEV - FULL-STACK DEVELOPER & AI ENGINEER
Email: sharafat.dev.official@gmail.com
Location: San Francisco, CA / Global Remote

SUMMARY:
Full-Stack Developer & AI Engineer specializing in high-performance web applications, agentic AI systems, and scalable architectures.

CORE SKILLS:
- Frontend: React 19, TypeScript, Next.js, Tailwind CSS, Three.js, Vite
- Backend & AI: Node.js, Express, Gemini API, Python, PyTorch, FastAPI, WebSockets
- Cloud & Data: Docker, Cloud Run, PostgreSQL, Redis, GitHub Actions, Linux

EXPERIENCE:
- Senior AI & Full-Stack Engineer @ Synthetix Systems (2024 - Present)
- Lead Full-Stack Architect @ Aether Cloud Labs (2022 - 2024)
- AI & Software Engineer @ Quantum Tech Solutions (2021 - 2022)
    `.trim();

    navigator.clipboard.writeText(cvText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    let output = '';

    switch (cmd) {
      case 'help':
        output = 'Available commands: skills | experience | education | contact | download | clear';
        break;
      case 'skills':
        output = 'Frontend: React 19, TypeScript, Next.js, Tailwind CSS, Three.js\nBackend: Node.js, Express, Gemini API, Python, PyTorch, FastAPI\nDatabases: PostgreSQL, Redis, Firestore\nDevOps: Docker, Cloud Run, CI/CD, Git';
        break;
      case 'experience':
        output = '1. Senior AI Engineer @ Synthetix (2024-Present)\n2. Lead Full-Stack Architect @ Aether Cloud (2022-2024)\n3. AI Software Engineer @ Quantum Tech (2021-2022)';
        break;
      case 'education':
        output = 'B.S. Computer Science & Artificial Intelligence (3.9 GPA)\nSpecialization in Distributed Systems & Deep Learning.';
        break;
      case 'contact':
        output = 'Email: sharafat.dev.official@gmail.com\nLocation: San Francisco, CA\nGitHub: github.com/sharafat-dev';
        break;
      case 'download':
        output = 'Initiating resume download format... (Simulation complete)';
        break;
      case 'clear':
        setTerminalHistory([]);
        setTerminalInput('');
        return;
      default:
        output = `Command not recognized: '${cmd}'. Type 'help' for available commands.`;
    }

    setTerminalHistory((prev) => [...prev, { cmd: terminalInput, output }]);
    setTerminalInput('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="glass-card max-w-3xl w-full rounded-2xl border border-white/20 overflow-hidden shadow-2xl flex flex-col max-h-[90vh] animate-in fade-in zoom-in duration-200">
        
        {/* Modal Top Header */}
        <div className="px-6 py-4 bg-[#0a0a0d] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose} />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="font-mono-code text-xs font-bold text-white uppercase tracking-wider pl-2 border-l border-white/10">
              SHARAFAT.DEV — Resume Terminal
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Tab Switcher */}
            <div className="flex bg-[#201f1f] p-1 rounded-lg border border-white/10">
              <button
                onClick={() => setActiveTab('formatted')}
                className={`font-mono-code text-[11px] px-3 py-1 rounded-md transition-colors flex items-center gap-1.5 ${
                  activeTab === 'formatted' ? 'bg-[#b0c6ff] text-[#001945] font-bold' : 'text-[#c2c6d8] hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Formatted CV</span>
              </button>
              <button
                onClick={() => setActiveTab('terminal')}
                className={`font-mono-code text-[11px] px-3 py-1 rounded-md transition-colors flex items-center gap-1.5 ${
                  activeTab === 'terminal' ? 'bg-[#00dbe7] text-[#00363a] font-bold' : 'text-[#c2c6d8] hover:text-white'
                }`}
              >
                <TerminalIcon className="w-3.5 h-3.5" />
                <span>CLI Mode</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#c2c6d8] hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tab Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs font-mono-code text-[#c2c6d8]">
          {activeTab === 'formatted' ? (
            <div className="space-y-6">
              {/* Profile Header */}
              <div className="p-5 rounded-xl bg-[#201f1f] border border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-xl font-extrabold text-white">SHARAFAT.DEV</h2>
                  <p className="text-[#b0c6ff] font-semibold mt-0.5">Full-Stack Developer & AI Systems Engineer</p>
                  <p className="text-[11px] text-[#8c90a1] mt-1">San Francisco, CA | sharafat.dev.official@gmail.com</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyCV}
                    className="ghost-btn px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 text-white"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy Text'}</span>
                  </button>
                </div>
              </div>

              {/* Core Competencies */}
              <div>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#00dbe7]" />
                  <span>Technical Competencies</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-lg bg-[#0a0a0d] border border-white/5 space-y-1">
                    <span className="text-[#b0c6ff] font-bold block">Frontend</span>
                    <p className="text-[11px] text-[#8c90a1]">React 19, TypeScript, Next.js, Tailwind CSS, Three.js, Vite</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#0a0a0d] border border-white/5 space-y-1">
                    <span className="text-[#d2bbff] font-bold block">Backend & AI</span>
                    <p className="text-[11px] text-[#8c90a1]">Node.js, Express, Gemini API, Python, PyTorch, WebSockets</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#0a0a0d] border border-white/5 space-y-1">
                    <span className="text-[#00dbe7] font-bold block">Cloud & DB</span>
                    <p className="text-[11px] text-[#8c90a1]">Docker, Cloud Run, PostgreSQL, Redis, GitHub Actions</p>
                  </div>
                </div>
              </div>

              {/* Work History */}
              <div>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-[#b0c6ff]" />
                  <span>Professional History</span>
                </h3>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-[#0a0a0d] border border-white/5">
                    <div className="flex justify-between items-center text-white font-bold mb-1">
                      <span>Senior AI Systems Engineer @ Synthetix</span>
                      <span className="text-[#b0c6ff] text-[11px]">2024 — Present</span>
                    </div>
                    <p className="text-[11px] text-[#8c90a1] leading-relaxed">
                      Leading development of AI code agents with Gemini 2.5 Flash API function calling, React 19 UI components, and Express backends.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0a0a0d] border border-white/5">
                    <div className="flex justify-between items-center text-white font-bold mb-1">
                      <span>Lead Full-Stack Architect @ Aether Cloud</span>
                      <span className="text-[#b0c6ff] text-[11px]">2022 — 2024</span>
                    </div>
                    <p className="text-[11px] text-[#8c90a1] leading-relaxed">
                      Engineered WebGL neural graph visualizers in Three.js and scaled multi-tenant microservices backends.
                    </p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="p-3.5 rounded-xl bg-[#201f1f] border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-white font-bold block">B.S. Computer Science & Artificial Intelligence</span>
                  <span className="text-[11px] text-[#8c90a1]">Focused on Distributed Systems & Machine Learning (3.9 GPA)</span>
                </div>
                <Award className="w-5 h-5 text-[#00dbe7]" />
              </div>
            </div>
          ) : (
            /* Terminal Mode */
            <div className="bg-[#050505] p-4 rounded-xl border border-white/10 font-mono-code space-y-3 min-h-[280px] flex flex-col justify-between">
              <div className="space-y-3 overflow-y-auto max-h-[260px]">
                {terminalHistory.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center gap-2 text-[#00dbe7]">
                      <span>user@sharafat-dev:~$</span>
                      <span className="text-white font-bold">{item.cmd}</span>
                    </div>
                    <pre className="text-[11px] text-[#c2c6d8] whitespace-pre-wrap pl-4 font-mono-code">
                      {item.output}
                    </pre>
                  </div>
                ))}
              </div>

              {/* Terminal Form */}
              <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2 pt-2 border-t border-white/10">
                <span className="text-[#00dbe7]">user@sharafat-dev:~$</span>
                <input
                  type="text"
                  autoFocus
                  placeholder="type 'help', 'skills', 'experience', or 'clear'..."
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  className="flex-1 bg-transparent text-white focus:outline-none text-xs font-mono-code"
                />
              </form>
            </div>
          )}
        </div>

        {/* Modal Bottom Footer */}
        <div className="px-6 py-4 bg-[#0a0a0d] border-t border-white/10 flex items-center justify-between">
          <span className="font-mono-code text-[11px] text-[#8c90a1]">
            Status: Active & Available for Opportunities
          </span>

          <button
            onClick={onClose}
            className="primary-btn px-5 py-2 rounded-xl font-mono-code text-xs font-bold"
          >
            Close CV Terminal
          </button>
        </div>

      </div>
    </div>
  );
};
