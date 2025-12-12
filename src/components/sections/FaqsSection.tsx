"use client";

import { Container } from "../ui/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqs = [
  {
    id: "faq-1",
    question: "מה זה Linkz?",
    answer:
      "שכבת רידיירקט שמחזירה את המשתמש לדפדפן ברירת המחדל – כדי לשמור מהירות, אמון ופיקסלים.",
  },
  {
    id: "faq-2",
    question: "למי זה מתאים?",
    answer:
      "למפרסמים וקמפיינרים שרוצים יותר המרות, פחות נטישות, ושמירה מלאה על אנליטיקס.",
  },
  {
    id: "faq-3",
    question: "איך זה משפר המרות?",
    answer:
      "טעינה מהירה, אוטופיל, פרטי תשלום שמורים ואמון גבוה יותר בדפדפן הטבעי של המשתמש.",
  },
  {
    id: "faq-4",
    question: "האם הפיקסלים נשמרים?",
    answer:
      "כן. UTM, פיקסלים ו-Cookies של צד ראשון נשמרים, כדי שהדוחות והאופטימיזציה יישארו מדויקים.",
  },
  {
    id: "faq-5",
    question: "כמה זמן לוקח להטמיע?",
    answer:
      "פחות מ-5 דקות. מדביקים סקריפט או מייצרים לינק, ומיד שולחים תנועה לדפדפן ברירת המחדל.",
  },
  {
    id: "faq-6",
    question: "איך זה בחינם?",
    answer:
      "היי, אני בר, המפתח של Linkz. מגיל קטן אני זוכר איך אהבתי להשתמש בפתרונות שאנשים העלו לרשת, בטח כאלו שעבדו מעולה והיו בחינם. היום התור שלי להחזיר, תהנו.",
  },
];

export function FaqsSection() {
  return (
    <Container
      id="07"
      splitHeader={false}
      contentDot
      title="שאלות נפוצות"
      description="כל מה שרציתם לדעת על Linkz"
    >
      <div className="col-span-2 grid gap-8 md:grid-cols-2">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">
            תשובות מהירות לפני שאתם מתחילים
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            Linkz חינמי ומוכן לעבוד בשבילכם מהיום. המרות, תאימות ואנליטיקס
            נשארים בשליטה מלאה.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent className="text-black dark:text-white">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Container>
  );
}
