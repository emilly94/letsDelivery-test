import axios from 'axios'

  const Api = axios.create({
    baseURL: "https://rickandmortyapi.com/api/character",
  });

export default Api;