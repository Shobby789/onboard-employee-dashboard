import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { LuEye, LuEyeOff } from "react-icons/lu";

const RegisterForm = () => {
  const [state, setState] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "OnBoard - Sign Up";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/sign-in");
  };
  return (
    <div className="w-full flex flex-col lg:flex-row min-h-screen primary-bg">
      <div className="w-[40%] px-4 md:px-8 lg:px-16 py-6 lg:py-10 hidden lg:block">
        <h1 className="text-white text-4xl font-semibold leading-[48px]">
          Learn From World's Best Instructors Around The World.
        </h1>
      </div>
      <div className="w-full lg:w-[60%] h-screen bg-white lg:rounded-l-[48px] flex items-center justify-center px-6">
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-[70%] 2xl:w-[60%] flex flex-col items-start gap-4 2xl:gap-8"
        >
          <h1 className="font-semibold text-2xl 2xl:text-3xl">
            Create Account
          </h1>

          <div className="w-full">
            <input
              type="text"
              className="py-3 border-b text-[15px] w-full outline-none"
              placeholder="Full Name"
            />
          </div>

          <div className="w-full">
            <input
              type="email"
              className="py-3 border-b text-[15px] w-full outline-none"
              placeholder="Email Address"
            />
          </div>

          <div className="w-full border-b py-3 flex items-center justify-between">
            <input
              type={state ? "text" : "password"}
              className="text-[15px] w-full outline-none"
              placeholder="Password"
            />
            <button onClick={() => setState(!state)}>
              {state ? (
                <LuEye className="secondary-text" />
              ) : (
                <LuEyeOff className="secondary-text" />
              )}
            </button>
          </div>
          <div className="w-full mt-4">
            <button
              type="submit"
              className="w-full py-3 text-center text-white font-medium text-[15px] primary-bg rounded-3xl"
            >
              Sign Up
            </button>
          </div>

          <div className="w-full flex items-center justify-center gap-2 mt-3 2xl:mt-6">
            <div className="w-[30%] h-[1px] bg-gray-300" />
            <p className="text-sm md:primary-text-size secondary-text">
              Or Sign Up With
            </p>
            <div className="w-[30%] h-[1px] bg-gray-300" />
          </div>

          <div className="w-full flex items-center justify-center gap-4 2xl:mt-4">
            <div className="">
              <img
                src="/google-icon.png"
                alt=""
                className="w-11 h-11 border rounded-full p-0.5"
              />
            </div>
            <div className="w-11 h-11 border rounded-full p-3">
              <FaFacebookF className="w-full h-full text-blue-600" />
            </div>
            <div>
              <img
                src="/instagram-icon.png"
                alt=""
                className="w-11 h-11 border rounded-full p-2.5"
              />
            </div>
            <div className="w-11 h-11 border rounded-full p-3">
              <FaTwitter className="w-full h-full text-blue-500" />
            </div>
            <div className="w-11 h-11 border rounded-full p-3">
              <FaLinkedin className="w-full h-full text-blue-700" />
            </div>
          </div>

          <div className="w-full flex justify-center mt-1 2xl:mt-2">
            <p className="secondary-text text-sm underline">
              Already have an account?{" "}
              <Link to="/sign-in" className="text-blue-600">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
