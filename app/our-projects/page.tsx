import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import OurWork from "../components/OurWork";

export default function ProjectsPage() {
  return (
    <>
      <NavBar />
      <main id="main-content" className="pt-20">
        <section className="bg-lime-50">
          <div className="mx-auto max-w-screen-xl px-4 py-16 text-center lg:px-6 lg:py-20">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-700">
              Our impact
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Projects
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              Community-led initiatives that restore ecosystems, strengthen
              food security, and create lasting local opportunity.
            </p>
          </div>
        </section>
        <OurWork />
      </main>
      <Footer />
    </>
  );
}
