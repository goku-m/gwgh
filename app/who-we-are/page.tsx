import Image from "next/image";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function WhoWeArePage() {
  return (
    <>
      <NavBar />
      <main id="main-content" className="pt-20">
        <section className="bg-lime-50">
          <div className="mx-auto max-w-screen-xl px-4 py-16 text-center lg:px-6 lg:py-20">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-700">
              About us
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Who We Are
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              A grassroots nonprofit helping communities restore nature and
              build healthier, more resilient futures.
            </p>
          </div>
        </section>
        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-16 lg:px-6 lg:py-24">
            <Image
              className="aspect-[16/9] w-full rounded-2xl object-cover shadow-lg"
              src="https://res.cloudinary.com/dk7kt9wth/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1748989945/2148761770_x3mwf6.jpg"
              alt="Community members collaborating on environmental work"
              width={1200}
              height={675}
              priority
            />
            <div className="mx-auto mt-10 max-w-3xl space-y-6 text-lg leading-8 text-gray-600">
              <p>
                Green World Initiative is dedicated to healing the Earth through
                reforestation and sustainable agriculture. Founded on the belief
                that restoring nature is both a global responsibility and a
                local opportunity, we work with communities to plant trees,
                grow food, and bring life back to degraded lands.
              </p>
              <p>
                We operate in areas affected by deforestation, soil degradation,
                and food insecurity, especially rural communities where
                reforestation can make the greatest difference. From farmland
                and watersheds to schools and hillsides, our projects reach
                where healing is needed most.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
