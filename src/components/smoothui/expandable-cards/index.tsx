
"use client";

import { BorderBeam } from "@/components/ui/border-beam";
import { ChevronsLeft, Play } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const AVATAR_SIZE = 96;
const EASING_X1 = 0.4;
const EASING_Y1 = 0.0;
const EASING_X2 = 0.2;
const EASING_Y2 = 1;

export type Card = {
  id: number;
  title: string;
  image: string;
  content: string;
  author?: {
    name: string;
    role: string;
    image: string;
  };
};

const smoothEasing = [EASING_X1, EASING_Y1, EASING_X2, EASING_Y2];

export type ExpandableCardsProps = {
  cards?: Card[];
  selectedCard?: number | null;
  onSelect?: (id: number | null) => void;
  className?: string;
  cardClassName?: string;
};



export default function ExpandableCards({
  cards,
  selectedCard: controlledSelected,
  onSelect,
  className = "",
  cardClassName = "",
}: ExpandableCardsProps) {
  if (!cards) return null;
  const [internalSelected, setInternalSelected] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const selectedCard =
    controlledSelected !== undefined ? controlledSelected : internalSelected;

  useEffect(() => {
    if (scrollRef.current) {
      const scrollWidth = scrollRef.current.scrollWidth;
      const clientWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollLeft = (scrollWidth - clientWidth) / 2;
    }
  }, []);

  const handleCardClick = (id: number) => {
    if (selectedCard === id) {
      if (onSelect) {
        onSelect(null);
      } else {
        setInternalSelected(null);
      }
    } else {
      if (onSelect) {
        onSelect(id);
      } else {
        setInternalSelected(id);
      }
      // Center the clicked card in view
      const cardElement = document.querySelector(`[data-card-id="${id}"]`);
      if (cardElement) {
        cardElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  };

  return (
    // <div
    //   className={`flex w-full no-scrollbar flex-col gap-4 overflow-scroll p-4 ${className}`}
    //   dir="rtl"
    // >
    //   <div
    //     className="scrollbar-hide mx-auto flex overflow-x-auto pt-4 pb-8"
    //     ref={scrollRef}
    //     style={{
    //       scrollSnapType: "x mandatory",
    //       scrollPaddingLeft: "20%",
    //     }}
    //   >
    <div
      className={`min-w-[50vw] relative flex w-full no-scrollbar flex-col gap-4 overflow-scroll p-4 pr-0 ${className}`}
      dir="rtl"
    >
      <div
        className="scrollbar-hide mx-auto flex overflow-x-auto pt-4 pb-8"
        ref={scrollRef}
        style={{
          scrollSnapType: "x mandatory",
          scrollPaddingLeft: "20%",
        }}
      >
        {cards.map((card) => (
          <motion.div
            animate={{
              width: selectedCard === card.id ? "500px" : "200px",
            }}
            className={`relative ml-4 h-[300px] shrink-0 cursor-pointer overflow-hidden rounded-2xl border bg-white dark:bg-black shadow-lg ${cardClassName}`}
            data-card-id={card.id}
            key={card.id}
            layout
            onClick={() => handleCardClick(card.id)}
            style={{
              scrollSnapAlign: "start",
            }}
            transition={{
              duration: 0.5,
              // ease: smoothEasing,
            }}
          >
            <div className="absolute top-0 right-0 h-full w-[200px]">
              <img
                alt={card.title}
                className="h-full w-full object-contain p-4"
                height={300}
                src={card.image}
                width={200}
              />
              <div className="absolute inset-0 bgblack/20" />
              <div className="absolute inset-0 flex flex-col justify-between p-6 pb4  pb-3 text-white">
                {/* <div className="absolute inset-0 flex flex-col justify-between p-6 text-white"> */}
                <h2 className="font-bold text-2xl text-gray-500 dark:text-gray-50">{card.title}</h2>
                  <button
                    aria-label="Play video"
                    // className=" flex h-12 w-12 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm transition-transform hover:scale-110"
                    className=" flex h-12 w-12 items-center justify-center rounded-full bg-background dark:bg-neutral-800 backdrop-blur-sm transition-transform hover:scale-110"
                    type="button"
                  >
                    <ChevronsLeft className="h-6 w-6 text-gray-400" />
                  </button>
              </div>
            </div>
            <AnimatePresence mode="popLayout">
              {selectedCard === card.id && (
                <motion.div
                  animate={{ width: "300px", opacity: 1, filter: "blur(0px)" }}
                  className="absolute top-0 left-0 h-full bg-background dark:bg-neutral-900"
                  exit={{ width: 0, opacity: 0, filter: "blur(5px)" }}
                  initial={{ width: 0, opacity: 0, filter: "blur(5px)" }}
                  transition={{
                    duration: 0.5,
                    // ease: smoothEasing,
                    opacity: { duration: 0.3, delay: 0.2 },
                  }}
                >
                  <motion.div
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    className="flex h-full flex-col justify-between p-8"
                    exit={{ opacity: 0, x: -20, filter: "blur(5px)" }}
                    initial={{ opacity: 0, x: -20, filter: "blur(5px)" }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                  >
                    <p className="text-sm text-gray-700 dark:text-gray-50">
                      {card.content}
                    </p>
                    {card.author && (
                      <div className="mt-4 flex items-center gap-3">
                        <div className="h-12 w-12 overflow-hidden rounded-full border bg-gray-200">
                          <img
                            alt={card.author.name}
                            className="h-full w-full object-cover"
                            height={48}
                            src={card.author.image}
                            width={48}
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-gray-50">
                            {card.author.name}
                          </p>
                          <p className="text-gray-600 text-xs dark:text-gray-300">
                            {card.author.role}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
            <BorderBeam
              duration={6}
              delay={3}
              size={400}
              borderWidth={2}
              className="from-transparent via-sky-500 to-transparent"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}