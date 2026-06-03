import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { getRegion, regions } from "../../data/regions";

function formatMetric(value: number | null, suffix = "") {
  return value === null
    ? "Data to be confirmed"
    : `${value.toLocaleString("en-US")}${suffix}`;
}

export function generateStaticParams() {
  return regions.map((region) => ({ region: region.slug }));
}

export default async function RegionImpactPage({
  params,
}: {
  params: Promise<{ region: string }>;
}) {
  const { region: slug } = await params;
  const region = getRegion(slug);

  if (!region) {
    notFound();
  }

  return (
    <>
      <NavBar />
      <main id="main-content" className="pt-20">
        <section className="bg-lime-50">
          <div className="mx-auto max-w-screen-xl px-4 py-16 lg:px-6 lg:py-20">
            <Link
              href="/impact"
              className="font-semibold text-lime-800 hover:text-lime-950"
            >
              &larr; Back to Ghana impact map
            </Link>
            <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-lime-700">
              Regional impact
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              {region.name} Region
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
              This page is ready to present verified projects, communities, and
              results for the {region.name} Region.
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-screen-xl px-4 py-16 lg:px-6 lg:py-24">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Trees planted",
                  value: formatMetric(region.treesPlanted),
                },
                {
                  title: "Crops cultivated",
                  value: formatMetric(region.cropsCultivated, " acres"),
                },
                {
                  title: "Communities impacted",
                  value: formatMetric(region.communitiesImpacted),
                },
              ].map(({ title, value }) => (
                  <article
                    key={title}
                    className="rounded-2xl border border-lime-100 bg-lime-50 p-6"
                  >
                    <h2 className="text-lg font-bold text-gray-900">{title}</h2>
                    <p className="mt-3 text-2xl font-extrabold text-lime-900">
                      {value}
                    </p>
                  </article>
                ))}
            </div>
            <div className="mt-10 rounded-2xl border border-dashed border-lime-300 p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900">
                Partner in the {region.name} Region
              </h2>
              <p className="mx-auto mt-3 max-w-2xl leading-7 text-gray-600">
                Contact Green World Initiative to discuss local collaboration,
                project support, or verified regional information.
              </p>
              <Link
                href="/contact-us"
                className="mt-6 inline-flex rounded-lg bg-lime-700 px-5 py-3 text-sm font-semibold text-white hover:bg-lime-800"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
