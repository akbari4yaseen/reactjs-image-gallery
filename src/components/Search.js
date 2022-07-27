import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
const Search = ({ searchText }) => {
  const [search, setSeach] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    searchText(search);
  };
  return (
    <div className="sm:w-sm lg:w-1/2  rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={onSubmit} className="m-2">
        <div className="flex items-center border-b-2 border-teal-500 py-2">
          <input
            value={search}
            onChange={(e) => setSeach(e.target.value)}
            className="appearance-none text-base bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight outline-none"
            type="text"
            placeholder="Type here to seach"
            required
          />
          <button
            className="flex flex-shrink-0 items-center justify-between bg-teal-500 hover:bg-teal-700 w-24 transition-colors text-base font-semibold text-white py-2 px-2 rounded"
            type="submit"
          >
            <FaSearch /> <span>Search</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
