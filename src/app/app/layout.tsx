"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AuthProvider, useAuth } from "@/components/providers/AuthProvider";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createLink, type LinkRecord } from "@/lib/links";
import { Confetti, type ConfettiRef } from "@/components/ui/confetti";

export default function AppLayout({ children }: { children: ReactNode }) {
  const [quickOpen, setQuickOpen] = useState(false);
  const [shortBase, setShortBase] = useState("");
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === "k" &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault()
        setQuickOpen(true)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])
  useEffect(() => {
    if (typeof window !== "undefined") {
      setShortBase(`${window.location.origin}/`);
    }
  }, []);

  return (
    <AuthProvider>
      <SidebarProvider
        style={
          {
            "--sidebar-width": "calc(var(--spacing) * 72)",
            "--header-height": "calc(var(--spacing) * 12)",
          } as CSSProperties
        }
      >
        <AppSidebar variant="inset" onQuickCreate={() => setQuickOpen(true)} />
        <SidebarInset>
          <SiteHeader />
          <QuickCreateModal
            open={quickOpen}
            onOpenChange={setQuickOpen}
            shortBase={shortBase}
          />
          {children}
        </SidebarInset>
      </SidebarProvider>
    </AuthProvider>
  );
}

function QuickCreateModal({
  open,
  onOpenChange,
  shortBase,
}: {
  open: boolean;
  onOpenChange: (val: boolean) => void;
  shortBase: string;
}) {
  const { user, loading } = useAuth();
  const [destination, setDestination] = useState("");
  const [creating, setCreating] = useState(false);
  const [created, setCreated] = useState<LinkRecord | null>(null);
  const [error, setError] = useState<string | null>(null);
  const confettiRef = useRef<ConfettiRef>(null);

  const shortLink = useMemo(() => {
    if (!created) return "";
    return shortBase ? `${shortBase}${created.short_id}` : created.short_id;
  }, [created, shortBase]);

  const handleCreate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!user || destination.trim().length === 0) return;
    setCreating(true);
    setError(null);
    try {
      const record = await createLink(user.id, destination.trim());
      setCreated(record);
      setDestination("");
      confettiRef.current?.fire({ particleCount: 160, spread: 70 });
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setCreating(false);
    }
  };

  useEffect(() => {
    if (!open) {
      setDestination("");
      setCreated(null);
      setError(null);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange(false);
      }
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [open, onOpenChange]);

  if (!open) return null;

  const modalContent = (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-card shadow-2xl border border-border/70">
        <Confetti ref={confettiRef} className="absolute inset-0" manualstart />
        <div className="flex items-start justify-between px-4 pt-4">
          <div>
            <h2 className="text-2xl font-semibold">Quick Create</h2>
            <p className="text-sm text-foreground/70">הדבק יעד וקבל short link מיידי.</p>
          </div>
          <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)}>
            ✕
          </Button>
        </div>
        <div className="space-y-3 px-4 pb-4 pt-2">
          <form onSubmit={handleCreate} className="flex flex-col gap-3">
            <Input
              placeholder="example.com"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              disabled={creating || loading}
              required
              type="text"
            />
            <Button type="submit" disabled={!user || creating || destination.trim().length === 0}>
              {creating ? "יוצר..." : "צור קישור"}
            </Button>
          </form>
          {error && <p className="text-sm text-destructive">{error}</p>}
          {!user && !loading && (
            <p className="text-sm text-foreground/60">צריך להתחבר כדי ליצור קישור.</p>
          )}
          {created && (
            <div className="rounded-lg border border-border/70 bg-muted/40 p-3">
              <p className="text-sm text-foreground/60">קישור נוצר</p>
              <p className="font-semibold break-all">{shortLink}</p>
              <p className="text-xs text-foreground/60 break-all">{created.destination_url}</p>
            </div>
          )}
        </div>
        <div className="flex justify-end gap-2 px-4 pb-4">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            סגור
          </Button>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
