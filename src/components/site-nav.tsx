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
        const isActive =
          link.href === "/"
            ? pathname === link.href
            : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            style={{ textDecoration: "none" }}
            className={`relative pb-3 font-mono text-sm font-medium transition-colors sm:pb-0 ${
              isActive ? "text-pink" : "text-fg4 hover:text-fg1"
            }`}
          >
            <span
              className={`absolute left-1/2 top-full mt-0.5 -translate-x-1/2 sm:top-auto sm:-left-3 sm:mt-0 sm:translate-x-0 ${isActive ? "opacity-100" : "opacity-0"}`}
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
