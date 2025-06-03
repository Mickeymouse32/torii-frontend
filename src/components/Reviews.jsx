import React, { useRef, useEffect } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

export const reviews = [
  {
    id: "1",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    role: "Hunter",
    comment: "This platform made house hunting a breeze. Highly recommended!",
    name: "Shane Hunter",
  },
  {
    id: "2",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
    role: "Hunter",
    comment:
      "I appreciated how easy it was to connect with property owners directly. No hidden fees, no unnecessary delays—just straightforward and transparent communication. This platform made house hunting so much more convenient!",
    name: "Mario Kart",
  },
  {
    id: "3",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    role: "Owner",
    comment: "Managing multiple listings and tenants has never been smoother.",
    name: "John Doe",
  },
];

const Reviews = () => {
  const containerRef = useRef(null);
  const secondReviewRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && secondReviewRef.current) {
          secondReviewRef.current.scrollIntoView({
            behavior: "smooth",
            inline: "center",
          });
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className="py-10 hidden xl:block" ref={containerRef}>
      <div className="flex items-center justify-between layout">
        <h1 className="font-bold text-sm sm:text-lg md:text-2xl lg:text-[45px] text-center">
          What our users think of us
        </h1>

        {/* <div className="flex items-center gap-2.5">
          <button className="bg-[#F6F6F6] border border-[#E5E5E5] rounded-lg px-[20px] py-[13px] cursor-pointer">
            <IoIosArrowRoundBack size={30} />
          </button>
          <button className="bg-black text-white rounded-lg px-[20px] py-[13px] cursor-pointer">
            <IoIosArrowRoundForward size={30} />
          </button>
        </div> */}
      </div>
      <div className="flex w-full overflow-x-auto scroll-smooth gap-[39px] mt-6 pb-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            ref={review.id === "2" ? secondReviewRef : null}
            className="bg-[#fbfbfb] rounded-xl lg:w-[820px] h-[220px] flex-none p-2.5 text-center"
          >
            <p className="text-[20px] font-medium">
              <span className="text-4xl text-[#666] font-bold">"</span>
              {review.comment}
            </p>
            <div className="flex items-center gap-2.5 w-[207px] mx-auto mt-5">
              <img
                src={review.image}
                alt="image"
                className="w-[49px] h-[49px] rounded-full"
              />
              <div>
                <h2 className="font-bold text-[#363636] text-[16px]">
                  {review.name}
                </h2>
                <p className="font-medium text-[#666] text-[14px]">
                  House {review.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
