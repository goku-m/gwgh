import Image from "next/image";
import Link from "next/link";

const exploreLinks = [
  { href: "/who-we-are", label: "Who We Are" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/impact", label: "Our Impact" },
  { href: "/our-projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
];

const involvementLinks = [
  { href: "/contact-us", label: "Contact Us" },
  { href: "/contact-us", label: "Partner With Us" },
];

export default function Footer() {
  return (
    <footer className="border-t border-lime-900 bg-lime-950 text-lime-50">
      <div className="mx-auto max-w-screen-xl px-4 py-12 lg:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 rounded-lg">
              <Image
                src="/gwi.png"
                alt="Green World Initiative"
                width={48}
                height={48}
              />
              <span className="font-bold">Green World Initiative</span>
            </Link>
            <p className="mt-5 max-w-md leading-7 text-lime-100">
              Restoring degraded land and strengthening community livelihoods
              across Ghana.
            </p>
            <Link
              href="/contact-us"
              className="mt-6 inline-flex items-center rounded-lg bg-lime-600 px-5 py-3 text-sm font-semibold text-white hover:bg-lime-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-lime-700"
            >
              Partner With Us <span className="ml-2">&rarr;</span>
            </Link>
          </div>

          <nav aria-label="Explore">
            <h2 className="text-sm font-bold uppercase tracking-wide text-lime-300">
              Explore
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-lime-100">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <nav aria-label="Get involved">
              <h2 className="text-sm font-bold uppercase tracking-wide text-lime-300">
                Get Involved
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-lime-100">
                {involvementLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-7">
              <p className="text-sm font-bold text-lime-300">
                Partnership and general enquiries
              </p>
              <a
                href="mailto:info@greenworldgh.com"
                className="mt-2 block text-sm text-lime-100 hover:text-white"
              >
                info@greenworldgh.com
              </a>
              <a
                href="tel:+23324710076"
                className="mt-2 block text-sm text-lime-100 hover:text-white"
              >
                +233 247 100 76
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-lime-800 pt-6 text-sm text-lime-200">
          &copy; {new Date().getFullYear()} Green World Initiative. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
