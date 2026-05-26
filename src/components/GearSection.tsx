import { useState } from 'react';

const ComboCard: React.FC<{
  type: string;
  title: string;
  priceRange: string;
  description: string;
  items: string[];
  icon: string;
  color: string;
}> = ({ type, title, priceRange, description, items, icon, color }) => (
  <div className="glass-card rounded-[32px] p-8 flex flex-col h-full group relative overflow-hidden">
    <div className={`absolute top-0 right-0 w-32 h-32 blur-[60px] opacity-10 transition-opacity group-hover:opacity-20 ${color}`}></div>
    
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10 ${color}`}>
      <span className="material-symbols-outlined text-white text-2xl">{icon}</span>
    </div>
    
    <div className="mb-8 relative z-10">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#666]">{type}</span>
        <div className="h-px flex-1 bg-white/[0.06]"></div>
      </div>
      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white/90 transition-colors">{title}</h3>
      <p className="text-sm text-white/40 leading-relaxed font-medium">{description}</p>
    </div>
    
    <div className="flex-1 space-y-4 mb-10 relative z-10">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-4">
          <div className="w-5 h-5 rounded-full bg-white/[0.05] flex items-center justify-center shrink-0 mt-0.5">
            <span className="material-symbols-outlined text-[14px] text-white/40">done</span>
          </div>
          <span className="text-xs text-white/70 font-medium leading-relaxed">{item}</span>
        </div>
      ))}
    </div>
    
    <div className="pt-8 border-t border-white/[0.06] flex items-center justify-between relative z-10">
      <div className="flex flex-col">
        <span className="text-[9px] font-bold text-[#444] uppercase tracking-widest">Dự kiến đầu tư</span>
        <span className="text-sm font-bold text-white/90">{priceRange}</span>
      </div>
      <button className="h-10 px-5 rounded-xl bg-white/[0.05] border border-white/[0.06] text-[10px] font-bold text-white/40 uppercase tracking-widest hover:bg-white hover:text-black transition-all">
        Thông số
      </button>
    </div>
  </div>
);

export const GearSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'combos' | 'individual'>('combos');

  return (
    <div className="space-y-12 pb-20 w-full">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/[0.06] pb-10">
        <div className="max-w-2xl">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Hệ Thống Thiết Bị Sony</h2>
          <p className="text-white/40 text-base leading-relaxed font-medium">
            Tối ưu hóa quy trình từ khởi đầu đến chuyên nghiệp. Lựa chọn hệ sinh thái Sony để có chất lượng hình ảnh và lấy nét tốt nhất hiện nay.
          </p>
        </div>
        <div className="flex bg-white/[0.03] border border-white/[0.06] rounded-2xl p-1.5 gap-1 self-start lg:self-auto">
          <button 
            onClick={() => setViewMode('combos')}
            className={`px-8 py-3 rounded-xl text-[11px] font-bold tracking-widest uppercase transition-all ${viewMode === 'combos' ? 'bg-white text-black shadow-xl' : 'text-[#666] hover:text-white/60'}`}
          >
            Giải pháp Combo
          </button>
          <button 
            onClick={() => setViewMode('individual')}
            className={`px-8 py-3 rounded-xl text-[11px] font-bold tracking-widest uppercase transition-all ${viewMode === 'individual' ? 'bg-white text-black shadow-xl' : 'text-[#666] hover:text-white/60'}`}
          >
            Linh kiện lẻ
          </button>
        </div>
      </div>

      {viewMode === 'combos' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          <ComboCard 
            type="Lite Edition"
            title="Sáng Tạo Nội Dung"
            priceRange="35.000.000đ - 45.000.000đ"
            description="Dành cho Creators bắt đầu làm quen với Livestream 4K, nhỏ gọn và dễ sử dụng."
            icon="auto_videocam"
            color="bg-blue-600"
            items={[
              "Body Sony ZV-E10 II + Lens Kit 16-50mm",
              "Mic Wireless Sony ECM-S1 (Type-C)",
              "Đèn Nanlite FS-60B + Softbox 60cm",
              "Phần mềm Sony Imaging Edge Webcam"
            ]}
          />
          <ComboCard 
            type="Pro Edition"
            title="Thời Trang & Mỹ Phẩm"
            priceRange="70.000.000đ - 90.000.000đ"
            description="Tập trung vào màu da tự nhiên và khả năng xóa phông đỉnh cao của dòng FX."
            icon="shopping_bag"
            color="bg-purple-600"
            items={[
              "Sony FX30 + Lens FE 35mm F1.8 OSS",
              "Mic Sony C-80 + Interface Elgato Wave XLR",
              "Hệ thống 3 đèn Godox (Key, Fill, Hair)",
              "Capture Card Elgato 4K Pro"
            ]}
          />
          <ComboCard 
            type="Elite Edition"
            title="High-End Studio"
            priceRange="150.000.000đ+"
            description="Tiêu chuẩn truyền hình với khả năng hoạt động 24/7 không lo quá nhiệt."
            icon="diamond"
            color="bg-orange-600"
            items={[
              "Sony FX3 (Main) + Sony FX30 (B-Roll)",
              "Lenses: FE 24-70mm GM II & 85mm GM",
              "Mixer Atem Mini Pro ISO",
              "Hệ thống ánh sáng Aputure chuyên dụng"
            ]}
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {[
            { name: "Sony FX3", role: "Full-frame, Tản nhiệt chủ động", icon: "movie", tag: "Cinema" },
            { name: "Sony C-80", role: "Mic Condenser cao cấp", icon: "mic", tag: "Audio" },
            { name: "FE 50mm GM", role: "Độ nét tuyệt đối, Bokeh mịn", icon: "lens", tag: "Lens" },
            { name: "Elgato 4K Pro", role: "Hỗ trợ HDR 4K60", icon: "bolt", tag: "Stream" },
            { name: "Sony ZV-E10 II", role: "APS-C Creator Camera", icon: "camera", tag: "Vlog" },
            { name: "ECM-M1", role: "Shotgun Mic 8 hướng thu", icon: "settings_voice", tag: "Audio" },
            { name: "FE 16-35mm G", role: "Lens Zoom Wide góc rộng", icon: "photo_camera", tag: "Lens" },
            { name: "Wave XLR", role: "Interface âm thanh mạnh mẽ", icon: "equalizer", tag: "Audio" },
          ].map((item, i) => (
            <div key={i} className="glass-card p-6 rounded-2xl flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center">
                  <span className="material-symbols-outlined text-white/30">{item.icon}</span>
                </div>
                <span className="text-[9px] font-bold text-white/20 uppercase tracking-widest">{item.tag}</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">{item.name}</h4>
                <p className="text-[11px] text-white/40 font-medium leading-snug">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modern Info Banner - Full Width */}
      <div className="relative rounded-[40px] p-8 lg:p-12 overflow-hidden bg-gradient-to-br from-blue-900/40 via-purple-900/20 to-transparent border border-white/[0.06]">
        <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
          <span className="material-symbols-outlined text-[200px]">auto_awesome</span>
        </div>
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">Sony Technology</span>
          </div>
          <h3 className="text-3xl font-bold mb-6 tracking-tight">Product Showcase & Real-time Eye AF</h3>
          <p className="text-base text-white/60 leading-relaxed mb-8 font-medium">
            Tại sao 90% livestreamer hàng đầu chọn Sony? Đó là nhờ khả năng lấy nét vào mắt (Eye AF) cực nhạy và chế độ Product Showcase giúp máy ảnh tự động chuyển nét từ mặt người sang sản phẩm một cách mượt mà nhất.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="px-5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center gap-3">
              <span className="material-symbols-outlined text-sm text-green-400">verified</span>
              <span className="text-xs font-bold text-white/80 uppercase tracking-widest">No Overheating</span>
            </div>
            <div className="px-5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center gap-3">
              <span className="material-symbols-outlined text-sm text-purple-400">face</span>
              <span className="text-xs font-bold text-white/80 uppercase tracking-widest">Pro Skin Tone</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
