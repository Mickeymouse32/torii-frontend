import React from "react";
import { properties } from "../data";
import PropertyCard from "../components/PropertyCard";

const FeaturedProperty = () => {
  return (
    <div className="layout py-10">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <h1 className="font-[600] text-[30px] lg:text-[45px] text-[#1e1e1e]">
          Featured property
        </h1>
        <button className=" hidden lg:block font-600 text-[18px] text-[#ffffff] rounded-[8px] w-[123px] h-[48px] bg-[#1E1E1E]">
          See more
        </button>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center  gap-4 lg:gap-2.5 mt-[20px]">
        {properties.slice(0, 8).map((property) => {
          return <PropertyCard key={property._id} {...property} />;
        })}
      </div>
    </div>
  );
};

export default FeaturedProperty;
