"use client";
import { motion } from "framer-motion";
import { Calculator, FileSearch, Briefcase, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Kế Toán & Thuế",
    icon: Calculator,
    bullets: [
      "Soát xét sổ sách kế toán",
      "Báo cáo thuế định kỳ & Quyết toán",
      "Hoàn thuế & Tư vấn thuế chuyên sâu"
    ],
    link: "/dich-vu/ke-toan-thue"
  },
  {
    title: "Kiểm Toán",
    icon: FileSearch,
    bullets: [
      "Kiểm toán báo cáo tài chính",
      "Kiểm toán tuân thủ & hoạt động",
      "Soát xét hệ thống kiểm soát nội bộ"
    ],
    link: "/dich-vu/kiem-toan"
  },
  {
    title: "Tư Vấn Pháp Lý",
    icon: Briefcase,
    bullets: [
      "Thành lập & thay đổi giấy phép ĐKKD",
      "Xin giấy phép con (Lao động, ATVSTP...)",
      "Tư vấn hợp đồng & sở hữu trí tuệ"
    ],
    link: "/dich-vu/tu-van-phap-ly"
  },
  {
    title: "Tư Vấn M&A & Đầu Tư",
    icon: TrendingUp,
    bullets: [
      "Thẩm định tài chính (Due Diligence)",
      "Định giá doanh nghiệp",
      "Tái cấu trúc theo chuẩn quốc tế"
    ],
    link: "/dich-vu/tu-van-ma"
  }
];

export default function ServicesSection() {
  return (
    <section className="relative py-24 font-sans border-b border-gray-100 overflow-hidden">
      
      {/* KHU VỰC HÌNH NỀN VÀ OVERLAY */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-service.jpg" 
          alt="Services Background"
          fill
          quality={80}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0F172A] opacity-[0.85]" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#900020]/20 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-extrabold text-white"
          >
            Giải pháp <span className="text-[#F6D0D8]">Thuế, Kế Kiểm & Pháp lý</span> toàn diện
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-slate-300 max-w-3xl"
          >
            Đội ngũ chuyên gia Tavitax cung cấp các dịch vụ đa dạng, đáp ứng mọi nhu cầu từ thành lập doanh nghiệp đến các thương vụ M&A phức tạp.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6"
          >
            <Link 
              href="/dich-vu" 
              className="inline-flex items-center text-white font-bold text-lg hover:text-[#F6D0D8] group transition-colors"
            >
              Xem tất cả dịch vụ 
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* LƯỚI HIỂN THỊ 4 DỊCH VỤ */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#F6D0D8] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col h-full hover:-translate-y-2"
            >
              {/* KHỐI ICON - ĐÃ FIX LỖI MÀU KHI HOVER */}
              <div className="w-16 h-16 bg-red-50/50 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#900020] transition-all duration-300 shadow-sm">
                <service.icon className="w-8 h-8 text-[#900020] group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-[#900020] transition-colors">{service.title}</h3>
              
              <div className="space-y-4 mb-8 flex-grow">
                {service.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#900020] shrink-0 mt-0.5 opacity-80 group-hover:opacity-100 transition-opacity" />
                    <span className="text-gray-600 font-medium leading-snug">{bullet}</span>
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