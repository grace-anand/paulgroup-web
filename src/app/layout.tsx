import type { Metadata } from "next";
import { ClientBody } from "./ClientBody";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Paul Builders - Leading Real Estate Developer in Chennai | Since 1995",
  description:
    "Discover premium residential projects, plots & commercial properties by Paul Builders",
  icons: {
    icon: [
      {
        url: "/logo.png",
        href: "/logo.png",
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
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
