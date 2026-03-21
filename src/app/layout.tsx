import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DePIN Dashboard | @samdevrel",
  description: "Decentralized Physical Infrastructure Networks - Track Helium, Filecoin, Render, IoTeX, Grass, Akash.",
  keywords: ["DePIN", "decentralized", "infrastructure", "Helium", "Filecoin", "Render", "IoT"],
  authors: [{ name: "Sam", url: "https://x.com/samdevrel" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
