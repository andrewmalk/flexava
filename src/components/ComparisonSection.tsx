import React from 'react';
import { 
  Check, 
  X, 
  Sparkles, 
  ShieldAlert, 
  ShieldCheck, 
  Zap, 
  Users, 
  Bot, 
  DollarSign, 
  Smartphone, 
  Clock, 
  Globe, 
  ArrowRight,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { motion } from 'motion/react';

interface ComparisonSectionProps {
  onJoinClick?: () => void;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({ onJoinClick }) => {
  const comparisonItems = [
    {
      metric: 'Content Velocity',
      traditional: '1–2 posts / campaign (sporadic)',
      traditionalBad: true,
      flexmerch: '60 4K videos / mo = 180 cross-platform posts',
      highlight: true
    },
    {
      metric: 'Asset & IP Ownership',
      traditional: 'Creator owns 100% of the channel & audience',
      traditionalBad: true,
      flexmerch: 'Your brand owns 100% of the avatar, channel & IP',
      highlight: true
    },
    {
      metric: 'Message & Script Control',
      traditional: 'Vague briefs, missed talking points, risky remarks',
      traditionalBad: true,
      flexmerch: '100% Client Pre-Approval on every script & hook',
      highlight: false
    },
    {
      metric: 'Availability & Reliability',
      traditional: 'Subject to sickness, drama, travel & ghosting',
      traditionalBad: true,
      flexmerch: '24/7 autonomous production — never sleeps',
      highlight: false
    },
    {
      metric: 'Pricing Model',
      traditional: '$5k–$25k+ per video with zero ROI guarantee',
      traditionalBad: true,
      flexmerch: 'Performance CAC-split model — zero upfront risk',
      highlight: true
    },
    {
      metric: 'Anti-Ban Infrastructure',
      traditional: 'API browser bots or manual creator phones',
      traditionalBad: true,
      flexmerch: 'Real iPhone farm with dedicated carrier e-SIMs',
      highlight: true
    }
  ];

  return (
    <motion.section
      id="comparison"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative py-16 lg:py-24 bg-slate-50/70 border-t border-slate-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider font-mono shadow-2xs">
            <Zap className="w-3.5 h-3.5" />
            <span>SIDE-BY-SIDE COMPARISON</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Traditional Creators vs.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-600 to-indigo-700">
              Flexmerch AI Avatars
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Why leading brands are switching from unpredictable human influencers to brand-owned AI creator networks.
          </p>
        </div>

        {/* Infographic Comparison Table */}
        <div className="rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden mb-10">
          <div className="grid grid-cols-12 bg-slate-100/90 border-b border-slate-200 p-4 sm:p-5 text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
            <div className="col-span-12 sm:col-span-4">Operational Dimension</div>
            <div className="hidden sm:block sm:col-span-4 text-rose-700">Traditional Human Creators</div>
            <div className="hidden sm:block sm:col-span-4 text-indigo-700">Flexmerch AI Influencers</div>
          </div>

          <div className="divide-y divide-slate-100">
            {comparisonItems.map((item, idx) => (
              <div 
                key={idx}
                className={`grid grid-cols-12 p-4 sm:p-5 items-center gap-4 transition-colors ${
                  item.highlight ? 'bg-indigo-50/25' : 'hover:bg-slate-50/80'
                }`}
              >
                {/* Dimension title */}
                <div className="col-span-12 sm:col-span-4 font-bold text-sm text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 shrink-0" />
                  <span>{item.metric}</span>
                </div>

                {/* Traditional Human */}
                <div className="col-span-12 sm:col-span-4 flex items-start gap-2 text-xs sm:text-sm text-slate-600 bg-rose-50/50 sm:bg-transparent p-2.5 sm:p-0 rounded-xl sm:rounded-none border border-rose-100 sm:border-0">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{item.traditional}</span>
                </div>

                {/* Flexmerch AI */}
                <div className="col-span-12 sm:col-span-4 flex items-start gap-2 text-xs sm:text-sm font-semibold text-indigo-950 bg-indigo-50/70 sm:bg-transparent p-2.5 sm:p-0 rounded-xl sm:rounded-none border border-indigo-100 sm:border-0">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item.flexmerch}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Fast Action Callout */}
        <div className="text-center">
          <a
            href="#waitlist"
            onClick={onJoinClick}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 transition-all cursor-pointer group"
          >
            <span>Switch to Brand-Owned AI Avatars</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </motion.section>
  );
};
