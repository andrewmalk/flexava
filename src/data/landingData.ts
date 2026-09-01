import { CapabilityItem, StepItem, FaqItem, PersonaItem, OperatingStat, AvatarProfile, SuccessStoryItem } from '../types';

export const OPERATING_STATS: OperatingStat[] = [
  {
    metric: '35M+',
    label: 'organic video views',
    sublabel: 'Generated across TikTok, Instagram Reels & YouTube Shorts',
    icon: 'Eye'
  },
  {
    metric: '60 videos',
    label: 'per month per avatar',
    sublabel: '180 multi-platform publications monthly (TikTok, IG, YT)',
    icon: 'Video'
  },
  {
    metric: '7+ niches',
    label: 'active avatar verticals',
    sublabel: 'Fintech, D2C E-commerce, Tech, Fashion, Health, Crypto & SaaS',
    icon: 'Layers'
  },
  {
    metric: '100%',
    label: 'real-device publishing',
    sublabel: 'Dedicated physical hardware & unique e-SIMs for 0 shadowbans',
    icon: 'Smartphone'
  },
  {
    metric: '4.8x',
    label: 'lower customer acquisition cost',
    sublabel: 'Compared to traditional human influencer agency retainers',
    icon: 'TrendingDown'
  }
];

export const AVATAR_FLEET: AvatarProfile[] = [
  {
    id: 'dr-cintas',
    name: 'Dr. Cintas',
    handle: '@drcintas',
    niche: 'Tech, AI & Future Science',
    category: 'tech',
    views: '4.2M',
    followers: '185K',
    engagement: '8.4%',
    monthlyVideos: 60,
    platforms: ['tiktok', 'instagram', 'youtube'],
    avatarImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    accentColor: 'indigo',
    bio: 'Deep-dive AI breakthroughs, robotics updates, and futuristic tech explainers with laboratory authority.',
    voiceName: 'Marcus Neural',
    voiceStyle: 'Authoritative, articulate, calm tech visionary',
    languages: ['English', 'German', 'Spanish', 'French'],
    featuredTopic: 'Quantum Neural Chips & 2026 AI Milestones',
    sampleReel: {
      title: 'How humanoid robots will enter factories by Q4',
      hook: '"If you think robotics is 10 years away, look at what happened this week..."',
      duration: '42s',
      viewsCount: '1.2M',
      sharesCount: '24.8K',
      likesCount: '98.5K',
      scriptExcerpt: 'Engineers just revealed a 14-millisecond tactile sensor loop. Here is why this changes manufacturing forever...',
      targetAudience: 'Hardware engineers, tech founders & early adopters'
    }
  },
  {
    id: 'hackonomics',
    name: 'Hackonomics',
    handle: '@hackonomics.ai',
    niche: 'Crypto, FinTech & Market Alpha',
    category: 'fintech',
    views: '6.8M',
    followers: '290K',
    engagement: '11.2%',
    monthlyVideos: 60,
    platforms: ['tiktok', 'instagram', 'youtube'],
    avatarImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    accentColor: 'emerald',
    bio: 'Daily macro finance breakdowns, on-chain liquidity anomalies, and institutional DeFi trading insights.',
    voiceName: 'Kaelen Studio',
    voiceStyle: 'Energetic, sharp financial analyst with Wall St pacing',
    languages: ['English', 'Spanish', 'Portuguese', 'Japanese'],
    featuredTopic: 'Global Liquidity Cycles & Stablecoin Yield Inversions',
    sampleReel: {
      title: 'Why the top 1% is quietly moving into tokenized treasuries',
      hook: '"A $40 Billion fund just rebalanced without telling the news..."',
      duration: '58s',
      viewsCount: '2.4M',
      sharesCount: '48.2K',
      likesCount: '184K',
      scriptExcerpt: 'Three treasury arbitrage vaults opened today. Let us break down the exact on-chain math in under 60 seconds...',
      targetAudience: 'Fintech users, investors, crypto traders & retail finance'
    }
  },
  {
    id: 'zara-zuevva',
    name: 'Zara Zuevva',
    handle: '@zaraazuevvaa',
    niche: 'Luxury Fashion & D2C Apparel',
    category: 'fashion',
    views: '5.1M',
    followers: '210K',
    engagement: '9.6%',
    monthlyVideos: 60,
    platforms: ['tiktok', 'instagram', 'youtube'],
    avatarImg: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
    accentColor: 'rose',
    bio: 'Capsule wardrobes, styling formulas, luxury fabric breakdowns, and viral seasonal trend predictions.',
    voiceName: 'Elena Silk',
    voiceStyle: 'Chic, conversational, modern high-fashion stylist',
    languages: ['English', 'Italian', 'French', 'Russian'],
    featuredTopic: 'Old-Money Aesthetic vs Micro-Trend Longevity',
    sampleReel: {
      title: '3 styling rules to make affordable basics look $2,000',
      hook: '"Stop buying new clothes until you know the 70/30 silhouette rule..."',
      duration: '39s',
      viewsCount: '1.8M',
      sharesCount: '62.4K',
      likesCount: '210K',
      scriptExcerpt: 'Texture contrast is the #1 secret designers use. Pair matte heavyweight cotton with silk or satin...',
      targetAudience: 'D2C shoppers, fashion enthusiasts & Gen Z / Millennial women'
    }
  },
  {
    id: 'adam-datadriven',
    name: 'Adam DataDriven',
    handle: '@adam.datadriven',
    niche: 'Health, Longevity & Biohacking',
    category: 'health',
    views: '3.4M',
    followers: '140K',
    engagement: '7.8%',
    monthlyVideos: 60,
    platforms: ['tiktok', 'instagram', 'youtube'],
    avatarImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    accentColor: 'sky',
    bio: 'Evidence-based longevity protocols, supplement biomarker tracking, and sleep optimization science.',
    voiceName: 'Lucas Precision',
    voiceStyle: 'Clinical yet friendly, data-oriented researcher',
    languages: ['English', 'Korean', 'Spanish'],
    featuredTopic: 'Deep REM Sleep Biomarkers & Cortisol Reduction',
    sampleReel: {
      title: 'What happens to your resting heart rate when you eat after 8 PM',
      hook: '"We analyzed 10,000 WHOOP and Oura ring nights to prove this..."',
      duration: '48s',
      viewsCount: '940K',
      sharesCount: '19.1K',
      likesCount: '78.2K',
      scriptExcerpt: 'Your digestive core temperature spikes 1.4 degrees, suppressing stage 3 deep sleep by 28%...',
      targetAudience: 'Wellness brands, supplement consumers & high performers'
    }
  },
  {
    id: 'kathryn-cross',
    name: 'Kathryn J. Cross',
    handle: '@kathrynjcross',
    niche: 'B2B SaaS & Growth Operations',
    category: 'b2b',
    views: '2.9M',
    followers: '95K',
    engagement: '6.9%',
    monthlyVideos: 60,
    platforms: ['youtube', 'instagram', 'tiktok'],
    avatarImg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    accentColor: 'amber',
    bio: 'Bootstrapped SaaS scaling frameworks, pipeline automation, and enterprise B2B sales psychology.',
    voiceName: 'Victoria Pro',
    voiceStyle: 'Executive, direct, strategic B2B operator',
    languages: ['English', 'Dutch', 'German'],
    featuredTopic: 'Outbound SDR Replacement with AI Video DMs',
    sampleReel: {
      title: 'How 1 SDR booked 48 enterprise demos in 2 weeks',
      hook: '"Cold text emails are at 1.2% reply rate. Here is what we replaced them with..."',
      duration: '52s',
      viewsCount: '620K',
      sharesCount: '14.5K',
      likesCount: '44K',
      scriptExcerpt: 'By generating personalized 20-second avatar videos for each inbound lead within 60 seconds of sign-up...',
      targetAudience: 'SaaS founders, VP of Sales, Revenue Ops leaders'
    }
  },
  {
    id: 'sigma-auto',
    name: 'Sigma Auto',
    handle: '@sigma.auto',
    niche: 'Automotive & Lifestyle Merch',
    category: 'lifestyle',
    views: '7.1M',
    followers: '340K',
    engagement: '12.4%',
    monthlyVideos: 60,
    platforms: ['tiktok', 'instagram', 'youtube'],
    avatarImg: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    accentColor: 'orange',
    bio: 'Supercar engineering breakdowns, track day modifications, and automotive accessories showcase.',
    voiceName: 'Cole Velocity',
    voiceStyle: 'High-octane, passionate automotive enthusiast',
    languages: ['English', 'Arabic', 'German', 'Italian'],
    featuredTopic: 'Twin-Turbo Aerodynamics & Titanium Exhaust Flow',
    sampleReel: {
      title: 'The engineering flaw that ruins 90% of aftermarket turbos',
      hook: '"Listen to this exhaust sound before you order that stage 2 kit..."',
      duration: '45s',
      viewsCount: '3.1M',
      sharesCount: '89.4K',
      likesCount: '340K',
      scriptExcerpt: 'Backpressure wave reflection can destroy your ceramic impeller blades in under 5,000 miles...',
      targetAudience: 'Auto enthusiasts, gearheads & aftermarket lifestyle buyers'
    }
  }
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    number: '01',
    title: 'Avatar DNA & Custom Identity',
    description: 'We engineer a bespoke hyper-realistic digital human or clone the likeness and voice of your founder/ambassador.',
    details: [
      'Photorealistic 4K facial rigging with micro-expression synthesis',
      'Studio voice cloning with emotional intonation & multi-lingual fluency',
      'Brand tone-of-voice lock, visual wardrobe styling & aesthetic rules'
    ],
    nodeType: 'Synthetic Identity Engine',
    metric: 'Zero Uncanny Valley'
  },
  {
    number: '02',
    title: 'Trend Radar & Viral Scriptwriting',
    description: 'Our system scans trending audio, viral formats, competitor hooks, and platform algorithms every Monday morning.',
    details: [
      'Continuous algorithmic monitoring of TikTok, IG Reels & YouTube Shorts',
      'High-retention 3-second hook formulas tailored to your exact niche',
      'Full monthly script batch delivered to your 1-click approval portal'
    ],
    nodeType: 'Trend Intelligence Core',
    metric: 'Weekly Fresh Hooks'
  },
  {
    number: '03',
    title: 'AI Production & Frame-by-Frame QC',
    description: 'We generate 60 unique videos/month per avatar, backed by human video editors for manual frame-by-frame polish.',
    details: [
      'Sub-millisecond audio-to-lip phoneme synchronization',
      'Human motion graphics, B-roll overlays, kinetic subtitles & SFX',
      'Quality control pass eliminating visual artifacts and unnatural pauses'
    ],
    nodeType: 'Hybrid Studio Pipeline',
    metric: '60 Unique 4K Videos / Mo'
  },
  {
    number: '04',
    title: 'Real-Device Farm Publishing',
    description: 'Videos are published directly from physical mobile devices equipped with unique cellular e-SIMs in target geolocations.',
    details: [
      'No bot API calls or third-party webhooks that trigger shadowbans',
      'Algorithmic post-timing optimization per timezone and audience peak',
      'Native in-app audio tagging, hashtags, and metadata optimization'
    ],
    nodeType: 'Hardware Device Farm',
    metric: '100% Native Mobile E-SIMs'
  },
  {
    number: '05',
    title: 'Funnel Attribution & Lead Generation',
    description: 'We transform viral organic views into measurable pipeline, email subscribers, and e-commerce conversions.',
    details: [
      'Link-in-bio UTM tracking and dedicated conversion landing pages',
      'Automated DM keyword triggers for instant lead capture',
      'Performance reporting with CAC savings vs traditional creator spend'
    ],
    nodeType: 'Attribution & Growth Matrix',
    metric: 'Attributable ROI'
  }
];

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: 'hyper-realistic-avatars',
    title: 'Hyper-Realistic Synthetic Avatars',
    description: 'Create unique digital personalities or digital clones of founders that look, speak, and emote with lifelike fidelity.',
    category: 'production',
    icon: 'Sparkles',
    highlights: [
      'Micro-expression & eye contact gaze tracking',
      'Dynamic lighting adaptation matching video background',
      '4K 60fps rendering without robotic stiffness'
    ],
    previewBadge: 'Photoreal Digital Humans',
    actionPreview: {
      inputLabel: 'Target Avatar Persona',
      inputValue: '"Zara" — 26yo Chic Paris Stylist with warm conversational tone',
      agentAction: 'Rigging 3D facial topology + synthesizing Studio Voice model',
      outputSummary: 'Ready for 60 monthly high-fashion video generation runs'
    }
  },
  {
    id: 'multilingual-localization',
    title: 'Instant Multilingual Voice Clones',
    description: 'Expand to global markets effortlessly. Your avatar speaks 25+ native languages with matched tone, accent, and perfect lip-sync.',
    category: 'technology',
    icon: 'Languages',
    highlights: [
      'Natural native accents in English, Spanish, German, French, Japanese, etc.',
      'Cultural idiom adaptation instead of literal translation',
      'Automatic multilingual subtitle & caption generation'
    ],
    previewBadge: 'Global Reach',
    actionPreview: {
      inputLabel: 'Source Video (English)',
      inputValue: '"3 mistakes people make with index funds"',
      agentAction: 'Synthesizing Spanish, German & Japanese audio with phoneme lip-match',
      outputSummary: '3 localized international shorts published simultaneously'
    }
  },
  {
    id: 'real-device-publishing',
    title: 'Real-Device Hardware Publishing Farm',
    description: 'We publish all reels and shorts using physical smartphones with dedicated carrier e-SIMs, completely avoiding platform shadowbans.',
    category: 'distribution',
    icon: 'Smartphone',
    highlights: [
      'Physical iOS & Android hardware executing native in-app uploads',
      'Dedicated residential IP and cellular e-SIM per account',
      'Zero third-party API flags or automated distribution penalties'
    ],
    previewBadge: 'Zero Shadowbans',
    actionPreview: {
      inputLabel: 'Publishing Queue Event',
      inputValue: 'Video #48: Scheduled for TikTok US West Coast 18:45 PST',
      agentAction: 'Physical iPhone #14 wakes, loads TikTok native app & uploads with trending audio',
      outputSummary: 'Verified published organically. Algorithmic trust: 100%'
    }
  },
  {
    id: 'trend-script-engine',
    title: 'Algorithmic Trend & Script Engine',
    description: 'Generate high-velocity scripts engineered specifically for short-form retention, 3-second hooks, and comment controversy.',
    category: 'production',
    icon: 'TrendingUp',
    highlights: [
      'Continuous TikTok and Instagram sound & format trend analysis',
      'Psychological retention hooks (pattern interrupts, curiosity gaps)',
      'Brand safety guardrails preventing off-brand statements'
    ],
    previewBadge: 'Viral Hook Matrix',
    actionPreview: {
      inputLabel: 'Weekly Trend Signal',
      inputValue: 'Trending Format: "The biggest lie told in [Industry]" (+340% velocity)',
      agentAction: 'Generates 5 tailored script variations calibrated to brand products',
      outputSummary: 'Sent to client dashboard for 1-click mobile sign-off'
    }
  },
  {
    id: 'approval-portal',
    title: '1-Click Client Approval Portal',
    description: 'Stay in complete editorial control. Review, edit, or approve scripts and video drafts in seconds from your phone or Slack.',
    category: 'technology',
    icon: 'ShieldCheck',
    highlights: [
      'Swipe-to-approve mobile review console',
      'Instant script regeneration with custom feedback notes',
      'Full governance escrow: nothing posts without your green light'
    ],
    previewBadge: 'Human Escrow Gateway',
    actionPreview: {
      inputLabel: 'Batch Pending Review',
      inputValue: '15 video drafts for Week 3 (D2C Summer Drops)',
      agentAction: 'Client signs off via Telegram/Slack notification in 30 seconds',
      outputSummary: 'Pipeline locked for automated daily distribution'
    }
  },
  {
    id: 'lead-dm-funnel',
    title: 'Conversational DM & Funnel Lead Capture',
    description: 'Turn comments into qualified buyers with automated conversational direct messages, tracking links, and CRM synchronization.',
    category: 'performance',
    icon: 'MessageSquareText',
    highlights: [
      'Trigger automated DM sequences when viewers comment target keywords',
      'Instant link delivery with unique attribution UTM tags',
      'Direct synchronization with HubSpot, Klaviyo, Shopify, and Google Sheets'
    ],
    previewBadge: 'Revenue Funnels',
    actionPreview: {
      inputLabel: 'Viewer Comment',
      inputValue: '"Where can I get this checklist?"',
      agentAction: 'Avatar account sends instant personalized DM with download link',
      outputSummary: 'Lead captured & added to Klaviyo nurture flow + Google Sheets'
    }
  }
];

