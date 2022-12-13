import LoginForm from "../../Components/LoginForm";
import Navbar from "../../Components/Navbar";
import NavBarProvider from "../../Components/contexts/NavBarContext";
import { AuthContext } from "../../providers/AuthContext";
import { useContext, useEffect } from "react";

const Login = () => {

  const {setIsLogado} = useContext(AuthContext);

  useEffect(()=>{
    setIsLogado(false);
  },[]);

  return (
      <NavBarProvider>
        <Navbar />
        <h1>Login</h1>
        <LoginForm />
      </NavBarProvider>
  );
};

export default Login;
