import "~/styles/globals.css";

import { type Metadata } from "next";
import { JetBrains_Mono, Work_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

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
        <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-10 sm:px-12 sm:py-34">
          <div className="flex min-h-0 flex-1 flex-col gap-8 sm:grid sm:grid-cols-[7rem_1fr_7rem] sm:grid-rows-[auto_1fr] sm:gap-x-16 sm:gap-y-14">
            <Link
              href="/"
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center no-underline sm:col-start-1 sm:row-start-1"
            >
              <Image src="/Icon.svg" width={40} height={40} alt="Finley Neilson" />
            </Link>
            <h1 className="flex h-10 items-center font-sans text-2xl font-bold tracking-wide text-fg0 sm:col-start-2 sm:row-start-1">
              Finley Neilson
            </h1>
            <div className="sm:col-start-1 sm:row-start-2">
              <SiteNav />
            </div>
            <div className="flex min-h-0 flex-col sm:col-start-2 sm:row-start-2">
              <div className="flex min-h-0 flex-1 flex-col gap-6 sm:gap-14">{children}</div>
              <SiteFooter />
            </div>
          </div>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
