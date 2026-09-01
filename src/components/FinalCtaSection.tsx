import React from 'react';
import { ArrowRight, Zap, Bot, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface FinalCtaSectionProps {
  onJoinClick?: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onJoinClick }) => {
  return (
    <motion.section
      id="final-cta"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative py-24 lg:py-32 overflow-hidden bg-slate-100/70 border-t border-slate-200"
    >
      {/* Dynamic ambient radial lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-indigo-200 p-8 sm:p-14 lg:p-16 text-center space-y-8 shadow-xl relative overflow-hidden">
          {/* Top highlight line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-sky-500 to-indigo-600" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs sm:text-sm font-bold uppercase tracking-wider font-mono shadow-2xs">
            <Zap className="w-4 h-4 text-indigo-600" />
            <span>Launch Your Turnkey Influencer Network</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            60 Unique 4K Videos / Month.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-600 to-indigo-800">
              Zero Filming. Real Devices.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Own 100% of your audience, avatars, and media assets under a performance CAC split model. We earn when you generate qualified revenue.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              id="final-waitlist-btn"
              href="#waitlist"
              onClick={onJoinClick}
              className="animate-shimmer cta-pulse-glow w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 hover:from-indigo-500 hover:to-indigo-700 active:scale-98 text-white font-black text-base sm:text-lg shadow-2xl shadow-indigo-600/30 transition-all group cursor-pointer"
            >
              <span>Apply for Founding Avatar Pilot</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </a>
          </div>

          <p className="text-xs sm:text-sm text-slate-500 italic font-medium">
            *Pilot onboarding strictly limited to 10 brand slots per cohort to guarantee hardware node allocation.*
          </p>
        </div>
      </div>
    </motion.section>
  );
};
