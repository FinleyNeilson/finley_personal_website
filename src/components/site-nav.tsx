"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-row gap-5 sm:flex-col sm:gap-2">
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            style={{ textDecoration: "none" }}
            className={`relative font-mono text-sm font-medium transition-colors ${
              isActive ? "text-pink" : "text-fg4 hover:text-fg1"
            }`}
          >
            <span
              className={`absolute -left-3 ${isActive ? "opacity-100" : "opacity-0"}`}
            >
              •
            </span>
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
