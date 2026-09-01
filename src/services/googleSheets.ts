import { WaitlistFormData } from '../types';

export interface StoredSubmission extends WaitlistFormData {
  id: string;
  submittedAt: string;
  syncedToSheets: boolean;
}

const STORAGE_KEY_SUBMISSIONS = 'flexmerch_all_submissions';
const STORAGE_KEY_SPREADSHEET_ID = 'flexmerch_sheets_id';
const STORAGE_KEY_SPREADSHEET_URL = 'flexmerch_sheets_url';

export const getSavedSpreadsheetId = (): string | null => {
  try {
    return localStorage.getItem(STORAGE_KEY_SPREADSHEET_ID);
  } catch {
    return null;
  }
};

export const getSavedSpreadsheetUrl = (): string | null => {
  try {
    return localStorage.getItem(STORAGE_KEY_SPREADSHEET_URL);
  } catch {
    return null;
  }
};

export const saveSpreadsheetInfo = (id: string, url: string) => {
  try {
    localStorage.setItem(STORAGE_KEY_SPREADSHEET_ID, id);
    localStorage.setItem(STORAGE_KEY_SPREADSHEET_URL, url);
  } catch {}
};

export const clearSpreadsheetInfo = () => {
  try {
    localStorage.removeItem(STORAGE_KEY_SPREADSHEET_ID);
    localStorage.removeItem(STORAGE_KEY_SPREADSHEET_URL);
  } catch {}
};

export const getAllSubmissions = (): StoredSubmission[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_SUBMISSIONS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const saveLocalSubmission = (data: WaitlistFormData): StoredSubmission => {
  const newSubmission: StoredSubmission = {
    ...data,
    id: `sub_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    submittedAt: new Date().toISOString(),
    syncedToSheets: false,
  };

  try {
    const current = getAllSubmissions();
    const updated = [newSubmission, ...current];
    localStorage.setItem(STORAGE_KEY_SUBMISSIONS, JSON.stringify(updated));
  } catch (err) {
    console.error('Error saving local submission:', err);
  }

  return newSubmission;
};

export const markSubmissionSynced = (id: string) => {
  try {
    const current = getAllSubmissions();
    const updated = current.map(s => s.id === id ? { ...s, syncedToSheets: true } : s);
    localStorage.setItem(STORAGE_KEY_SUBMISSIONS, JSON.stringify(updated));
  } catch {}
};

/**
 * Creates a new dedicated Google Sheet for Flexmerch.AI waitlist responses
 */
export const createWaitlistSpreadsheet = async (accessToken: string): Promise<{ id: string; url: string }> => {
  const title = `Flexmerch.AI - Waitlist Submissions (${new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })})`;

  const res = await fetch('https://sheets.googleapis.com/v4/spreadsheets', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      properties: {
        title: title,
      },
      sheets: [
        {
          properties: {
            title: 'Submissions',
            gridProperties: {
              frozenRowCount: 1,
            }
          }
        }
      ]
    })
  });

  if (!res.ok) {
    const errData = await res.json();
    throw new Error(errData.error?.message || 'Failed to create Google Sheet');
  }

  const data = await res.json();
  const spreadsheetId = data.spreadsheetId;
  const spreadsheetUrl = data.spreadsheetUrl || `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`;

  // Write header row
  await initSpreadsheetHeader(spreadsheetId, accessToken);
  saveSpreadsheetInfo(spreadsheetId, spreadsheetUrl);

  return { id: spreadsheetId, url: spreadsheetUrl };
};

/**
 * Ensures header row exists on the sheet
 */
export const initSpreadsheetHeader = async (spreadsheetId: string, accessToken: string) => {
  const headers = [
    'Timestamp',
    'Email Address',
    'Full Name',
    'Company / Brand',
    'Role Type',
    'Store Count',
    'Monthly Order Volume',
    'Sales Channels',
    'Primary Bottleneck',
    'Automation Wish',
    'Status'
  ];

  await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Submissions!A1:K1?valueInputOption=USER_ENTERED`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      range: 'Submissions!A1:K1',
      majorDimension: 'ROWS',
      values: [headers]
    })
  });
};