export const TARGET_PERSONAS: PersonaItem[] = [
  {
    id: 'd2c-brands',
    title: 'D2C E-Commerce & Multi-Store Brands',
    description: 'Publish 60–180 product showcase videos, styling tips, unboxings, and trend reels monthly without booking studios or paying $5,000/video to human creators.',
    icon: 'ShoppingBag',
    keyBenefit: '60+ monthly UGC-style product videos on autopilot',
    idealFor: 'Shopify, Amazon, Etsy & TikTok Shop merchants scaling organic revenue'
  },
  {
    id: 'fintech-web3',
    title: 'FinTech, Web3 & Crypto Protocols',
    description: 'Build daily market authority and educate users on complex financial products with an always-on charismatic financial analyst avatar.',
    icon: 'Coins',
    keyBenefit: 'Daily market insights & alpha videos driving app downloads',
    idealFor: 'Crypto exchanges, DeFi protocols, neo-banks & investment apps'
  },
  {
    id: 'b2b-saas',
    title: 'B2B SaaS & Tech Startups',
    description: 'Transform boring software feature releases and case studies into high-retention short-form video that books qualified demos.',
    icon: 'Cpu',
    keyBenefit: 'Generate consistent inbound pipeline from YouTube Shorts & LinkedIn',
    idealFor: 'SaaS founders, VP Marketing & growth teams scaling pipeline'
  },
  {
    id: 'founders-creators',
    title: 'Founders, Executives & Solopreneurs',
    description: 'Clone yourself into a digital avatar to maintain an omnipresent personal brand across 3 platforms without spending 25 hours a week filming.',
    icon: 'UserCheck',
    keyBenefit: 'Omnipresent thought leadership with zero filming burnout',
    idealFor: 'Busy CEOs, agency owners, authors, and public figures'
  },
  {
    id: 'agencies-media',
    title: 'Marketing Agencies & Media Networks',
    description: 'Deliver full-service turnkey AI influencer campaigns for multiple clients with isolated brand personas, custom voices, and dedicated device farms.',
    icon: 'Building2',
    keyBenefit: 'Offer scalable AI influencer management with high client margins',
    idealFor: 'Performance marketing agencies and multi-client holding firms'
  }
];

