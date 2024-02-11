import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { supabaseClient } from "./supabase/client";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleLoginWithGithub = () => {
  const supabase = supabaseClient();

  supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: location.origin + "/auth/callback",
    },
  });
};

export const getDate = (timestamp: any) => {
  const date = timestamp.toDate();
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const formattedDate = `${year}-${month}-${day}`;
  // "YYYY-MM-DD"
  return formattedDate;
};

export const getDateWithTime = (timestamp: any) => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  
  return `${year}-${month}-${day} ${hours}:${minutes}`;
};
