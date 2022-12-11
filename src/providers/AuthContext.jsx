import { createContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import api from "../services/api"

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [ userData, setUserData ] = useState({});
  const [ dentista, setDentista ] = useState([]);
  const [ paciente, setPaciente ] = useState([]);


  useEffect (() => {
      getDentista();  
    }, []);

    useEffect (() => {
      getPaciente();  
    }, []);

    async function getDentista() {
      try {
        const response = await api.get("/dentista");
        setDentista(response.data);
      } catch (error) {
        console.log("Error" + error);
      }  
    }

    async function getPaciente() {
      try {
        const response = await api.get("/paciente");
        // console.log(response.data);
        setPaciente(response.data);
      } catch (error) {
        console.log("Error" + error);
      }  
    }

  const navigate = useNavigate();
  const location = useLocation();

  function fillUsetDataState({ token }) {
    localStorage.setItem("@system_dentist", JSON.stringify({ token }));

    setUserData({ ...userData, token: token });
  }
  useEffect(() => {
    const response = localStorage.getItem("@system_dentist");

    let user;

    if (response) {
      user = JSON.parse(response);

      fillUsetDataState({
        token: user.token,
      });
      console.log(user);
      // navigate("/products");
      navigate(location?.pathname);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider value={{ userData, fillUsetDataState, dentista, paciente, getPaciente, getDentista }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
