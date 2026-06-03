import Image from "next/image";
import Link from "next/link";

export default function AboutUS() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-screen-xl items-center gap-10 px-4 py-16 md:grid-cols-2 lg:px-6 lg:py-24">
        <Image
          className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
          src="https://res.cloudinary.com/dk7kt9wth/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1748989945/2148761770_x3mwf6.jpg"
          alt="Community members working together outdoors"
          width={1000}
          height={750}
        />
        <div>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Who We Are
          </h2>
          <p className="mb-6 text-lg leading-8 text-gray-600">
            Green World Initiative is a nonprofit organization dedicated to
            restoring the planet through reforestation and sustainable
            agriculture. We work hand-in-hand with local communities to plant
            trees, grow crops, and revive ecosystems affected by deforestation
            and land degradation.
          </p>
          <Link
            href="/who-we-are"
            className="inline-flex items-center rounded-lg bg-lime-700 px-5 py-3 text-sm font-semibold text-white hover:bg-lime-800 focus:ring-4 focus:ring-lime-300"
          >
            Read more
            <span className="ml-2" aria-hidden="true">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
