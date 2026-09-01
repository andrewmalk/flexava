import React from 'react';
import { INTEGRATION_CATEGORIES } from '../data/landingData';
import { Video, Cpu, Smartphone, TrendingUp, MessageSquare, Code2, Globe2, Share2, Layers } from 'lucide-react';
import { motion } from 'motion/react';
import { GoogleSheetLiveViewer } from './GoogleSheetLiveViewer';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Video,
  Cpu,
  Smartphone,
  TrendingUp,
  MessageSquare,
  Code2
};

interface ArchitectureSectionProps {
  onOpenSyncModal?: () => void;
}

export const ArchitectureSection: React.FC<ArchitectureSectionProps> = ({ onOpenSyncModal }) => {
  return (
    <motion.section
      id="architecture"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative py-20 lg:py-28 overflow-hidden bg-white border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider font-mono shadow-2xs">
            <Layers className="w-3.5 h-3.5" />
            <span>AI INFLUENCER INFRASTRUCTURE STACK</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Integrated with the world’s leading{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-600 to-indigo-700">
              AI engines & social platforms
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We connect top-tier digital human rendering, neural voice models, physical hardware mobile farms, and direct commerce attribution into one seamless loop.
          </p>
        </div>

        {/* Integration Grid with Stagger */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.06,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
        >
          {INTEGRATION_CATEGORIES.map((cat, idx) => {
            const Icon = (iconMap as any)[cat.icon] || Cpu;
            return (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] } },
                }}
                className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-indigo-300 hover:bg-white hover:shadow-sm transition-all group flex flex-col justify-between shadow-2xs"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">
                      {cat.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {cat.items.map((item, iIdx) => (
                      <span
                        key={iIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white text-slate-700 border border-slate-200 shadow-2xs font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Live Google Sheet Real-Time Transparency Component */}
        <GoogleSheetLiveViewer onOpenSyncModal={onOpenSyncModal} />

        {/* Footnote callout */}
        <div className="mt-10 p-4 rounded-xl bg-slate-50 border border-slate-200 text-center max-w-2xl mx-auto shadow-2xs">
          <p className="text-xs sm:text-sm text-slate-500 italic">
            *All avatar channels, voice clones, and video assets are 100% legal intellectual property of your brand under exclusive escrow.*
          </p>
        </div>
      </div>
    </motion.section>
  );
};
