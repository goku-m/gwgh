import Link from "next/link";
import Footer from "../components/Footer";
import InteractiveGhanaMap from "../components/InteractiveGhanaMap";
import NavBar from "../components/NavBar";
import { regionalImpactTotals } from "../data/regions";

const metrics = [
  {
    value: regionalImpactTotals.treesPlanted.toLocaleString("en-US"),
    label: "Trees planted",
  },
  {
    value: `${regionalImpactTotals.cropsCultivated.toLocaleString(
      "en-US"
    )} acres`,
    label: "Crops cultivated",
  },
  {
    value: regionalImpactTotals.communitiesImpacted.toLocaleString("en-US"),
    label: "Communities impacted",
  },
];

export default function ImpactPage() {
  return (
    <>
      <NavBar />
      <main id="main-content" className="pt-20">
        <section className="bg-lime-50">
          <div className="mx-auto max-w-screen-xl px-4 py-16 text-center lg:px-6 lg:py-20">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-700">
              Our reach
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Impact Across Ghana
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
              Green World Initiative works with communities in Ghana to restore
              degraded land, strengthen sustainable agriculture, and support
              more resilient local livelihoods.
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-screen-xl items-start gap-12 px-4 py-16 xl:grid-cols-5 lg:px-6 lg:py-24">
            <div className="xl:col-span-3">
              <div className="rounded-3xl border border-lime-100 bg-white p-4 shadow-lg sm:p-8">
                <InteractiveGhanaMap />
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-500">
                Hover over any region to view its sample impact figures. The
                regional dataset can be edited as verified figures become
                available.
              </p>
            </div>

            <div className="xl:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900">
                Reported project progress
              </h2>
              <p className="mt-4 leading-7 text-gray-600">
                These figures summarize the progress currently presented across
                our public project information.
              </p>
              <dl className="mt-8 space-y-4">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-lime-100 bg-lime-50 p-5"
                  >
                    <dt className="text-sm font-semibold text-lime-800">
                      {metric.label}
                    </dt>
                    <dd className="mt-1 text-3xl font-extrabold text-gray-900">
                      {metric.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <Link
                href="/our-projects"
                className="mt-8 inline-flex items-center rounded-lg bg-lime-700 px-5 py-3 text-sm font-semibold text-white hover:bg-lime-800"
              >
                Explore our projects <span className="ml-2">&rarr;</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
