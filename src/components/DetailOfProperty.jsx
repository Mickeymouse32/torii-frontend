import { useState } from "react";
import {
  FaBed,
  FaToilet,
  FaCouch,
  FaUtensils,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdOutlineMailOutline,
} from "react-icons/md";
import { formatPrice } from "../utils/priceFormatter";

const dummyImages = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG91c2V8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1598228723793-52759bba239c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdXNlfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2V8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG91c2V8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1661876449499-26de7959878f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdXNlfGVufDB8fDB8fHww",
];

const DetailOfProperty = ({ property }) => {
  const [current, setCurrent] = useState(0);
  const [images, setImages] = useState([...property.images]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="flex flex-col md:flex-row  layout py-10 gap-4">
      {/* Image Carousel */}
      <div className="relative md:w-1/2 w-full rounded-lg overflow-hidden">
        <img
          src={images[current]}
          alt="Property"
          className="object-cover max-w-[610px] h-[431px] w-full rounded-xl"
        />
        {/* Carousel Arrows */}
        <button
          onClick={prevSlide}
          className="absolute cursor-pointer top-1/2 left-2 transform -translate-y-1/2 bg-white/70 rounded-full p-1 shadow"
        >
          <MdKeyboardArrowLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute cursor-pointer top-1/2 right-2 transform -translate-y-1/2 bg-white/70 rounded-full p-1 shadow"
        >
          <MdKeyboardArrowRight size={24} />
        </button>
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-between md:w-1/2">
        <div>
          <div className="flex justify-between items-start">
            <h2 className="text-lg font-medium text-[#1d1d1d]">
              {property.title}
            </h2>
            <span className="text-[20px] font-semibold text-[#0c0c0c]">
              {formatPrice(property.price)}/{property.paymentPeriod}
            </span>
          </div>
          <p className="flex items-center text-[16px] text-[#666] mb-3">
            <FaMapMarkerAlt className="mr-1" /> {property.location}
          </p>
          <p className="text-[16px] text-[#666]"> {property.description} </p>
          <p className="text-[16px] text-[#666] mb-2">
            At Torii Gate, we believe finding your perfect home should be easy
            and exciting. Founded to transform the homebuying experience, we
            simplify the property search process with advanced technology and a
            team of experts. Our mission is to provide unparalleled convenience
            and personalized service, making every step towards your dream home
            effortless.
          </p>

          {/* Facilities */}
          <div className="mt-3">
            <h3 className="font-medium mb-2 text-lg">Facilities</h3>
            <div className="grid grid-cols-2  lg:grid-cols-4 gap-x-4 gap-y-2 text-sm">
              <div className="flex items-center gap-2.5">
                <div className="bg-[#fbfbfb] h-[46px] w-[46px] rounded-lg border border-[#d9d9d9] flex items-center justify-center">
                  <FaCouch size={22} />
                </div>
                <div>
                  <h1 className="text-[#666] text-sm font-medium">
                    Living Room
                  </h1>
                  <span className="font-semibold text-lg">
                    {property.livingRoom}{" "}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="bg-[#fbfbfb] h-[46px] w-[46px] rounded-lg border border-[#d9d9d9] flex items-center justify-center">
                  <FaBed size={22} />
                </div>
                <div>
                  <h1 className="text-[#666] text-sm font-medium">Bedrooms</h1>
                  <span className="font-semibold text-lg">
                    {property.bedroom}{" "}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="bg-[#fbfbfb] h-[46px] w-[46px] rounded-lg border border-[#d9d9d9] flex items-center justify-center">
                  <FaUtensils size={22} />
                </div>
                <div>
                  <h1 className="text-[#666] text-sm font-medium">Kitchen</h1>
                  <span className="font-semibold text-lg">
                    {property.kitchen}{" "}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="bg-[#fbfbfb] h-[46px] w-[46px] rounded-lg border border-[#d9d9d9] flex items-center justify-center">
                  <FaToilet size={22} />
                </div>
                <div>
                  <h1 className="text-[#666] text-sm font-medium">Toilet</h1>
                  <span className="font-semibold text-lg">
                    {property.toilet}{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* House Owner Info */}
        <div className="py-2 px-[18px] shadow-lg rounded-lg">
          <h1 className="text-lg text-[#0c0c0c] mb-2 font-medium">
            House owner
          </h1>

          <div className="flex justify-between items-end flex-wrap gap-3">
            <div className="flex gap-2 items-center">
              <img
                src={property.landlord.profilePicture}
                alt="owner"
                className="w-[46px] h-[46px] rounded-lg object-cover"
              />
              <div>
                <p className="font-medium">{property.landlord.fullName}</p>
                <span className="bg-[#61C45321] text-[#61C453] p-[1.5px] px-2 rounded-xl">
                  Verified
                </span>
              </div>
            </div>
            <div className=" border-[5px] border-[#e5e5e5] flex justify-center items-center gap-3 rounded-lg">
              <FaPhoneAlt />
              <p>{property.landlord.phoneNumber}</p>
            </div>
            <div className="bg-[#fbfbfb] border-[5px] border-[#e5e5e5] flex justify-center items-center gap-3 rounded-lg">
              <MdOutlineMailOutline />
              <p>{property.landlord.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailOfProperty;
