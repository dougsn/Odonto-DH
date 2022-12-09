import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../Components/Footer";
import Home from "../Components/Home";
import Navbar from "../Components/Navbar";
import Login from "../Components/Login";
import Detail from "../Components/Detail";

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
