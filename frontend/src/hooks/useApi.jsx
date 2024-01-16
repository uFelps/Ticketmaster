// src/hooks/useApi.jsx
import axios from "axios"; // Biblioteca pra fazer requisições HTTP.

const api = axios.create({
  // Atribuindo uma instância do axios na variavel api
  baseURL: import.meta.env.BASE_URL ?? "http://localhost:8080", // Lê a api do arquivo de environment
});

export const useApi = () => ({
  // Hook que retorna um obj com as funções que serão utilizadas
  validateToken: async (token) => {
    return {
      user: {
        id: 1,
        name: "Etec de Itaquera",
        email: "etecdeitaquera@etec.sp.gov.br",
      },
    }; // Resposta fake para testar o funcionamento da aplicação

    // Realiza uma requisição para o endpoint /validate e envia um parâmetro token
    const response = await api.post("/validate", { token });
    return response.data;
  },

  signin: async (email, senha) => {
    /*return {
      // Resposta fake para testar o funcionamento da aplicação
      user: {
        id: 1,
        name: 'Etec de Itaquera',
        email: 'etecdeitaquera@etec.sp.gov.br',
        password: 'itaquera123',
      },
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJza2lsbG9vLWFwaSIsInN1YiI6ImV0ZWNkZWl0YXF1ZXJhQGV0ZWMuc3AuZ292LmJyIiwiSWQiOjF9.uRw8BhPDNORi0ET7Vnd3914eyZ39FvK2iwLBEc4KkHg',
    };*/

    // Realiza uma requisição para o endpoint /sigin e envia os parâmetros email e password
    const response = await api.post("/auth/login", { email, senha });
    console.log(response.data);
    return response.data;
  },
});
