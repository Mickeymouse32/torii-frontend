import React from "react";
import err from "../assets/rafiki.png";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className=" bg-[#fbfbfb] h-screen flex items-center justify-center">
      <div className="text-center layout">
        <img
          src={err}
          alt="error 404"
          className="block mx-auto w-full max-w-[683.75px]"
        />
        <Link to="/" className="btn bg-black text-white">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default Error404;
