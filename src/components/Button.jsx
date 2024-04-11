import React from "react";

const Button = ({ buttonTxt, buttonClr }) => {
  return (
    <div className={`rounded-lg w-14 h-8 text-center  ${buttonClr}`}>
      <button type="submit" className="text-white"> {buttonTxt}</button>
    </div>
  );
};

export default Button;
