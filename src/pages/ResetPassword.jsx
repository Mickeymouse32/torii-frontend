import React, { useState } from "react";
import AuthWrapper from "../components/layout/AuthWrapper";
import { axiosInstance } from "../utils/axiosInstance";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { PiWarningCircle } from "react-icons/pi";
import { resetPasswordSchema } from "../utils/formValidator";
import { useParams, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { token } = useParams();
  const redirect = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(resetPasswordSchema) });

  const handleResetPassword = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await axiosInstance.post("/auth/reset-password", {
        token,
        password: data.password,
      });
      if (response.status === 200) {
        redirect("/login");
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
      <form
        onSubmit={handleSubmit(handleResetPassword)}
        className="w-full lg:w-[505px] p-6 shadow-lg"
      >
        <h1 className="text-3xl font-bold">Reset Password</h1>
        <p className="text-[16px] font-medium text-[#666]">
          Enter your new Password
        </p>
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
            <span className="loading loading-spinner loading-md text-black"></span>
          ) : (
            "Reset Password"
          )}
        </button>
      </form>
    </AuthWrapper>
  );
};

export default ResetPassword;
