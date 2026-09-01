import React from 'react';
import { ArrowRight, Flame } from 'lucide-react';

interface AnnouncementBarProps {
  onJoinClick?: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onJoinClick }) => {
  return (
    <aside
      id="announcement-bar"
      aria-label="Private beta announcement"
      className="relative z-50 bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-900 border-b border-indigo-500/30 text-xs sm:text-sm py-2.5 px-4 text-white shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <div className="inline-flex items-center gap-1.5 font-bold text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded-full border border-amber-400/40 font-mono text-[11px]">
            <Flame className="w-3 h-3 text-amber-400 animate-pulse" />
            <span>PILOT COHORT ACTIVE</span>
          </div>
          <span className="text-slate-200 font-medium hidden md:inline">
            Launch your custom AI Influencer fleet with zero upfront risk • Performance CAC-split model.
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono text-indigo-200 hidden sm:inline">
            <strong className="text-white font-bold">8 / 25</strong> pilot spots left
          </span>
          <a
            id="announcement-cta"
            href="#waitlist"
            onClick={onJoinClick}
            className="inline-flex items-center gap-1.5 font-bold text-xs px-3 py-1 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white shadow-md shadow-indigo-500/30 transition-all hover:scale-105 group cursor-pointer"
          >
            <span>Apply for Pilot</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </aside>
  );
};


