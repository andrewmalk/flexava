import React from 'react';
import { FOUNDING_BENEFITS } from '../data/landingData';
import { CheckCircle2, ArrowRight, Star, Bot, Sparkles, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface FoundingProgramSectionProps {
  onJoinClick?: () => void;
}

export const FoundingProgramSection: React.FC<FoundingProgramSectionProps> = ({ onJoinClick }) => {
  return (
    <motion.section
      id="founding-program"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative py-20 lg:py-28 bg-slate-50/70 border-t border-slate-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-indigo-200 p-8 sm:p-12 shadow-md relative overflow-hidden">
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-8 relative z-10">
            {/* Header */}
            <div className="text-center sm:text-left space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider font-mono shadow-2xs">
                <Star className="w-3.5 h-3.5 fill-indigo-600 text-indigo-600" />
                <span>EXCLUSIVE FOUNDING PILOT COHORT</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Apply for the Founding AI Avatar Cohort (10 Brand Slots)
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                We are onboarding a select group of high-growth D2C brands, fintech protocols, and SaaS startups to deploy bespoke AI influencer fleets under our performance CAC model.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700">
                Founding Pilot Brands Receive:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {FOUNDING_BENEFITS.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-sm text-slate-800 shadow-2xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-semibold">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA & Subtext */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
              <a
                id="founding-waitlist-btn"
                href="#waitlist"
                onClick={onJoinClick}
                className="animate-shimmer cta-pulse-glow w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 hover:from-indigo-500 hover:to-indigo-700 text-white font-extrabold text-base shadow-lg shadow-indigo-600/25 transition-all group cursor-pointer"
              >
                <span>Apply for Pilot Cohort</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <p className="text-xs text-slate-500 italic text-center sm:text-right max-w-xs font-medium">
                *Pilot allocation is strictly capped to ensure 100% human editorial QA and carrier mobile node capacity.*
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
