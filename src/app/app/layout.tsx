import React from "react";

export default function Home({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="bg-zinc-800 flex flex-col">{children}</main>;
}