export const TRANSFORMATION_POINTS = [
  {
    title: 'Content Velocity',
    description: 'Scale from sporadic posts to daily multi-platform domination.',
    before: 'Struggling to post 2-3 videos a week due to filming fatigue, editing bottlenecks, and scriptwriter delays.',
    after: '60 unique 4K videos per month per avatar (180 total platform publications on TikTok, IG Reels & YouTube Shorts).'
  },
  {
    title: 'Production Cost & Predictability',
    description: 'Eliminate expensive creator retainers and unpredictable invoices.',
    before: 'Paying $2,500–$10,000 per video to human influencers who miss deadlines and deliver mediocre hook retention.',
    after: 'Fraction of the cost with performance-driven pricing ("We Earn When You Earn") and guaranteed monthly volume.'
  },
  {
    title: 'IP & Brand Equity Ownership',
    description: 'Build a company-owned digital asset that never leaves.',
    before: 'Zero IP ownership — when a human brand ambassador quits or gets canceled, your audience equity vanishes with them.',
    after: '100% company-owned digital human asset whose audience, likeness, and revenue funnel belong permanently to your business.'
  },
  {
    title: 'Global Multilingual Reach',
    description: 'Speak natively to audiences in 25+ countries without hiring international actors.',
    before: 'Confined to a single English-speaking market due to language barriers and expensive translation teams.',
    after: 'One avatar seamlessly speaking native Spanish, German, French, Japanese, and Portuguese with perfect lip synchronization.'
  },
  {
    title: 'Platform Compliance & Safety',
    description: 'Publish from real hardware devices with individual cellular e-SIMs.',
    before: 'Risking shadowbans and algorithmic penalties by using third-party social API auto-posters.',
    after: '100% real physical mobile devices uploading organically from target country geolocations.'
  },
  {
    title: 'Direct Attributable Revenue',
    description: 'Connect viral video reach directly to bottom-line conversions.',
    before: 'Fluffy vanity metrics with zero clarity on how influencer reach translates into customer acquisition.',
    after: 'Integrated link-in-bio tracking, keyword DM automation, and CRM sync providing crystal-clear CAC telemetry.'
  }
];