/**
 * Appends a submission row directly to the Google Sheet
 */
export const appendSubmissionToSheet = async (
  spreadsheetId: string, 
  submission: WaitlistFormData, 
  accessToken: string
): Promise<boolean> => {
  const rowValues = [
    new Date().toLocaleString('en-US', { timeZoneName: 'short' }),
    submission.email,
    submission.firstName || 'Not provided',
    submission.companyName || 'Not provided',
    submission.roleType || 'Marketplace seller',
    submission.storeCount || '2–10',
    submission.monthlyOrders || '100–1,000',
    submission.salesChannels.join(', ') || 'Etsy, Shopify',
    submission.biggestBottleneck || 'Listing creation',
    submission.automationWish || 'None specified',
    'Pending Review'
  ];

  const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Submissions!A:K:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      range: 'Submissions!A:K',
      majorDimension: 'ROWS',
      values: [rowValues]
    })
  });

  if (!res.ok) {
    // If 'Submissions' sheet tab doesn't exist, try default Sheet1
    const fallbackRes = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1!A:K:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        range: 'Sheet1!A:K',
        majorDimension: 'ROWS',
        values: [rowValues]
      })
    });
    return fallbackRes.ok;
  }

  return res.ok;
};

/**
 * Syncs all un-synced local submissions to Google Sheets
 */
export const syncAllPendingToSheet = async (
  spreadsheetId: string, 
  accessToken: string
): Promise<{ totalSynced: number }> => {
  const submissions = getAllSubmissions();
  const pending = submissions.filter(s => !s.syncedToSheets);

  if (pending.length === 0) {
    return { totalSynced: 0 };
  }

  let count = 0;
  for (const item of pending) {
    const success = await appendSubmissionToSheet(spreadsheetId, item, accessToken);
    if (success) {
      markSubmissionSynced(item.id);
      count++;
    }
  }

  return { totalSynced: count };
};

export interface SheetRowData {
  timestamp: string;
  email: string;
  name: string;
  company: string;
  role: string;
  storeCount: string;
  orders: string;
  channels: string;
  bottleneck: string;
  wish: string;
  status: string;
}

/**
 * Fetches real-time rows directly from the connected Google Sheet
 */
export const fetchSpreadsheetRows = async (
  spreadsheetId: string, 
  accessToken: string
): Promise<{ title: string; rows: SheetRowData[]; totalRowCount: number; lastSyncedAt: string }> => {
  // Fetch values from Submissions range or fallback to Sheet1
  let range = 'Submissions!A1:K50';
  let res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    }
  });

  if (!res.ok) {
    range = 'Sheet1!A1:K50';
    res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    });
  }

  if (!res.ok) {
    const errData = await res.json().catch(() => ({}));
    throw new Error(errData.error?.message || 'Failed to fetch spreadsheet rows');
  }

  const data = await res.json();
  const rawRows: string[][] = data.values || [];

  if (rawRows.length <= 1) {
    return {
      title: 'Waitlist Submissions',
      rows: [],
      totalRowCount: 0,
      lastSyncedAt: new Date().toLocaleTimeString()
    };
  }

  // Skip header row
  const parsedRows: SheetRowData[] = rawRows.slice(1).map((r) => ({
    timestamp: r[0] || 'Recently',
    email: r[1] || 'Anonymous',
    name: r[2] || '—',
    company: r[3] || '—',
    role: r[4] || 'Operator',
    storeCount: r[5] || '1–5',
    orders: r[6] || '50–500',
    channels: r[7] || 'Multi-channel',
    bottleneck: r[8] || 'Operations',
    wish: r[9] || 'Full pipeline automation',
    status: r[10] || 'Active Cohort'
  }));

  return {
    title: 'Flexmerch.AI Private Beta Submissions',
    rows: parsedRows.reverse(), // most recent first
    totalRowCount: parsedRows.length,
    lastSyncedAt: new Date().toLocaleTimeString()
  };
};
