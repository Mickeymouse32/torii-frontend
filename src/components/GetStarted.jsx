import React from "react";
import owner from "../assets/owner.png";
import hunter from "../assets/hunter.png";
import { Link } from "react-router-dom";

const GetStarted = () => {
  const contents = [
    { id: 1, text: "House Hunters", image: hunter, to: "/login" },
    { id: 2, text: "House Owner", image: owner, to: "/register" },
  ];
  return (
    <div className="layout py-10">
      <h1 className="text-2xl font-semibold lg:text-[45px] text-[#0c0c0c] text-center lg:text-start">
        Get Started With Torii Gate
      </h1>
      <section className="flex flex-col lg:flex-row justify-between gap-4 items-center mt-7">
        {contents.map((content) => {
          return (
            <Link
              to={content.to}
              key={content.id}
              className="bg-[#FBFBFB] border border-[#F6F6F6] rounded-[18px] text-center w-full max-w-[610px] h-[393px]"
            >
              <img src={content.image} alt="image" className="mx-auto block" />
              <h2 className="font-semibold text-[24px] mt-7">{content.text}</h2>
            </Link>
          );
        })}
      </section>
    </div>
  );
};

export default GetStarted;
