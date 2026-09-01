import React from 'react';
import { 
  AlertTriangle, 
  DollarSign, 
  Clock, 
  ShieldAlert, 
  ZapOff, 
  XCircle,
  UserX,
  Smartphone,
  CheckCircle2,
  TrendingDown
} from 'lucide-react';
import { motion } from 'motion/react';

export const ProblemSection: React.FC = () => {
  const painPoints = [
    {
      title: 'Astronomical Pricing',
      badMetric: '$5k–$25k',
      badLabel: 'Per Sponsored Video',
      icon: DollarSign,
      problem: 'High creator fees drain marketing budgets with zero guaranteed conversions or retention.',
      fixPill: 'Flexmerch: 60 4K videos/mo on a CAC-split model'
    },
    {
      title: 'Unreliable & Slow',
      badMetric: '3–4 Weeks',
      badLabel: 'Average Turnaround',
      icon: Clock,
      problem: 'Human creators miss briefs, delay launches, and frequently ghost communication.',
      fixPill: 'Flexmerch: Daily posting, 24/7 autonomous output'
    },
    {
      title: 'Zero Brand IP Ownership',
      badMetric: '0% Equity',
      badLabel: 'Brand Balance Sheet Value',
      icon: ShieldAlert,
      problem: 'Creator owns the follower list and can switch to promoting your competitor next week.',
      fixPill: 'Flexmerch: You own 100% of the avatar, channel & data'
    },
    {
      title: 'Shadowban & Bot Risk',
      badMetric: '80% Risk',
      badLabel: 'API Auto-Posting Bans',
      icon: UserX,
      problem: 'Posting via generic bots or browser automation triggers strict platform shadowbans.',
      fixPill: 'Flexmerch: Physical iPhone farm with carrier e-SIMs'
    }
  ];

  return (
    <motion.section
      id="problem"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative py-16 lg:py-24 bg-slate-50/60 border-b border-slate-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold uppercase tracking-wider font-mono shadow-2xs">
            <ZapOff className="w-3.5 h-3.5 text-rose-600" />
            <span>THE PROBLEM WITH TRADITIONAL CREATORS</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why human creator marketing is{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-rose-500 to-amber-600">
              failing modern brands
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            High costs, slow delivery, zero audience ownership, and unpredictable creator behavior make scaling short-form video unsustainable.
          </p>
        </div>

        {/* 4 Clean Infographic Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {painPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between space-y-5 shadow-xs hover:border-rose-300 hover:shadow-md transition-all group"
              >
                <div className="space-y-4">
                  {/* Top Badge & Metric */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200">
                      <XCircle className="w-3.5 h-3.5 text-rose-500" />
                      Legacy Flaw
                    </span>
                  </div>

                  {/* Large Negative Metric Callout */}
                  <div>
                    <div className="text-3xl font-extrabold text-slate-900 font-mono tracking-tight">
                      {item.badMetric}
                    </div>
                    <div className="text-xs font-semibold text-rose-600 uppercase tracking-wide">
                      {item.badLabel}
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.problem}
                  </p>
                </div>

                {/* The Flexmerch Solution Pill */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="flex items-start gap-2 text-xs font-semibold text-indigo-900 bg-indigo-50/70 p-2.5 rounded-xl border border-indigo-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item.fixPill}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};
