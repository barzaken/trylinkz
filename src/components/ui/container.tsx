"use client";
import { useTheme } from "next-themes";
import { DottedGlowBackground } from "./dotted-glow-background";
import { useEffect, useState } from "react";
import { DotPattern } from "../ui/dot-pattern"
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
export const Container = ({ headerContentDot = false, headerTitleDot = false, contentDot = false, isDotSeperator = false, headerContent, splitHeader = true, id, children, title = "", description = "", HeaderIcon, seperatorContent }: { headerContentDot?: boolean, headerTitleDot?: boolean, contentDot?: boolean, isDotSeperator?: boolean, headerContent?: React.ReactNode, splitHeader?: boolean, id: string, children: React.ReactNode, title?: string, description?: string, HeaderIcon?: React.ReactNode, seperatorContent?: React.ReactNode }) => {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    return (
        <>
            <div className="w-full h-full bordery-1 px-9 lg:px-32 mt-0  overflow-hidden">
                <div className="flex  w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 borderx-1">
                    <div className="flex-1 flex flex-col gap-1  p-4 relative">
                        <div className="flex gap-1 items-center">
                            {HeaderIcon}
                            {id && <h3 className="text-xs font-semibold">[ 07 / <span className="text-secondary">{id}</span> ]</h3>}
                            {/* <h1 className="text-md font-bold text-right ">{title}</h1> */}
                            <h3 className="text-sm mr-2 font-bold">{title}</h3>
                        </div>
                        <div className="">
                            <p className="text-sm text-gray-500">{description}</p>
                        </div>
                        {headerTitleDot && <DotPattern />}
                    </div>
                    {splitHeader && <div className="flex-1 bordert md:border-t-0 flex flex-col gap-1  p-4 border-r-0  md:borderr-1 relative">
                        {headerContent}
                        {headerContentDot && <DotPattern />}

                    </div>}
                </div>
            </div>
            <div className="w-full h-full borderb-1 px-9 lg:px-32">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6}}
                    className="relative flex p-4 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 borderx-1">
                    {children}
                    {contentDot && <DotPattern size="md" density={10} chars={['l', 'e', 'v', 'e', 'l', 'z']} />}
                </motion.div>
            </div>
            <Seperator isDotSeperator={isDotSeperator}>{seperatorContent}</Seperator>
        </>
    )
}


const Seperator = ({ isDotSeperator = false, children }: { isDotSeperator: boolean, children?: React.ReactNode }) => {
    return (
        <div className="w-full h-[6rem]  bordery-1 px-9 lg:px-32">
            <div className="relative flex p-4 h-full w-full max-w-7xl mx-auto grid grid-cols-2 gap-8 borderx-1">
                {isDotSeperator && <DotPattern chars={['/', '|', '\\']} density={40} />}
                {children}
            </div>
        </div>
    )
}