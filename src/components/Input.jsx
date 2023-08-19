import Dropdown from "./Dropdown";
const Input = ({
  verbsData,
  searchVerb,
  setSearchVerb,
  handleSearchChange,
  open,
  setOpen,
}) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Enter a verb"
        value={searchVerb}
        onChange={handleSearchChange}
        className="bg-slate-100 placeholder:text-fuchsia-800 text-fuchsia-800 w-full md:w-72 h-10 pl-3 mb-2 md:mr-2 rounded focus:outline-none tracking-wider"
      />
      <Dropdown
        verbsData={verbsData}
        searchVerb={searchVerb}
        setSearchVerb={setSearchVerb}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
};

export default Input;
