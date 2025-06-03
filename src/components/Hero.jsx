import React from "react";
import SearchForm from "./SearchForm";
import Nav from "./layout/Nav";

const Hero = () => {
  return (
    <div className="heropage lg:max-h-[720px] h-auto pb-8 ">
      <Nav />
      <div className="layout pt-24">
        <div className="  flex justify-center items-end ">
          <div>
            <h3 className="font-medium text-md lg:text-[18px] text-white mb-3 text-center ">
              Explore a wide range of properties that suits you
            </h3>
            <h1 className="font-extrabold text-2xl lg:text-[60px] text-[#ffffff] max-w-[781px] w-full text-center">
              Explore a wide range of houses that suits you
            </h1>
          </div>
        </div>
      </div>
      <div className="px-2.5">
        <SearchForm />
      </div>
    </div>
  );
};

export default Hero;
