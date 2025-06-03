import React from "react";
const faqContents = [
  {
    id: 1,
    question: "What is Torii Gate real estate company about?",
    answer: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
        laboriosam aspernatur.`,
  },
  {
    id: 2,
    question: "How do I list property on Torii gate?",
    answer: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
        laboriosam aspernatur.`,
  },
  {
    id: 3,
    question: "What are the criteria to list a property?",
    answer: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
        laboriosam aspernatur.`,
  },
  {
    id: 4,
    question: "Which way can tenants benefit from Torii gate",
    answer: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
        laboriosam aspernatur.`,
  },
  {
    id: 5,
    question: "How do Torii gate solutions impact transaction fees?",
    answer: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
        laboriosam aspernatur.`,
  },
];
const Faq = () => {
  return (
    <div className="layout py-14 flex flex-col lg:flex-row items-center justify-between gap-4">
      <div className="max-w-[523px] flex flex-col justify-between lg:h-[396px]">
        <div className="">
          <h1 className="text-2xl text-center lg:text-start lg:text-[45px] font-semibold text-[#0c0c0c]">
            Frequently Asked <br className="hidden lg:block" />
            Questions
          </h1>
          <p className="font-normal text-[16px] text-[#666] text-center lg:text-start ">
            Here are some answers asked by individuals & investors who uses
            Torii gate.
          </p>
        </div>
        <p className="hidden lg:block">
          Need more help <span className="underline">Contact US.</span>
        </p>
      </div>
      <div className="flex flex-col gap-[26px]">
        {faqContents.map((faq) => {
          return (
            <div
              key={faq.id}
              className="collapse collapse-arrow bg-[#FBFBFB] border border-base-300 "
            >
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">{faq.question}</div>
              <div className="collapse-content text-sm">{faq.answer}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
