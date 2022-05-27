import axios from 'axios';

export const authDB = axios.create({
  baseURL: 'http://localhost:8080/api/auth',
});
