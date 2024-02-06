import type { Metadata } from "next";
// import { Roboto_Condensed } from "next/font/google";
import "./globals.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";

// const inter = Roboto_Condensed({ subsets: ["latin"] });

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
      <body>
        <main className="flex min-h-screen flex-col items-center justify-between">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
