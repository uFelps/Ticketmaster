import React, { useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { useApi } from "../hooks/useApi";

export const AuthProvider = ({ children }) => {
  // O estado user armazenará as informações do usuário autenticado
  const [user, setUser] = React.useState(false);
  const [email, setEmail] = React.useState(false);

  // Obtem um objeto com as funções da API de autenticação
  const api = useApi();

  // Armazenar o token de autenticação LocalStorage
  const setToken = (token) => localStorage.setItem("authToken", token);

  useEffect(() => {
    // Função que validará o token de autenticação
    const validateToken = async () => {
      // Obtém o token armazenado no localStorage
      const storageData = localStorage.getItem("authToken");

      if (storageData) {
        // Realiza uma requisição e envia os parâmetro os valores do LocalStorage como parametro
        const data = await api.validateToken(storageData);

        if (data && data.nome) {
          // Se o usuario já existir
          setUser(data.nome);
          setEmail(data.email);
        } else {
          setUser(null);
          setToken(null);
        }
      }
    };

    validateToken(); // Chamada da função
  }, []);

  const login = async (data) => {
    // Realiza uma requisição e envia os parâmetro os valores dos estados como parametro
    const dados = await api.login(data);

    // Se o usuario e o token existirem (Se ambos existirem, significa que a autenticação foi bem-sucedida)
    if (dados.nome && dados.token) {
      // Se o email e a senha do usuario forem iguais
      if (dados.email === data.email) {
        localStorage.setItem("userName", dados.nome);
        localStorage.setItem("email", dados.email);
        setToken(dados.token);

        setUser(dados.nome);
        setEmail(dados.email);
        return dados;
      }

      return null;
    }

    return null; // Autenficação má sucedida
  };

  const signup = async (data) => {
    const dados = await api.signup(data);

    if (dados.nome && dados.token) {
      if (dados.email === data.email) {
        localStorage.setItem("userName", data.nome);
        localStorage.setItem("email", dados.email);
        setToken(dados.token);
        setEmail(dados.email);
        setUser(dados.nome);
        return dados;
      }
      return null;
    }
    return null;
  };

  const signout = async () => {
    setUser(false);
    setEmail(false);
    setToken(false);
    localStorage.setItem("userName", null);
    localStorage.setItem("email", null);
    localStorage.setItem("token", null);
  };

  return (
    <AuthContext.Provider
      value={{ user, email, setEmail, login, signout, signup }}
    >
      {children}
    </AuthContext.Provider>
  );
};
