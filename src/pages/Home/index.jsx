import { useContext } from "react";
import { Link } from "react-router-dom";

import Card from "../../Components/Card";
import { AuthContext } from "../../providers/AuthContext";

const Home = () => {
  const { dentista } = useContext(AuthContext);

  return (
    <>
      <h1>Home</h1>
      <div className="card-grid container" data-testId="hometest">
        {dentista.map((dentista) => (
          <Link key={dentista.matricula} to={`/dentist/${dentista.matricula}`}>
            <Card
              key={dentista.matricula}
              nome={dentista.nome}
              sobrenome={dentista.sobrenome}
              usuario={dentista.usuario.username}
              data-testId="dentista-card"
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
