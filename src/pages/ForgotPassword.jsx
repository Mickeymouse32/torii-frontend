import React, { useState } from "react";
import AuthWrapper from "../components/layout/AuthWrapper";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { axiosInstance } from "../utils/axiosInstance";
import { forgotPasswordSchema } from "../utils/formValidator";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PiWarningCircle } from "react-icons/pi";

const ForgotPassword = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const redirect = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
  });

  const handleForgotPassword = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await axiosInstance.post("/auth/forgot-password", {
        ...data,
      });
      if (response.status === 200) {
        //redirect to the assignment page
        localStorage.setItem("email", data.email);
        redirect("/check-email");
      }
      console.log(data);
    } catch (error) {
      console.log(error);
      setErrorMessage(error?.response?.data?.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <AuthWrapper>
      <div className="bg-white py-[29px] px-[26px] rounded-lg shadow-lg w-full lg:w-[505px]">
        <Link
          to="/register"
          className="border border-[#f2f2f2] rounded-lg py-1 px-2"
        >
          <button className="flex items-center gap-1.5">
            <FaArrowLeft /> Back
          </button>
        </Link>
        <div className="max-w-[332px] my-5">
          <h1 className="text-2xl lg:text-[30px] font-semibold">
            Forgot your password?
          </h1>
          <p className="text-[#666] text-[16px]">
            We will send instructions to your email to reset your password.
          </p>
        </div>
        <form onSubmit={handleSubmit(handleForgotPassword)}>
          <label className="label mb-1.5" htmlFor="email">
            Email<sup>*</sup>
          </label>
          <input
            className="input w-full rounded-lg border border-[#d9d9d9] h-[56px] text-[16px]"
            type="email"
            id="email"
            placeholder="Enter Email"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
          {errorMessage && (
            <div className="w-full rounded-xl py-2 my-2.5 px-4 bg-[#FF37370D] border border-[#ff3737] text-[#ff3737] flex items-center gap-3">
              <PiWarningCircle size={22} />
              <p>{errorMessage}</p>
            </div>
          )}
          <button
            disabled={isSubmitting}
            className="btn bg-black text-[16px] rounded-xl h-[56px] text-white w-full mt-2.5"
            type="submit"
          >
            {isSubmitting ? (
              <span className="loading loading-spinner loading-md text-black"></span>
            ) : (
              "Continue"
            )}
          </button>
        </form>
        <p className="text-center text-[#666] font-medium mt-6">
          Remembered Your Password{" "}
          <Link className="font-semibold text-black" to="/login">
            Sign in
          </Link>
        </p>
      </div>
    </AuthWrapper>
  );
};

export default ForgotPassword;
