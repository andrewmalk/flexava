import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  Video, 
  Eye, 
  Smartphone, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  TrendingUp, 
  Radio, 
  CheckCircle2, 
  ArrowUpRight,
  RefreshCw,
  Pause,
  Play
} from 'lucide-react';
import { motion } from 'motion/react';

interface ActivityEvent {
  id: string;
  time: string;
  type: 'render' | 'upload' | 'approval' | 'conversion';
  title: string;
  avatar: string;
  platform: string;
  status: string;
}

export const LiveTrackerSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [videosRendered, setVideosRendered] = useState(14820);
  const [organicViews, setOrganicViews] = useState(35849100);
  const [activeFarmDevices, setActiveFarmDevices] = useState(142);
  const [hoursSaved, setHoursSaved] = useState(48920);
  const [activeNetworkLoad, setActiveNetworkLoad] = useState(96.4);

  const [recentEvents, setRecentEvents] = useState<ActivityEvent[]>([
    {
      id: 'evt-1',
      time: 'Just now',
      type: 'upload',
      title: 'Short #42: "3 rules for 5.2% real yield"',
      avatar: '@hackonomics.ai',
      platform: 'TikTok US (e-SIM)',
      status: 'Published Organically'
    },
    {
      id: 'evt-2',
      time: '6s ago',
      type: 'approval',
      title: 'Batch of 15 weekly fashion scripts',
      avatar: '@zaraazuevvaa',
      platform: 'Telegram Escrow',
      status: 'Approved with 1-Click'
    },
    {
      id: 'evt-3',
      time: '12s ago',
      type: 'render',
      title: '4K LipSync & Subtitle Motion Render',
      avatar: '@drcintas',
      platform: 'Studio Engine',
      status: 'Passed Frame-by-Frame QA'
    },
    {
      id: 'evt-4',
      time: '18s ago',
      type: 'conversion',
      title: 'Keyword DM Trigger: "CHECKLIST" sent',
      avatar: '@kathrynjcross',
      platform: 'Instagram DM',
      status: 'Lead Synced to CRM'
    }
  ]);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      const vidDelta = Math.floor(Math.random() * 2) + 1;
      const viewDelta = Math.floor(Math.random() * 45) + 15;
      const hourDelta = Math.random() > 0.7 ? 1 : 0;

      setVideosRendered(prev => prev + vidDelta);
      setOrganicViews(prev => prev + viewDelta);
      if (hourDelta > 0) setHoursSaved(prev => prev + hourDelta);

      setActiveNetworkLoad(+(95 + Math.random() * 3).toFixed(1));

      if (Math.random() > 0.4) {
        const mockNewEvents: ActivityEvent[] = [
          {
            id: `evt-${Date.now()}-1`,
            time: 'Just now',
            type: 'upload',
            title: `4K Reel Published to Instagram`,
            avatar: '@sigma.auto',
            platform: 'Physical iPhone 15 (e-SIM)',
            status: 'Native Upload Verified'
          },
          {
            id: `evt-${Date.now()}-2`,
            time: 'Just now',
            type: 'approval',
            title: `Weekly Trend Hook Approved`,
            avatar: '@adam.datadriven',
            platform: 'Slack Portal',
            status: 'Production Queued'
          },
          {
            id: `evt-${Date.now()}-3`,
            time: 'Just now',
            type: 'render',
            title: 'Multilingual Spanish Dub Rendered',
            avatar: '@hackonomics.ai',
            platform: 'ElevenLabs Voice AI',
            status: '0.1ms Lip Phoneme Match'
          },
          {
            id: `evt-${Date.now()}-4`,
            time: 'Just now',
            type: 'conversion',
            title: 'TikTok Shop Product Link Clicked (+410)',
            avatar: '@zaraazuevvaa',
            platform: 'Shopify Attribution',
            status: 'Attributable Sale Logged'
          }
        ];

        const picked = mockNewEvents[Math.floor(Math.random() * mockNewEvents.length)];
        setRecentEvents(prev => [picked, ...prev.slice(0, 3)]);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <motion.section
      id="live-performance"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative py-16 lg:py-20 bg-slate-50/70 border-b border-slate-200 overflow-hidden"
    >
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[350px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold font-mono tracking-wider shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>LIVE FLEET & DEVICE TELEMETRY</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Real-time production and publishing telemetry
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
              Live stream from active AI influencer accounts, video synthesis nodes, and our physical hardware mobile device farm.
            </p>
          </div>

          {/* Stream Controls */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:border-slate-300 text-xs font-mono font-semibold text-slate-700 shadow-2xs transition-colors cursor-pointer"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-amber-600" />
                  <span>Pause Stream</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Resume Stream</span>
                </>
              )}
            </button>
            <div className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-mono text-slate-600 flex items-center gap-2 shadow-2xs">
              <Activity className="w-3.5 h-3.5 text-indigo-600" />
              <span>Farm Health: <strong className="text-emerald-600 font-bold">{activeNetworkLoad}%</strong></span>
            </div>
          </div>
        </div>

        {/* Dynamic Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {/* Stat 1 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all duration-300 relative overflow-hidden group shadow-sm">
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-xl pointer-events-none" />
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                4K Videos Rendered
              </span>
              <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-2xs">
                <Video className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono tracking-tight flex items-baseline gap-2">
              <span>{formatNumber(videosRendered)}</span>
              <span className="text-xs font-mono text-emerald-600 font-semibold flex items-center">
                <TrendingUp className="w-3 h-3 mr-0.5" />+60/mo
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-2 font-medium">
              Frame-by-frame human QA & lip sync verified
            </p>
          </div>

          {/* Stat 2 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all duration-300 relative overflow-hidden group shadow-sm">
            <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/5 rounded-full blur-xl pointer-events-none" />
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                Total Organic Views
              </span>
              <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shadow-2xs">
                <Eye className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono tracking-tight flex items-baseline gap-2">
              <span>{formatNumber(organicViews)}</span>
              <span className="text-xs font-mono text-emerald-600 font-semibold flex items-center">
                <TrendingUp className="w-3 h-3 mr-0.5" />Live
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-2 font-medium">
              Across TikTok, Instagram Reels & YouTube Shorts
            </p>
          </div>

          {/* Stat 3 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all duration-300 relative overflow-hidden group shadow-sm">
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full blur-xl pointer-events-none" />
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                Real Farm Devices
              </span>
              <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shadow-2xs">
                <Smartphone className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono tracking-tight flex items-baseline gap-2">
              <span>{activeFarmDevices}</span>
              <span className="text-xs font-mono text-indigo-600 font-semibold">
                e-SIMs
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-2 font-medium">
              Physical smartphones with 0 shadowban flags
            </p>
          </div>

          {/* Stat 4 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all duration-300 relative overflow-hidden group shadow-sm">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl pointer-events-none" />
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                Production Hours Saved
              </span>
              <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-2xs">
                <Clock className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono tracking-tight flex items-baseline gap-2">
              <span>{formatNumber(hoursSaved)}</span>
              <span className="text-xs font-mono text-emerald-600 font-semibold">
                hrs
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-2 font-medium">
              Zero filming, set bookings, or studio fees
            </p>
          </div>
        </div>

        {/* Live Execution Stream Box */}
        <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-900 font-mono uppercase tracking-wider">
                Live Publishing & QA Stream
              </span>
              <span className="text-xs text-slate-500 hidden sm:inline-block">
                • Real-Device Farm Execution Feed
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-600">
              <ShieldCheck className="w-4 h-4 text-indigo-600" />
              <span>Human Escrow Sign-off: <span className="text-emerald-600 font-bold">100% Active</span></span>
            </div>
          </div>

          {/* Stream Item List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 pt-4">
            {recentEvents.map((evt) => (
              <div
                key={evt.id}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-indigo-300 hover:bg-white hover:shadow-2xs transition-all flex flex-col justify-between gap-2.5 text-xs animate-in fade-in slide-in-from-bottom-2 duration-300"
              >
                <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span className="px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-100 font-bold">
                    {evt.avatar}
                  </span>
                  <span>{evt.time}</span>
                </div>

                <div className="font-bold text-slate-900 line-clamp-1">
                  {evt.title}
                </div>

                <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1 border-t border-slate-200/80">
                  <span className="truncate max-w-[120px] font-medium text-slate-700">{evt.platform}</span>
                  <span className="font-mono text-emerald-600 font-semibold flex items-center gap-1 shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    {evt.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
