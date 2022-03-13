import axios from 'axios';

const axiosClient = axios.create({
  baseURL: "http://localhost:5093/api/" 
});

export default axiosClient;
