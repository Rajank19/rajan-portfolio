import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, Sparkles, FileText, ChevronDown, Rocket, 
  MapPin, Send, Mail, Phone, ExternalLink, Award, Play 
} from 'lucide-react';

import { RAJAN_PROFILE } from './data/portfolioData';
import { CertificateData } from './types';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import CertificateModal from './components/CertificateModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateData | null>(null);

  // Profile image generated previously
  const profileImgUrl = "/my-photo.jpg";

  // Typing Role Effect State
  const roles = [
    "Python Full Stack Developer",
    "FastAPI & React Engineer",
    "Deep Learning ML Practitioner"
  ];
  const [roleIdx, setRoleIdx] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect loop
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentRole = roles[roleIdx];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(currentRole.substring(0, currentText.length - 1));
      }, 35);
    } else {
      timer = setTimeout(() => {
        setCurrentText(currentRole.substring(0, currentText.length + 1));
      }, 70);
    }

    // Determine state transitions
    if (!isDeleting && currentText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 2000); // Hold role static
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setRoleIdx((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIdx]);

  // Track scroll position to update active navbar section
  useEffect(() => {
    const handleScrollObserver = () => {
      const sections = ['about', 'skills', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            return;
          }
        }
      }
      setActiveSection('home');
    };

    window.addEventListener('scroll', handleScrollObserver);
    return () => window.removeEventListener('scroll', handleScrollObserver);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#020406] text-slate-100 overflow-x-hidden selection:bg-cyan-500/20 selection:text-cyan-300">
      
      {/* Decorative ambient background glowing textures */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-radial-glow opacity-30 pointer-events-none -z-10" />
      <div className="absolute top-[1200px] right-10 w-[600px] h-[600px] bg-radial-purple-glow opacity-20 pointer-events-none -z-10" />
      <div className="absolute bottom-40 left-1/10 w-[500px] h-[500px] bg-radial-glow opacity-25 pointer-events-none -z-10" />

      {/* Floater Navigation Header */}
      <Navbar 
        onOpenResume={() => setIsResumeOpen(true)} 
        activeSection={activeSection} 
      />

      {/* Main Narrative Sections Wrapper */}
      <main className="w-full relative pt-24 md:pt-28 pb-10">
        
        {/* Dynamic Interactive Hero Area */}
        <section 
          id="home" 
          className="min-h-[calc(100vh-130px)] max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative py-12"
        >
          {/* Hero details text Column */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-[10px] font-bold uppercase tracking-wider text-cyan-400 font-mono shadow-[0_0_15px_rgba(6,182,212,0.1)]">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>Available for Hire &amp; Immediate Relocation</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.1]">
                Hello, I am <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">
                  {RAJAN_PROFILE.name}
                </span>
              </h1>

              {/* Responsive typing role terminal heading */}
              <div className="h-8 md:h-10 text-lg sm:text-xl md:text-2xl font-mono text-cyan-400 font-bold flex items-center justify-center lg:justify-start">
                <span>&gt; {currentText}</span>
                <span className="w-2 h-5 bg-cyan-400 ml-1.5 animate-pulse shrink-0" />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
              Dynamic B.Tech graduate skilled in FastAPI backends, full React databases client pipelines, and machine learning architectures predicting clinical pathobiology markers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <button
                onClick={() => {
                  const el = document.getElementById('projects');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-xs text-center rounded-xl cursor-pointer shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-300 flex items-center justify-center gap-2 font-sans"
              >
                <Rocket className="w-4.5 h-4.5" />
                Explore Action Sandboxes
              </button>

              <button
                onClick={() => setIsResumeOpen(true)}
                className="w-full sm:w-auto px-6 py-3.5 bg-slate-900 hover:bg-slate-850 hover:border-cyan-550 border border-white/5 text-slate-350 hover:text-white rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer font-sans"
              >
                <FileText className="w-4.5 h-4.5 text-cyan-400" />
                Review Printable CV
              </button>
            </div>
          </div>

          {/* Hero Profile Photo Illustration Container */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-64 h-64 sm:w-80 sm:h-80 md:w-[340px] md:h-[340px] rounded-2xl overflow-hidden glass-panel border border-cyan-500/20 p-2.5 shadow-[0_0_30px_rgba(6,182,212,0.1)] hover:border-cyan-450 duration-500 transition-all hover:shadow-[0_0_40px_rgba(6,182,212,0.2)]">
              {/* Pulsing indicator overlay */}
              <div className="absolute top-6 right-6 z-10 bg-slate-950/80 px-3 py-1 px-3 py-1.5 rounded-full border border-cyan-500/30 text-[9px] font-mono tracking-wider font-bold text-slate-200 uppercase flex items-center gap-1.5 shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
                <span>Active Candidate</span>
              </div>

              {/* Framed photo */}
              <img 
                src={profileImgUrl} 
                alt="Rajan Kumar software portfolio studio style portrait in blazer" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Pointer to next section indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 no-print hidden lg:flex flex-col items-center gap-1.5 text-[9px] text-slate-500 font-mono tracking-widest uppercase">
            <span>Scroll Down</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
          </div>
        </section>

        {/* Narrative / About Portfolio Block */}
        <AboutSection />

        {/* Categories of Technical Skills Block */}
        <SkillsSection />

        {/* Case Studies / Interactive Sandboxes Block */}
        <ProjectsSection />

        {/* Academic & Industrial Certifications Block */}
        <CertificationsSection onSelectCertificate={(cert) => setSelectedCertificate(cert)} />

        {/* Immediate Inbound Contact / Ping Form Block */}
        <ContactSection />

      </main>

      {/* General Unified Footer Signature */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Interactive Printable CV Modal View overlay */}
      <AnimatePresence>
        {isResumeOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto no-print"
          >
            <ResumeModal onClose={() => setIsResumeOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Authentic Verification Cert replica overlay */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto no-print"
          >
            <CertificateModal 
              certificate={selectedCertificate} 
              onClose={() => setSelectedCertificate(null)} 
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
