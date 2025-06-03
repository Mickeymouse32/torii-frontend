import React from "react";
import { RiResetLeftFill } from "react-icons/ri";
import { useState } from "react";
import { useTenantContext } from "../hooks/useTenantContext";

const SearchForm = () => {
  const { setLocValue, resetFilters, setBudget, setType } = useTenantContext();
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [houseType, setHouseType] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setLocValue(location.trim());
    setBudget(price);
    setType(houseType);
  };

  const handleReset = () => {
    resetFilters();
    setLocation("");
    setPrice("");
    setHouseType("");
  };
  return (
    <div className=" max-w-[500px]  lg:max-w-[1030px] mx-auto w-full bg-[#fdfdfd] rounded-2xl p-3 lg:px-[14px] lg:py-[14px] mt-10">
      <form
        onSubmit={handleSearch}
        className="flex flex-col lg:flex-row items-end gap-4"
      >
        <div className="w-full lg:[w-221px]">
          <label htmlFor="type" className="labelhero">
            Type
          </label>
          <select
            id="type"
            className="select w-full bg-[#f6f6f6]"
            value={houseType}
            onChange={(e) => setHouseType(e.target.value)}
          >
            <option value="">Type</option>
            <option value="flat">Flat</option>
            <option value="duplex">Duplex</option>
            <option value="apartment">Apartment</option>
          </select>
        </div>
        <div className="w-full lg:[w-221px]">
          <label htmlFor="budget" className="labelhero">
            Budget
          </label>
          <input
            type="number"
            id="budget"
            placeholder="Budget"
            className="input w-full bg-[#f6f6f6]"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="w-full lg:[w-221px]">
          <label htmlFor="location" className="labelhero">
            Location
          </label>
          <input
            type="text"
            id="budget"
            placeholder="Location"
            className="input w-full bg-[#f6f6f6]"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn bg-black text-white w-full lg:w-[203px] rounded-xl"
        >
          Search For Property
        </button>
      </form>
      <button
        onClick={handleReset}
        className="flex items-center gap-2 mt-2.5 cursor-pointer"
      >
        <RiResetLeftFill /> Reset Filters
      </button>
    </div>
  );
};

export default SearchForm;
