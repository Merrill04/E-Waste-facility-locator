// src/app/layout.tsx
import './global.css';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body>
        <header>
          <h1 style={{ textAlign: 'center', color: 'green' }}>My E-Waste Locator App</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
