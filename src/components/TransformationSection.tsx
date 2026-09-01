import React from 'react';
import { TRANSFORMATION_POINTS } from '../data/landingData';
import { Zap, CheckCircle2, TrendingUp, XCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const TransformationSection: React.FC = () => {
  return (
    <motion.section
      id="transformation"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative py-20 lg:py-28 overflow-hidden bg-white border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider font-mono shadow-2xs">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>OPERATIONAL TRANSFORMATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            The mathematical shift in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-sky-600 to-indigo-600">
              organic video economics
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Compare traditional human influencer marketing against our turnkey AI Avatar network across 6 operational dimensions.
          </p>
        </div>

        {/* 6 Transformation Cards with Stagger */}
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TRANSFORMATION_POINTS.map((item, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] } },
              }}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-emerald-300 hover:bg-white hover:shadow-sm transition-all flex flex-col justify-between shadow-2xs"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider mb-2">
                  <Zap className="w-3.5 h-3.5" />
                  <span>0{idx + 1}. TRANSFORMATION</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2.5">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {item.description}
                </p>
              </div>

              {/* Before vs After Contrast */}
              <div className="pt-4 border-t border-slate-200/80 space-y-2 text-xs">
                <div className="p-2.5 rounded-xl bg-rose-50/80 border border-rose-200 flex items-start gap-2 text-slate-700">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>Human Creators:</strong> {item.before}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-2 text-emerald-900 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Flexmerch AI:</strong> {item.after}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
