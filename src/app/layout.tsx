import './globals.css';
import React from 'react';
import { Providers } from './providers';

export const metadata = {
  title: 'Infinite Scroll App',
  description: 'Next.js Infinite Scroll with Redux Toolkit',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}