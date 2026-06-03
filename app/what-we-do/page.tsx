import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { projects } from "../data/projects";

const programAreas = [
  {
    title: "Reforestation and biodiversity",
    description:
      "We restore degraded landscapes with native and useful tree species selected for local conditions and community priorities.",
    activities: [
      "Identify suitable restoration sites and tree species",
      "Organize community planting and seedling care",
      "Monitor survival and replace seedlings where needed",
    ],
    outcomes: [
      "Healthier local ecosystems",
      "Improved habitat and biodiversity",
      "Greater community knowledge of tree care",
    ],
  },
  {
    title: "Climate-smart agriculture",
    description:
      "We help smallholder farmers integrate trees, soil care, and water-conscious practices into productive farming systems.",
    activities: [
      "Introduce farm-friendly and fruit-bearing trees",
      "Share practical soil and crop management methods",
      "Support farmers with tools, guidance, and training",
    ],
    outcomes: [
      "More resilient farms",
      "Improved soil protection and natural shade",
      "Stronger local food security",
    ],
  },
  {
    title: "Watershed and soil protection",
    description:
      "We connect healthy farms with healthy water systems by reducing erosion and improving how landscapes retain water.",
    activities: [
      "Plant near rivers, streams, and sensitive areas",
      "Promote contour farming on sloped land",
      "Engage communities in protecting water sources",
    ],
    outcomes: [
      "Reduced soil erosion",
      "Improved water retention",
      "More productive agricultural land",
    ],
  },
  {
    title: "Environmental learning and local stewardship",
    description:
      "We build the knowledge and shared responsibility needed for restoration work to continue after the first activity.",
    activities: [
      "Work with farmers, youth, schools, and local leaders",
      "Provide hands-on planting and land-care training",
      "Encourage shared monitoring and long-term care",
    ],
    outcomes: [
      "Stronger local ownership",
      "Practical environmental knowledge",
      "More durable project results",
    ],
  },
];

