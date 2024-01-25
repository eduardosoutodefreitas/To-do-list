import type { Metadata } from 'next';
import { Inter_Tight } from 'next/font/google';
import './globals.css';
import Header from './components/Header/header';

const inter = Inter_Tight({ subsets: ['latin'], weight: ['400', '500'] });

export const metadata: Metadata = {
  title: 'FocalPoint to-do list',
  description:
    'A simple to-do list created as part of the technical challenge.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
