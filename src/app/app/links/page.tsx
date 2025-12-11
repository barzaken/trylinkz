"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/components/providers/AuthProvider";
import {
  createLink,
  deleteLink,
  fetchLinksByUser,
  normalizeUrl,
  updateLinkDestination,
  type LinkRecord,
} from "@/lib/links";

export default function LinksPage() {
  const { user, loading: authLoading, error: authError } = useAuth();

  const [links, setLinks] = useState<LinkRecord[]>([]);
  const [destination, setDestination] = useState("");
  const [fetching, setFetching] = useState(false);
  const [creating, setCreating] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingValue, setEditingValue] = useState("");
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [origin, setOrigin] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, []);

  const shortBase = useMemo(() => {
    if (!origin) return "";
    return `${origin}/`;
  }, [origin]);

  useEffect(() => {
    const load = async () => {
      if (!user) return;
      setFetching(true);
      try {
        const data = await fetchLinksByUser(user.id);
        setLinks(data);
      } catch (err) {
        console.error(err);
        setError((err as Error).message);
      } finally {
        setFetching(false);
      }
    };
    load();
  }, [user]);

  const handleCreate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!user) return;
    setError(null);
    setCreating(true);
    try {
      const created = await createLink(user.id, destination.trim());
      setLinks((prev) => [created, ...prev]);
      setDestination("");
    } catch (err) {
      console.error(err);
      setError((err as Error).message);
    } finally {
      setCreating(false);
    }
  };

  const startEdit = (link: LinkRecord) => {
    setEditingId(link.id);
    setEditingValue(link.destination_url);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditingValue("");
  };

  const saveEdit = async () => {
    if (!editingId || editingValue.trim().length === 0) return;
    setSaving(true);
    setError(null);
    try {
      const updated = await updateLinkDestination(editingId, editingValue.trim());
      setLinks((prev) => prev.map((l) => (l.id === updated.id ? updated : l)));
      cancelEdit();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    setDeletingId(id);
    setError(null);
    try {
      await deleteLink(id);
      setLinks((prev) => prev.filter((l) => l.id !== id));
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold">קישורים</h1>
          <p className="text-foreground/70">
            צור קישורים חכמים לעקיפת דפדפני In-App וצפה בנתונים שלהם.
          </p>
        </div>
        <div className="flex gap-3">
          <Card className="min-w-[180px]">
            <CardContent className="flex flex-col gap-1 p-4">
              <span className="text-sm text-foreground/60">סה״כ קישורים</span>
              <span className="text-2xl font-semibold">{links.length}</span>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <Card className="order-2 lg:order-1">
          <CardHeader>
            <CardTitle>הקישורים שלך</CardTitle>
            <CardDescription>
              כל קישור מגיע עם short url וצפייה ביעד שלו.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {fetching && (
              <p className="text-sm text-foreground/70">טוען קישורים...</p>
            )}
            {!fetching && links.length === 0 && (
              <p className="text-sm text-foreground/70">
                עדיין אין קישורים. צור קישור ראשון ותראה אותו כאן.
              </p>
            )}
            <div className="grid gap-3">
              {links.map((link) => (
                <div
                  key={link.id}
                  className="rounded-lg border border-border/70 bg-card/70 p-4 shadow-sm"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-1">
                      <p className="text-xs text-foreground/60">Short URL</p>
                      <p className="font-semibold leading-tight">
                        {shortBase}
                        {link.short_id}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      {editingId !== link.id && (
                        <Button size="sm" variant="outline" onClick={() => startEdit(link)}>
                          ערוך
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-destructive hover:text-destructive"
                        onClick={() => handleDelete(link.id)}
                        disabled={deletingId === link.id}
                      >
                        {deletingId === link.id ? "מוחק..." : "מחק"}
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <a href={`/${link.short_id}`} target="_blank" rel="noreferrer">
                          פתח
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1">
                    <p className="text-xs text-foreground/60">יעד</p>
                    {editingId === link.id ? (
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                        <Input
                          value={editingValue}
                          onChange={(e) => setEditingValue(e.target.value)}
                          disabled={saving}
                          placeholder="example.com"
                          className="flex-1"
                        />
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            onClick={saveEdit}
                            disabled={saving || editingValue.trim().length === 0}
                          >
                            {saving ? "שומר..." : "שמור"}
                          </Button>
                          <Button size="sm" variant="outline" onClick={cancelEdit} disabled={saving}>
                            ביטול
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <p className="break-all text-sm">{link.destination_url}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className=" h-full flex justify-center order-1 lg:order-2">
          <CardHeader>
            <CardTitle>קישור חדש</CardTitle>
            <CardDescription>
              הדבק יעד (גם ללא https) וניצור עבורך short link.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <form className="flex flex-col gap-3" onSubmit={handleCreate}>
              <Input
                type="text"
                required
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="example.com"
                className="flex-1"
              />
              <Button type="submit" disabled={creating || destination.trim().length === 0}>
                {creating ? "שומר..." : "צור קישור"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}