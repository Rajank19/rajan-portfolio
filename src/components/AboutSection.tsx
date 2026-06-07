import React from 'react';
import { User, Award, School, MapPin, Terminal, Code, Cpu, ExternalLink } from 'lucide-react';
import { RAJAN_PROFILE } from '../data/portfolioData';
import InteractiveTerminal from './InteractiveTerminal';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 max-w-7xl mx-auto px-6 space-y-16">
      {/* Narrative grid with statistics */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-2 text-cyan-400">
            <User className="w-5 h-5 text-glow-cyan" />
            <span className="text-xs font-extrabold uppercase tracking-widest font-mono">The Intelligent Core</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Architecting Stable Full Stack Stacks &amp; Intelligent AI Models
          </h2>

          <p className="text-sm text-slate-400 leading-relaxed font-sans">
            I am a dedicated software builder and B.Tech graduate with an intensive drive for structural engineering excellence. My focus rests squarely on developing optimized backend architecture pipelines paired with responsive frontend frameworks. 
          </p>
          
          <p className="text-sm text-slate-400 leading-relaxed font-sans">
            Through my industrial internship and academic research labs, I have gained substantial exposure to leveraging <strong>Natural Language Processing (NLP)</strong>, <strong>OCR pipelines</strong>, and automated generative microservices to decrease operational human workloads.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="glass-panel p-5 rounded-2xl border-white/5 space-y-2 flex flex-col justify-between">
              <div className="p-2 bg-cyan-500/15 rounded-xl text-cyan-400 w-fit">
                <School className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">B.Tech Graduate</h4>
                <p className="text-[11px] text-slate-500">Computer Science &amp; Design</p>
              </div>
            </div>

            <div className="glass-panel p-5 rounded-2xl border-white/5 space-y-2 flex flex-col justify-between">
              <div className="p-2 bg-purple-500/15 rounded-xl text-purple-400 w-fit">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">AI Engineer</h4>
                <p className="text-[11px] text-slate-500">FastAPI, OCR &amp; LLM Flows</p>
              </div>
            </div>
          </div>
        </div>

        {/* Python Sandbox / Code display */}
        <div className="lg:col-span-6">
          <InteractiveTerminal />
        </div>
      </div>
    </section>
  );
}
