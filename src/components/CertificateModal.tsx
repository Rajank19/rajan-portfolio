import React from 'react';
import { X, Award, ExternalLink, Calendar, MapPin, CheckCircle, ShieldCheck } from 'lucide-react';
import { CertificateData } from '../types';

interface CertificateModalProps {
  certificate: CertificateData;
  onClose: () => void;
}

export default function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div 
        className="relative w-full max-w-4xl glass-panel rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row transition-all duration-300 max-h-[90vh] md:max-h-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Side: Visual Replica of the Certificate */}
        <div className="w-full md:w-1/2 bg-slate-900/60 p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/10 overflow-y-auto">
          {certificate.type === 'ibm' && (
            <div className="w-full max-w-[340px] bg-white text-slate-900 p-5 rounded shadow-xl font-sans text-[10px] leading-tight flex flex-col justify-between aspect-[1.414/1] relative">
              <div className="flex justify-between items-start mb-2">
                <div className="w-12 bg-slate-100 p-1 flex items-center justify-center font-bold text-center border text-[8px]">
                  coursera
                </div>
                <div className="text-right text-[12px] font-extrabold tracking-tighter text-blue-800">
                  IBM
                </div>
              </div>
              
              <div className="my-1">
                <div className="text-[6px] text-slate-500 font-mono">Sep 11, 2024</div>
                <h3 className="text-[12px] font-extrabold text-slate-950 mt-0.5">Rajan Kumar</h3>
                <p className="text-[7px] text-slate-600 mt-1">
                  has successfully completed the online, non-credit Professional Certificate
                </p>
                <div className="text-[10px] font-bold text-slate-900 uppercase tracking-tight border-b-2 border-slate-900 pb-1 mt-1.5">
                  IBM Full Stack Software Developer
                </div>
              </div>

              <div className="text-[6px] text-slate-500 leading-relaxed max-h-[45px] overflow-hidden">
                10 courses on Cloud, React, Node.js, Express, Containers, Kubernetes, and Capstone solutions. Completed with industry-grade evaluations.
              </div>

              <div className="flex justify-between items-end border-t border-slate-100 pt-1 mt-1.5">
                <div>
                  <div className="font-serif text-[6px]">Rav Ahuja</div>
                  <div className="text-[4px] text-slate-500">AI & Data Science Program Director</div>
                </div>
                <div className="text-right">
                  <div className="text-[4px] text-slate-400">Verify at coursera.org/verify/professional-cert</div>
                  <div className="text-[5px] font-mono font-bold text-slate-800">VWHFX8PH4UW3</div>
                </div>
              </div>
            </div>
          )}

          {certificate.type === 'nptel_cloud' && (
            <div className="w-full max-w-[340px] bg-amber-50/95 text-slate-900 p-5 rounded shadow-xl font-sans text-[10px] leading-tight flex flex-col justify-between aspect-[1.414/1] relative border-2 border-amber-600">
              <div className="absolute top-0 right-4 bg-red-600 text-white font-serif uppercase tracking-widest text-[8px] font-bold px-3 py-1 rounded-b">
                Elite
              </div>

              <div className="flex justify-between items-center mb-1 pb-1 border-b border-amber-200">
                <div className="text-[6px] font-bold text-slate-700">NPTEL ONLINE CERTIFICATION</div>
                <div className="text-[6px] font-bold text-red-700">SWAYAM / IIT KANPUR</div>
              </div>

              <div className="text-center my-1.5">
                <h4 className="text-[8px] text-slate-500">This certificate is awarded to</h4>
                <h3 className="text-[11px] font-bold uppercase text-slate-950 mt-0.5 tracking-wide">RAJAN KUMAR</h3>
                <p className="text-[7px] text-slate-600 my-0.5">for successfully completing the course</p>
                <h4 className="text-[9px] font-extrabold text-blue-900 font-serif leading-tight">
                  Cloud Computing and Distributed Systems
                </h4>
              </div>

              <div className="bg-white/80 p-1.5 rounded border border-amber-200 flex justify-around items-center text-center text-[7px] my-1">
                <div>
                  <div className="text-[6px] text-slate-500">Assignments</div>
                  <div className="font-bold">25/25</div>
                </div>
                <div className="w-[1px] h-4 bg-amber-200" />
                <div>
                  <div className="text-[6px] text-slate-500">Exam</div>
                  <div className="font-bold">51/75</div>
                </div>
                <div className="w-[1px] h-4 bg-amber-200" />
                <div className="bg-amber-100 px-1 rounded">
                  <div className="text-[6px] text-slate-500">Score</div>
                  <div className="font-extrabold text-slate-900">76%</div>
                </div>
              </div>

              <div className="flex justify-between items-end text-[5px] mt-1 text-slate-500">
                <div>
                  <div className="font-bold">Prof. B. V. Ratish Kumar</div>
                  <div>Chairman, Continuing Education, IIT Kanpur</div>
                </div>
                <div className="text-right">
                  <div className="font-mono">ID: NPTEL26CS29S563500846</div>
                  <div className="text-[4px]">Jan - Mar 2026 (8 Weeks)</div>
                </div>
              </div>
            </div>
          )}

          {certificate.type === 'nptel_edge' && (
            <div className="w-full max-w-[340px] bg-stone-50 text-slate-900 p-5 rounded shadow-xl font-sans text-[10px] leading-tight flex flex-col justify-between aspect-[1.414/1] relative border-2 border-stone-400">
              <div className="absolute top-0 right-4 bg-red-600 text-white font-serif uppercase tracking-widest text-[8px] font-bold px-3 py-1 rounded-b">
                Elite
              </div>

              <div className="flex justify-between items-center mb-1 pb-1 border-b border-stone-200">
                <div className="text-[6px] font-bold text-stone-700">NPTEL ONLINE CERTIFICATION</div>
                <div className="text-[6px] font-bold text-red-700">SWAYAM / IIT KANPUR</div>
              </div>

              <div className="text-center my-1.5">
                <h4 className="text-[8px] text-stone-500">This certificate is awarded to</h4>
                <h3 className="text-[11px] font-bold uppercase text-stone-950 mt-0.5 tracking-wide">RAJAN KUMAR</h3>
                <p className="text-[7px] text-stone-600 my-0.5">for successfully completing the course</p>
                <h4 className="text-[9px] font-extrabold text-blue-900 font-serif leading-tight">
                  Foundation of Cloud IoT Edge ML
                </h4>
              </div>

              <div className="bg-white/80 p-1.5 rounded border border-stone-200 flex justify-around items-center text-center text-[7px] my-1">
                <div>
                  <div className="text-[6px] text-stone-500">Assignments</div>
                  <div className="font-bold">24.17/25</div>
                </div>
                <div className="w-[1px] h-4 bg-stone-200" />
                <div>
                  <div className="text-[6px] text-stone-500">Exam</div>
                  <div className="font-bold">39/75</div>
                </div>
                <div className="w-[1px] h-4 bg-stone-200" />
                <div className="bg-stone-200 px-1 rounded">
                  <div className="text-[6px] text-stone-500">Score</div>
                  <div className="font-extrabold text-stone-900">63%</div>
                </div>
              </div>

              <div className="flex justify-between items-end text-[5px] mt-1 text-stone-500">
                <div>
                  <div className="font-bold">Prof. Satyaki Roy</div>
                  <div>NPTEL Coordinator, IIT Kanpur</div>
                </div>
                <div className="text-right">
                  <div className="font-mono">ID: NPTEL25CS75S352801223</div>
                  <div className="text-[4px]">Feb - Apr 2025 (8 Weeks)</div>
                </div>
              </div>
            </div>
          )}

          {certificate.type === 'internship' && (
            <div className="w-full max-w-[340px] bg-white text-slate-800 p-5 rounded shadow-xl font-sans text-[8px] leading-relaxed flex flex-col justify-between aspect-[0.707/1] border border-slate-200 relative">
              <div className="flex justify-between items-center border-b pb-2 mb-3">
                <div className="font-extrabold text-cyan-600 tracking-tight text-[11px]">
                  Next Leap Analytics
                </div>
                <div className="text-slate-400 text-[6px]">BUILD | PREPARE | ACHIEVE</div>
              </div>

              <div className="text-center mb-2">
                <h2 className="text-[10px] font-extrabold uppercase tracking-wider text-slate-900 border-b pb-1 inline-block">
                  Internship Completion Letter
                </h2>
                <div className="text-slate-400 text-[5px] mt-1">Date: 1st November, 2025</div>
              </div>

              <p className="my-2 text-[7px]">
                This is to certify that <strong>Mr. Rajan Kumar</strong> has successfully completed his technical internship at <strong>Next Leap Analytics Pvt. Ltd.</strong> from <strong>23rd April, 2025</strong> to <strong>15th October, 2025</strong> as an <strong>AI Content and Technology Intern Role</strong>.
              </p>

              <p className="my-1.5 text-[7px]">
                During this period, he actively contributed to multiple critical backend pipelines and ML assignments, such as Generative-AI-based content filters, LLM-driven test case systems, and automated workflows. His performance was officially rated as <strong>"Highly Satisfactory"</strong>.
              </p>

              <div className="flex justify-between items-center mt-4 border-t pt-2">
                <div>
                  <div className="h-6 flex items-end">
                    <span className="font-serif italic text-slate-600 text-[9px]">Neha Pal</span>
                  </div>
                  <div className="text-slate-900 font-extrabold text-[6px]">Neha Pal</div>
                  <div className="text-slate-400 text-[5px]">Cofounder &amp; Head of Operations</div>
                </div>
                <div className="w-10 h-10 border rounded-full border-cyan-100 flex items-center justify-center bg-cyan-50/50">
                  <div className="text-center font-bold text-[4px] text-cyan-600 tracking-tighter">
                    OFFICIAL<br/>SEAL
                  </div>
                </div>
              </div>
            </div>
          )}

          <p className="text-[11px] text-slate-400 mt-4 text-center">
            {certificate.type === 'internship' ? 'Official Internship Letterhead' : 'Visual Certificate Replica'}
          </p>
        </div>

        {/* Right Side: Detailed Narrative and Validation */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs font-semibold uppercase tracking-wider border border-cyan-500/10 flex items-center gap-1.5">
                <Award className="w-4.5 h-4.5" />
                {certificate.type === 'internship' ? 'Work Credential' : 'Course Cert'}
              </span>
              <button 
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-slate-100 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-white mb-1">
              {certificate.title}
            </h2>
            <p className="text-slate-400 font-semibold mb-4 text-sm flex items-center gap-1">
              Issued by <span className="text-cyan-400">{certificate.issuer}</span>
            </p>

            <div className="flex gap-4 mb-6">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-white/5">
                <Calendar className="w-4 h-4 text-cyan-500" />
                <span>{certificate.date}</span>
              </div>
              {certificate.score && (
                <div className="flex items-center gap-1.5 text-xs text-slate-200 bg-cyan-950/20 px-3 py-1.5 rounded-lg border border-cyan-500/20">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>Score: <strong className="text-cyan-400 font-bold">{certificate.score}</strong> (Elite Status)</span>
                </div>
              )}
            </div>

            <div className="space-y-3 mb-6">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest">Key Accomplishments</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                {certificate.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-white/10">
            {certificate.credentialId && (
              <div className="p-3 bg-slate-900/60 rounded-xl border border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">Credential ID</div>
                  <div className="text-sm font-mono font-bold text-slate-200">{certificate.credentialId}</div>
                </div>
                <div className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  Verified Active
                </div>
              </div>
            )}

            {certificate.verificationUrl && (
              <a
                href={certificate.verificationUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm text-center rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] flex items-center justify-center gap-2 cursor-pointer no-referrer"
              >
                <span>Verify on Issuer Platform</span>
                <ExternalLink className="w-4.5 h-4.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
