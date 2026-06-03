import Image from "next/image";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const areas = [
  {
    title: "Reforestation",
    text: "We plant native and fruit-bearing trees to restore degraded land, cool the climate, revive biodiversity, and serve local communities.",
  },
  {
    title: "Climate-Smart Agriculture",
    text: "We support farming methods that integrate trees with crops, improve food security, conserve water, and restore soil health.",
  },
  {
    title: "Environmental Education",
    text: "We work with schools, youth groups, farmers, and community leaders through workshops, eco-clubs, and hands-on planting days.",
  },
  {
    title: "Community Empowerment",
    text: "We provide tools, seeds, training, and green job opportunities that help local people lead and sustain each project.",
  },
];

export default function WhatWeDoPage() {
  return (
    <>
      <NavBar />
      <main id="main-content" className="pt-20">
        <section className="bg-lime-50">
          <div className="mx-auto max-w-screen-xl px-4 py-16 text-center lg:px-6 lg:py-20">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-700">
              Our approach
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              What We Do
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
              We restore life to the land and create opportunity for the people
              who depend on it.
            </p>
          </div>
        </section>
        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-16 lg:px-6 lg:py-24">
            <Image
              className="aspect-[16/9] w-full rounded-2xl object-cover shadow-lg"
              src="https://res.cloudinary.com/dk7kt9wth/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1748989972/2148761816_bkkbbh.jpg"
              alt="Farmers working together in a cultivated field"
              width={1200}
              height={675}
              priority
            />
            <p className="mx-auto mt-10 max-w-3xl text-lg leading-8 text-gray-600">
              Our work sits at the intersection of ecological restoration,
              sustainable agriculture, and community development. By planting
              the right trees in the right places and equipping communities
              with climate-smart farming skills, we can protect water sources,
              revive biodiversity, and build lasting resilience.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {areas.map((area) => (
                <article
                  key={area.title}
                  className="rounded-2xl border border-lime-100 bg-lime-50 p-6"
                >
                  <h2 className="text-xl font-bold text-gray-900">
                    {area.title}
                  </h2>
                  <p className="mt-3 leading-7 text-gray-600">{area.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
