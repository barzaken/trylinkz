"use client";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { Container } from "../ui/container";
import { motion } from "framer-motion";
import { ContainerTextFlip } from "../ui/container-text-flip";
import { Button } from "../ui/button";
import { useState } from "react";
import { toast } from "sonner";
import img1 from "../../../public/way1.svg";
import img2 from "../../../public/way2.svg";
import img3 from "../../../public/way3.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BorderBeam } from "../ui/border-beam";
import { TypingAnimation } from "@/components/ui/typing-animation"

export function WaysToUseSection() {

  const router = useRouter();

  return (
    <Container gId="03" splitHeader={false} title="איך זה עובד?" description="3 דרכים להשתמש ב Linkz" >
      <div id="ways-to-use" className="col-span-2 mx-auto grid w-full grid-cols-1 gap-4  sm:grid-cols-3 px-6 lg:px-0 ">
        <div className="rounded-md p-6 px-0 ">
          <div className="h-52 relative lg:h-40 w-full rounded-lg overflow-hidden">
            <div style={{direction: "ltr"}} className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <h2 className="text-xl sm:text-2xl text-white font-bold">deeplinkz.io<span className="text-secondary">/</span></h2>
          <TypingAnimation
          words={["www.google.com", "www.aliexpres.com", "www.amazon.com","www.youtube.com"]}
          blinkCursor={true}
          pauseDelay={2000}
          loop
          className="text-xl sm:text-2xl text-white font-bold"
        >
          Blinking cursor
        </TypingAnimation>
            </div>

            <Image src={img1} alt="Way 1" className="h-full w-full object-cover" />
          </div>

          <div className="mx-auto mt-4 max-w-lg text-base font-bold tracking-tight md:text-base">
            להוסיף לפני הקישור
            <PointerHighlight
              rectangleClassName="bg-teal-400 dark:bg-teal-700 border-neutral-300 dark:border-neutral-600 leading-loose"
              pointerClassName="text-teal-500 h-3 w-3"
              containerClassName="inline-block mr-0"
            >
              <span className="relative z-10 px-1">deeplinkz.io/</span>
            </PointerHighlight>
            &nbsp;
          </div>
          <p className="mt-4 mb-3 text-sm text-neutral-500">
            כן, כזה פשוט:
            <br></br>
          </p>
            <code className="relative py-2 px-2 bg-gray-100 text-sm dark:bg-gray-800  rounded">
              {`deeplinkz.io/www.google.com`}
              <BorderBeam
                duration={6}
                delay={3}
                size={400}
                borderWidth={1}
                className="from-transparent via-teal-400 to-transparent"
              />
            </code>
        </div>
        <div className="rounded-md p-6 px-0">
          <div className="h-52 lg:h-40 w-full rounded-lg overflow-hidden">
            <Image src={img2} alt="Way 2" className="h-full w-full object-cover" />
          </div>
          <div className="mx-auto mt-4 max-w-lg text-base font-bold tracking-tight md:text-base">
            להוסיף
            <PointerHighlight
              rectangleClassName="bg-teal-100 dark:bg-teal-900 border-teal-300 dark:border-teal-700 leading-loose"
              pointerClassName="text-teal-500 h-3 w-3"
              containerClassName="inline-block mx-1"
            >
              <span className="relative z-10 px-1">שורת קוד אחת</span>
            </PointerHighlight>
            לאתר שלכם
          </div>
          <div className="flex flex-col gap-2">
            <p className="mt-4 text-sm text-neutral-500">
              לוחצים, מדביקים בתגית{' '}
              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                {`<head></head>`}
              </code>
              {' '}של האתר שלכם וזהו!
            </p>
            <Button
              variant={"secondary"}
              size={"sm"}
              className="w-fit"
              onClick={() => {
                toast.success("קוד הועתק");
                navigator.clipboard.writeText(`<script src="https://deeplinkz.io/magic.js"></script>`);
              }}>העתק קוד</Button>
          </div>
        </div>

        <div className="rounded-md p-6 px-0">
          <div className="h-52 lg:h-40 w-full rounded-lg overflow-hidden">
            <Image src={img3} alt="Way 3" className="h-full w-full object-cover" />
          </div>
          <div className="mx-auto mt-4 max-w-lg text-base font-bold tracking-tight md:text-base">
            <PointerHighlight
              rectangleClassName="bg-green-100 dark:bg-green-900 border-green-300 dark:border-green-700 leading-loose"
              pointerClassName="text-green-500 h-3 w-3"
              containerClassName="inline-block ml-1"
            >
              <span className="relative z-10 px-1">יוצרים קישורים קצרים</span>
            </PointerHighlight>
            בפלטפורמה שלנו.
          </div>
          <div className="flex flex-col gap-2">
            <p className="mt-4 text-sm text-neutral-500">
              בחינם, ללא הגבלה.
            </p>
            <Button
              variant={"secondary"}
              size={"sm"}
              className="w-fit"
              onClick={() => {
                router.push("/auth");
              }}>התחל עכשיו</Button>
          </div>
          {/* <div className="flex flex-col gap-2">

          <p className="mt-4 text-sm text-neutral-500">
            בחינם, ללא הגבלה.
          </p>
          <Button
              variant={"secondary"}
              size={"sm"}
              className="w-fit"
              onClick={() => {
                router.push("/auth");
              }}>התחל עכשיו</Button>
          </div> */}
        </div>
      </div>
    </Container>
  );
}