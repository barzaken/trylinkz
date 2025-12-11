"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Button } from "../ui/button";
import { Container } from "../ui/container";
import { BorderBeam } from "../ui/border-beam";
export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <Container id="06" contentDot={true} splitHeader={false} title="שאלות נפוצות" description="כל מה שרציתם לדעת על Linkz">

      <div className="col-span-2">
        <AnimatePresence>
          {active && typeof active === "object" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 h-full w-full z-10"
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {active && typeof active === "object" ? (
            <div className="fixed inset-0  grid place-items-center z-[100]">
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.05,
                  },
                }}
                className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>
              <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={ref}
                className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
              >
                <motion.div layoutId={`image-${active.title}-${id}`}>
                  <img
                    width={200}
                    height={200}
                    src={active.src}
                    alt={active.title}
                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                  />
                </motion.div>

                <div>
                  <div className="flex justify-between items-start p-4">
                    <div className="">
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                      >
                        {active.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${active.description}-${id}`}
                        className="text-neutral-600 dark:text-neutral-400 text-base"
                      >
                        {active.description}
                      </motion.p>
                    </div>

                    <motion.a
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      href={active.ctaLink}
                      target="_blank"
                      className="px-4 py-3 text-sm rounded-full font-bold bg-secondary text-white"
                    >
                      {active.ctaText}
                    </motion.a>
                  </div>
                  <div className="pt-4 relative px-4">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                    >
                      {typeof active.content === "function"
                        ? active.content()
                        : active.content}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>
        <div className="flex flex-col ">
          <div className="flex flex-col text-center  min-w-1/2 sm:min-w-1/3 p-4 px-0">
            <div className="pt-4 pb-0">
              <h1 className="text-2xl mb-4 font-bold">תשובות מהירות לפני שאתם מתחילים</h1>
              <p className="text-sm text-gray-500">Linkz חינמי ומוכן לעבוד בשבילכם מהיום.</p>
              <p className="text-sm text-gray-500">המרות, תאימות ואנליטיקס נשארים בשליטה מלאה.</p>
            </div>
          </div>
          {/* cards section */}
          <ul className="w-full grid grid-cols-1 md:grid-cols-4 items-start gap-4">
            {cards.map((card, index) => (
              <motion.div
                layoutId={`card-${card.title}-${id}`}
                key={card.title}
                onClick={() => setActive(card)}
                className="p-4 flex relative shadow-2xl z-10 bg-background shadowlg flex-col  dark:bg-neutral-900 rounded-xl cursor-pointer"
              >
                <div className="flex gap-4 flex-col  w-full ">
                  <motion.div layoutId={`image-${card.title}-${id}`}>
                    <img
                      width={100}
                      height={100}
                      src={card.src}
                      alt={card.title}
                      className="h-60 w-full  rounded-lg object-cover object-top"
                    />
                  </motion.div>
                  <div className="flex justify-center items-center flex-col">
                    <motion.h3
                      layoutId={`title-${card.title}-${id}`}
                      className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                    >
                      {card.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${card.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                    >
                      {card.description}
                    </motion.p>
                  </div>
                </div>
                <BorderBeam
                    duration={6}
                    delay={3}
                    size={400}
                    borderWidth={2}
                    className="from-transparent via-sky-500 to-transparent"
                  />
              </motion.div>
            ))}
          </ul>
          <div className="pt-8 flex items-center justify-center">
            <Button variant="secondary">התחילו בחינם</Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "האם זה באמת משפר המרות?",
    title: "איך Linkz מעלה שיעורי המרה?",
    src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=800&auto=format&fit=crop",
    ctaText: "ראו תשובה",
    ctaLink: "#contact",
    content: () => {
      return (
        <p>
          Linkz מעביר את המשתמש לדפדפן ברירת המחדל שבו יש טעינה מהירה, אוטופיל ופרטי תשלום שמורים.
          החיכוך בקופה יורד, האמון עולה, והמרות מזנקות. לקוחות מדווחים על תוספת של 30-40% ולעיתים עד 300% בקמפיינים חמים.
        </p>
      );
    },
  },
  {
    description: "מדיניות פלטפורמות",
    title: "האם Linkz תואם את הכללים?",
    src: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=800&auto=format&fit=crop",
    ctaText: "ראו תשובה",
    ctaLink: "#contact",
    content: () => {
      return (
        <p>
          כן. Linkz נבנה כדי לעבוד לפי ההנחיות של פייסבוק, אינסטגרם, טיקטוק ועוד.
          אנחנו משתמשים בשיטה תואמת מדיניות שמאפשרת לפתוח את הקישור בדפדפן ברירת המחדל ועדיין לשמור על היעדים שלכם.
        </p>
      );
    },
  },
  {
    description: "מעקב ואנליטיקס",
    title: "האם מאבדים פיקסלים או נתונים?",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    ctaText: "ראו תשובה",
    ctaLink: "#contact",
    content: () => {
      return (
        <p>
          לא. Linkz שומר על כל פרמטרי ה-UTM, הפיקסלים וה-Cookies של צד ראשון.
          Meta Pixel ויתר הכלים ממשיכים לעבוד, כך שהדוחות והאופטימיזציה נשארים מדויקים.
        </p>
      );
    },
  },
  {
    description: "הפעלה מיידית",
    title: "כמה מהר אפשר להתחיל?",
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    ctaText: "ראו תשובה",
    ctaLink: "#contact",
    content: () => {
      return (
        <p>
          פחות מ-5 דקות. יוצרים חשבון, בוחרים דומיין, מדביקים סקריפט קצר בהדר או מייצרים לינק חדש – וזהו.
          Linkz מתחיל לעבוד על אוטומט, ולכם נשאר רק לראות את הגרפים מטפסים.
        </p>
      );
    },
  },
];
