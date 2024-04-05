import type { Metadata } from 'next';
import { Orbitron, Roboto } from 'next/font/google';
import './globals.css';

const orbitron = Orbitron({ weight: '700', subsets: ['latin'], variable: '--font-orbitron' });
const roboto = Roboto({ weight: '400', subsets: ['latin'], variable: '--font-roboto' });

export const metadata: Metadata = {
  title: 'Christian Kwabena Koranteng',
  description: 'Portfolio website for Christian Kwabena Koranteng',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${roboto.variable}`}>{children}</body>
    </html>
  );
}
