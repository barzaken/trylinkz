"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/components/providers/AuthProvider";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  createLink,
  deleteLink,
  fetchLinksByUser,
  updateLinkDestination,
  type LinkRecord,
} from "@/lib/links";
import {
  Copy,
  ExternalLink,
  Link2,
  Pencil,
  Plus,
  Trash2,
  Check,
  X,
  LinkIcon,
  Sparkles,
  Zap,
} from "lucide-react";
import { toast } from "sonner";

export default function LinksPage() {
  const { user } = useAuth();

  const [links, setLinks] = useState<LinkRecord[]>([]);
  const [destination, setDestination] = useState("");
  const [fetching, setFetching] = useState(false);
  const [creating, setCreating] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingValue, setEditingValue] = useState("");
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [origin, setOrigin] = useState<string>("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isFormFocused, setIsFormFocused] = useState(false);

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
        toast.error("שגיאה בטעינת הקישורים");
      } finally {
        setFetching(false);
      }
    };
    load();
  }, [user]);

  const handleCreate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!user) return;
    setCreating(true);
    try {
      const created = await createLink(user.id, destination.trim());
      setLinks((prev) => [created, ...prev]);
      setDestination("");
      toast.success("הקישור נוצר בהצלחה!");
    } catch (err) {
      console.error(err);
      toast.error("שגיאה ביצירת הקישור");
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
    try {
      const updated = await updateLinkDestination(editingId, editingValue.trim());
      setLinks((prev) => prev.map((l) => (l.id === updated.id ? updated : l)));
      cancelEdit();
      toast.success("הקישור עודכן בהצלחה!");
    } catch (err) {
      toast.error("שגיאה בעדכון הקישור");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    setDeletingId(id);
    try {
      await deleteLink(id);
      setLinks((prev) => prev.filter((l) => l.id !== id));
      toast.success("הקישור נמחק בהצלחה");
    } catch (err) {
      toast.error("שגיאה במחיקת הקישור");
    } finally {
      setDeletingId(null);
    }
  };

  const copyToClipboard = async (link: LinkRecord) => {
    const url = `${shortBase}${link.short_id}`;
    await navigator.clipboard.writeText(url);
    setCopiedId(link.id);
    toast.success("הקישור הועתק!");
    setTimeout(() => setCopiedId(null), 2000);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("he-IL", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const getDomain = (url: string) => {
    try {
      const domain = new URL(url).hostname.replace("www.", "");
      return domain.length > 30 ? domain.slice(0, 30) + "..." : domain;
    } catch {
      return url.length > 30 ? url.slice(0, 30) + "..." : url;
    }
  };

  return (
    <div className="h-full p-4 md:p-8">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">הקישורים שלך</h1>
                <p className="text-muted-foreground text-sm mt-0.5">
                  נהל את הקישורים החכמים שלך במקום אחד
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Create Link Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className={`mb-8 relative group  max-w-2xl ${isFormFocused ? "z-10" : ""}`}
      >
        <div
          className={`absolute -inset-0.5 bg-gradient-to-r from-secondary via-secondary/50 to-secondary rounded-2xl blur opacity-0 transition-opacity duration-500 ${
            isFormFocused ? "opacity-30" : "group-hover:opacity-20"
          }`}
        />
        <div className="relative bg-card border border-border/50 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-secondary/10 p-2 rounded-lg">
              <Plus className="w-4 h-4 text-secondary" />
            </div>
            <div>
              <h2 className="font-semibold">צור קישור חדש</h2>
              <p className="text-xs text-muted-foreground">הדבק כתובת יעד וניצור לך קישור חכם</p>
            </div>
          </div>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleCreate}>
            <div className="relative flex-1">
              <Input
                type="text"
                required
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                onFocus={() => setIsFormFocused(true)}
                onBlur={() => setIsFormFocused(false)}
                placeholder="הכנס כתובת יעד... (לדוגמה: example.com)"
                className="h-9 pl-4 pr-12 text-base bg-background/50 border-border/50 rounded-xl focus:ring-2 focus:ring-secondary/20 transition-all"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
              <Link2 className="h-4 w-4" />
              </div>
            </div>
            <Button
            variant="secondary"
              type="submit"
              disabled={creating || destination.trim().length === 0}
            >
              {creating ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="w-5 h-5" />
                </motion.div>
              ) : (
                <>
                  <Zap className="w-5 h-5 ml-2" />
                  צור קישור
                </>
              )}
            </Button>
          </form>
        </div>
      </motion.div>

      {/* Links List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="bg-card border border-border/50 rounded-2xl shadow-sm overflow-hidden">
          {/* List Header */}
          <div className="px-6 py-4 border-b border-border/50 bg-muted/30">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-sm">כל הקישורים</h3>
              <span className="text-xs text-muted-foreground px-2 py-1 bg-muted rounded-full">
                {links.length} קישורים
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="divide-y divide-border/50">
            {fetching && (
              <div className="p-12 text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="inline-block"
                >
                  <Zap className="w-8 h-8 text-secondary" />
                </motion.div>
                <p className="text-muted-foreground mt-3">טוען קישורים...</p>
              </div>
            )}

            {!fetching && links.length === 0 && (
              <div className="p-16 text-center">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-secondary/20 blur-2xl rounded-full" />
                  <div className="relative bg-gradient-to-br from-muted to-muted/50 p-6 rounded-3xl">
                    <Link2 className="w-12 h-12 text-muted-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">אין קישורים עדיין</h3>
                <p className="text-muted-foreground text-sm max-w-md mx-auto">
                  צור את הקישור הראשון שלך והתחל לעקוף דפדפני In-App בקלות
                </p>
              </div>
            )}

            <AnimatePresence mode="popLayout">
              {links.map((link, index) => (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative"
                >
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-l from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative px-6 py-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    {/* Link Info */}
                    <div className="flex-1 min-w-0">
                      {editingId === link.id ? (
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Input
                            value={editingValue}
                            onChange={(e) => setEditingValue(e.target.value)}
                            disabled={saving}
                            placeholder="הכנס כתובת יעד חדשה..."
                            className="flex-1 h-10 bg-background rounded-lg"
                            autoFocus
                          />
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              onClick={saveEdit}
                              disabled={saving || editingValue.trim().length === 0}
                              className="h-10 px-4 bg-secondary hover:bg-secondary/90 text-white rounded-lg"
                            >
                              {saving ? (
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                >
                                  <Zap className="w-4 h-4" />
                                </motion.div>
                              ) : (
                                <>
                                  <Check className="w-4 h-4 ml-1" />
                                  שמור
                                </>
                              )}
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={cancelEdit}
                              disabled={saving}
                              className="h-10 px-4 rounded-lg"
                            >
                              <X className="w-4 h-4 ml-1" />
                              ביטול
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          {/* Short URL */}
                          <div className="flex items-center gap-2">
                            <div className="bg-secondary/10 p-1.5 rounded-lg">
                              <Link2 className="w-3.5 h-3.5 text-secondary" />
                            </div>
                            <span className="font-mono font-semibold text-sm sm:text-base">
                              {shortBase}
                              <span className="text-secondary">{link.short_id}</span>
                            </span>
                          </div>

                          {/* Destination */}
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <ExternalLink className="w-3 h-3 flex-shrink-0" />
                            <span className="text-xs truncate max-w-[300px] sm:max-w-[400px]" title={link.destination_url}>
                              {link.destination_url}
                            </span>
                          </div>

                          {/* Meta Info */}
                          <div className="flex items-center gap-4 text-xs text-muted-foreground/70">
                            <span>{formatDate(link.created_at)}</span>
                            <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                            <span className="truncate">{getDomain(link.destination_url)}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Quick Actions */}
                    {editingId !== link.id && (
                      <div className="flex items-center gap-1 sm:gap-1.5">
                        {/* Copy Button */}
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => copyToClipboard(link)}
                              className="p-2.5 rounded-xl bg-muted/50 hover:bg-secondary/10 text-muted-foreground hover:text-secondary transition-all duration-200"
                            >
                              {copiedId === link.id ? (
                                <Check className="w-4 h-4 text-secondary" />
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </motion.button>
                          </TooltipTrigger>
                          <TooltipContent side="top">
                            <p>העתק קישור</p>
                          </TooltipContent>
                        </Tooltip>

                        {/* Edit Button */}
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => startEdit(link)}
                              className="p-2.5 rounded-xl bg-muted/50 hover:bg-blue-500/10 text-muted-foreground hover:text-blue-500 transition-all duration-200"
                            >
                              <Pencil className="w-4 h-4" />
                            </motion.button>
                          </TooltipTrigger>
                          <TooltipContent side="top">
                            <p>ערוך יעד</p>
                          </TooltipContent>
                        </Tooltip>

                        {/* Open Button */}
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <motion.a
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              href={`/${link.short_id}`}
                              target="_blank"
                              rel="noreferrer"
                              className="p-2.5 rounded-xl bg-muted/50 hover:bg-purple-500/10 text-muted-foreground hover:text-purple-500 transition-all duration-200 inline-block"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </motion.a>
                          </TooltipTrigger>
                          <TooltipContent side="top">
                            <p>פתח בכרטיסייה חדשה</p>
                          </TooltipContent>
                        </Tooltip>

                        {/* Delete Button */}
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleDelete(link.id)}
                              disabled={deletingId === link.id}
                              className="p-2.5 rounded-xl bg-muted/50 hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-all duration-200 disabled:opacity-50"
                            >
                              {deletingId === link.id ? (
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                >
                                  <Zap className="w-4 h-4" />
                                </motion.div>
                              ) : (
                                <Trash2 className="w-4 h-4" />
                              )}
                            </motion.button>
                          </TooltipTrigger>
                          <TooltipContent side="top">
                            <p>מחק קישור</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
