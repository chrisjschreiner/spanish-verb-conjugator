import { useState, useEffect } from "react";

const Dropdown = ({ verbsData, searchVerb, setSearchVerb, open, setOpen }) => {
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
    <>
      {open ? (
        <ul className="absolute w-full top-12 left-13">
          {filteredResults.map((result, index) => (
            <li
              className="first:rounded-t-lg last:rounded-b-lg bg-slate-100 text-fuchsia-800 hover:bg-slate-300 md:w-72 pl-3"
              onClick={() => handleResultClick(result)}
              key={index}
            >
              {result}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default Dropdown;
