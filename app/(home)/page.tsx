import SignInButton from "@/components/sign/SignInButton";
import InitUser from "@/lib/store/InitUser";
import { supabaseServer } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = supabaseServer();
  const { data } = await supabase.auth.getSession();
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center md:p-24">
        <h1 className="text-3xl font-bold">URBURZIP</h1>
        <SignInButton user={data.session?.user} />
      </main>
      <InitUser user={data.session?.user} />
    </>
  );
}
