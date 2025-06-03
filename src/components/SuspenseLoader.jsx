import React from "react";
import { BounceLoader } from "react-spinners";
import logo from "../assets/blacklogo.png";

const SuspenseLoader = ({ height }) => {
  return (
    <div
      style={{ height: height ? height : "100vh" }}
      className={`flex items-center justify-center`}
    >
      <div className="flex items-center gap-3">
        <BounceLoader />
        <div className="flex gap-2 items-center">
          <img src={logo} alt="logo" />
          <div>
            <h2 className="font-medium text-lg lg:text-xl ">Torii Gate</h2>
            <p className="italic font-normal text-[12px] ">Homing made easy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuspenseLoader;
