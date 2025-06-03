import frame1 from "../assets/bg.png";

const properties = [
  { id: 1, amount: "300k", available: "Available properties" },
  { id: 2, amount: "90k", available: "Sold Properties" },
  { id: 3, amount: "90k", available: "Listed Properties" },
];

const Experience = () => {
  return (
    <div className="layout">
      <div className="flex flex-col lg:flex-row justify-between gap-10 items-center py-10">
        <div className="max-w-[610px] w-full ">
          <h1 className="font-[600] text-xl lg:text-[45px] text-[#0C0C0C] ">
            Experience Unparalleled Property Search with Torii gate
          </h1>
          <p className="font-[500] text-[12px] lg:text-[16px] text-[#666666] my-[20px]">
            At Torii Gate, we believe finding your perfect home should be easy
            and exciting. Founded to transform the homebuying experience, we
            simplify the property search process with advanced technology and a
            team of experts. Our mission is to provide unparalleled convenience
            and personalized service, making every step towards your dream home
            effortless.
          </p>

          <div className="flex items-center gap-4">
            {properties.map((property) => {
              return (
                <div key={property.id}>
                  <p className="font-[800] text-12px md:text-[25px] text-[#0C0C0C]">
                    {property.amount}
                  </p>
                  <p className="font-[500] text-[10px] md:text-[14px] text-[#666666]">
                    {property.available}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <img
          src={frame1}
          alt="frame1"
          className="max-w-[611px] w-full h-[391px] rounded-[16px]"
        />
      </div>
    </div>
  );
};

export default Experience;
