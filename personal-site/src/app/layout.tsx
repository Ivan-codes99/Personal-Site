import type { Metadata } from "next";
import {Analytics} from '@vercel/analytics/next';
import "@/styles/output.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Ivan Figueroa | Full-Stack Developer",
  description: "Portfolio site showcasing my work and skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <Sidebar />
        <main className="ml-36">
          {children}
        </main>
        <Analytics /> 
      </body>
    </html>
  );
}