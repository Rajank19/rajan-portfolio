import React, { useState } from 'react';
import { Rocket, Github, ExternalLink, Code, Database, Eye } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import BreastCancerSimulator from './BreastCancerSimulator';
import NextCartSandbox from './NextCartSandbox';
import CampusSyncDashboard from './CampusSyncDashboard';

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<'cancer' | 'cart' | 'campus'>('cancer');

  return (
    <section id="projects" className="py-20 max-w-7xl mx-auto px-6 space-y-12">
      <div className="space-y-2 text-center md:text-left">
        <div className="flex items-center gap-2 text-cyan-400 justify-center md:justify-start">
          <Rocket className="w-5 h-5 text-glow-cyan" />
          <span className="text-xs font-extrabold uppercase tracking-widest font-mono">Case Studies</span>
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-white focus:outline-none">
          Live Interactive Project Platforms
        </h2>
        <p className="text-xs text-slate-400 max-w-xl mx-auto md:mx-0">
          Click the selectors below to load active interactive sandboxes demonstrating full-stack and machine-learning execution.
        </p>
      </div>

      {/* Project selector row */}
      <div className="flex bg-slate-950 p-1.5 rounded-xl border border-white/5 w-full max-w-lg mx-auto md:mx-0 scrollbar-none overflow-x-auto text-xs font-mono font-bold">
        <button
          onClick={() => setActiveProject('cancer')}
          className={`flex-1 py-3 px-4 rounded-lg transition-all text-center shrink-0 cursor-pointer ${
            activeProject === 'cancer'
              ? 'bg-cyan-500 text-slate-950 shadow-md font-extrabold'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Breast Cancer ML
        </button>
        <button
          onClick={() => setActiveProject('cart')}
          className={`flex-1 py-3 px-4 rounded-lg transition-all text-center shrink-0 cursor-pointer ${
            activeProject === 'cart'
              ? 'bg-cyan-500 text-slate-950 shadow-md font-extrabold'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          NextCart Store
        </button>
        <button
          onClick={() => setActiveProject('campus')}
          className={`flex-1 py-3 px-4 rounded-lg transition-all text-center shrink-0 cursor-pointer ${
            activeProject === 'campus'
              ? 'bg-cyan-500 text-slate-950 shadow-md font-extrabold'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          CampusSync DB
        </button>
      </div>

      {/* Case studies active viewport */}
      <div className="space-y-8">
        {activeProject === 'cancer' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fade-in">
            {/* Description card */}
            <div className="lg:col-span-4 glass-panel p-6 rounded-2xl border-white/5 space-y-4">
              <div>
                <span className="text-[10px] font-extrabold tracking-widest text-cyan-400 font-mono block uppercase">Python | Scikit-Learn | Deep Learning</span>
                <h3 className="text-xl font-bold font-sans text-white mt-1">Intelligent Breast Cancer Diagnostic Platform</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Recreation of a clinical testing suite built with Python and Scikit-Learn. The platform leverages cell nuclei morphological properties extracted from fine needle aspirates (FNA) scans.
              </p>
              
              <div className="space-y-2 border-t border-slate-800 pt-4">
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Scope highlights</h4>
                <ul className="text-xs text-slate-400 space-y-1.5 pl-4 list-disc">
                  <li>Ingested clinical metrics (smoothness, texture, area) to distinguish cell grids.</li>
                  <li>Reaches up to 92% validated accuracy bounds.</li>
                  <li>Speeds pathologist validation schedules by over 45%.</li>
                </ul>
              </div>

              <div className="flex gap-4 pt-2">
                <a 
                  href="https://github.com/rajan-kumar/breast-cancer-diagnostics" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-850 rounded-lg text-xs font-bold border border-white/5 text-cyan-400 flex items-center gap-1.5 cursor-pointer no-referrer"
                >
                  <Github className="w-4 h-4" />
                  GitHub Source
                </a>
              </div>
            </div>

            {/* Simulated interactive widget */}
            <div className="lg:col-span-8">
              <BreastCancerSimulator />
            </div>
          </div>
        )}

        {activeProject === 'cart' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fade-in">
            {/* Description card */}
            <div className="lg:col-span-4 glass-panel p-6 rounded-2xl border-white/5 space-y-4">
              <div>
                <span className="text-[10px] font-extrabold tracking-widest text-purple-400 font-mono block uppercase">React | FastAPI | SQLAlchemy | Razorpay</span>
                <h3 className="text-xl font-bold font-sans text-white mt-1">NextCart E-Commerce</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                A sandbox marketplace highlighting secure state transitions across API endpoints. The app validates JWT cookies, registers relational transactions, and fires Razorpay sandbox triggers.
              </p>

              <div className="space-y-2 border-t border-slate-800 pt-4">
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Scope highlights</h4>
                <ul className="text-xs text-slate-400 space-y-1.5 pl-4 list-disc">
                  <li>Client-side cart preservation with automatic subtotal aggregations.</li>
                  <li>Secure multi-tier checkout rules using custom backend webhooks.</li>
                  <li>Razorpay checkout API with visual secure validation models.</li>
                </ul>
              </div>

              <div className="flex gap-4 pt-2">
                <a 
                  href="https://github.com/rajan-kumar/nextcart-ecommerce" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-850 rounded-lg text-xs font-bold border border-white/5 text-purple-400 flex items-center gap-1.5 cursor-pointer no-referrer"
                >
                  <Github className="w-4 h-4" />
                  GitHub Source
                </a>
              </div>
            </div>

            {/* Simulated interactive widget */}
            <div className="lg:col-span-8">
              <NextCartSandbox />
            </div>
          </div>
        )}

        {activeProject === 'campus' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fade-in">
            {/* Description card */}
            <div className="lg:col-span-4 glass-panel p-6 rounded-2xl border-white/5 space-y-4">
              <div>
                <span className="text-[10px] font-extrabold tracking-widest text-emerald-400 font-mono block uppercase">React | FastAPI | SQL Transactions</span>
                <h3 className="text-xl font-bold font-sans text-white mt-1">CampusSync Record Manager</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Full lifecycle administrative control console mapping client databases. The panel simulates student records indexations, bulk inserts, programmatic deletions, and live performance metrics with SVG charts.
              </p>

              <div className="space-y-2 border-t border-slate-800 pt-4">
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Scope highlights</h4>
                <ul className="text-xs text-slate-400 space-y-1.5 pl-4 list-disc">
                  <li>Relational column schemas with custom composite key indexers.</li>
                  <li>Stateful search algorithms matching partial fields on index tags.</li>
                  <li>Automatic CGPA average updates with responsive class density visualizations.</li>
                </ul>
              </div>

              <div className="flex gap-4 pt-2">
                <a 
                  href="https://github.com/rajan-kumar/campus-sync-sms" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-850 rounded-lg text-xs font-bold border border-white/5 text-emerald-400 flex items-center gap-1.5 cursor-pointer no-referrer"
                >
                  <Github className="w-4 h-4" />
                  GitHub Source
                </a>
              </div>
            </div>

            {/* Simulated interactive widget */}
            <div className="lg:col-span-8">
              <CampusSyncDashboard />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
