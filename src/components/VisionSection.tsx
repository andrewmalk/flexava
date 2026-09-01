import React from 'react';
import { Telescope, Target } from 'lucide-react';
import { motion } from 'motion/react';

export const VisionSection: React.FC = () => {
  return (
    <motion.section
      id="vision"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative py-20 lg:py-28 overflow-hidden bg-white border-t border-slate-200"
    >
      {/* Visual Ambient Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider font-mono shadow-2xs">
            <Telescope className="w-3.5 h-3.5" />
            <span>THE LONG-TERM MEDIA VISION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            The future of brand distribution is{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-600 to-indigo-700">
              100% brand-owned media.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
            Brands will no longer rely on transient human creators with high churn and brand risk. Every winning company will operate an autonomous fleet of digital humans that speak directly to niche audiences worldwide.
          </p>

          {/* Mission Flagship Banner */}
          <div className="mt-8 p-8 sm:p-12 rounded-3xl bg-indigo-50/70 border border-indigo-200 shadow-sm relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-indigo-700">
                <Target className="w-4 h-4" />
                <span>Our Engineering Mission</span>
              </div>

              <h3 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Make it effortless for any brand to publish{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-600 to-indigo-800">
                  1,000 hyper-targeted 4K videos / month
                </span>{' '}
                with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-700">
                  zero creator overhead.
                </span>
              </h3>

              <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto pt-2 leading-relaxed font-medium">
                Flexmerch combines neural digital humans, human editor QA, and real-device cellular publishing into an unstoppable organic growth engine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
