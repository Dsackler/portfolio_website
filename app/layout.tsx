'use client';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { ThemeProvider } from 'next-themes';

export const metadata = {
  title: 'David Sackler',
  description: 'My Portfolio (A portion of it at least)',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <ThemeProvider enableSystem={true} attribute='class'>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
