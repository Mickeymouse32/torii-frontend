import React, { useState } from "react";
import logo from "../assets/blacklogo.png";
import { Link, useNavigate } from "react-router-dom";
import AuthWrapper from "../components/layout/AuthWrapper";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { PiWarningCircle } from "react-icons/pi";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../utils/formValidator";
import { axiosInstance } from "../utils/axiosInstance";
import { useAppContext } from "../hooks/useAppContext";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [role, setRole] = useState("tenant");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const redirect = useNavigate();
  const { login } = useAppContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const handleLogin = async (data) => {
    setIsSubmitting(true);
    try {
      // console.log("Login Data:", { ...data, role });
      const { data: mydata } = await axiosInstance.post("/auth/login", {
        ...data,
        role,
      });
      console.log(mydata);
      login(mydata.token, mydata.user);
      if (mydata.user.role === "tenant") {
        redirect("/home");
      } else {
        redirect("/dashboard");
      }
      setErrorMessage("");
    } catch (error) {
      console.log(error);
      setErrorMessage(error?.response?.data?.message || "Login Failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthWrapper>
      <Link to="/" className="ml-6 block">
        <div className="flex gap-2 items-center">
          <img src={logo} alt="logo" />
          <div>
            <h2 className="font-medium text-lg lg:text-xl ">Torii Gate</h2>
            <p className="italic font-normal text-[12px] ">
              Homing made easy to home
            </p>
          </div>
        </div>
      </Link>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="w-full lg:w-[505px] p-6"
      >
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-[16px] font-medium text-[#666]">
          Enter your details to sign in to your account.
        </p>

        <div className="flex mt-2 justify-between items-center font-medium rounded-lg text-[16px] bg-[#F5F5F5] border border-[#d9d9d9] w-[267px] h-[38px] px-2 py-1">
          <button
            type="button"
            onClick={() => setRole("tenant")}
            className={
              role === "tenant"
                ? "bg-[#0c0c0c] text-white rounded-lg  px-2 py-1"
                : "text-[#666] bg-transparent cursor-pointer"
            }
          >
            House Hunter
          </button>
          <button
            type="button"
            onClick={() => setRole("landlord")}
            className={
              role === "landlord"
                ? "bg-[#0c0c0c] text-white rounded-lg  px-2 py-1"
                : "text-[#666] bg-transparent cursor-pointer"
            }
          >
            House Owner
          </button>
        </div>

        <div className="mt-7">
          <label
            htmlFor="email"
            className="font-medium text-[16px] mb-1.5 block"
          >
            Email <sup className="text-red-500">*</sup>
          </label>
          <input
            type="text"
            id="email"
            {...register("email")}
            className="input w-full rounded-lg border border-[#d9d9d9] h-[56px] text-[16px]"
            placeholder="Enter Email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}

          <div className="relative mt-5">
            <label
              htmlFor="password"
              className="font-medium text-[16px] mb-1.5 block"
            >
              Password <sup className="text-red-500">*</sup>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              {...register("password")}
              className="input w-full rounded-lg border border-[#d9d9d9] h-[56px] text-[16px]"
              placeholder="Enter Your Password"
            />
            <span
              className="cursor-pointer absolute  right-4 top-[55%] "
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </span>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          {errorMessage && (
            <div className="w-full rounded-xl py-2 my-2.5 px-4 bg-[#FF37370D] border border-[#ff3737] text-[#ff3737] flex items-center gap-3">
              <PiWarningCircle size={22} />
              <p>{errorMessage}</p>
            </div>
          )}
          <Link
            to="/forgot-password"
            className="font-medium text-sm mt-2 inline-block"
          >
            Forgot Password?
          </Link>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn w-full h-[56px] rounded-lg bg-black text-white block mt-5"
          >
            {isSubmitting ? (
              <span className="loading loading-spinner loading-md text-black"></span>
            ) : (
              "Login"
            )}
          </button>

          <p className="my-5 text-center text-[#666]">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-sm mt-2 text-black"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </AuthWrapper>
  );
};

export default Login;
