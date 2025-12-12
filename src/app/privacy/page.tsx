import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="w-full px-6 py-16 lg:px-12">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-10">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
            Linkz
          </p>
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
            מדיניות פרטיות
          </h1>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            מדיניות זו מסבירה כיצד אנו אוספים, משתמשים ושומרים מידע בעת שימוש
            ב-Linkz.
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            מידע שנאסף
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
            <li>פרטי שימוש כלליים (כגון אירועי הקלקה ונתוני ביצועים).</li>
            <li>פרמטרי UTM ו-Cookies צד ראשון לצורך שיפור מדידה.</li>
            <li>פרטי קשר רק אם נמסרו מרצון במסגרת יצירת קשר.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            שימוש במידע
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
            <li>שיפור חוויית המשתמש, זמני טעינה ושיעורי המרה.</li>
            <li>שמירת רציפות אנליטיקס ופיקסלים עבור מפרסמים.</li>
            <li>תקשורת בנושאי שירות ותמיכה כאשר נדרש.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            שיתוף ואבטחת מידע
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
            <li>איננו מוכרים מידע אישי לצדדים שלישיים.</li>
            <li>נתונים עשויים להיות משותפים עם ספקי שירות טכנולוגיים במידת הצורך.</li>
            <li>נוקטים צעדי אבטחה סבירים להגן על המידע מפני גישה בלתי מורשית.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            זכויות המשתמש
          </h2>
          <p className="text-sm text-neutral-700 dark:text-neutral-300">
            ניתן לבקש גישה, תיקון או מחיקה של מידע אישי, בכפוף לחוק החל. פניות
            ייענו תוך זמן סביר.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            יצירת קשר
          </h2>
          <p className="text-sm text-neutral-700 dark:text-neutral-300">
            לשאלות בנוגע למדיניות זו ניתן לפנות ל-
            <Link
              className="text-secondary underline underline-offset-2"
              href="mailto:privacy@trylinkz.io"
            >
              privacy@trylinkz.io
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
