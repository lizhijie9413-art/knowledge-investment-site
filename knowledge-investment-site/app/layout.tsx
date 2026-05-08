import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Knowledge Capital",
 description: "Knowledge Investment Blogger Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <html lang="en">
      <body>{children}</body>
    </html>
  );
}
