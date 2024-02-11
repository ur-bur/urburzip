import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "manage",
};

export default function ManageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
