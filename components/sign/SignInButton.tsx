"use client";

import { Button } from "@/components/ui/button";
import { supabaseClient } from "@/lib/supabase/client";
import { handleLoginWithGithub } from "@/lib/utils";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

export default function SignInButton({ user }: { user: User | undefined }) {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = supabaseClient();
    await supabase.auth.signOut();
    router.refresh();
  };
  return (
    <>
      {user ? (
        <Button onClick={handleLogout}>Logout</Button>
      ) : (
        <Button onClick={handleLoginWithGithub}>Login</Button>
      )}
    </>
  );
}
