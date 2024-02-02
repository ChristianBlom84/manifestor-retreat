import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.scss";

const inter = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manifestor Retreat",
  description: "Manifestor retreat in Crete",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
