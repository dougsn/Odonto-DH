// import { Outlet } from "react-router-dom";
// import Footer from "./Components/Footer";
// import Navbar from "./Components/Navbar";
import AppRoutes from "./Routes/Routes";

function App() { 

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar a classe dark ou light */}
      <div className={`app light`}>
        <AppRoutes />
      </div>
    </>
  );
}

export default App;
