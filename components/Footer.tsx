"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-20 pb-10 font-sans border-t border-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* CỘT 1: THÔNG TIN CHUNG */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              {/* Đã bỏ class brightness-0 invert để logo hiện đúng màu gốc */}
              <Image 
                src="/logo.png" 
                alt="Tavitax Logo" 
                width={180} 
                height={50} 
                className="object-contain"
              />
            </Link>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              Nền tảng vững chắc cho sự phát triển của bạn. Đồng hành cùng doanh nghiệp Việt trong hành trình tuân thủ, minh bạch và phát triển bền vững.
            </p>
            
            {/* CÁC ICON MẠNG XÃ HỘI */}
            <div className="flex items-center gap-4">
              {/* Facebook */}
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center hover:bg-[#900020] hover:border-[#900020] transition-colors group">
                <svg className="w-5 h-5 text-gray-500 group-hover:text-white fill-current transition-colors" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>
              
              {/* LinkedIn */}
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center hover:bg-[#900020] hover:border-[#900020] transition-colors group">
                 <svg className="w-5 h-5 text-gray-500 group-hover:text-white fill-current transition-colors" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
              
              {/* YouTube */}
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center hover:bg-[#900020] hover:border-[#900020] transition-colors group">
                 <svg className="w-5 h-5 text-gray-500 group-hover:text-white fill-current transition-colors" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* CỘT 2: DỊCH VỤ */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-8 relative inline-block">
              Dịch vụ
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[#900020]"></span>
            </h4>
            <ul className="space-y-4 text-gray-600 text-[15px]">
              <li><Link href="/dich-vu/tu-van-thue" className="hover:text-[#900020] hover:translate-x-1 transition-all inline-block font-medium">Tư vấn Thuế</Link></li>
              <li><Link href="/dich-vu/ke-toan" className="hover:text-[#900020] hover:translate-x-1 transition-all inline-block font-medium">Dịch vụ Kế toán</Link></li>
              <li><Link href="/dich-vu/kiem-toan" className="hover:text-[#900020] hover:translate-x-1 transition-all inline-block font-medium">Kiểm toán</Link></li>
              <li><Link href="/dich-vu/phap-ly" className="hover:text-[#900020] hover:translate-x-1 transition-all inline-block font-medium">Tư vấn Pháp lý</Link></li>
            </ul>
          </div>

          {/* CỘT 3: CÔNG TY */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-8 relative inline-block">
              Công ty
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[#900020]"></span>
            </h4>
            <ul className="space-y-4 text-gray-600 text-[15px]">
              <li><Link href="/ve-chung-toi" className="hover:text-[#900020] hover:translate-x-1 transition-all inline-block font-medium">Về chúng tôi</Link></li>
              <li><Link href="/doi-ngu" className="hover:text-[#900020] hover:translate-x-1 transition-all inline-block font-medium">Đội ngũ chuyên gia</Link></li>
              <li><Link href="/tin-tuc" className="hover:text-[#900020] hover:translate-x-1 transition-all inline-block font-medium">Tin tức & Kiến thức</Link></li>
              <li><Link href="/lien-he" className="hover:text-[#900020] hover:translate-x-1 transition-all inline-block font-medium">Liên hệ</Link></li>
            </ul>
          </div>

          {/* CỘT 4: LIÊN HỆ TRỰC TIẾP */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-8 relative inline-block">
              Thông tin trực tiếp
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[#900020]"></span>
            </h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-[#900020] shrink-0 mt-0.5" />
                <div className="text-[14px] text-gray-600">
                  <p className="text-gray-900 font-bold mb-1">Trụ sở chính:</p>
                  25 Bàu Cát 2, Phường Tân Bình, TP. Hồ Chí Minh
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-[#900020] shrink-0 mt-0.5" />
                <div className="text-[14px] text-gray-600">
                  <p className="text-gray-900 font-bold mb-1">Chi nhánh:</p>
                  224 Điện Biên Phủ, Phường Võ Thị Sáu, Quận 3, TP. Hồ Chí Minh
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="w-5 h-5 text-[#900020] shrink-0 mt-0.5" />
                <div className="text-[14px] text-gray-600">
                  <p className="text-gray-900 font-bold mb-1">Hotline:</p>
                  078 493 8687
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p className="font-medium">© {currentYear} Tavitax. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-[#900020] font-medium transition-colors">Chính sách bảo mật</Link>
            <Link href="/terms" className="hover:text-[#900020] font-medium transition-colors">Điều khoản dịch vụ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}