import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="layout flex flex-col lg:flex-row lg:justify-between py-10 gap-6">
        <div className="lg:w-[608px] lg:h-[248px]">
          <h1 className="text-white font-normal text-2xl lg:text-[48px] lg:w-[165px] ">
            Find Your Dream Home
          </h1>
        </div>
        <div className="lg:w-[608px] flex flex-col gap-6 justify-between item text-white">
          <div className="flex justify-between flex-col lg:flex-row">
            <div className="text-whie font-normal lg:font-[400] text-1xl lg:text-[14px]">
              <p>Home</p>
              <p>Buy</p>
              <p>List property</p>
              <p>Company</p>
            </div>
            <div className="font-normal text-white text-sm">
              <p> &copy; {new Date().getFullYear()} - Copyright </p>
            </div>
          </div>
          <div className="flex justify-between flex-col lg:flex-row lg:items-end">
            <div className="font-normal lg:font-[400] text-[14px]">
              <p className="font-normal lg:font-[400] pb-[5px] lg:text-[10px]">
                Contact Us
              </p>
              <h3>+1 891 989-11-91</h3>
              <h3>info@logoipsum.com</h3>
            </div>
            <div className="flex gap-[5px] lg:gap-[30px] text-[#FFFFFF] mt-2.5">
              <FaLinkedinIn />
              <FaFacebookF />
              <IoLogoYoutube />
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
