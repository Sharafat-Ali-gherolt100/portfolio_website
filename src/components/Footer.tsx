import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, BookOpen } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-28 bg-[#0a0a0d] w-full border-t border-white/5 relative z-10 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand Logo & Tagline */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <a
            href="#home"
            className="font-extrabold text-lg tracking-tighter text-[#b0c6ff] uppercase flex items-center gap-2"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#00dbe7]" />
            <span>SHARAFAT.DEV</span>
          </a>
          <span className="font-mono-code text-[11px] text-[#8c90a1]">
            Full-Stack Developer & AI Systems Engineer
          </span>
        </div>

        {/* Copyright */}
        <div className="font-mono-code text-xs text-[#8c90a1] text-center">
          © {new Date().getFullYear()} SHARAFAT.DEV | Built with Precision & High Performance
        </div>

        {/* Social Links & Back to Top */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/sharafat-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono-code text-xs text-[#c2c6d8] hover:text-[#b0c6ff] transition-colors flex items-center gap-1 uppercase"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono-code text-xs text-[#c2c6d8] hover:text-[#b0c6ff] transition-colors flex items-center gap-1 uppercase"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono-code text-xs text-[#c2c6d8] hover:text-[#b0c6ff] transition-colors flex items-center gap-1 uppercase"
            title="Twitter"
          >
            <Twitter className="w-4 h-4" />
            <span className="hidden sm:inline">Twitter</span>
          </a>

          <a
            href="https://medium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono-code text-xs text-[#c2c6d8] hover:text-[#b0c6ff] transition-colors flex items-center gap-1 uppercase"
            title="Medium"
          >
            <BookOpen className="w-4 h-4" />
            <span className="hidden sm:inline">Medium</span>
          </a>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#b0c6ff] text-[#b0c6ff] transition-all hover:-translate-y-1 ml-2"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
