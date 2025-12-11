"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles";
import { Logo } from "../ui/logo";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { DotPattern } from "../ui/dot-pattern";
export function HeroSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-teal-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-teal-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
      </div>
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
          {"הלינקים שלכם לא ממירים. שלנו כן."
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          Linkz פותח כל קליק בדפדפן ברירת המחדל ומאיץ את האתר, כך שתראו עוד
          30-40% תוצאות. הכל בחינם וללא שינוי במבנה הקמפיינים שלכם.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
            התחילו בחינם
          </button>
          <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
            דברו עם מומחה
          </button>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
          className="relative z-10 mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
        >
          <div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
            <img
              src="https://assets.aceternity.com/pro/aceternity-landing.webp"
              alt="Landing page preview"
              className="aspect-[16/9] h-auto w-full object-cover"
              height={1000}
              width={1000}
            />
          </div>
        </motion.div>
      </div>
    </div>
    // <div className="relative ">
    //   <div className="h-[45rem]  relative w-full  flex flex-col items-center justify-center overflow-hidden rounded-md px-6 lg:px-0">



    //     <Logo width={160} height={240} />
    //     <h2 className={`${isDark ? "text-secondary" : "text-secondary"} md:text-4xl text-xl lg:text-6xl font-bold text-center  relative z-20`}>
    //       בית תוכנה מתקדם
    //     </h2>
    //     <div className="w-[40rem] h-10 relative mt-4">

    //       <div className="absolute animate-pulse inset-x-20 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-[2px] w-3/4 blur-sm" />
    //       <div className="absolute animate-pulse inset-x-20 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-3/4" />
    //       <div className="absolute animate-pulse inset-x-60 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-[5px] w-1/4 blur-sm" />
    //       <div className="absolute animate-pulse inset-x-60 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px w-1/4" />
    //     </div>
    //     <motion.p
    //       initial={{ opacity: 0, y: 20 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.6, delay: 0.4 }}
    //       className="text-lg md:text-xl textwhite/60 max-w-2xl mx-auto mb-12 leading-relaxed text-center"
    //     >
    //       אנחנו מביאים את הטכנולוגיה הצבאית המתקדמת ביותר לעולם העסקי.
    //       פיתוח תוכנה, פתרונות AI ואוטומציות - הכל מתוך ניסיון מהשטח.
    //     </motion.p>

    //     <motion.div
    //       initial={{ opacity: 0, y: 20 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.6, delay: 0.6 }}
    //       className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
    //     >
    //       <Button
    //         asChild
    //         size="lg"
    //         className="bg-secondary hover:bg-secondary/80 textwhite font-semibold px-8 py-6 rounded-full text-lg transition-all duration-300 hover:scale-105"
    //       >
    //         <a href="#contact">בואו נדבר</a>
    //       </Button>
    //       <Button
    //         asChild
    //         variant="outline"
    //         size="lg"
    //         className="borderwhite/20 bgwhite/5 hover:bgwhite/10 textwhite font-semibold px-8 py-6 rounded-full text-lg transition-all duration-300"
    //       >
    //         <a href="#services">גלו את השירותים שלנו</a>
    //       </Button>
    //     </motion.div>

    //   </div>
    //   <DotPattern className="blur-[1px]"
    //     chars={['we', 'are', 'levelz', 'israeli', 'software', 'company', 'exe', 'expert', 'in', 'advanced', 'technology']}
    //     density={14}
    //     speed={200}
    //     />
    // </div>
  )
}





