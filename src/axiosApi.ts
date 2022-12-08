import axios from "axios";

const axiosApi = axios.create({
  baseURL: 'https://ivanov-aleksey-js17-default-rtdb.europe-west1.firebasedatabase.app/pages'
});

export default axiosApi;