export const INTEGRATION_CATEGORIES = [
  {
    category: 'Distribution Platforms',
    items: ['TikTok', 'Instagram Reels', 'YouTube Shorts', 'LinkedIn Video', 'X / Twitter', 'Threads', 'Facebook Reels'],
    icon: 'Globe2'
  },
  {
    category: 'AI Video & Voice Engines',
    items: ['ElevenLabs Voice AI', 'LivePortrait LipSync', 'OpenAI Sora / Runway', 'Midjourney V6', 'Whisper Turbo Subtitles'],
    icon: 'BrainCircuit'
  },
  {
    category: 'Workflow & Approval Layer',
    items: ['Telegram 1-Click Bot', 'Slack Review Channel', 'Google Sheets Live Sync', 'Notion Script Pipeline', 'Flexmerch Studio'],
    icon: 'FileSpreadsheet'
  },
  {
    category: 'CRM & Lead Conversion',
    items: ['HubSpot CRM', 'ManyChat DM Automation', 'Shopify Storefronts', 'Klaviyo Email Flows', 'Google Analytics 4', 'Triple Whale'],
    icon: 'TrendingUp'
  },
  {
    category: 'Real-Device Infrastructure',
    items: ['Physical iOS Hardware', 'Android Farm Nodes', 'Carrier e-SIM Matrix', 'Geo-Residential Proxies', 'Native Video Ingestion'],
    icon: 'Smartphone'
  },
  {
    category: 'Enterprise API & Webhooks',
    items: ['REST Webhooks', 'Model Context Protocol (MCP)', 'PostgreSQL / Cloud SQL', 'Zapier / Make', 'Custom CRM Endpoints'],
    icon: 'Code2'
  }
];

