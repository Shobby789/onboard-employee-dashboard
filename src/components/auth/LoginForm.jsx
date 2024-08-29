import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { LuEye, LuEyeOff } from "react-icons/lu";

const LoginForm = () => {
  const [state, setState] = useState(false);

  useEffect(() => {
    document.title = "OnBoard - Sign Up";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full flex min-h-screen primary-bg">
      <div className="w-[40%] px-4 md:px-8 lg:px-16 py-6 lg:py-10 hidden lg:block">
        <h1 className="text-white text-4xl font-semibold leading-[48px]">
          Learn From World's Best Instructors Around The World.
        </h1>
      </div>
      <div className="w-full lg:w-[60%] bg-white lg:rounded-l-[48px] flex items-center justify-center px-6">
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-[70%] 2xl:w-[60%] flex flex-col items-start gap-4 2xl:gap-8"
        >
          <div>
            <h1 className="font-semibold text-2xl 2xl:text-3xl mb-2">
              Sign in!
            </h1>
            <p className="secondary-text mt-1 2xl:mt-2">
              Welcome Back! Please sign in to your <br /> account.
            </p>
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

          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
                className="accent-[#00bf63]"
              />
              <label htmlFor="rememberMe" className="text-sm secondary-text">
                Remembe Me
              </label>
            </div>

            <Link to="/verify-email" className="text-sm secondary-text">
              Forgot Password
            </Link>
          </div>

          <div className="w-full mt-4">
            <button
              type="submit"
              className="w-full py-3 text-center text-white font-medium text-[15px] primary-bg rounded-3xl"
            >
              Sign In
            </button>
          </div>

          <div className="w-full flex justify-center mt-1 2xl:mt-2">
            <p className="secondary-text text-sm underline">
              Don't have an account?{" "}
              <Link to="/" className="text-blue-600">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
