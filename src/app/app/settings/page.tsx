"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useAuth } from "@/components/providers/AuthProvider";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function SettingsPage() {
  const { user, loading, error, signOut } = useAuth();
  const { theme, setTheme } = useTheme();


  const isDark = theme === "dark";

  if (loading) {
    return (
      <div className="p-6">
        <p className="text-sm text-foreground/70">טוען פרטי משתמש...</p>
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="p-6 space-y-4">
        <h1 className="text-3xl font-semibold">הגדרות</h1>
        <p className="text-foreground/70">צריך להתחבר כדי לראות את ההגדרות.</p>
        <Button asChild>
          <Link href="/lauth">התחברות</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">הגדרות</h1>
        <p className="text-foreground/70">ניהול פרופיל, נושא וחיבור.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>פרטי משתמש</CardTitle>
          <CardDescription>מידע בסיסי מהחשבון שלך.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-foreground/60">אימייל</span>
            <span className="font-medium">{user.email}</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>עיצוב ומצב</CardTitle>
          <CardDescription>החלפת מצב כהה/בהיר.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="font-medium">מצב נוכחי</p>
            <p className="text-sm text-foreground/70">{isDark ? "כהה" : "בהיר"}</p>
          </div>
          <div className="flex gap-2">
            <Button variant={!isDark ? "default" : "outline"} onClick={() => setTheme("light")}>
              מצב בהיר
            </Button>
            <Button variant={isDark ? "default" : "outline"} onClick={() => setTheme("dark")}>
              מצב כהה
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>חיבור</CardTitle>
          <CardDescription>נהל יציאה מהחשבון.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Separator />
          <Button variant="destructive" onClick={signOut}>
            התנתק
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
