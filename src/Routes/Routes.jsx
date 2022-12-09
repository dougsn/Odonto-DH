import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Detail from "../pages/Detail";
import AuthProvider, { AuthContext } from "../providers/AuthContext";
import { useContext } from "react";
import DentistaRouterTemplate from "../template/DentistaRouterTemplate";

const PrivateRoute = ({ children }) => {
  const { userData } = useContext(AuthContext);
  return userData.token ? children : <Navigate to={"/"} />;
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/auth" element={<Login />} />
          <Route path="/login" element={<Login />} />

          <Route path="/home" element={<DentistaRouterTemplate />}>
            <Route
              path=""
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
          </Route>

          <Route path="/detail" element={<DentistaRouterTemplate />}>
            <Route
              path=""
              element={
                <PrivateRoute>
                  <Detail />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
