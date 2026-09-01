import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  FileText, 
  Award,
  Bot,
  TrendingDown,
  Eye,
  Zap,
  Tag
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SUCCESS_STORIES } from '../data/landingData';

export const SuccessStoriesSection: React.FC<{ onJoinClick?: () => void }> = ({ onJoinClick }) => {
  const [activeTab, setActiveTab] = useState<string>(SUCCESS_STORIES[0].id);
  const activeStory = SUCCESS_STORIES.find(s => s.id === activeTab) || SUCCESS_STORIES[0];

  return (
    <motion.section
      id="success-stories"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200 overflow-hidden"
    >
      {/* Ambient gradient spotlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider font-mono shadow-2xs">
            <Award className="w-3.5 h-3.5" />
            <span>PILOT RESULTS & VERIFIED METRICS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            How brands scale organic revenue with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-600 to-indigo-700">
              AI Influencer Fleets
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Real video volume, verified organic view counts, and direct customer acquisition results from our live pilot cohort.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 max-w-4xl mx-auto">
          {SUCCESS_STORIES.map((story) => {
            const isSelected = story.id === activeTab;
            return (
              <button
                key={story.id}
                type="button"
                onClick={() => setActiveTab(story.id)}
                className={`w-full sm:w-1/3 p-4 rounded-2xl border text-left transition-all duration-200 flex items-center gap-3.5 cursor-pointer ${
                  isSelected
                    ? 'bg-white border-indigo-400 shadow-md ring-2 ring-indigo-500/20 text-slate-900'
                    : 'bg-white/80 border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900 shadow-2xs'
                }`}
              >
                <div className={`w-11 h-11 rounded-xl overflow-hidden shrink-0 border ${
                  isSelected ? 'border-indigo-500 ring-2 ring-indigo-400/40' : 'border-slate-200'
                }`}>
                  <img
                    src={story.avatarImg}
                    alt={story.avatarName}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 truncate">
                    {story.industry}
                  </div>
                  <div className="text-sm font-bold text-slate-900 truncate">
                    {story.brandName}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Detailed Case Study Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStory.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 lg:p-12 shadow-sm space-y-10"
          >
            {/* Header row with Avatar & Brand Overview */}
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b border-slate-100">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 border-2 border-indigo-200 shadow-md">
                  <img 
                    src={activeStory.avatarImg} 
                    alt={activeStory.avatarName}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-mono font-bold shadow-2xs">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Pilot Period: {activeStory.period}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {activeStory.brandName}
                  </h3>
                  <p className="text-slate-600 text-sm font-medium">
                    Deployed AI Influencer: <span className="text-indigo-600 font-bold font-mono">{activeStory.avatarName} ({activeStory.avatarHandle})</span>
                  </p>
                </div>
              </div>

              {/* Verified Author Card */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 shrink-0 lg:w-72 space-y-2 shadow-2xs">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
                  Client Verification
                </span>
                <div className="font-bold text-slate-900 text-base">
                  {activeStory.author}
                </div>
                <div className="text-xs text-slate-500">
                  {activeStory.role}
                </div>
                <div className="pt-2 border-t border-slate-200 text-xs font-mono text-indigo-700 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Verified Pilot Brand</span>
                </div>
              </div>
            </div>

            {/* Quantified Metrics Highlight Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1 hover:border-indigo-300 transition-colors shadow-2xs">
                <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-600 font-mono">
                  {activeStory.metrics.views}
                </div>
                <div className="text-xs text-slate-600 font-semibold">
                  Organic Video Views
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1 hover:border-indigo-300 transition-colors shadow-2xs">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 font-mono">
                  {activeStory.metrics.cacReduction}
                </div>
                <div className="text-xs text-slate-600 font-semibold">
                  CAC / Ad Spend Reduction
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1 hover:border-indigo-300 transition-colors shadow-2xs">
                <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 font-mono">
                  {activeStory.metrics.leadsOrRevenue}
                </div>
                <div className="text-xs text-slate-600 font-semibold">
                  Attributable Conversion
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1 hover:border-indigo-300 transition-colors shadow-2xs">
                <div className="text-2xl sm:text-3xl font-extrabold text-teal-600 font-mono">
                  {activeStory.metrics.contentVelocity}
                </div>
                <div className="text-xs text-slate-600 font-semibold">
                  Total 4K Videos Produced
                </div>
              </div>
            </div>

            {/* Operator Interview Quote Highlight */}
            <div className="p-6 sm:p-8 rounded-2xl bg-indigo-50/40 border border-indigo-200 relative shadow-2xs space-y-3">
              <div className="text-xs font-mono text-indigo-700 uppercase tracking-wider font-bold flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>Verified Case Study Quote</span>
              </div>
              <p className="text-base sm:text-lg text-slate-800 italic leading-relaxed font-medium">
                "{activeStory.quote}"
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-2">
                {activeStory.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-indigo-200 text-indigo-700 text-xs font-mono font-medium shadow-2xs"
                  >
                    <Tag className="w-3 h-3 text-indigo-500" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
              <div className="text-xs text-slate-500">
                Want to see custom sample scripts & avatar concepts for your brand?
              </div>
              <a
                href="#waitlist"
                onClick={onJoinClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 transition-all group cursor-pointer"
              >
                <span>Apply for Pilot Onboarding</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};
