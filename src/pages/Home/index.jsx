import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
// import Card from "../Card";

import Card from "../../Components/Card";
import api from "../../services/api";

const Home = () => {
  const [dentista, setDentista] = useState([]);

  useEffect(() => {
    getDentistas();
    //Nesse useEffect, deverá ser obtido todos os dentistas da API
    //Armazena-los em um estado para posteriormente fazer um map
    //Usando o componente <Card />
  }, []);

  async function getDentistas() {
    try {
      const response = await api.get("/dentista");
      console.log(response.data);
      setDentista(response.data);
    } catch (error) {
      console.log("Error" + error);
    }
  }

  return (
    <>
      <h1>Home</h1>
      <div className="card-grid container">
        {dentista.map((dentista) => (
          <Link key={dentista.matricula} to={`/dentist/${dentista.matricula}`}>
            <Card
              key={dentista.matricula}
              nome={dentista.nome}
              sobrenome={dentista.sobrenome}
              usuario={dentista.usuario.username}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
