import axios from 'axios';

const api = axios.create({
  baseURL: 'https://spring-app-eventos-mongo.herokuapp.com',
});

export default api;
