"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
  { href: "/cv.pdf", label: "CV", external: true },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-row gap-1 sm:flex-col">
      {links.map((link) => {
        const isActive = pathname === link.href;

        if (link.external) {
          return (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              className="rounded px-2 py-1 font-mono text-sm font-medium text-fg4 transition-colors hover:text-fg1"
            >
              {link.label}
            </a>
          );
        }

        return (
          <Link
            key={link.href}
            href={link.href}
            style={{ textDecoration: "none" }}
            className={`rounded px-2 py-1 font-mono text-sm font-medium transition-colors ${isActive ? "bg-accent/15 text-accent" : "text-fg4 hover:text-fg1"
              }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
