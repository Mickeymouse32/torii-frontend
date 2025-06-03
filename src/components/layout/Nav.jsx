import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { axiosInstance } from "../../utils/axiosInstance";
import { useAppContext } from "../../hooks/useAppContext";

const Nav = ({ bg }) => {
  const [showLogout, setShowLogout] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const { user, logout } = useAppContext();
  const redirect = useNavigate();
  const handleLogout = () => {
    logout();
    redirect("/login");
  };
  return (
    <nav className={bg ? `${bg}` : "bg-[#00000042]"}>
      <div className="navbar  text-white lg:h-[80px] layout">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            {user ? (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-black rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            ) : (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-black rounded-box z-1 mt-3 w-52 p-2 shadow "
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                {!user && (
                  <>
                    <li>
                      <Link to="/login">Explore Property</Link>
                    </li>
                    <li>
                      <Link to="/login">List Properties</Link>
                    </li>
                  </>
                )}
              </ul>
            )}
          </div>
          <Link to="/" className="">
            <div className="flex gap-2 items-center">
              <img src={logo} alt="logo" className="ml-2 lg:ml-0" />
              <div>
                <h2 className="font-medium text-lg hidden lg:block">
                  Torii Gate
                </h2>
                <p className="italic font-normal text-[12px] hidden lg:block">
                  Homing made easy to home
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {!user && (
              <>
                <li>
                  <Link to="/login">Explore Property</Link>
                </li>
                <li>
                  <Link to="/login">List Properties</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        {user ? (
          <div className="navbar-end flex items-center space-x-4 relative">
            <div className="  flex items-center justify-center gap-2.5">
              <img
                src={user.profilePicture}
                alt="pic"
                className="rounded-full object-cover h-9 w-9"
              />

              <button
                onClick={() => setShowLogout(!showLogout)}
                className="cursor-pointer"
              >
                {showLogout ? (
                  <IoIosArrowUp size={20} />
                ) : (
                  <IoIosArrowDown size={20} />
                )}
              </button>
            </div>
            {showLogout && (
              <button
                onClick={handleLogout}
                className="absolute btn bg-red-500 text-white top-16 right-4 z-10"
              >
                Logout
              </button>
            )}
          </div>
        ) : (
          <div className="navbar-end flex gap-3">
            <Link
              to="/login"
              className=" bg-black py-[13px] px-[24px] text-white rounded-[10px]"
            >
              Log In
            </Link>
            <Link
              to="/register"
              className="py-[13px] px-[24px] text-black rounded-[10px] bg-white hidden lg:block "
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
