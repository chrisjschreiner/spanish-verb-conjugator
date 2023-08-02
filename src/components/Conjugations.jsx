const Conjugations = ({ conjugations }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-x-8 gap-y-4">
      {conjugations?.map((infinitive, index) => (
        <div className="mb-4" key={index}>
          <h2 className="text-lg font-bold mb-2">{infinitive.tense}</h2>
          <table
            key={index}
            className="w-full rounded shadow-lg bg-white table-auto"
          >
            <thead className="text-left">
              <tr>
                <th className="text-gray-700 font-medium rounded-l bg-blue-100 text-left px-6 py-2">
                  Pronoun
                </th>
                <th className="text-gray-700 font-medium rounded-r bg-blue-100 text-left px-6 py-2">
                  Conjugation
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-2">Yo</td>
                <td className="px-6 py-2">{infinitive.yo}</td>
              </tr>
              <tr>
                <td className="px-6 py-2">Tú</td>
                <td className="px-6 py-2">{infinitive.tú}</td>
              </tr>
              <tr>
                <td className="px-6 py-2">Él/Ella/Ud.</td>
                <td className="px-6 py-2">{infinitive["él/ella/usted"]}</td>
              </tr>
              <tr>
                <td className="px-6 py-2">Nostros/as</td>
                <td className="px-6 py-2">{infinitive["nosotros/as"]}</td>
              </tr>
              <tr>
                <td className="px-6 py-2">Vosotros/as</td>
                <td className="px-6 py-2">{infinitive["vosotros/as"]}</td>
              </tr>
              <tr>
                <td className="px-6 pt-2 pb-4">Ellos/Ellas/Uds.</td>
                <td className="px-6 pt-2 pb-4">
                  {infinitive["ellos/ellas/ustedes"]}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Conjugations;
