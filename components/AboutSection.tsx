"use client";
import { motion } from "framer-motion";
import { Target, Lightbulb, ShieldCheck, CheckCircle2 } from "lucide-react";

const infoItems = [
  {
    title: "Tầm nhìn",
    icon: <Target className="w-8 h-8 text-[#900020]" />,
    description: "Trở thành thương hiệu tư vấn hàng đầu tại Việt Nam, kiến tạo môi trường kinh doanh minh bạch.",
    bullets: ["Tiên phong công nghệ", "Chuẩn mực không thỏa hiệp", "Đối tác chuẩn quốc tế"]
  },
  {
    title: "Sứ mệnh",
    icon: <Lightbulb className="w-8 h-8 text-[#900020]" />,
    description: "Giải quyết bài toán phức tạp, biến gánh nặng pháp lý và thuế thành động lực tăng trưởng.",
    bullets: ["Giảm thiểu rủi ro pháp lý", "Tối ưu hóa dòng tiền", "Thông tin chuẩn xác"]
  },
  {
    title: "Giá trị cốt lõi",
    icon: <ShieldCheck className="w-8 h-8 text-[#900020]" />,
    description: "Hành động chính trực, kiến tạo tương lai dựa trên chất lượng dịch vụ chuyên môn cao nhất.",
    bullets: ["Tận tâm & Trách nhiệm", "Minh bạch & Bảo mật", "Chuyên môn vượt trội"]
  }
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-white font-sans border-b border-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* HEADER CỦA SECTION (Căn giữa để tiết kiệm diện tích) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-gray-900"
          >
            Cùng Doanh nghiệp <span className="text-[#900020]">vươn xa</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-gray-600"
          >
            Tavitax mang đến giải pháp chuyên sâu về Thuế, Kế toán và Pháp lý, 
            biến áp lực tuân thủ trở thành lợi thế cạnh tranh.
          </motion.p>
        </div>

        {/* GRID 3 CỘT (Tinh gọn nội dung) */}
        <div className="grid md:grid-cols-3 gap-8">
          {infoItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group p-8 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-[#F6D0D8] hover:shadow-[0_8px_30px_rgba(144,0,32,0.08)] transition-all duration-300 flex flex-col h-full"
            >
              {/* Icon & Title */}
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-md transition-all duration-300 border border-gray-50">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
              </div>

              {/* Description rút gọn */}
              <p className="text-gray-600 text-center mb-8 flex-grow">
                {item.description}
              </p>
              
              {/* Divider */}
              <div className="w-full h-px bg-gray-200 mb-6 group-hover:bg-[#F6D0D8] transition-colors" />

              {/* Bullet points (Căn trái cho dễ đọc) */}
              <div className="space-y-3">
                {item.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm font-medium text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#900020] shrink-0" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}