import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import Link from "next/link";

import { SiteNav } from "~/components/site-nav";
import { SiteFooter } from "~/components/site-footer";

export const metadata: Metadata = {
  title: "Finley Neilson",
  description: "Personal website",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
  ],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-bg0 font-sans text-fg1 antialiased">
        <div className="mx-auto flex min-h-screen max-w-4xl flex-col px-6 py-16 sm:px-12">
          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <aside className="flex flex-shrink-0 flex-row items-center gap-6 sm:w-32 sm:flex-col sm:items-start sm:gap-8">
              <Link
                href="/"
                className=" flex h-10 w-10 flex-shrink-0 items-center justify-center no-underline"
              >
                <svg width="40" height="40" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <rect width="64" height="64" rx="14" fill="#8ec07c" />
                  <text
                    x="32"
                    y="35"
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontFamily="var(--font-jetbrains-mono), monospace"
                    fontSize="34"
                    fontWeight="700"
                    fill="#282828"
                  >
                    F
                  </text>
                </svg>
              </Link>
              <SiteNav />
            </aside>
            <main className="flex-1">{children}</main>
          </div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