export const SUCCESS_STORIES: SuccessStoryItem[] = [
  {
    id: 'story-hackonomics',
    brandName: 'AlphaYield FinTech',
    industry: 'Crypto & FinTech',
    avatarName: 'Hackonomics',
    avatarHandle: '@hackonomics.ai',
    avatarImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    period: '90 Days',
    metrics: {
      views: '8.4M Views',
      cacReduction: '-64% CAC',
      leadsOrRevenue: '42,000 App Installs',
      contentVelocity: '180 Videos'
    },
    quote: 'We replaced our $25,000/month human influencer agency with our custom AI analyst @hackonomics.ai. We got 3x more views and our customer acquisition cost dropped from $18.40 down to $6.60.',
    author: 'Dmitri V.',
    role: 'Head of Growth, AlphaYield',
    tags: ['FinTech', 'TikTok & IG', 'Performance Split']
  },
  {
    id: 'story-zara',
    brandName: 'Maison Élan Paris',
    industry: 'D2C Luxury Apparel',
    avatarName: 'Zara Zuevva',
    avatarHandle: '@zaraazuevvaa',
    avatarImg: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
    period: '120 Days',
    metrics: {
      views: '14.2M Views',
      cacReduction: '-58% Paid Ad Spend',
      leadsOrRevenue: '$310,000 Attributable Sales',
      contentVelocity: '240 Videos'
    },
    quote: 'Zara produces 60 high-fashion styling lookbooks every single month. We never have to book photography studios or send samples to influencers who forget to post. The revenue from her link-in-bio is staggering.',
    author: 'Camille Laurent',
    role: 'Creative Director, Maison Élan',
    tags: ['D2C Fashion', 'Shopify Sync', 'TikTok Shop']
  },
  {
    id: 'story-b2b',
    brandName: 'CloudPipe Analytics',
    industry: 'B2B Enterprise SaaS',
    avatarName: 'Kathryn J. Cross',
    avatarHandle: '@kathrynjcross',
    avatarImg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    period: '60 Days',
    metrics: {
      views: '3.1M Views',
      cacReduction: '-49% Inbound CAC',
      leadsOrRevenue: '480 Enterprise Demos Booked',
      contentVelocity: '120 Videos'
    },
    quote: 'Kathryn publishes daily 45-second insights on LinkedIn and YouTube Shorts. It has become our #1 inbound lead generator for enterprise tier deals. Our sales reps use her clips in outbound sequences with insane reply rates.',
    author: 'Marcus Sterling',
    role: 'VP Marketing, CloudPipe',
    tags: ['B2B SaaS', 'YouTube Shorts', 'Lead Funnel']
  }
];

