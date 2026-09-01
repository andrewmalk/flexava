import React, { useState } from 'react';
import { 
  TrendingUp, 
  Target, 
  Users, 
  Video, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  BarChart3, 
  MessageSquare,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'motion/react';

interface BenchmarksSectionProps {
  onJoinClick?: () => void;
}

export const BenchmarksSection: React.FC<BenchmarksSectionProps> = ({ onJoinClick }) => {
  const phases = [
    {
      period: 'Months 1–3',
      phaseName: 'Launch & Warmup',
      reach: '2M – 7M',
      followers: '9K – 45K',
      videoCount: '180 – 540 Posts',
      leads: '500 – 1.5K Leads',
      progressPercent: 30,
      badge: 'PHASE 01',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      keyWin: 'High-trust account warm-up & 0 shadowbans on TikTok, Reels & Shorts'
    },
    {
      period: 'Months 4–6',
      phaseName: 'Viral Scaling & DM Leads',
      reach: '3M – 11M',
      followers: '25K – 90K',
      videoCount: '360 – 1,080 Posts',
      leads: '2.5K – 8K Leads',
      progressPercent: 65,
      badge: 'PHASE 02',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      keyWin: 'Automated comment-to-DM funnels convert viewers directly into buyers'
    },
    {
      period: 'Months 7–12',
      phaseName: 'Category Domination',
      reach: '7M – 22M',
      followers: '55K – 180K+',
      videoCount: '720 – 2,160+ Posts',
      leads: '10K – 35K+ Leads',
      progressPercent: 100,
      badge: 'PHASE 03',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      keyWin: '$500k+ organic media asset owned 100% on your company balance sheet'
    }
  ];

  return (
    <motion.section
      id="benchmarks"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative py-16 lg:py-24 bg-white border-t border-slate-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider font-mono shadow-2xs">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>GROWTH TRAJECTORY BENCHMARKS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Predictable growth from{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-600 to-indigo-700">
              day 1 to category leadership
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Based on data from over 100+ deployed AI influencers and 12,000+ monthly published short-form videos.
          </p>
        </div>

        {/* 3 Visual Milestone Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {phases.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="rounded-3xl bg-slate-50/70 border border-slate-200 p-6 sm:p-7 flex flex-col justify-between space-y-6 hover:bg-white hover:border-indigo-300 hover:shadow-lg transition-all"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md border ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-500">
                    {item.period}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {item.phaseName}
                  </h3>
                </div>

                {/* Visual Metric Blocks */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                    <div className="text-xs font-semibold text-slate-500">Target Reach</div>
                    <div className="text-lg sm:text-xl font-extrabold text-indigo-900 font-mono mt-0.5">
                      {item.reach}
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                    <div className="text-xs font-semibold text-slate-500">Followers</div>
                    <div className="text-lg sm:text-xl font-extrabold text-slate-900 font-mono mt-0.5">
                      {item.followers}
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                    <div className="text-xs font-semibold text-slate-500">Content Volume</div>
                    <div className="text-sm font-bold text-slate-800 font-mono mt-0.5">
                      {item.videoCount}
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                    <div className="text-xs font-semibold text-slate-500">Lead Funnel</div>
                    <div className="text-sm font-bold text-emerald-700 font-mono mt-0.5">
                      {item.leads}
                    </div>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="space-y-1.5 pt-2">
                  <div className="flex justify-between text-[11px] font-mono text-slate-500">
                    <span>Scaling Maturity</span>
                    <span>{item.progressPercent}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-indigo-500 to-sky-500 rounded-full"
                      style={{ width: `${item.progressPercent}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Key Win Pill */}
              <div className="pt-4 border-t border-slate-200/80">
                <div className="flex items-start gap-2 text-xs text-slate-700 font-medium bg-white p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item.keyWin}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action button */}
        <div className="text-center">
          <a
            href="#waitlist"
            onClick={onJoinClick}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 transition-all cursor-pointer group"
          >
            <span>Start Month 1 Pilot — Zero Upfront Risk</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </motion.section>
  );
};
