import React from "react";

const Button = ({ handleClick }) => {
  return (
    <button
      className="w-full md:w-28 h-10 bg-black text-white rounded tracking-wider"
      onClick={handleClick}
    >
      Search
    </button>
  );
};

export default Button;
