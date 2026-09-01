import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  DollarSign, 
  TrendingUp, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Bot,
  Video,
  Eye,
  Users,
  Zap,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'motion/react';

interface RoiCalculatorSectionProps {
  onJoinClick?: () => void;
}

export const RoiCalculatorSection: React.FC<RoiCalculatorSectionProps> = ({ onJoinClick }) => {
  const [avatarCount, setAvatarCount] = useState<number>(2);
  const [targetViews, setTargetViews] = useState<number>(350000);
  const [humanCreatorCost, setHumanCreatorCost] = useState<number>(350);

  // Math model for AI Avatars vs Human Creator Video Operations:
  // - 60 videos per avatar per month
  // - Traditional cost = monthly videos * humanCreatorCost
  // - Filming/Outreach hours saved = ~3.5 hours per video in negotiations, scripts, shipping product, reshoots, editing
  const calculations = useMemo(() => {
    const monthlyVideos = avatarCount * 60;
    const traditionalMonthlyCost = monthlyVideos * humanCreatorCost;
    const traditionalAnnualCost = traditionalMonthlyCost * 12;
    const hoursSavedPerMonth = Math.round(monthlyVideos * 3.5);
    const estimatedDMs = Math.round(targetViews * 0.008); // 0.8% comment/DM trigger rate
    const estimatedConversions = Math.round(estimatedDMs * 0.18); // 18% DM to order conversion rate

    return {
      monthlyVideos,
      traditionalMonthlyCost,
      traditionalAnnualCost,
      hoursSavedPerMonth,
      estimatedDMs,
      estimatedConversions
    };
  }, [avatarCount, targetViews, humanCreatorCost]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(val);
  };

  const formatNumber = (val: number) => {
    return new Intl.NumberFormat('en-US').format(val);
  };

  return (
    <motion.section
      id="roi-calculator"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative py-20 lg:py-28 bg-white border-b border-slate-200 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider font-mono shadow-2xs">
            <Calculator className="w-3.5 h-3.5" />
            <span>VIDEO PRODUCTION SAVINGS & PERFORMANCE CALCULATOR</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Calculate your organic video{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-sky-600 to-indigo-600">
              cost & output advantage
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Compare the cost of hiring human creators for 60-180 videos/month vs our turnkey AI Avatar Fleet with real-device cellular publishing.
          </p>
        </div>

        {/* Interactive Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-slate-50/80 border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700">
                Your Growth Objectives
              </span>
              <span className="text-xs font-mono text-slate-500 font-semibold">Interactive Model</span>
            </div>

            {/* Slider 1: Avatar Count */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                  <Bot className="w-4 h-4 text-indigo-600" />
                  <span>Active AI Avatars Deployed</span>
                </label>
                <span className="text-base font-mono font-bold text-slate-900 bg-white px-3 py-1 rounded-xl border border-slate-200 shadow-2xs">
                  {avatarCount} {avatarCount === 1 ? 'Avatar (60 vids/mo)' : 'Avatars (' + (avatarCount * 60) + ' vids/mo)'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="8"
                step="1"
                value={avatarCount}
                onChange={(e) => setAvatarCount(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500 font-medium">
                <span>1 Avatar (60 vids)</span>
                <span>3 Avatars (180 vids)</span>
                <span>8 Avatars (480 vids)</span>
              </div>
            </div>

            {/* Slider 2: Target Monthly Views */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                  <Eye className="w-4 h-4 text-sky-600" />
                  <span>Target Monthly Organic Views</span>
                </label>
                <span className="text-base font-mono font-bold text-slate-900 bg-white px-3 py-1 rounded-xl border border-slate-200 shadow-2xs">
                  {formatNumber(targetViews)} views/mo
                </span>
              </div>
              <input
                type="range"
                min="50000"
                max="2000000"
                step="25000"
                value={targetViews}
                onChange={(e) => setTargetViews(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500 font-medium">
                <span>50k views</span>
                <span>500k views</span>
                <span>2M+ views</span>
              </div>
            </div>

            {/* Slider 3: Human Creator Rate */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-emerald-600" />
                  <span>Standard Human Creator Fee / Video</span>
                </label>
                <span className="text-base font-mono font-bold text-slate-900 bg-white px-3 py-1 rounded-xl border border-slate-200 shadow-2xs">
                  ${humanCreatorCost} / video
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="800"
                step="25"
                value={humanCreatorCost}
                onChange={(e) => setHumanCreatorCost(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500 font-medium">
                <span>$100 (Micro UGC)</span>
                <span>$350 (Mid-tier)</span>
                <span>$800 (Established)</span>
              </div>
            </div>

            {/* Quick Presets */}
            <div className="pt-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Quick Industry Presets:
              </span>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => { setAvatarCount(1); setTargetViews(150000); setHumanCreatorCost(250); }}
                  className="p-2 rounded-xl bg-white border border-slate-200 hover:border-indigo-300 hover:text-indigo-700 text-[11px] font-semibold text-slate-700 text-center transition-colors cursor-pointer shadow-2xs"
                >
                  D2C Brand
                </button>
                <button
                  type="button"
                  onClick={() => { setAvatarCount(3); setTargetViews(600000); setHumanCreatorCost(400); }}
                  className="p-2 rounded-xl bg-white border border-slate-200 hover:border-indigo-300 hover:text-indigo-700 text-[11px] font-semibold text-slate-700 text-center transition-colors cursor-pointer shadow-2xs"
                >
                  FinTech / Web3
                </button>
                <button
                  type="button"
                  onClick={() => { setAvatarCount(6); setTargetViews(1500000); setHumanCreatorCost(550); }}
                  className="p-2 rounded-xl bg-white border border-slate-200 hover:border-indigo-300 hover:text-indigo-700 text-[11px] font-semibold text-slate-700 text-center transition-colors cursor-pointer shadow-2xs"
                >
                  Global Brand
                </button>
              </div>
            </div>
          </div>

          {/* Results Output Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Primary Impact Card */}
            <div className="rounded-3xl bg-white border border-indigo-200 p-6 sm:p-8 shadow-md space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />

              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Equivalent Traditional Creator Budget Saved
                </span>
                <span className="text-xs font-mono text-slate-500 font-medium">
                  {calculations.monthlyVideos} Unique 4K Videos / Month
                </span>
              </div>

              {/* Big Savings Metric */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1 font-semibold">
                    Equivalent Traditional Studio Cost
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-emerald-700 font-mono tracking-tight">
                    {formatCurrency(calculations.traditionalAnnualCost)}
                  </div>
                  <div className="text-xs text-slate-500 mt-1 font-mono font-medium">
                    {formatCurrency(calculations.traditionalMonthlyCost)} / month in human creator fees avoided
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1 font-semibold">
                    Filming & Logistics Time Saved
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono tracking-tight">
                    {formatNumber(calculations.hoursSavedPerMonth)}{' '}
                    <span className="text-base text-indigo-700 font-normal">hrs/mo</span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1 font-mono flex items-center gap-1 font-medium">
                    <Zap className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Zero product shipping, contracts, or reshoots</span>
                  </div>
                </div>
              </div>

              {/* Breakdown by Funnel Area */}
              <div className="pt-2 space-y-3">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                  Projected Organic Inbound Funnel Lift:
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                    <div className="text-slate-500 font-mono font-medium">Automated DM Leads</div>
                    <div className="text-base font-bold font-mono text-slate-900">
                      ~{formatNumber(calculations.estimatedDMs)} leads/mo
                    </div>
                    <div className="text-[11px] text-slate-500">Keyword-triggered links</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                    <div className="text-slate-500 font-mono font-medium">Attributed Orders</div>
                    <div className="text-base font-bold font-mono text-slate-900">
                      ~{formatNumber(calculations.estimatedConversions)} sales/mo
                    </div>
                    <div className="text-[11px] text-slate-500">Direct tracked conversions</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                    <div className="text-slate-500 font-mono font-medium">Pricing Model</div>
                    <div className="text-base font-bold font-mono text-emerald-700">
                      Performance CAC
                    </div>
                    <div className="text-[11px] text-slate-500">We earn when you earn</div>
                  </div>
                </div>
              </div>

              {/* Conversion CTA */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-600">
                  <span className="font-bold text-slate-900">Ready to deploy your AI Influencer fleet?</span> Apply for pilot onboarding.
                </div>
                <a
                  href="#waitlist"
                  onClick={onJoinClick}
                  className="animate-shimmer cta-pulse-glow w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 hover:from-indigo-500 hover:to-indigo-700 text-white font-extrabold text-sm shadow-md shadow-indigo-600/25 transition-all shrink-0 group cursor-pointer"
                >
                  <span>Apply for Avatar Pilot</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
