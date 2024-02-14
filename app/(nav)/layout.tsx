export default function NavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex-1 px-4 md:px-24 flex items-center">
    {children}
  </div>;
}
