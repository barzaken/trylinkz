"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Logo } from "./ui/logo";
import { usePathname } from "next/navigation";
import { IconBrandInstagram } from "@tabler/icons-react";
const footerLinks = {
  services: [
    { label: "איך זה עובד?", href: "#steps-explained" },
    { label: "למה זה טוב?", href: "#benefits" },
    { label: "איך משתמשים בזה?", href: "#ways-to-use" },
    { label: "עובד על כל הפלטפורמות והמכשירים", href: "#works-on-platforms" },
    { label: "התקנה בלחיצת כפתור", href: "#ways-to-use" },
  ]
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

      <div className="relative max-w-7xl mx-auto px-9 lg:px-0 py-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="inline-block">
              {/* <span className="text-4xl font-black tracking-tighter">
                <span className="text-black dark:text-white">LEVEL</span>
                <span className="text-[#088528]">Z</span>
              </span> */}
              <Logo width={100} height={100} />
            </Link>
            <p className="text-black/60 dark:text-white/60 leading-relaxed max-w-md">
              Linkz פותח כל לינק בדפדפן ברירת המחדל ומשפר את ההמרות, כך שתראו עוד 30-40% תוצאות. הכל בחינם וללא שינוי במבנה הקמפיינים שלכם.
            </p>
            <div className="flex gap-4 mt-4">
              <motion.a
                href="https://instagram.com/trylinkz.io"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-black/60 dark:text-white/60 hover:text-[#088528] hover:border-[#088528]/50 transition-colors"
              >
                <IconBrandInstagram className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-black dark:text-white font-semibold mb-4">ניווט מהיר</h4>
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
        </div>

        {/* Bottom */}
        <div className="mt-4 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
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

