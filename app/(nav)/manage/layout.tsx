import Link from "next/link";
import { Metadata } from "next";
import { supabaseServer } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "manage",
};

export default async function ManageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = supabaseServer();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    console.log(error);
  }

  if (!user) {
    return <p>로그인 후 접근할 수 있습니다.</p>;
  }

  const {data} = await supabase.from("managers").select("*").eq("id", user.id);

  if (data?.length === 0) return <p>관리자만 접근 가능합니다.</p>;
  return (
    <div>
      <nav className="flex justify-center mb-4">
        <ul className="flex gap-3 bg-yellow-800 rounded-full text-white px-4 items-center justify-between">
          <Link href={"/manage/user"} className="p-3 rounded-3xl hover:bg-yellow-700 hover:cursor-pointer">User</Link>
          <Link href={"/manage/apply"} className="p-3 rounded-3xl hover:bg-yellow-700 hover:cursor-pointer">Apply</Link>
          <Link href={"/manage/member"} className="p-3 rounded-3xl hover:bg-yellow-700 hover:cursor-pointer">Member</Link>
        </ul>
      </nav>
      {children}
    </div>
  );
}
