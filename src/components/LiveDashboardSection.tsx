import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Eye, 
  Users, 
  Video, 
  DollarSign, 
  Smartphone, 
  Layers, 
  Share2, 
  Heart, 
  CheckCircle2, 
  Sparkles, 
  ArrowUpRight, 
  Activity, 
  Globe, 
  MousePointerClick 
} from 'lucide-react';
import { motion } from 'motion/react';

export const LiveDashboardSection: React.FC<{ onJoinClick?: () => void }> = ({ onJoinClick }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'videos' | 'conversions' | 'devices'>('overview');

  const liveStats = [
    { label: 'Total 30-Day Views', value: '4,842,190', change: '+28.4%', isPositive: true, icon: Eye },
    { label: 'Attributed Leads / DMs', value: '3,124', change: '+41.2%', isPositive: true, icon: MousePointerClick },
    { label: 'Avg 3s Hook Retention', value: '68.5%', change: '+12.1%', isPositive: true, icon: Activity },
    { label: 'Physical Devices Active', value: '8 Nodes', change: '100% Uptime', isPositive: true, icon: Smartphone }
  ];

  const topReels = [
    {
      title: '3 Wealth Secrets the Top 1% Use (Tokenized Yields)',
      platform: 'TikTok',
      views: '1.4M',
      retention: '72%',
      leads: '840 DMs',
      published: '2 days ago',
      status: 'Viral'
    },
    {
      title: 'Why AI will completely disrupt luxury fashion by 2027',
      platform: 'Instagram',
      views: '980K',
      retention: '66%',
      leads: '612 DMs',
      published: '4 days ago',
      status: 'Active'
    },
    {
      title: 'The exact sleep protocol Huberman won’t tell you',
      platform: 'YouTube Shorts',
      views: '1.2M',
      retention: '69%',
      leads: '780 DMs',
      published: '6 days ago',
      status: 'Viral'
    }
  ];

  return (
    <motion.section
      id="dashboard"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative py-20 lg:py-28 bg-white border-t border-slate-200 overflow-hidden"
    >
      {/* Dynamic Ambient Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider font-mono shadow-2xs">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>TRANSPARENT CLIENT DASHBOARD</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Live Multi-Platform{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-600 to-indigo-700">
              Analytics & Attribution
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Track every view, retention curve, comment keyword trigger, and customer conversion in real time with our proprietary client console.
          </p>
        </div>

        {/* Dashboard Frame Container */}
        <div className="rounded-3xl border border-slate-200 bg-slate-900 p-4 sm:p-8 lg:p-10 shadow-2xl text-slate-100 relative overflow-hidden">
          {/* Top Browser / Window Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="px-3 py-1 rounded-lg bg-slate-800 text-[11px] font-mono text-slate-400 border border-slate-700/60 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>dashboard.flexmerch.ai/brand-portal</span>
              </div>
            </div>

            {/* Navigation Tabs in Dashboard */}
            <div className="flex items-center gap-1 bg-slate-800/80 p-1 rounded-xl border border-slate-700 text-xs font-medium">
              <button
                type="button"
                onClick={() => setActiveTab('overview')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'overview' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Fleet Overview
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('videos')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'videos' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Top 4K Reels
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('devices')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'devices' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Hardware Nodes (e-SIM)
              </button>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-8">
            {liveStats.map((st, sIdx) => {
              const Icon = st.icon;
              return (
                <div key={sIdx} className="p-4 sm:p-5 rounded-2xl bg-slate-800/60 border border-slate-700/80 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span>{st.label}</span>
                    <Icon className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                    {st.value}
                  </div>
                  <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1 font-semibold">
                    <ArrowUpRight className="w-3 h-3" />
                    <span>{st.change} this month</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Tab Content */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Simulated Chart / Retention Graph */}
              <div className="lg:col-span-2 p-5 sm:p-6 rounded-2xl bg-slate-800/40 border border-slate-700/80 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white">Cumulative Audience Reach Growth</h4>
                    <p className="text-xs text-slate-400 font-mono">Organic trajectory across 3 platforms (Last 30 Days)</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-indigo-900/60 border border-indigo-500/40 text-indigo-300 text-xs font-mono font-bold">
                    +4.8M Views
                  </span>
                </div>

                {/* Visual Chart Bars */}
                <div className="h-44 flex items-end justify-between gap-2 pt-4 px-2">
                  {[24, 32, 28, 45, 52, 48, 65, 78, 72, 85, 92, 110, 105, 125, 140].map((val, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
                      <div 
                        className="w-full bg-gradient-to-t from-indigo-600 to-sky-400 rounded-t-md transition-all group-hover:brightness-125"
                        style={{ height: `${(val / 140) * 100}%` }}
                      />
                      <span className="text-[9px] font-mono text-slate-500 hidden sm:block">D{idx + 1}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800 font-mono">
                  <span>Day 1: 24k views</span>
                  <span className="text-emerald-400 font-bold">Day 30: 140k daily views</span>
                </div>
              </div>

              {/* Conversion Funnel Breakdown */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-800/40 border border-slate-700/80 space-y-4 flex flex-col justify-between">
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-white">DM Funnel Conversions</h4>
                  <p className="text-xs text-slate-400">Automated comment keyword lead capture</p>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="space-y-1">
                    <div className="flex justify-between text-slate-300">
                      <span>Comments with Keyword "ALPHA"</span>
                      <span className="text-indigo-400 font-bold">8,420</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-indigo-500 h-2 rounded-full w-full" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-slate-300">
                      <span>Automated Instant DM Sent</span>
                      <span className="text-sky-400 font-bold">8,420 (100%)</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-sky-500 h-2 rounded-full w-full" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-slate-300">
                      <span>Link Click / App Install / Lead</span>
                      <span className="text-emerald-400 font-bold">3,124 (37.1%)</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-emerald-500 h-2 rounded-full w-[37.1%]" />
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700 text-xs text-slate-300">
                  <span className="text-emerald-400 font-bold">Estimated Cost per Lead: $1.14</span> (vs $18.50 on Paid Meta Ads).
                </div>
              </div>
            </div>
          )}

          {activeTab === 'videos' && (
            <div className="space-y-3">
              <div className="grid grid-cols-12 text-xs font-mono font-bold text-slate-400 pb-2 border-b border-slate-800">
                <div className="col-span-5 sm:col-span-6">Video Hook & Title</div>
                <div className="col-span-2">Platform</div>
                <div className="col-span-2">Views</div>
                <div className="col-span-3 sm:col-span-2 text-right">Attributed Leads</div>
              </div>

              {topReels.map((reel, rIdx) => (
                <div key={rIdx} className="grid grid-cols-12 items-center p-3 rounded-xl bg-slate-800/40 border border-slate-700/60 text-xs text-slate-200">
                  <div className="col-span-5 sm:col-span-6 font-semibold truncate pr-2">
                    {reel.title}
                  </div>
                  <div className="col-span-2 text-indigo-300 font-mono font-medium">
                    {reel.platform}
                  </div>
                  <div className="col-span-2 font-mono font-bold text-white">
                    {reel.views}
                  </div>
                  <div className="col-span-3 sm:col-span-2 text-right font-mono text-emerald-400 font-bold">
                    {reel.leads}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'devices' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((node) => (
                <div key={node} className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/60 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-slate-400 font-bold">Node #{node} (iPhone 15 Pro)</span>
                    <span className="flex items-center gap-1 text-emerald-400 text-[10px] font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      ONLINE
                    </span>
                  </div>
                  <div className="text-xs text-slate-300 font-mono">
                    Carrier: T-Mobile US (e-SIM)
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Daily Schedule: 2 vids/day (TikTok, IG, YT)
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};
