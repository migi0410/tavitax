import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';

// 1. Cấu hình Font chữ
const beVietnam = Be_Vietnam_Pro({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["vietnamese"],
  display: "swap",
});

// 2. Cấu hình SEO Metadata
export const metadata = {
  title: "Tavitax - Dịch vụ Kế toán, Thuế & Kiểm toán chuyên nghiệp",
  description: "Tavitax cung cấp giải pháp Kế toán, Kiểm toán và Thuế chuyên sâu, giúp doanh nghiệp tối ưu chi phí và tuân thủ pháp luật tại Việt Nam.",
  icons: {
    icon: "/favicon.ico", // Bạn nhớ bỏ file favicon vào thư mục public nhé
  },
};

// 3. Hàm Layout duy nhất
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={`${beVietnam.className} overflow-x-hidden text-gray-900 antialiased`}>
        {children}
        
        {/* Google Analytics - Nhớ thay mã G-XXXXXXXXXX thật của bạn vào đây */}
        <GoogleAnalytics gaId="G-533208473" /> 
      </body>
    </html>
  );
}