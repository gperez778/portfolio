import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-muted text-body-sm">
      <p>© {new Date().getFullYear()} George Perez. All rights reserved.</p>
      <nav className="flex items-center gap-6">
        <Link href="/" className="hover:text-subtle transition-colors">
          Work
        </Link>
        <Link href="/about" className="hover:text-subtle transition-colors">
          About
        </Link>
        <a
          href="https://www.linkedin.com/in/perezg/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-subtle transition-colors"
        >
          LinkedIn ↗
        </a>
      </nav>
    </footer>
  );
}
