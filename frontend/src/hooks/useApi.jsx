// src/hooks/useApi.jsx
import axios from "axios"; // Biblioteca pra fazer requisições HTTP.

const api = axios.create({
  // Atribuindo uma instância do axios na variavel api
  baseURL: import.meta.env.REACT_API_URL ?? "http://192.168.100.245:8080", // Lê a api do arquivo de environment
});

export const useApi = () => ({
  // Hook que retorna um obj com as funções que serão utilizadas
  validateToken: async (token) => {
    // Realiza uma requisição para o endpoint /validate e envia um parâmetro token

    try {
      const response = await api.post("/auth/validate", { token });
      return response.data;
    } catch (e) {
      return false;
    }
  },

  login: async (data) => {
    // Realiza uma requisição para o endpoint /sigin e envia os parâmetros email e password
    const response = await api.post("/auth/login", data);
    return response.data;
  },

  signup: async (data) => {
    const response = await api.post("/auth/signup", data);
    return response.data;
  },

  findEmail: async (data) => {
    const response = await api.post("/emailDisponivel", { email: data });
    return response.data;
  },

  //TOURS
  buscarTours: async () => {
    const response = await api.get("/tours");
    return response.data;
  },
});