import React, { useState, useRef, useEffect } from 'react';
import { Terminal, ArrowRight, Play, Check, AlertTriangle } from 'lucide-react';
import { RAJAN_PROFILE, JOB_EXPERIENCES, PROJECTS_DATA } from '../data/portfolioData';

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export default function InteractiveTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    { command: 'system_init', output: (
      <div className="space-y-1.5 font-mono text-[11px] leading-relaxed text-slate-400">
        <p className="text-cyan-400 font-bold">RAJAN.DEV Terminal Console [Version 1.0.4]</p>
        <p>© 2026 Rajan Kumar. All systems running nominal inside sandboxed container.</p>
        <p className="pb-1">Connecting index databases... <span className="text-emerald-400 font-bold">SUCCESS</span></p>
        <p>Type <span className="text-cyan-400 font-bold">"help"</span> for a catalog of accessible system directories.</p>
      </div>
    )}
  ]);
  
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = input.trim().toLowerCase();
    if (!cleanCmd) return;

    let response: React.ReactNode = null;

    switch (cleanCmd) {
      case 'help':
        response = (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono text-slate-400">
            <div><span className="text-cyan-400 font-bold">bio</span> - Developer brief</div>
            <div><span className="text-cyan-400 font-bold">skills</span> - Full technical arsenal</div>
            <div><span className="text-cyan-400 font-bold">projects</span> - Active case list</div>
            <div><span className="text-cyan-400 font-bold">certs</span> - Verifiable credentials</div>
            <div><span className="text-cyan-400 font-bold">educ</span> - Academic summaries</div>
            <div><span className="text-cyan-400 font-bold">contact</span> - Call-to-action details</div>
            <div><span className="text-cyan-400 font-bold">clear</span> - Purge terminal prompt</div>
            <div><span className="text-cyan-400 font-bold">contact_rajan</span> - Quick ping form</div>
          </div>
        );
        break;
      case 'bio':
        response = (
          <p className="text-xs font-mono text-slate-400 leading-relaxed max-w-2xl">
            {RAJAN_PROFILE.summary}
          </p>
        );
        break;
      case 'skills':
        response = (
          <div className="space-y-2 text-xs font-mono text-slate-400">
            <p><span className="text-cyan-400 font-bold">Languages:</span> Python, SQL, JavaScript (ES6+), HTML5, CSS3</p>
            <p><span className="text-cyan-400 font-bold">Backend Frameworks:</span> FastAPI, Node.js, Express, Django ORM, SQLAlchemy</p>
            <p><span className="text-cyan-400 font-bold">Frontend Frameworks:</span> React.js, Tailwind CSS, Bootstrap</p>
            <p><span className="text-cyan-400 font-bold">Databases & Tools:</span> MySQL, MongoDB, PostgreSQL, Git, GitHub, n8n, Cloudinary, Google Drive</p>
          </div>
        );
        break;
      case 'projects':
        response = (
          <div className="space-y-3.5 text-xs font-mono text-slate-400">
            {PROJECTS_DATA.map((p, idx) => (
              <div key={idx} className="space-y-0.5">
                <p className="text-cyan-400 font-bold">[{idx + 1}] {p.title} ({p.period})</p>
                <p className="text-[11px] opacity-85 leading-relaxed">{p.bullets[0]}</p>
                <p className="text-[10px] text-slate-500">Stacks: {p.technologies.join(', ')}</p>
              </div>
            ))}
          </div>
        );
        break;
      case 'certs':
        response = (
          <div className="space-y-2.5 text-xs font-mono text-slate-400">
            <p>• <span className="text-cyan-400 font-bold">IBM Full Stack Software Developer:</span> Professional qualification completed via Coursera (ID: VWHFX8PH4UW3).</p>
            <p>• <span className="text-cyan-400 font-bold">Cloud Computing:</span> Elite certified from NPTEL / Indian Institute of Technology Kanpur (Score: 76%).</p>
            <p>• <span className="text-cyan-400 font-bold">IoT Edge ML Foundations:</span> Certified from NPTEL / Indian Institute of Technology Kanpur (Score: 63%).</p>
          </div>
        );
        break;
      case 'educ':
        response = (
          <div className="space-y-1.5 text-xs font-mono text-slate-400">
            <p className="text-white font-bold">{RAJAN_PROFILE.education.degree}</p>
            <p className="text-slate-450">{RAJAN_PROFILE.education.institution}</p>
            <p className="text-cyan-400 text-[11px] font-bold">{RAJAN_PROFILE.education.score} (Graduation target: 2026)</p>
          </div>
        );
        break;
      case 'contact':
        response = (
          <div className="space-y-2 text-xs font-mono text-slate-400">
            <p><span className="text-cyan-400 font-bold">Academic Email:</span> <a href={`mailto:${RAJAN_PROFILE.email}`} className="underline text-cyan-400 hover:text-cyan-300">{RAJAN_PROFILE.email}</a></p>
            <p><span className="text-cyan-400 font-bold">Direct Phone Line:</span> <a href={`tel:${RAJAN_PROFILE.phone}`} className="underline text-cyan-400 hover:text-cyan-300">{RAJAN_PROFILE.phone}</a></p>
            <p><span className="text-cyan-400 font-bold">LinkedIn:</span> <a href={RAJAN_PROFILE.linkedin} target="_blank" rel="noreferrer" className="underline text-cyan-400 hover:text-cyan-300 no-referrer">Rajan Kumar Profile</a></p>
          </div>
        );
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'contact_rajan':
        response = (
          <div className="p-3.5 bg-slate-900 rounded-xl border border-white/5 space-y-1 font-mono text-xs max-w-sm">
            <p className="text-cyan-400 font-bold">PING FORM LAUNCHED</p>
            <p className="text-slate-500 text-[10px]">Send email request directly using client email software.</p>
            <a 
              href={`mailto:${RAJAN_PROFILE.email}?subject=Collaboration%20Query&body=Hello%20Rajan,%20I'd%20like%20to%20connect%20concerning...`} 
              className="mt-3.5 inline-block text-center py-2 px-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded text-[11px] transition-colors"
            >
              Compose Mail
            </a>
          </div>
        );
        break;
      default:
        response = (
          <div className="flex items-center gap-2 text-rose-450 font-mono text-xs text-rose-400">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>Bash error: command not indexed: "{cleanCmd}". Type "help" to list available stacks.</span>
          </div>
        );
    }

    setHistory([...history, { command: input, output: response }]);
    setInput('');
  };

  const executeShortcut = (cmd: string) => {
    setInput(cmd);
    // Submit programmatically
    const event = { preventDefault: () => {} } as React.FormEvent;
    setTimeout(() => {
      const form = document.getElementById('terminal-prompt-form');
      if (form) {
        form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
      }
    }, 50);
  };

  return (
    <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl bg-slate-950/65 font-mono">
      {/* Title block resembling mock dev system terminal header panel */}
      <div className="p-3.5 bg-slate-900 border-b border-white/5 flex items-center justify-between no-print">
        <div className="flex items-center gap-2">
          {/* macOS window controls circles */}
          <div className="flex gap-1.5 pl-1">
            <div className="w-3 h-3 rounded-full bg-rose-500 opacity-80" />
            <div className="w-3 h-3 rounded-full bg-amber-500 opacity-80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500 opacity-80" />
          </div>
          <span className="text-[10px] text-slate-500 ml-3 tracking-widest font-mono">rajan-bash // sandbox.sh</span>
        </div>

        <div className="flex gap-2 text-[9px] text-slate-450">
          <button 
            onClick={() => executeShortcut('bio')}
            className="hover:text-cyan-400 font-bold px-1 py-0.5 rounded border border-white/5 bg-slate-950"
          >
            bio
          </button>
          <button 
            onClick={() => executeShortcut('skills')}
            className="hover:text-cyan-400 font-bold px-1 py-0.5 rounded border border-white/5 bg-slate-950"
          >
            skills
          </button>
          <button 
            onClick={() => executeShortcut('certs')}
            className="hover:text-cyan-400 font-bold px-1 py-0.5 rounded border border-white/5 bg-slate-950"
          >
            certs
          </button>
        </div>
      </div>

      {/* Terminal View prompt stack */}
      <div className="p-5 overflow-y-auto max-h-[310px] bg-slate-950/85 space-y-4">
        {history.map((it, idx) => (
          <div key={idx} className="space-y-2">
            {/* Display if it corresponds to custom user query run */}
            {it.command !== 'system_init' && (
              <div className="flex items-center gap-2 text-xs font-mono text-slate-200">
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                <span><span className="text-slate-500">rajan-bash $</span> {it.command}</span>
              </div>
            )}
            <div>{it.output}</div>
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Interactive submit prompt Form */}
      <form 
        id="terminal-prompt-form"
        onSubmit={handleCommandSubmit} 
        className="p-3 bg-slate-950 border-t border-white/5 flex items-center gap-2 no-print"
      >
        <Play className="w-4 h-4 text-cyan-400 px-0.5 shrink-0" />
        <span className="text-xs text-slate-500 font-mono">rajan-bash $</span>
        <input
          type="text"
          placeholder="Type 'help' and hit enter..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent border-0 outline-none text-xs text-slate-200 font-mono tracking-wide p-1"
          autoFocus={false}
        />
        <button
          type="submit"
          className="px-3.5 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded font-bold text-[10px] cursor-pointer"
        >
          EXEC
        </button>
      </form>
    </div>
  );
}
