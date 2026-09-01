import React from 'react';
import { 
  Sparkles, 
  Video, 
  Smartphone, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Bot,
  Zap,
  Globe,
  Layers,
  FileCheck2
} from 'lucide-react';
import { motion } from 'motion/react';

interface SolutionSectionProps {
  onJoinClick?: () => void;
}

export const SolutionSection: React.FC<SolutionSectionProps> = ({ onJoinClick }) => {
  const pillars = [
    {
      step: '01',
      title: 'Neural Avatar & Voice Engine',
      metric: '4K Realism in 10+ Languages',
      icon: Bot,
      color: 'from-blue-600 to-indigo-600',
      badge: 'AVATAR SYNTHESIS',
      features: [
        'Photorealistic facial micro-expressions & eye contact',
        'Custom cloned voice or synthetic brand spokesperson',
        'Global multilingual scaling without re-filming'
      ],
      infographicTag: '100% Brand-Owned Asset'
    },
    {
      step: '02',
      title: '60 Viral 4K Videos / Month',
      metric: '180 Cross-Platform Posts',
      icon: Video,
      color: 'from-indigo-600 to-violet-600',
      badge: 'CONTENT VELOCITY',
      features: [
        'Data-backed viral hooks tailored to your ICP niche',
        '100% Client Pre-Approval via Telegram / Slack',
        'Dynamic B-roll, sound effects & kinetic captions'
      ],
      infographicTag: '2 Unique Videos / Day'
    },
    {
      step: '03',
      title: 'Real iPhone Farm (0 Shadowbans)',
      metric: 'Physical Hardware + e-SIMs',
      icon: Smartphone,
      color: 'from-sky-600 to-blue-600',
      badge: 'ANTI-BAN INFRASTRUCTURE',
      features: [
        'Published via physical iOS devices with carrier SIMs',
        'Zero API-level bot detection or shadowban risk',
        'Automated comment-to-DM keyword lead funnels'
      ],
      infographicTag: '100% Native App Compliance'
    },
    {
      step: '04',
      title: 'Performance CAC-Split Model',
      metric: '50/50 CAC Savings Split',
      icon: TrendingUp,
      color: 'from-emerald-600 to-teal-600',
      badge: 'ZERO UPFRONT RISK',
      features: [
        'Pay for attributable performance & customer leads',
        'No multi-thousand dollar upfront retainer fees',
        'Compounding channel equity on your balance sheet'
      ],
      infographicTag: 'Aligned Incentives'
    }
  ];

  return (
    <motion.section
      id="solution"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative py-16 lg:py-24 bg-white border-b border-slate-200 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider font-mono shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE 4-PILLAR AUTONOMOUS SOLUTION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            How Flexmerch powers your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-600 to-indigo-700">
              24/7 media engine
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Everything your brand needs to generate millions of organic short-form views without cameras, studios, or creator headaches.
          </p>
        </div>

        {/* 4 Pillar Infographic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="rounded-3xl bg-slate-50/70 border border-slate-200 p-6 sm:p-7 flex flex-col justify-between space-y-6 hover:bg-white hover:border-indigo-300 hover:shadow-lg transition-all group relative overflow-hidden"
              >
                {/* Accent Top Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-4">
                  {/* Step & Badge Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-indigo-600 px-2.5 py-1 rounded-md bg-indigo-50 border border-indigo-100">
                      {p.badge}
                    </span>
                    <span className="text-xl font-extrabold font-mono text-slate-300 group-hover:text-indigo-400 transition-colors">
                      {p.step}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="space-y-2">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-indigo-600 shadow-2xs group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {p.title}
                    </h3>
                    <div className="text-xs font-mono font-bold text-indigo-700">
                      {p.metric}
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2 pt-2 border-t border-slate-200/80">
                    {p.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Infographic Tag Card */}
                <div className="pt-4 border-t border-slate-200/60">
                  <div className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-center text-xs font-mono font-bold text-slate-800 shadow-2xs">
                    ⚡ {p.infographicTag}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Fast-Action Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-indigo-50/70 border border-indigo-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-2xs">
          <div className="space-y-0.5">
            <div className="text-sm font-bold text-slate-900">
              Want to see a custom AI avatar concept for your brand niche?
            </div>
            <div className="text-xs text-slate-600">
              We create a complimentary proof-of-concept avatar & 3 sample video hooks in 24 hours.
            </div>
          </div>
          <a
            href="#waitlist"
            onClick={onJoinClick}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-indigo-600/20 transition-all cursor-pointer group"
          >
            <span>Claim Free Avatar Proof</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </motion.section>
  );
};
