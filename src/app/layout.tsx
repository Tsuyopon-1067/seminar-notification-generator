import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Seminar Notification Generator',
  description: 'Generate seminar notification',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className={'bg-green-400 p-2'}>
          <span className={'text-xl text-white font-bold ml-3'}>
            Seminar Notification Generator
          </span>
        </header>
        {children}
        <footer className={'bg-green-400 p-2 mt-4'}>
          <span className={'text-xs text-white ml-2'}>© 2024 Tsuyopon-1067</span>
        </footer>
      </body>
    </html>
  );
}
