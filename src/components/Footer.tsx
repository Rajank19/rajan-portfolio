import React from 'react';
import { Terminal } from 'lucide-react';
import { RAJAN_PROFILE } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export default function Footer({ onOpenResume }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 border-t border-white/5 bg-slate-950/60 relative z-10 no-print">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300">
            <Terminal className="w-5 h-5 text-cyan-400" />
          </div>
          <span className="font-mono font-bold tracking-tight text-sm text-slate-100">
            RAJAN<span className="text-cyan-400">.DEV</span>
          </span>
        </div>

        <p className="text-xs text-slate-500 font-mono text-center md:text-left">
          &copy; {currentYear} Rajan Kumar. Engineered with React &amp; Tailwind.
        </p>

        {/* Navigation links & CV trigger */}
        <div className="flex gap-6 text-xs text-slate-400 font-medium">
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors font-semibold text-cyan-400">Active Lab Modules</a>
          <button onClick={onOpenResume} className="hover:text-cyan-400 transition-colors font-bold cursor-pointer">Printable Resume CV</button>
        </div>
      </div>
    </footer>
  );
}
