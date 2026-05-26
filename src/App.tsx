import { useState } from 'react';
import { Layout } from './components/Layout';
import { GearSection } from './components/GearSection';
import { LightingSection } from './components/LightingSection';
import { SoftwareSection } from './components/SoftwareSection';
import { ChecklistSection } from './components/ChecklistSection';
import { TroubleshootingSection } from './components/TroubleshootingSection';
import { FAQSection } from './components/FAQSection';
import { ContentAISystem } from './components/ContentAISystem';
import { SmartPricingSystem } from './components/SmartPricingSystem';
import { LivestreamShowcasePage } from './pages/LivestreamShowcasePage';

export type TabId = 'gear' | 'lighting' | 'software' | 'checklist' | 'trouble' | 'showcase' | 'faq' | 'content_ai' | 'pricing';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('gear');

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab}>
      {activeTab === 'showcase' ? (
        <LivestreamShowcasePage onExit={() => setActiveTab('gear')} />
      ) : (
        <div className="w-full h-full overflow-y-auto dark-scrollbar px-6 py-8 lg:px-12 lg:py-10">
          <div className="animate-fade-in w-full" key={activeTab}>
            {activeTab === 'gear' && <GearSection />}
            {activeTab === 'lighting' && <LightingSection />}
            {activeTab === 'software' && <SoftwareSection />}
            {activeTab === 'checklist' && <ChecklistSection />}
            {activeTab === 'trouble' && <TroubleshootingSection />}
            {activeTab === 'faq' && <FAQSection />}
            {activeTab === 'content_ai' && <ContentAISystem />}
            {activeTab === 'pricing' && <SmartPricingSystem />}
          </div>
        </div>
      )}
    </Layout>
  );
}
