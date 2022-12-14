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
      <div className={contextIsLight ? `app light` : `app dark`}>
        <AppRoutes />
      </div>
    </>
  );
}

export default App;
