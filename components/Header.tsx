import Link from "next/link";
import SignInButton from "./sign/SignInButton";
import { supabaseServer } from "@/lib/supabase/server";
import { Menu } from "lucide-react";

export default async function Header() {
  const supabase = supabaseServer();
  const { data } = await supabase.auth.getSession();
  return (
    <div className="w-full flex justify-between">
      <div>
        <h1 className="text-3xl font-bold">URBURZIP</h1>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <div className="hidden md:flex md:items-center md:gap-4">
          <Link href={"/about"}>About</Link>
          <Link href={"/apply"}>Apply</Link>
          <Link href={"/manager"}>Manager</Link>
          <Link href={"/music"}>Music</Link>
          <Link href={"/dance"}>Dance</Link>
        </div>
        <SignInButton user={data.session?.user} />
        <Menu className="md:hidden" />
      </div>
    </div>
  );
}
