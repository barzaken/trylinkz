"use client";
import { IconCloud } from "../ui/icon-cloud"
import { Button } from "../ui/button"
import { BorderBeam } from "../ui/border-beam"
import { Container } from "../ui/container"
// import { EncryptedText } from "../ui/encrypted-text"
// import { DotPattern } from "../ui/dot-pattern"
import { useRouter } from "next/navigation"
const slugs = [
    // Core Web & Frontend
    "angular",
    "react",
    "nextdotjs",
    "vuedotjs",
    "wordpress",
    "shopify",
    "woocommerce",
    "expo",
    "php",
"html",
    "vercel",
    "cloudflare",
    "apple",
    "android",
    "windows",
    "macos",
    "ios",
    "samsung",
    "chrome",
    "firefox",
    "wordpress",
    "shopify",
    "woocommerce",
    "expo",
    "safari",
    "opera",
    "edge",
    "instagram",
    "facebook",
    "tiktok",
    "vercel",
    "windows",
    "macos",
    "ios",
    "samsung",
    "chrome",
    "cloudflare",
    "apple",
    "android",
]


export function WorksOnPlatformsSection() {
    const router = useRouter()
    const images = slugs.map(
        (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
    )

    return (
        <Container gId="05"
            // isDotSeperator={true}
            title="Linkz them all"
            headerContent={
                <div className="h-full flex items-center ">
                    {/* <EncryptedText
                className="text-md font-bold"
                text="✨ אמון של משווקי 7 ספרות"
                encryptedClassName="text-neutral-500"
                revealedClassName="dark:text-white text-black"
                revealDelayMs={120}
            /> */}
                </div>
            }
            description="Linkz עובד על כל סוגי האתרים, הפלטפורמות והמכשירים" >
            <>
                {/* Text Side */}
                <div id="works-on-platforms" className="col-span-1 flex flex-col gap-2  text-right">
                    <h1 className="text-2xl font-bold mb-2">עובד על כל הפלטפורמות והמכשירים</h1>
                    <p className="text-sm text-gray-500">ללא הגדרות נוספות או שינויים באתר או בקמפיין.</p>
                    <p className="text-sm text-gray-500">Linkz מעביר את המשתמשים לדפדפן ברירת המחדל שלהם, שומר על פיקסלים ו-UTM, ומספק חוויית תשלום מוכרת.</p>
                    <p className="text-sm text-gray-500">חינמי לחלוטין, כדי שתוכלו לבדוק ולראות את הקפיצה בהמרות בלי סיכון.</p>
                    <div className="pt-12 flex gap-4">
                        <Button variant={"secondary"} onClick={() => {
                            router.push("/auth")
                        }}>התחילו בחינם</Button>
                    </div>
                </div>

                {/* Icon Side */}
                <div className="col-span-1 relative bg-white dark:bg-black shadow-xl rounded-lg   relative flex  justify-center ">
                    <IconCloud images={images} />
                    <BorderBeam
                        duration={6}
                        delay={3}
                        size={400}
                        borderWidth={2}
                        className="from-transparent via-teal-500 to-transparent" />
                    {/* <DotPattern speed={50} /> */}
                </div>
            </>
        </Container>
    )
}
