const Conjugations = ({ conjugations }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-x-8 gap-y-4">
      {conjugations?.map((infinitive, index) => (
        <div className="mb-4" key={index}>
          <h2 className="text-lg font-medium mb-2 text-slate-100">
            {infinitive.tense}
          </h2>
          <table
            key={index}
            className="w-full rounded shadow-lg bg-slate-100 table-auto"
          >
            <thead className="text-left">
              <tr>
                <th className="text-fuchsia-900 font-medium rounded-l bg-slate-400/50 text-left px-5 py-2">
                  Pronoun
                </th>
                <th className="text-fuchsia-900 font-medium rounded-r bg-slate-400/50 text-left px-5 py-2">
                  Conjugation
                </th>
              </tr>
            </thead>
            <tbody className="text-fuchsia-700">
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
    </section>
  );
};

export default Conjugations;
