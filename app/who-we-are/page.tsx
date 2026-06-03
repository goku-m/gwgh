import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { regionalImpactDataset, regionalImpactTotals } from "../data/regions";

const values = [
  {
    title: "Community ownership",
    text: "We work with farmers, youth, schools, and local leaders so each project reflects local priorities and can be cared for beyond the first planting day.",
  },
  {
    title: "Practical restoration",
    text: "We connect tree planting with useful outcomes such as healthier soils, protected water sources, food production, shade, and stronger farm resilience.",
  },
  {
    title: "Long-term responsibility",
    text: "Our approach includes training, monitoring, seedling care, and learning from results because meaningful restoration must continue after trees enter the ground.",
  },
  {
    title: "Transparent progress",
    text: "We organize impact information by region and project so communities, supporters, and partners can better understand where work is happening and what it is achieving.",
  },
];

const approach = [
  {
    number: "01",
    title: "Listen and plan locally",
    text: "We begin by understanding the land, the people who depend on it, and the environmental challenges they want to address.",
  },
  {
    number: "02",
    title: "Match action to place",
    text: "Projects use suitable native, fruit-bearing, and farm-friendly trees alongside land-care practices appropriate for each site.",
  },
  {
    number: "03",
    title: "Equip local stewards",
    text: "Training, tools, and shared participation help communities build the knowledge needed to care for seedlings, crops, farms, and watersheds.",
  },
  {
    number: "04",
    title: "Follow progress over time",
    text: "Monitoring helps teams learn, improve survival, replace seedlings where needed, and communicate results more clearly.",
  },
];

function formatTotal(value: number, suffix = "") {
  const plus = value === 0 ? "" : "+";
  return `${value.toLocaleString("en-US")}${plus}${suffix}`;
}

export default function WhoWeArePage() {
  const activeRegions = regionalImpactDataset.filter(
    (region) =>
      region.treesPlanted > 0 ||
      region.cropsCultivated > 0 ||
      region.communitiesImpacted > 0
  );

  const metrics = [
    {
      value: formatTotal(regionalImpactTotals.treesPlanted),
      label: "Trees planted",
    },
    {
      value: formatTotal(regionalImpactTotals.cropsCultivated, " acres"),
      label: "Crops cultivated",
    },
    {
      value: formatTotal(regionalImpactTotals.communitiesImpacted),
      label: "Communities impacted",
    },
    {
      value: activeRegions.length.toLocaleString("en-US"),
      label: "Regions with reported activity",
    },
  ];

  return (
    <>
      <NavBar />
      <main id="main-content" className="pt-20">
        <section className="bg-lime-50">
          <div className="mx-auto max-w-screen-xl px-4 py-16 text-center lg:px-6 lg:py-20">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-700">
              About us
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Who We Are
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
              Green World Initiative is a grassroots nonprofit working with
              communities in Ghana to restore degraded land, strengthen
              sustainable agriculture, and build more resilient local
              livelihoods.
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-screen-xl items-center gap-12 px-4 py-16 lg:grid-cols-2 lg:px-6 lg:py-24">
            <Image
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
              src="https://res.cloudinary.com/dk7kt9wth/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1748989945/2148761770_x3mwf6.jpg"
              alt="Community members collaborating on environmental work"
              width={1000}
              height={750}
              priority
            />
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-700">
                Our purpose
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Healthy landscapes and thriving communities belong together
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-gray-600">
                <p>
                  We believe environmental restoration is most effective when
                  it responds to the everyday needs of the people who live and
                  work on the land. Trees can restore ecosystems, but they can
                  also protect farms, improve soils, support food production,
                  reduce erosion, and create opportunity.
                </p>
                <p>
                  Our role is to bring people, practical knowledge, and
                  restoration activities together. From reforestation and
                  agroforestry to watershed care and environmental education,
                  we help communities turn local environmental challenges into
                  long-term action.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-lime-900 text-white">
          <div className="mx-auto max-w-screen-xl px-4 py-16 lg:px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-300">
                Our mission
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Restore nature in ways that strengthen the people who care for
                it
              </h2>
              <p className="mt-5 text-lg leading-8 text-lime-100">
                Our mission is to support community-led restoration through
                tree planting, climate-smart agriculture, environmental
                learning, and practical stewardship of farms, forests, and
                water systems.
              </p>
            </div>
            <dl className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-lime-700 bg-lime-950/40 p-5"
                >
                  <dt className="text-3xl font-extrabold">{metric.value}</dt>
                  <dd className="mt-2 text-sm font-medium text-lime-200">
                    {metric.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-screen-xl px-4 py-16 lg:px-6 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-5">
              <div className="lg:col-span-2">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-700">
                  Why our work matters
                </p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Land degradation is an environmental and livelihood challenge
                </h2>
              </div>
              <div className="space-y-5 text-lg leading-8 text-gray-600 lg:col-span-3">
                <p>
                  Deforestation, declining soil health, erosion, and pressure on
                  water sources can make it harder for rural communities to
                  grow food and prepare for a changing climate. These issues
                  are closely connected, so isolated solutions are rarely
                  enough.
                </p>
                <p>
                  Green World Initiative approaches restoration as a shared
                  investment in both ecosystems and people. By integrating
                  trees with farms, restoring sensitive landscapes, and
                  building local skills, projects can contribute to healthier
                  land while supporting the communities that depend on it.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-lime-50">
          <div className="mx-auto max-w-screen-xl px-4 py-16 lg:px-6 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-700">
                How we work
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Community-led from planning to long-term care
              </h2>
              <p className="mt-5 text-lg leading-8 text-gray-600">
                Our projects are designed to make restoration practical,
                locally relevant, and easier to sustain over time.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {approach.map((step) => (
                <article
                  key={step.number}
                  className="rounded-2xl border border-lime-100 bg-white p-6 shadow-sm"
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

        <section className="bg-white">
          <div className="mx-auto max-w-screen-xl px-4 py-16 lg:px-6 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-5 lg:items-start">
              <div className="lg:col-span-2">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-700">
                  Our values
                </p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Principles that guide every project
                </h2>
                <p className="mt-5 text-lg leading-8 text-gray-600">
                  We want every activity to be useful to communities, grounded
                  in care for the environment, and clear to the people who
                  support it.
                </p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:col-span-3">
                {values.map((value) => (
                  <article
                    key={value.title}
                    className="rounded-2xl border border-lime-100 bg-lime-50 p-6"
                  >
                    <h3 className="text-xl font-bold text-gray-900">
                      {value.title}
                    </h3>
                    <p className="mt-3 leading-7 text-gray-600">{value.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50">
          <div className="mx-auto grid max-w-screen-xl gap-10 px-4 py-16 lg:grid-cols-2 lg:px-6 lg:py-24">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-700">
                Our current reach
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Building a clearer picture of impact across Ghana
              </h2>
              <p className="mt-5 text-lg leading-8 text-gray-600">
                Regional reporting helps partners understand where activity is
                taking place and how project progress is distributed. The
                current dataset records activity in the following regions:
              </p>
              <ul className="mt-6 flex flex-wrap gap-3">
                {activeRegions.map((region) => (
                  <li
                    key={region.slug}
                    className="rounded-full border border-lime-200 bg-white px-4 py-2 text-sm font-semibold text-lime-800"
                  >
                    {region.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-lime-100 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900">
                What partnership can support
              </h3>
              <p className="mt-4 leading-7 text-gray-600">
                Collaboration can help extend restoration to more communities,
                strengthen training and monitoring, improve access to tools and
                planting materials, and make regional impact information more
                useful over time.
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
