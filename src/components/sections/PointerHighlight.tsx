"use client";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { Container } from "../ui/container";
import { motion } from "framer-motion";
import { ContainerTextFlip } from "../ui/container-text-flip";

export function PointerHighlightDemo() {
  return (
    <Container id="03" splitHeader={false} title="איך זה עובד" description="3 שלבים פשוטים שמעלים המרות">

      <div className="col-span-2 mx-auto grid w-full grid-cols-1 gap-4  sm:grid-cols-3 px-6 lg:px-0 ">
        <div className="rounded-md p-6 px-0 ">
          <div className="h-40 hover:opacity-100 transition-opacity duration-300 opacity-75 w-full rounded-lg overflow-hidden">
            <img src="https://media.istockphoto.com/id/1830163120/photo/group-of-computer-programmers-talking-while-working-at-it-office.jpg?s=612x612&w=0&k=20&c=nnhMhZcifOMTSPiZJ72QUDVWxcSgCyth-2GQaDTgzx0=" className="h-full w-full object-cover" />
          </div>

          <div className="mx-auto mt-4 max-w-lg text-base font-bold tracking-tight md:text-base">
            <PointerHighlight
              rectangleClassName="bg-yellow-400 dark:bg-yellow-700 border-neutral-300 dark:border-neutral-600 leading-loose"
              pointerClassName="text-yellow-500 h-3 w-3"
              containerClassName="inline-block mr-0"
            >
              <span className="relative z-10 px-1">01</span>
            </PointerHighlight>
            &nbsp;
            מבקר לוחץ על לינק ברשתות החברתיות.
          </div>
          <p className="mt-4 text-sm text-neutral-500">
            לקוח פוטנציאלי לוחץ על לינק בקמפיין שלכם בפייסבוק, אינסטגרם או טיקטוק.
          </p>
        </div>
        <div className="rounded-md p-6 px-0">
          <div className="h-40 hover:opacity-100 transition-opacity duration-300 opacity-75 w-full rounded-lg overflow-hidden">
            <img src="https://st4.depositphotos.com/12981370/24312/i/450/depositphotos_243120806-stock-photo-programmer-working-software-development-coding.jpg" className="h-full w-full object-cover" />
          </div>
          <div className="mx-auto mt-4 max-w-lg text-base font-bold tracking-tight md:text-base">
            <PointerHighlight
              rectangleClassName="bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-700 leading-loose"
              pointerClassName="text-blue-500 h-3 w-3"
              containerClassName="inline-block mx-1"
            >
              <span className="relative z-10 px-1">02</span>
            </PointerHighlight>
            Linkz מעביר אותו לדפדפן המהיר שלו.
          </div>
          <p className="mt-4 text-sm text-neutral-500">
            הסקריפט שלנו מזהה את המכשיר ומבצע העברה חלקה לדפדפן ברירת המחדל או לאפליקציה הרלוונטית.
          </p>
        </div>

        <div className="rounded-md p-6 px-0">
          <div className="h-40 hover:opacity-100 transition-opacity duration-300 opacity-75 w-full rounded-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1633250391894-397930e3f5f2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwYXBwJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" className="h-full w-full object-cover" />
          </div>
          <div className="mx-auto mt-4 max-w-lg text-base font-bold tracking-tight md:text-base">
            <PointerHighlight
              rectangleClassName="bg-green-100 dark:bg-green-900 border-green-300 dark:border-green-700 leading-loose"
              pointerClassName="text-green-500 h-3 w-3"
              containerClassName="inline-block ml-1"
            >
              <span className="relative z-10 px-1">03</span>
            </PointerHighlight>
            התוצאות קופצות עד 300%.
          </div>
          <p className="mt-4 text-sm text-neutral-500">
            חוויית גלישה מהירה ואמינה, תשלום קל יותר ואמון גבוה יותר מתורגמים להמרות ו-ROI משופר.
          </p>
        </div>
      </div>
    </Container>
  );
}



function ContainerTextFlipDemo() {
  return (
    <div className=" flex items-center justify-center">

      {/* // <ContainerTextFlip */}
      {/* // className="max-h-10 flex items-center justify-center overflow-hidden" */}
      {/* //   textClassName="text-[24px]" */}
      {/* //   words={["better", "modern", "Tyler Durden", "awesome"]} */}
      {/* // /> */}
     </div>
  );
}