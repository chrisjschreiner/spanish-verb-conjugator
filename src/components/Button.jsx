const Button = ({ handleClick }) => {
  return (
    <button
      className="w-full md:w-28 h-10 bg-fuchsia-900 hover:bg-fuchsia-800 text-white rounded tracking-wider"
      onClick={handleClick}
    >
      Search
    </button>
  );
};

export default Button;
