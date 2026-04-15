"use client";
import { motion } from "framer-motion";

const teamMembers = [
  { 
    name: "MR. LÊ ANH TUẤN", 
    role: "GIÁM ĐỐC ĐIỀU HÀNH | CEO", 
    desc: "Sáng lập Tavitax, chuyên gia tư vấn chiến lược, định hướng tầm nhìn dài hạn.",
    img: "/team/le-anh-tuan.jpg",
    isLarge: true // Thẻ đầu tiên rộng hơn
  },
  { 
    name: "MR. NGUYỄN XUÂN HIẾU", 
    role: "CỐ VẤN DỰ ÁN & ĐẦU TƯ", 
    desc: "Chuyên gia hoạch định và quản lý các dự án đa ngành.",
    img: "/team/nguyen-xuan-hieu.jpg"
  },
  { 
    name: "MS. HUỲNH THỊ THẮM", 
    role: "CỐ VẤN MARKETING", 
    desc: "Chiến lược thương hiệu & dẫn dắt chiến dịch truyền thông.",
    img: "/team/huynh-thi-tham.jpg"
  },
  { 
    name: "MS. NGUYỄN THỊ DẠ THẢO", 
    role: "CỐ VẤN TÀI CHÍNH | CFO", 
    desc: "Quản trị tài chính doanh nghiệp và kiểm soát rủi ro dòng tiền.",
    img: "/team/nguyen-thi-da-thao.jpg" 
  },
  { 
    name: "MS. HUỲNH THANH TÚ QUYÊN", 
    role: "CỐ VẤN TƯ VẤN & KIỂM TOÁN", 
    desc: "Chuyên gia đánh giá hệ thống kiểm soát nội bộ.",
    img: "/team/huynh-thanh-tu-quyen.jpg" 
  },
  { 
    name: "MS. BÙI THỊ TRINH HOA", 
    role: "CỐ VẤN PHÁP LÝ", 
    desc: "Bảo vệ quyền lợi doanh nghiệp, cố vấn giấy phép và hợp đồng.",
    img: "/team/bui-thi-trinh-hoa.jpg" 
  },
  { 
    name: "MR. VÕ NGUYÊN QUỐC THẮNG", 
    role: "CỐ VẤN PHÁT TRIỂN DỰ ÁN", 
    desc: "Đồng hành cùng các thương vụ M&A phức tạp.",
    img: "/team/vo-nguyen-quoc-thang.jpg" 
  }
];

export default function TeamSection() {
  return (
    <section className="py-24 bg-white font-sans overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Tiêu đề tương tự trang web mẫu */}
        <div className="mb-12">
          <span className="text-[#900020] font-bold tracking-[0.2em] uppercase text-xs block mb-3">
            Ban Giám Đốc
          </span>
          <h2 className="text-4xl font-black text-slate-900 leading-tight">
            Đội ngũ chuyên gia <br /> 
            <span className="text-[#900020]">kiệt xuất</span> của Tavitax
          </h2>
        </div>

        {/* CONTAINER TRƯỢT - CSS Snap Scroll */}
        <div className="flex flex-nowrap gap-4 md:gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
          <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar { display: none; }
            .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
          `}</style>

          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className={`flex-shrink-0 snap-start h-[320px] md:h-[380px] transition-all duration-500
                ${member.isLarge 
                  ? "w-[80vw] sm:w-[380px]" 
                  : "w-[65vw] sm:w-[260px]"
                }`}
            >
              <div className="relative group overflow-hidden rounded-[1.5rem] w-full h-full bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col">
                
                {/* Khu vực ảnh */}
                <div className="relative w-full flex-grow overflow-hidden bg-slate-100">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>

                {/* Khu vực nội dung bên dưới */}
                <div className="relative z-10 w-full bg-white p-4 md:p-5 flex-shrink-0 border-t border-slate-50">
                  <h3 className="font-black text-slate-900 leading-tight mb-1 text-base md:text-lg">
                    {member.name}
                  </h3>
                  
                  <p className="text-[#900020] font-bold text-[10px] md:text-[12px] mb-0 tracking-wide uppercase">
                    {member.role}
                  </p>

                  {/* Phần mô tả mở rộng khi hover */}
                  <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <p className="text-slate-500 text-[11px] md:text-[13px] leading-relaxed font-medium mt-3 border-t border-slate-100 pt-3">
                      {member.desc}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}