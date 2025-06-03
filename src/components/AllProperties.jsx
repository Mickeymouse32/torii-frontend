import React from "react";
import { properties } from "../data";
import FeaturedPropertyCard from "./FeaturedPropertyCard";
import { useTenantContext } from "../hooks/useTenantContext";
import SuspenseLoader from "./SuspenseLoader";
import EmptyTenant from "./EmptyTenant";

const AllProperties = () => {
  const { isLoading, properties } = useTenantContext();
  if (isLoading) {
    return <SuspenseLoader />;
  }

  if (!isLoading && properties.length === 0) {
    return <EmptyTenant />;
  }
  return (
    <div className="layout py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-lg md:text-2xl lg:text-[35px] font-bold text-[#1e1e1e]">
          All Properties
        </h1>
        <div></div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {properties.map((property) => {
          return <FeaturedPropertyCard key={property._id} {...property} />;
        })}
      </div>
    </div>
  );
};

export default AllProperties;
