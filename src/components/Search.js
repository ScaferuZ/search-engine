import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
function Search() {
  const [input, setInput] = useState("");

  const searchBar = (e) => {
    e.preventDefault();

    console.log("you yes");
  };
  return (
    <form className="flex flex-col justify-center items-center mt-6">
      {/* search box */}
      <div className="border-2 border-black border-opacity-20 rounded-full max-w-xs h-10 w-80 flex items-center">
        {/* search box's item */}
        <div className="py-2 pl-2 relative">
          {/* search icon */}
          <AiOutlineSearch className="h-5 w-5 absolute" />
          {/* input box */}
          <input
            className="ml-8 lg:w-64 w-52 outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </div>
      <div className="flex space-x-5 h-10 font-Poppins text-sm mt-6 mb-72">
        {/* Search button */}
        <button type="submit" onClick={searchBar} className="btn">
          Search It
        </button>
        {/* randomize button */}
        <button className="btn">Randomize It</button>
      </div>
    </form>
  );
}

export default Search;
