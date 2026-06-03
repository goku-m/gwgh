"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/dashboard", label: "General" },
  { href: "/dashboard/zones", label: "Zones" },
  { href: "/dashboard/communities", label: "Communities" },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="m-3 inline-flex h-11 w-11 items-center justify-center rounded-lg text-gray-600 hover:bg-lime-50 hover:text-lime-800 sm:hidden"
        aria-controls="dashboard-sidebar"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close dashboard navigation" : "Open dashboard navigation"}
        onClick={() => setIsOpen((open) => !open)}
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <aside
        id="dashboard-sidebar"
        className={`fixed inset-y-0 left-0 z-40 w-64 border-r border-gray-200 bg-white transition-transform sm:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Dashboard navigation"
      >
        <div className="h-full overflow-y-auto px-4 py-5">
          <Link href="/" className="mb-8 flex items-center gap-3 rounded-lg">
            <Image src="/gwi.png" alt="Green World Initiative" width={44} height={44} />
            <span className="text-lg font-bold text-lime-950">Dashboard</span>
          </Link>
          <nav>
            <ul className="space-y-2">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`block rounded-lg px-4 py-3 text-sm font-semibold ${
                        active
                          ? "bg-lime-100 text-lime-900"
                          : "text-gray-600 hover:bg-gray-50 hover:text-lime-900"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
