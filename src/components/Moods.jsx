const Moods = ({ selectedMood, handleMoodChange }) => {
  const moods = [
    "Indicativo",
    "Subjuntivo",
    "Imperativo Afirmativo",
    "Imperativo Negativo",
  ];

  return (
    <>
      <select
        className="w-full h-10 mt-4 md:w-80 md:mt-0 border-2 border-black focus:outline-none rounded pl-2 tracking-wider"
        id="mood"
        name="mood"
        value={selectedMood}
        onChange={handleMoodChange}
      >
        {moods.map((mood, index) => (
          <option key={index}>{mood}</option>
        ))}
      </select>
    </>
  );
};

export default Moods;
