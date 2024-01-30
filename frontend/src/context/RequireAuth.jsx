// src/context/RequireAuth.jsx
import React, { useEffect } from "react";
import { AuthContext } from "./AuthContext";
import Login from "../Pages/Auth/Login";
import { Navigate, useNavigate } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const navigate = useNavigate();
  // Atribui as informações sobre a autenticação do usuário em uma variavel
  const auth = React.useContext(AuthContext);

  useEffect(() => {
    console.log(auth);
    if (!auth.user) {
      // Verificar se o usuário está autenticado
      return navigate("/auth/login"); // Renderiza o componente Login
    }
  }, [auth]);

  return children; // Renderiza o componente Membros
};
