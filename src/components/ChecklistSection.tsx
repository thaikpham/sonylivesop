import { useState } from 'react';

export const ChecklistSection: React.FC = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Kiểm tra pin/nguồn cho Sony FX3 & FX30', checked: false },
    { id: 2, text: 'Vệ sinh lens camera (sử dụng khăn chuyên dụng)', checked: false },
    { id: 3, text: 'Cấu hình Gain mic (32dB), kiểm tra Level (-6dB đến -12dB)', checked: false },
    { id: 4, text: 'Bật 3 đèn Studio, kiểm tra nhiệt độ màu (5600K)', checked: false },
    { id: 5, text: 'Kiểm tra khung hình dọc 9:16 và Tốc độ 30 FPS trên phần mềm', checked: false },
    { id: 6, text: 'Copy Stream Key mới nhất từ Dashboard sàn', checked: false },
    { id: 7, text: 'Test mic/âm thanh (không bị rè, không bị vang)', checked: false },
    { id: 8, text: 'Đảm bảo Host đã sẵn sàng kịch bản', checked: false },
  ]);

  const toggle = (id: number) => {
    setItems(items.map(i => i.id === id ? { ...i, checked: !i.checked } : i));
  };

  const progress = Math.round((items.filter(i => i.checked).length / items.length) * 100);

  return (
    <div className="space-y-8 animate-fade">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">Quy Trình Vận Hành</h2>
          <p className="text-[rgba(218,220,224,0.6)] text-sm">Checklist trước khi bấm nút GO LIVE.</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-white">{progress}%</div>
          <div className="text-[10px] text-[#969696] font-bold uppercase">Hoàn thành</div>
        </div>
      </div>

      <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden mb-8">
        <div 
          className="bg-[#969696] h-full transition-all duration-500 ease-out" 
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="space-y-2">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => toggle(item.id)}
            className={`w-full flex items-center gap-4 p-4 rounded-2xl border transition-all text-left ${
              item.checked 
              ? 'bg-[#969696]/10 border-[#969696]/30 text-[rgba(218,220,224,0.5)]' 
              : 'bg-[#1a1a1a] border-[#595959] text-white'
            }`}
          >
            <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${
              item.checked ? 'bg-[#969696] border-[#969696]' : 'border-[#595959]'
            }`}>
              {item.checked && <span className="material-symbols-outlined text-black text-[16px] font-bold">check</span>}
            </div>
            <span className={`text-sm font-medium ${item.checked ? 'line-through' : ''}`}>{item.text}</span>
          </button>
        ))}
      </div>

      {progress === 100 && (
        <div className="bg-green-500/20 border border-green-500/40 p-6 rounded-3xl text-center animate-bounce">
          <span className="material-symbols-outlined text-green-400 text-4xl mb-2">verified</span>
          <h3 className="text-xl font-bold text-green-400">Sẵn Sàng Live!</h3>
          <p className="text-sm text-green-400/80">Mọi thông số kỹ thuật đã đạt chuẩn 30 FPS và Audio 32dB.</p>
        </div>
      )}
    </div>
  );
};
