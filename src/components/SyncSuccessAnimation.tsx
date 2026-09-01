import React from 'react';
import { motion } from 'motion/react';
import { FileSpreadsheet } from 'lucide-react';

interface SyncSuccessAnimationProps {
  message?: string;
  subtext?: string;
}

export const SyncSuccessAnimation: React.FC<SyncSuccessAnimationProps> = ({
  message = 'Google Sheet Synchronized!',
  subtext = 'All waitlist records are up to date'
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: -8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -6 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden p-4 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-teal-500/10 border border-emerald-500/30 shadow-sm flex items-center gap-4"
    >
      {/* Background ambient glow */}
      <motion.div 
        animate={{ 
          opacity: [0.2, 0.45, 0.2],
          scale: [0.95, 1.05, 0.95]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute -right-8 -bottom-8 w-32 h-32 bg-emerald-400/20 rounded-full blur-2xl pointer-events-none"
      />

      {/* Lottie-style Vector Micro-Animation */}
      <div className="relative shrink-0 w-12 h-12 flex items-center justify-center">
        {/* Ripple Shockwave Ring 1 */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0.8 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
          className="absolute inset-0 rounded-full border-2 border-emerald-400"
        />

        {/* Ripple Shockwave Ring 2 */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0.8 }}
          animate={{ scale: 1.8, opacity: 0 }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut', delay: 0.4 }}
          className="absolute inset-0 rounded-full border border-teal-300"
        />

        {/* Central Core Disk */}
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', damping: 15, stiffness: 260 }}
          className="relative z-10 w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 shadow-md flex items-center justify-center text-white"
        >
          {/* Animated SVG Path Checkmark */}
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <motion.path
              d="M20 6L9 17l-5-5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            />
          </svg>
        </motion.div>

        {/* Orbiting / Radiating Sparkle Particles */}
        {[0, 60, 120, 180, 240, 300].map((angle, idx) => {
          const rad = (angle * Math.PI) / 180;
          const x = Math.cos(rad) * 22;
          const y = Math.sin(rad) * 22;

          return (
            <motion.span
              key={idx}
              initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                x: [0, x * 1.1],
                y: [0, y * 1.1]
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: idx * 0.18,
                ease: 'easeOut'
              }}
              className="absolute w-1.5 h-1.5 rounded-full bg-emerald-400 pointer-events-none shadow-xs"
            />
          );
        })}
      </div>

      {/* Text Information */}
      <div className="min-w-0 flex-1 relative z-10">
        <div className="flex items-center gap-1.5">
          <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <h4 className="text-xs font-bold text-emerald-950 font-mono tracking-tight truncate">
            {message}
          </h4>
        </div>
        {subtext && (
          <p className="text-[11px] text-emerald-700/90 font-medium mt-0.5 leading-snug">
            {subtext}
          </p>
        )}
      </div>

      {/* Status Pill */}
      <motion.div
        initial={{ opacity: 0, x: 8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[10px] font-mono font-bold text-emerald-800 shrink-0"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
        <span>SYNCED</span>
      </motion.div>
    </motion.div>
  );
};
