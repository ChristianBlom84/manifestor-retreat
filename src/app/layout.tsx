import type { Metadata } from 'next';
import { Roboto_Condensed } from 'next/font/google';
import './globals.scss';
import Header from './components/Header';

const roboto = Roboto_Condensed({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Manifestor Retreat',
  description: 'Manifestor retreat in Barcelona',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="flex min-h-screen flex-col items-center justify-between">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
