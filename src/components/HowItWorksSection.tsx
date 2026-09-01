import React, { useState } from 'react';
import { 
  Bot, 
  FileCheck2, 
  Video, 
  Smartphone, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Clock, 
  Sparkles,
  Zap
} from 'lucide-react';
import { motion } from 'motion/react';

interface HowItWorksSectionProps {
  onJoinClick?: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onJoinClick }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      step: '1',
      title: 'Brand Brief & Avatar Setup',
      timeline: 'Day 1 (24h Turnaround)',
      icon: Bot,
      summary: 'We build your custom AI avatar, voice profile, and visual persona tailored to your niche and audience.',
      action: 'You provide 15-min brand brief',
      deliverable: 'Custom AI Avatar demo + 3 sample hooks',
      points: [
        'Custom digital twin or synthetic brand influencer',
        'Target audience profiling & competitor angle research',
        'Voice cloning & multi-language dialect mapping'
      ]
    },
    {
      step: '2',
      title: 'Weekly 1-Click Script Approval',
      timeline: '5 min / week',
      icon: FileCheck2,
      summary: 'Our scriptwriters create 15 viral scripts per week. You approve or edit in seconds via Telegram or Slack.',
      action: '1-tap "Approve" in chat',
      deliverable: '15 ready-to-render viral video scripts',
      points: [
        'Data-backed viral hooks tailored to platform algorithms',
        'Direct CTA hooks & keyword triggers for DM funnels',
        'Zero off-brand messaging, 100% pre-approved'
      ]
    },
    {
      step: '3',
      title: '4K AI Render & Frame-by-Frame QA',
      timeline: 'Autonomous 48h Batch',
      icon: Video,
      summary: 'We render 4K video with photorealistic lip-sync, dynamic B-roll, kinetic subtitles, and sound design.',
      action: 'Zero effort from you',
      deliverable: '60 finished 4K vertical video files',
      points: [
        'Hyper-realistic lip-sync & natural facial movements',
        'Engaging sound effects, b-roll footage & trending audio',
        'Human editorial quality control on every video'
      ]
    },
    {
      step: '4',
      title: 'Real iPhone Multi-Posting',
      timeline: 'Daily (2 vids / day)',
      icon: Smartphone,
      summary: 'Videos are published automatically from physical iPhones with dedicated e-SIMs across TikTok, Reels & Shorts.',
      action: 'Track leads on live dashboard',
      deliverable: '180 monthly posts + automated DM leads',
      points: [
        '100% native mobile app uploads (0 shadowban risk)',
        'Automated comment keyword DM triggers for leads',
        'Live client dashboard tracking views, clicks & conversions'
      ]
    }
  ];

  return (
    <motion.section
      id="how-it-works"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative py-16 lg:py-24 overflow-hidden bg-slate-50/70 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider font-mono shadow-2xs">
            <Layers className="w-3.5 h-3.5" />
            <span>SIMPLE 4-STEP WORKFLOW</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            How it works:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-600 to-indigo-700">
              Only 5 minutes a week
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            From brief to 180 monthly short-form publications — we handle production, rendering, and real-device posting end-to-end.
          </p>
        </div>

        {/* Infographic Step Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            const isSelected = activeStep === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between space-y-5 relative ${
                  isSelected 
                    ? 'bg-white border-indigo-400 shadow-md ring-2 ring-indigo-500/20' 
                    : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white shadow-2xs'
                }`}
              >
                {/* Step number badge & icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center font-mono shadow-2xs">
                      {st.step}
                    </span>
                    <span className="text-xs font-mono font-bold text-indigo-700">
                      {st.timeline}
                    </span>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Title and summary */}
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {st.summary}
                  </p>
                </div>

                {/* Micro checklist */}
                <div className="pt-3 border-t border-slate-100 space-y-1.5">
                  {st.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-1.5 text-[11px] text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Deliverable Pill */}
                <div className="pt-2">
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-[11px] font-mono text-slate-800">
                    <span className="text-indigo-600 font-bold">Output: </span>
                    {st.deliverable}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Bar */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-base font-bold text-slate-900 flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Ready to put your content marketing on autopilot?</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              Zero upfront risk. Pilot cohort includes 1 to 3 custom avatars on a CAC-split basis.
            </p>
          </div>

          <a
            href="#waitlist"
            onClick={onJoinClick}
            className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 transition-all cursor-pointer group"
          >
            <span>Apply in 2 Minutes</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </motion.section>
  );
};
