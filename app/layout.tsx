// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Wedding Team | Find Your Wedding Vendors",
  description:
    "A place for engaged couples to find and book their dream wedding vendors.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100">
        <Navbar />
        <div className="">{children}</div>
      </body>
    </html>
  );
}
