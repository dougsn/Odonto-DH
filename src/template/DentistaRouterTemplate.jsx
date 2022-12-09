import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


const DentistaRouterTemplate = () => {
  return (
    <div>
      <Navbar/>
      <Outlet />
      {/* {children} */}
      <Footer/>
    </div>
  );
};

export default DentistaRouterTemplate;
