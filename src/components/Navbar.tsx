import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Terminal, FileText } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  setActiveSection,
  onOpenResume,
  onOpenContact,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#050505]/90 backdrop-blur-xl border-white/10 shadow-2xl py-3'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="font-extrabold text-lg md:text-xl tracking-tighter text-white uppercase flex items-center gap-2 group"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#b0c6ff] group-hover:scale-125 transition-transform" />
          <span>SHARAFAT.DEV</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.id);
              }}
              className={`font-mono-code text-xs md:text-sm font-medium transition-all px-2.5 py-1 rounded-md ${
                activeSection === link.id
                  ? 'text-[#b0c6ff] font-bold border-b-2 border-[#b0c6ff] bg-white/5'
                  : 'text-[#c2c6d8] hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="ghost-btn px-4 py-2 rounded-full font-mono-code text-xs font-semibold flex items-center gap-2 text-white/90 hover:text-white"
            title="Open Interactive Resume Terminal"
          >
            <Terminal className="w-3.5 h-3.5 text-[#00dbe7]" />
            <span>CV Terminal</span>
          </button>

          <button
            onClick={() => {
              handleNavClick('contact');
              onOpenContact();
            }}
            className="primary-btn px-5 py-2 rounded-full font-mono-code text-xs font-bold flex items-center gap-2 shadow-lg"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#00dbe7]"
            title="Terminal Resume"
          >
            <Terminal className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0d] border-b border-white/10 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id);
                }}
                className={`font-mono-code text-sm px-3 py-2 rounded-lg transition-colors ${
                  activeSection === link.id
                    ? 'text-[#b0c6ff] bg-white/10 font-bold'
                    : 'text-[#c2c6d8] hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="ghost-btn w-full py-2.5 rounded-xl font-mono-code text-xs font-bold flex items-center justify-center gap-2 text-white"
            >
              <FileText className="w-4 h-4 text-[#00dbe7]" />
              <span>Interactive Resume</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleNavClick('contact');
                onOpenContact();
              }}
              className="primary-btn w-full py-2.5 rounded-xl font-mono-code text-xs font-bold flex items-center justify-center gap-2"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
