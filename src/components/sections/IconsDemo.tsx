"use client";
import { IconCloud } from "../ui/icon-cloud"
import { Button } from "../ui/button"
import { BorderBeam } from "../ui/border-beam"
import { Container } from "../ui/container"
import { EncryptedText } from "../ui/encrypted-text"
import { DotPattern } from "../ui/dot-pattern"
const slugs = [
    // Core Web & Frontend
    "react",
    "nextdotjs",
    "vuedotjs",

    // Mobile & Cross-Platform
    "expo",
    "flutter",
    "swift",
    "kotlin",

    // JavaScript Ecosystem
    "nestjs",
    "nodedotjs",
    "vite",

    // Backend / Databases
    "express",
    "fastapi",
    "django",
    "laravel",
    "prisma",
    "mongodb",
    "postgresql",
    "mysql",
    "redis",
    "supabase",

    // Cloud Platforms
    "vercel",
    "googlecloud",
    "cloudflare",




    // DevOps / CI/CD
    "docker",
    "kubernetes",
    "gitlab",

    // Automation (Make, Zapier)
    "zapier",
    "make",

    // Tools / Editors
    "postman",
    "figma",
    "notion",

    // Version Control
    "git",
    "github",
    "gitlab",



    // Payments / Infra
    "stripe",

    // Social APIs / Auth
    "auth0",
    "firebase"
]


export function IconCloudDemo() {
    const images = slugs.map(
        (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
    )

    return (
        <Container id="02"
            isDotSeperator={true}
            title="סומכים על Linkz"
            headerContent={
                <div className="h-full flex items-center ">
            <EncryptedText
                className="text-md font-bold"
                text="✨ אמון של משווקי 7 ספרות"
                encryptedClassName="text-neutral-500"
                revealedClassName="dark:text-white text-black"
                revealDelayMs={120}
            />
            </div>
        }
            description="Linkz חינמי, מאובטח ושומר על כל הנתונים שלכם" >
            <>
                {/* Text Side */}
                <div className="col-span-1 flex flex-col gap-2  text-right">
                    <h1 className="text-2xl font-bold mb-2">ביצועים ועמידות ברמה של קמפיינים גדולים</h1>
                    <p className="text-sm text-gray-500">Linkz מעביר את המשתמשים לדפדפן ברירת המחדל שלהם, שומר על פיקסלים ו-UTM, ומספק חוויית תשלום מוכרת.</p>
                    <p className="text-sm text-gray-500">עובד על אוטומט עם כל הכלים של הצוות – Meta, Google, Shopify ועוד – בלי לגעת במבנה הקמפיין.</p>
                    <p className="text-sm text-gray-500">חינמי לחלוטין, כדי שתוכלו לבדוק ולראות את הקפיצה בהמרות בלי סיכון.</p>
                    <div className="pt-12 flex gap-4">
                        <Button variant={"outline"}> איך זה עובד</Button>
                        <Button variant={"secondary"}>התחילו בחינם</Button>
                    </div>
                </div>

                {/* Icon Side */}
                <div className="col-span-1 relative bg-white dark:bg-black shadow-xl rounded-lg   relative flex  justify-center ">
                    <IconCloud images={images}/>
                    <BorderBeam
                        duration={6}
                        delay={3}
                        size={400}
                        borderWidth={2}
                        className="from-transparent via-sky-500 to-transparent" />
                    <DotPattern speed={50} />
                </div>
            </>
        </Container>
    )
}
