const Conjugations = ({ conjugations }) => {
  return (
    <div className="mt-4">
      {conjugations?.map((infinitive, index) => (
        <div className="mb-4" key={index}>
          <h2 className="text-lg font-bold">{infinitive.tense}</h2>
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
