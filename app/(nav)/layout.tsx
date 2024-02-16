export default function NavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex flex-col px-4 md:px-24 min-h-dvh">
    {children}
  </div>;
}
