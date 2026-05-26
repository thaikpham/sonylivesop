const IssueCard: React.FC<{
  title: string;
  icon: string;
  steps: { text: string; sub?: string }[];
  accentColor: string;
}> = ({ title, icon, steps, accentColor }) => (
  <div className="bg-[#1a1a1a] border border-[#595959] rounded-2xl p-6 animate-fade">
    <div className="flex items-center gap-3 mb-6">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${accentColor}`}>
        <span className="material-symbols-outlined text-white">{icon}</span>
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    
    <div className="space-y-4">
      {steps.map((step, idx) => (
        <div key={idx} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 rounded-full border border-[#595959] flex items-center justify-center text-[10px] font-bold text-[#969696] shrink-0">
              {idx + 1}
            </div>
            {idx < steps.length - 1 && <div className="w-px h-full bg-[#595959] my-1"></div>}
          </div>
          <div className="pb-4">
            <p className="text-sm font-medium text-white">{step.text}</p>
            {step.sub && <p className="text-xs text-[#969696] mt-1 leading-relaxed">{step.sub}</p>}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const TroubleshootingSection: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade pb-20">
      <div>
        <h2 className="text-2xl font-bold mb-2">Hướng Dẫn Xử Lý Sự Cố</h2>
        <p className="text-[rgba(218,220,224,0.6)] text-sm">Các bước khắc phục nhanh khi gặp lỗi kỹ thuật từ OBS đến TikTok Live Studio.</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <IssueCard 
          title="Lỗi TikTok Live Studio (Vang tiếng)"
          icon="hearing_disabled"
          accentColor="bg-[#ff0050]/20"
          steps={[
            { 
              text: "Tắt 'Listen to this device' trong Windows", 
              sub: "Vào Sound Control Panel → Recording → Mic → Properties → Listen: Bỏ tích 'Listen to this device'." 
            },
            { 
              text: "Tắt loa ngoài (Speakers) khi Live", 
              sub: "Luôn dùng tai nghe để kiểm âm. Nếu bật loa ngoài, mic Sony C80 sẽ thu lại tiếng và tạo vòng lặp Echo." 
            },
            { 
              text: "Kiểm tra Audio Mixer trong TikTok Studio", 
              sub: "Đảm bảo bạn chỉ bật duy nhất một nguồn Mic, tắt các nguồn Mic ảo không dùng đến." 
            }
          ]}
        />

        <IssueCard 
          title="Lỗi Kết Nối Mạng (Internet)"
          icon="router"
          accentColor="bg-red-500/20"
          steps={[
            { 
              text: "Kiểm tra cáp LAN và đèn tín hiệu", 
              sub: "Đảm bảo dây LAN đã cắm chặt vào PC và Switch. Nếu dùng Wi-Fi, hãy chuyển ngay sang LAN." 
            },
            { 
              text: "Chạy Speedtest kiểm tra Ping & Upload", 
              sub: "Ping phải < 20ms và Upload tối thiểu 15-20Mbps để duy trì luồng phát ổn định." 
            },
            { 
              text: "Hạ Bitrate trong phần mềm (OBS/TikTok)", 
              sub: "Nếu bị nhảy frame (Drop frames), hãy thử giảm mức Bitrate xuống (vd: 4500Kbps)." 
            }
          ]}
        />

        <IssueCard 
          title="Lỗi Capture Card / No Signal"
          icon="cable"
          accentColor="bg-blue-500/20"
          steps={[
            { 
              text: "Kiểm tra nguồn Camera và cổng HDMI", 
              sub: "Đảm bảo Camera đang bật và cáp HDMI cắm chặt vào cổng 'HDMI IN' của Elgato." 
            },
            { 
              text: "Rút cắm lại cổng USB/PCIe của Capture Card", 
              sub: "Sự cố driver thường được giải quyết bằng cách reset kết nối vật lý." 
            },
            { 
              text: "Tắt/Bật lại nguồn Video trong OBS/TikTok", 
              sub: "Deactivate sau đó Activate lại source video để trigger lại tín hiệu từ Sony." 
            }
          ]}
        />

        <IssueCard 
          title="Lỗi Âm Thanh (Rè, Mất Tiếng)"
          icon="volume_off"
          accentColor="bg-orange-500/20"
          steps={[
            { 
              text: "Kiểm tra nguồn Phantom 48V", 
              sub: "Mic Sony C80 cần bật nút 48V trên Elgato Wave XLR mới có tiếng." 
            },
            { 
              text: "Đặt Preamp Gain tối ưu (32dB)", 
              sub: "Mức 32dB là điểm ngọt giúp tiếng trong trẻo và hạn chế nhiễu nền." 
            },
            { 
              text: "Kiểm tra Sample Rate (48kHz)", 
              sub: "Đảm bảo cả Windows và phần mềm Live đều đặt cùng 48kHz để tránh tiếng bị méo." 
            }
          ]}
        />
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
        <span className="material-symbols-outlined text-[rgba(218,220,224,0.3)] text-4xl mb-2">support_agent</span>
        <p className="text-sm text-[rgba(218,220,224,0.6)]">
          Nếu vẫn không khắc phục được, hãy liên hệ kỹ thuật viên trực: <span className="text-white font-bold">090x-xxx-xxx</span>
        </p>
      </div>
    </div>
  );
};
