"use client";
import { useEffect } from "react";

export default function InAppRedirect() {
  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const isIG = ua.includes("instagram");
    const isFB = ua.includes("fbav") || ua.includes("fban") || ua.includes("facebook");
    if (isIG || isFB) {
      const url = window.location.href;

      // ANDROID – פתיחה בכרום מחוץ ל-InAppBrowser
      if (ua.includes("android")) {
        window.location.href = `intent://${location.host}${location.pathname}#Intent;scheme=https;package=com.android.chrome;end`;
        return;
      }
      // iOS – ניסיון לפתוח מחוץ ל-WebView
      window.location.href = `x-safari-https://www.website.com`;
      window.open(`x-safari-https://www.website.com`, "_blank");
    }
  }, []);

  return null;
}
