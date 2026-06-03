"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/who-we-are", label: "Who We Are" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/impact", label: "Our Impact" },
  { href: "/our-projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur">
      {isOpen && (
        <button
          type="button"
          className="fixed inset-x-0 bottom-0 top-[73px] z-10 bg-gray-950/30 md:hidden"
          aria-label="Close main menu"
          onClick={() => setIsOpen(false)}
        />
      )}
      <nav
        className="relative z-20 mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4 py-3 lg:px-6"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex items-center gap-3 rounded-lg"
          aria-label="Green World Initiative home"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/gwi.png"
            alt="Green World Initiative"
            width={48}
            height={48}
            priority
          />
          <span className="text-xs font-bold leading-tight text-lime-900 sm:text-sm">
            Green World
            <br />
            Initiative
          </span>
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-gray-600 hover:bg-lime-50 hover:text-lime-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-lime-300 md:hidden"
          aria-controls="main-menu"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close main menu" : "Open main menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            {isOpen ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div
          id="main-menu"
          className={`grid w-full transition-[grid-template-rows,opacity] duration-200 md:block md:w-auto ${
            isOpen
              ? "grid-rows-[1fr] opacity-100"
              : "pointer-events-none grid-rows-[0fr] opacity-0 md:pointer-events-auto md:opacity-100"
          }`}
        >
          <div className="overflow-hidden md:overflow-visible">
            <ul className="mt-3 flex max-h-[calc(100vh-6rem)] flex-col gap-1 overflow-y-auto rounded-xl border border-gray-200 bg-white p-2 font-semibold shadow-xl md:mt-0 md:max-h-none md:flex-row md:items-center md:gap-2 md:overflow-visible md:border-0 md:bg-transparent md:p-0 md:shadow-none">
              {links.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setIsOpen(false)}
                      className={`block rounded-lg px-4 py-2.5 text-sm ${
                        active
                          ? "bg-lime-700 text-white md:bg-lime-50 md:text-lime-800"
                          : "text-gray-600 hover:bg-lime-50 hover:text-lime-800"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="mt-1 md:ml-2 md:mt-0">
                <Link
                  href="/contact-us"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg bg-lime-700 px-4 py-2.5 text-center text-sm text-white shadow-sm hover:bg-lime-800"
                >
                  Partner With Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
