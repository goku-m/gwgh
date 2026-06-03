import Image from "next/image";
import Link from "next/link";

export default function Gallery() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-screen-xl items-center gap-12 px-4 py-16 lg:grid-cols-2 lg:px-6 lg:py-24">
        <div>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Gallery
          </h2>
          <p className="mb-6 max-w-xl text-lg leading-8 text-gray-600">
            A glimpse into our reforestation journey: planting trees,
            empowering communities, and restoring the Earth, one image at a
            time.
          </p>
          <Link
            href="/gallery"
            className="inline-flex items-center rounded-lg bg-lime-700 px-5 py-3 text-sm font-semibold text-white hover:bg-lime-800 focus:ring-4 focus:ring-lime-300"
          >
            View gallery
            <span className="ml-2" aria-hidden="true">
              &rarr;
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            className="aspect-[3/4] w-full rounded-2xl object-cover shadow-md"
            src="https://res.cloudinary.com/dk7kt9wth/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1748989971/2148761779_iddv9c.jpg"
            alt="A community member participating in field work"
            width={450}
            height={600}
          />
          <Image
            className="mt-8 aspect-[3/4] w-full rounded-2xl object-cover shadow-md"
            src="https://res.cloudinary.com/dk7kt9wth/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1748518278/2148761780_ptz5sp.jpg"
            alt="A farmer working on cultivated land"
            width={450}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}
