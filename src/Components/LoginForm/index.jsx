import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthContext";
import api from "../../services/api";

import styles from "./Form.module.css";

const LoginForm = () => {
  const [name, setUser] = useState("dentistaAdmin");
  const [password, setPassword] = useState("admin123");

  const navigate = useNavigate();
  const { fillUsetDataState } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    auth();

    //Nesse handlesubmit você deverá usar o preventDefault,
    //enviar os dados do formulário e enviá-los no corpo da requisição
    //para a rota da api que faz o login /auth
    //lembre-se que essa rota vai retornar um Bearer Token e o mesmo deve ser salvo
    //no localstorage para ser usado em chamadas futuras
    //Com tudo ocorrendo corretamente, o usuário deve ser redirecionado a página principal,com react-router
    //Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro
  };

  async function auth() {
    try {
      const response = await api.post("/auth", {
        username: name,
        password: password,
      });
      fillUsetDataState({
        token: response.data.token,
      });
      console.log(response);
      navigate("/home");

      
    } catch (erro) {
      alert("Não foi possível logar no sistema" + erro);
    }
  }

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div className={`text-center card container ${styles.card}`}>
        <div className={`card-body ${styles.CardBody}`}>
          <form onSubmit={handleSubmit}>
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Login"
              name="login"
              required
              value={name}
              onChange={(e) => setUser(e.target.value)}
            />
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn btn-primary" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
