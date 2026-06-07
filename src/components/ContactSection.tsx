import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink, Sparkles, Check } from 'lucide-react';
import { RAJAN_PROFILE } from '../data/portfolioData';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !msg.trim()) {
      alert('Kindly provide your name, email, and description message!');
      return;
    }

    setSubmitting(true);
    // Simulate API delivery
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setName('');
      setEmail('');
      setMsg('');
      setTimeout(() => setSubmitted(false), 500);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 max-w-7xl mx-auto px-6 space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Pitch / Quick Info Links */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-2 text-cyan-400">
            <Sparkles className="w-5 h-5 text-glow-cyan" />
            <span className="text-xs font-extrabold uppercase tracking-widest font-mono">Get In Touch</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Let's Build Something Intelligent together.
          </h2>

          <p className="text-sm text-slate-400 leading-relaxed font-sans">
            I am actively exploring career opportunities in Full Stack Software Engineering, API Pipeline construction, and AI/ML integrations. Feel free to contact me directly for technical collaborations, code audits, or structural engineering queries.
          </p>

          <div className="space-y-4 pt-4 font-sans text-sm">
            {/* Direct Email Link */}
            <a 
              href={`mailto:${RAJAN_PROFILE.email}`} 
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-white/5 hover:border-cyan-500/30 group transition-all duration-300"
            >
              <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">Email Me Directly</p>
                <p className="font-bold text-slate-200 mt-0.5">{RAJAN_PROFILE.email}</p>
              </div>
            </a>

            {/* Direct Phone Link */}
            <a 
              href={`tel:${RAJAN_PROFILE.phone}`} 
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-white/5 hover:border-cyan-500/30 group transition-all duration-300"
            >
              <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">Direct Phone Line</p>
                <p className="font-bold text-slate-200 mt-0.5">{RAJAN_PROFILE.phone}</p>
              </div>
            </a>
          </div>

          {/* External Social Profiles links */}
          <div className="flex gap-4.5 pt-2 text-xs font-mono">
            <a 
              href={RAJAN_PROFILE.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="px-4 py-2 bg-slate-900 border border-white/5 rounded-lg text-slate-300 hover:text-white hover:border-cyan-500/20 transition-all flex items-center gap-1.5 no-referrer"
            >
              <Linkedin className="w-4.5 h-4.5" />
              <span>LinkedIn profile</span>
            </a>
            <a 
              href={RAJAN_PROFILE.github} 
              target="_blank" 
              rel="noreferrer" 
              className="px-4 py-2 bg-slate-900 border border-white/5 rounded-lg text-slate-300 hover:text-white hover:border-cyan-500/20 transition-all flex items-center gap-1.5 no-referrer"
            >
              <Github className="w-4.5 h-4.5" />
              <span>GitHub logs</span>
            </a>
          </div>
        </div>

        {/* Message board submission form */}
        <div className="lg:col-span-7">
          <form 
            onSubmit={handleSubmit} 
            className="glass-panel p-8 rounded-2xl border border-white/5 space-y-5 flex flex-col justify-between"
          >
            <div className="space-y-1">
              <h3 className="font-bold text-white text-base">Direct Sandbox Msg Pipeline</h3>
              <p className="text-xs text-slate-500">Transfers securely to virtual developer messaging sockets.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Full Sender Name</label>
                <input
                  type="text"
                  placeholder="e.g. Dr. Sarah Jenkins"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-850 focus:border-cyan-500 rounded-lg px-4 py-3 text-xs text-slate-200 outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Contact Email Address</label>
                <input
                  type="email"
                  placeholder="e.g. sarah@oncology-labs.org"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-850 focus:border-cyan-500 rounded-lg px-4 py-3 text-xs text-slate-200 outline-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Message Description</label>
              <textarea
                placeholder="Describe your technical query, target schedules, or collaboration proposals here..."
                required
                rows={5}
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                className="w-full bg-slate-950 border border-slate-850 focus:border-cyan-500 rounded-lg px-4 py-3 text-xs text-slate-200 outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-40 text-slate-950 font-bold text-xs text-center rounded-xl duration-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer font-sans"
            >
              {submitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                  <span>Routing Sandbox Thread...</span>
                </>
              ) : submitted ? (
                <>
                  <Check className="w-5 h-5 stroke-[3.5]" />
                  <span>Success, message queue dispatched!</span>
                </>
              ) : (
                <>
                  <Send className="w-4.5 h-4.5" />
                  <span>Submit Secure Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
