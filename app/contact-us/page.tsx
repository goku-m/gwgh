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
            <dl className="mt-6 space-y-4">
              <div>
                <dt className="text-sm font-semibold text-gray-500">Email</dt>
                <dd className="mt-1">
                  <a
                    href="mailto:info@greenworldgh.com"
                    className="font-semibold text-lime-800 hover:text-lime-950"
                  >
                    info@greenworldgh.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-gray-500">Phone</dt>
                <dd className="mt-1">
                  <a
                    href="tel:+23324710076"
                    className="font-semibold text-lime-800 hover:text-lime-950"
                  >
                    +233 247 100 76
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
