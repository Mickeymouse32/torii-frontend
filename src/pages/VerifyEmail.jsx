import { useParams, useNavigate, Link } from "react-router-dom";
import { axiosInstance } from "../utils/axiosInstance";
import { useState, useEffect } from "react";
import icon from "../assets/Layer_1.png";
import { BounceLoader } from "react-spinners";
import { MdCancel } from "react-icons/md";

const VerifyEmail = () => {
  const { token } = useParams();
  const [errorMsg, setErrorMsg] = useState("");
  const [status, setStatus] = useState("verifying");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const handleResendEmail = async () => {
    try {
      const response = await axiosInstance.post("/auth/resend-email", {
        email,
      });
      if (response.status === 200) {
        setFeedback("Email sent");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkToken = async () => {
    try {
      const response = await axiosInstance.post(`/auth/verify-email/${token}`, {
        token,
      });
      if (response.status === 200) {
        setStatus("success");
      }
    } catch (error) {
      setErrorMsg("Email Verification Failed");
      setStatus("error");
      setEmail(error?.response?.data?.email);
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  if (status === "verifying") {
    return (
      <div className="flex items-center justify-center h-screen bg-[#fbfbfb]">
        <div className="w-full max-w-[505px] py-[29px] px-[26px] shadow-md text-center">
          <BounceLoader className="mx-auto my-2" />
          <h1 className="text-xl lg:text-[30px] font-semibold my-3">
            Email Verifying....
          </h1>
          <p className="text-[#666] text-lg">Please Wait</p>
        </div>
      </div>
    );
  }
  if (status === "success") {
    return (
      <div className="flex items-center justify-center h-screen bg-[#fbfbfb]">
        <div className="w-full max-w-[505px] py-[29px] px-[26px] shadow-md text-center">
          <img src={icon} alt="verify" className="block mx-auto" />
          <h1 className="text-xl lg:text-[30px] font-semibold my-3">
            Verification successful
          </h1>
          <p className="text-[#666] mb-4">
            Your account has been verified successfully
          </p>
          <Link to="/login">
            <button className="w-full font-semibold rounded-xl bg-[#0c0c0c] text-white h-[56px]">
              Proceed to login
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen bg-[#fbfbfb]">
      <div className="w-full max-w-[505px] py-[29px] px-[26px] shadow-md text-center">
        <MdCancel size={80} className="text-red-500 mx-auto" />
        <p className="bg-green-100 text-green-900 py-1.5 px-3 rounded-lg">
          {feedback}
        </p>
        <h1 className="text-xl lg:text-[30px] font-semibold my-3">
          Email Verification Failed
        </h1>
        <p className="text-[#666] mb-4">Invalid or expired Token</p>

        <button
          onClick={handleResendEmail}
          className="w-full font-semibold rounded-xl bg-[#0c0c0c] text-white h-[56px]"
        >
          Resend Verification Mail
        </button>
      </div>
    </div>
  );
};

export default VerifyEmail;
