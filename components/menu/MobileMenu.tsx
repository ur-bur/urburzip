"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Github, LogOut, Menu } from "lucide-react";
import Link from "next/link";
import { handleLoginWithGithub } from "@/lib/utils";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { supabaseClient } from "@/lib/supabase/client";

export function MobileMenu({ user }: { user: User | undefined }) {
  const [position, setPosition] = React.useState("0");
  
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = supabaseClient();
    await supabase.auth.signOut();
    router.refresh();
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Menu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Profile</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {user ? (
          <DropdownMenuItem onClick={handleLogout}>
            <LogOut />
            Logout
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem onClick={handleLoginWithGithub}>
            <Github />
            Login with Github
          </DropdownMenuItem>
        )}

        <DropdownMenuSeparator />

        <DropdownMenuLabel>Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <Link href="/about">
            <DropdownMenuRadioItem value="0">ABOUT</DropdownMenuRadioItem>
          </Link>
          <Link href="/apply">
            <DropdownMenuRadioItem value="1">APPLY</DropdownMenuRadioItem>
          </Link>
          <Link href="/manager">
            <DropdownMenuRadioItem value="2">MANAGER</DropdownMenuRadioItem>
          </Link>
          <Link href="/music">
            <DropdownMenuRadioItem value="3">MUSIC</DropdownMenuRadioItem>
          </Link>
          <Link href="/dance">
            <DropdownMenuRadioItem value="4">DANCE</DropdownMenuRadioItem>
          </Link>
          <Link href="/profile">
            <DropdownMenuRadioItem value="5">PROFILE</DropdownMenuRadioItem>
          </Link>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
