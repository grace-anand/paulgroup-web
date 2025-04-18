import type { Metadata } from "next";
import { ClientBody } from "./ClientBody";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ruby Builders - Leading Real Estate Developer in Chennai | Since 1995",
  description: "Discover premium residential projects, plots & commercial properties by Ruby Builders",
  icons: {
    icon: [
      {
        url: "https://ext.same-assets.com/165153690/3678318986.png",
        href: "https://ext.same-assets.com/165153690/3678318986.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientBody>
          {children}
        </ClientBody>
      </body>
    </html>
  );
}
