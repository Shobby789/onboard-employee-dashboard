import React from "react";
import { Link } from "react-router-dom";

const VerifyEmailForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full h-screen flex items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-[70%] lg:w-[40%] 2xl:w-[30%] py-12 bg-white flex flex-col items-start justify-center gap-5 2xl:gap-7 px-6 md:px-8 lg:px-16 xl:px-20 border rounded relative"
      >
        <div className="text-center flex flex-col items-center w-full">
          <h1 className="font-semibold text-2xl 2xl:text-3xl mb-2 text-center">
            Verify Email
          </h1>
          <p className="secondary-text mt-1 2xl:mt-2 primary-text-size text-center">
            Enter your email and we'll send OTP code on your email.
          </p>
        </div>

        <div className="w-full">
          <input
            type="email"
            className="py-3 border-b text-[15px] w-full outline-none"
            placeholder="Email Address"
          />
        </div>

        <div className="w-full mt-4">
          <button
            type="submit"
            className="w-full py-3 text-center text-white font-medium text-[15px] primary-bg rounded-3xl"
          >
            Send OTP
          </button>
        </div>

        <div className="w-full flex items-center justify-center gap-2 mt-3 2xl:mt-6">
          <div className="w-[30%] h-[1px] bg-gray-300" />
          <p className="text-sm md:primary-text-size secondary-text">OR</p>
          <div className="w-[30%] h-[1px] bg-gray-300" />
        </div>

        <div className="w-full text-center">
          <Link to="/" className="text-sm lg:primary-text-size secondary-text">
            Create new account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default VerifyEmailForm;
