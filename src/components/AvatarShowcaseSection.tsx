import React, { useState } from 'react';
import { 
  Users, 
  Play, 
  Pause,
  Eye, 
  Heart, 
  Share2, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Volume2, 
  Languages, 
  Smartphone,
  ExternalLink,
  ChevronRight,
  Filter
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AVATAR_FLEET } from '../data/landingData';
import { AvatarProfile } from '../types';

interface AvatarShowcaseSectionProps {
  onJoinClick?: () => void;
}

export const AvatarShowcaseSection: React.FC<AvatarShowcaseSectionProps> = ({ onJoinClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalAvatar, setActiveModalAvatar] = useState<AvatarProfile | null>(null);
  const [isPlayingPreview, setIsPlayingPreview] = useState<boolean>(true);

  const categories = [
    { id: 'all', label: 'All Avatars' },
    { id: 'fintech', label: 'FinTech & Crypto' },
    { id: 'tech', label: 'Tech & Science' },
    { id: 'fashion', label: 'Luxury & D2C' },
    { id: 'health', label: 'Health & Biohacking' },
    { id: 'b2b', label: 'B2B SaaS' },
    { id: 'lifestyle', label: 'Auto & Lifestyle' }
  ];

  const filteredAvatars = selectedCategory === 'all'
    ? AVATAR_FLEET
    : AVATAR_FLEET.filter(a => a.category === selectedCategory);

  return (
    <section id="avatars" className="relative py-20 bg-slate-50/50 border-b border-slate-200 overflow-hidden">
      {/* Soft Ambient Background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold font-mono tracking-wider shadow-2xs">
              <Users className="w-3.5 h-3.5 text-indigo-600" />
              <span>LIVE AI INFLUENCER FLEET</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Real AI Avatars. Real Audiences. 24/7 Revenue.
            </h2>
            <p className="text-base text-slate-600">
              Explore our active roster of custom AI influencers currently generating organic reach and converting customers on TikTok, Instagram, and YouTube.
            </p>
          </div>

          {/* Quick Stat Pill */}
          <div className="flex items-center gap-3 bg-white p-3 rounded-2xl border border-slate-200 shadow-2xs self-start md:self-auto font-mono text-xs text-slate-700">
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              35M+
            </div>
            <div>
              <span className="font-bold text-slate-900 block">Total Organic Views</span>
              <span className="text-slate-500 text-[11px]">Across active pilot avatars</span>
            </div>
          </div>
        </div>

        {/* Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                  : 'bg-white hover:bg-slate-100 border border-slate-200 text-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Avatar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAvatars.map((avatar) => (
            <motion.div
              key={avatar.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="group bg-white rounded-3xl border border-slate-200/90 overflow-hidden hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col justify-between shadow-sm"
            >
              <div>
                {/* Avatar Visual Banner & Media Preview */}
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <img
                    src={avatar.avatarImg}
                    alt={avatar.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                    <span className="px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      {avatar.monthlyVideos} vids/mo
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-indigo-600/90 text-white text-[11px] font-bold tracking-wide shadow-xs">
                      {avatar.views} Views
                    </span>
                  </div>

                  {/* Play Button Overlay */}
                  <button
                    onClick={() => setActiveModalAvatar(avatar)}
                    className="absolute inset-0 flex items-center justify-center group/btn cursor-pointer z-10"
                    aria-label={`Preview ${avatar.name} sample reel`}
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/90 backdrop-blur-md text-indigo-700 flex items-center justify-center shadow-lg group-hover/btn:scale-110 group-hover/btn:bg-white transition-transform">
                      <Play className="w-6 h-6 ml-1 fill-indigo-600 text-indigo-600" />
                    </div>
                  </button>

                  {/* Bottom Avatar Identity Overlay */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10 text-white">
                    <div className="flex items-center gap-2">
                      <h3 className="font-extrabold text-lg tracking-tight">{avatar.name}</h3>
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    </div>
                    <p className="text-xs font-mono text-indigo-300">{avatar.handle} • {avatar.niche}</p>
                  </div>
                </div>

                {/* Card Content & Features */}
                <div className="p-5 sm:p-6 space-y-4">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {avatar.bio}
                  </p>

                  {/* Sample Reel Hook Quote */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                    <span className="text-[10px] font-mono font-bold text-indigo-600 uppercase tracking-wider block">
                      Sample 3-Sec Retention Hook
                    </span>
                    <p className="text-xs font-bold text-slate-900 italic line-clamp-2">
                      {avatar.sampleReel.hook}
                    </p>
                  </div>

                  {/* Voice and Language Specifications */}
                  <div className="grid grid-cols-2 gap-2 pt-1 text-[11px] font-mono text-slate-600 border-t border-slate-100">
                    <div className="flex items-center gap-1.5 truncate">
                      <Volume2 className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                      <span className="truncate">{avatar.voiceName}</span>
                    </div>
                    <div className="flex items-center gap-1.5 truncate">
                      <Languages className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                      <span className="truncate">{avatar.languages.length} Languages</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="p-4 sm:p-5 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                  <span>Engagement: <strong className="text-emerald-700 font-bold">{avatar.engagement}</strong></span>
                </div>

                <button
                  onClick={() => setActiveModalAvatar(avatar)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-700 cursor-pointer group/link"
                >
                  <span>Watch Reel</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Fleet Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-indigo-900/20">
          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-300 font-bold bg-indigo-500/20 px-3 py-1 rounded-full border border-indigo-400/30">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>CUSTOM DIGITAL HUMAN CREATION</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              Need a custom avatar engineered specifically for your brand?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              We can synthesize a 100% unique digital influencer or clone your founder’s exact likeness and voice with legal IP escrow.
            </p>
          </div>

          <a
            href="#waitlist"
            onClick={onJoinClick}
            className="shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm shadow-md transition-all cursor-pointer active:scale-95"
          >
            <span>Commission Custom Avatar</span>
            <ArrowRight className="w-4 h-4 text-indigo-600" />
          </a>
        </div>
      </div>

      {/* Interactive Reel Preview Modal */}
      <AnimatePresence>
        {activeModalAvatar && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-2xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalAvatar(null)}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center cursor-pointer transition-colors"
              >
                ✕
              </button>

              {/* Video Simulated Header */}
              <div className="relative h-72 bg-slate-950">
                <img
                  src={activeModalAvatar.avatarImg}
                  alt={activeModalAvatar.name}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/50" />

                <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={activeModalAvatar.avatarImg}
                      alt={activeModalAvatar.name}
                      className="w-12 h-12 rounded-xl object-cover border-2 border-indigo-400"
                    />
                    <div>
                      <div className="font-extrabold text-base flex items-center gap-1.5">
                        <span>{activeModalAvatar.name}</span>
                        <CheckCircle2 className="w-4 h-4 text-sky-400" />
                      </div>
                      <p className="text-xs font-mono text-slate-300">{activeModalAvatar.handle}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-mono text-emerald-400 font-bold block">{activeModalAvatar.views}</span>
                    <span className="text-[10px] text-slate-400">Organic Views</span>
                  </div>
                </div>
              </div>

              {/* Modal Body & Script Playback */}
              <div className="p-6 space-y-4">
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-indigo-400 uppercase font-bold">
                    <span>Active 3-Second Hook</span>
                    <span className="text-slate-400">{activeModalAvatar.sampleReel.duration}</span>
                  </div>
                  <p className="text-base font-bold text-white italic">
                    {activeModalAvatar.sampleReel.hook}
                  </p>
                  <p className="text-xs text-slate-300 pt-1 leading-relaxed">
                    {activeModalAvatar.sampleReel.scriptExcerpt}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3 text-center text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50">
                    <span className="text-slate-400 text-[10px] block">Views</span>
                    <span className="font-bold text-white text-sm">{activeModalAvatar.sampleReel.viewsCount}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50">
                    <span className="text-slate-400 text-[10px] block">Likes</span>
                    <span className="font-bold text-rose-400 text-sm">{activeModalAvatar.sampleReel.likesCount}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50">
                    <span className="text-slate-400 text-[10px] block">Shares</span>
                    <span className="font-bold text-emerald-400 text-sm">{activeModalAvatar.sampleReel.sharesCount}</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <a
                    href="#waitlist"
                    onClick={() => {
                      setActiveModalAvatar(null);
                      if (onJoinClick) onJoinClick();
                    }}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm transition-colors cursor-pointer shadow-lg shadow-indigo-600/30"
                  >
                    <span>Launch Similar Avatar Pilot</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
