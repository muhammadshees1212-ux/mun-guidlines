import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HdsDirectory } from './components/HdsDirectory';
import { RulesArchive } from './components/RulesArchive';
import { DocumentLibrary } from './components/DocumentLibrary';
import { ParliamentaryChat } from './components/ParliamentaryChat';
import { MotionCalculator } from './components/MotionCalculator';
import { PrecedenceMatrix } from './components/PrecedenceMatrix';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('archive');
  const [pendingCitationRuleId, setPendingCitationRuleId] = useState<string | null>(null);

  const handleOpenChatWithCitation = (ruleId: string) => {
    setPendingCitationRuleId(ruleId);
    setActiveTab('chat');
    const chatElement = document.getElementById('parliamentary-chat');
    if (chatElement) {
      chatElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string, tabName: string) => {
    setActiveTab(tabName);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      {/* Sticky Navigation */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Hero Header */}
      <HeroSection
        onExploreRules={() => scrollToSection('rules-archive', 'archive')}
        onExploreDocs={() => scrollToSection('documents-library', 'documents')}
        onOpenChat={() => scrollToSection('parliamentary-chat', 'chat')}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Searchable Archive of Rules */}
        <RulesArchive 
          onOpenChatWithCitation={handleOpenChatWithCitation} 
        />

        {/* Downloadable Documents & Templates */}
        <DocumentLibrary />

        {/* Parliamentary Procedure Discussion & Chatting Chamber */}
        <ParliamentaryChat
          initialRuleCitation={pendingCitationRuleId}
          onClearInitialCitation={() => setPendingCitationRuleId(null)}
        />

        {/* Head Delegates (HDs) Directory */}
        <HdsDirectory />

        {/* Interactive Motion Calculator */}
        <MotionCalculator />

        {/* Order of Precedence Matrix */}
        <PrecedenceMatrix />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
