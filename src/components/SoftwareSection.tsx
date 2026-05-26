import { useState } from 'react';

const EncoderCard: React.FC<{ name: string; desc: string; bestFor: string; icon: string }> = ({ name, desc, bestFor, icon }) => (
  <div className="glass-card p-6 rounded-3xl flex flex-col h-full">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-xl bg-white/[0.04] flex items-center justify-center">
        <span className="material-symbols-outlined text-blue-400 text-xl">{icon}</span>
      </div>
      <span className="text-xs font-bold text-white uppercase tracking-widest">{name}</span>
    </div>
    <p className="text-[11px] text-white/40 leading-relaxed font-medium mb-6 flex-1">{desc}</p>
    <div className="pt-4 border-t border-white/[0.06]">
      <span className="text-[9px] font-bold text-[#444] uppercase tracking-widest block mb-1">Cấu hình khuyên dùng:</span>
      <span className="text-[10px] font-bold text-blue-300 uppercase tracking-tight">{bestFor}</span>
    </div>
  </div>
);

export const SoftwareSection: React.FC = () => {
  const [subTab, setSubTab] = useState<'obs' | 'audio' | 'tiktok'>('obs');

  return (
    <div className="space-y-12 pb-20 w-full">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/[0.06] pb-10">
        <div className="max-w-2xl">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Trung Tâm Điều Hành</h2>
          <p className="text-white/40 text-base leading-relaxed font-medium">
            Thiết lập luồng phát chuẩn 1080x1920 60FPS. Cấu hình tối ưu cho phần cứng máy tính và đường truyền Internet tại Việt Nam.
          </p>
        </div>
        <div className="flex bg-white/[0.03] border border-white/[0.06] rounded-2xl p-1.5 gap-1 self-start lg:self-auto shrink-0 overflow-x-auto no-scrollbar">
          {(['obs', 'audio', 'tiktok'] as const).map((tab) => (
            <button 
              key={tab}
              onClick={() => setSubTab(tab)}
              className={`px-8 py-3 rounded-xl text-[11px] font-bold tracking-widest uppercase transition-all whitespace-nowrap ${
                subTab === tab ? (tab === 'tiktok' ? 'bg-[#ff0050] text-white shadow-xl' : 'bg-white text-black shadow-xl') : 'text-[#666] hover:text-white/60'
              }`}
            >
              {tab === 'obs' ? 'Cấu hình OBS' : tab === 'audio' ? 'Audio Chain' : 'TikTok Live Studio'}
            </button>
          ))}
        </div>
      </div>

      {subTab === 'obs' && (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 animate-fade-in">
          <div className="xl:col-span-2 space-y-8">
            {/* Output Panel */}
            <div className="glass-card rounded-[40px] p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-500">settings_suggest</span>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">Cấu hình Output (Stream)</h3>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                {[
                  { label: "Rate Control", val: "CBR", sub: "Constant Bitrate" },
                  { label: "Bitrate", val: "8000 Kbps", sub: "For 1080p 60fps" },
                  { label: "Keyframe", val: "2.0s", sub: "TikTok Standard" },
                  { label: "Preset", val: "P6 / P7", sub: "High Quality" },
                ].map((item, i) => (
                  <div key={i} className="p-5 bg-white/[0.03] rounded-2xl border border-white/[0.06] flex flex-col gap-1">
                    <span className="text-[9px] font-bold text-white/20 uppercase tracking-[0.2em]">{item.label}</span>
                    <span className="text-xl font-bold text-white/90">{item.val}</span>
                    <span className="text-[9px] font-medium text-[#444] italic">{item.sub}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <EncoderCard name="NVIDIA NVENC" desc="Xử lý bằng nhân đồ họa chuyên dụng, giảm tải tuyệt đối cho CPU." bestFor="RTX 2060 trở lên" icon="memory" />
                <EncoderCard name="x264 (CPU)" desc="Nén bằng thuật toán phần mềm, chất lượng tốt nhất nếu CPU mạnh." bestFor="i9 / Ryzen 9" icon="developer_board" />
                <EncoderCard name="QuickSync" desc="Sử dụng iGPU Intel, giải pháp cân bằng cho laptop creator." bestFor="Intel Gen 12+" icon="bolt" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card rounded-[40px] p-8 space-y-8">
              <h4 className="text-[10px] font-bold text-[#666] uppercase tracking-[0.2em] mb-4">Diagnostics Console</h4>
              {[
                { title: "Network Lag", col: "red", desc: "Dropped Frames: Kiểm tra lại Router hoặc hạ Bitrate." },
                { title: "Encoder Lag", col: "yellow", desc: "Skipped Frames: Giảm Preset hoặc đổi sang NVENC." },
                { title: "Render Lag", col: "purple", desc: "Lagged Frames: Chạy OBS bằng quyền Admin ngay." },
              ].map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      item.col === 'red' ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]' :
                      item.col === 'yellow' ? 'bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]' :
                      'bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.5)]'
                    }`}></div>
                    <h5 className="text-[11px] font-bold text-white/80 uppercase">{item.title}</h5>
                  </div>
                  <p className="text-[11px] text-white/40 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="p-8 rounded-[40px] bg-gradient-to-br from-blue-600/10 to-transparent border border-blue-500/10">
              <span className="material-symbols-outlined text-blue-400 mb-4">info</span>
              <p className="text-xs text-white/50 leading-relaxed font-medium">
                Sử dụng <strong>Dynamic Bitrate</strong> trong cài đặt Advanced giúp tự động hạ chất lượng thay vì rớt luồng khi mạng chập chờn.
              </p>
            </div>
          </div>
        </div>
      )}

      {subTab === 'audio' && (
        <div className="glass-card rounded-[40px] p-8 lg:p-10 animate-fade-in">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-orange-500">graphic_eq</span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">Audio Signal Chain</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { icon: 'mic', name: 'Sony C-80', desc: 'Condenser Mic', detail: 'Phantom 48V Required' },
              { icon: 'cable', name: 'XLR Cable', desc: 'Balanced Audio', detail: 'Canare / Mogami' },
              { icon: 'equalizer', name: 'Wave XLR', desc: 'Audio Interface', detail: 'Gain: 32dB' },
              { icon: 'computer', name: 'PC / OBS', desc: 'Final Output', detail: '48kHz / 128kbps' },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="glass-card p-6 rounded-2xl text-center">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.05] flex items-center justify-center mx-auto mb-4">
                    <span className="material-symbols-outlined text-orange-400">{item.icon}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">{item.name}</h4>
                  <p className="text-[10px] text-white/40 font-medium">{item.desc}</p>
                  <p className="text-[9px] text-orange-400/60 font-bold uppercase mt-2">{item.detail}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 text-white/20">
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {subTab === 'tiktok' && (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 animate-fade-in">
          <div className="glass-card rounded-[40px] p-8 lg:p-10">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-2xl bg-[#ff0050]/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#ff0050] text-2xl">music_video</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Thiết lập TikTok Live Studio</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="p-6 bg-white/[0.03] rounded-3xl border border-white/[0.06]">
                <h4 className="text-xs font-bold text-white/20 uppercase tracking-widest mb-4">Video Feed</h4>
                <ul className="space-y-4">
                  <li className="flex justify-between border-b border-white/[0.06] pb-3">
                    <span className="text-xs text-white/60">Resolution</span>
                    <span className="text-xs font-bold">1080x1920</span>
                  </li>
                  <li className="flex justify-between border-b border-white/[0.06] pb-3">
                    <span className="text-xs text-white/60">Orientation</span>
                    <span className="text-xs font-bold">Portrait</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-xs text-white/60">Bitrate</span>
                    <span className="text-xs font-bold">6000 Kbps</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-white/[0.03] rounded-3xl border border-white/[0.06]">
                <h4 className="text-xs font-bold text-white/20 uppercase tracking-widest mb-4">Audio Config</h4>
                <ul className="space-y-4">
                  <li className="flex justify-between border-b border-white/[0.06] pb-3">
                    <span className="text-xs text-white/60">Sample Rate</span>
                    <span className="text-xs font-bold">48 kHz</span>
                  </li>
                  <li className="flex justify-between border-b border-white/[0.06] pb-3">
                    <span className="text-xs text-white/60">Bitrate</span>
                    <span className="text-xs font-bold">128 Kbps</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-xs text-white/60">Channel</span>
                    <span className="text-xs font-bold">Mono/Stereo</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="p-6 bg-[#ff0050]/5 rounded-[32px] border border-[#ff0050]/10 flex items-start gap-4">
              <span className="material-symbols-outlined text-[#ff0050]">lightbulb</span>
              <p className="text-xs text-white/60 leading-relaxed font-medium">
                TikTok Studio nhận diện Sony Camera tốt nhất thông qua <strong>Capture Card (HDMI)</strong> hoặc <strong>Virtual Cam</strong> từ OBS để có bộ filter làm đẹp chuyên nghiệp.
              </p>
            </div>
          </div>

          <div className="glass-card rounded-[40px] p-8 lg:p-10 flex flex-col justify-center items-center text-center">
            <div className="max-w-sm">
              <div className="w-20 h-20 rounded-[32px] bg-white/[0.04] flex items-center justify-center mx-auto mb-8 border border-white/[0.1]">
                <span className="material-symbols-outlined text-4xl text-white/20">admin_panel_settings</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-4 tracking-tight">Run as Administrator</h4>
              <p className="text-sm text-white/40 leading-relaxed font-medium mb-8">
                Để TikTok Live Studio không bị treo hình khi đang Live, luôn khởi chạy ứng dụng bằng quyền Administrator để Windows ưu tiên tài nguyên.
              </p>
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] inline-block">
                <code className="text-xs text-blue-300 font-mono">Right Click -&gt; Run as Administrator</code>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
