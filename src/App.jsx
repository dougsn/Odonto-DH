// import { Outlet } from "react-router-dom";
// import Footer from "./Components/Footer";
// import Navbar from "./Components/Navbar";
import AppRoutes from "./Routes/Routes";
import {NavBarContext} from "./Components/contexts/NavBarContext";
import { useContext } from "react";

function App() { 

  const{ contextIsLight } = useContext(NavBarContext);

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar a classe dark ou light */}
      <div className={contextIsLight ? `app light` : `app dark`}>
        <AppRoutes />
      </div>
    </>
  );
}

export default App;
