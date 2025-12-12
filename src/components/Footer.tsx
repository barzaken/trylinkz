"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Logo } from "./ui/logo";
import { usePathname } from "next/navigation";

const footerLinks = {
  services: [
    { label: "פיתוח תוכנה", href: "#services" },
    { label: "פתרונות AI", href: "#services" },
    { label: "אוטומציות", href: "#services" },
    { label: "פיתוח מובייל", href: "#services" },
  ],
  company: [
    { label: "אודות", href: "#about" },
    { label: "הצוות שלנו", href: "#about" },
    { label: "צור קשר", href: "#contact" },
  ],
};

export function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith("/app")) {
    return null;
  }
  return (
    <footer className="relative border-t border-white/10">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-30" />
      
      <div className="relative max-w-6xl mx-auto px-9 lg:px-0 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-6">
              {/* <span className="text-4xl font-black tracking-tighter">
                <span className="text-black dark:text-white">LEVEL</span>
                <span className="text-[#088528]">Z</span>
              </span> */}
              <Logo width={120} height={80} />
            </Link>
            <p className="text-black/60 dark:text-white/60 leading-relaxed max-w-md">
              Linkz פותח כל קליק בדפדפן ברירת המחדל ומאיץ את האתר, כך שתראו עוד 30-40% תוצאות. הכל בחינם וללא שינוי במבנה הקמפיינים שלכם.
            </p>
            <div className="flex gap-4 mt-6">
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-black/60 dark:text-white/60 hover:text-[#088528] hover:border-[#088528]/50 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-black/60 dark:text-white/60 hover:text-[#088528] hover:border-[#088528]/50 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </motion.a>
              <motion.a
                href="mailto:contact@trylinkz.io"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-black/60 dark:text-white/60 hover:text-[#088528] hover:border-[#088528]/50 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-black dark:text-white font-semibold mb-4">שירותים</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-black/60 dark:text-white/60 hover:text-[#088528] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-black dark:text-white font-semibold mb-4">החברה</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-black/60 dark:text-white/60 hover:text-[#088528] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-black/40 dark:text-white/40 text-sm">
            © {new Date().getFullYear()} Linkz. כל הזכויות שמורות.
          </p>
          <div className="flex gap-6 text-sm text-black/40 dark:text-white/40">
            <Link href="/terms" className="hover:text-black/60 dark:hover:text-white/60 transition-colors">
              תנאי שימוש
            </Link>
            <Link href="/privacy" className="hover:text-black/60 dark:hover:text-white/60 transition-colors">
              מדיניות פרטיות
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

