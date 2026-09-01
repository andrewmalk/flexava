import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, FileSpreadsheet } from 'lucide-react';

interface NavbarProps {
  onJoinClick?: () => void;
  onOpenSheets?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onJoinClick, onOpenSheets }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Avatar Fleet', href: '#avatars' },
    { name: 'Traditional vs AI', href: '#comparison' },
    { name: 'Benchmarks', href: '#benchmarks' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Live Dashboard', href: '#dashboard' },
    { name: 'ROI Calculator', href: '#roi-calculator' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            id="nav-logo"
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-700 flex items-center justify-center shadow-md shadow-indigo-600/20 group-hover:shadow-indigo-600/30 transition-shadow">
              <Cpu className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-slate-900 flex items-center gap-1.5">
                Flexmerch<span className="text-indigo-600">.AI</span>
              </span>
              <span className="text-[10px] text-slate-500 tracking-wider font-mono uppercase">
                AI Avatars & Influencers
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" aria-label="Main Navigation" className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`nav-link-${link.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-200" />
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {onOpenSheets && (
              <button
                type="button"
                onClick={onOpenSheets}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 text-slate-700 hover:text-emerald-800 text-xs font-mono font-bold transition-all shadow-2xs cursor-pointer"
                title="Manage Google Sheets live storage"
              >
                <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
                <span>Google Sheets</span>
              </button>
            )}

            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>v1.0-alpha</span>
            </div>

            <a
              id="nav-waitlist-btn"
              href="#waitlist"
              onClick={onJoinClick}
              className="animate-shimmer inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 active:scale-95 text-white font-bold text-sm shadow-md shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all cursor-pointer"
            >
              <span>Join Waitlist</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-ping" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden">
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-menu-drawer" className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`mobile-nav-${link.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-200 space-y-2">
            {onOpenSheets && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSheets();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-colors border border-slate-200"
              >
                <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                <span>Manage Google Sheets Storage</span>
              </button>
            )}
            <a
              id="mobile-nav-waitlist-btn"
              href="#waitlist"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onJoinClick) onJoinClick();
              }}
              className="block w-full text-center py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-base transition-colors shadow-md shadow-indigo-600/20"
            >
              Join the Waitlist
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
