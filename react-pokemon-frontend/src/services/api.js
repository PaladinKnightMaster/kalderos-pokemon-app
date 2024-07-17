import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const fetchSummary = async () => {
  const response = await axios.get(`${API_URL}/summary`);
  return response.data;
};

export const fetchPokemon = async (page = 1, pageSize = 25) => {
  const response = await axios.get(`${API_URL}?page=${page}&pageSize=${pageSize}`);
  return response.data;
};

export const fetchPokemonDetail = async (number) => {
  const response = await axios.get(`${API_URL}/${number}`);
  return response.data;
};

export const fetchPokemonDetailByName = async (name) => {
  const response = await axios.get(`${API_URL}/name/${name}`);
  return response.data;
};