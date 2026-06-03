import Link from "next/link";
import { projects } from "../data/projects";

export default function OurWork() {
  return (
    <section className="bg-lime-950 text-white" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-screen-xl px-4 py-16 lg:px-6 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="projects-heading"
            className="text-3xl font-extrabold tracking-tight sm:text-4xl"
          >
            Our Projects
          </h2>
          <p className="mt-4 text-lg leading-8 text-lime-200">
            Practical, community-led work that restores land and supports the
            people who depend on it.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="flex flex-col rounded-2xl border border-lime-800 bg-lime-900 p-6"
            >
              <span className="mb-4 w-fit rounded-full bg-lime-800 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-lime-100">
                {project.location}
              </span>
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-3 flex-1 leading-7 text-lime-100">
                {project.summary}
              </p>
              <Link
                href={`/our-projects/${project.slug}`}
                className="mt-6 inline-flex items-center font-semibold text-lime-300 hover:text-white"
              >
                View project details <span className="ml-2">&rarr;</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
