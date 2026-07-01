
export function SiteFooter() {
  return (
    <footer className="mt-24 flex flex-col items-start justify-between gap-4 border-t border-bg2 pt-6 text-xs text-fg4 sm:flex-row sm:items-center">
      <p>© {new Date().getFullYear()} Finley.</p>
      <div className="flex gap-4">
        <a href="mailto:you@example.com" className="hover:text-fg1">
          Email
        </a>
        <a href="https://github.com/yourusername" className="hover:text-fg1">
          GitHub
        </a>
        <a href="https://linkedin.com/in/yourusername" className="hover:text-fg1">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
