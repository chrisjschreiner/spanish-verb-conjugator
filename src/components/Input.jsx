const Input = ({ searchVerb, handleSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Enter a verb"
      name="verb"
      value={searchVerb}
      onChange={handleSearchChange}
      className="bg-slate-100 placeholder:text-fuchsia-800 text-fuchsia-800 w-full md:w-72 h-10 pl-3 mb-2 md:mr-2 rounded focus:outline-none tracking-wider"
    />
  );
};

export default Input;
