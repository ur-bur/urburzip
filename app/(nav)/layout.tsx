export default function NavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="px-4 md:px-24">
    {children}
  </div>;
}
