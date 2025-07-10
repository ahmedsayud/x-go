import React from "react";
import { Link } from "react-router-dom";
import "flowbite";

const SignUp: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFB347] via-[#FFE0B2] to-white">
      <div className="flex justify-between  w-[70%] max-w-5xl bg-transparent  shadow-none md:shadow-2xl overflow-hidden md:h-[600px]">
        {/* Left Side (Welcome Section) */}
        <div className="w-[40%]">
          <div className="flex-1 h-[80%] flex-col  flex flex-col justify-center  md:pl-16 md:pr-10 md:py-0 md:justify-center md:items-start  text-left md:text-left bg-transparent">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 leading-tight">
              Welcome, <br />
              Your next drive is waiting
            </h2>
            <p className="text-gray-600 mb-10 max-w-md md:max-w-xs">
              Lorem ipsum dolor sit amet consectetur. A tellus enim orci a eget
              porttitor et.
            </p>
          </div>
          <div className="flex  justify-button  w-full items-center space-x-6 text-sm text-gray-500 md:justify-start justify-start w-full">
            {/* <div className="flex justify-center items-center min-h-screen"> */}

            <button
              type="button"
              className="flex  justify-center items-center border-0.75 border-gray-900 rounded-lg px-4 py-2 text-gray-700  shadow-sm font-medium"
            >
              <span className="mr-2">
                {/* علم بريطانيا SVG */}
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="24" height="24" fill="#00247d" />
                  <path
                    d="M0 0L24 24M24 0L0 24"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <path d="M12 0V24M0 12H24" stroke="#fff" strokeWidth="4" />
                  <path
                    d="M0 0L24 24M24 0L0 24"
                    stroke="#cf142b"
                    strokeWidth="1"
                  />
                  <path d="M12 0V24M0 12H24" stroke="#cf142b" strokeWidth="2" />
                </svg>
              </span>
              English
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <Link to="#" className="hover:underline text-[#cc7f15]">
              Terms
            </Link>
            <Link to="#" className="hover:underline text-[#cc7f15]">
              Plans
            </Link>
            <Link to="#" className="hover:underline text-[#cc7f15]">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right Side (Sign Up Form) */}
        <div className=" px-5 flex items-center justify-center bg-white rounded-lg shadow-2xl    ">
          <form className="w-full max-w-xs md:max-w-sm space-y-3 my-12 ">
            <h3 className="text-2xl font-extrabold mb-6 text-gray-900 text-center">
              Sign Up
            </h3>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-semibold text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-input py-1 block w-full rounded-lg border border-gray-300 focus:ring-[#E6911E] focus:border-[#E6911E] text-base"
                placeholder="name@email.com"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full border border-gray-300 rounded-lg px-4 py-1 pr-10 focus:outline-none focus:ring-2 focus:ring-[#E6911E]"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  onClick={() => setShowPassword((prev) => !prev)}
                  tabIndex={-1}
                >
                  {showPassword ? (
                    // أيقونة عين مفتوحة
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  ) : (
                    // أيقونة عين مغلقة
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.956 9.956 0 012.293-3.95M6.873 6.872A9.956 9.956 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.956 9.956 0 01-4.293 5.95M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3l18 18"
                      />
                    </svg>
                  )}
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-1">
                Use 8 or more characters with a mix of letters, numbers &
                symbols.
              </p>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Repeat Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full border border-gray-300 rounded-lg px-4 py-1 pr-10 focus:outline-none focus:ring-2 focus:ring-[#E6911E]"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  onClick={() => setShowPassword((prev) => !prev)}
                  tabIndex={-1}
                >
                  {showPassword ? (
                    // أيقونة عين مفتوحة
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  ) : (
                    // أيقونة عين مغلقة
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.956 9.956 0 012.293-3.95M6.873 6.872A9.956 9.956 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.956 9.956 0 01-4.293 5.95M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3l18 18"
                      />
                    </svg>
                  )}
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-1">
                Use 8 or more characters with a mix of letters, numbers &
                symbols.
              </p>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                className="form-checkbox rounded border-gray-300 text-[#E6911E] focus:ring-[#E6911E]"
                required
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                I Accept the{" "}
                <Link to="#" className="text-[#E6911E] hover:underline">
                  Term
                </Link>
              </label>
            </div>
            <button
              type="submit"
              className="w-full mt-10 text-white bg-[#E6911E] hover:bg-[#cc7f15] font-bold rounded-lg text-base px-5 py-2 text-center transition-colors shadow-lg"
            >
              Sign Up
            </button>
            <p className="text-sm text-center text-gray-500">
              Already have an account?{" "}
              <Link to="/login" className="text-[#E6911E] hover:underline">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
