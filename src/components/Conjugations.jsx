const Conjugations = ({ conjugations }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-4 gap-x-8 gap-y-4">
      {conjugations?.map((infinitive, index) => (
        <div className="mb-4 mr-2" key={index}>
          <h2 className="text-lg font-bold mb-2">{infinitive.tense}</h2>
          <p>Yo: {infinitive.yo}</p>
          <p>Tú: {infinitive.tú}</p>
          <p>Él/Ella/Usted: {infinitive["él/ella/usted"]}</p>
          <p>Nosotros/as: {infinitive["nosotros/as"]}</p>
          <p>Vosotros/as: {infinitive["vosotros/as"]}</p>
          <p>Ellos/Ellas/Ustedes: {infinitive["ellos/ellas/ustedes"]}</p>
        </div>
      ))}
    </div>
  );
};

export default Conjugations;
