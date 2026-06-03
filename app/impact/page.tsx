import Link from "next/link";
import Footer from "../components/Footer";
import InteractiveGhanaMap from "../components/InteractiveGhanaMap";
import NavBar from "../components/NavBar";
import {
  regionHasReportedActivity,
  regionalImpactDataset,
  regionalImpactTotals,
} from "../data/regions";

const metrics = [
  {
    value: `${regionalImpactTotals.treesPlanted.toLocaleString("en-US")}+`,
    label: "Trees planted",
  },
  {
    value: `${regionalImpactTotals.cropsCultivated.toLocaleString(
      "en-US"
    )}+ acres`,
    label: "Crops cultivated",
  },
  {
    value: `${regionalImpactTotals.communitiesImpacted.toLocaleString(
      "en-US"
    )}+`,
    label: "Communities impacted",
  },
];

const regionsWithReportedActivity = regionalImpactDataset.filter(
  regionHasReportedActivity
);

const methodology = [
  {
    title: "Trees planted",
    text: "Counts seedlings and trees placed in the ground through supported planting activities. This is a planting total, not a claim that every tree has reached maturity.",
  },
  {
    title: "Acres cultivated",
    text: "Counts the area of land where supported crop cultivation or climate-smart farming activities have taken place.",
  },
  {
    title: "Communities impacted",
    text: "Counts distinct communities that have participated in or directly benefited from reported project activities.",
  },
];

function formatRegionalMetric(value: number, suffix = "") {
  const plus = value === 0 ? "" : "+";
  return `${value.toLocaleString("en-US")}${plus}${suffix}`;
}

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

        <section className="bg-gray-50">
          <div className="mx-auto max-w-screen-xl px-4 py-16 lg:px-6 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-700">
                Regional data
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Impact figures by region
              </h2>
              <p className="mt-5 text-lg leading-8 text-gray-600">
                Open a region below to view the same figures shown on the map.
                This list is available for touch devices and keyboard users.
              </p>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {regionsWithReportedActivity.map((region) => {
                const hasActivity = regionHasReportedActivity(region);

                return (
                  <details
                    key={region.slug}
                    className="group rounded-2xl border border-gray-200 bg-white open:border-lime-200 open:shadow-sm"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl p-5 font-bold text-gray-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-lime-200">
                      <span>{region.name} Region</span>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          hasActivity
                            ? "bg-lime-100 text-lime-800"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {hasActivity
                          ? "Reported activity"
                          : "No reported activity"}
                      </span>
                    </summary>
                    <dl className="grid gap-4 border-t border-gray-100 px-5 py-5 sm:grid-cols-3">
                      <div>
                        <dt className="text-xs font-semibold text-gray-500">
                          Trees planted
                        </dt>
                        <dd className="mt-1 font-bold text-gray-900">
                          {formatRegionalMetric(region.treesPlanted)}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs font-semibold text-gray-500">
                          Crops cultivated
                        </dt>
                        <dd className="mt-1 font-bold text-gray-900">
                          {formatRegionalMetric(
                            region.cropsCultivated,
                            " acres"
                          )}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs font-semibold text-gray-500">
                          Communities impacted
                        </dt>
                        <dd className="mt-1 font-bold text-gray-900">
                          {formatRegionalMetric(region.communitiesImpacted)}
                        </dd>
                      </div>
                    </dl>
                  </details>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-screen-xl px-4 py-16 lg:px-6 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-5">
              <div className="lg:col-span-2">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-700">
                  Methodology notes
                </p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  How to read the impact figures
                </h2>
                <p className="mt-5 text-lg leading-8 text-gray-600">
                  These definitions help explain what each public impact metric
                  represents and make the reported figures easier to interpret.
                </p>
              </div>
              <div className="grid gap-5 lg:col-span-3">
                {methodology.map((note) => (
                  <article
                    key={note.title}
                    className="rounded-2xl border border-lime-100 bg-lime-50 p-6"
                  >
                    <h3 className="text-lg font-bold text-gray-900">
                      {note.title}
                    </h3>
                    <p className="mt-2 leading-7 text-gray-600">{note.text}</p>
                  </article>
                ))}
                <p className="rounded-2xl border border-gray-200 bg-gray-50 p-5 text-sm leading-6 text-gray-600">
                  A <strong className="text-gray-900">+</strong> indicates that
                  the displayed value is a minimum reported total. A region
                  shown with no reported activity currently has no figures
                  recorded in the regional dataset.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
