import axios from 'axios';

export const hamburgerDB = axios.create({
  baseURL: 'https://strapi-food-app-rn.herokuapp.com',
});
