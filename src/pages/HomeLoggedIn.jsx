import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/layout/Footer";
import AllProperties from "../components/AllProperties";
import Pagination from "../components/Pagination";
const HomeLoggedIn = () => {
  return (
    <div>
      <Hero />
      <AllProperties />
      <Pagination />
      <Footer />
    </div>
  );
};

export default HomeLoggedIn;
