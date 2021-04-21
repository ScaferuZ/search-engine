import React from "react";
// react-router-dom berguna untuk me-link sebuah komponen ke suatu page yang dituju
import { Link } from "react-router-dom";

function Navbar() {
  return (
    // navbar start
    <nav
      className="flex py-6 px-6 border-b-2 border-main space-x-6 font-Poppins text-sm"
      role="navigation"
    >
      <Link to="/" className="">
        {/* algobash logo */}
        <svg
          width="39"
          height="42"
          viewBox="0 0 39 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.86683 41.1951H7.68327C9.31631 41.1951 10.8464 40.3976 11.7818 39.059L37.3364 2.4876C37.8102 1.80944 37.2893 0.884256 36.4637 0.937848C30.5245 1.32338 25.0765 4.36888 21.6371 9.22616L1.2346 38.0393C0.296689 39.3639 1.24384 41.1951 2.86683 41.1951Z"
            fill="#273C75"
          />
          <path
            d="M30.9449 32.2855H34.0574C36.5177 32.2855 38.5122 34.28 38.5122 36.7403C38.5122 39.2006 36.5177 41.1951 34.0574 41.1951H14.2998L14.4338 40.9992C18.161 35.5464 24.34 32.2855 30.9449 32.2855Z"
            fill="#273C75"
          />
        </svg>
      </Link>
      {/* search box */}
      <div className="border-2 border-black border-opacity-20 rounded-full max-w-xs h-10 w-80 flex items-center">
        {/* search box's item */}
        <div className="py-2 pl-2 relative">
          {/* search icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 absolute"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          {/* input box */}
          <input
            type="text"
            className="ml-6 lg:w-64 w-52 outline-none"
            placeholder=""
          ></input>
        </div>
      </div>
      {/* randomize button */}
      <Link className="btn">Randomize</Link>
    </nav>
    // navbar end
  );
}

export default Navbar;
