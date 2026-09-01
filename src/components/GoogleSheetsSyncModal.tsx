import React, { useState, useEffect } from 'react';
import { 
  FileSpreadsheet, 
  CheckCircle2, 
  ExternalLink, 
  RefreshCw, 
  LogOut, 
  ShieldCheck, 
  AlertCircle, 
  X,
  Table,
  UploadCloud,
  Check,
  Lock,
  Sparkles
} from 'lucide-react';
import { AnimatePresence } from 'motion/react';
import { User } from 'firebase/auth';
import { SyncSuccessAnimation } from './SyncSuccessAnimation';
import { 
  signInWithGoogle, 
  logOutGoogle, 
  getAccessToken, 
  initAuth 
} from '../services/firebaseAuth';
import { 
  getSavedSpreadsheetId, 
  getSavedSpreadsheetUrl, 
  createWaitlistSpreadsheet, 
  saveSpreadsheetInfo, 
  clearSpreadsheetInfo,
  getAllSubmissions,
  syncAllPendingToSheet,
  StoredSubmission
} from '../services/googleSheets';

interface GoogleSheetsSyncModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GoogleSheetsSyncModal: React.FC<GoogleSheetsSyncModalProps> = ({ isOpen, onClose }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [spreadsheetId, setSpreadsheetId] = useState<string | null>(getSavedSpreadsheetId());
  const [spreadsheetUrl, setSpreadsheetUrl] = useState<string | null>(getSavedSpreadsheetUrl());
  const [isLoading, setIsLoading] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [submissions, setSubmissions] = useState<StoredSubmission[]>([]);
  const [manualSheetId, setManualSheetId] = useState('');
  const [showManualInput, setShowManualInput] = useState(false);

  useEffect(() => {
    // Listen to Firebase Auth state
    const unsubscribe = initAuth(
      (authUser, authToken) => {
        setUser(authUser);
        if (authToken) setToken(authToken);
      },
      () => {
        setUser(null);
        setToken(null);
      }
    );

    // Refresh local submissions
    setSubmissions(getAllSubmissions());

    return () => unsubscribe();
  }, [isOpen]);

  if (!isOpen) return null;

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setErrorMsg(null);
    try {
      const authResult = await signInWithGoogle();
      if (authResult) {
        setUser(authResult.user);
        setToken(authResult.accessToken);
        setSuccessMsg('Successfully connected to Google Workspace account!');
        
        // Auto-create spreadsheet if none exists
        if (!spreadsheetId) {
          const newSheet = await createWaitlistSpreadsheet(authResult.accessToken);
          setSpreadsheetId(newSheet.id);
          setSpreadsheetUrl(newSheet.url);
          setSuccessMsg('Created new Google Sheet "Flexmerch.AI - Waitlist Submissions" in your Drive!');
        }
      } else {
        // User closed or dismissed the popup
        setErrorMsg(null);
      }
    } catch (err: any) {
      setErrorMsg(err?.message || 'Failed to sign in with Google. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateSheet = async () => {
    if (!token) {
      setErrorMsg('Please sign in with Google first.');
      return;
    }
    setIsLoading(true);
    setErrorMsg(null);
    try {
      const newSheet = await createWaitlistSpreadsheet(token);
      setSpreadsheetId(newSheet.id);
      setSpreadsheetUrl(newSheet.url);
      setSuccessMsg('Created fresh Google Sheet for waitlist responses!');
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to create spreadsheet.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleConnectExistingSheet = () => {
    if (!manualSheetId.trim()) return;
    const cleanId = manualSheetId.trim().replace(/https:\/\/docs\.google\.com\/spreadsheets\/d\//, '').split('/')[0];
    const url = `https://docs.google.com/spreadsheets/d/${cleanId}/edit`;
    saveSpreadsheetInfo(cleanId, url);
    setSpreadsheetId(cleanId);
    setSpreadsheetUrl(url);
    setShowManualInput(false);
    setSuccessMsg('Connected to existing Google Sheet!');
  };

  const handleSyncAll = async () => {
    if (!spreadsheetId) {
      setErrorMsg('No Google Sheet connected. Please connect or create one.');
      return;
    }

    let activeToken = token;
    if (!activeToken) {
      activeToken = await getAccessToken();
    }

    if (!activeToken) {
      setErrorMsg('Google session expired. Please click "Sign in with Google" to re-authenticate.');
      return;
    }

    setIsSyncing(true);
    setErrorMsg(null);
    try {
      const res = await syncAllPendingToSheet(spreadsheetId, activeToken);
      setSuccessMsg(`Successfully synced ${res.totalSynced} new submission(s) to Google Sheets!`);
      setSubmissions(getAllSubmissions());
    } catch (err: any) {
      setErrorMsg(err.message || 'Sync failed.');
    } finally {
      setIsSyncing(false);
    }
  };

  const handleSignOut = async () => {
    await logOutGoogle();
    setUser(null);
    setToken(null);
    setSuccessMsg('Signed out of Google session.');
  };

  const pendingCount = submissions.filter(s => !s.syncedToSheets).length;
  const syncedCount = submissions.filter(s => s.syncedToSheets).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-2xs">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Google Sheets Waitlist Storage</h3>
              <p className="text-xs text-slate-500 font-medium">Automatic real-time sync for waitlist responses</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6 overflow-y-auto flex-1 text-sm text-slate-600">
          
          {/* Notifications & Lottie-style Sync Animation */}
          {errorMsg && (
            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <AnimatePresence mode="wait">
            {successMsg && (
              <SyncSuccessAnimation 
                key={successMsg} 
                message={successMsg} 
                subtext="Live Google Sheets API endpoint acknowledged"
              />
            )}
          </AnimatePresence>

          {/* Account Status Card */}
          <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            {user ? (
              <div className="flex items-center gap-3">
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName || 'Google User'} className="w-10 h-10 rounded-full border border-slate-200" referrerPolicy="no-referrer" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-sm">
                    {user.email?.[0]?.toUpperCase() || 'G'}
                  </div>
                )}
                <div>
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <span>{user.displayName || user.email}</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-100 text-emerald-800 font-mono font-bold">Connected</span>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">{user.email}</span>
                </div>
              </div>
            ) : (
              <div>
                <h4 className="text-xs font-bold text-slate-900">Connect Google Account</h4>
                <p className="text-xs text-slate-500">Sign in with permission to create and append waitlist rows to Google Sheets.</p>
              </div>
            )}

            {user ? (
              <button
                onClick={handleSignOut}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-xs font-bold text-slate-700 transition-colors cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Disconnect</span>
              </button>
            ) : (
              <button
                onClick={handleGoogleLogin}
                disabled={isLoading}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-300 hover:border-slate-400 hover:shadow-xs text-slate-800 font-bold text-xs shadow-2xs transition-all cursor-pointer"
              >
                <svg className="w-4 h-4" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                </svg>
                <span>{isLoading ? 'Connecting...' : 'Sign in with Google'}</span>
              </button>
            )}
          </div>

          {/* Active Spreadsheet Status */}
          <div className="p-4 rounded-2xl border border-indigo-100 bg-indigo-50/50 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700">Target Google Sheet</span>
              {spreadsheetId && (
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full font-mono">
                  <Check className="w-3 h-3" /> Live Synced
                </span>
              )}
            </div>

            {spreadsheetId && spreadsheetUrl ? (
              <div className="space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2 p-3 bg-white rounded-xl border border-indigo-200 shadow-2xs">
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-slate-900 truncate">Flexmerch.AI - Waitlist Submissions</div>
                    <div className="text-[11px] font-mono text-slate-400 truncate">ID: {spreadsheetId}</div>
                  </div>
                  <a
                    href={spreadsheetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
                  >
                    <span>Open Sheet</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-slate-500">
                    Synced: <strong className="text-slate-800">{syncedCount}</strong> | Pending Queue: <strong className="text-indigo-700">{pendingCount}</strong>
                  </span>
                  <button
                    onClick={handleSyncAll}
                    disabled={isSyncing || pendingCount === 0}
                    className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800 disabled:text-slate-400 transition-colors cursor-pointer"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
                    <span>{isSyncing ? 'Syncing...' : 'Sync Pending Responses'}</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-4 space-y-3">
                <p className="text-xs text-slate-500">No Google Sheet connected yet. Click below to create one automatically.</p>
                <div className="flex flex-wrap justify-center gap-2">
                  <button
                    onClick={handleCreateSheet}
                    disabled={!user || isLoading}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                  >
                    <UploadCloud className="w-3.5 h-3.5" />
                    <span>Create "Waitlist Submissions" Sheet</span>
                  </button>
                  <button
                    onClick={() => setShowManualInput(!showManualInput)}
                    className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    Connect Existing ID
                  </button>
                </div>

                {showManualInput && (
                  <div className="pt-2 flex items-center gap-2 max-w-md mx-auto">
                    <input
                      type="text"
                      placeholder="Paste Google Sheet URL or ID"
                      value={manualSheetId}
                      onChange={(e) => setManualSheetId(e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    />
                    <button
                      onClick={handleConnectExistingSheet}
                      className="px-3 py-2 rounded-lg bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 shrink-0"
                    >
                      Save
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Submission History / Data Flow Overview */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <Table className="w-3.5 h-3.5 text-slate-500" />
                <span>Recorded Submissions ({submissions.length})</span>
              </h4>
              <span className="text-[11px] text-slate-400">Stored in browser & synced to Google Sheets</span>
            </div>

            {submissions.length === 0 ? (
              <div className="p-4 text-center text-xs text-slate-400 border border-dashed border-slate-200 rounded-2xl">
                No submissions recorded yet. Test the waitlist form on the landing page!
              </div>
            ) : (
              <div className="border border-slate-200 rounded-2xl overflow-hidden max-h-48 overflow-y-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-mono text-[10px] uppercase">
                    <tr>
                      <th className="p-2.5">Email</th>
                      <th className="p-2.5">Role / Company</th>
                      <th className="p-2.5">Channels</th>
                      <th className="p-2.5">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {submissions.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-50">
                        <td className="p-2.5 font-bold font-mono text-slate-900">{item.email}</td>
                        <td className="p-2.5">{item.roleType} {item.companyName ? `(${item.companyName})` : ''}</td>
                        <td className="p-2.5 font-mono text-[11px]">{item.salesChannels.join(', ')}</td>
                        <td className="p-2.5">
                          {item.syncedToSheets ? (
                            <span className="inline-flex items-center gap-1 text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-bold">
                              <Check className="w-2.5 h-2.5" /> Synced
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-[10px] text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full font-bold">
                              Local Queue
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-500 flex items-center gap-2 font-medium">
            <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0" />
            <span>Answers are safely saved in local storage upon form submit, and instantly appended to your Google Spreadsheet when connected.</span>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
          <span className="text-[11px] font-mono text-slate-400">Flexmerch.AI Sheets Engine</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
