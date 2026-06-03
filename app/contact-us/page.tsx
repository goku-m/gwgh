import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <NavBar />
      <main id="main-content" className="bg-lime-50 pt-20">
        <section className="mx-auto grid max-w-screen-xl gap-12 px-4 py-16 lg:grid-cols-5 lg:px-6 lg:py-24">
          <div className="lg:col-span-2">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-700">
              Get in touch
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              Have a question, partnership idea, or enquiry? We would be glad to
              hear from you.
            </p>
            <a
              href="mailto:info@greenworldgh.com"
              className="mt-6 inline-block font-semibold text-lime-800 hover:text-lime-950"
            >
              info@greenworldgh.com
            </a>
          </div>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
