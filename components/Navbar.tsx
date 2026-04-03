"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import clsx from "clsx";

const LOGO_URL =
  "/assets/LgR4kW4lqcIut2mzQ6PfY2jfAck.png";

const links = [
  { href: "/", label: "Work" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-16"
      style={{ backdropFilter: "blur(12px)", background: "rgba(10,10,10,0.8)" }}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center shrink-0">
        <Image
          src={LOGO_URL}
          alt="George Perez"
          width={32}
          height={32}
          className="rounded-full object-cover"
          unoptimized
        />
      </Link>

      {/* Nav links */}
      <nav className="flex items-center gap-6">
        {links.map(({ href, label }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={clsx(
                "text-body-sm font-medium transition-colors duration-200",
                active ? "text-text" : "text-muted hover:text-subtle"
              )}
            >
              {label}
            </Link>
          );
        })}
        <a
          href="https://www.linkedin.com/in/perezg/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-body-sm font-medium text-muted hover:text-subtle transition-colors duration-200"
        >
          LinkedIn ↗
        </a>
      </nav>
    </motion.header>
  );
}
