import React from "react";

const Button = ({ buttonTxt, buttonClr }) => {
  return (
    <div className={`rounded-lg w-14 h-8 text-center  ${buttonClr}`}>
        {buttonTxt}
    </div>
  )
};

export default Button;
