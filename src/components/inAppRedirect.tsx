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
    const isInApp = getAppKey(ua);

    // this forces youtube to open in the app!
    // const url = window.location.href;
    // window.location.href = `youtube://watch?v=rWJL3H6-fg`;

    // this forces aliexeprss to open in the app!
    // const url = window.location.href;
    // window.location.href = `aliexpress://product?productId=1005010477697644`;

    if (isInApp) {
      const url = window.location.href;
      if (url.startsWith("https://trylinkz.io/www")) {
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

const appNameRegExps = {
  messenger: {
    regex:
      /(\bFB[\w_]+\/(Messenger))|(^(?!.*\buseragents)(?!.*\bIABMV).*(FB_IAB|FBAN).*)/i, // Experimental for newer UAs - don't have `"useragents:" or end in "IABMV"
    name: "Facebook Messenger",
  },
  instagram: {
    regex: /\bInstagram/i,
    name: "Instagram",
  },
  facebook: {
    regex: /\bFB[\w_]+\/|\bFacebook/i,
    name: "Facebook",
  },
  twitter: {
    regex: /\bTwitter/i,
    name: "Twitter",
  },
  threads: {
    regex: /\bBarcelona/i,
    name: "Threads",
  },
  tiktok: {
    regex: /musical_ly|Bytedance/i,
    name: "TikTok",
  },
  snapchat: {
    regex: /Snapchat/i,
    name: "Snapchat",
  },
  linkedin: {
    regex: /LinkedInApp/i,
    name: "LinkedIn",
  },
  gsa: {
    regex: /GSA/i,
    name: "Google Search App",
  },
  whatsapp: {
    regex: /\b(WAiOS|WA4A)\//i,
    name: "WhatsApp",
  },
} as const;

const appKeysDetectByUA = Object.keys(
  appNameRegExps
) as (keyof typeof appNameRegExps)[];

const getAppKey = (ua: string) => {
  return appKeysDetectByUA.find((appName) =>
    appNameRegExps[appName].regex.test(ua)
  );
};