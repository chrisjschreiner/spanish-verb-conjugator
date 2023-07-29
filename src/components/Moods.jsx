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
        className="w-full md:w-72 md:mr-2 h-10 mb-2 border-2 border-black focus:outline-none rounded pl-2 tracking-wide"
        id="mood"
        name="mood"
        value={selectedMood}
        onChange={handleMoodChange}
      >
        <option disabled hidden>
          Choose a mood
        </option>
        {moods.map((mood, index) => (
          <option key={index}>{mood}</option>
        ))}
      </select>
    </>
  );
};

export default Moods;
