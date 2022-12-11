import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import NavBarProvider from "../Components/contexts/NavBarContext";


const DentistaRouterTemplate = () => {
  return (
    <div>
      <NavBarProvider>
        <Navbar/>
        <Outlet />
        {/* {children} */}
        <Footer/>
      </NavBarProvider>
    </div>
  );
};

export default DentistaRouterTemplate;
