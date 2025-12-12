"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchLinkByShortId, type LinkRecord } from "@/lib/links";
import { Button } from "@/components/ui/button";

export default function ShortRedirectPage() {
  const params = useParams();
  const shortId = typeof params?.shortId === "string" ? params.shortId : "";

  const [link, setLink] = useState<LinkRecord | null>(null);
  const [status, setStatus] = useState<"loading" | "not-found" | "ready">("loading");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      if (!shortId) {
        setStatus("not-found");
        return;
      }
      try {
        const record = await fetchLinkByShortId(shortId);
        if (!record) {
          setStatus("not-found");
          return;
        }
        setLink(record);
        setStatus("ready");
      } catch (err) {
        setError((err as Error).message);
        setStatus("not-found");
      }
    };
    load();
  }, [shortId]);

  const performDummyRedirect = () => {
    if (!link) return;
    console.log("Dummy redirect to:", link.destination_url);
    alert(`Would redirect to: ${link.destination_url}`);
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-foreground/70">טוען קישור...</p>
      </div>
    );
  }

  if (status === "not-found") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-3">
        <p className="text-lg font-semibold">הקישור לא נמצא</p>
        <p className="text-foreground/70">בדוק את ה-short id או צור קישור חדש.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-6">
      <h1 className="text-3xl font-semibold">קישור נמצא</h1>
      <p className="text-foreground/70 max-w-xl break-words">
        short id: <span className="font-mono">{link?.short_id}</span>
      </p>
      <p className="text-foreground/70 max-w-xl break-words">
        יעד: {link?.destination_url}
      </p>
      {error && <p className="text-destructive text-sm">{error}</p>}
      <div className="flex gap-2">
        <Button onClick={performDummyRedirect}>בצע redirect דמי</Button>
        <Button asChild variant="outline">
          <a href="/app/links">ניהול קישורים</a>
        </Button>
      </div>
    </div>
  );
}
