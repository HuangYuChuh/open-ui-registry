import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Open UI Registry",
  description:
    "Curated, verified, installable frontend components distributed as source code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
