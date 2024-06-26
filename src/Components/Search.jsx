import React from "react";

function Search() {
  return (
    <div className="search ">
      <div className="searchForm flex justify-center ">
        <input
          type="text"
          className="text-slate-400 outline-none m-1 py-1 px-3 bg-gray-900 rounded-xl placeholder:text-slate-600 border-b-2 border-blue-500 
          w-20 md:w-30 lg:w-60 xl:w-full" // Adjusting width based on screen sizes
          placeholder="Search User"
        />
      </div>
    </div>
  );
}

export default Search;
