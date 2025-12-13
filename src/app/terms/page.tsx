import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="w-full px-6 py-16 lg:px-12">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-10">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
            Linkz
          </p>
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
            תנאי שימוש
          </h1>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            תנאים אלה מסדירים את השימוש ב-Linkz. השימוש בשירות מהווה הסכמה
            לתנאים אלה.
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            שימוש בשירות
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
            <li>השירות ניתן "כפי שהוא" לצורך שיפור חוויית משתמש והמרות.</li>
            <li>עליך לוודא שהשימוש תואם את מדיניות הפלטפורמות בהן אתה מפרסם.</li>
            <li>אין לעשות שימוש לרעה, לרבות ניסיונות פריצה, עקיפה או שימוש אסור.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            אחריות והגבלת אחריות
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
            <li>Linkz פועלת על בסיס מאמץ סביר לשמירת זמינות וביצועים.</li>
            <li>אין אחריות לנזקים עקיפים או אובדן הכנסות משימוש בשירות.</li>
            <li>האחריות הכוללת מוגבלת, ככל שהדין מאפשר, לסכום ששולם עבור השירות (אם שולם).</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            קניין רוחני
          </h2>
          <p className="text-sm text-neutral-700 dark:text-neutral-300">
            כל הזכויות בשירות, בקוד ובמותג Linkz שייכות לחברה. אין להעתיק,
            לשכפל או לעשות שימוש מסחרי ללא רשות מראש ובכתב.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            שינויים ותיקונים
          </h2>
          <p className="text-sm text-neutral-700 dark:text-neutral-300">
            אנו עשויים לעדכן את תנאי השימוש מעת לעת. המשך שימוש בשירות לאחר עדכון
            מהווה הסכמה לנוסח המעודכן.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            יצירת קשר
          </h2>
          <p className="text-sm text-neutral-700 dark:text-neutral-300">
            לשאלות בנוגע לתנאים ניתן לפנות ל-
            <Link
              className="text-secondary underline underline-offset-2"
              href="mailto:contact@deeplinkz.io"
            >
              contact@deeplinkz.io
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
