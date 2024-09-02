import React from "react";

const LostAndFoundBanner = () => {
  return (
    <div className="relative overflow-hidden whitespace-nowrap bg-white">
      {/* Two rows for the text with infinite scroll */}
      <div className="flex space-x-4 animate-marquee">
        <span className="text-2xl md:text-4xl lg:text-5xl font-extrabold">
          # LOST & FOUND
        </span>
        <span className="text-2xl md:text-4xl lg:text-5xl font-extrabold">
          # LOST & FOUND
        </span>
        <span className="text-2xl md:text-4xl lg:text-5xl font-extrabold">
          # LOST & FOUND
        </span>
        {/* Repeat the text multiple times */}
      </div>
      <div className="flex space-x-4 animate-marquee absolute top-0 left-0">
        <span className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black to-black">
          # LOST & FOUND
        </span>
        <span className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black to-black">
          # LOST & FOUND
        </span>
        <span className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black to-black">
          # LOST & FOUND
        </span>
        {/* Repeat the text multiple times */}
      </div>
    </div>
  );
};

export default LostAndFoundBanner;
