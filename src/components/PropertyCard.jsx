import React from "react";
import { MdOutlineBathtub } from "react-icons/md";
import { LiaBedSolid } from "react-icons/lia";
import { TbToolsKitchen } from "react-icons/tb";

const PropertyCard = ({
  _id,
  image,
  title,
  kitchen,
  bedrooms,
  bathrooms,
  tag,
  price,
  address,
  status,
}) => {
  return (
    <div className="w-[295.4px] h-[317px] mt-6">
      <img
        src={image}
        alt="image"
        className="w-full h-[203px] rounded-[10px]"
      />
      <div className="mt-[10px]">
        <div className="flex items-center justify-between">
          <h1 className="font-[600] text-[20px] text-[#363636]">
            {price}
            <span className="font-medium text-[16px] ">/yr</span>
          </h1>
        </div>
        <h2 className="font-medium text-[16px] text-[#0C0C0C] mt-2">{title}</h2>
        <p className="text-[#666666] text-[14px] font-[500]">{address}</p>
        <div className="flex items-center gap-[22px] text-[#363636] text-sm flex-wrap mt-1">
          <p className="flex items-center gap-2">
            <LiaBedSolid /> {bedrooms} Beds
          </p>
          <p className="flex items-center gap-2">
            <MdOutlineBathtub /> {bathrooms} Baths
          </p>
          <p className="flex items-center gap-2">
            <TbToolsKitchen /> {kitchen} Kitchen
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
