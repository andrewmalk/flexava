import React from 'react';
import { ArrowRight, ChevronDown, Sparkles, Video, Smartphone, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { HeroControlCenter } from './HeroControlCenter';

interface HeroSectionProps {
  onJoinClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onJoinClick }) => {
  return (
    <section id="hero" className="relative pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-gradient-to-b from-indigo-50/40 via-transparent to-transparent">
      {/* Dynamic Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-b from-indigo-200/25 via-sky-100/20 to-transparent blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/4 left-8 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/4 right-8 w-80 h-80 bg-sky-200/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center max-w-4xl mx-auto space-y-6"
        >
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs sm:text-sm font-bold tracking-wide uppercase shadow-2xs"
          >
            <Sparkles className="w-4 h-4 text-indigo-600 animate-spin-slow" />
            <span>Turnkey AI Influencer Network for Brands & E-Commerce</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]"
          >
            Build and scale your fleet of{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-sky-600 bg-clip-text text-transparent">
              AI Influencers.
            </span>
          </motion.h1>

          {/* Visual Infographic Feature Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-wrap items-center justify-center gap-2.5 pt-1 max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs font-semibold text-slate-800">
              <Video className="w-4 h-4 text-indigo-600" />
              <span>60 Unique 4K Videos / Mo</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs font-semibold text-slate-800">
              <Smartphone className="w-4 h-4 text-sky-600" />
              <span>Real-Device Farm (0 Shadowbans)</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs font-semibold text-slate-800">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>1-Click Approval Gateway</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs font-semibold text-slate-800">
              <TrendingUp className="w-4 h-4 text-amber-500" />
              <span>Performance CAC-Split Model</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto"
          >
            Grow organic reach, build audience trust, and generate continuous revenue 24/7 on TikTok, Instagram, and YouTube — without filming, creator drama, or studio burnout.
          </motion.p>

          {/* High-Impact Animated CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              id="hero-primary-cta"
              href="#waitlist"
              onClick={onJoinClick}
              className="animate-shimmer cta-pulse-glow w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 hover:from-indigo-500 hover:to-indigo-700 active:scale-95 text-white font-extrabold text-base shadow-xl shadow-indigo-600/30 transition-all group cursor-pointer"
            >
              <span>Launch Your First AI Avatar</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </a>

            <a
              id="hero-secondary-cta"
              href="#avatars"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 hover:text-slate-950 font-bold text-base shadow-2xs transition-all group cursor-pointer"
            >
              <Users className="w-4 h-4 text-indigo-600" />
              <span>Explore Live Avatar Fleet</span>
              <ChevronDown className="w-4 h-4 text-slate-500 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Live Proof Micro-Pill */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.48 }}
            className="pt-1 flex items-center justify-center gap-3 text-xs text-slate-500 font-mono"
          >
            <span className="flex items-center gap-1.5 text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Zero Upfront Pilot</span>
            </span>
            <span>•</span>
            <span>35M+ views generated</span>
            <span>•</span>
            <span>100% Brand-Owned IP</span>
          </motion.div>
        </motion.div>

        {/* Hero Visual Component */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <HeroControlCenter />
        </motion.div>
      </div>
    </section>
  );
};


