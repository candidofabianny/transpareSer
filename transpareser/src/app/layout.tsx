import type { Metadata } from 'next'
import { voigante } from "../assets/fonts/fonts"
import { Rosarivo } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'


const rosarivo = Rosarivo({ subsets: ["latin"],
display: "swap",
variable: "--font-rosarivo",
weight: "400"
})

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
      lang="en"
      className={`${rosarivo.className} ${voigante.className}`}>
        <body className="font-rosarivo">
          <Header />
          {children}
        </body>
    </html>
  );
}
  