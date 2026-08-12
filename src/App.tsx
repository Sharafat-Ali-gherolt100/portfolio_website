import React, { useState, useEffect } from 'react';
import { Background3DCanvas } from './components/Background3DCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  useEffect(() => {
    // Observer for active section scrolling tracking
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleViewWork = () => {
    setActiveSection('projects');
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContact = () => {
    setActiveSection('contact');
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#050505] text-[#e5e2e1] min-h-screen relative font-sans selection:bg-[#568dff] selection:text-[#002661]">
      {/* Three.js Animated 3D AI Core Canvas Background */}
      <Background3DCanvas />

      {/* Cyber Grid Background overlay */}
      <div className="grid-bg" />

      {/* Sticky Top Navigation */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Main Sections */}
      <main className="relative z-10 space-y-12">
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onViewWork={handleViewWork}
        />

        <Marquee />

        <About />

        <Skills />

        <Projects />

        <Experience />

        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Terminal / Formatted Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
