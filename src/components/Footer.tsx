import React, { useState } from 'react';
import { Bot, X, Mail, Shield, FileText } from 'lucide-react';

interface FooterProps {
  onJoinClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onJoinClick }) => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | 'contact' | null>(null);

  const footerLinks = [
    { name: 'Avatars & Proof', href: '#avatar-showcase' },
    { name: 'Engine & Tech', href: '#solution' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Economics & ROI', href: '#roi-calculator' },
    { name: 'Apply for Pilot', href: '#waitlist', onClick: onJoinClick },
    { name: 'Privacy Policy', action: () => setActiveModal('privacy') },
    { name: 'Terms of Use', action: () => setActiveModal('terms') },
    { name: 'Contact', action: () => setActiveModal('contact') },
  ];

  return (
    <footer id="main-footer" className="relative bg-slate-900 border-t border-slate-800 py-16 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="space-y-3">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500 flex items-center justify-center shadow-md shadow-indigo-500/20">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Flexmerch<span className="text-indigo-400">.AI</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm max-w-sm font-medium">
              Autonomous AI Influencers & Real-Device Video Publishing Infrastructure.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((link, idx) => (
              <div key={idx}>
                {link.href ? (
                  <a
                    href={link.href}
                    onClick={link.onClick}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={link.action}
                    className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© 2026 Flexmerch.AI. All rights reserved.</p>
          <p className="text-slate-500">
            60 Unique 4K Videos / Mo • Zero Filming • 100% Brand-Owned IP • Performance CAC Model.
          </p>
        </div>
      </div>

      {/* Interactive Modal for Privacy / Terms / Contact */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl text-slate-700 space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
                {activeModal === 'privacy' && <Shield className="w-5 h-5 text-indigo-600" />}
                {activeModal === 'terms' && <FileText className="w-5 h-5 text-indigo-600" />}
                {activeModal === 'contact' && <Mail className="w-5 h-5 text-indigo-600" />}
                <span>
                  {activeModal === 'privacy' && 'Privacy Policy'}
                  {activeModal === 'terms' && 'Terms of Use & IP Ownership'}
                  {activeModal === 'contact' && 'Contact Founding Team'}
                </span>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-sm space-y-3 max-h-[60vh] overflow-y-auto pr-2 text-slate-600 leading-relaxed">
              {activeModal === 'privacy' && (
                <>
                  <p>
                    Flexmerch.AI respects client confidentiality. All brand voice models, custom avatar likeness weights, campaign scripts, and conversion analytics remain strictly isolated.
                  </p>
                  <p>
                    We never use client-specific proprietary brand IP to train models for competing brands in your category.
                  </p>
                </>
              )}
              {activeModal === 'terms' && (
                <>
                  <p>
                    Participation in the Flexmerch AI Avatar Pilot grants you exclusive commercial rights to all generated video assets, custom avatar personas, and campaign deliverables.
                  </p>
                  <p>
                    Your brand retains 100% ownership of social channels, audience followings, and produced 4K media reels. Performance CAC-split billing terms apply solely to agreed verified transactions.
                  </p>
                </>
              )}
              {activeModal === 'contact' && (
                <div className="space-y-3">
                  <p>
                    Direct brand inquiries and pilot evaluations:
                  </p>
                  <div className="p-3.5 rounded-xl bg-indigo-50 border border-indigo-200 font-mono text-xs text-indigo-800 font-semibold">
                    avatars@flexmerch.ai
                  </div>
                  <p className="text-xs text-slate-500">
                    Our growth engineering team reviews incoming pilot applications within 24 hours.
                  </p>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-slate-100 text-right">
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold cursor-pointer shadow-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
