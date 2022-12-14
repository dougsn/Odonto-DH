import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthContext";
import api from "../../services/api";
import { ToastContainer, toast, Zoom } from "react-toastify";
import { NavBarContext } from "../contexts/NavBarContext";

import styles from "./Form.module.css";

const LoginForm = () => {
  const [name, setUser] = useState("dentistaAdmin");
  const [password, setPassword] = useState("admin123");

  const navigate = useNavigate();
  const { fillUsetDataState, setIsLogado } = useContext(AuthContext);
  const { contextIsLight } = useContext(NavBarContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    auth();
  };

  async function auth() {
    try {
      const response = await api.post("/auth", {
        username: name,
        password: password,
      });
      toast("Usuário logado com sucesso !", {
        type: "success",
        autoClose: 1000,
        transition: Zoom,
      });
      fillUsetDataState({
        token: response.data.token,
      });
      setIsLogado(true);

      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } catch (erro) {
      toast.error("Verifique suas informações novamente", {
        autoClose: 2000,
        transition: Zoom,
      });
    }
  }

  return (
    <>
      <div
        className={`text-center container ${
          contextIsLight ? styles.card : styles.cardDark
        }`}
      >
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
            <button
              className="btn btn-primary"
              type="submit"
              disabled={name.length < 5 ? true : false}
            >
              Send
            </button>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default LoginForm;
