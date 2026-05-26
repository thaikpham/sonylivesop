import { useState } from 'react';

const KelvinIndicator: React.FC<{ temp: number; label: string; color: string }> = ({ temp, label, color }) => (
  <div className="flex flex-col items-center gap-3 flex-1">
    <div className={`w-full h-10 rounded-xl ${color} border border-white/20 shadow-xl opacity-90 hover:opacity-100 transition-opacity`}></div>
    <div className="text-center">
      <span className="text-xs font-bold text-white block">{temp}K</span>
      <span className="text-[9px] text-[#555] font-bold uppercase tracking-tighter">{label}</span>
    </div>
  </div>
);

const WBStep: React.FC<{ num: string; title: string; desc: string }> = ({ num, title, desc }) => (
  <div className="flex gap-6 group">
    <div className="flex flex-col items-center">
      <div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-xs font-bold text-white/40 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
        {num}
      </div>
      <div className="w-px h-full bg-white/[0.06] my-2"></div>
    </div>
    <div className="pb-10">
      <h5 className="text-base font-bold text-white mb-2 group-hover:text-white/80 transition-colors">{title}</h5>
      <p className="text-xs text-white/40 leading-relaxed font-medium">{desc}</p>
    </div>
  </div>
);

export const LightingSection: React.FC = () => {
  const [activeMood, setActiveMood] = useState<'clean' | 'warm' | 'cinematic'>('clean');

  const moods = {
    clean: { title: "Trong trẻo / Mỹ phẩm", desc: "Sử dụng ánh sáng trắng (5600K) để tôn vinh màu sắc thực tế.", icon: "rebase_edit" },
    warm: { title: "Ấm cúng / Thời trang", desc: "Sử dụng ánh sáng trung tính (4500K) tạo cảm giác gần gũi.", icon: "wb_twilight" },
    cinematic: { title: "Điện ảnh / Tech", desc: "Sử dụng đèn màu RGB làm đèn nền để tạo chiều sâu.", icon: "movie" }
  };

  return (
    <div className="space-y-12 pb-20 w-full">
      <div className="border-b border-white/[0.06] pb-10">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Nghệ Thuật Ánh Sáng</h2>
        <p className="text-white/40 text-base leading-relaxed max-w-2xl font-medium">
          Thiết kế ánh sáng không chỉ để sáng, mà là để tạo ra cảm xúc. Hiểu về nhiệt độ màu giúp bạn định hình phong cách thương hiệu.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12">
        <div className="xl:col-span-8 space-y-10">
          {/* Kelvin Map */}
          <div className="glass-card rounded-[40px] p-8 lg:p-10">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-orange-500 text-xl">thermostat</span>
                </div>
                <h3 className="text-xl font-bold text-white">Thang Nhiệt Độ Màu (Kelvin)</h3>
              </div>
              <div className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">Scale Guide</div>
            </div>
            
            <div className="flex gap-4 lg:gap-6 mb-10">
              <KelvinIndicator temp={3200} label="Warm Yellow" color="bg-orange-500" />
              <KelvinIndicator temp={4500} label="Neutral White" color="bg-yellow-100" />
              <KelvinIndicator temp={5600} label="Daylight" color="bg-white" />
              <KelvinIndicator temp={6500} label="Cool Blue" color="bg-blue-300" />
            </div>
            
            <div className="p-6 bg-white/[0.03] rounded-2xl border border-white/[0.06] flex items-start gap-4">
              <span className="material-symbols-outlined text-blue-400">info</span>
              <p className="text-xs text-white/50 leading-relaxed font-medium italic">
                Cố định nhiệt độ đèn chính ở 5600K là cách an toàn nhất để khớp với thiết lập Daylight (Cân bằng trắng ban ngày) trên mọi dòng máy Sony.
              </p>
            </div>
          </div>

          {/* WB Section */}
          <div className="glass-card rounded-[40px] p-8 lg:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <span className="material-symbols-outlined text-[180px]">palette</span>
            </div>
            
            <div className="flex items-center gap-4 mb-10 border-b border-white/[0.06] pb-8">
              <div className="w-14 h-14 rounded-[20px] bg-white/[0.04] flex items-center justify-center border border-white/[0.1]">
                <span className="material-symbols-outlined text-white text-2xl">colorize</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Cân Bằng Trắng (White Balance)</h3>
                <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-bold mt-1">Chuẩn hóa với Gray Card 18%</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <div className="space-y-2">
                <WBStep num="01" title="Khóa nguồn sáng" desc="Bật toàn bộ hệ thống đèn chính. Tắt các nguồn sáng ngoại lai không kiểm soát được." />
                <WBStep num="02" title="Vị trí Gray Card" desc="Đặt thẻ xám ngay tại vị trí Host sẽ đứng/ngồi, hướng mặt thẻ trực diện về phía ống kính Sony." />
                <WBStep num="03" title="Sony Custom WB" desc="Vào Menu → WB → Custom Setup. Căn chỉnh vòng tròn lấy nét trọn trong vùng xám của thẻ." />
                <WBStep num="04" title="Set & Lock" desc="Nhấn chụp để máy tính toán thông số Kelvin chính xác và lưu vào bộ nhớ Custom." />
              </div>

              <div className="space-y-6">
                <div className="bg-white/[0.03] rounded-[32px] border border-white/[0.06] p-8">
                  <h4 className="text-xs font-bold text-[#666] uppercase mb-6 tracking-widest">Ưu điểm kỹ thuật</h4>
                  <ul className="space-y-5">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                      <p className="text-xs text-white/60 font-medium">Màu da (Skin tone) chân thực, hồng hào tự nhiên của Sony được bảo toàn.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                      <p className="text-xs text-white/60 font-medium">Khách hàng nhìn thấy màu sản phẩm đúng 100% như thực tế bên ngoài.</p>
                    </li>
                  </ul>
                  <div className="mt-10 pt-8 border-t border-white/[0.06] flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#808080] rounded-xl border border-white/[0.1] shadow-lg"></div>
                    <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">18% Neutral Gray</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Controls */}
        <div className="xl:col-span-4 space-y-6">
          <div className="glass-card rounded-[40px] p-8 flex flex-col items-center text-center">
            <h4 className="text-[10px] font-bold text-[#666] uppercase mb-8 tracking-[0.2em]">Sơ đồ 3 điểm chuẩn</h4>
            <div className="relative w-48 h-48 mx-auto mb-10">
              <div className="absolute inset-0 border border-white/[0.06] rounded-full"></div>
              {/* Host */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                  <span className="material-symbols-outlined text-black text-2xl">person</span>
                </div>
              </div>
              {/* Light Positions */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-2xl flex flex-col items-center justify-center shadow-lg animate-pulse">
                <span className="text-[9px] font-black text-black">KEY</span>
              </div>
              <div className="absolute top-1/2 -left-6 -translate-y-1/2 w-12 h-12 bg-blue-500/30 rounded-2xl flex flex-col items-center justify-center border border-blue-400/20">
                <span className="text-[9px] font-black text-white">FILL</span>
              </div>
              <div className="absolute -bottom-4 right-1/4 w-12 h-12 bg-purple-600/30 rounded-2xl flex flex-col items-center justify-center border border-purple-500/20">
                <span className="text-[9px] font-black text-white">HAIR</span>
              </div>
            </div>
            
            <div className="w-full space-y-3 text-left">
              {(['clean', 'warm', 'cinematic'] as const).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveMood(key)}
                  className={`w-full p-5 rounded-2xl border transition-all flex items-center gap-4 ${
                    activeMood === key ? 'bg-white text-black border-white' : 'bg-white/[0.02] border-white/[0.06] hover:border-white/20'
                  }`}
                >
                  <span className={`material-symbols-outlined ${activeMood === key ? 'text-black' : 'text-white/20'}`}>
                    {moods[key].icon}
                  </span>
                  <div className="flex flex-col items-start">
                    <span className="text-xs font-bold uppercase tracking-widest">{moods[key].title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          <div className="p-6 bg-gradient-to-br from-blue-600/10 to-transparent rounded-[32px] border border-blue-500/10">
            <h5 className="text-[10px] font-bold text-blue-400 uppercase mb-3 tracking-widest">Pro Tip</h5>
            <p className="text-[11px] text-white/50 leading-relaxed font-medium">
              Sử dụng các tấm "Flag" hoặc bìa đen để kiểm soát ánh sáng không bị tràn vào nền, giúp tạo chiều sâu (Depth) tốt hơn cho khung hình livestream.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
