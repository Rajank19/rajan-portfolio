import React, { useState } from 'react';
import { X, Printer, Mail, Phone, MapPin, Download, Globe, Github, Linkedin, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { RAJAN_PROFILE, JOB_EXPERIENCES, PROJECTS_DATA, CERTIFICATES_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  onClose: () => void;
}

export default function ResumeModal({ onClose }: ResumeModalProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handlePrint = () => {
    window.print();
  };

  const skills = [
    { category: 'Languages', items: ['Python', 'JavaScript (ES6+)', 'SQL', 'HTML5', 'CSS3'] },
    { category: 'Backend Frameworks', items: ['FastAPI', 'Node.js', 'Express', 'Django ORM', 'SQLAlchemy'] },
    { category: 'Frontend', items: ['React.js', 'Tailwind CSS', 'Bootstrap'] },
    { category: 'Databases & Tools', items: ['MySQL', 'MongoDB', 'PostgreSQL', 'Git', 'GitHub', 'n8n', 'Cloudinary', 'Google Drive'] },
    { category: 'Specializations', items: ['Natural Language Processing (NLP)', 'Large Language Models (LLMs)', 'Optical Character Recognition (OCR)', 'Feature Engineering', 'REST APIs', 'JWT Auth'] },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/90 backdrop-blur-md flex justify-center p-4 md:p-8 no-print">
      <div 
        className="relative w-full max-w-5xl glass-panel rounded-2xl flex flex-col overflow-hidden shadow-2xl border border-white/10 max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Interactive & Clean */}
        <div className="p-6 bg-slate-900 border-b border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-pulse" />
              <h2 className="text-xl font-bold tracking-tight text-white uppercase font-mono">Interactive Professional CV</h2>
            </div>
            <p className="text-xs text-slate-400">Searchable dashboard or formatted output optimized for 1-page PDF print.</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 rounded-lg text-xs font-bold duration-200 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              Print / Save PDF
            </button>
            <button 
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Live Skill Filter Row */}
        <div className="px-6 py-3 bg-slate-900/50 border-b border-white/5 flex items-center justify-between no-print">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Filter resume content by keyword (e.g., FastAPI, React, ML)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-lg px-4 py-2 text-xs text-slate-200 placeholder-slate-500 outline-none transition-colors"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] bg-slate-800 text-slate-400 hover:text-white px-1.5 py-0.5 rounded cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
          {searchTerm && (
            <div className="text-xs text-slate-400 font-mono animate-fade-in pl-4">
              Showing highlights matching: <span className="text-cyan-400">"{searchTerm}"</span>
            </div>
          )}
        </div>

        {/* Resume Content Body */}
        <div className="overflow-y-auto p-8 bg-slate-950 font-sans leading-relaxed text-slate-300">
          <div className="max-w-4xl mx-auto">
            {/* Header / Contact Details */}
            <div className="text-center sm:text-left border-b border-slate-800 pb-8 flex flex-col sm:flex-row justify-between items-start gap-6">
              <div>
                <h1 className="text-4xl font-extrabold tracking-tight text-white">{RAJAN_PROFILE.name}</h1>
                <h2 className="text-lg font-mono font-medium text-cyan-400 mt-1">{RAJAN_PROFILE.title}</h2>
                <p className="text-xs text-slate-400 mt-2 max-w-xl">{RAJAN_PROFILE.summary}</p>
              </div>

              <div className="flex flex-col gap-2.5 text-xs text-slate-400 w-full sm:w-auto font-mono bg-slate-900/40 p-4 rounded-xl border border-white/5">
                <a href={`mailto:${RAJAN_PROFILE.email}`} className="flex items-center justify-center sm:justify-start gap-2 hover:text-cyan-400 transition-colors">
                  <Mail className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span>{RAJAN_PROFILE.email}</span>
                </a>
                <a href={`tel:${RAJAN_PROFILE.phone}`} className="flex items-center justify-center sm:justify-start gap-2 hover:text-cyan-400 transition-colors">
                  <Phone className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span>{RAJAN_PROFILE.phone}</span>
                </a>
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <MapPin className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span>{RAJAN_PROFILE.location} (Willing to relocate)</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-4 border-t border-slate-800 pt-2 mt-1">
                  <a href={RAJAN_PROFILE.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-cyan-400 transition-colors no-referrer">
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                  <a href={RAJAN_PROFILE.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-cyan-400 transition-colors no-referrer">
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Grid Split Content */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-8">
              {/* Left Column: Skill sets and Education */}
              <div className="md:col-span-4 space-y-8">
                {/* Technical Index */}
                <div className="bg-slate-900/20 p-5 rounded-2xl border border-white/5 space-y-4">
                  <h3 className="text-sm font-extrabold text-cyan-400 tracking-wider uppercase border-b border-cyan-500/10 pb-2">Technical Skills</h3>
                  {skills.map((skillGroup, groupIdx) => (
                    <div key={groupIdx} className="space-y-2">
                      <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{skillGroup.category}</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {skillGroup.items.map((skill, skillIdx) => {
                          const isMatch = searchTerm && skill.toLowerCase().includes(searchTerm.toLowerCase());
                          return (
                            <span 
                              key={skillIdx} 
                              className={`px-2 py-1 text-[10px] rounded font-mono border transition-colors ${
                                isMatch 
                                  ? 'bg-cyan-500/20 text-cyan-200 border-cyan-400/80 shadow-[0_0_8px_rgba(6,182,212,0.3)]'
                                  : 'bg-slate-900 text-slate-300 border-white/5'
                              }`}
                            >
                              {skill}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Academic credentials */}
                <div className="bg-slate-900/20 p-5 rounded-2xl border border-white/5 space-y-4">
                  <h3 className="text-sm font-extrabold text-cyan-400 tracking-wider uppercase border-b border-cyan-500/10 pb-2">Education</h3>
                  <div className="space-y-2">
                    <span className="text-[10px] font-extrabold tracking-wider text-cyan-500 uppercase font-mono">{RAJAN_PROFILE.education.graduationDate}</span>
                    <h4 className="text-sm font-bold text-slate-100">{RAJAN_PROFILE.education.degree}</h4>
                    <p className="text-xs text-slate-400 leading-snug">{RAJAN_PROFILE.education.institution}</p>
                    <div className="inline-flex mt-1 items-center gap-1.5 text-xs text-slate-300 bg-slate-905 px-2 bg-slate-900 py-1 rounded border border-white/5">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
                      <span>{RAJAN_PROFILE.education.score}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Experience, Projects & Certs */}
              <div className="md:col-span-8 space-y-8">
                {/* Professional History */}
                <div>
                  <h3 className="text-sm font-extrabold text-cyan-400 tracking-wider uppercase border-b border-cyan-500/10 pb-2 mb-4">Professional Experience</h3>
                  <div className="space-y-6">
                    {JOB_EXPERIENCES.map((job, idx) => (
                      <div key={idx} className="space-y-3">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
                          <div>
                            <h4 className="text-base font-extrabold text-slate-100">{job.role}</h4>
                            <p className="text-xs font-semibold text-cyan-500">{job.company} — <span className="opacity-80 font-normal">{job.location}</span></p>
                          </div>
                          <span className="text-xs text-slate-400 font-mono">{job.period}</span>
                        </div>
                        <div className="flex flex-wrap gap-1 hover:cursor-pointer">
                          {job.tags.map((tag, tIdx) => (
                            <span key={tIdx} className="px-1.5 py-0.5 bg-slate-900 text-slate-400 text-[10px] font-mono rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <ul className="space-y-2 pl-4 list-disc text-xs text-slate-400">
                          {job.bulletPoints.map((point, bIdx) => {
                            const highlightedPoint = searchTerm 
                              ? point.split(new RegExp(`(${searchTerm})`, 'gi')).map((chunk, cIdx) => 
                                  chunk.toLowerCase() === searchTerm.toLowerCase() 
                                    ? <mark key={cIdx} className="bg-cyan-500/30 text-white font-bold p-0.5 rounded">{chunk}</mark> 
                                    : chunk
                                )
                              : point;
                            return (
                              <li key={bIdx} className="leading-relaxed">
                                {highlightedPoint}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Practical Case Studies */}
                <div>
                  <h3 className="text-sm font-extrabold text-cyan-400 tracking-wider uppercase border-b border-cyan-500/10 pb-2 mb-4">Key Projects</h3>
                  <div className="space-y-6">
                    {PROJECTS_DATA.map((proj, idx) => (
                      <div key={idx} className="space-y-3">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
                          <h4 className="text-base font-extrabold text-slate-100">{proj.title}</h4>
                          <span className="text-xs text-slate-400 font-mono">{proj.period}</span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed italic">{proj.description}</p>
                        <ul className="space-y-2 pl-4 list-disc text-[11px] text-slate-400">
                          {proj.bullets.map((bullet, buIdx) => {
                            const highlightedBullet = searchTerm 
                              ? bullet.split(new RegExp(`(${searchTerm})`, 'gi')).map((chunk, cIdx) => 
                                  chunk.toLowerCase() === searchTerm.toLowerCase() 
                                    ? <mark key={cIdx} className="bg-cyan-500/30 text-white font-bold p-0.5 rounded">{chunk}</mark> 
                                    : chunk
                                )
                              : bullet;
                            return (
                              <li key={buIdx} className="leading-relaxed">
                                {highlightedBullet}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Validated Credentials Index */}
                <div>
                  <h3 className="text-sm font-extrabold text-cyan-400 tracking-wider uppercase border-b border-cyan-500/10 pb-2 mb-4">Certifications</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {CERTIFICATES_DATA.map((cert) => (
                      <div key={cert.id} className="p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-1.5 hover:border-cyan-500/20 transition-all duration-300">
                        <div className="flex justify-between items-start gap-1">
                          <h4 className="text-xs font-bold text-slate-100 line-clamp-1">{cert.title}</h4>
                          {cert.score && <span className="text-[9px] text-cyan-400 bg-cyan-400/10 font-bold px-1.5 py-0.5 rounded shrink-0">{cert.score}</span>}
                        </div>
                        <p className="text-[10px] text-slate-400 line-clamp-1">{cert.issuer}</p>
                        <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 pt-1.5 border-t border-slate-800">
                          <span>{cert.date}</span>
                          {cert.credentialId && <span className="text-cyan-500/70 hover:text-cyan-400 transition-colors">ID: {cert.credentialId}</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden print-only replica matching standard black and white print rules */}
      <div className="hidden print-only fixed inset-0 z-[100] bg-white text-black p-10 font-sans text-xs print-container leading-relaxed">
        <div className="w-full max-w-4xl mx-auto space-y-4">
          <div className="border-b-2 border-slate-900 pb-4 flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold uppercase tracking-tight text-slate-900">{RAJAN_PROFILE.name}</h1>
              <h3 className="text-sm font-semibold text-slate-700 tracking-wider font-mono">{RAJAN_PROFILE.title}</h3>
            </div>
            <div className="text-right text-[10px] space-y-0.5 text-slate-600 font-mono">
              <div>Email: {RAJAN_PROFILE.email}</div>
              <div>Phone: {RAJAN_PROFILE.phone}</div>
              <div>Location: {RAJAN_PROFILE.location}</div>
              <div>GitHub: {RAJAN_PROFILE.github}</div>
              <div>LinkedIn: {RAJAN_PROFILE.linkedin}</div>
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed text-[11px] italic">{RAJAN_PROFILE.summary}</p>

          <div className="grid grid-cols-12 gap-6 pt-2">
            <div className="col-span-8 space-y-4">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-800 pb-1 mb-2">Experience</h3>
                {JOB_EXPERIENCES.map((job, idx) => (
                  <div key={idx} className="space-y-1 mb-3">
                    <div className="flex justify-between text-[11px]">
                      <strong>{job.role} - <span className="text-slate-700">{job.company}</span></strong>
                      <span className="font-mono">{job.period}</span>
                    </div>
                    <ul className="list-disc pl-4 text-slate-600 space-y-1 text-[10px]">
                      {job.bulletPoints.map((bp, bidx) => <li key={bidx}>{bp}</li>)}
                    </ul>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-800 pb-1 mb-2">Projects</h3>
                {PROJECTS_DATA.map((proj, idx) => (
                  <div key={idx} className="space-y-1 mb-3">
                    <div className="flex justify-between text-[11px]">
                      <strong>{proj.title}</strong>
                      <span className="font-mono">{proj.period}</span>
                    </div>
                    <ul className="list-disc pl-4 text-slate-600 space-y-1 text-[10px]">
                      {proj.bullets.map((b, bidx) => <li key={bidx}>{b}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-4 space-y-4">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-800 pb-1 mb-2">Education</h3>
                <div className="space-y-0.5 text-[10px]">
                  <strong>{RAJAN_PROFILE.education.degree}</strong>
                  <div className="text-slate-700">{RAJAN_PROFILE.education.institution}</div>
                  <div className="text-slate-500 font-mono">{RAJAN_PROFILE.education.graduationDate}</div>
                  <div className="font-semibold text-slate-800 mt-1">{RAJAN_PROFILE.education.score}</div>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-800 pb-1 mb-2">Key Skills</h3>
                <div className="space-y-2 text-[10px] text-slate-700 font-mono">
                  {skills.map((st, sidx) => (
                    <div key={sidx}>
                      <span className="font-bold text-slate-900 text-[9px] block uppercase">{st.category}:</span>
                      {st.items.join(', ')}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-800 pb-1 mb-2">Certifications</h3>
                <div className="space-y-1.5 text-[9px] text-slate-700">
                  {CERTIFICATES_DATA.map((c) => (
                    <div key={c.id}>
                      <strong>{c.title}</strong>
                      <div>{c.issuer} ({c.date})</div>
                      {c.credentialId && <div className="font-mono text-[8px] text-slate-500">ID: {c.credentialId}</div>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
