import type { Metadata } from "next";
import { Heebo, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import InAppRedirect from "@/components/inAppRedirect";
import { Analytics } from "@vercel/analytics/next"
const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Linkz | לינקים שממירים",
  description: "Linkz פותח כל קליק בדפדפן ברירת המחדל ומאיץ את האתר, כך שתראו עוד 30-40% תוצאות. הכל בחינם וללא שינוי במבנה הקמפיינים שלכם.",
  keywords: ["לינקים", "לינקים שממירים", "לינקים שממירים בדפדפן", "לינקים שממירים בדפדפן ברירת המחדל", "לינקים שממירים בדפדפן ברירת המחדל ומאיץ את האתר", "לינקים שממירים בדפדפן ברירת המחדל ומאיץ את האתר, כך שתראו עוד 30-40% תוצאות. הכל בחינם וללא שינוי במבנה הקמפיינים שלכם."],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <body
        className={`${heebo.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <InAppRedirect />
          <Header />
          <main className="overflow-hidden ">
            {children}
            <Analytics />

          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
