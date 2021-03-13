import axios from 'axios';

export default axios.create({
  baseURL: 'https://c-le-bouquet.herokuapp.com',
  timeout: 20000,
});