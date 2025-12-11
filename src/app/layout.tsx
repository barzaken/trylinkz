import type { Metadata } from "next";
import { Heebo, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import InAppRedirect from "@/components/inAppRedirect";
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
  title: "Levelz | פתרונות תוכנה מתקדמים",
  description: "פתרונות תוכנה מתקדמים מצוות מהנדסים מיחידות העילית של צה״ל. פיתוח תוכנה, AI, אוטומציות ועוד.",
  keywords: ["פיתוח תוכנה", "AI", "אוטומציות", "פיתוח מובייל", "ישראל", "סטארטאפ"],
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
          <main className="overflow-hidden ">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
