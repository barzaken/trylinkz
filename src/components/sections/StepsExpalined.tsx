"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  IconClockHour6,
  IconPointer,
  IconRocket,
  IconScript,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { Container } from "../ui/container";

type Step = {
  title: string;
  description?: string;
  icon: typeof IconScript;
  accent?: string;
  placeholderLabel?: string;
};

const STEP_DURATION_MS = 2000; // 3 steps * 2s = 6s total

const steps: Step[] = [
  {
    title: "Drop in the Linkz snippet",
    description: "Paste a single script into your head tag—no refactors needed.",
    icon: IconScript,
    accent: "from-emerald-500/50 via-emerald-400/30 to-emerald-600/50",
    placeholderLabel: "Script installed",
  },
  {
    title: "User taps your in-app link",
    description: "We listen inside the in-app browser and prepare the handoff.",
    icon: IconPointer,
    accent: "from-indigo-500/50 via-sky-400/30 to-blue-600/50",
    placeholderLabel: "Tap detected",
  },
  {
    title: "Auto-open the native browser",
    description: "Traffic is redirected to the default browser with tracking intact.",
    icon: IconRocket,
    accent: "from-amber-500/50 via-orange-400/30 to-rose-500/50",
    placeholderLabel: "Redirect live",
  },
];

export function StepsExpalined() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = steps[activeIndex];
  const ActiveIcon = activeStep.icon;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, STEP_DURATION_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <Container
      id="01"
      title="הכירו את Linkz"
      description="בואו תראו איך הקסם קורה"
      headerContent={<StepsIcons activeIndex={activeIndex} />}
    >
      <div className="relative flex w-full flex-col gap-4">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-50 shadow-inner dark:border-neutral-800 dark:bg-neutral-900">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0"
            >
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br",
                  activeStep.accent
                )}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_35%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_35%)]" />
              <div className="relative flex h-full flex-col justify-between p-6 text-neutral-900 dark:text-neutral-50">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide">
                  <span className="rounded-full bg-neutral-900/10 px-3 py-1 text-neutral-900 dark:bg-white/10 dark:text-neutral-50">
                    Step {activeIndex + 1}
                  </span>
                  <span className="opacity-80">{activeStep.title}</span>
                </div>
                <div>
                  <div className="flex items-center gap-3 text-2xl font-bold leading-tight">
                    <ActiveIcon className="size-8" />
                    <span>{activeStep.placeholderLabel}</span>
                  </div>
                  <p className="mt-3 max-w-lg text-sm text-neutral-800/80 dark:text-neutral-100/80">
                    Visual placeholder switches automatically with the step.
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="flex flex-col gap-4">

        {/* <ol className="space-y-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === activeIndex;

            return (
              <li
                key={step.title}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border p-4 transition hover:border-secondary/70",
                  isActive
                    ? "border-secondary/70 bg-secondary/10 shadow-lg shadow-secondary/20"
                    : "border-neutral-200 dark:border-neutral-800"
                )}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={cn(
                      "flex size-10 items-center justify-center rounded-full border text-secondary transition",
                      isActive
                        ? "border-secondary bg-secondary/15"
                        : "border-neutral-200 dark:border-neutral-800"
                    )}
                  >
                    <Icon className="size-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold uppercase tracking-wide text-secondary">
                        Step {index + 1}
                      </span>
                      <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
                        {step.title}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                      {step.description}
                    </p>
                    {isActive && (
                      <div className="mt-3 h-1 rounded-full bg-neutral-200/70 dark:bg-neutral-800">
                      </div>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ol> */}
      </div>
    </Container>
  );
}



const StepsIcons = ({ activeIndex }: { activeIndex: number }) => {

  const steps: Step[] = [
    {
      title: "קליק על קישור",
      icon: IconPointer,


    },
    {
      title: "Linkz פועל",
      icon: IconScript,
    },
    {
      title: "ההמרות עולות",
      icon: IconRocket,
    },
  ];

  return (
    // <div className="flex gap-4">
    <ol className="flex items-center justify-between">
      {steps.map((step, index) => {
        const Icon = step.icon;
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
                  /> }
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