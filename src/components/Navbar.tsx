import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, FileText, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  activeSection: string;
}

export default function Navbar({ onOpenResume, activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 90; // header height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        id="app-navbar"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 no-print ${
          scrolled
            ? 'bg-slate-950/70 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300">
              <Terminal className="w-5 h-5 text-cyan-400" />
            </div>
            <span className="font-mono font-bold tracking-tight text-lg text-slate-100">
              RAJAN<span className="text-cyan-400">.DEV</span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-cyan-400 duration-200 cursor-pointer ${
                  activeSection === item.id ? 'text-cyan-400' : 'text-slate-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenResume}
              className="px-4 py-2 border border-cyan-500/30 rounded-lg text-xs font-semibold text-cyan-400 bg-cyan-950/10 hover:bg-cyan-950/30 hover:border-cyan-400 cursor-pointer duration-300 transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.05)]"
            >
              <FileText className="w-4 h-4" />
              Interactive CV
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onOpenResume}
              className="p-2 border border-cyan-500/30 rounded-lg text-cyan-400 bg-cyan-950/10 hover:bg-cyan-950/35 transition-all duration-200"
              title="View CV"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-slate-100 transition-colors duration-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-slate-950/95 backdrop-blur-lg flex flex-col justify-center px-8 md:hidden no-print">
          <nav className="flex flex-col gap-6 text-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-2xl font-bold tracking-tight transition-colors duration-200 ${
                  activeSection === item.id ? 'text-cyan-400' : 'text-slate-300'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="h-[1px] bg-slate-800 my-4" />
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="mx-auto max-w-xs w-full py-4 bg-cyan-500 text-slate-950 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-cyan-400 transition-colors cursor-pointer duration-200"
            >
              <FileText className="w-5 h-5" />
              Interactive CV
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
