const Button = ({ handleClick }) => {
  return (
    <button
      className="w-full md:w-28 h-10 bg-slate-200 hover:bg-fuchsia-800 text-fuchsia-800 rounded tracking-wider"
      onClick={handleClick}
    >
      Search
    </button>
  );
};

export default Button;
