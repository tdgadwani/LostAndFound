import React from "react";

const FlowingText = ({ text, isBold }) => {
  return (
    <div className="w-full overflow-hidden whitespace-nowrap ">
      <div
        className={`inline-block animate-flowing text-4xl ${
          isBold
            ? "font-extrabold text-black" // For bold and filled text
            : "font-bold text-transparent" // For outlined text
        } uppercase`}
        style={isBold ? {} : { WebkitTextStroke: "1px black" }} // Apply stroke only for non-bold text
      >
        {/* Repeating the text multiple times to create the loop */}
        {`${text} ${text} ${text} ${text} ${text} ${text}`}
      </div>
    </div>
  );
};

export default FlowingText;