const deliverySteps = [
  {
    number: "01",
    title: "Understand the landscape",
    text: "We consider the condition of the land, the people who depend on it, and the environmental pressures a project should address.",
  },
  {
    number: "02",
    title: "Design with communities",
    text: "Farmers, youth, schools, and local leaders help shape activities that are practical and relevant to their priorities.",
  },
  {
    number: "03",
    title: "Put restoration into action",
    text: "Communities plant trees, apply land-care practices, and receive the tools and knowledge needed to participate effectively.",
  },
  {
    number: "04",
    title: "Monitor, learn, and improve",
    text: "Follow-up checks help teams understand progress, respond to challenges, and strengthen future activities.",
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
              We combine ecological restoration, sustainable agriculture, and
              community stewardship to help Ghanaian landscapes and the people
              who depend on them become more resilient.
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-screen-xl items-center gap-12 px-4 py-16 lg:grid-cols-2 lg:px-6 lg:py-24">
            <Image
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
              src="https://res.cloudinary.com/dk7kt9wth/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1748989972/2148761816_bkkbbh.jpg"
              alt="Farmers working together in a cultivated field"
              width={1000}
              height={750}
              priority
            />
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-700">
                Connected solutions
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Restoring land means working with the whole landscape
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-gray-600">
                <p>
                  Trees, crops, soil, water, biodiversity, and livelihoods are
                  closely connected. When one part of that system is under
                  pressure, the effects can be felt across farms, communities,
                  and local ecosystems.
                </p>
                <p>
                  Our work brings these connections into each project. We plant
                  trees where they can serve the land and its people, support
                  farming practices that protect natural resources, and equip
                  communities to care for progress over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-lime-950 text-white">
          <div className="mx-auto max-w-screen-xl px-4 py-16 lg:px-6 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-300">
                Our program areas
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Practical action for healthier land and stronger communities
              </h2>
              <p className="mt-5 text-lg leading-8 text-lime-100">
                Each program area addresses a different part of the challenge,
                but they are designed to reinforce one another.
              </p>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {programAreas.map((area) => (
                <article
                  key={area.title}
                  className="rounded-2xl border border-lime-800 bg-lime-900 p-6 sm:p-8"
                >
                  <h3 className="text-2xl font-bold">{area.title}</h3>
                  <p className="mt-3 leading-7 text-lime-100">
                    {area.description}
                  </p>
                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wide text-lime-300">
                        What we do
                      </h4>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-lime-100">
                        {area.activities.map((activity) => (
                          <li key={activity} className="flex gap-2">
                            <span className="text-lime-400" aria-hidden="true">
                              &bull;
                            </span>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wide text-lime-300">
                        What it supports
                      </h4>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-lime-100">
                        {area.outcomes.map((outcome) => (
                          <li key={outcome} className="flex gap-2">
                            <span className="text-lime-400" aria-hidden="true">
                              &bull;
                            </span>
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-screen-xl px-4 py-16 lg:px-6 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-700">
                From idea to long-term care
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                How a project moves forward
              </h2>
              <p className="mt-5 text-lg leading-8 text-gray-600">
                Restoration is not a single event. Our delivery cycle is
                designed to connect local priorities with practical action and
                continued learning.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {deliverySteps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-2xl border border-lime-100 bg-lime-50 p-6"
                >
                  <p className="text-sm font-extrabold text-lime-700">
                    {step.number}
                  </p>
                  <h3 className="mt-3 text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-7 text-gray-600">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50">
          <div className="mx-auto max-w-screen-xl px-4 py-16 lg:px-6 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-5">
              <div className="lg:col-span-2">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-700">
                  Current projects
                </p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Our approach in practice
                </h2>
                <p className="mt-5 text-lg leading-8 text-gray-600">
                  These initiatives show how restoration can respond to
                  different needs, from degraded land and smallholder farms to
                  sensitive watershed areas.
                </p>
                <Link
                  href="/our-projects"
                  className="mt-6 inline-flex items-center font-semibold text-lime-800 hover:text-lime-950"
                >
                  Explore all projects <span className="ml-2">&rarr;</span>
                </Link>
              </div>
              <div className="grid gap-5 lg:col-span-3">
                {projects.map((project) => (
                  <article
                    key={project.slug}
                    className="rounded-2xl border border-lime-100 bg-white p-6 shadow-sm"
                  >
                    <div className="flex flex-wrap gap-2">
                      {project.focusAreas.map((focusArea) => (
                        <span
                          key={focusArea}
                          className="rounded-full bg-lime-100 px-3 py-1 text-xs font-semibold text-lime-800"
                        >
                          {focusArea}
                        </span>
                      ))}
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                    <p className="mt-3 leading-7 text-gray-600">
                      {project.summary}
                    </p>
                    <Link
                      href={`/our-projects/${project.slug}`}
                      className="mt-4 inline-flex items-center text-sm font-semibold text-lime-800 hover:text-lime-950"
                    >
                      View project details <span className="ml-2">&rarr;</span>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-lime-50">
          <div className="mx-auto grid max-w-screen-xl gap-10 px-4 py-16 lg:grid-cols-2 lg:px-6 lg:py-24">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-700">
                What partnership can enable
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Help practical restoration reach more communities
              </h2>
              <p className="mt-5 text-lg leading-8 text-gray-600">
                Partners can support planting materials, farmer and youth
                training, tools, project monitoring, environmental education,
                and the expansion of proven activities into new areas.
              </p>
            </div>
            <div className="rounded-2xl border border-lime-100 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900">
                Looking for a clear view of our progress?
              </h3>
              <p className="mt-4 leading-7 text-gray-600">
                Explore the impact map to see reported regional figures, or
                contact Green World Initiative to discuss how your support can
                align with community and environmental priorities.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/impact"
                  className="inline-flex items-center rounded-lg bg-lime-700 px-5 py-3 text-sm font-semibold text-white hover:bg-lime-800"
                >
                  View our impact <span className="ml-2">&rarr;</span>
                </Link>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center rounded-lg border border-lime-700 px-5 py-3 text-sm font-semibold text-lime-800 hover:bg-lime-50"
                >
                  Partner with us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