export const FAQ_LIST: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Overview',
    question: 'What is Flexmerch AI Avatars & Influencers?',
    answer: 'Flexmerch AI Avatars is a turnkey service that builds, operates, and scales custom AI influencers for your brand. We handle weekly trendwatching, viral scriptwriting, frame-by-frame video editing, and daily publishing from real devices to grow your audience and drive revenue 24/7 across TikTok, Instagram Reels, and YouTube Shorts.'
  },
  {
    id: 'faq-2',
    category: 'Production',
    question: 'How many videos will my avatar produce?',
    answer: 'Each avatar produces up to 60 unique 4K videos per month. Because each video is formatted and distributed across TikTok, Instagram Reels, and YouTube Shorts, that results in 180 multi-platform publications every month per avatar.'
  },
  {
    id: 'faq-3',
    category: 'Technology & Safety',
    question: 'How do you prevent platform shadowbans?',
    answer: 'We do NOT use third-party social API auto-posters or bots. Instead, our proprietary Real-Device Farm uses dedicated physical smartphones with unique cellular carrier e-SIMs and clean residential IPs. The platforms see genuine mobile app uploads from real devices.'
  },
  {
    id: 'faq-4',
    category: 'Workflow & Control',
    question: 'Do I have control over what the avatar says?',
    answer: 'Absolutely. We operate a strict Human-in-the-Loop Escrow Gateway. Every Monday, you receive the week’s script batch with hook concepts. You can approve with 1 click in Telegram, Slack, or our portal, or request instant revisions before production begins.'
  },
  {
    id: 'faq-5',
    category: 'Cloning vs Synthetic',
    question: 'Can you clone my founder’s voice and face, or create an entirely new persona?',
    answer: 'Both! We can clone your CEO or team member using high-definition training footage (with full consent and legal release), or design a completely synthetic 100% original digital persona tailored specifically to your target demographic.'
  },
  {
    id: 'faq-6',
    category: 'Pricing & Pilot',
    question: 'How does the performance-based pricing model work?',
    answer: 'We operate on a "We Earn When You Earn" performance philosophy. For qualified brands in our Pilot Program, there are zero upfront fixed fees: we establish your baseline Customer Acquisition Cost (CAC), and when our AI influencer delivers customers at a lower cost, we split the savings 50/50.'
  },
  {
    id: 'faq-7',
    category: 'IP & Rights',
    question: 'Who owns the avatar IP, likeness, and video files?',
    answer: 'You own 100% of the intellectual property, avatar likeness, raw video masters, and channel assets. Unlike human creators who can walk away with your audience, your AI influencer is a permanent digital asset on your company’s balance sheet.'
  },
  {
    id: 'faq-8',
    category: 'Multilingual',
    question: 'Can our avatar speak multiple languages?',
    answer: 'Yes! Your avatar can speak over 25 languages natively (Spanish, German, French, Portuguese, Japanese, Italian, etc.) with identical voice timbre, emotional cadence, and frame-accurate lip-syncing.'
  }
];

export const FAQ_ITEMS = FAQ_LIST;

export const FOUNDING_BENEFITS = [
  'Zero upfront cost pilot with 50/50 CAC savings split',
  '1 to 3 custom-engineered AI avatars tailored to your brand niche',
  '60 unique 4K videos per month per avatar (180 platform publications)',
  'Dedicated Real-Device Farm with unique carrier e-SIMs',
  'Weekly trend analysis & high-retention viral scriptwriting',
  'Full frame-by-frame human QA and kinetic motion subtitles',
  'Automated DM keyword funnels & Google Sheets live pipeline sync',
  '100% company ownership of avatar IP, likeness, and video assets'
];
