"use client";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import Image from "next/image";
import linkzLogo from "../../../public/linkz-black.svg";
import linkzLogoWhite from "../../../public/linkz-white.svg";
import { useState } from "react";
export function Logo({width,height}: {width: number,height: number}) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <Image src={isDark ? linkzLogoWhite : linkzLogo} alt="Linkz Logo" width={width} height={height} />
  );
}