"use client";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <PageTransition>
      <Header />
      <main className="relative min-h-screen text-white overflow-hidden font-sans">
        
        {/* === BẮT ĐẦU: HERO SECTION === */}
        <div className="relative min-h-screen">
          {/* Lớp nền và Overlay */}
          <div className="absolute inset-0 z-0">
            {/* Hình ảnh nền TP.HCM */}
            <Image
              src="/bg-hcm.jpg" 
              alt="Ho Chi Minh City Background"
              fill
              quality={100}
              priority
              className="object-cover object-center"
            />
            
            {/* Lớp phủ 1: Làm tối hình ảnh (Xanh Navy đậm) */}
            <div className="absolute inset-0 bg-[#0F172A] opacity-75" />
            
            {/* Lớp phủ 2: Làm mờ nhẹ (Blur) hình ảnh */}
            <div className="absolute inset-0 backdrop-blur-[2px]" />

            {/* Lớp phủ 3: Gradient đỏ mờ ở góc để làm nổi bật */}
            <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#900020] rounded-full blur-[150px] opacity-20" />
          </div>

          {/* Nội dung Hero */}
          <section className="relative z-10 flex items-center min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="flex flex-col items-start text-left max-w-4xl">
                
                <motion.h1 
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-5xl lg:text-7xl font-extrabold leading-[1.15] tracking-tight"
                >
                  Nền tảng vững chắc <br /> 
                  <span className="text-white">cho sự phát triển của bạn</span>
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="mt-8 text-xl lg:text-2xl text-slate-200 max-w-2xl leading-relaxed font-light"
                >
                  Đồng hành cùng doanh nghiệp Việt trong hành trình tuân thủ, minh bạch và phát triển bền vững.
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="mt-10 inline-flex items-center py-3 px-6 bg-white/10 rounded-lg border-l-4 border-[#900020] backdrop-blur-md"
                >
                  <span className="text-white font-medium text-sm lg:text-[17px] tracking-wide italic shadow-sm">
                    Tư vấn chuyên sâu — Dịch vụ nhanh chóng — Bảo mật tuyệt đối
                  </span>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                  className="mt-12 flex flex-wrap gap-5"
                >
                  <button className="group bg-[#900020] text-white px-10 py-4 rounded-xl font-bold text-lg flex items-center gap-3 hover:bg-[#A50024] hover:shadow-[0_10px_40px_-10px_rgba(144,0,32,0.5)] transition-all duration-300 active:scale-95">
                    Đăng ký tư vấn ngay
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </button>

                  <button className="bg-transparent text-white border border-white/50 px-10 py-4 rounded-xl font-bold text-lg hover:border-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                    Khám phá dịch vụ
                  </button>
                </motion.div>

              </div>
            </div>
          </section>
        </div>
        {/* === KẾT THÚC: HERO SECTION === */}

        {/* === BẮT ĐẦU: CÁC SECTION BÊN DƯỚI === */}
        
        {/* Section Tầm nhìn / Sứ mệnh (Đã tinh gọn 3 cột) */}
        <AboutSection />

        {/* Section Dịch vụ nổi bật */}
        <ServicesSection />

        {/* Section Đội ngũ chuyên gia */}
        <TeamSection />
        <CTASection /> {/* <--- Section mới nằm đây */}
        <Footer />
        {/* === KẾT THÚC: CÁC SECTION BÊN DƯỚI === */}

      </main>
    </PageTransition>
  );
}