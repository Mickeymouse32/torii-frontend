import React from "react";
import { Link } from "react-router-dom";
import { properties } from "../data";
import FeaturedPropertyCard from "./FeaturedPropertyCard";

const OtherPropertyFromOwner = ({ more, landlord }) => {
  return (
    <div className="py-10 layout">
      <div className="flex items-center justify-between">
        <h1 className="text-lg md:text-2xl lg:text-[35px] font-bold text-[#1e1e1e]">
          Other Property From {landlord}
        </h1>
        <Link
          to="/home"
          className="bg-black text-white rounded-lg px-5 py-[13px] hidden md:block"
        >
          See More
        </Link>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2.5 place-items-center">
        {more.map((property) => {
          return <FeaturedPropertyCard key={property._id} {...property} />;
        })}
      </div>
    </div>
  );
};

export default OtherPropertyFromOwner;
