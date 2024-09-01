import React from "react";

const FlowingText = ({ text, isBold }) => {
  return (
    <div className="w-full overflow-hidden whitespace-nowrap">
      <div
        className="inline-block animate-flowing text-4xl font-extrabold  uppercase "
        style={{ WebkitTextStroke: "1px black" }}
      >
        {/* {text} */}
        #Lost & Found #Lost & Found #Lost & Found
      </div>
    </div>
  );
};
    