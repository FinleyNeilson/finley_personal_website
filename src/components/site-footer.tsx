import { FaEnvelope, FaFilm, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGoodreads, SiLeetcode } from "react-icons/si";

export function SiteFooter() {
  return (
    <footer className="mt-10 flex flex-col items-start justify-between gap-4 text-sm text-fg4 sm:mt-20 sm:flex-row sm:items-center">
      <p>© {new Date().getFullYear()} Finley Neilson.</p>
      <div className="flex items-center gap-3">
        <a href="mailto:finleyjohnneilson@gmail.com" aria-label="Email" className="text-accent hover:text-blue">
          <FaEnvelope size={16} />
        </a>
        <a href="https://github.com/FinleyNeilson" aria-label="GitHub" className="text-accent hover:text-blue">
          <FaGithub size={16} />
        </a>
        <a href="https://linkedin.com/in/finley-neilson-56267a224" aria-label="LinkedIn" className="text-accent hover:text-blue">
          <FaLinkedin size={16} />
        </a>
        <a href="https://leetcode.com/u/finleyjohnneilson/" aria-label="LeetCode" className="text-accent hover:text-blue">
          <SiLeetcode size={16} />
        </a>
        <a href="https://www.goodreads.com/user/show/106020046-finley-neilson" aria-label="Goodreads" className="text-accent hover:text-blue">
          <SiGoodreads size={16} />
        </a>
        <a href="https://letterboxd.com/finleyiscool/" aria-label="Letterboxd" className="text-accent hover:text-blue">
          <FaFilm size={16} />
        </a>
      </div>
    </footer>
  );
}
