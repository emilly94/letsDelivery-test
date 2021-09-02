import { useState, useEffect } from "react";
import api from "../services/Api";
import Loader from "react-loader-spinner";

function Dashboard() {
  const [results, setResults] = useState([]);

  //dados da API trazido pelo api.ts usando axios
  useEffect(() => {
    api
      .get()
      .then(function (response) {
        const json = response.data;
        //setar os dados da requisição em uma variavel para guardar os dados
        setResults(json.results);
      })
      .catch(function (error) {
        // tratar error
        console.log(error);
      });
  }, []);
  return (
    <div className="container">
      <h1>Dados Api Rick and Morty</h1>
      <ul className="list">
        {results.length !== 0 ? (
          results.map((resultado, index) => (
            //mostrar os dados trazido da API por aqui como imagem e nome(de inicio)
            <p>
              Key: {index} - Nome: {resultado.name}
            </p>
          ))
        ) : (
          <div>
            <Loader type="TailSpin" color="#00BFFF" height={100} width={100} />
          </div>
        )}
      </ul>
    </div>
  );
}
export default Dashboard;
