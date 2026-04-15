"use client";
import { ChevronDown, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  "Kế toán - Thuế", "Kiểm toán", "Đất đai", 
  "Tư vấn thuế", "Thành lập công ty", 
  "Dịch vụ chuyển giá", "Dịch vụ khác"
];

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer group">
           <Image 
              src="/logo.png" 
              alt="Tavitax Logo" 
              width={160} 
              height={45} 
              className="object-contain" 
           />
        </Link>

        {/* MENU CHÍNH */}
        <nav className="hidden md:flex items-center space-x-7 text-[16px] font-medium text-gray-700">
          <Link href="/" className="hover:text-[#900020] transition">Trang chủ</Link>
          
          <div className="relative group cursor-pointer py-2">
            <div className="flex items-center hover:text-[#900020] transition gap-1">
              Dịch vụ <ChevronDown className="w-4 h-4" />
            </div>
            
            <div className="absolute top-full -left-4 w-64 bg-white shadow-xl rounded-xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100 mt-1">
              {services.map((item) => (
                <Link 
                  key={item} 
                  href={`/dich-vu/${item.toLowerCase().replace(/ /g, "-")}`} 
                  className="block px-6 py-2.5 hover:bg-[#FDF2F4] hover:text-[#900020] transition-colors text-gray-600"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/tin-tuc" className="hover:text-[#900020] transition">Tin tức</Link>

          {/* NHÓM NÚT HÀNH ĐỘNG */}
          <div className="flex items-center gap-3 ml-2">
            {/* Nút Đăng ký tư vấn */}
            <Link 
              href="/dang-ky" 
              className="border border-[#900020] text-[#900020] px-5 py-2 rounded-full hover:bg-[#900020] hover:text-white transition-all duration-300 text-[15px]"
            >
              Đăng ký tư vấn
            </Link>

            {/* Nút Báo giá */}
            <Link 
              href="/bao-gia" 
              className="bg-[#900020] text-white px-6 py-2 rounded-full hover:bg-[#7A001A] hover:shadow-lg transition-all duration-200 text-[15px]"
            >
              Báo giá
            </Link>
          </div>

          {/* CHUYỂN ĐỔI NGÔN NGỮ */}
          <div className="relative group cursor-pointer py-2 pl-4 border-l border-gray-200">
            <div className="flex items-center hover:text-[#900020] transition gap-1.5 text-gray-700">
              <Globe className="w-5 h-5 text-gray-500 group-hover:text-[#900020] transition" />
              <span>VN</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="absolute top-full right-0 w-36 bg-white shadow-xl rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100 mt-1">
              <Link href="#" className="flex items-center px-4 py-2 hover:bg-[#FDF2F4] text-[#900020] bg-[#FDF2F4]/50 font-medium">
                <span className="mr-3 text-lg">🇻🇳</span> Tiếng Việt
              </Link>
              <Link href="#" className="flex items-center px-4 py-2 hover:bg-[#FDF2F4] hover:text-[#900020] text-gray-600 font-medium">
                <span className="mr-3 text-lg">🇬🇧</span> English
              </Link>
            </div>
          </div>

        </nav>
      </div>
    </header>
  );
}