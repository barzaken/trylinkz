import { getSupabaseClient } from "@/lib/supabaseClient";

export type LinkRecord = {
  id: string;
  user_id: string;
  short_id: string;
  destination_url: string;
  created_at: string;
  updated_at: string;
};

export function normalizeUrl(input: string) {
  const value = input.trim();
  if (!value) return value;
  const hasProtocol = /^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(value);
  return hasProtocol ? value : `https://${value}`;
}

export function generateShortId(length = 8) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i += 1) {
    result += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
  }
  return result;
}

export async function fetchLinksByUser(userId: string) {
  const supabase = getSupabaseClient();
  if (!supabase) throw new Error("Supabase is not configured");

  const { data, error } = await supabase
    .from("links")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return (data ?? []) as LinkRecord[];
}

export async function createLink(userId: string, destinationUrl: string) {
  const supabase = getSupabaseClient();
  if (!supabase) throw new Error("Supabase is not configured");

  const shortId = generateShortId(8);
  const normalized = normalizeUrl(destinationUrl);

  const { data, error } = await supabase
    .from("links")
    .insert({
      user_id: userId,
      short_id: shortId,
      destination_url: normalized,
    })
    .select()
    .single();

  if (error) throw error;
  return data as LinkRecord;
}

export async function updateLinkDestination(id: string, destinationUrl: string) {
  const supabase = getSupabaseClient();
  if (!supabase) throw new Error("Supabase is not configured");

  const normalized = normalizeUrl(destinationUrl);

  const { data, error } = await supabase
    .from("links")
    .update({ destination_url: normalized, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data as LinkRecord;
}

export async function deleteLink(id: string) {
  const supabase = getSupabaseClient();
  if (!supabase) throw new Error("Supabase is not configured");

  const { error } = await supabase.from("links").delete().eq("id", id);
  if (error) throw error;
}

export async function fetchLinkByShortId(shortId: string) {
  const supabase = getSupabaseClient();
  if (!supabase) throw new Error("Supabase is not configured");

  const { data, error } = await supabase
    .from("links")
    .select("*")
    .eq("short_id", shortId)
    .limit(1)
    .maybeSingle();

  if (error) throw error;
  return data as LinkRecord | null;
}
