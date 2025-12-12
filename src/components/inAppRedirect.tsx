"use client";
import { useEffect } from "react";

export default function InAppRedirect() {
  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const isIG = ua.includes("instagram");
    const isFB = ua.includes("fbav") || ua.includes("fban") || ua.includes("facebook");
    if (isIG || isFB) {
      const url = window.location.href;
      if (window.location.host.includes("trylinkz.vercel.app/www")) {
        const path = window.location.pathname.slice(1)
        // ANDROID – פתיחה בכרום מחוץ ל-InAppBrowser
        if (ua.includes("android")) {
          window.location.href = `intent://${path}#Intent;scheme=https;package=com.android.chrome;end`;
          return;
        }
        // iOS – ניסיון לפתוח מחוץ ל-WebView
        window.location.href = `x-safari-https://${path}`;
        window.open(`x-safari-https://${path}`, "_blank");
        return;
      }
      // ANDROID – פתיחה בכרום מחוץ ל-InAppBrowser
      if (ua.includes("android")) {
        window.location.href = `intent://${location.host}${location.pathname}#Intent;scheme=https;package=com.android.chrome;end`;
        return;
      }
      // iOS – ניסיון לפתוח מחוץ ל-WebView
      window.location.href = `x-safari-${window.location.href}`;
      window.open(`x-safari-${window.location.href}`, "_blank");
    }
  }, []);

  return null;
}
