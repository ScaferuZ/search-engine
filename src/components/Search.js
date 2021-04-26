import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useHistory } from "react-router";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

// yang di dalam parameter itu namanya PROPS
function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    // supaya tidak terjadi refresh saat submit(?)
    e.preventDefault();

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    // saat menekan enter, maka akan otomatis pindah ke /search
    history.push("/search");
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
            className="input"
            value={input}
            // untuk nge-track apa yang diinput ke dalam input
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </div>
      {/* ini namanya ternary operator. sepemahaman endra, ini kurang lebih kaya if else, apabila hideButtons tidak di-trigger, maka dia akan menampilkan button */}
      {!hideButtons ? (
        <div className="flex space-x-5 h-10 font-Poppins text-sm mt-6 mb-72">
          {/* Search button */}
          <button type="submit" onClick={search} className="btn">
            {/* saat kita klik, maka dia akan menjalankan function search */}
            Search It
          </button>
          {/* randomize button */}
          <button className="btn">Randomize It</button>
        </div>
      ) : (
        <div className="flex space-x-5 h-10 font-Poppins text-sm mt-6 mb-72">
          {/* Search button */}
          <button type="submit" onClick={search} className="btnhidden">
            {/* saat kita klik, maka dia akan menjalankan function search */}
            Search It
          </button>
          {/* randomize button */}
          <button className="btnhidden">Randomize It</button>
        </div>
      )}
    </form>
  );
}

export default Search;
