import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-lime-50 to-white pt-24">
      <div className="mx-auto grid max-w-screen-xl items-center gap-10 px-4 py-12 lg:grid-cols-12 lg:px-6 lg:py-20">
        <div className="order-2 lg:order-1 lg:col-span-5">
          <Image
            className="aspect-[4/5] w-full rounded-3xl object-cover shadow-xl shadow-lime-900/10"
            src="https://res.cloudinary.com/dk7kt9wth/image/upload/v1748517471/Untitled_design_mfutt4.png"
            alt="A farmer working among healthy crops"
            width={800}
            height={1000}
            priority
          />
        </div>
        <div className="order-1 lg:order-2 lg:col-span-7">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-lime-700">
            Restoring land. Growing opportunity.
          </p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-5xl xl:text-6xl">
            Grow Crops. Feed Communities. Change the World.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 md:text-xl">
            Green World Initiative plants trees and crops to fight
            deforestation, restore ecosystems, and support local livelihoods. Be
            part of the solution.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-lg bg-lime-700 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-lime-800 focus:ring-4 focus:ring-lime-300"
            >
              Partner With Us <span className="ml-2">&rarr;</span>
            </Link>
            <Link
              href="/who-we-are"
              className="inline-flex items-center justify-center rounded-lg border border-lime-700 px-6 py-3 text-base font-semibold text-lime-800 hover:bg-lime-50"
            >
              Learn about our mission
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
