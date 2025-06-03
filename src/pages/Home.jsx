import React from "react";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import GetStarted from "../components/GetStarted";
import Footer from "../components/layout/Footer";
import HowToStart from "../components/HowToStart";
import Reviews from "../components/Reviews";
import Faq from "../components/Faq";
import FeaturedProperty from "../components/FeaturedProperty";

const Home = () => {
  return (
    <div>
      <Hero />
      <Experience />
      <FeaturedProperty />
      <GetStarted />
      <HowToStart />
      <Reviews />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
