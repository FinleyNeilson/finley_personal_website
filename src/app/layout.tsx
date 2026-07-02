import "~/styles/globals.css";

import { type Metadata } from "next";
import { JetBrains_Mono, Work_Sans } from "next/font/google";
import Image from "next/image";
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

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${workSans.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-bg0 font-sans text-fg1 antialiased">
        <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-34 sm:px-12">
          <div className="flex min-h-0 flex-1 flex-col gap-8 sm:grid sm:grid-cols-[7rem_1fr_7rem] sm:gap-16">
            <aside className="flex flex-shrink-0 flex-row items-center gap-6 sm:flex-col sm:items-start sm:gap-14">
              <Link
                href="/"
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center no-underline"
              >
                <Image src="/Icon.svg" width={40} height={40} alt="Finley Neilson" />
              </Link>
              <SiteNav />
            </aside>
            <main className="flex min-h-0 flex-col">
              <div className="flex min-h-0 flex-1 flex-col gap-6 sm:gap-14">
                <h1 className="flex h-10 items-center font-sans text-2xl font-bold tracking-wide text-fg0">
                  Finley Neilson
                </h1>
                {children}
              </div>
              <SiteFooter />
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
