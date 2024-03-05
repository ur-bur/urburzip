import Link from "next/link";
import SignInButton from "./sign/SignInButton";
import { supabaseServer } from "@/lib/supabase/server";
import { MobileMenu } from "./menu/MobileMenu";

export default async function Header() {
  const supabase = supabaseServer();
  const {data} = await supabase.auth.getSession();
  const manager = await supabase.from("managers").select("*").eq("id", data.session?.user.id as string);
  return (
    <div className="w-full flex justify-between p-4 md:px-24 md:py-6">
      <Link href={"/"}>
        <h1 className="text-3xl font-bold leading-normal">URBURZIP</h1>
      </Link>
      <div>
        <div className="hidden md:flex gap-4 justify-center items-center">
          <div className="flex items-center gap-4">
            {/* <Link href={"/about"}>About</Link> */}
            {manager.data?.length !== undefined? <Link href={"/manage"}>Manage</Link>:null}
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
