"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { getSupabaseClient } from "@/lib/supabaseClient";
import { Container } from "@/components/ui/container";
import { IconLock } from "@tabler/icons-react";
import { BorderBeam } from "@/components/ui/border-beam";
type AuthMode = "login" | "signup";

export default function AuthPage() {
  const router = useRouter();
  const supabase = useMemo(() => getSupabaseClient(), []);

  const [mode, setMode] = useState<AuthMode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const envError = useMemo(() => {
    if (supabase) return "";
    return "Missing Supabase configuration. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.";
  }, [supabase]);

  useEffect(() => {
    if (!supabase) return;

    const checkSession = async () => {
      const { data, error: sessionError } = await supabase.auth.getSession();
      if (sessionError) {
        setError(sessionError.message);
        return;
      }

      if (data.session) {
        router.replace("/app");
      }
    };

    checkSession();
  }, [supabase, router]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setMessage("");

    if (!supabase) {
      setError(envError || "Supabase configuration is missing.");
      return;
    }

    if (mode === "signup" && password !== confirmPassword) {
      setError("הסיסמאות אינן תואמות");
      return;
    }

    setLoading(true);

    if (mode === "login") {
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        setError(signInError.message);
      } else {
        setMessage("ברוך הבא! מפנה לאפליקציה...");
        router.replace("/app");
      }
    } else {
      const { error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signUpError) {
        setError(signUpError.message);
      } else {
        setMessage("נרשמת בהצלחה! מפנה לאפליקציה...");
        router.replace("/app");
      }
    }

    setLoading(false);
  };

  const featureHighlights = [
    { title: "חיבור מאובטח", description: "אימות באמצעות Supabase עם שמירה על פרטיות." },
    { title: "ממשק נקי", description: "אותו עיצוב מוכר ונעים של העמוד הראשי." },
    { title: "מעבר מהיר", description: "לאחר התחברות עוברים אוטומטית למסך האפליקציה." },
  ];

  return (
    <div className="mt-18">
      <Container
      id="Auth"
        splitHeader={false}
        isDotSeperator={true}
        title="כניסה לאיזור האישי"
        HeaderIcon={<IconLock />}
      >
        <div className="col-span-2">
          {/* // <div className="relative min-h-screen overflow-hidden bg-grid-pattern px-6 py-24"> */}
          {/* <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,120,212,0.12),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(8,133,40,0.12),transparent_25%)]" /> */}

          <div className="col-span-2 flex gap-16">
            <div className="hidden sm:block flex-1 space-y-6 text-right lg:text-right">
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
                מתחברים בקלי קלות,<br /> ממשיכים לבנות עם Linkz
              </h1>
              <p className="max-w-2xl text-lg text-foreground/70">
                הזדהות פשוטה ונקייה שממשיכה את השפה העיצובית של האתר.
                תוך כמה שניות תעברו לאפליקציה להמשך העבודה.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                {featureHighlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl relative border border-border/60 bg-card/60 p-4 backdrop-blur"
                  >
                    <p className="text-base font-semibold text-foreground">{item.title}</p>
                    <p className="text-sm text-foreground/70">{item.description}</p>
                    <BorderBeam
                      className="from-transparent via-teal-400 to-transparent"
                    />                  </div>
                ))}
              </div>
            </div>

            <Card className="relative w-full sm:max-w-1/2 border border-border/70 bg-card/80 shadow-2xl backdrop-blur-xl">
              <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-secondary/10 via-transparent to-transparent" />
              <CardHeader className="relative flex flex-col gap-4">
                <div className="flex w-full flex-col items-center justify-center">
                  <Logo width={110} height={60} />
                  <div className="flex gap-2 rounded-full bg-muted/60 p-1">
                    <Button
                      type="button"
                      variant={mode === "login" ? "secondary" : "ghost"}
                      onClick={() => setMode("login")}
                      className="px-4"
                      size="sm"
                    >
                      התחברות
                    </Button>
                    <Button
                      type="button"
                      variant={mode === "signup" ? "secondary" : "ghost"}
                      onClick={() => setMode("signup")}
                      className="px-4"
                      size="sm"
                    >
                      הרשמה
                    </Button>
                  </div>
                </div>
                <div className="text-right">
                  <CardTitle className="text-2xl font-semibold">
                    {mode === "login" ? "חוזרים פנימה" : "פותחים חשבון חדש"}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {mode === "login"
                      ? "הכניסו מייל וסיסמה כדי להמשיך לאפליקציה."
                      : "כמה פרטים קטנים כדי להתחיל וליצור חשבון."}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="relative">
                {error && (
                  <div className="mb-4 rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                    {error}
                  </div>
                )}

                {message && (
                  <div className="mb-4 rounded-lg border border-secondary/30 bg-secondary/10 px-4 py-3 text-sm text-secondary-foreground">
                    {message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground/80" htmlFor="email">
                      אימייל
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="w-full rounded-lg border border-border/80 bg-background/80 px-4 py-3 text-sm shadow-sm outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/40"
                      placeholder="you@example.com"
                      autoComplete="email"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground/80" htmlFor="password">
                      סיסמה
                    </label>
                    <input
                      id="password"
                      type="password"
                      required
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      className="w-full rounded-lg border border-border/80 bg-background/80 px-4 py-3 text-sm shadow-sm outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/40"
                      placeholder="••••••••"
                      autoComplete={mode === "login" ? "current-password" : "new-password"}
                    />
                  </div>

                  {mode === "signup" && (
                    <div className="space-y-2">
                      <label
                        className="block text-sm font-medium text-foreground/80"
                        htmlFor="confirm-password"
                      >
                        אימות סיסמה
                      </label>
                      <input
                        id="confirm-password"
                        type="password"
                        required
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        className="w-full rounded-lg border border-border/80 bg-background/80 px-4 py-3 text-sm shadow-sm outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/40"
                        placeholder="••••••••"
                        autoComplete="new-password"
                      />
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full py-3 text-base font-semibold"
                    disabled={loading}
                  >
                    {loading
                      ? "מבצע..."
                      : mode === "login"
                        ? "התחברות"
                        : "הרשמה"}
                  </Button>
                </form>
              </CardContent>
              <BorderBeam
                duration={6}
                delay={3}
                size={400}
                borderWidth={1}
                className="from-transparent via-teal-400 to-transparent"
              />
            </Card>
          </div>
          {/* // </div> */}
        </div>
      </Container>
    </div>
  );
}
