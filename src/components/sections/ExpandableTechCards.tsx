"use client";

import ExpandableCards, {
    type Card,
} from "../smoothui/expandable-cards";
import { useState } from "react";
import { Button } from "../ui/button";
const getIconUrl = (slug: string) => `https://cdn.simpleicons.org/${slug}/${slug}`;
import { Container } from "../ui/container";
import { TextGenerateEffect } from "../ui/text-generate-effect";
const ExpandableTechCards = () => {
    const [selected, setSelected] = useState<number | null>(null);

    const demoCards: Card[] = [
        {
            id: 1,
            title: "ביצועים של דפדפן נייטיב",
            image: getIconUrl("googlechrome"),
            content:
                "מעבירים כל קליק לדפדפן ברירת המחדל כדי לקצר זמני טעינה, לאפשר אוטופיל ולתת חוויית תשלום שהמשתמש כבר מכיר.",
            author: {
                name: "Linkz",
                role: "Native Speed",
                image: getIconUrl("googlechrome"),
            },
        },
        {
            id: 2,
            title: "שמירת אנליטיקס מלאה",
            image: getIconUrl("googleanalytics"),
            content:
                "UTM, Meta Pixel וכל הפרמטרים נשמרים. שלמות Cookies מדרגה ראשונה נשארת, כך שהדוחות נשארים מדויקים.",
            author: {
                name: "Linkz",
                role: "Data Integrity",
                image: getIconUrl("googleanalytics"),
            },
        },
        {
            id: 3,
            title: "חוויית תשלום שממירה",
            image: getIconUrl("stripe"),
            content:
                "גישה לארנקים, אוטופיל ופרטי תשלום שמורים. פחות חיכוך בקופה שווה יותר הכנסות.",
            author: {
                name: "Linkz",
                role: "Checkout Boost",
                image: getIconUrl("stripe"),
            },
        },
        {
            id: 4,
            title: "התקנה ב-30 שניות",
            image: getIconUrl("vercel"),
            content:
                "מדביקים סקריפט בהדר או יוצרים לינק חדש. אין שינוי למודעות או לזרימה שלכם.",
            author: {
                name: "Linkz",
                role: "Fast Setup",
                image: getIconUrl("vercel"),
            },
        },
        {
            id: 5,
            title: "עובד על אוטומט",
            image: getIconUrl("zapier"),
            content:
                "Linkz מטפל בכל קליק מאחורי הקלעים ומשחרר אתכם להתמקד בקריאייטיב ובתקציב.",
            author: {
                name: "Linkz",
                role: "Autopilot",
                image: getIconUrl("zapier"),
            },
        },
        {
            id: 6,
            title: "תואם למדיניות הפלטפורמות",
            image: getIconUrl("trustpilot"),
            content:
                "נבנה כדי לעבוד בהתאם להנחיות של פייסבוק, אינסטגרם, טיקטוק ועוד – בלי סיכון לחשבונות שלכם.",
            author: {
                name: "Linkz",
                role: "Compliance",
                image: getIconUrl("trustpilot"),
            },
        },
    ];

    return (
        <Container
        //  headerContent={<TextGenerateEffectBlock />} 
         id="07" isDotSeperator={true} headerContentDot={true} title="למה משווקים בוחרים ב-Linkz" description="יותר המרות, פחות חיכוך, חינם">

            <div className="col-span-2 w-full gap-4 flex-col flex sm:flex-row items-start justify-center mx-auto overflow-hidden">
                <div className="col-span-1 flex flex-col text-right min-w-1/2 ">
                    <div className="pt-4 pb-0">
                        <h1 className="text-2xl mb-4 font-bold">הכל כדי שהלינקים שלכם ימכרו</h1>
                        <p className="text-sm text-gray-500">מאפשרים חוויית גלישה נייטיב, שומרים על אנליטיקס, ותואמים למדיניות הפלטפורמות.</p>
                        <p className="text-sm text-gray-500">Linkz פועל ברקע, כך שאתם לא משנים קמפיינים או מסלולי מודעות – רק רואים יותר תוצאות.</p>
                        <p className="text-sm text-gray-500">הכי טוב? זה חינם. מתחילים תוך דקות ורואים את ההבדל.</p>
                        <div className="pt-8">
                            <Button variant="secondary">התחילו בחינם</Button>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 w-full md:max-w-1/2 overflow-x-hidden ">
                    <ExpandableCards
                        cards={demoCards}
                        cardClassName=""
                        onSelect={setSelected}
                        selectedCard={selected}
                    />
                </div>
            </div>
        </Container>
    );
};

export default ExpandableTechCards;




// export function TextGenerateEffectBlock() {
//     const words = `We Make Tech for brands
// `;
//     return <TextGenerateEffect words={words} />;
// }