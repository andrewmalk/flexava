import React, { useState, useEffect } from 'react';
import { 
  Bot, 
  Sparkles, 
  Play, 
  Pause,
  Smartphone, 
  Video, 
  TrendingUp, 
  Radio, 
  ShieldCheck, 
  CheckCircle2, 
  Volume2, 
  Layers, 
  Languages, 
  Share2, 
  Heart, 
  Eye, 
  Send,
  Zap,
  Globe2,
  Sliders,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AVATAR_FLEET } from '../data/landingData';
import { AvatarProfile } from '../types';

export const HeroControlCenter: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'fleet' | 'generator' | 'pipeline'>('fleet');
  const [selectedAvatarId, setSelectedAvatarId] = useState<string>('hackonomics');
  const [isPlayingReel, setIsPlayingReel] = useState<boolean>(true);
  const [simProgress, setSimProgress] = useState<number>(38);
  const [selectedNiche, setSelectedNiche] = useState<string>('fintech');
  const [selectedHookStyle, setSelectedHookStyle] = useState<string>('curiosity');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generatedResult, setGeneratedResult] = useState<{
    hook: string;
    script: string;
    targetPacing: string;
    estRetention: string;
  } | null>(null);

  const [pipelineStep, setPipelineStep] = useState<number>(2);
  const [isPipelineActive, setIsPipelineActive] = useState<boolean>(true);

  const selectedAvatar: AvatarProfile = AVATAR_FLEET.find(a => a.id === selectedAvatarId) || AVATAR_FLEET[0];

  // Simulated reel playback progress
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlayingReel) {
      interval = setInterval(() => {
        setSimProgress(prev => (prev >= 100 ? 0 : prev + 2.5));
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isPlayingReel]);

  // Pipeline simulation cycle
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPipelineActive) {
      interval = setInterval(() => {
        setPipelineStep(prev => (prev >= 4 ? 0 : prev + 1));
      }, 2400);
    }
    return () => clearInterval(interval);
  }, [isPipelineActive]);

  const handleGenerateScript = () => {
    setIsGenerating(true);
    setTimeout(() => {
      if (selectedNiche === 'fintech') {
        setGeneratedResult({
          hook: '"If you have more than $10k in a standard savings account, watch this before Friday..."',
          script: 'A new treasury spread just unlocked a 5.2% real yield without lockup periods. Here is the 30-second breakdown that banks will not advertise...',
          targetPacing: '160 words/min • Energetic Finance Pace',
          estRetention: '84.2% at 3s mark • High Virality'
        });
      } else if (selectedNiche === 'fashion') {
        setGeneratedResult({
          hook: '"3 outfit formulas that make a $30 Zara top look like $800 luxury..."',
          script: 'Rule number one: monochrome texture stacking. Pairing heavyweight brushed wool with matte silk immediately elevates optical contrast...',
          targetPacing: '145 words/min • Chic Stylist Cadence',
          estRetention: '89.1% at 3s mark • High Save Rate'
        });
      } else if (selectedNiche === 'b2b') {
        setGeneratedResult({
          hook: '"Cold outbound email is officially down to a 0.8% meeting conversion rate. Here is what replaced it..."',
          script: 'We tested 400 custom 15-second avatar video DMs sent within 3 minutes of demo signup. The result was a 42% qualified pipeline surge...',
          targetPacing: '155 words/min • Direct Executive Clarity',
          estRetention: '79.6% at 3s mark • B2B Decision Makers'
        });
      } else {
        setGeneratedResult({
          hook: '"What happens to your deep sleep score when you stop eating at 7 PM sharp..."',
          script: '10,000 biomarker night logs showed an immediate 28% jump in restorative stage 3 sleep and a 6 bpm lower resting heart rate...',
          targetPacing: '140 words/min • Clinical Precision',
          estRetention: '86.5% at 3s mark • Health Authority'
        });
      }
      setIsGenerating(false);
    }, 600);
  };

  const pipelineStages = [
    { title: 'Trend Ingestion', desc: 'Scanning viral TikTok & IG audio patterns in your niche', device: 'AI Radar Node' },
    { title: 'Neural Scripting', desc: 'Generating 3-second retention hooks & storytelling structure', device: 'LLM Studio Engine' },
    { title: 'Frame-by-Frame QC', desc: 'Sub-pixel lip phoneme sync & kinetic subtitle animation', device: 'Hybrid Studio Pass' },
    { title: 'Real-Device Upload', desc: 'Native posting via physical iPhone 15 with cellular e-SIM', device: 'US/EU Device Farm' },
    { title: 'Lead Funnel Sync', desc: 'Direct keyword DMs and tracked UTM conversions live', device: 'Revenue Telemetry' }
  ];

  return (
    <div
      id="hero-control-center"
      className="relative w-full max-w-5xl mx-auto mt-10 rounded-3xl bg-white border border-slate-200/90 p-4 sm:p-6 lg:p-8 shadow-xl shadow-indigo-500/5 overflow-hidden"
    >
      {/* Top Ambient Glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Bar */}
      <div className="relative flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
          </div>
          <div className="h-4 w-px bg-slate-200 mx-1" />
          <div className="flex items-center gap-2 text-xs font-mono text-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold text-slate-900">FLEET CONTROL CENTER</span>
            <span className="text-slate-300">|</span>
            <span className="text-indigo-600 font-semibold">60 Videos/Mo Pipeline</span>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-medium">
          <button
            onClick={() => setActiveTab('fleet')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeTab === 'fleet'
                ? 'bg-white text-indigo-700 font-bold shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Live Avatars
          </button>
          <button
            onClick={() => setActiveTab('generator')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeTab === 'generator'
                ? 'bg-white text-indigo-700 font-bold shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Hook & Script Studio
          </button>
          <button
            onClick={() => setActiveTab('pipeline')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeTab === 'pipeline'
                ? 'bg-white text-indigo-700 font-bold shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Hardware Farm (e-SIM)
          </button>
        </div>
      </div>

      {/* Main Tab Content Panels */}
      <div className="mt-6">
        <AnimatePresence mode="wait">
          {/* TAB 1: LIVE AVATAR FLEET & REEL SIMULATOR */}
          {activeTab === 'fleet' && (
            <motion.div
              key="fleet-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6"
            >
              {/* Left Column: Avatar Selector List */}
              <div className="lg:col-span-5 space-y-3">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center justify-between">
                  <span>Select Active AI Avatar</span>
                  <span className="text-indigo-600 font-bold">7 Live Profiles</span>
                </div>

                <div className="space-y-2 max-h-[340px] overflow-y-auto pr-1">
                  {AVATAR_FLEET.slice(0, 4).map((avatar) => {
                    const isSelected = avatar.id === selectedAvatar.id;
                    return (
                      <button
                        key={avatar.id}
                        onClick={() => setSelectedAvatarId(avatar.id)}
                        className={`w-full text-left p-3 rounded-2xl border transition-all flex items-center gap-3.5 cursor-pointer ${
                          isSelected
                            ? 'bg-indigo-50/70 border-indigo-300 ring-2 ring-indigo-500/20 shadow-xs'
                            : 'bg-white border-slate-200 hover:border-indigo-200 hover:bg-slate-50/60'
                        }`}
                      >
                        <div className="relative shrink-0">
                          <img
                            src={avatar.avatarImg}
                            alt={avatar.name}
                            className="w-12 h-12 rounded-xl object-cover border border-slate-200"
                          />
                          <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-sm text-slate-900 truncate">{avatar.name}</span>
                            <span className="text-[11px] font-mono font-bold text-indigo-600 bg-indigo-100/70 px-1.5 py-0.5 rounded">
                              {avatar.views}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 truncate">{avatar.handle} • {avatar.niche}</p>
                          <div className="flex items-center gap-2 mt-1 text-[10px] font-mono text-slate-400">
                            <span>{avatar.monthlyVideos} vids/mo</span>
                            <span>•</span>
                            <span className="text-emerald-600 font-medium">99.8% Likeness</span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Simulated Short-Form Video Showcase */}
              <div className="lg:col-span-7 bg-slate-900 rounded-2xl p-5 text-white flex flex-col justify-between relative overflow-hidden border border-slate-800 shadow-inner">
                {/* Ambient glow behind reel player */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

                {/* Top Player Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 z-10">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={selectedAvatar.avatarImg}
                      alt={selectedAvatar.name}
                      className="w-8 h-8 rounded-full object-cover border border-indigo-400"
                    />
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <span>{selectedAvatar.name}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono">{selectedAvatar.handle}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[11px] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Active 4K Render
                    </span>
                  </div>
                </div>

                {/* Simulated Reel Display */}
                <div className="my-4 space-y-3 z-10">
                  <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-xs">
                    <div className="text-[11px] font-mono text-indigo-400 uppercase font-bold mb-1 flex items-center justify-between">
                      <span>3-Second Viral Hook</span>
                      <span className="text-slate-400 font-normal">{selectedAvatar.sampleReel.duration}</span>
                    </div>
                    <p className="text-sm font-semibold text-slate-100 italic leading-snug">
                      {selectedAvatar.sampleReel.hook}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50">
                    <span className="text-[10px] font-mono text-slate-400 block mb-1">Generated Script Excerpt</span>
                    <p className="text-xs text-slate-300 line-clamp-2">
                      {selectedAvatar.sampleReel.scriptExcerpt}
                    </p>
                  </div>

                  {/* Simulated Audio Waveform & Voice Spec */}
                  <div className="flex items-center justify-between gap-3 pt-1">
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <Volume2 className="w-4 h-4 text-indigo-400 animate-pulse" />
                      <span className="font-mono text-[11px] text-slate-400">{selectedAvatar.voiceName} ({selectedAvatar.voiceStyle})</span>
                    </div>

                    <div className="flex items-center gap-1 h-4">
                      {[12, 24, 16, 32, 28, 14, 20, 30, 22, 18, 26, 12, 20].map((h, i) => (
                        <div
                          key={i}
                          className="w-1 bg-indigo-400 rounded-full animate-pulse"
                          style={{ height: `${h}px`, animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Progress Bar & Reel Metrics */}
                <div className="pt-3 border-t border-slate-800 space-y-2 z-10">
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-sky-400 transition-all duration-300"
                      style={{ width: `${simProgress}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-1">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1 text-slate-200">
                        <Eye className="w-3.5 h-3.5 text-sky-400" />
                        {selectedAvatar.sampleReel.viewsCount}
                      </span>
                      <span className="flex items-center gap-1 text-slate-200">
                        <Heart className="w-3.5 h-3.5 text-rose-400" />
                        {selectedAvatar.sampleReel.likesCount}
                      </span>
                      <span className="flex items-center gap-1 text-slate-200">
                        <Share2 className="w-3.5 h-3.5 text-emerald-400" />
                        {selectedAvatar.sampleReel.sharesCount}
                      </span>
                    </div>

                    <button
                      onClick={() => setIsPlayingReel(!isPlayingReel)}
                      className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] transition-colors cursor-pointer"
                    >
                      {isPlayingReel ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                      <span>{isPlayingReel ? 'Pause Preview' : 'Play Preview'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: INTERACTIVE SCRIPT & HOOK STUDIO */}
          {activeTab === 'generator' && (
            <motion.div
              key="gen-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-5"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Niche Selector */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-slate-600 uppercase">1. Select Niche</label>
                  <select
                    value={selectedNiche}
                    onChange={(e) => setSelectedNiche(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm font-semibold focus:outline-indigo-500"
                  >
                    <option value="fintech">FinTech & Crypto Alpha</option>
                    <option value="fashion">D2C Luxury & Fashion</option>
                    <option value="b2b">B2B SaaS & Tech Growth</option>
                    <option value="health">Health & Biohacking Science</option>
                  </select>
                </div>

                {/* Hook Angle */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-slate-600 uppercase">2. Hook Strategy</label>
                  <select
                    value={selectedHookStyle}
                    onChange={(e) => setSelectedHookStyle(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm font-semibold focus:outline-indigo-500"
                  >
                    <option value="curiosity">Curiosity Gap & Pattern Interrupt</option>
                    <option value="controversy">Industry Myth-Busting</option>
                    <option value="framework">3-Step Actionable Framework</option>
                    <option value="insider">Insider Data & Proof Leak</option>
                  </select>
                </div>

                {/* Generate Button */}
                <div className="flex flex-col justify-end">
                  <button
                    onClick={handleGenerateScript}
                    disabled={isGenerating}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 transition-all cursor-pointer active:scale-95 disabled:opacity-75"
                  >
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>{isGenerating ? 'Synthesizing...' : 'Generate 4K Hook & Script'}</span>
                  </button>
                </div>
              </div>

              {/* Script Output Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 relative">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 text-xs font-mono">
                  <span className="font-bold text-indigo-700 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                    Algorithmic Short-Form Script
                  </span>
                  <span className="text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded font-bold">
                    {generatedResult?.estRetention || '87.4% Expected 3s Retention'}
                  </span>
                </div>

                <div className="pt-4 space-y-3">
                  <div>
                    <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider">Hook Line (0:00 - 0:03)</span>
                    <p className="text-base font-extrabold text-slate-900 mt-0.5">
                      {generatedResult?.hook || '"If you are still using manual influencer outreach in 2026, look at this exact data..."'}
                    </p>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider">Body Script & Visual Beat</span>
                    <p className="text-sm text-slate-700 leading-relaxed mt-0.5">
                      {generatedResult?.script || 'Our AI Avatar generated 2.4 million organic views across 3 accounts this month. No studio bookings, no late deliveries, and customer acquisition cost fell by 64%...'}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs font-mono text-slate-500 border-t border-slate-200">
                    <span>Target Cadence: <strong className="text-slate-800">{generatedResult?.targetPacing || '155 words/min'}</strong></span>
                    <span className="text-indigo-600 font-bold flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-amber-500" />
                      Auto-synced with 1-Click Telegram Approval
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: REAL-DEVICE HARDWARE FARM */}
          {activeTab === 'pipeline' && (
            <motion.div
              key="pipeline-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-indigo-50/60 border border-indigo-100 p-3.5 rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-xs">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Anti-Shadowban Hardware Farm</h4>
                    <p className="text-xs text-slate-600">Physical iPhone & Android units with unique carrier cellular e-SIMs.</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>100% Native Mobile App Compliance</span>
                </div>
              </div>

              {/* Pipeline Interactive Stages */}
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                {pipelineStages.map((stage, idx) => {
                  const isActive = idx === pipelineStep;
                  const isCompleted = idx < pipelineStep;
                  return (
                    <div
                      key={idx}
                      onClick={() => setPipelineStep(idx)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                        isActive
                          ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/20 scale-[1.02]'
                          : isCompleted
                          ? 'bg-emerald-50/70 border-emerald-200 text-slate-900'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-white'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between text-[11px] font-mono font-bold mb-1.5">
                          <span>0{idx + 1}</span>
                          {isCompleted && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                          {isActive && <span className="w-2 h-2 rounded-full bg-amber-300 animate-pulse" />}
                        </div>
                        <h5 className={`font-bold text-xs ${isActive ? 'text-white' : 'text-slate-900'}`}>{stage.title}</h5>
                        <p className={`text-[11px] mt-1 leading-snug ${isActive ? 'text-indigo-100' : 'text-slate-500'}`}>{stage.desc}</p>
                      </div>

                      <div className={`mt-3 pt-2 border-t text-[10px] font-mono font-semibold ${
                        isActive ? 'border-indigo-400/50 text-indigo-200' : 'border-slate-200 text-slate-500'
                      }`}>
                        {stage.device}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
