import React from 'react';
import { OPERATING_STATS } from '../data/landingData';
import { Eye, Video, Layers, Smartphone, TrendingDown, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const iconMap = {
  Eye,
  Video,
  Layers,
  Smartphone,
  TrendingDown
};

export const OperatingProofSection: React.FC = () => {
  return (
    <motion.section
      id="proof"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative py-16 bg-white/85 backdrop-blur-xs border-y border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold font-mono tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>PROVEN AI INFLUENCER TRACK RECORD</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Battle-tested organic reach and measurable revenue.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Our AI influencers generate millions of monthly views and compound audience equity across top platforms.
          </p>
        </div>

        {/* 5 High-Impact Stat Blocks with Stagger */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6"
        >
          {OPERATING_STATS.map((item, idx) => {
            const IconComponent = (iconMap as any)[item.icon] || Eye;
            return (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] } },
                }}
                className="relative group p-5 sm:p-6 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-indigo-300 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 transition-transform shadow-2xs">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-mono">
                    {item.metric}
                  </div>
                  <div className="text-sm font-bold text-indigo-950 mt-1">
                    {item.label}
                  </div>
                  <div className="text-xs text-slate-500 mt-1.5 leading-relaxed hidden sm:block">
                    {item.sublabel}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

