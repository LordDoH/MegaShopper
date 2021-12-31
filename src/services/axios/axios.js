import axios from 'axios';

const reqAxios = axios.create({
  baseURL: 'https://fakestoreapi.com',
});

export default reqAxios;
