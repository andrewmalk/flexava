import React from 'react';
import { 
  Quote, 
  Star, 
  Building2, 
  Store, 
  Printer, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck,
  Layers,
  Sparkles,
  ShoppingBag,
  Cpu,
  Globe2,
  Workflow,
  Boxes,
  Zap
} from 'lucide-react';
import { motion } from 'motion/react';

export const TrustedBySection: React.FC = () => {
  const partnerLogos = [
    { name: 'Apex Commerce Labs', category: 'Scale Agency', icon: Building2, tag: '38 Brands' },
    { name: 'SwiftPrint Global', category: 'POD Network', icon: Printer, tag: '2 Facilities' },
    { name: 'Nordic Merch Group', category: 'Multi-Store Ops', icon: Store, tag: '45 Stores' },
    { name: 'Vanguard DTC', category: 'Portfolio Group', icon: ShoppingBag, tag: '120k SKUs' },
    { name: 'Artisan Crafted Co.', category: 'Power Merchant', icon: Layers, tag: '18 Shops' },
    { name: 'MerchCore Logistics', category: 'Supply Chain', icon: Boxes, tag: 'Global Routing' },
    { name: 'OmniBrand Systems', category: 'E-com Group', icon: Globe2, tag: 'Cross-Border' },
    { name: 'Velocity Decorators', category: 'DTG / DTF Partner', icon: Cpu, tag: 'High-Mix Print' },
  ];

  const testimonials = [
    {
      quote: "Managing 42 Etsy & Shopify stores used to mean 6 people copying titles, formatting tags, and tracking print errors across messy Google Sheets. Flexmerch.AI's persistent store memory and listing engine reduced our rollout time from 4 days to 15 minutes.",
      author: "Marcus Vance",
      role: "Managing Director",
      company: "Nordic Merch Group",
      metrics: "45 Active Stores • 6.4x Launch Velocity",
      icon: Store,
      rating: 5
    },
    {
      quote: "As a contract decorator pushing 4,000+ personalized units a day at peak, wrong DPI specs and broken raster cutlines used to kill our production floor. The automated print-ready rasterizer and smart facility routing make this the first OS actually built for high-mix manufacturing.",
      author: "Elena Rostova",
      role: "VP of Operations",
      company: "SwiftPrint Global",
      metrics: "5,000 Units/Day Peak • 99.8% Spec Accuracy",
      icon: Printer,
      rating: 5
    },
    {
      quote: "We run product research and catalog scaling for 14 enterprise clients. Flexmerch.AI lets us give each client an isolated brand knowledge layer while automating multi-channel listings with human escrow sign-off. It's the ultimate unfair advantage.",
      author: "David Chen",
      role: "Founder & Head of Growth",
      company: "Apex Commerce Labs",
      metrics: "38 Managed Brands • Zero Brand Drift",
      icon: Building2,
      rating: 5
    }
  ];

  return (
    <motion.section
      id="trusted-by"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative py-18 lg:py-24 bg-white/85 backdrop-blur-xs border-b border-slate-200/80 overflow-hidden"
    >
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-indigo-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider font-mono shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>OPERATOR TRUST & PILOT VALIDATION</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted by founding e-commerce operators & production leaders
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            Validated by multi-store sellers, print-on-demand manufacturers, and e-commerce agencies preparing for private beta deployment.
          </p>
        </div>

        {/* Testimonials Grid with Stagger */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] } },
              }}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-indigo-300 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between group shadow-sm"
            >
              <div>
                {/* Rating & Top Row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, rIdx) => (
                      <Star key={rIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:scale-105 transition-transform shadow-2xs">
                    <Quote className="w-4 h-4" />
                  </div>
                </div>

                {/* Quote Content */}
                <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Operational Metrics Footer */}
              <div className="pt-4 border-t border-slate-200 space-y-2">
                <div>
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <span>{item.author}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                  </div>
                  <div className="text-xs text-slate-500">
                    {item.role}, <strong className="text-slate-700">{item.company}</strong>
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-emerald-50/80 border border-emerald-200 text-[11px] font-mono text-emerald-800 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate font-semibold">{item.metrics}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Infinite Horizontal Carousel of Partner Logos */}
        <div className="relative pt-6 border-t border-slate-200">
          <div className="flex items-center justify-between mb-6 px-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-600">
                Partner Ecosystem & Pilot Merchant Networks
              </span>
            </div>
            <span className="text-[10px] font-mono text-slate-500 hidden sm:inline-block">
              Hover to pause stream
            </span>
          </div>

          {/* Carousel Track with Left & Right Gradient Masking */}
          <div className="relative w-full overflow-hidden rounded-2xl bg-slate-50 border border-slate-200 py-6">
            {/* Left fade gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />
            {/* Right fade gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />

            {/* Seamless Double Loop */}
            <div className="animate-marquee flex items-center gap-5">
              {[...partnerLogos, ...partnerLogos].map((partner, index) => {
                const IconComponent = partner.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3.5 px-5 py-3 rounded-xl bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-sm transition-all duration-200 shrink-0 group cursor-default shadow-2xs"
                  >
                    <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:text-white group-hover:bg-indigo-600 transition-colors shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col text-left">
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-indigo-900 whitespace-nowrap transition-colors">
                          {partner.name}
                        </span>
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-100 whitespace-nowrap font-bold">
                          {partner.tag}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono tracking-tight font-medium">
                        {partner.category}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
