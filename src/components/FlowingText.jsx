import React from "react";

const FlowingText = ({ text, isBold }) => {
  return (
    <div className="w-full overflow-hidden whitespace-nowrap ">
      <div
        className={`animate-scroll inline-block  text-4xl ${
          isBold
            ? "font-extrabold text-black" 
            : "font-bold text-transparent" 
        } uppercase`}
        style={isBold ? {} : { WebkitTextStroke: "1px black" }} 
      >
        {`${text} ${text} ${text}`}
      </div>
    </div>
  );
};

export default FlowingText;
