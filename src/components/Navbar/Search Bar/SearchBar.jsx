import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <div id="search-bar-container" className="flex items-center h-full w-full">
      <input
        type="search"
        id="search-input"
        className="flex-grow flex-1 p-1.5 rounded-l-md focus:outline-none"
      />
      <button
        id="search-btn"
        className="h-full py-1.5 px-2 bg-amazonYellow text-2xl rounded-r-md"
      >
        <AiOutlineSearch />
      </button>
    </div>
  );
};

export default SearchBar;
