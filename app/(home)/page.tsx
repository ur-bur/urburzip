import Header from "@/components/Header";
import InitUser from "@/lib/store/InitUser";
import { supabaseServer } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = supabaseServer();
  const { data } = await supabase.auth.getSession();
  return (
    <>
      <main className="">
        <div className="flex-1 h-full"></div>
      </main>
      <InitUser user={data.session?.user} />
    </>
  );
}
