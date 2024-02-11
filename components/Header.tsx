import Link from "next/link";
import SignInButton from "./sign/SignInButton";
import { supabaseServer } from "@/lib/supabase/server";
import { Menu } from "lucide-react";
import { DropdownMenu } from "./ui/dropdown-menu";
import { MobileMenu } from "./menu/MobileMenu";

export default async function Header() {
  const supabase = supabaseServer();
  const { data } = await supabase.auth.getSession();
  return (
    <div className="w-full flex justify-between mb-8">
      <h1 className="text-3xl font-bold leading-normal">URBURZIP</h1>
      <div>
        <div className="hidden md:flex gap-4 justify-center items-center">
          <div className="flex items-center gap-4">
            <Link href={"/about"}>About</Link>
            <Link href={"/apply"}>Apply</Link>
            <Link href={"/manager"}>Manager</Link>
            <Link href={"/music"}>Music</Link>
            <Link href={"/dance"}>Dance</Link>
          </div>
          <SignInButton user={data.session?.user} />
        </div>
        <div className="md:hidden">
          <MobileMenu user={data.session?.user} />
        </div>
      </div>
    </div>
  );
}
