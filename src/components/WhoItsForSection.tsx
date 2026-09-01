import React from 'react';
import { TARGET_PERSONAS } from '../data/landingData';
import { ShoppingBag, TrendingUp, Building2, UserCheck, Layers, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShoppingBag,
  TrendingUp,
  Building2,
  UserCheck,
  Layers,
  Sparkles
};

interface WhoItsForSectionProps {
  onJoinClick?: () => void;
}

export const WhoItsForSection: React.FC<WhoItsForSectionProps> = ({ onJoinClick }) => {
  return (
    <motion.section
      id="who-its-for"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative py-20 lg:py-28 bg-slate-50/70 border-t border-slate-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider font-mono shadow-2xs">
            <Layers className="w-3.5 h-3.5" />
            <span>TARGET VERTICALS & CLIENTS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Engineered for high-growth brands that need{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-600 to-indigo-700">
              unstoppable organic video
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Whether scaling physical consumer goods, crypto apps, or enterprise software, our AI influencer fleet compounds your reach 24/7.
          </p>
        </div>

        {/* 5 Persona Cards with Stagger */}
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {TARGET_PERSONAS.map((persona) => {
            const Icon = iconMap[persona.icon] || ShoppingBag;
            return (
              <motion.div
                key={persona.id}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] } },
                }}
                id={`persona-card-${persona.id}`}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between group shadow-2xs"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-5 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-2xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-indigo-700 transition-colors">
                    {persona.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {persona.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2 text-xs">
                  <div className="flex items-start gap-2 text-indigo-700 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span>{persona.keyBenefit}</span>
                  </div>
                  <div className="text-slate-500 font-mono text-[11px] pl-6 font-medium">
                    {persona.idealFor}
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* 6th Card: Join Beta Pilot */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] } },
            }}
            className="p-6 sm:p-7 rounded-2xl bg-indigo-50/70 border border-indigo-200 flex flex-col justify-between shadow-2xs"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-mono font-bold uppercase mb-4 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                <span>Zero-Upfront Pilot</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2.5">
                Ready to launch your custom AI Influencer?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Apply for our performance pilot. We deploy 60 4K videos/mo with real-device publishing and split the CAC savings.
              </p>
            </div>

            <div className="pt-6">
              <a
                href="#waitlist"
                onClick={onJoinClick}
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 transition-colors group cursor-pointer"
              >
                <span>Apply for Avatar Pilot</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
