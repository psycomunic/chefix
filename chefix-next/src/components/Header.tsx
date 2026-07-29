"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { APP_URL, NAV_ITEMS } from "@/lib/site";

/** Header sticky com navegação, link ativo e menu mobile. */
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="site">
      <div className="wrap nav">
        <Logo />

        <nav className="menu">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(item.href) ? "active" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="nav-cta">
          <ThemeToggle />
          <a href={APP_URL} className="login">
            Login
          </a>
          <Link href="/checkout" className="btn btn-primary">
            Comece grátis
          </Link>
        </div>

        <button
          className="burger"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav className="menu-mobile" onClick={() => setOpen(false)}>
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <a href={APP_URL}>Login</a>
          <Link href="/checkout" className="btn btn-primary btn-block">
            Comece grátis
          </Link>
        </nav>
      )}
    </header>
  );
}
