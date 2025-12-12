// "use client";
// import { useEffect } from "react";

// export default function InAppRedirect() {
//   useEffect(() => {
//     const ua = navigator.userAgent.toLowerCase();
//     const isIG = ua.includes("instagram");
//     const isFB = ua.includes("fbav") || ua.includes("fban") || ua.includes("facebook");

//     if (isIG || isFB) {
//       const url = window.location.href;

//       if (url.includes("trylinkz.io/www")) {
//         // קח את כל מה שאחרי הדומיין כולל query params
//         const fullPath = window.location.pathname.slice(1) + window.location.search + window.location.hash;

//         // ANDROID – פתיחה בכרום מחוץ ל-InAppBrowser
//         if (ua.includes("android")) {
//           window.location.href = `intent://${fullPath}#Intent;scheme=https;package=com.android.chrome;end`;
//           return;
//         }

//         // iOS – ניסיון לפתוח מחוץ ל-WebView
//         window.location.href = `x-safari-https://${fullPath}`;
//         window.open(`x-safari-https://${fullPath}`, "_blank");
//         return;
//       }

//       // עבור כתובות רגילות (לא www)
//       const fullPath = location.host + location.pathname + location.search + location.hash;

//       // ANDROID – פתיחה בכרום מחוץ ל-InAppBrowser
//       if (ua.includes("android")) {
//         window.location.href = `intent://${fullPath}#Intent;scheme=https;package=com.android.chrome;end`;
//         return;
//       }

//       // iOS – ניסיון לפתוח מחוץ ל-WebView
//       window.location.href = `x-safari-${url}`;
//       window.open(`x-safari-${url}`, "_blank");
//     }
//   }, []);

//   return null;
// }



"use client";
import { useEffect } from "react";

export default function InAppRedirect() {
  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const isIG = ua.includes("instagram");
    const isFB = ua.includes("fbav") || ua.includes("fban") || ua.includes("facebook");
    const isTikTok = ua.includes("tiktok") || ua.includes("bytedance") || ua.includes("musical_ly");

    if (isIG || isFB || isTikTok) {
      const url = window.location.href;

      if (url.startsWith("https://trylinkz.vercel.app/www")) {
        const fullPath = window.location.pathname.slice(1) + window.location.search + window.location.hash;
        if (ua.includes("android")) {
          window.location.href = `intent://${fullPath}#Intent;scheme=https;package=com.android.chrome;end`;
          return;
        }
        window.location.href = `x-safari-https://${fullPath}`;
        window.open(`x-safari-https://${fullPath}`, "_blank");
        return;
      }

      const fullPath = location.host + location.pathname + location.search + location.hash;
      if (ua.includes("android")) {
        window.location.href = `intent://${fullPath}#Intent;scheme=https;package=com.android.chrome;end`;
        return;
      }
      window.location.href = `x-safari-${url}`;
      window.open(`x-safari-${url}`, "_blank");
    }
  }, []);

  return null;
}