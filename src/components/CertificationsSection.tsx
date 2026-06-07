import React from 'react';
import { Award, Eye, ShieldCheck, ChevronRight, School, Briefcase } from 'lucide-react';
import { CERTIFICATES_DATA } from '../data/portfolioData';
import { CertificateData } from '../types';

interface CertificationsSectionProps {
  onSelectCertificate: (cert: CertificateData) => void;
}

export default function CertificationsSection({ onSelectCertificate }: CertificationsSectionProps) {
  return (
    <section id="certifications" className="py-20 bg-slate-950/20 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center gap-2 text-cyan-400 justify-center md:justify-start">
            <Award className="w-5 h-5 text-glow-cyan" />
            <span className="text-xs font-extrabold uppercase tracking-widest font-mono">Validation Credentials</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white">
            Professional Certifications &amp; Experience
          </h2>
          <p className="text-xs text-slate-400 max-w-xl mx-auto md:mx-0">
            Validated credentials issued by industry leaders (IBM, Coursera) and academic ministries (NPTEL / IIT Kanpur).
          </p>
        </div>

        {/* Certificate Display Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATES_DATA.map((cert) => (
            <div 
              key={cert.id} 
              className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col justify-between hover:border-cyan-500/30 group transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <div className="p-2.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-xl group-hover:bg-cyan-500/15 transition-all">
                    {cert.type === 'internship' ? <Briefcase className="w-5 h-5" /> : <School className="w-5 h-5" />}
                  </div>
                  {cert.score && (
                    <span className="px-2.5 py-1 text-[10px] font-extrabold font-mono text-cyan-400 bg-cyan-400/10 border border-cyan-400/25 rounded-full uppercase tracking-wider">
                      ★ Score: {cert.score}
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <h3 className="font-extrabold text-white text-base font-sans tracking-tight line-clamp-1">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 font-semibold">{cert.issuer}</p>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed font-sans line-clamp-2">
                  {cert.details[0]}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-900 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{cert.date}</span>
                <button
                  onClick={() => onSelectCertificate(cert)}
                  className="px-3.5 py-2 bg-slate-900 hover:bg-slate-850 hover:border-cyan-500/40 border border-white/5 text-slate-300 hover:text-white rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5"
                >
                  <Eye className="w-4 h-4" />
                  View Verification PDF Replica
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
