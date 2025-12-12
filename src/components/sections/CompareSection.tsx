"use client";

import { cn } from "@/lib/utils";
import { Container } from "../ui/container";
import {
  IconBolt,
  IconCheck,
  IconShieldCheck,
  IconX,
} from "@tabler/icons-react";

type BenefitRow = {
  feature: string;
  inAppNote: string;
  defaultNote: string;
};

const benefits: BenefitRow[] = [
  {
    feature: "המרות גבוהות יותר",
    inAppNote: "נשאר נמוך באפליקציה",
    defaultNote: "עולה בדפדפן ברירת המחדל",
  },
  {
    feature: "מהירות טעינה טובה יותר",
    inAppNote: "איטי / מוגבל",
    defaultNote: "מהיר ומטמון פעיל",
  },
  {
    feature: "אמון משתמשים גבוה",
    inAppNote: "מרגיש 'סגור' בתוך האפליקציה",
    defaultNote: "מרגיש טבעי ובטוח",
  },
  {
    feature: "התחברות אוטומטית ואוטופיל",
    inAppNote: "דורש התחברות מחדש",
    defaultNote: "נשאר מחובר עם אוטופיל",
  },
  {
    feature: "פחות תקלות בפיצ'רים",
    inAppNote: "ממשקי API חסרים",
    defaultNote: "תמיכה מלאה בדפדפן",
  },
  {
    feature: "מעקב וניתוח טובים",
    inAppNote: "פיקסלים נופלים",
    defaultNote: "פיקסלים נשמרים",
  },
  {
    feature: "ירידה בשיעור נטישה",
    inAppNote: "יותר נטישות",
    defaultNote: "פחות נטישות",
  },
  {
    feature: "בלי הזרקות/מעקב לא רצוי",
    inAppNote: "שכבת פלטפורמה מעל",
    defaultNote: "סביבה נקייה",
  },
];

const Pill = ({
  tone,
  label,
}: {
  tone: "bad" | "good";
  label: string;
}) => {
  const isGood = tone === "good";
  const Icon = isGood ? IconCheck : IconX;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-semibold",
        isGood
          ? "border-emerald-500/60 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
          : "border-rose-500/60 bg-rose-500/10 text-rose-700 dark:text-rose-300"
      )}
    >
      <Icon className="size-4" />
      {label}
    </span>
  );
};

export function CompareSection() {
  return (
    <Container
      id="04"
      title="מה, זה כזה משנה?"
      description="הסיבה שאנחנו מחזירים משתמשים לדפדפן ברירת המחדל."
      HeaderIcon={<IconBolt className="size-5 text-secondary" />}
      headerContent={
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <IconShieldCheck className="size-4 text-secondary" />
          <span>אמון, מהירות, וכל מה שמעלה המרות.</span>
        </div>
      }
      headerContentDot
      contentDot
    >
      <div className="md:col-span-2 rounded-2xl border border-neutral-200 bg-white/60 p-4 shadow-sm backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/60">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-lg font-bold text-neutral-900 dark:text-neutral-50">
              ברירת מחדל מנצחת
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">
              משתמשים מרגישים בבית, הטעינה מהירה, והפיקסלים נשמרים. לכן Linkz
              מחזיר אותם לדפדפן שהם סומכים עליו.
            </p>
          </div>
          <Pill tone="good" label="+ המרות" />
        </div>
      </div>
      <div className="rounded-2xl border border-emerald-200/80 bg-emerald-50/70 p-4 shadow-sm dark:border-emerald-500/30 dark:bg-emerald-950/30">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-base font-semibold text-emerald-900 dark:text-emerald-100">
            דפדפן ברירת מחדל (Native)
          </p>
          <Pill tone="good" label="מהיר / אמין" />
        </div>
        <ul className="space-y-3 text-sm">
          {benefits.map((row) => (
            <li key={row.feature} className="flex items-start gap-2">
              <IconCheck className="mt-1 size-4 text-emerald-500" />
              <div>
                <p className="font-semibold text-neutral-900 dark:text-neutral-50">
                  {row.feature}
                </p>
                <p className="text-neutral-700 dark:text-neutral-300">
                  {row.defaultNote}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-rose-200/80 bg-rose-50/70 p-4 shadow-sm dark:border-rose-500/30 dark:bg-rose-950/30">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-base font-semibold text-rose-900 dark:text-rose-100">
            בתוך האפליקציה
          </p>
          <Pill tone="bad" label="איטי / פחות אמון" />
        </div>
        <ul className="space-y-3 text-sm">
          {benefits.map((row) => (
            <li key={row.feature} className="flex items-start gap-2">
              <IconX className="mt-1 size-4 text-rose-500" />
              <div>
                <p className="font-semibold text-neutral-900 dark:text-neutral-50">
                  {row.feature}
                </p>
                <p className="text-neutral-700 dark:text-neutral-300">
                  {row.inAppNote}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
