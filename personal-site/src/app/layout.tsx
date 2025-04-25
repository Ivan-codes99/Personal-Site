// src/app/layout.tsx
import type { Metadata } from "next";
import "@/styles/output.css";

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
        {/* Header will go here later */}
        {children}
        {/* Footer will go here later */}
      </body>
    </html>
  );
}
