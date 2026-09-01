import React from 'react';
import { Award, CheckCircle2, ShieldCheck, Cpu, Smartphone, Video, TrendingUp, History, Globe2 } from 'lucide-react';
import { motion } from 'motion/react';

export const WhyUsSection: React.FC = () => {
  const credentials = [
    { text: 'Rendered & published over 120,000+ AI short-form videos', icon: Video },
    { text: 'Engineered a physical hardware farm of 500+ cellular mobile nodes', icon: Smartphone },
    { text: '0 shadowbans or account flags across 18 months of continuous publishing', icon: ShieldCheck },
    { text: 'Proprietary phoneme lip-sync & sub-pixel neural facial synthesis pipeline', icon: Cpu },
    { text: 'Delivered 250M+ combined organic views across TikTok, IG, & YouTube', icon: TrendingUp },
    { text: 'Multilingual neural voice cloning across 12+ international languages', icon: Globe2 },
    { text: '100% brand-owned intellectual property and model identity escrow', icon: Award },
    { text: 'Performance-aligned pricing model: We earn when you generate qualified revenue', icon: CheckCircle2 }
  ];

  return (
    <motion.section
      id="why-us"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative py-20 lg:py-28 bg-slate-50/70 border-t border-slate-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider font-mono shadow-2xs">
              <Award className="w-3.5 h-3.5" />
              <span>THE ENGINEERING PEDIGREE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Why Flexmerch AI Avatars
            </h2>

            <p className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-600 to-indigo-700">
              Not a prompt generator. A full-stack AI media operation.
            </p>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Most AI video tools just hand you raw MP4 files and leave you to manually upload them on your phone. Flexmerch runs the entire pipeline: from viral hooks and human QA to physical real-device cellular publishing and automated DM conversions.
            </p>
          </div>

          {/* Credentials Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {credentials.map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] } },
                }}
                className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 flex items-center gap-3.5 group hover:border-indigo-300 hover:shadow-2xs transition-all shadow-2xs"
              >
                <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0 group-hover:scale-105 transition-transform shadow-2xs">
                  <item.icon className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-slate-800 group-hover:text-indigo-900 transition-colors">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Summary Quote Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-indigo-200 text-center space-y-3 shadow-sm">
            <p className="text-base sm:text-lg font-medium text-slate-700 italic">
              "We solved the hardest bottleneck in short-form video: consistent 4K volume combined with algorithm-safe real-device publishing."
            </p>
            <p className="text-sm sm:text-base text-indigo-700 font-bold">
              Now your brand can build a compounding organic media asset with zero filming time.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
