"use client";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import Image from "next/image";
import { sendGAEvent } from "@/lib/ga-events"; // Import hàm helper

export default function CTASection() {
  // Hàm xử lý khi click nút
  const handleContactClick = () => {
    // 1. Gửi dữ liệu về Google Analytics
    sendGAEvent("click_contact_button", {
      event_category: "Conversion",
      event_label: "CTA_Section_Bottom",
      button_name: "Liên hệ tư vấn miễn phí"
    });

    // 2. Chuyển hướng hoặc gọi điện (Tùy bạn muốn)
    // window.location.href = "tel:0784938687"; 
    console.log("Đã ghi nhận lượt click và chuẩn bị gọi điện/chuyển trang");
  };

  return (
    <section className="py-20 bg-white font-sans">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Khối Card CTA nổi bật */}
        <div className="relative rounded-[2rem] overflow-hidden bg-[#0F172A] shadow-2xl shadow-[#900020]/20">
          
          {/* Background trang trí mờ ảo */}
          <div className="absolute inset-0 z-0 opacity-40">
            <Image 
              src="/bg-hcm.jpg" 
              alt="Background CTA" 
              fill 
              className="object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/90 to-transparent" />
          </div>

          <div className="relative z-10 px-8 py-16 md:px-20 md:py-24 flex flex-col items-start text-left">
            
            {/* Nội dung Tiêu đề & Mô tả */}
            <div className="max-w-3xl">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-5xl font-black text-white leading-tight"
              >
                Sẵn sàng đưa doanh nghiệp của bạn lên một <span className="text-[#900020] brightness-125">tầm cao mới?</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl"
              >
                Liên hệ với Tavitax ngay hôm nay để nhận được báo giá và phương án dịch vụ tối ưu, nhanh chóng và chính xác nhất.
              </motion.p>
            </div>

            {/* Nút Liên hệ có gắn sự kiện onClick */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 w-full sm:w-auto"
            >
              <button 
                onClick={handleContactClick} // <--- THÊM DÒNG NÀY Ở ĐÂY
                className="flex items-center justify-center gap-3 bg-[#900020] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#A50024] hover:shadow-[0_10px_40px_-10px_rgba(144,0,32,0.8)] transition-all active:scale-95 group w-full sm:w-auto"
              >
                <Phone className="w-5 h-5 fill-current" />
                Liên hệ tư vấn miễn phí
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>

          </div>

          {/* Hiệu ứng quầng sáng đỏ góc phải */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#900020] rounded-full blur-[130px] opacity-20 -mr-40 -mt-40 pointer-events-none" />
        </div>

      </div>
    </section>
  );
}