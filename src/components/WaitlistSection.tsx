import React, { useState, useEffect } from 'react';
import { WaitlistFormData } from '../types';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Mail, 
  User, 
  Building, 
  Layers, 
  ShoppingCart, 
  Store, 
  HelpCircle, 
  Send, 
  Share2, 
  Copy, 
  Check, 
  RotateCcw,
  FileSpreadsheet,
  ExternalLink,
  ShieldCheck,
  Bot,
  Video
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  saveLocalSubmission, 
  appendSubmissionToSheet, 
  getSavedSpreadsheetId, 
  getSavedSpreadsheetUrl,
  getAllSubmissions 
} from '../services/googleSheets';
import { getAccessToken } from '../services/firebaseAuth';
import { GoogleSheetsSyncModal } from './GoogleSheetsSyncModal';

const INITIAL_FORM: WaitlistFormData = {
  email: '',
  firstName: '',
  companyName: '',
  roleType: 'D2C E-Commerce Brand',
  storeCount: '1–2 Avatars',
  monthlyOrders: '100k–500k views',
  salesChannels: ['TikTok', 'Instagram Reels', 'YouTube Shorts'],
  biggestBottleneck: 'Inconsistent video volume',
  automationWish: ''
};

export const WaitlistSection: React.FC = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState<WaitlistFormData>(() => {
    try {
      const saved = localStorage.getItem('flexmerch_avatar_waitlist_data');
      return saved ? JSON.parse(saved) : INITIAL_FORM;
    } catch {
      return INITIAL_FORM;
    }
  });
  const [copied, setCopied] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSheetsModalOpen, setIsSheetsModalOpen] = useState(false);
  const [sheetId, setSheetId] = useState<string | null>(getSavedSpreadsheetId());
  const [sheetUrl, setSheetUrl] = useState<string | null>(getSavedSpreadsheetUrl());
  const [submissionCount, setSubmissionCount] = useState<number>(0);

  useEffect(() => {
    try {
      localStorage.setItem('flexmerch_avatar_waitlist_data', JSON.stringify(formData));
    } catch {}
  }, [formData]);

  useEffect(() => {
    setSheetId(getSavedSpreadsheetId());
    setSheetUrl(getSavedSpreadsheetUrl());
    setSubmissionCount(getAllSubmissions().length);
  }, [isSheetsModalOpen]);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.email.includes('@')) {
      setEmailError('Please enter a valid work email address.');
      return;
    }
    setEmailError('');

    // Save locally immediately
    saveLocalSubmission(formData);
    setSubmissionCount(getAllSubmissions().length);

    // Attempt background sync to Google Sheets if connected
    const activeSheetId = getSavedSpreadsheetId();
    if (activeSheetId) {
      const token = await getAccessToken();
      if (token) {
        appendSubmissionToSheet(activeSheetId, formData, token).catch(console.error);
      }
    }

    setStep(2);
    const profileEl = document.getElementById('waitlist-profile');
    if (profileEl) {
      profileEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    saveLocalSubmission(formData);
    setSubmissionCount(getAllSubmissions().length);

    const activeSheetId = getSavedSpreadsheetId();
    if (activeSheetId) {
      const token = await getAccessToken();
      if (token) {
        await appendSubmissionToSheet(activeSheetId, formData, token).catch(console.error);
      }
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setStep(3);
      const confEl = document.getElementById('waitlist-confirmation');
      if (confEl) {
        confEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 600);
  };

  const toggleChannel = (channel: string) => {
    setFormData(prev => {
      const exists = prev.salesChannels.includes(channel);
      return {
        ...prev,
        salesChannels: exists 
          ? prev.salesChannels.filter(c => c !== channel)
          : [...prev.salesChannels, channel]
      };
    });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM);
    setStep(1);
    const topEl = document.getElementById('waitlist');
    if (topEl) {
      topEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const roleOptions = [
    'D2C E-Commerce Brand',
    'FinTech / Crypto Protocol',
    'B2B SaaS Startup',
    'Media / Performance Agency',
    'Personal Brand / Founder',
    'Mobile App / Gaming Studio'
  ];

  const avatarFleetOptions = ['1 Avatar (60 vids/mo)', '2–3 Avatars (180 vids/mo)', '4–8 Avatars (480 vids/mo)', 'Custom Enterprise Fleet'];
  const viewGoalOptions = ['50k–200k views', '200k–1M views', '1M–5M views', '5M+ views / mo'];
  const channelOptions = ['TikTok', 'Instagram Reels', 'YouTube Shorts', 'Facebook Reels', 'LinkedIn Video', 'Twitter / X'];
  const bottleneckOptions = [
    'Inconsistent video volume',
    'High creator rates & fees',
    'Flaky / ghosting human influencers',
    'Filming & studio overhead',
    'Shadowbans on desktop uploads',
    'Scaling international languages'
  ];

  return (
    <motion.section
      id="waitlist"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative py-20 lg:py-28 overflow-hidden bg-white border-t border-slate-200"
    >
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider font-mono shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI AVATAR PILOT APPLICATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Apply for the AI Avatar Pilot
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto">
            Tell us about your brand demographic and organic growth targets to secure a performance pilot slot.
          </p>

          {/* Google Sheets Sync Status Bar */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700 shadow-2xs">
              <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>
                {sheetId ? (
                  <span className="text-emerald-800 font-semibold">Google Sheets Connected • {submissionCount} submissions</span>
                ) : (
                  <span>Google Sheets Sync Ready ({submissionCount} recorded)</span>
                )}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setIsSheetsModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-xs font-bold text-indigo-700 transition-colors cursor-pointer"
            >
              <FileSpreadsheet className="w-3 h-3" />
              <span>{sheetId ? 'Manage Google Sheet' : 'Connect Google Sheets'}</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <div className={`flex items-center gap-1.5 text-xs font-mono font-medium ${step >= 1 ? 'text-indigo-600 font-bold' : 'text-slate-400'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 1 ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-600'}`}>1</span>
              <span>Work Email</span>
            </div>
            <div className="w-8 h-px bg-slate-200" />
            <div className={`flex items-center gap-1.5 text-xs font-mono font-medium ${step >= 2 ? 'text-indigo-600 font-bold' : 'text-slate-400'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 2 ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-600'}`}>2</span>
              <span>Brand Profile</span>
            </div>
            <div className="w-8 h-px bg-slate-200" />
            <div className={`flex items-center gap-1.5 text-xs font-mono font-medium ${step >= 3 ? 'text-emerald-600 font-bold' : 'text-slate-400'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 3 ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-600'}`}>3</span>
              <span>Confirmed</span>
            </div>
          </div>
        </div>

        {/* STEP 1: Quick Email Opt-In */}
        {step === 1 && (
          <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-12 shadow-sm space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Step 1: Secure Your Pilot Slot</h3>
              <p className="text-sm text-slate-600">
                Reserve your spot in the 10-brand Founding AI Avatar Cohort.
              </p>
            </div>

            <form onSubmit={handleEmailSubmit} className="max-w-lg mx-auto space-y-4">
              <div>
                <label htmlFor="work-email-input" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Work Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    id="work-email-input"
                    type="email"
                    required
                    placeholder="founder@yourbrand.com"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      setEmailError('');
                    }}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm font-medium transition-all shadow-2xs"
                  />
                </div>
                {emailError && (
                  <p className="text-xs text-rose-600 mt-1.5 font-medium">{emailError}</p>
                )}
              </div>

              <button
                id="step-1-submit-btn"
                type="submit"
                className="animate-shimmer cta-pulse-glow w-full py-4 px-6 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 hover:from-indigo-500 hover:to-indigo-700 text-white font-extrabold text-base shadow-lg shadow-indigo-600/25 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Continue to Brand Profile</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-xs text-slate-500 text-center italic pt-1">
                *Zero upfront commitment. Pilot CAC split model applies upon mutual fit.*
              </p>
            </form>
          </div>
        )}

        {/* STEP 2: Brand Profile Form */}
        {step === 2 && (
          <div id="waitlist-profile" className="rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="border-b border-slate-200 pb-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider">Step 2 of 2</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">Brand & Campaign Profile</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Applying with: <span className="text-indigo-700 font-mono font-semibold">{formData.email}</span>
                </p>
              </div>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs text-slate-600 hover:text-indigo-600 underline font-mono cursor-pointer"
              >
                Change Email
              </button>
            </div>

            <form onSubmit={handleProfileSubmit} className="space-y-7">
              {/* Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first-name-input" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      id="first-name-input"
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm shadow-2xs"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company-name-input" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Brand or Website URL
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Building className="w-4 h-4" />
                    </div>
                    <input
                      id="company-name-input"
                      type="text"
                      required
                      placeholder="e.g. Acme Glow / acmeglow.com"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm shadow-2xs"
                    />
                  </div>
                </div>
              </div>

              {/* Which best describes your industry? */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                  Which best describes your industry / vertical?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {roleOptions.map((role) => (
                    <button
                      type="button"
                      key={role}
                      onClick={() => setFormData({ ...formData, roleType: role })}
                      className={`p-3 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                        formData.roleType === role
                          ? 'bg-indigo-50 border-indigo-400 text-indigo-900 shadow-2xs font-semibold'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <span>{role}</span>
                      {formData.roleType === role && <CheckCircle2 className="w-4 h-4 text-indigo-600" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Desired Fleet Size & Monthly View Goal */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                    Target AI Avatar Fleet Size:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {avatarFleetOptions.map((cnt) => (
                      <button
                        type="button"
                        key={cnt}
                        onClick={() => setFormData({ ...formData, storeCount: cnt })}
                        className={`p-2.5 rounded-xl border text-left text-xs font-medium transition-all cursor-pointer ${
                          formData.storeCount === cnt
                            ? 'bg-indigo-50 border-indigo-400 text-indigo-900 font-semibold shadow-2xs'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        {cnt}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                    Target Monthly Organic Views:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {viewGoalOptions.map((ord) => (
                      <button
                        type="button"
                        key={ord}
                        onClick={() => setFormData({ ...formData, monthlyOrders: ord })}
                        className={`p-2.5 rounded-xl border text-left text-xs font-medium transition-all cursor-pointer ${
                          formData.monthlyOrders === ord
                            ? 'bg-indigo-50 border-indigo-400 text-indigo-900 font-semibold shadow-2xs'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        {ord}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Target Platforms */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                  Target Publishing Channels (Select all that apply)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {channelOptions.map((channel) => {
                    const isSelected = formData.salesChannels.includes(channel);
                    return (
                      <button
                        type="button"
                        key={channel}
                        onClick={() => toggleChannel(channel)}
                        className={`p-3 rounded-xl border text-left text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? 'bg-indigo-50 border-indigo-400 text-indigo-900 font-semibold shadow-2xs'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <span>{channel}</span>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Primary Bottleneck */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                  What is your biggest short-form video bottleneck?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {bottleneckOptions.map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setFormData({ ...formData, biggestBottleneck: b })}
                      className={`p-3 rounded-xl border text-left text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                        formData.biggestBottleneck === b
                          ? 'bg-indigo-50 border-indigo-400 text-indigo-900 font-semibold shadow-2xs'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <span className="truncate">{b}</span>
                      {formData.biggestBottleneck === b && <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Avatar Persona Wishes */}
              <div>
                <label htmlFor="automation-wish-input" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Describe your ideal AI Avatar persona / style (Optional)
                </label>
                <textarea
                  id="automation-wish-input"
                  rows={3}
                  placeholder="e.g. 26-year-old female wellness enthusiast with warm aesthetic studio backdrop, speaking English and Spanish..."
                  value={formData.automationWish}
                  onChange={(e) => setFormData({ ...formData, automationWish: e.target.value })}
                  className="w-full p-3.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm shadow-2xs"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <button
                  id="complete-application-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="animate-shimmer cta-pulse-glow w-full py-4 px-6 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 hover:from-indigo-500 hover:to-indigo-700 active:scale-98 text-white font-extrabold text-base shadow-lg shadow-indigo-600/25 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>{isSubmitting ? 'Submitting Application...' : 'Complete My Pilot Application'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-xs text-slate-500 text-center italic">
                  *By applying, you agree to receive pilot evaluation details from Flexmerch.AI. We never share your data.*
                </p>
              </div>
            </form>
          </div>
        )}

        {/* STEP 3: Confirmation Screen */}
        {step === 3 && (
          <div id="waitlist-confirmation" className="rounded-3xl bg-slate-50 border border-emerald-300 p-8 sm:p-12 shadow-sm text-center space-y-6 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-600 mx-auto shadow-2xs">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider">
                Pilot Application Received
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                You’re on the priority pilot list.
              </h3>
            </div>

            <p className="text-base sm:text-lg text-slate-700 max-w-lg mx-auto leading-relaxed">
              Thank you for applying to the Flexmerch AI Avatar Founding Pilot.
            </p>

            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              We are reviewing your brand profile ({formData.storeCount}, {formData.monthlyOrders}) and our growth engineers will contact you at <strong className="text-slate-900 font-mono">{formData.email}</strong> within 24 hours with custom avatar sample proofs.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleCopyLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-semibold text-sm transition-colors border border-slate-300 shadow-2xs cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-500" />}
                <span>{copied ? 'Link Copied!' : 'Copy Shareable Link'}</span>
              </button>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-sm transition-colors cursor-pointer"
              >
                <span>Submit Another Brand →</span>
              </button>
            </div>

            <div className="pt-4 border-t border-slate-200/80 flex items-center justify-center gap-2 text-xs text-slate-500">
              <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
              <span>Response recorded and backed up.</span>
              <button
                onClick={() => setIsSheetsModalOpen(true)}
                className="text-indigo-600 font-bold hover:underline cursor-pointer"
              >
                View Google Sheets Storage →
              </button>
            </div>
          </div>
        )}

        {/* Google Sheets Sync & Storage Modal */}
        <GoogleSheetsSyncModal 
          isOpen={isSheetsModalOpen} 
          onClose={() => setIsSheetsModalOpen(false)} 
        />
      </div>
    </motion.section>
  );
};
