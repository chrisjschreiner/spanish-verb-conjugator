import React from "react";

const Input = ({ searchVerb, handleSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Enter a verb"
      name="verb"
      value={searchVerb}
      onChange={handleSearchChange}
      className="w-full md:w-72 h-10 pl-3 mb-2 md:mr-2 rounded border-2 border-black focus:outline-none tracking-wider"
    />
  );
};

export default Input;
