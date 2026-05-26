import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  explanation: string;
  category: 'Video' | 'Audio' | 'Network' | 'Setup' | 'TikTok';
  icon: string;
  source?: string;
}

const FAQCard: React.FC<{ item: FAQItem; isOpen: boolean; onToggle: () => void }> = ({ item, isOpen, onToggle }) => (
  <div className={`faq-gradient border rounded-2xl transition-all duration-300 overflow-hidden ${isOpen ? 'border-[#969696] ring-1 ring-[#969696]/20' : 'border-[#595959] hover:border-[#7a7a7a]'}`}>
    <button 
      onClick={onToggle}
      className="w-full text-left p-5 flex items-start gap-4 focus:outline-none"
    >
      <div className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center ${
        item.category === 'Video' ? 'bg-blue-500/10 text-blue-400' :
        item.category === 'Audio' ? 'bg-orange-500/10 text-orange-400' :
        item.category === 'Network' ? 'bg-green-500/10 text-green-400' :
        item.category === 'TikTok' ? 'bg-[#ff0050]/10 text-[#ff0050]' : 'bg-purple-500/10 text-purple-400'
      }`}>
        <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between gap-4">
          <h4 className="font-bold text-white text-sm md:text-base leading-snug">{item.question}</h4>
          <span className={`material-symbols-outlined text-[#969696] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>expand_more</span>
        </div>
        <div className="mt-1 flex gap-2">
          <span className="text-[9px] font-bold uppercase tracking-widest text-[#969696] bg-white/5 px-1.5 py-0.5 rounded">{item.category}</span>
          <span className="text-[9px] font-bold uppercase tracking-widest text-blue-400/80 bg-blue-400/5 px-1.5 py-0.5 rounded">{item.source || 'Expert Insights'}</span>
        </div>
      </div>
    </button>
    
    {isOpen && (
      <div className="px-5 pb-6 animate-fade">
        <div className="h-px bg-gradient-to-r from-[#595959] to-transparent mb-5"></div>
        <div className="space-y-4">
          <div className="bg-white/5 border-l-2 border-[#969696] p-4 rounded-r-xl">
            <p className="text-white text-sm font-bold mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-green-400">lightbulb</span>
              Giải pháp thực chiến:
            </p>
            <p className="text-sm text-[rgba(218,220,224,0.9)] leading-relaxed">{item.answer}</p>
          </div>
          <div className="px-1">
            <p className="text-[10px] font-bold text-[#969696] uppercase tracking-wider mb-2">Vì sao lại thế?</p>
            <p className="text-xs text-[rgba(218,220,224,0.6)] leading-relaxed italic">
              "{item.explanation}"
            </p>
          </div>
        </div>
      </div>
    )}
  </div>
);

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [filter, setFilter] = useState<'All' | 'Video' | 'Audio' | 'Network' | 'Setup' | 'TikTok'>('All');

  const faqs: FAQItem[] = [
    {
      category: 'TikTok',
      icon: 'key',
      question: 'Làm sao để tôi được cấp quyền sử dụng TikTok Live Studio?',
      answer: 'Tài khoản cần có ít nhất 1,000 followers và đã livestream trong 7 ngày gần nhất.',
      explanation: 'TikTok yêu cầu Creators phải có một lượng tương tác tối thiểu để mở khóa phần mềm Studio chuyên dụng. Nếu mất quyền, hãy livestream bằng điện thoại để kích hoạt lại.',
      source: 'TikTok Help Center'
    },
    {
      category: 'TikTok',
      icon: 'screen_share',
      question: 'Sự khác biệt giữa Portrait Mode và Landscape Mode trong TikTok Studio?',
      answer: 'Portrait (Dọc) phù hợp với người xem trên mobile, Landscape (Ngang) phù hợp cho Game thủ hoặc muốn dùng Layout phức tạp.',
      explanation: 'Sony ZV-E10 II quay dọc 9:16 cực tốt, giúp video của bạn chiếm trọn màn hình người xem, tăng tỷ lệ giữ chân khách hàng.',
      source: 'TikTok Studio Guide'
    },
    {
      category: 'Setup',
      icon: 'admin_panel_settings',
      question: 'Tại sao OBS Project khuyên luôn nên chạy OBS bằng quyền Administrator?',
      answer: 'Để Windows ưu tiên tài nguyên GPU cho OBS xử lý Rendering cảnh quay (Scenes) ngay cả khi máy đang chạy các tác vụ nặng khác.',
      explanation: 'Khi chạy quyền Admin, Windows gán ưu tiên cao cho OBS trong bộ lập lịch GPU, giúp tránh hiện tượng "Lagged Frames" do GPU bị chiếm dụng hết bởi Game hoặc phần mềm khác.',
      source: 'OBS Wiki Core'
    },
    {
      category: 'Network',
      icon: 'signal_cellular_alt',
      question: 'Khi nào tôi nên bật tính năng "Dynamic Bitrate" trong OBS?',
      answer: 'Khi bạn livestream qua mạng không ổn định (ví dụ 4G/5G hoặc Wi-Fi công cộng) để tránh bị rớt luồng hoàn toàn.',
      explanation: 'Thay vì rớt khung hình (Dropped Frames) khi mạng yếu, OBS sẽ tự động giảm chất lượng hình ảnh xuống để duy trì kết nối mượt mà nhất có thể.',
      source: 'OBS 24+ Features'
    },
    {
      category: 'Video',
      icon: 'format_color_fill',
      question: 'Tôi nên chọn Color Range là "Limited" hay "Full" trong OBS?',
      answer: 'Nên chọn "Limited" cho hầu hết các nền tảng livestream hiện nay (YouTube, Facebook, TikTok).',
      explanation: 'Chuẩn truyền hình và web đa số dùng dải Limited (16-235). Nếu chọn Full (0-255), hình ảnh của bạn thường sẽ bị bệt đen (crushed blacks) khi người xem xem trên trình duyệt.',
      source: 'OBS Video Guide'
    },
    {
      category: 'TikTok',
      icon: 'ads_click',
      question: 'Làm thế nào để gắn link sản phẩm (Product Link) ngay trong TikTok Live Studio?',
      answer: 'Bạn cần liên kết tài khoản với TikTok Shop và sử dụng widget "Shopping" trong phần Add Source.',
      explanation: 'Việc gắn link trực tiếp giúp khách hàng chốt đơn ngay khi bạn đang giới thiệu bằng tính năng Product Showcase của Sony.',
      source: 'TikTok Shop Integration'
    },
    {
      category: 'Audio',
      icon: 'tune',
      question: 'Giọng của Host lúc nói to bị rè, lúc nói nhỏ lại không nghe thấy. Làm sao để ổn định?',
      answer: 'Hãy thêm Filter "Compressor" (Bộ nén) vào Micro trong OBS/TikTok Studio.',
      explanation: 'Compressor giúp kéo các âm thanh quá to xuống và nâng các âm thanh nhỏ lên mức cân bằng, rất quan trọng khi chốt đơn.'
    }
  ];

  const filteredFaqs = filter === 'All' ? faqs : faqs.filter(f => f.category === filter);

  return (
    <div className="space-y-8 animate-fade pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            <span className="material-symbols-outlined text-[#969696] text-3xl">lightbulb</span>
            Góc Chuyên Gia (FAQ)
          </h2>
          <p className="text-[rgba(218,220,224,0.6)] text-sm max-w-xl">
            Tổng hợp các kỹ thuật livestream thực chiến từ cộng đồng Reddit và tài liệu chuyên sâu của TikTok Live Studio.
          </p>
        </div>

        <div className="flex bg-[#1a1a1a] border border-[#595959] rounded-xl p-1 gap-1 shrink-0 overflow-x-auto dark-scrollbar">
          {(['All', 'Video', 'Audio', 'Network', 'Setup', 'TikTok'] as const).map((cat) => (
            <button 
              key={cat}
              onClick={() => { setFilter(cat); setOpenIndex(null); }}
              className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-all whitespace-nowrap ${filter === cat ? 'bg-[#969696] text-black' : 'text-[#969696] hover:text-white'}`}
            >
              {cat === 'All' ? 'Tất cả' : cat}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {filteredFaqs.map((faq, index) => (
          <FAQCard 
            key={index}
            item={faq}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};
