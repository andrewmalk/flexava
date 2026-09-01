export interface WaitlistFormData {
  email: string;
  firstName: string;
  companyName: string;
  roleType: string;
  storeCount: string;
  monthlyOrders: string;
  salesChannels: string[];
  biggestBottleneck: string;
  automationWish: string;
  nicheIndustry?: string;
  avatarGoal?: string;
  targetPlatforms?: string[];
  monthlyVideoVolume?: string;
  currentCAC?: string;
  avatarStyle?: string;
  biggestChallenge?: string;
}

export interface AvatarProfile {
  id: string;
  name: string;
  handle: string;
  niche: string;
  category: 'tech' | 'fintech' | 'fashion' | 'health' | 'b2b' | 'lifestyle' | 'crypto';
  views: string;
  followers: string;
  engagement: string;
  monthlyVideos: number;
  platforms: ('tiktok' | 'instagram' | 'youtube')[];
  avatarImg: string;
  accentColor: string;
  bio: string;
  voiceName: string;
  voiceStyle: string;
  languages: string[];
  featuredTopic: string;
  sampleReel: {
    title: string;
    hook: string;
    duration: string;
    viewsCount: string;
    sharesCount: string;
    likesCount: string;
    scriptExcerpt: string;
    targetAudience: string;
  };
}

export interface CapabilityItem {
  id: string;
  title: string;
  description: string;
  category: 'production' | 'technology' | 'distribution' | 'performance';
  icon: string;
  highlights: string[];
  previewBadge?: string;
  actionPreview?: {
    inputLabel: string;
    inputValue: string;
    agentAction: string;
    outputSummary: string;
  };
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  details: string[];
  nodeType: string;
  metric: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface PersonaItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  keyBenefit: string;
  idealFor: string;
}

export interface OperatingStat {
  metric: string;
  label: string;
  sublabel: string;
  icon: string;
}

export interface SuccessStoryItem {
  id: string;
  brandName: string;
  industry: string;
  avatarName: string;
  avatarHandle: string;
  avatarImg: string;
  period: string;
  metrics: {
    views: string;
    cacReduction: string;
    leadsOrRevenue: string;
    contentVelocity: string;
  };
  quote: string;
  author: string;
  role: string;
  tags: string[];
}
