import "./globals.css";
import { ReactNode } from "react";
import Link from "next/link";

export const metadata = {
  title: "Pillars of Resolve",
  description: "Rules, talents, spells, and a character builder."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-zinc-800/60">
          <nav className="container flex items-center gap-3 py-3 text-sm">
            <Link href="/" className="font-bold text-white">Pillars of Resolve</Link>
            <Link href="/rules">Rules</Link>
            <Link href="/talents">Talents</Link>
            <Link href="/spells">Spells</Link>
            <Link href="/archetypes">Archetypes</Link>
            <Link href="/builder">Builder</Link>
            <Link href="/characters">My Characters</Link>
          </nav>
        </header>
        <main className="container py-6">{children}</main>
        <footer className="container py-10 text-xs text-zinc-500">
          © {new Date().getFullYear()} Pillars of Resolve — SRD draft
        </footer>
      </body>
    </html>
  );
}
