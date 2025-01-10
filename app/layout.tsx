import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next Js Blog",
  description:"Testing a Next Js App"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
            <body>
                <header>
                  <nav className="bg-blue-500 p-4 shadow-md">
                    <div className="container mx-auto flex justify-between items-center">
                      <Link href="/" className="text-white text-xl font-bold">BLOOOG</Link>
                      <ul className="flex space-x-6">
                        <li><Link href="/" className="text-white hover:text-blue-200">Home</Link></li>
                        <li><Link href="/about" className="text-white hover:text-blue-200">About</Link></li>
                      </ul>
                  </div>
                  </nav>
                </header>
                {children}
            </body>
        </html>
  )
}
