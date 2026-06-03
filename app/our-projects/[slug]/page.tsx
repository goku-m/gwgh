import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { getProject, projects } from "../../data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <NavBar />
      <main id="main-content" className="pt-20">
        <section className="bg-lime-50">
          <div className="mx-auto max-w-screen-xl px-4 py-16 lg:px-6 lg:py-20">
            <Link
              href="/our-projects"
              className="font-semibold text-lime-800 hover:text-lime-950"
            >
              &larr; All projects
            </Link>
            <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-lime-700">
              {project.location}
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
              {project.summary}
            </p>
          </div>
        </section>
        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-16 lg:px-6 lg:py-24">
            <Image
              className="aspect-[16/9] w-full rounded-2xl object-cover shadow-lg"
              src={project.image}
              alt={project.imageAlt}
              width={1200}
              height={675}
              priority
            />
            <div className="mt-10 grid gap-10 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-gray-900">
                  About this project
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                  {project.description}
                </p>
                <h2 className="mt-10 text-2xl font-bold text-gray-900">
                  Key activities
                </h2>
                <ul className="mt-4 space-y-3 text-gray-600">
                  {project.activities.map((activity) => (
                    <li key={activity} className="flex gap-3 leading-7">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-lime-600" />
                      {activity}
                    </li>
                  ))}
                </ul>
                <h2 className="mt-10 text-2xl font-bold text-gray-900">
                  Intended outcomes
                </h2>
                <ul className="mt-4 space-y-3 text-gray-600">
                  {project.intendedOutcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-3 leading-7">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-lime-600" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
              <aside className="h-fit rounded-2xl border border-lime-100 bg-lime-50 p-6">
                <h2 className="text-lg font-bold text-gray-900">Focus areas</h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.focusAreas.map((area) => (
                    <li
                      key={area}
                      className="rounded-full bg-lime-100 px-3 py-1 text-sm font-semibold text-lime-900"
                    >
                      {area}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 leading-7 text-gray-600">
                  Interested in supporting or collaborating on this work?
                </p>
                <Link
                  href="/contact-us"
                  className="mt-5 inline-flex rounded-lg bg-lime-700 px-5 py-3 text-sm font-semibold text-white hover:bg-lime-800"
                >
                  Partner With Us
                </Link>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
