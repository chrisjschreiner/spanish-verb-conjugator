import { useState, useEffect } from "react";
import axios from "axios";
import Moods from "./components/Moods";
import Conjugations from "./components/Conjugations";
import Definition from "./components/Definition";

const VerbApp = () => {
  const [verbsData, setVerbsData] = useState([]);
  const [searchVerb, setSearchVerb] = useState("");
  const [selectedMood, setSelectedMood] = useState("Choose a mood");
  const [definition, setDefinition] = useState("");
  const [conjugations, setConjugations] = useState([]);

  useEffect(() => {
    axios
      .get("src/data/verbsData.json")
      .then((res) => {
        setVerbsData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleSearchChange = (e) => {
    setSearchVerb(e.target.value);
  };

  const handleSearch = () => {
    const filteredVerbs = verbsData.filter(
      (verb) =>
        verb.infinitive.startsWith(searchVerb.toLowerCase()) &&
        verb.mood === selectedMood
    );
    if (searchVerb.trim().length !== 0) setConjugations(filteredVerbs);
    setDefinition(getDefinition());
  };

  const findInVerbs = (key) => {
    for (let i = 0; i < verbsData.length; i++) {
      if (verbsData[i].infinitive === searchVerb) {
        return verbsData[i][key];
      }
    }
  };

  const getDefinition = () => {
    return findInVerbs("definition");
  };

  const handleMoodChange = (e) => {
    setSelectedMood(e.target.value);
  };

  return (
    <div className="container mx-auto max-w-screen-md px-8 pt-16">
      <h1 className="text-center text-5xl font-semibold pb-14">
        Spanish Verb Conjugator
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap">
          <input
            type="text"
            placeholder="Enter a verb"
            name="verb"
            value={searchVerb}
            onChange={handleSearchChange}
            className="w-full md:w-72 h-10 pl-3 mb-2 md:mr-2 rounded border-2 border-black focus:outline-none tracking-wider"
          />
          <Moods
            selectedMood={selectedMood}
            handleMoodChange={handleMoodChange}
          />
          <button
            className="w-full md:w-28 h-10 bg-black text-white rounded tracking-wider"
            placeholder="Enter a mood"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </form>
      <div className="">
        <Definition definition={definition} />
        <Conjugations conjugations={conjugations} />
      </div>
    </div>
  );
};

export default VerbApp;
