"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Sparkles, Zap, Link2 } from "lucide-react";
import { AuthProvider, useAuth } from "@/components/providers/AuthProvider";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createLink, type LinkRecord } from "@/lib/links";
import { Confetti, type ConfettiRef } from "@/components/ui/confetti";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <InnerAppLayout>{children}</InnerAppLayout>
    </AuthProvider>
  );
}

function InnerAppLayout({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [quickOpen, setQuickOpen] = useState(false);
  const [shortBase, setShortBase] = useState("");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setQuickOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShortBase(`${window.location.origin}/`);
    }
  }, []);

  useEffect(() => {
    if (loading) return;
    if (!user) {
      router.replace("/auth");
    }
  }, [loading, user, router]);

  return (
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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl overflow-hidden border border-border/60 bg-card/95 p-0 shadow-2xl sm:rounded-2xl">
        <Confetti ref={confettiRef} className="absolute inset-0 pointer-events-none" manualstart />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-secondary/15 via-secondary/5 to-transparent opacity-80" />
        <div className="relative space-y-5 p-6">
          <DialogHeader className="space-y-2 flex justify-center items-center">
            <DialogTitle className="text-xl font-semibold">צור קישור חדש</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleCreate} className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Input
                placeholder="הכנס כתובת יעד... (לדוגמה: example.com)"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                disabled={creating || loading}
                required
                type="text"
                className="h-9 rounded-xl border-border/60 bg-background/70 pr-12 text-base focus:ring-2 focus:ring-secondary/20"
              />
              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                <Link2 className="h-4 w-4" />
              </div>
            </div>
            <Button
              variant="secondary"
              type="submit"
              disabled={!user || creating || destination.trim().length === 0}
              className="h-9 rounded-xl px-6 font-medium shadow-lg shadow-secondary/20 transition duration-300 hover:shadow-xl hover:shadow-secondary/30 disabled:opacity-60 disabled:shadow-none"
            >
              {creating ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="h-5 w-5" />
                </motion.div>
              ) : (
                <>
                  <Zap className="ml-2 h-5 w-5" />
                  צור קישור
                </>
              )}
            </Button>
          </form>

          {error && <p className="text-sm text-destructive">{error}</p>}
          {!user && !loading && (
            <p className="text-sm text-muted-foreground">צריך להתחבר כדי ליצור קישור.</p>
          )}

          {created && (
            <div className="relative overflow-hidden rounded-xl border border-border/60 bg-muted/40 p-4">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-secondary/10 via-transparent to-secondary/10" />
              <div className="relative space-y-1">
                <p className="text-xs text-muted-foreground">קישור נוצר</p>
                <p className="font-mono text-sm font-semibold break-all">
                  <span className="text-secondary">{shortLink}</span>
                </p>
                <p className="text-xs text-muted-foreground break-all">{created.destination_url}</p>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
