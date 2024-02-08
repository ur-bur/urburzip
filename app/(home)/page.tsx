import InitUser from "@/lib/store/InitUser";
import { supabaseServer } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = supabaseServer();
  const { data } = await supabase.auth.getSession();
  return (
    <>
      <main>
        <div className="flex-1 h-full">
          Main
        </div>
      </main>
      <InitUser user={data.session?.user} />
    </>
  );
}
