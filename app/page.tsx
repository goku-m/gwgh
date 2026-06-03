import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import SocialProof from "./components/SocialProof";
import AboutUS from "./components/AboutUS";
import WhatWeDo from "./components/WhatWeDo";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import OurWork from "./components/OurWork";
import ImpactProof from "./components/ImpactProof";

export default function Home() {
  return (
    <>
      <NavBar />
      <main id="main-content">
        <HeroSection />
        <SocialProof />
        <ImpactProof />
        <AboutUS />
        <FeatureSection />
        <WhatWeDo />
        <OurWork />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
