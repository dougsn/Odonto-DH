import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import NavBarProvider from "../Components/contexts/NavBarContext";
import AuthProvider from "../providers/AuthContext";


const DentistaRouterTemplate = () => {
  return (
    <div>
      <AuthProvider>
        <NavBarProvider>
          <Navbar/>
          <Outlet />
          {/* {children} */}
          <Footer/>
        </NavBarProvider>
      </AuthProvider>
    </div>
  );
};

export default DentistaRouterTemplate;
