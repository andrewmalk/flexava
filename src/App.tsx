import React, { useState } from 'react';
import { DynamicBackground } from './components/DynamicBackground';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { OperatingProofSection } from './components/OperatingProofSection';
import { AvatarShowcaseSection } from './components/AvatarShowcaseSection';
import { ComparisonSection } from './components/ComparisonSection';
import { BenchmarksSection } from './components/BenchmarksSection';
import { LiveTrackerSection } from './components/LiveTrackerSection';
import { TrustedBySection } from './components/TrustedBySection';
import { RoiCalculatorSection } from './components/RoiCalculatorSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { LiveDashboardSection } from './components/LiveDashboardSection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { WhoItsForSection } from './components/WhoItsForSection';
import { TransformationSection } from './components/TransformationSection';
import { WhyUsSection } from './components/WhyUsSection';
import { SuccessStoriesSection } from './components/SuccessStoriesSection';
import { VisionSection } from './components/VisionSection';
import { FoundingProgramSection } from './components/FoundingProgramSection';
import { WaitlistSection } from './components/WaitlistSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { GoogleSheetsSyncModal } from './components/GoogleSheetsSyncModal';

export default function App() {
  const [isSheetsModalOpen, setIsSheetsModalOpen] = useState(false);

  const scrollToWaitlist = () => {
    const el = document.getElementById('waitlist');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col selection:bg-indigo-600 selection:text-white">
      {/* Dynamic Ambient Background Canvas & Floating Gradients */}
      <DynamicBackground />

      {/* 1. Announcement Bar */}
      <AnnouncementBar onJoinClick={scrollToWaitlist} />

      {/* 2. Header */}
      <Navbar onJoinClick={scrollToWaitlist} onOpenSheets={() => setIsSheetsModalOpen(true)} />

      {/* Main Page Body with all sections in structured sequence */}
      <main className="flex-1">
        {/* 3. Hero + Hero Visual */}
        <HeroSection onJoinClick={scrollToWaitlist} />

        {/* 4. Operating Proof Bar */}
        <OperatingProofSection />

        {/* 5. Live AI Avatars Fleet Showcase */}
        <AvatarShowcaseSection onJoinClick={scrollToWaitlist} />

        {/* 6. Traditional Creators vs. Brand-Owned AI Avatars Comparison */}
        <ComparisonSection onJoinClick={scrollToWaitlist} />

        {/* 7. Expected Benchmarks & Growth Trajectory */}
        <BenchmarksSection onJoinClick={scrollToWaitlist} />

        {/* 8. The Problem with Human Creator Operations */}
        <ProblemSection />

        {/* 9. The 8-Pillar Solution Architecture */}
        <SolutionSection onJoinClick={scrollToWaitlist} />

        {/* 10. Turnkey 5-Step Production Pipeline */}
        <HowItWorksSection onJoinClick={scrollToWaitlist} />

        {/* 11. Core Platform Capabilities */}
        <CapabilitiesSection />

        {/* 12. Live Client Analytics Dashboard Preview */}
        <LiveDashboardSection onJoinClick={scrollToWaitlist} />

        {/* 13. Physical Hardware Farm & Anti-Ban Architecture */}
        <ArchitectureSection onOpenSyncModal={() => setIsSheetsModalOpen(true)} />

        {/* 14. Target Verticals & Personas */}
        <WhoItsForSection onJoinClick={scrollToWaitlist} />

        {/* 15. Operational Transformation Matrix */}
        <TransformationSection />

        {/* 16. Interactive Video Output & ROI Calculator */}
        <RoiCalculatorSection onJoinClick={scrollToWaitlist} />

        {/* 17. Why Flexmerch.AI */}
        <WhyUsSection />

        {/* 18. Verified Pilot Brand Case Studies */}
        <SuccessStoriesSection onJoinClick={scrollToWaitlist} />

        {/* 19. The Autonomous Brand Vision */}
        <VisionSection />

        {/* 20. Founding Pilot Program & Terms */}
        <FoundingProgramSection onJoinClick={scrollToWaitlist} />

        {/* 21. Application & Onboarding Waitlist */}
        <WaitlistSection />

        {/* 22. Frequently Asked Questions */}
        <FaqSection />

        {/* 23. Final Conversion CTA */}
        <FinalCtaSection onJoinClick={scrollToWaitlist} />
      </main>

      {/* 24. Footer */}
      <Footer onJoinClick={scrollToWaitlist} />

      {/* Global Google Sheets Manager Modal */}
      <GoogleSheetsSyncModal 
        isOpen={isSheetsModalOpen} 
        onClose={() => setIsSheetsModalOpen(false)} 
      />
    </div>
  );
}
