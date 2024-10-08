import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: 'TranspareSer',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en">
        <body>
          <Header />
          {children}
          <Analytics />
          <Footer />
        </body>
    </html>
  );
}
  