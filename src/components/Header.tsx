"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Logo } from "./ui/logo";
import { Moon, Sun } from "lucide-react";
import { usePathname } from "next/navigation";
const navItems = [
  { label: "בית", href: "#steps" },
  { label: "שירותים", href: "#services" },
  { label: "אודות", href: "#about" },
  { label: "צור קשר", href: "#contact" },
];

export function Header() {
  const pathname = usePathname();
  if (pathname.startsWith("/app")) {
    return null;
  }
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  // const isDark = true;
  
  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      // className={`fixed top-0 bg-white dark:bg-black left-0 right-0 z-50 transition-all duration-300 ${isScrolled
      className={`fixed  transition-all duration-300 top-0 left-0 right-0 z-50  ${isScrolled
        ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-md dark:shadow-white/10"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-9 lg:px-0 py-0 ">
        <div className="flex items-center justify-between ">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            {/* <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <span className="text-3xl font-black tracking-tighter">
                <span className="text-foreground">LEVEL</span>
                <span className="text-[#088528]">Z</span>
              </span>
              <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#088528] to-transparent" />
            </motion.div> */}
            {/* <Image src={isDark ? lvlzLogoWhite : lvlzLogo} alt="Levelz Logo" width={120} height={80} /> */}
            <Logo width={100} height={100} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                // initial={{ opacity: 0, y: -20 }}
                // animate={{ opacity: 1, y: 0 }}
                // transition={{ delay: index * 0.1 }}
                className="relative text-sm font-medium text-foreground/70 hover:text-foreground transition-colors group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </nav>

          {/* CTA Button & Theme Toggle */}
          <motion.div
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ delay: 0.5 }}
            className="hidden md:flex items-center gap-4"
          >
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              onClick={toggleTheme}
              size="icon"
              className=" hover:bg-black/10 dark:hover:bg-white/10  hover:text-foreground dark:hover:text-foreground"
            // className="relative w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 dark:bg-white/10 dark:hover:bg-white/20 flex items-center justify-center "
            >
              <Sun className="size-5"/>

            </Button>

            <Button
              asChild
              className="bg-secondary hover:bg-secondary/80 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 "
            >
              <Link href="/auth">התחילו עכשיו</Link>
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
          >
            <motion.span
              // animate={{
              //   rotate: isMobileMenuOpen ? 45 : 0,
              //   y: isMobileMenuOpen ? 6 : 0,
              // }}
              className="w-6 h-0.5 bg-foreground block"
            />
            <motion.span
              // animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
              className="w-6 h-0.5 bg-foreground block"
            />
            <motion.span
              // animate={{
              //   rotate: isMobileMenuOpen ? -45 : 0,
              //   y: isMobileMenuOpen ? -6 : 0,
              // }}
              className="w-6 h-0.5 bg-foreground block"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden  backdrop-blur-xl border-t border-border"
          >
            <nav className="flex flex-col items-center py-6 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-foreground/70 hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
            <Button
              variant="ghost"
              onClick={toggleTheme}
              size="icon"
              className=" hover:bg-black/10 dark:hover:bg-white/10  hover:text-foreground dark:hover:text-foreground"
            // className="relative w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 dark:bg-white/10 dark:hover:bg-white/20 flex items-center justify-center "
            >
              <Sun className="size-5"/>

            </Button>

              <Button
                asChild
                className="mt-4 bg-secondary hover:bg-secondary/80 text-white font-semibold px-8 py-3 rounded-full"
              >
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  התחילו עכשיו
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

