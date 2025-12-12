"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Container } from "../ui/container";


const STEP_DURATION_MS = 4000; // 3 steps * 4s = 12s total



export function StepsExpalined() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = steps[activeIndex];
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, STEP_DURATION_MS);

    return () => clearInterval(timer);
  }, []);

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
    <Container
      gId="01"
      title="הכירו את Linkz"
      description="בואו תראו איך הקסם קורה"
      headerContent={<StepsIcons activeIndex={activeIndex} />}
    >
      <div id="steps-explained"
        className="relative  flex w-full flex-col gap-4">
        <div className="relative w-full overflow-hidden rounded-2xl aspect-[5/3] border border-neutral-200/80 bg-neutral-50 shadow-inner dark:border-neutral-800 dark:bg-neutral-900"> 
        {/* <video
        key={activeStep.video}
              ref={videoRef}
              className="aspect-[16/9] h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src={activeStep.video} type="video/mp4" />
              <source src="/your-video.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video> */}
      <AnimatePresence mode="wait">
        <motion.video
          key={activeStep.video}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          initial={{ x: 80, opacity: 0 }}       // כניסה עדינה מימין
          animate={{ x: 0, opacity: 1 }}        // מתמקם במרכז
          exit={{ x: -80, opacity: 0 }}         // יציאה שמאלה
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <source src={activeStep.video} type="video/mp4" />
        </motion.video>
      </AnimatePresence>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <motion.div
          id="benefits"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center col-span-1"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-4"
          >
            הכי פשוט שיש
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold textwhite mb-6">
            פותח את האתר שלכם
            <span className="text-secondary">   בדפדפן הטבעי  </span>
            <br></br>
            של המשתמש
          </h2>
          <p className="dark:text-white/60 text-black/60 max-w-2xl mx-auto text-lg">
          Linkz הופך כל קישור לקישור שנפתח בדפדפן הטבעי של המשתמש במכשיר, עובד על כל מכשיר, כל פלטפורמה, כל קישור.
            <br></br>
           <span className="text-secondary"> למה? </span>
            <br></br>
            גלישה בדפדפן נייטיב משפרת את איסוף הנתונים ומעלה את ההמרות.
          </p>
        </motion.div>
      </div>
    </Container>
  );
}

const steps = [
  {
    title: "לחיצה על לינק",
    video: "/demo1.mp4",

  },
  {
    title: "Linkz פועל",
    video: "/demo2.mp4",
  },
  {
    title: "ההמרות עולות",
    video: "/demo3.mp4",
  },
];


const StepsIcons = ({ activeIndex }: { activeIndex: number }) => {

  return (
    // <div className="flex gap-4">
    <ol className="flex items-center justify-between">
      {steps.map((step, index) => {
        const isActive = index === activeIndex;

        return (
          <li
            key={step.title}
            className={cn(
              "group relative  overflow-hidden"
            )}
          >
            <div className="flex items-end md:items-center gap-1 ">
              <div
                className={cn(
                  "flex size-6 lg:size-10 items-center justify-center rounded-full border text-secondary transition",
                  isActive
                    ? "border-secondary"
                    : "border-neutral-200 dark:border-neutral-800"
                )}
              >
                {index + 1}
              </div>
              <div className="flex-1">
                <span className="text-xs md:text-sm font-semibold text-neutral-900 dark:text-neutral-50">
                  {step.title}
                </span>
                <div className=" h-1 rounded-full bg-neutral-200/70 dark:bg-neutral-800">
                  {isActive && <motion.div
                    key={activeIndex}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: STEP_DURATION_MS / 1000, ease: "linear" }}
                    className="h-1 rounded-full bg-secondary"
                  />}
                </div>

              </div>
            </div>
          </li>
        );
      })}
    </ol>
    //  </div>
  )
}