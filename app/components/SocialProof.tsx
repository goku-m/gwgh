import Link from "next/link";
import { regionalImpactTotals } from "../data/regions";

const SocialProof = () => {
  return (
    <section className="bg-lime-900" aria-labelledby="impact-heading">
      <div className="mx-auto max-w-screen-xl px-4 py-10 text-center lg:px-6">
        <h2 id="impact-heading" className="sr-only">
          Our impact
        </h2>
        <dl className="mx-auto grid max-w-screen-lg gap-8 text-white sm:grid-cols-3">
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
              {regionalImpactTotals.treesPlanted.toLocaleString("en-US")}
            </dt>
            <dd className="text-base font-medium text-lime-200">
              Trees Planted
            </dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
              {regionalImpactTotals.cropsCultivated.toLocaleString("en-US")}{" "}
              Acres
            </dt>
            <dd className="text-base font-medium text-lime-200">
              Crops Cultivated
            </dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
              {regionalImpactTotals.communitiesImpacted.toLocaleString("en-US")}
            </dt>
            <dd className="text-base font-medium text-lime-200">
              Communities Impacted
            </dd>
          </div>
        </dl>
        <Link
          href="/impact"
          className="mt-8 inline-flex items-center justify-center rounded-lg border border-lime-300 bg-transparent px-5 py-3 text-sm font-semibold text-white hover:bg-lime-800 focus:ring-4 focus:ring-lime-600"
        >
          See Impact <span className="ml-2">&rarr;</span>
        </Link>
      </div>
    </section>
  );
};

export default SocialProof;
