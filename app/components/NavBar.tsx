"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/who-we-are", label: "Who We Are" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact-us", label: "Contact" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur">
      <nav
        className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4 py-3 lg:px-6"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex items-center gap-3 rounded-lg"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/gwi.png"
            alt="Green World Initiative"
            width={48}
            height={48}
            priority
          />
          <span className="hidden text-sm font-bold leading-tight text-lime-900 sm:block">
            Green World
            <br />
            Initiative
          </span>
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-gray-600 hover:bg-lime-50 hover:text-lime-800 md:hidden"
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
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
        >
          <ul className="mt-3 flex flex-col gap-1 rounded-xl border border-gray-100 bg-gray-50 p-2 font-semibold md:mt-0 md:flex-row md:items-center md:gap-2 md:border-0 md:bg-transparent md:p-0">
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
                        : "text-gray-600 hover:bg-white hover:text-lime-800 md:hover:bg-lime-50"
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
      </nav>
    </header>
  );
}
