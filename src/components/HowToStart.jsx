import React from "react";
import first from "../assets/first.png";
import second from "../assets/sec.png";
import third from "../assets/third.png";

const contents = [
  {
    id: 1,
    image: first,
    heading: "Sign up to get started",
    text: "Create an account quickly to access a wide range of available rental homes.",
  },
  {
    id: 2,
    image: second,
    heading: "Find home of your taste",
    text: "Browse through listings, filter by location, price, and preferences to discover the perfect place.",
  },
  {
    id: 3,
    image: third,
    heading: "Connect with house owner",
    text: "Reach out directly to property owners to ask questions, schedule visits, and finalize rent.",
  },
];

const HowToStart = () => {
  return (
    <div className="layout py-10">
      <div className="text-center lg:text-start">
        <h1 className="font-semibold text-2xl lg:text-[45px] mb-2.5">
          How to get started
        </h1>
        <p className="my-2 text-[#666]">
          Find your perfect home in three easy steps: sign up, find up,{" "}
          <br className="hidden lg:block" /> connect with house owner.
        </p>
      </div>
      <section className="flex flex-col lg:flex-row justify-between gap-4 items-center mt-7">
        {contents.map((content) => {
          return (
            <div
              key={content.id}
              className="p-3 border border-[#F6F6F6] rounded-[14px]  w-full max-w-[400px] h-[347px]"
            >
              <img src={content.image} alt="image" className="mx-auto block" />
              <h1 className="font-semibold text-[24px] mt-5">
                {content.heading}
              </h1>
              <p className="font-medium text-[#666]">{content.text}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default HowToStart;
