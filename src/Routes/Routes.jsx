import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../Components/Footer";
import Home from "../pages/Home";
import Navbar from "../Components/Navbar";
import Login from "../pages/Login";
import Detail from "../pages/Detail";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
