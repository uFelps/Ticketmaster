import { Component, useContext } from "react";
import { LoadContext } from "./context/LoadContext";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { isAuthenticate } from "./context/Auth/auth";
import Home from "./Pages/Home/Home";
import AuthPage from "./Pages/Auth/AuthPage";
import Shows from "./Pages/HomeShows/Shows";
import Tour from "./Pages/Tour/Tour";
import Show from "./Pages/Show/Show";
import Carrinho from "./Pages/Carrinho/Carrinho";
import CarrinhoPagamento from "./Pages/CarrinhoPagamento/CarrinhoPagamento";
import MeusIngressos from "./Pages/MeusIngressos/MeusIngressos";
import Perfil from "./Pages/Perfil/Perfil";
import Loader from "./components/utils/Loader";

const PrivateRoute = ({ children }) => {
  return isAuthenticate() ? (
    <>
      <>{children}</>
    </>
  ) : (
    <Navigate to={"/auth/login"} />
  );
};

function RoutesApp() {
  const loader = useContext(LoadContext);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/shows" element={<Shows />} />
          <Route
            path="/auth/signup"
            element={<AuthPage typeAuth={"signup"} />}
          />
          <Route path="/auth/login" element={<AuthPage typeAuth={"login"} />} />
          <Route path="/tours/:nome" element={<Tour />} />

          {/* ROTAS PRIVADAS VVVV */}
          <Route
            path="/perfil"
            element={
              <PrivateRoute>
                <Perfil />
              </PrivateRoute>
            }
          />
          <Route
            path="/tours/:nome/:cidade"
            element={
              <PrivateRoute>
                <Show />
              </PrivateRoute>
            }
          />
          <Route
            path="/carrinho"
            element={
              <PrivateRoute>
                <Carrinho />
              </PrivateRoute>
            }
          />
          <Route
            path="/carrinho/pagamento"
            element={
              <PrivateRoute>
                <CarrinhoPagamento />
              </PrivateRoute>
            }
          />
          <Route
            path="/meusingressos"
            element={
              <PrivateRoute>
                <MeusIngressos />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
      {loader.isLoading && <Loader />}
    </>
  );
}

export default RoutesApp;
