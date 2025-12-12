"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import linkzLogo from "../../../public/linkz-black.svg";
import linkzLogoWhite from "../../../public/linkz-white.svg";

interface LogoProps {
  width?: number;
  height?: number;
}

export function Logo({ width = 120, height = 80 }: LogoProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // עד שה-component נטען, תציג את הלוגו הכהה כ-default
  if (!mounted) {
    return (
      <Image 
        src={linkzLogo} 
        alt="Linkz Logo" 
        width={width} 
        height={height} 
      />
    );
  }

  const isDark = theme === "dark";
  
  return (
    <Image 
      src={isDark ? linkzLogoWhite : linkzLogo} 
      alt="Linkz Logo" 
      width={width} 
      height={height} 
    />
  );
}