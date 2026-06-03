import Image from "next/image";
import Link from "next/link";

export default function WhatWeDo() {
  return (
    <section className="bg-lime-50">
      <div className="mx-auto grid max-w-screen-xl items-center gap-10 px-4 py-16 md:grid-cols-2 lg:px-6 lg:py-24">
        <Image
          className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg md:order-2"
          src="https://res.cloudinary.com/dk7kt9wth/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1748989972/2148761816_bkkbbh.jpg"
          alt="Farmers tending crops in a green field"
          width={1000}
          height={750}
        />
        <div className="md:order-1">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What We Do
          </h2>
          <p className="mb-6 text-lg leading-8 text-gray-600">
            We lead grassroots efforts to restore the environment through tree
            planting and sustainable crop cultivation. Our work focuses on
            reforesting degraded lands, promoting agroforestry, and engaging
            local communities in hands-on conservation.
          </p>
          <Link
            href="/what-we-do"
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
