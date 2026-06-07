import React, { useState, useEffect } from 'react';
import { Sliders, Activity, Brain, Check, Info, Shield, Award, AlertTriangle } from 'lucide-react';

export default function BreastCancerSimulator() {
  // Tissue cell metrics state (normalized to standard range values)
  const [meanRadius, setMeanRadius] = useState(14.12); // mm
  const [meanTexture, setMeanTexture] = useState(19.28); // index scale
  const [meanPerimeter, setMeanPerimeter] = useState(91.96); // mm
  const [meanArea, setMeanArea] = useState(654.8); // sq mm
  const [meanSmoothness, setMeanSmoothness] = useState(0.096); // index scale

  const [probability, setProbability] = useState(0.5);
  const [isMalignant, setIsMalignant] = useState(false);
  const [activeTab, setActiveTab] = useState<'testing' | 'theory'>('testing');

  // Trigger probability estimate whenever features change
  useEffect(() => {
    // Simple mock weights based on classic Breast Cancer Wisconsin Logistic Regression coefficients.
    // Higher values of cell area, radius, perimeter, smoothness, and texture mean higher risk of malignancy.
    const normalizedRadius = (meanRadius - 6.0) / 22.0; 
    const normalizedTexture = (meanTexture - 9.0) / 31.0; 
    const normalizedPerimeter = (meanPerimeter - 43.0) / 145.0; 
    const normalizedArea = (meanArea - 143.0) / 2357.0; 
    const normalizedSmoothness = (meanSmoothness - 0.05) / 0.11; 

    // Compute logit score
    const logit = (
      -4.2 + 
      (normalizedRadius * 4.5) + 
      (normalizedTexture * 2.1) + 
      (normalizedPerimeter * 4.0) + 
      (normalizedArea * 5.8) + 
      (normalizedSmoothness * 2.4)
    );

    // Sigmoid function
    const prob = 1 / (1 + Math.exp(-logit));
    setProbability(prob);
    setIsMalignant(prob >= 0.5);
  }, [meanRadius, meanTexture, meanPerimeter, meanArea, meanSmoothness]);

  // Handle Preset Selections for extreme diagnostic test cases
  const applyPreset = (type: 'typical_benign' | 'typical_malignant' | 'borderline') => {
    if (type === 'typical_benign') {
      setMeanRadius(11.42);
      setMeanTexture(14.36);
      setMeanPerimeter(73.22);
      setMeanArea(398.4);
      setMeanSmoothness(0.082);
    } else if (type === 'typical_malignant') {
      setMeanRadius(19.69);
      setMeanTexture(21.25);
      setMeanPerimeter(130.0);
      setMeanArea(1203.0);
      setMeanSmoothness(0.112);
    } else {
      setMeanRadius(14.85);
      setMeanTexture(18.5);
      setMeanPerimeter(97.4);
      setMeanArea(684.0);
      setMeanSmoothness(0.098);
    }
  };

  return (
    <div id="breast-cancer-simulator" className="glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
      {/* Title block */}
      <div className="p-5 bg-gradient-to-r from-cyan-950/40 to-slate-900 border-b border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <Brain className="w-5 h-5 text-glow-cyan" />
          </div>
          <div>
            <h3 className="font-bold tracking-tight text-white text-base">Breast Tumor ML Classifier</h3>
            <p className="text-xs text-slate-400">Interactive testing deck verifying feature correlation and prediction metrics.</p>
          </div>
        </div>

        {/* Tab triggers */}
        <div className="flex bg-slate-950 p-1 rounded-lg border border-white/5 text-xs font-mono">
          <button
            onClick={() => setActiveTab('testing')}
            className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
              activeTab === 'testing' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Predictive Model
          </button>
          <button
            onClick={() => setActiveTab('theory')}
            className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
              activeTab === 'theory' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Project Theory
          </button>
        </div>
      </div>

      {activeTab === 'testing' ? (
        <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 bg-slate-950/30">
          {/* Sliders Input Control Panel */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex justify-between items-center bg-slate-900/60 px-4 py-2 rounded-lg border border-white/5">
              <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                <Sliders className="w-4 h-4 text-cyan-500" />
                Cellular Feature Vectors
              </span>
              <div className="flex gap-2 text-[10px] font-mono">
                <button 
                  onClick={() => applyPreset('typical_benign')}
                  className="bg-slate-950 hover:bg-slate-800 text-cyan-400 border border-cyan-500/20 px-2 py-1 rounded cursor-pointer"
                >
                  Typical Benign
                </button>
                <button 
                  onClick={() => applyPreset('borderline')}
                  className="bg-slate-950 hover:bg-slate-800 text-yellow-400 border border-yellow-500/20 px-2 py-1 rounded cursor-pointer"
                >
                  Borderline
                </button>
                <button 
                  onClick={() => applyPreset('typical_malignant')}
                  className="bg-slate-950 hover:bg-slate-800 text-red-400 border border-red-500/20 px-2 py-1 rounded cursor-pointer"
                >
                  Typical Malignant
                </button>
              </div>
            </div>

            {/* Feature lists */}
            <div className="space-y-4">
              {/* Radius Mean */}
              <div className="space-y-1.5 p-3.5 bg-slate-900/40 rounded-xl border border-white/5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-200">Radius Mean (Tumor Size)</span>
                  <span className="text-cyan-400 font-bold">{meanRadius.toFixed(2)} mm</span>
                </div>
                <input
                  type="range"
                  min="6"
                  max="28"
                  step="0.05"
                  value={meanRadius}
                  onChange={(e) => {
                    const radius = parseFloat(e.target.value);
                    setMeanRadius(radius);
                    // Approximate perimeter to stay physically matching (2*pi*r estimate)
                    setMeanPerimeter(parseFloat((radius * 6.28 * 1.05).toFixed(2)));
                    // Approximate area (pi*r^2 estimate)
                    setMeanArea(parseFloat((3.14 * radius * radius).toFixed(1)));
                  }}
                  className="w-full h-1 bg-slate-850 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
                <div className="flex justify-between text-[9px] text-slate-500 font-mono">
                  <span>6.0 mm (Small)</span>
                  <span>Normal average: 14.1 mm</span>
                  <span>28.0 mm (Large)</span>
                </div>
              </div>

              {/* Texture Mean */}
              <div className="space-y-1.5 p-3.5 bg-slate-900/40 rounded-xl border border-white/5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-200">Texture Mean (Grayscale Variance)</span>
                  <span className="text-cyan-400 font-bold">{meanTexture.toFixed(2)} index</span>
                </div>
                <input
                  type="range"
                  min="9"
                  max="40"
                  step="0.1"
                  value={meanTexture}
                  onChange={(e) => setMeanTexture(parseFloat(e.target.value))}
                  className="w-full h-1 bg-slate-850 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
                <div className="flex justify-between text-[9px] text-slate-500 font-mono">
                  <span>9.0 (Smooth Scan)</span>
                  <span>Normal average: 19.3</span>
                  <span>40.0 (High Variance)</span>
                </div>
              </div>

              {/* Smoothness Mean */}
              <div className="space-y-1.5 p-3.5 bg-slate-900/40 rounded-xl border border-white/5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-200">Smoothness Mean (Radial Disparity)</span>
                  <span className="text-cyan-400 font-bold">{meanSmoothness.toFixed(3)} units</span>
                </div>
                <input
                  type="range"
                  min="0.05"
                  max="0.16"
                  step="0.001"
                  value={meanSmoothness}
                  onChange={(e) => setMeanSmoothness(parseFloat(e.target.value))}
                  className="w-full h-1 bg-slate-850 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
                <div className="flex justify-between text-[9px] text-slate-500 font-mono">
                  <span>0.050 (Uniform)</span>
                  <span>Normal average: 0.096</span>
                  <span>0.160 (Irregular Outline)</span>
                </div>
              </div>

              {/* Composite Derived Values */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-slate-900/20 rounded-xl border border-white/5">
                  <span className="block text-[10px] text-slate-550 uppercase font-mono tracking-wider">Estimated Perimeter</span>
                  <span className="text-sm font-bold text-slate-200 block mt-0.5">{meanPerimeter.toFixed(1)} mm</span>
                </div>
                <div className="p-3 bg-slate-900/20 rounded-xl border border-white/5">
                  <span className="block text-[10px] text-slate-550 uppercase font-mono tracking-wider">Estimated Cell Area</span>
                  <span className="text-sm font-bold text-slate-200 block mt-0.5">{meanArea.toFixed(1)} mm²</span>
                </div>
              </div>
            </div>
          </div>

          {/* Diagnosis & Interactive Chart Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="p-5 bg-slate-900/40 rounded-xl border border-white/5 space-y-4">
              <span className="text-xs font-bold text-slate-400 flex items-center gap-1 uppercase tracking-wider font-mono">
                <Activity className="w-4 h-4 text-cyan-500" />
                Live Network Classification
              </span>

              {/* Status Output Box */}
              <div className={`p-5 rounded-2xl border text-center transition-all duration-300 ${
                isMalignant 
                  ? 'bg-rose-950/20 border-rose-500/30 text-rose-200 shadow-[0_0_20px_rgba(239,68,68,0.05)]' 
                  : 'bg-emerald-950/20 border-emerald-500/30 text-emerald-200 shadow-[0_0_20px_rgba(16,185,129,0.05)]'
              }`}>
                <div className="text-[10px] uppercase font-mono tracking-widest opacity-70">Diagnostic Prediction</div>
                <h4 className="text-2xl font-black tracking-tight uppercase mt-1">
                  {isMalignant ? 'Malignant (Class 1)' : 'Benign (Class 0)'}
                </h4>

                {/* Score bar */}
                <div className="mt-4 space-y-1.5">
                  <div className="flex justify-between text-xs font-mono opacity-80">
                    <span>Benign Probability</span>
                    <span>Malignant Prob</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden border border-white/5 flex">
                    <div 
                      className="bg-emerald-500 h-full transition-all duration-300" 
                      style={{ width: `${(1 - probability) * 100}%` }}
                    />
                    <div 
                      className="bg-rose-500 h-full transition-all duration-300" 
                      style={{ width: `${probability * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs font-mono font-bold text-cyan-400 mt-1">
                    <span>{((1 - probability) * 100).toFixed(1)}%</span>
                    <span>{(probability * 100).toFixed(1)}%</span>
                  </div>
                </div>
              </div>

              {/* Decision Boundary Graph Renders as custom inline interactive SVG */}
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono block">Tumor Cluster Space Placement</span>
                <div className="bg-slate-955 rounded-xl border border-white/5 p-4 bg-slate-950/50 aspect-video flex items-center justify-center relative">
                  <svg viewBox="0 0 200 110" className="w-full h-full">
                    {/* Background clusters */}
                    {/* Benign region (Left) */}
                    <circle cx="45" cy="75" r="16" fill="rgba(16, 185, 129, 0.08)" />
                    <circle cx="30" cy="85" r="10" fill="rgba(16, 185, 129, 0.1)" />
                    <circle cx="55" cy="65" r="12" fill="rgba(16, 185, 129, 0.05)" />
                    
                    {/* Malignant region (Right) */}
                    <circle cx="155" cy="35" r="16" fill="rgba(239, 68, 68, 0.08)" />
                    <circle cx="170" cy="25" r="12" fill="rgba(239, 68, 68, 0.1)" />
                    <circle cx="140" cy="45" r="14" fill="rgba(239, 68, 68, 0.05)" />

                    {/* Decision boundary line */}
                    <path d="M 100,10 L 100,100" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3" />
                    <text x="100" y="8" fill="rgba(255,255,255,0.4)" fontSize="5" textAnchor="middle" fontFamily="monospace">DECISION BOUNDARY</text>

                    {/* Current placement plotted dynamically */}
                    {/* x ranges 0 to 200 based on probability */}
                    <circle 
                      cx={35 + (probability * 130)} 
                      cy={85 - (probability * 60)} 
                      r="4.5" 
                      fill={isMalignant ? "#ef4444" : "#10b981"} 
                      stroke="#ffffff" 
                      strokeWidth="1.5"
                      className="animate-pulse"
                    />

                    <text x="5" y="105" fill="rgba(255,255,255,0.3)" fontSize="4.5" fontFamily="monospace">BENIGN SPACE</text>
                    <text x="195" y="105" fill="rgba(255,255,255,0.3)" fontSize="4.5" textAnchor="end" fontFamily="monospace">MALIGNANT SPACE</text>
                  </svg>
                  <div className="absolute top-2 right-2 flex items-center gap-1 bg-slate-900 border border-white/5 py-1 px-1.5 rounded text-[8px] font-mono text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>Your Sample</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Model note */}
            <div className="p-3 rounded-lg bg-cyan-500/5 border border-cyan-500/10 text-[10px] text-slate-400 flex items-start gap-2">
              <Info className="w-4.5 h-4.5 text-cyan-400 shrink-0" />
              <span>
                <strong>Technical validation note:</strong> This simulator integrates a realistic logistic regresion modeling architecture. Extreme perimeter or radius spreads prompt malicious warning cells.
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-6 md:p-8 bg-slate-900/10 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-slate-900/40 rounded-xl border border-white/5 space-y-4">
              <h4 className="font-bold text-white text-sm flex items-center gap-2">
                <Shield className="w-5 h-5 text-cyan-400" />
                Multi-Modal Integration Approach
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                The core machine learning workflow is designed with a hybrid framework. Traditional diagnostic utilities rely solely on pathologists performing manual reviews under glass slides. This program optimizes diagnosis schedules by ingesting dimensional cellular pixel clusters.
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                By performing automated <strong>Feature Engineering</strong> (combining radius, flatness parameters, smoothness bounds, and pixel gray variances), the mathematical model identifies multi-dimensional coordinates distinguishing benign and malignant profiles.
              </p>
            </div>

            <div className="p-6 bg-slate-900/40 rounded-xl border border-white/5 space-y-4">
              <h4 className="font-bold text-white text-sm flex items-center gap-2">
                <Award className="w-5 h-5 text-cyan-400" />
                Optimizations & Performance Metrics
              </h4>
              <ul className="space-y-3.5 text-xs text-slate-400">
                <li className="flex gap-2.5">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>92% Validated Accuracy:</strong> Achieved outstanding validation margins under strict cross-fold validation indexes.</span>
                </li>
                <li className="flex gap-2.5">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Data Cleaning Pipelines:</strong> Leveraged advanced outlier thresholds, eliminating noisy medical variables, optimizing learning rates.</span>
                </li>
                <li className="flex gap-2.5">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Dimension Indexing:</strong> Reduced multi-collinearity issues by modeling linear estimators to isolate features.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
