import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export function SiteFooter() {
  return (
    <footer className="mt-8 flex flex-col items-start justify-between gap-4 text-sm text-fg4 sm:flex-row sm:items-center">
      <p>© {new Date().getFullYear()} Finley Neilson.</p>
      <div className="flex items-center gap-4">
        <a href="mailto:you@example.com" aria-label="Email" className="text-accent hover:text-blue">
          <FaEnvelope size={16} />
        </a>
        <a href="https://github.com/yourusername" aria-label="GitHub" className="text-accent hover:text-blue">
          <FaGithub size={16} />
        </a>
        <a href="https://linkedin.com/in/yourusername" aria-label="LinkedIn" className="text-accent hover:text-blue">
          <FaLinkedin size={16} />
        </a>
      </div>
    </footer>
  );
}
