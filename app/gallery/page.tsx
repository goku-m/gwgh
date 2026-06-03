import Image from "next/image";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const images = [
  {
    src: "https://res.cloudinary.com/dk7kt9wth/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1748518278/2148761780_ptz5sp.jpg",
    alt: "Farmer working on cultivated land",
  },
  {
    src: "https://res.cloudinary.com/dk7kt9wth/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1748989694/m-abnodey-W48i6oMFSCM-unsplash_aunr5q.jpg",
    alt: "Green agricultural landscape",
  },
  {
    src: "https://res.cloudinary.com/dk7kt9wth/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1748518285/37106_qsrt1s.jpg",
    alt: "Community member taking part in field work",
  },
  {
    src: "https://res.cloudinary.com/dk7kt9wth/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1748989871/pexels-fatima-yusuf-323522203-30541313_uvpgy9.jpg",
    alt: "Farmer caring for crops",
  },
  {
    src: "https://res.cloudinary.com/dk7kt9wth/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1748989871/annie-spratt-QYcSeY7vuZM-unsplash_b5pm4x.jpg",
    alt: "Young plants growing in healthy soil",
  },
  {
    src: "https://res.cloudinary.com/dk7kt9wth/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1748989811/64585_cbuxap.jpg",
    alt: "Crops growing in a restored field",
  },
];

export default function GalleryPage() {
  return (
    <>
      <NavBar />
      <main id="main-content" className="pt-20">
        <section className="bg-lime-50">
          <div className="mx-auto max-w-screen-xl px-4 py-16 text-center lg:px-6 lg:py-20">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-700">
              In the field
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Gallery
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              A look at the people, places, and progress behind our work.
            </p>
          </div>
        </section>
        <section className="bg-white">
          <div className="mx-auto grid max-w-screen-xl gap-5 px-4 py-16 sm:grid-cols-2 lg:grid-cols-3 lg:px-6 lg:py-24">
            {images.map((image, index) => (
              <Image
                key={image.src}
                className={`w-full rounded-2xl object-cover shadow-md ${
                  index % 3 === 1 ? "aspect-[4/5]" : "aspect-square"
                }`}
                src={image.src}
                alt={image.alt}
                width={600}
                height={index % 3 === 1 ? 750 : 600}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
