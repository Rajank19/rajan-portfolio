import React from 'react';
import { Sliders, Code2, Database, BrainCircuit, Cpu, Settings, Smartphone } from 'lucide-react';

export default function SkillsSection() {
  const skillBins = [
    {
      title: 'Frontend Architecture',
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      colorClass: 'border-cyan-500/20 group-hover:border-cyan-500/40 text-cyan-400 bg-cyan-950/10',
      techs: ['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 & CSS3', 'Bootstrap API']
    },
    {
      title: 'Backend Systems',
      icon: <Database className="w-5 h-5 text-purple-400" />,
      colorClass: 'border-purple-500/20 group-hover:border-purple-500/40 text-purple-400 bg-purple-950/10',
      techs: ['FastAPI', 'Node.js', 'Express', 'Django ORM', 'SQLAlchemy ORM', 'REST APIs']
    },
    {
      title: 'AI, ML & Automation',
      icon: <BrainCircuit className="w-5 h-5 text-emerald-400" />,
      colorClass: 'border-emerald-500/20 group-hover:border-emerald-500/40 text-emerald-400 bg-emerald-950/10',
      techs: ['NLP Parsers', 'LLM Prompt Engineering', 'OCR Implementations', 'Scikit-Learn', 'Feature Scaling']
    },
    {
      title: 'Storage & SQL Databases',
      icon: <Cpu className="w-5 h-5 text-amber-400" />,
      colorClass: 'border-amber-500/20 group-hover:border-amber-500/40 text-amber-400 bg-amber-950/10',
      techs: ['MySQL DBMS', 'PostgreSQL', 'MongoDB', 'CRUD SQL Transactions', 'Schema Migrations']
    },
    {
      title: 'Deployment & Tools',
      icon: <Settings className="w-5 h-5 text-rose-400" />,
      colorClass: 'border-rose-500/20 group-hover:border-rose-500/40 text-rose-400 bg-rose-950/10',
      techs: ['Git Control', 'GitHub Actions', 'Vercel Deployment', 'Render Shells', 'n8n Workflow Automation', 'Cloudinary']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-950/40 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-cyan-400">
              <Sliders className="w-5 h-5 text-glow-cyan" />
              <span className="text-xs font-extrabold uppercase tracking-widest font-mono">Expertise</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white">
              Core Technical Arsenal
            </h2>
            <p className="text-xs text-slate-400 max-w-xl">
              Comprehensive toolsets spanning client interfaces, optimized backends, and automated intelligence pipelines.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillBins.map((bin, idx) => (
            <div 
              key={idx} 
              className="glass-panel p-6 rounded-2xl border border-white/5 space-y-5 group transition-all duration-300 hover:border-white/15 hover:bg-slate-950/40"
            >
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl border transition-colors duration-300 ${bin.colorClass}`}>
                  {bin.icon}
                </div>
                <h3 className="font-bold text-white text-base font-sans tracking-tight">
                  {bin.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {bin.techs.map((t, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="px-3 py-1.5 bg-slate-900 border border-white/5 text-[10px] font-mono font-medium rounded-lg text-slate-300 hover:border-cyan-500/30 hover:text-cyan-400 hover:cursor-pointer transition-all duration-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
