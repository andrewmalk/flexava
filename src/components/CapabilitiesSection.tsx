import React, { useState } from 'react';
import { CAPABILITIES } from '../data/landingData';
import { 
  Bot, 
  Video, 
  Smartphone, 
  ShieldCheck, 
  Languages, 
  TrendingUp, 
  MessageSquare, 
  BarChart3,
  Sparkles,
  ArrowRight,
  Target,
  Cpu,
  Layers,
  Globe2,
  RefreshCw,
  Brain,
  Zap,
  Activity,
  CheckCircle2,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Bot,
  Video,
  Smartphone,
  ShieldCheck,
  Languages,
  TrendingUp,
  MessageSquare,
  BarChart3
};

interface FeatureInfographic {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  detail: string;
  color: string;
}

const capabilityInfographics: Record<string, { kpi: string; features: FeatureInfographic[] }> = {
  'digital-human-synthesis': {
    kpi: '99.8% Likeness',
    features: [
      { icon: Bot, title: 'Photorealistic Mesh', detail: 'Sub-pixel skin texture, dynamic lighting, and natural eye contact', color: 'text-indigo-600 bg-indigo-50 border-indigo-200' },
      { icon: Target, title: 'Brand Aesthetic Matching', detail: 'Tailored wardrobe, studio backgrounds, and target persona traits', color: 'text-sky-600 bg-sky-50 border-sky-200' },
      { icon: Brain, title: 'Unique Identity Escrow', detail: '100% exclusive intellectual property owned by your brand', color: 'text-emerald-600 bg-emerald-50 border-emerald-200' }
    ]
  },
  'high-volume-video-engine': {
    kpi: '60 Vids/Mo',
    features: [
      { icon: Video, title: '60 Unique Scripts / Mo', detail: 'High-retention 3-second hooks customized to viral platform trends', color: 'text-purple-600 bg-purple-50 border-purple-200' },
      { icon: Layers, title: 'Dynamic B-Roll & Visuals', detail: 'Cinematic scene cuts, screen recordings, and product close-ups', color: 'text-pink-600 bg-pink-50 border-pink-200' },
      { icon: Sparkles, title: 'Kinetic Subtitles', detail: 'Engaging animated captions with sound effects for 80%+ mute watch rates', color: 'text-indigo-600 bg-indigo-50 border-indigo-200' }
    ]
  },
  'real-device-cellular-farm': {
    kpi: '0 Shadowbans',
    features: [
      { icon: Smartphone, title: 'Physical Hardware Nodes', detail: 'Native uploads from physical iPhone & Android smartphones', color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
      { icon: Globe2, title: 'Carrier Cellular e-SIMs', detail: 'US/EU residential carrier IP addresses with 0 proxy detection', color: 'text-sky-600 bg-sky-50 border-sky-200' },
      { icon: RefreshCw, title: 'Human Behavioral Touch', detail: 'Organic warmups, native app scrolling, and algorithm-safe timing', color: 'text-amber-600 bg-amber-50 border-amber-200' }
    ]
  },
  'human-editor-qc': {
    kpi: '0% Artifacts',
    features: [
      { icon: ShieldCheck, title: 'Phoneme Lip-Sync Pass', detail: 'Sub-pixel audio-to-mouth alignment verified by creative editors', color: 'text-indigo-600 bg-indigo-50 border-indigo-200' },
      { icon: Zap, title: 'Pacing & Cadence Tuning', detail: 'Optimized speed and micro-pauses for maximum watch-time completion', color: 'text-rose-600 bg-rose-50 border-rose-200' },
      { icon: CheckCircle2, title: 'Brand Safety Guardrails', detail: 'Zero hallucinations, false claims, or compliance violations', color: 'text-emerald-600 bg-emerald-50 border-emerald-200' }
    ]
  },
  'multilingual-voice-cloning': {
    kpi: '5+ Languages',
    features: [
      { icon: Languages, title: 'Neural Voice Matching', detail: 'Clones exact pitch, timbre, and accent into Spanish, German, French, etc.', color: 'text-sky-600 bg-sky-50 border-sky-200' },
      { icon: Globe2, title: 'Cultural Localization', detail: 'Adapts idioms and colloquialisms per region rather than literal translation', color: 'text-indigo-600 bg-indigo-50 border-indigo-200' },
      { icon: Cpu, title: 'Translated Lip Motion', detail: 'Regenerates mouth movements to match localized audio phonemes', color: 'text-emerald-600 bg-emerald-50 border-emerald-200' }
    ]
  },
  'client-approval-escrow': {
    kpi: '< 5m / week',
    features: [
      { icon: MessageSquare, title: 'Telegram / Slack Gateway', detail: 'Receive weekly video draft batches right inside your favorite chat app', color: 'text-indigo-600 bg-indigo-50 border-indigo-200' },
      { icon: CheckCircle2, title: '1-Tap Approval Console', detail: 'Swipe to approve or leave quick voice notes for revisions in seconds', color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
      { icon: Activity, title: 'Automated Publishing Queue', detail: 'Approved videos automatically schedule across your accounts', color: 'text-sky-600 bg-sky-50 border-sky-200' }
    ]
  },
  'automated-dm-funnel': {
    kpi: '3.8x DM Conv',
    features: [
      { icon: MessageSquare, title: 'Keyword Triggered DMs', detail: 'Automatically sends links and coupon codes when viewers comment keywords', color: 'text-purple-600 bg-purple-50 border-purple-200' },
      { icon: Target, title: 'CRM & Lead Ingestion', detail: 'Syncs qualified leads directly into HubSpot, Klaviyo, or Google Sheets', color: 'text-pink-600 bg-pink-50 border-pink-200' },
      { icon: Zap, title: 'UTM Attribution Tracking', detail: 'Tracks clicks, add-to-carts, and closed revenue per video hook', color: 'text-amber-600 bg-amber-50 border-amber-200' }
    ]
  },
  'performance-cac-pricing': {
    kpi: 'Zero Upfront Risk',
    features: [
      { icon: TrendingUp, title: 'We Earn When You Earn', detail: 'Pilot pricing aligned with verified organic traffic and customer acquisition', color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
      { icon: BarChart3, title: 'Transparent Telemetry', detail: 'Live client dashboard tracking impressions, watch time, and conversions', color: 'text-indigo-600 bg-indigo-50 border-indigo-200' },
      { icon: ShieldCheck, title: 'Full Asset Ownership', detail: 'Keep all generated video files, avatar models, and audience followers', color: 'text-sky-600 bg-sky-50 border-sky-200' }
    ]
  }
};

export const CapabilitiesSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'creation' | 'publishing' | 'growth'>('all');
  const [expandedId, setExpandedId] = useState<string | null>('digital-human-synthesis');
  const [activeTooltip, setActiveTooltip] = useState<{ cardId: string; featureIdx: number } | null>(null);

  const filteredCapabilities = filter === 'all' 
    ? CAPABILITIES 
    : CAPABILITIES.filter(c => c.category === filter);

  return (
    <motion.section
      id="capabilities"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative py-18 lg:py-26 bg-slate-50/80 border-t border-slate-200 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-indigo-100/30 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider font-mono shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI INFLUENCER INFRASTRUCTURE MATRIX</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Everything your brand needs to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-600 to-indigo-700">
              dominate short-form video
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Eliminate unreliable creators and expensive studio production. Hover over any capability unit to inspect real-time specs.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {[
              { key: 'all', label: 'All 8 Capabilities' },
              { key: 'creation', label: 'Avatar & Video Creation' },
              { key: 'publishing', label: 'Real-Device Publishing' },
              { key: 'growth', label: 'Funnels & Growth Analytics' }
            ].map((cat) => (
              <button
                key={cat.key}
                id={`cap-filter-${cat.key}`}
                onClick={() => setFilter(cat.key as any)}
                className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  filter === cat.key
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-slate-200 shadow-2xs'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 8 Capabilities Grid */}
        <motion.div
          layout
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
        >
          {filteredCapabilities.map((cap) => {
            const MainIcon = (iconMap as any)[cap.icon] || Sparkles;
            const isExpanded = expandedId === cap.id;
            const infoData = capabilityInfographics[cap.id] || {
              kpi: 'Active Unit',
              features: [
                { icon: Sparkles, title: 'AI Synthesis', detail: 'High-resolution rendering', color: 'text-indigo-600 bg-indigo-50 border-indigo-200' },
                { icon: Zap, title: 'Automated Pipeline', detail: 'Zero manual filming', color: 'text-sky-600 bg-sky-50 border-sky-200' },
                { icon: ShieldCheck, title: 'Human QC', detail: '1-Click approval gateway', color: 'text-emerald-600 bg-emerald-50 border-emerald-200' }
              ]
            };

            return (
              <motion.div
                layout
                key={cap.id}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] } },
                }}
                id={`capability-card-${cap.id}`}
                className={`rounded-2xl p-5 sm:p-6 border transition-all duration-300 flex flex-col justify-between group relative ${
                  isExpanded
                    ? 'bg-white border-indigo-400 shadow-md ring-2 ring-indigo-500/20'
                    : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-md'
                }`}
              >
                <div>
                  {/* Top Bar with SVG Icon & KPI Badge */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-50 to-sky-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-2xs group-hover:scale-105 group-hover:border-indigo-300 transition-transform">
                      <MainIcon className="w-5 h-5 transition-transform group-hover:rotate-3" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-indigo-50 text-indigo-700 border border-indigo-200 shadow-2xs">
                        {infoData.kpi}
                      </span>
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-lg font-bold text-slate-900 mb-1.5 tracking-tight group-hover:text-indigo-900 transition-colors">
                    {cap.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    {cap.description}
                  </p>

                  {/* Interactive Micro-Units */}
                  <div className="space-y-2 pt-3 border-t border-slate-100">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold mb-1 flex items-center justify-between">
                      <span>Feature Specifications</span>
                      <span className="text-indigo-600 lowercase font-normal flex items-center gap-1">
                        <Info className="w-3 h-3" />
                        hover for spec
                      </span>
                    </div>

                    <div className="grid grid-cols-1 gap-2">
                      {infoData.features.map((feat, fIdx) => {
                        const FeatIcon = feat.icon;
                        const isHovered = activeTooltip?.cardId === cap.id && activeTooltip?.featureIdx === fIdx;

                        return (
                          <div
                            key={fIdx}
                            onMouseEnter={() => setActiveTooltip({ cardId: cap.id, featureIdx: fIdx })}
                            onMouseLeave={() => setActiveTooltip(null)}
                            className={`p-2.5 rounded-xl border transition-all duration-200 cursor-pointer relative overflow-hidden flex items-start gap-2.5 ${
                              isHovered
                                ? 'bg-indigo-50/90 border-indigo-300 shadow-xs scale-[1.01]'
                                : 'bg-slate-50/70 border-slate-200/90 hover:bg-slate-50 hover:border-slate-300'
                            }`}
                          >
                            <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border shadow-2xs transition-all duration-200 ${feat.color} ${
                              isHovered ? 'scale-110 shadow-xs' : ''
                            }`}>
                              <FeatIcon className={`w-3.5 h-3.5 transition-transform duration-200 ${isHovered ? 'rotate-6' : ''}`} />
                            </div>

                            <div className="min-w-0 flex-1">
                              <div className="flex items-center justify-between">
                                <div className="text-xs font-bold text-slate-900 truncate">
                                  {feat.title}
                                </div>
                                <span className={`w-1.5 h-1.5 rounded-full transition-colors ${isHovered ? 'bg-indigo-600 animate-ping' : 'bg-slate-300'}`} />
                              </div>
                              <div className="text-[11px] text-slate-500 leading-snug mt-0.5 font-normal">
                                {feat.detail}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Interactive Action Simulation Preview */}
                {cap.actionPreview && (
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : cap.id)}
                      className="text-xs font-mono font-bold text-indigo-600 hover:text-indigo-800 flex items-center justify-between w-full transition-colors cursor-pointer py-1"
                    >
                      <span className="flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5" />
                        <span>{isExpanded ? 'Hide Live Telemetry' : 'Inspect Live Telemetry'}</span>
                      </span>
                      <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-90 text-indigo-700' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="mt-2.5 p-3 rounded-xl bg-slate-900 text-slate-200 border border-slate-800 space-y-2 text-[11px] font-mono overflow-hidden shadow-inner"
                        >
                          <div>
                            <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Input Signal:</span>
                            <span className="text-white font-medium">{cap.actionPreview.inputValue}</span>
                          </div>
                          <div>
                            <span className="text-indigo-400 block text-[10px] uppercase font-bold tracking-wider">AI Pipeline Execution:</span>
                            <span className="text-indigo-200 font-medium">{cap.actionPreview.agentAction}</span>
                          </div>
                          <div className="pt-1 text-emerald-400 font-bold border-t border-slate-800">
                            ✔ {cap.actionPreview.outputSummary}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};
