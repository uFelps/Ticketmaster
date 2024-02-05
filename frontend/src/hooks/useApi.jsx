// src/hooks/useApi.jsx
import axios from "axios"; // Biblioteca pra fazer requisições HTTP.

const api = axios.create({
  // Atribuindo uma instância do axios na variavel api
  baseURL: import.meta.env.REACT_API_URL ?? "http://192.168.0.211:8080", // Lê a api do arquivo de environment
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
    const response = await api.get("/tours?size=30");
    return response.data;
  },

  buscarTour: async (tour) => {
    const response = await api.get(`/tours/${tour}`);
    return response.data;
  },

  buscarShowsDaTour: async (id) => {
    const response = await api.get(`/tours/${id}/shows`);
    return response.data.content;
  },

  buscarPorCategoria: async (categoria) => {
    const response = await api.get(`/tours/buscarPorCategoria/${categoria}`);
    return response.data;
  },

  buscarCidades: async () => {
    const response = await api.get("/cidades");
    return response.data;
  },

  buscarShowsPorCidade: async (cidade) => {
    const response = await api.get(
      `/shows?cidade=${String(cidade).replace(" ", "_")}&size=4`
    );
    return response.data;
  },

  buscarShowPorId: async (id) => {
    const response = await api.get(`/shows/${id}`);
    return response.data;
  },

  buscarSetoresPorEstadio: async (estadio) => {
    const response = await api.get(`/espaco/${estadio}/setores`);
    return response.data;
  },

  salvarItensCarrinho: async (data, email, token) => {
    const response = await api.post(`/carrinho/${email}`, data, {
      headers: {
        Authorization: token,
      },
    });
    return response;
  },

  buscarCarrinho: async (email, token) => {
    const response = await api.get(`/carrinho/${email}`, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  },

  deletarItemDoCarrinho: async (id, token) => {
    const response = await api.delete(`/carrinho/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    return response;
  },

  finalizarPagamento: async (data, email, token) => {
    const response = await api.post(
      `/carrinho/finalizarCompra/${email}`,
      data,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return response;
  },

  buscarMeusCartoes: async (token) => {
    const response = await api.get(`/meusCartoes`, {
      headers: {
        Authorization: token,
      },
    });

    return response;
  },
});
