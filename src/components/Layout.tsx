import type { ReactNode } from 'react';
import type { TabId } from '../App';

interface LayoutProps {
  children: ReactNode;
  activeTab: string;
  onTabChange: (tab: TabId) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeTab, onTabChange }) => {
  const tabs = [
    { id: 'gear', label: 'Hệ Thống Thiết Bị', icon: 'photo_camera', sub: 'Camera & Combo' },
    { id: 'lighting', label: 'Nghệ Thuật Ánh Sáng', icon: 'flare', sub: '3-Point & Mood' },
    { id: 'software', label: 'Trung Tâm Điều Hành', icon: 'terminal', sub: 'OBS & Audio' },
    { id: 'content_ai', label: 'Sáng Tạo Nội Dung AI', icon: 'psychology_alt', sub: 'Gemini Scripting', highlight: true },
    { id: 'advisor', label: 'Trợ Lý Tư Vấn AI', icon: 'assistant', sub: 'Gemini Advisor', highlight: true },
    { id: 'pricing', label: 'Báo Giá Thông Minh', icon: 'receipt_long', sub: 'Smart Invoice & PDF', highlight: true },
    { id: 'checklist', label: 'Quy Trình Vận Hành', icon: 'assignment_turned_in', sub: 'Standard Checklist' },
    { id: 'trouble', label: 'Trung Tâm Giải Nguy', icon: 'build', sub: 'Fix it fast' },
    { id: 'faq', label: 'Tri Thức Chuyên Gia', icon: 'psychology', sub: 'Expert Insights' },
    { id: 'showcase', label: 'Sony Showcase', icon: 'auto_awesome', sub: 'Virtual Tour' },
  ];

  const currentTab = tabs.find(t => t.id === activeTab);

  return (
    <div className="flex h-screen w-screen bg-[#080808] overflow-hidden text-[#e8eaed]">
      {/* Sidebar */}
      <div className="w-[280px] lg:w-[320px] border-r border-white/[0.06] flex flex-col shrink-0 bg-[#080808] z-20">
        <div className="p-8 pb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="relative">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
              <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-red-500 animate-ping opacity-75"></div>
            </div>
            <span className="text-[11px] font-bold tracking-[0.3em] text-[#666] uppercase">Master Console</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight">
            Sony <span className="text-white/30 font-medium italic">Pro Studio</span>
          </h1>
        </div>

        <nav className="flex-1 px-4 space-y-1.5 overflow-y-auto dark-scrollbar pb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id as TabId)}
              className={`w-full group flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 relative ${
                activeTab === tab.id 
                ? 'bg-white/[0.06] text-white shadow-[0_4px_20px_rgba(0,0,0,0.4)]' 
                : 'text-[#666] hover:bg-white/[0.03] hover:text-white/80'
              }`}
            >
              <span className={`material-symbols-outlined text-[24px] transition-all duration-300 ${activeTab === tab.id ? 'scale-110 text-white' : 'group-hover:text-white/60'} ${tab.highlight && activeTab !== tab.id ? 'text-purple-500/50' : ''}`}>
                {tab.icon}
              </span>
              <div className="flex flex-col items-start text-left">
                <span className={`text-[13px] font-bold tracking-wide transition-colors ${activeTab === tab.id ? 'text-white' : 'group-hover:text-white/80'} ${tab.highlight && activeTab !== tab.id ? 'text-purple-300/80' : ''}`}>{tab.label}</span>
                <span className="text-[10px] opacity-40 font-medium tracking-tight uppercase">{tab.sub}</span>
              </div>
            </button>
          ))}
        </nav>

        <div className="p-6 space-y-4">
          <div className="bg-gradient-to-br from-white/[0.04] to-transparent rounded-[24px] p-5 border border-white/[0.04] backdrop-blur-md">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Live Support</span>
              <div className="px-2 py-0.5 bg-green-500/10 rounded-full">
                <span className="text-[9px] font-bold text-green-500 uppercase">Online</span>
              </div>
            </div>
            <p className="text-[11px] text-white/40 leading-relaxed font-medium">
              Sony Pro Studio Master Console — Phiên bản Local Development.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 relative flex flex-col min-w-0 bg-[#080808]">
        {/* Dynamic Top Header */}
        <div className="h-20 lg:h-24 px-6 lg:px-12 flex items-center justify-between border-b border-white/[0.06] bg-[#080808]/80 backdrop-blur-xl z-10 shrink-0">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-[#333] text-2xl">{currentTab?.icon}</span>
            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">{currentTab?.label}</h2>
              <p className="text-[10px] text-[#666] font-bold uppercase tracking-widest">{currentTab?.sub}</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-bold text-[#444] uppercase tracking-tighter">Resolution</span>
              <span className="text-[11px] font-bold text-white/60">1080x1920 @ 60FPS</span>
            </div>
            <div className="w-px h-8 bg-white/[0.06]"></div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/[0.03] rounded-full border border-white/[0.06]">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
              <span className="text-[11px] font-bold text-white/60">Standard Workflow</span>
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="flex-1 relative overflow-hidden">
          {children}
        </div>
      </main>
    </div>
  );
};
