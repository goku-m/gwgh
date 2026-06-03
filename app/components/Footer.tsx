import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/who-we-are", label: "Who We Are" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/impact", label: "Impact" },
  { href: "/our-projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact-us", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-lime-100 bg-lime-950 text-lime-50">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-4 py-10 lg:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link href="/" className="flex items-center gap-3 rounded-lg">
            <Image
              src="/gwi.png"
              alt="Green World Initiative"
              width={44}
              height={44}
            />
            <span className="font-bold">Green World Initiative</span>
          </Link>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-lime-100">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex flex-col items-center justify-between gap-3 border-t border-lime-800 pt-6 text-sm text-lime-200 sm:flex-row">
          <a href="mailto:info@greenworldgh.com" className="hover:text-white">
            info@greenworldgh.com
          </a>
          <span>
            &copy; {new Date().getFullYear()} Green World Initiative. All rights
            reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
