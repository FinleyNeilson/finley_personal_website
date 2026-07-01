import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export function SiteFooter() {
  return (
    <footer className="mt-24 flex flex-col items-start justify-between gap-4 text-xs text-fg4 sm:flex-row sm:items-center">
      <p>© {new Date().getFullYear()} Finley.</p>
      <div className="flex items-center gap-4">
        <a href="mailto:you@example.com" aria-label="Email" className="hover:text-fg1">
          <FaEnvelope size={16} />
        </a>
        <a href="https://github.com/yourusername" aria-label="GitHub" className="hover:text-fg1">
          <FaGithub size={16} />
        </a>
        <a href="https://linkedin.com/in/yourusername" aria-label="LinkedIn" className="hover:text-fg1">
          <FaLinkedin size={16} />
        </a>
      </div>
    </footer>
  );
}
