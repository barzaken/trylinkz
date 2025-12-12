"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles";
import { Logo } from "../ui/logo";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { DotPattern } from "../ui/dot-pattern";
import { useRouter } from "next/navigation";
import Image from "next/image";
export function HeroSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const router = useRouter();
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Attempt to play the video
    const playVideo = async () => {
      try {
        await video.play()
      } catch (error) {
        console.log("Autoplay prevented:", error)
        // Autoplay was prevented, video will play on user interaction
      }
    }

    // Wait for video to be loaded enough to play
    if (video.readyState >= 3) {
      playVideo()
    } else {
      video.addEventListener("loadeddata", playVideo)
      return () => video.removeEventListener("loadeddata", playVideo)
    }
  }, [])
  return (
    <div className="relative mx-auto mt-18 flex max-w-7xl flex-col items-center justify-center h-[40rem]">
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-teal-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-teal-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
      </div>
      <div className="flex flex-col items-center gap-4 lg:flex-row h-full px-4 overflow-hidden">
        <div className="content flex-1">
          <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
            {"הלינקים שלכם יכולים"
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
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            <br />
            {"להמיר יותר."
              .split(" ")
              .map((word, index) => (
                <motion.span
                  key={`line2-${index}`}
                  initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: (4 + index) * 0.1,
                    ease: "easeInOut",
                  }}
                  className="mr-2 inline-block text-secondary"
                >
                  {word}
                </motion.span>
              ))}
          </h1>
          {/* <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
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
          </h1> */}
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
            Linkz פותח כל לינק בדפדפן ברירת המחדל ומשפר את ההמרות, כך שתראו עוד
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
            <Button onClick={() => router.push("/auth")} variant="default" className="w-60">
              התחילו בחינם
            </Button>
            <Button variant="outline" className="w-60" onClick={() => {
              const stepsExplained = document.getElementById("steps-explained")
              if (stepsExplained) {
                stepsExplained.scrollIntoView({ behavior: "smooth" })
              }
            }}>
              איך זה עובד?
            </Button>
          </motion.div>
        </div>
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
          onAnimationComplete={() => setIsVideoLoaded(true)}
          className="h-full relative z-10 mt20 rounded-3xl bordr border-neutral-200 bgneutral-100 p-4 shadowmd dark:borderneutral-800 dark:bgneutral-900 sm:max-w-1/3"
        >
          <div className="w-full h-full overflow-hidden rounded-xl bordr border-gray-300 dark:bordergray-700">
            <Image
              src="/trylinkzdemo.gif" // Path to your GIF in the /public folder
              alt="A description of the gif"
              width={500} // Set appropriate width
              height={300} // Set appropriate height
              unoptimized={true} // Essential for the GIF to play
            />
            {/* <video
              ref={videoRef}
              className="aspect-[16/9]  h-full w-full object-contain sm:object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onLoadedData={() => setIsVideoLoaded(true)}
            >
              <source src="/demo.mp4" type="video/mp4" />
              <source src="/your-video.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video> */}
          </div>
        </motion.div>
      </div>
    </div>
  )
}





