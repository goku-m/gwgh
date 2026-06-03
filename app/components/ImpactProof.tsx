import Link from "next/link";

const practices = [
  {
    title: "Community-led planning",
    text: "Projects are shaped with the farmers, youth, schools, and local leaders who will care for the land.",
  },
  {
    title: "Progress monitoring",
    text: "Planting is followed by routine checks so teams can learn, replace seedlings, and improve survival.",
  },
  {
    title: "Long-term care",
    text: "We focus on useful species, practical training, and local ownership so the work can continue to grow.",
  },
];

export default function ImpactProof() {
  return (
    <section className="bg-white" aria-labelledby="impact-proof-heading">
      <div className="mx-auto max-w-screen-xl px-4 py-16 lg:px-6 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-2">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-700">
              Beyond the numbers
            </p>
            <h2
              id="impact-proof-heading"
              className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
            >
              Impact that is cared for, not just counted
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              Our impact figures reflect reported project progress. We pair
              those numbers with local participation, follow-up monitoring, and
              practical care for the land.
            </p>
            <Link
              href="/our-projects"
              className="mt-6 inline-flex items-center font-semibold text-lime-800 hover:text-lime-950"
            >
              Explore our projects <span className="ml-2">&rarr;</span>
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-3 lg:col-span-3 lg:grid-cols-1">
            {practices.map((practice) => (
              <article
                key={practice.title}
                className="rounded-2xl border border-lime-100 bg-lime-50 p-6"
              >
                <h3 className="text-lg font-bold text-gray-900">
                  {practice.title}
                </h3>
                <p className="mt-2 leading-7 text-gray-600">{practice.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
