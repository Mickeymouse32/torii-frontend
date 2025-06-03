import React, { useState } from "react";
import logo from "../assets/blacklogo.png";
import { Link, useNavigate } from "react-router-dom";
import AuthWrapper from "../components/layout/AuthWrapper";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { PiWarningCircle } from "react-icons/pi";
import { registerSchema } from "../utils/formValidator";
import { axiosInstance } from "../utils/axiosInstance";

const Register = () => {
  const [role, setRole] = useState("tenant");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const redirect = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const handleRegister = async (data) => {
    setIsSubmitting(true);
    try {
      // console.log("Login Data:", { ...data, role });
      const response = await axiosInstance.post("/auth/register", {
        ...data,
        role,
      });
      if (response.status === 201) {
        localStorage.setItem("email", data.email);
        redirect("/verification");
        //store users mail
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error?.response?.data?.message);
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
        onSubmit={handleSubmit(handleRegister)}
        className="w-full lg:w-[520px] p-6"
      >
        <h1 className="text-3xl font-semibold">Sign Up</h1>
        <p className="text-[16px] font-medium text-[#666] my-2">
          Enter your details to sign up to your account.
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

        {/* Name */}
        <div className="mt-7">
          <label
            htmlFor="name"
            className="font-medium text-[16px] mb-1.5 block"
          >
            Name <sup className="text-red-500">*</sup>
          </label>
          <input
            type="text"
            id="name"
            {...register("fullName")}
            className="input w-full rounded-lg border border-[#d9d9d9] h-[56px] text-[16px]"
            placeholder="Enter Full Name"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="mt-5">
          <label
            htmlFor="email"
            className="font-medium text-[16px] mb-1.5 block"
          >
            Email <sup className="text-red-500">*</sup>
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="input w-full rounded-lg border border-[#d9d9d9] h-[56px] text-[16px]"
            placeholder="Enter Email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="mt-5">
          <label
            htmlFor="phone"
            className="font-medium text-[16px] mb-1.5 block"
          >
            Phone Number <sup className="text-red-500">*</sup>
          </label>
          <input
            type="text"
            id="phone"
            {...register("phoneNumber")}
            className="input w-full rounded-lg border border-[#d9d9d9] h-[56px] text-[16px]"
            placeholder="Enter Phone Number (+234)"
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm mt-1">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>

        {/* Password */}
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
            placeholder="Enter Password"
          />
          <span
            className="cursor-pointer absolute  right-4 top-[58%]"
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

        {/* Confirm Password */}
        <div className="relative mt-5">
          <label
            htmlFor="confirmPassword"
            className="font-medium text-[16px] mb-1.5 block"
          >
            Confirm Password <sup className="text-red-500">*</sup>
          </label>
          <input
            type={showConfirm ? "text" : "password"}
            id="confirmPassword"
            {...register("confirmPassword")}
            className="input w-full rounded-lg border border-[#d9d9d9] h-[56px] text-[16px]"
            placeholder="Confirm Password"
          />
          <span
            className="cursor-pointer absolute  right-4 top-[58%]"
            onClick={() => setShowConfirm(!showConfirm)}
          >
            {showConfirm ? <FiEyeOff /> : <FiEye />}
          </span>
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        {errorMessage && (
          <div className="w-full rounded-xl py-2 my-2.5 px-4 bg-[#FF37370D] border border-[#ff3737] text-[#ff3737] flex items-center gap-3">
            <PiWarningCircle size={22} />
            <p>{errorMessage}</p>
          </div>
        )}
        {/* Submit */}
        <button
          disabled={isSubmitting}
          className="btn w-full h-[56px] rounded-lg bg-black text-white block mt-6"
        >
          {isSubmitting ? (
            <span className="loading loading-spinner loading-md"></span>
          ) : (
            "Register"
          )}
        </button>

        {/* Link to login */}
        <p className="my-5 text-center text-[#666]">
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-sm text-black">
            Login
          </Link>
        </p>
      </form>
    </AuthWrapper>
  );
};

export default Register;
