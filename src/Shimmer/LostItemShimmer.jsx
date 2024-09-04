import React from "react";

const LostItemShimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-12 mb-10">
      {Array(17).fill("").map((_, i) => (
        <div
          key={i}
          className="bg-gray-200 rounded-xl relative
                     h-60 w-60
                     sm:h-60 sm:w-60
                     md:h-52 md:w-52
                     lg:h-60 lg:w-60
                     xl:h-56 xl:w-56
                     2xl:h-60 2xl:w-60
                     768px:h-48 768px:w-48
                     1024px:h-44 1024px:w-44"
        >
          <div className="bg-gray-300 h-4/5 rounded-t-xl relative flex justify-center items-center">
            <div className="loader w-8 h-8 border-4 border-t-4 border-t-gray-200 border-gray-400 rounded-full animate-spin"></div>
          </div>
          <div className="p-3">
            <div className="bg-gray-300 h-3 w-3/4 rounded-lg"></div>
            <div className="bg-gray-300 h-3 w-full mt-2 rounded-lg mb-1"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LostItemShimmer;
