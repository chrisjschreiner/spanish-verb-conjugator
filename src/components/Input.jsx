import { useState, useEffect } from "react";

const Input = ({
  searchVerb,
  setSearchVerb,
  verbsData,
  handleSearchChange,
  open,
  setOpen,
}) => {
  const [filteredResults, setFilteredResults] = useState([]);
  useEffect(() => {
    const uniqueResults = new Set();

    if (searchVerb) {
      verbsData.forEach((item) => {
        if (
          item.infinitive.toLowerCase().startsWith(searchVerb.toLowerCase())
        ) {
          uniqueResults.add(item.infinitive);
        }
      });

      setFilteredResults(Array.from(uniqueResults).slice(0, 5));
    } else {
      setFilteredResults([]);
    }
  }, [searchVerb]);

  const handleResultClick = (result) => {
    setSearchVerb(result);
    setOpen(!open);
    // Removing below doesn't seem to affect functionality
    setFilteredResults([]);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Enter a verb"
        value={searchVerb}
        onChange={handleSearchChange}
        className="bg-slate-100 placeholder:text-fuchsia-800 text-fuchsia-800 w-full md:w-72 h-10 pl-3 mb-2 md:mr-2 rounded focus:outline-none tracking-wider"
      />
      {open ? (
        <ul className="absolute">
          {filteredResults.map((result, index) => (
            <li
              className="bg-slate-100 text-fuchsia-800 hover:bg-slate-300 w-full md:w-72 pl-3"
              onClick={() => handleResultClick(result)}
              key={index}
            >
              {result}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Input;
