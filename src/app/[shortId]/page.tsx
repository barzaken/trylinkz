"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchLinkByShortId, type LinkRecord } from "@/lib/links";

export default function ShortRedirectPage() {
  const params = useParams();
  console.log("params", params);
  const shortId = typeof params?.shortId === "string" ? params.shortId : "";
  const [status, setStatus] = useState<"loading" | "not-found" | "ready">("loading");
  const [error, setError] = useState<string | null>(null);
  const [transferUrl, setTransferUrl] = useState<string | null>(null);
  useEffect(() => {
    const load = async () => {
      if (!shortId) {
        setStatus("not-found");
        return;
      }
      if (shortId.startsWith("www.")) {
        window.location.href = `https://${shortId}`
        return;
      }
      try {
        const record = await fetchLinkByShortId(shortId);
        if (!record) {
          setStatus("not-found");
          return;
        }
        let cleanUrl = record.destination_url
          .replace(/^https?:\/\//, '')   // הסרת http/https
          .replace(/^www\./, '');        // הסרת www כדי להוסיף מחדש
        cleanUrl = 'www.' + cleanUrl;
        setTransferUrl(cleanUrl);
        window.location.href = `https://${cleanUrl}`
        //         // InAppRedirect({ targetUrl: record.destination_url });
        setStatus("ready");
      } catch (err) {
        setError((err as Error).message);
        setStatus("not-found");
      }
    };
    load();
  }, [shortId]);


  if (status === "loading") {
    return
  }

  if (status === "not-found") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-3">
        <p className="text-lg font-semibold">הקישור לא נמצא</p>
        <p className="text-foreground/70">בדוק את ה-short id או צור קישור חדש.</p>
      </div>
    );
  }

  return window.location.href = `https://${transferUrl}`

}

// function InAppRedirect({ targetUrl }: { targetUrl: string }) {
//   const ua = navigator.userAgent.toLowerCase();
//   const isIG = ua.includes("instagram");
//   const isFB = ua.includes("fbav") || ua.includes("fban") || ua.includes("facebook");
//   const isTikTok = ua.includes("tiktok") || ua.includes("bytedance") || ua.includes("musical_ly");
//   if (isIG || isFB || isTikTok) {
//     let cleanUrl = targetUrl
//       .replace(/^https?:\/\//, '')   // הסרת http/https
//       .replace(/^www\./, '');        // הסרת www כדי להוסיף מחדש

//     cleanUrl = 'www.' + cleanUrl;
//     window.location.href = `https://${cleanUrl}`
//     if (ua.includes("android")) {
//       window.location.href = `intent://${cleanUrl}#Intent;scheme=https;package=com.android.chrome;end`;
//       return;
//     }
//     window.location.href = `x-safari-${cleanUrl}`;
//     window.open(`x-safari-${cleanUrl}`, "_blank");
//   }
//   return null;
// }