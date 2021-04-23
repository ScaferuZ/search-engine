import React, { useState } from "react";

function Search() {
  return (
    <div className="flex flex-col justify-center items-center mt-6">
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
          <input className="ml-8 lg:w-64 w-52 outline-none"></input>
        </div>
      </div>
      <div className="flex space-x-5 h-10 font-Poppins text-sm mt-6 mb-72">
        {/* Search button */}
        <button className="btn">
          {/*saat lu ngeklik ini button, dia akan menjalan kan search */}
          Search It
        </button>
        {/* randomize button */}
        <button className="btn">Randomize It</button>
      </div>
    </div>
  );
}

export default Search;
