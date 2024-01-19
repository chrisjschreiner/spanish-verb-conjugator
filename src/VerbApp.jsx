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
  const [open, setOpen] = useState("true");

  useEffect(() => {
    axios
      .get("verbsData.json")
      .then((res) => {
        setVerbsData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearchChange = (e) => {
    setSearchVerb(e.target.value);
    // setOpen("true");
  };

  const handleClick = () => {
    const filteredVerbs = verbsData.filter(
      (verb) =>
        verb.infinitive === searchVerb.toLowerCase() &&
        verb.mood === selectedMood
    );
    if (searchVerb.trim().length !== 0) setConjugations(filteredVerbs);
    if (selectedMood !== "Choose a mood") setDefinition(getDefinition());
    console.log(filteredVerbs);
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
      <h1 className="text-center text-4xl md:text-5xl font-medium pb-14 text-slate-100">
        Verbzy
      </h1>
      <form onSubmit={handleSubmit}>
        <fieldset className="flex flex-wrap relative">
          <Input
            searchVerb={searchVerb}
            setSearchVerb={setSearchVerb}
            verbsData={verbsData}
            handleSearchChange={handleSearchChange}
            open={open}
            setOpen={setOpen}
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
