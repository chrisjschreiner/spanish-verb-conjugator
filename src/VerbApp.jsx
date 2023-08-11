import { useState, useEffect } from "react";
import axios from "axios";
import Input from "./components/Input";
import Select from "./components/Select";
import Button from "./components/Button";
import Definition from "./components/Definition";
import Conjugations from "./components/Conjugations";

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

  const handleClick = () => {
    const filteredVerbs = verbsData.filter(
      (verb) =>
        verb.infinitive === searchVerb.toLowerCase() &&
        verb.mood === selectedMood
    );
    if (searchVerb.trim().length !== 0) setConjugations(filteredVerbs);
    if (selectedMood !== "Choose a mood") setDefinition(getDefinition());
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
    <main className="container mx-auto max-w-screen-md px-8 pt-16">
      <h1 className="text-center text-4xl md:text-5xl font-semibold pb-14 text-cyan-950">
        Spanish Verb Conjugator
      </h1>
      <form onSubmit={handleSubmit}>
        <fieldset className="flex flex-wrap">
          <Input
            searchVerb={searchVerb}
            handleSearchChange={handleSearchChange}
          />
          <Select
            selectedMood={selectedMood}
            handleMoodChange={handleMoodChange}
          />
          <Button handleClick={handleClick} />
        </fieldset>
      </form>
      <Definition definition={definition} />
      <Conjugations conjugations={conjugations} />
    </main>
  );
};

export default VerbApp;
