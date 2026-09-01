import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, Eye, EyeOff, Activity, Zap } from 'lucide-react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  color: string;
  alpha: number;
  pulseSpeed: number;
  pulseOffset: number;
  type: 'store' | 'agent' | 'hub' | 'packet';
}

interface SignalPacket {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  progress: number;
  speed: number;
  color: string;
}

export const DynamicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [networkMode, setNetworkMode] = useState<'agent-mesh' | 'minimal-glow' | 'active-stream'>('agent-mesh');
  const [isControlsVisible, setIsControlsVisible] = useState(false);
  const [activeNodesCount, setActiveNodesCount] = useState(0);

  const { scrollY } = useScroll();
  const orb1Y = useTransform(scrollY, [0, 2000], [0, 250]);
  const orb2Y = useTransform(scrollY, [0, 2000], [0, -200]);
  const orb3Y = useTransform(scrollY, [0, 2000], [0, 180]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Responsive node count based on screen width
    const particleCount = width < 768 ? 28 : width < 1280 ? 45 : 65;
    const maxConnectionDistance = width < 768 ? 110 : 150;
    const particles: Particle[] = [];
    const packets: SignalPacket[] = [];

    const colors = [
      'rgba(99, 102, 241, ', // Indigo
      'rgba(14, 165, 233, ', // Sky
      'rgba(16, 185, 129, ', // Emerald
      'rgba(139, 92, 246, ', // Violet
    ];

    // Mouse interactive state
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 160,
      isActive: false,
    };

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      const typeRand = Math.random();
      const type: Particle['type'] =
        typeRand < 0.25 ? 'store' : typeRand < 0.6 ? 'agent' : 'hub';
      const baseRadius = type === 'store' ? 3 : type === 'hub' ? 3.5 : 2;
      const color = colors[Math.floor(Math.random() * colors.length)];

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (type === 'hub' ? 0.3 : 0.6),
        vy: (Math.random() - 0.5) * (type === 'hub' ? 0.3 : 0.6),
        radius: baseRadius,
        baseRadius,
        color,
        alpha: Math.random() * 0.4 + 0.2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        pulseOffset: Math.random() * Math.PI * 2,
        type,
      });
    }

    setActiveNodesCount(particles.length);

    // Spawn signal packets between closely connected nodes
    const spawnPacket = (p1: Particle, p2: Particle) => {
      if (packets.length > 15) return;
      packets.push({
        startX: p1.x,
        startY: p1.y,
        endX: p2.x,
        endY: p2.y,
        progress: 0,
        speed: 0.015 + Math.random() * 0.02,
        color: p1.color,
      });
    };

    // Resize handler
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    // Mouse handlers
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.isActive = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.isActive = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    let tick = 0;

    // Main Canvas Render Loop
    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      if (networkMode !== 'minimal-glow') {
        // Update and draw signal packets
        for (let i = packets.length - 1; i >= 0; i--) {
          const pkt = packets[i];
          pkt.progress += pkt.speed;

          if (pkt.progress >= 1) {
            packets.splice(i, 1);
            continue;
          }

          const curX = pkt.startX + (pkt.endX - pkt.startX) * pkt.progress;
          const curY = pkt.startY + (pkt.endY - pkt.startY) * pkt.progress;

          ctx.beginPath();
          ctx.arc(curX, curY, 2, 0, Math.PI * 2);
          ctx.fillStyle = `${pkt.color}0.85)`;
          ctx.shadowColor = `${pkt.color}0.8)`;
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        // Draw connections between nodes
        for (let i = 0; i < particles.length; i++) {
          const p1 = particles[i];

          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < maxConnectionDistance) {
              const alpha = (1 - dist / maxConnectionDistance) * 0.18;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
              ctx.lineWidth = 0.75;
              ctx.stroke();

              // Occasionally spawn a dynamic data packet
              if (tick % 120 === 0 && Math.random() < 0.12 && networkMode === 'active-stream') {
                spawnPacket(p1, p2);
              }
            }
          }

          // Interactive connection to mouse
          if (mouse.isActive) {
            const mdx = p1.x - mouse.x;
            const mdy = p1.y - mouse.y;
            const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

            if (mdist < mouse.radius) {
              const mAlpha = (1 - mdist / mouse.radius) * 0.35;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(mouse.x, mouse.y);
              ctx.strokeStyle = `rgba(56, 189, 248, ${mAlpha})`;
              ctx.lineWidth = 1;
              ctx.stroke();

              // Subtle magnetic attraction
              p1.x -= mdx * 0.008;
              p1.y -= mdy * 0.008;
            }
          }
        }

        // Update and draw particles
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          // Move
          p.x += p.vx;
          p.y += p.vy;

          // Boundary bounce
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;

          // Pulse sizing
          const pulse = Math.sin(tick * p.pulseSpeed + p.pulseOffset);
          const currentRadius = p.baseRadius + pulse * 0.8;
          const currentAlpha = p.alpha + pulse * 0.1;

          // Draw node ring
          ctx.beginPath();
          ctx.arc(p.x, p.y, currentRadius + 1.5, 0, Math.PI * 2);
          ctx.strokeStyle = `${p.color}${Math.max(0.05, currentAlpha * 0.35)})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();

          // Draw inner node core
          ctx.beginPath();
          ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${Math.max(0.1, currentAlpha)})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [networkMode]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* 1. Dynamic Luminous Mesh Gradient Orbs (Smooth Framer Motion) */}
      <motion.div
        style={{ y: orb1Y }}
        animate={{
          x: [0, 40, -30, 0],
          scale: [1, 1.15, 0.95, 1],
          opacity: [0.35, 0.48, 0.35],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-indigo-300/35 via-indigo-200/25 to-sky-200/20 blur-3xl"
      />

      <motion.div
        style={{ y: orb2Y }}
        animate={{
          x: [0, -50, 40, 0],
          scale: [1, 0.9, 1.1, 1],
          opacity: [0.3, 0.45, 0.3],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-sky-300/30 via-indigo-200/20 to-teal-200/15 blur-3xl"
      />

      <motion.div
        style={{ y: orb3Y }}
        animate={{
          x: [0, 30, -40, 0],
          scale: [1, 1.1, 0.95, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-2/3 left-1/4 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-violet-200/25 via-indigo-100/20 to-sky-200/15 blur-3xl"
      />

      {/* 2. Precision Dot-Grid Matrix with Radial Falloff Mask */}
      <div 
        className="absolute inset-0 dot-matrix-pattern opacity-35"
        style={{
          maskImage: 'radial-gradient(ellipse at 50% 50%, black 40%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 40%, transparent 85%)',
        }}
      />

      {/* 3. Subtle Slow Wave Scanline Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.02] to-transparent animate-pulse pointer-events-none" />

      {/* 4. Interactive HTML5 Agent Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* 5. Discreet Ambient Background Status & Mode Controller (Bottom-Right Floating Pill) */}
      <div className="pointer-events-auto fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2">
        {isControlsVisible && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            className="p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl space-y-2 text-xs font-medium text-slate-700 w-56 animate-in fade-in zoom-in-95 duration-200"
          >
            <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
              <span className="font-semibold text-slate-900 flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-indigo-600" />
                Live Background
              </span>
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-700 font-bold">
                {activeNodesCount} Nodes
              </span>
            </div>

            <div className="space-y-1">
              <button
                type="button"
                onClick={() => setNetworkMode('active-stream')}
                className={`w-full text-left px-2.5 py-1.5 rounded-lg transition-colors flex items-center justify-between ${
                  networkMode === 'active-stream'
                    ? 'bg-indigo-600 text-white font-semibold'
                    : 'hover:bg-slate-100 text-slate-600'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <Zap className="w-3 h-3" />
                  Active Data Stream
                </span>
                {networkMode === 'active-stream' && <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />}
              </button>

              <button
                type="button"
                onClick={() => setNetworkMode('agent-mesh')}
                className={`w-full text-left px-2.5 py-1.5 rounded-lg transition-colors flex items-center justify-between ${
                  networkMode === 'agent-mesh'
                    ? 'bg-indigo-600 text-white font-semibold'
                    : 'hover:bg-slate-100 text-slate-600'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" />
                  Agent Mesh Flow
                </span>
                {networkMode === 'agent-mesh' && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
              </button>

              <button
                type="button"
                onClick={() => setNetworkMode('minimal-glow')}
                className={`w-full text-left px-2.5 py-1.5 rounded-lg transition-colors flex items-center justify-between ${
                  networkMode === 'minimal-glow'
                    ? 'bg-indigo-600 text-white font-semibold'
                    : 'hover:bg-slate-100 text-slate-600'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <EyeOff className="w-3 h-3" />
                  Minimal Ambient
                </span>
                {networkMode === 'minimal-glow' && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
              </button>
            </div>
          </motion.div>
        )}

        <button
          type="button"
          onClick={() => setIsControlsVisible(!isControlsVisible)}
          title="Toggle Background Dynamics"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 hover:bg-white backdrop-blur-md border border-slate-200/80 shadow-md text-xs font-semibold text-slate-700 hover:text-indigo-600 transition-all hover:scale-105"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-[11px]">Dynamic OS Canvas</span>
          {isControlsVisible ? <EyeOff className="w-3.5 h-3.5 text-slate-400" /> : <Eye className="w-3.5 h-3.5 text-slate-400" />}
        </button>
      </div>
    </div>
  );
};
