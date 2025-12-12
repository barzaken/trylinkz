"use client";
import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconBrandAndroid,
  IconBrandAws,
  IconBrandGoogle,
  IconBrandOpenai,
  IconBrandWindows,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
  IconBrandApple,
  IconBrandMeta,
  IconBrandNetflix,
  IconBrandSpotify,
  IconBrandTwitch,
  IconBrandGithub,
  IconBrandDocker,
  IconBrandReact,
  IconBrandVue,
  IconBrandAngular,
  IconBrandNodejs
} from "@tabler/icons-react";
import { Container } from "../ui/container";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
export function FeaturesSectionDemo() {
  const features = [
    {
      title: "פתיחה אוטומטית בדפדפן ברירת מחדל",
      description:
        "מעבירים את המשתמשים מהדפדפן בתוך האפליקציה לדפדפן המהיר שלהם תוך פחות משנייה.",
      icon: <IconTerminal2 />,
    },
    {
      title: "עד 40% יותר תוצאות",
      description:
        "טוען מהר יותר, מאפשר אוטופיל לתשלום, ומחזיר אמון במסע הלקוח כדי להקפיץ המרות.",
      icon: <IconEaseInOut />,
    },
    {
      title: "שמירה מלאה על פיקסלים ו-UTM",
      description:
        "Meta Pixel, Google Analytics וכל הפרמטרים נשמרים עם שלמות Cookies מדרגה ראשונה.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "הטמעה ב-30 שניות",
      description: "מדביקים סקריפט בהדר או מייצרים לינק. אין צורך לשנות את מבנה הקמפיין.",
      icon: <IconCloud />,
    },
    {
      title: "עובד על אוטומט",
      description: "לאחר ההטמעה Linkz מטפל בכל קליק. אתם ממשיכים להריץ קמפיינים כרגיל.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "חינם לחלוטין",
      description:
        "Linkz הוא Free. מתחילים מיד, ללא התחייבות וללא עלויות נסתרות.",
      icon: <IconHelp />,
    },
    {
      title: "תואם מדיניות פלטפורמות",
      description:
        "עובד לפי ההנחיות של פייסבוק, אינסטגרם, טיקטוק ועוד כדי לשמור על ציות מלא.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "אופטימיזציית מהירות",
      description: "מאיץ את האתר ומעלה אמון, כך שאנשים נשארים ומבצעים את הפעולה.",
      icon: <IconHeart />,
    },
  ];

  const featuredIcons =
    <div className="flex flex-1 justify-center gap-4 items-center">
      <IconBrandOpenai className="size-10" />
      <IconBrandAws className="size-10" />
      <IconBrandGoogle className="size-10" />
      <IconBrandAndroid className="size-10" />
      <IconBrandWindows className="size-10" />
    </div>
  const icons = [
    IconBrandAws,
    IconBrandGoogle,
    IconBrandAndroid,
    IconBrandWindows,
    IconBrandApple,
    IconBrandMeta,
    IconBrandOpenai,
    IconBrandAws,
    IconBrandGoogle,
    IconBrandAndroid,
    IconBrandWindows,
    IconBrandApple,
    IconBrandMeta,
    IconBrandNetflix,
    IconBrandSpotify,
    IconBrandTwitch,
    IconBrandGithub,
    IconBrandDocker,
    IconBrandReact,
    IconBrandVue,
    IconBrandAngular,
    IconBrandNodejs,
    IconBrandAws,
    IconBrandGoogle,
    IconBrandAndroid,
    IconBrandWindows,
    IconBrandApple,
    IconBrandMeta,
  ];

  const featuredIconsScrollable = (
    <div className="flex flex-1 justify-center items-center overflow-hidden">
      <div
        className="flex inline-flex gap-16  animate-scroll"
      >
        {icons.map((Icon, index) => (
          <Icon key={`first-${index}`} className="size-10 flex-shrink-0" />
        ))}

      </div>
    </div>
  );


  return (
    <Container
      // headerContentDot={true}
      headerContent={featuredIconsScrollable}
      contentDot={true}
      id="01" title="מה זה Linkz?"
      description="בואו תראו איך הקסם קורה"
      HeaderIcon={<IconCloud className="size-5 text-secondary" />}>
      <div className="col-span-2">
        <div className="flex pb-4 no-scrollbar bgbackground darkbg-neutral-900  overflow-scroll gap-8 sm:gap-0  sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  relative z-10 ">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </Container>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "min-w-[240px]  backdrop-blur-lg shadow-xl  sm:shadow-none flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800 rounded-xl sm:rounded-none",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className=" opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-secondary">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="bg-teal-500 absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full md:bg-neutral-300 sm:dark:bg-neutral-700 group-hover/feature:bg-teal-500 dark:group-hover/feature:bg-teal-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
