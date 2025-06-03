import React from "react";
import logo from "../../assets/logo.png";

const AuthWrapper = ({ children }) => {
  return (
    <div className=" bg-[#fbfbfb] ">
      <div className="flex items-center justify-center lg:justify-between lg:gap-2.5 min-h-screen layout bg-[#fbfbfb] p-2">
        <div className="bg-white rounded-xl ">
          <div>{children}</div>
        </div>
        <div className="hidden  lg:flex auth bg-no-repeat bg-cover h-[607px] w-[680px] rounded-2xl  items-end justify-start text-white">
          <div className="flex gap-2 items-center mb-5 ml-2.5">
            <img src={logo} alt="logo" />
            <div>
              <h2 className="font-medium text-3xl ">Torii Gate</h2>
              <p className="italic font-normal text-[16px]">
                Homing made easy to home
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthWrapper;
