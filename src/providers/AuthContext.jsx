import { createContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();
  const location = useLocation();

  function fillUsetDataState({ token }) {
    localStorage.setItem("@system_product", JSON.stringify({ token }));

    setUserData({ ...userData, token: token });
  }
  useEffect(() => {
    const response = localStorage.getItem("@system_product");

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
    <AuthContext.Provider value={{ userData, fillUsetDataState }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
