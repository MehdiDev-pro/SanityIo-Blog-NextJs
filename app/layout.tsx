import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import Banner from "@/components/Banner";

export const metadata: Metadata = {
  title: "Red_Eye Hub",
  description: "Join us at Red Eye Hub, a blog with a focus on software and programming, if you want to explore the world of code.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="max-w-7xl mx-auto">
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  );
}
