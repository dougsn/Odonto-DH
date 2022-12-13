import LoginForm from "../../Components/LoginForm";
import Navbar from "../../Components/Navbar";
import { AuthContext } from "../../providers/AuthContext";
import { useContext, useEffect } from "react";

const Login = () => {

  const {setIsLogado} = useContext(AuthContext);

  useEffect(()=>{
    setIsLogado(false);
  },[]);

  return (
    <>
        <Navbar />
          <h1>Login</h1>
          <LoginForm />
     </>
  );
};

export default Login;
